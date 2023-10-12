(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_VA_08");
            this.set_titletext("배너 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"SUB_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_urlCnsolSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN_NM\">미 사용</Col><Col id=\"USE_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdIncYn", this);
            obj._setContents("<ColumnInfo><Column id=\"PRD_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_INC_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRD_INC_YN\">Y</Col><Col id=\"PRD_INC_YN_NM\">포함</Col></Row><Row><Col id=\"PRD_INC_YN_NM\">미포함</Col><Col id=\"PRD_INC_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_bnr","20","-30",null,"500","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab10",this.tab_bnr);
            obj.set_text("Tabpage1");
            this.tab_bnr.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","0","240",null,"32","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","0","334",null,"32","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","209",null,"32","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"160","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static04","0","178",null,"32","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","140","182",null,"24","100",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("5");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","0","20","130","160",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("6");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","140","34","127","134",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","271","30",null,"139","60",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","904","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","932","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","0","209","130","32",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("11");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","140","213","100","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","257","213","100","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static59","244","213","9","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","271",null,"64","0",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_url","0","271","130","64",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("16");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Radio("rdo_mainUrlCnsolSprCd","140","275","300","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("17");
            obj.set_direction("vertical");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Edit("edt_mainUrl","140","306",null,"24","10",null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("18");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_useYn","0","334","130","32",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("19");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_img","0","240","130","32",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("20");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_mainImgSize","659","244","300","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("21");
            obj.set_text("이미지사이즈 : 2,560 X 390");
            obj.set_textAlign("left");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","140","338","150","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("22");
            obj.set_direction("vertical");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_ttl","0","178","130","32",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("23");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Edit("edt_mainAtflNm","140","244","420","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Button("btn_mainImgAdd","564","244","60","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("25");
            obj.set_text("파일찾기");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","865","182","88","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("26");
            obj.set_text("(0 / 200 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new CheckBox("chk_noEdnDt","371","212","90","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("27");
            obj.set_text("종료일 없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Button("btn_mainImgDelete","btn_mainImgAdd:4","244","24","24",null,null,null,null,null,null,this.tab_bnr.tab10.form);
            obj.set_taborder("28");
            obj.set_text("X");
            obj.set_visible("true");
            this.tab_bnr.tab10.addChild(obj.name, obj);

            obj = new Tabpage("tab20",this.tab_bnr);
            obj.set_text("Tabpage2");
            this.tab_bnr.addChild(obj.name, obj);

            obj = new Static("Static04_02","0","366",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","0","397",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","179",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","0","272",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","241",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"160","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static04","0","210",null,"32","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","140","214",null,"24","100",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("7");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","0","20","130","160",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("8");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","140","34","127","134",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","271","30",null,"139","60",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","904","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","932","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","0","241","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("13");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","140","245","100","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","257","245","100","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static59","244","245","9","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","303",null,"64","0",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_url","0","303","130","64",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("18");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Radio("rdo_mainUrlCnsolSprCd","140","307","300","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("19");
            obj.set_direction("vertical");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Edit("edt_mainUrl","140","338",null,"24","10",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("20");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_img","0","272","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("21");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_mainImgSize","659","276","300","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("22");
            obj.set_text("이미지사이즈 : 2,560 x 390");
            obj.set_textAlign("left");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_ttl","0","210","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("23");
            obj.set_text("탭명");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Edit("edt_mainAtflNm","140","276","420","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Button("btn_mainImgAdd","564","276","60","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("25");
            obj.set_text("파일찾기");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","865","213","88","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("26");
            obj.set_text("(0 / 20 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_prdIncYn","0","179","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("27");
            obj.set_text("상품포함");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_useYn","0","397","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("28");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Radio("rdo_prdIncYn","140","184","150","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_prdIncYn");
            obj.set_codecolumn("PRD_INC_YN");
            obj.set_datacolumn("PRD_INC_YN_NM");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Static("sta_prd","0","366","130","32",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("30");
            obj.set_text("상품(3개만가능)");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Edit("edt_prdIds","140","370",null,"24","100",null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("31");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Button("btn_prdMulti","864","370","24","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","140","401","150","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("33");
            obj.set_direction("vertical");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new CheckBox("chk_noEdnDt","371","246","90","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("34");
            obj.set_text("종료일 없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Button("btn_mainImgDelete","btn_mainImgAdd:4","276","24","24",null,null,null,null,null,null,this.tab_bnr.tab20.form);
            obj.set_taborder("35");
            obj.set_text("X");
            obj.set_visible("true");
            this.tab_bnr.tab20.addChild(obj.name, obj);

            obj = new Tabpage("tab30",this.tab_bnr);
            obj.set_text("Tabpage3");
            this.tab_bnr.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","0","366",null,"64","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","0","335",null,"32","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","0","429",null,"32","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","0","241",null,"32","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static65_00","0","210",null,"32","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"160","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static04","0","179",null,"32","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","140","183",null,"24","100",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("5");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","0","20","130","160",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("6");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","140","34","127","134",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","271","30",null,"139","60",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","904","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","932","29","24","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","0","210","130","32",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("11");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","140","214","100","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","257","214","100","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static59","244","214","9","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("14");
            obj.set_text("~");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","272",null,"64","0",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_gnbUrl","80","272","50","64",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("16");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Radio("rdo_mainUrlCnsolSprCd","140","276","300","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("17");
            obj.set_direction("vertical");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Edit("edt_mainUrl","140","307",null,"24","10",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("18");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_gnbImg","80","241","50","32",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("19");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_mainImgSize","659","245","300","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("20");
            obj.set_text("이미지사이즈 : 400 X 619");
            obj.set_textAlign("left");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_ttl","0","179","130","32",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("21");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Edit("edt_mainAtflNm","140","245","420","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_mainImgAdd","564","245","60","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("23");
            obj.set_text("파일찾기");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","865","182","88","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("24");
            obj.set_text("(0 / 100 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_useYn","0","429","130","32",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("25");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","140","433","150","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("26");
            obj.set_direction("vertical");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_gnb","0","241","81","95",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("27");
            obj.set_text("GNB");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_catg","0","335","81","95",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("28");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_catgUrl","80","366","50","64",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("29");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_catgImg","80","335","50","32",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("30");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Edit("edt_subAtflNm","140","339","420","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_subImgAdd","564","339","60","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("32");
            obj.set_text("파일찾기");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Static("sta_subImgSize","659","339","300","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("33");
            obj.set_text("이미지사이즈 : 968 X 320");
            obj.set_textAlign("left");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Edit("edt_subUrl","140","401",null,"24","10",null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("36");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Radio("rdo_subUrlCnsolSprCd","140","373","300","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("37");
            obj.set_direction("vertical");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new CheckBox("chk_noEdnDt","371","214","90","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("38");
            obj.set_text("종료일 없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_mainImgDelete","btn_mainImgAdd:4","245","24","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("39");
            obj.set_text("X");
            obj.set_visible("true");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_subImgDelete","628","340","24","24",null,null,null,null,null,null,this.tab_bnr.tab30.form);
            obj.set_taborder("40");
            obj.set_text("X");
            obj.set_visible("true");
            this.tab_bnr.tab30.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"70","30","539","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","465",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","539",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_bnr.tab10.form.edt_ttl","value","ds_bnrInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_bnr.tab10.form.rdo_noticSprCd","value","ds_bnrInfo","NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_bnr.tab10.form.cal_dispStrDt","value","ds_bnrInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_bnr.tab10.form.cal_dispEndDt","value","ds_bnrInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_bnr.tab10.form.rdo_mainUrlCnsolSprCd","value","ds_bnrInfo","MAIN_URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_bnr.tab10.form.edt_mainUrl","value","ds_bnrInfo","MAIN_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_bnr.tab10.form.rdo_useYn","value","ds_bnrInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_bnr.tab10.form.edt_mainAtflNm","value","ds_bnrInfo","MAIN_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_bnr.tab20.form.edt_ttl","value","ds_bnrInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_bnr.tab20.form.rdo_noticSprCd","value","ds_bnrInfo","NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_bnr.tab20.form.cal_dispStrDt","value","ds_bnrInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_bnr.tab20.form.cal_dispEndDt","value","ds_bnrInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_bnr.tab20.form.rdo_mainUrlCnsolSprCd","value","ds_bnrInfo","MAIN_URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_bnr.tab20.form.edt_mainUrl","value","ds_bnrInfo","MAIN_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_bnr.tab20.form.edt_mainAtflNm","value","ds_bnrInfo","MAIN_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_bnr.tab20.form.edt_prdIds","value","ds_bnrInfo","PRD_IDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_bnr.tab20.form.rdo_useYn","value","ds_bnrInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_bnr.tab30.form.edt_ttl","value","ds_bnrInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_bnr.tab30.form.rdo_noticSprCd","value","ds_bnrInfo","NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_bnr.tab30.form.cal_dispStrDt","value","ds_bnrInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_bnr.tab30.form.cal_dispEndDt","value","ds_bnrInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_bnr.tab30.form.rdo_mainUrlCnsolSprCd","value","ds_bnrInfo","MAIN_URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_bnr.tab30.form.edt_mainUrl","value","ds_bnrInfo","MAIN_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_bnr.tab30.form.edt_mainAtflNm","value","ds_bnrInfo","MAIN_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_bnr.tab30.form.rdo_useYn","value","ds_bnrInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_bnr.tab30.form.edt_subAtflNm","value","ds_bnrInfo","SUB_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_bnr.tab30.form.edt_subUrl","value","ds_bnrInfo","SUB_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_bnr.tab30.form.rdo_subUrlCnsolSprCd","value","ds_bnrInfo","SUB_URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_bnr.tab20.form.rdo_prdIncYn","value","ds_bnrInfo","PRD_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_bnr.tab10.form.chk_noEdnDt","value","ds_cpnInfo","UNLMT_PUBC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_bnr.tab20.form.chk_noEdnDt","value","ds_cpnInfo","UNLMT_PUBC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab_bnr.tab30.form.chk_noEdnDt","value","ds_cpnInfo","UNLMT_PUBC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_08.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_VA_08.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 배너 상세
          CREATION DATES : 2022.03.16
          CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        var sForm;
        var catgBnr = 2000; // 카테고리 전문관
        var downBnr = 3000; // 하단배너
        var oneDpthCatgBnr = 4000; // 1뎁스 카테고리 배너
        var mypageUpBnr = 5001; // 마이페이지 상단배너
        var mypageDownBnr = 5002; // 마이페이지 하단배너
        var vBnrExpsPstId = "";
        var vHrnkBnrExpsPstId = "";
        var curImgBtnName = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	vHrnkBnrExpsPstId = this.parent.hrnkBnrExpsPstId;
        	vBnrExpsPstId = this.parent.bnrExpsPstId;
        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "CHN_TP_CD", this.parent.chnTpCd);
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.parent.mallSprCd);
        	this.ds_search.setColumn(0, "BNR_EXPS_PST_ID", vBnrExpsPstId);
        	this.ds_search.setColumn(0, "HRNK_BNR_EXPS_PST_ID", vHrnkBnrExpsPstId);
        	this.ds_search.setColumn(0, "BNR_INFO_SEQ", this.parent.bnrInfoSeq);
        	this.ds_search.setColumn(0, "BNR_EXPS_PST_NM", this.parent.bnrExpsPstNm);
        	this.ds_search.setColumn(0, "PRD_CLCD", this.parent.prdClCd);

        	// 탭 위치 세팅
        	if(vBnrExpsPstId == catgBnr) { // 카테고리 전문관
        		this.tab_bnr.set_tabindex(1);
        		sForm = this.tab_bnr.tab20.form;
        	} else if(vHrnkBnrExpsPstId == oneDpthCatgBnr) { // 1뎁스 카테고리 배너
        		this.tab_bnr.set_tabindex(2);
        		sForm = this.tab_bnr.tab30.form;
         	} else {
         		sForm = this.tab_bnr.tab10.form;
        		if(vBnrExpsPstId == downBnr) {
        		sForm.sta_mainImgSize.set_text("이미지 사이즈 : 596 X 200");
        		} else if(vBnrExpsPstId == mypageUpBnr) {
        			sForm.sta_mainImgSize.set_text("이미지 사이즈 : 1,216 X 120");
        		} else if(vBnrExpsPstId == mypageDownBnr) {
        			sForm.sta_mainImgSize.set_text("이미지 사이즈 : 1,216 X 160");
        		}
         	}

        	if(this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) {
        		this.btn_delete.set_visible(false);
        	}

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_noticSprCd=ds_output1 ds_urlCnsolSprCd=ds_output2";
        	var arg = "";

        	//조회 값 담기
        	this.ds_search.setColumn(0, "CODE_LIST", "NOTIC_SPR_CD,URL_CNSOL_SPR_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	//전송
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //조회
        this.fn_search = function() {
        	var sSvcId = "selectBnrInfo";
        	var sUrl = "/sa/bnr/select-bnr-info.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_bnrInfo=ds_output1 ds_oprUnitList=ds_output2";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function()
        {
        	var sSvcId = "saveBnrInfo";
        	var sUrl = "/sa/bnr/save-bnr-info.do";
        	var inDs = "ds_save=ds_bnrInfo:A ds_oprUnitList=ds_oprUnitList:A"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        // 삭제
        this.fn_delete = function() {
        	var sSvcId = "deleteBnrInfo";
        	var sUrl = "/sa/bnr/delete-bnr-info.do";
        	var inDs = "ds_delete=ds_bnrInfo"
        	var outDs = "";
        	var arg = "";
        	var callback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :
        			// 배너순번이 있으면 조회하여 상세를 보여주고
        			if(!this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) {
        				this.fn_search();
        			} else { // 없으면 부모창에서 가져온 파라미터들을 배너 데이터셋에 set
        				this.ds_bnrInfo.copyRow(0, this.ds_search, 0);
        			}
        			break;

        		case "selectBnrInfo" :
        			this.fn_setLenByte(sForm.edt_ttl.value, 100, "ttl");
        			if( this.ds_oprUnitList.rowcount == 0 ) {
        				this.ds_oprUnitList.copyData(this.ds_oprUnitList_copy);
        			}

        			if(vBnrExpsPstId == catgBnr) { // 카테고리 전문관
        				this.fn_prdIncYnChange();
        			} else if(vHrnkBnrExpsPstId == oneDpthCatgBnr) { // 1뎁스 카테고리 배너
        				this.fn_subUrlCnsolSprCd();
        			}
        			this.fn_mainUrlCnsolSprCd();
        			this.fn_chgDispEndDt(); // 종료일 없음 체크박스 처리 위하여
        			break;
        		case "saveBnrInfo" :
        			if(errorCode == ""){
        				alert("저장되었습니다.");
        				if(vBnrExpsPstId == 0) { // 1뎁스 카테고리 최초 저장시에는 트리 목록 재 조회(배너 노출 정보 insert)
        					this.opener.fn_bnrExpsListSearch();
        					this.close();
        				} else {
        					this.opener.fn_bnrDtlListSearch();
        					if(this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) { //등록일 경우는 창 닫기
        						this.close();
        					}
        				}
        				this.fn_search();
        			}else{
        				alert(errorMsg);
        			}
        			break;
        		case "deleteBnrInfo" :
        			if(errorCode == ""){
        				alert("삭제되었습니다.");
        				this.opener.fn_bnrDtlListSearch();
        				this.close();
        			} else {
        				alert("삭제에 실패하였습니다.");
        			}
        			break;
        		default :

        			break;
        	}
        }

        this.fn_popupCallback = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue)) {
        		return;
        	}
        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId) {
        		case "btn_oprUnitMulti" :
        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");
        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				}
        			}
        			break;

        		case "btn_oprUnitMultiText" :

        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");
        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						if(!this.gfn_isNull(sBzplcId) && !this.gfn_isNull(sOprUnitId)) {
        							var nRow = this.ds_oprUnitList.addRow();

        							this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        							this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        							this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", "");
        						}
        					}
        				}
        			}

        			break;

        		case "btn_prdMulti" :
        			var prdIds = "";
        			for(var i=0; i < retObj.length; i++) {
        				prdIds += retObj[i].PRD_ID + ",";
        			}
        			sForm.edt_prdIds.set_value(prdIds.substring(0, prdIds.length-1));

        			break;

        		default :

        			break;
        	}
        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//search static 초기 설정
        	this.tab_bnr.tab10.form.sta_noticSprCd.uEssentiel = "true";
        	this.tab_bnr.tab10.form.sta_ttl.uEssentiel = "true";
        	this.tab_bnr.tab10.form.sta_dispPeriod.uEssentiel = "true";
        	this.tab_bnr.tab10.form.sta_img.uEssentiel = "true";
        	this.tab_bnr.tab10.form.sta_url.uEssentiel = "true";
        	this.tab_bnr.tab10.form.sta_useYn.uEssentiel = "true";

        	this.tab_bnr.tab20.form.sta_noticSprCd.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_prdIncYn.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_ttl.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_dispPeriod.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_img.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_url.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_prd.uEssentiel = "true";
        	this.tab_bnr.tab20.form.sta_useYn.uEssentiel = "true";

        	this.tab_bnr.tab30.form.sta_noticSprCd.uEssentiel = "true";
        	this.tab_bnr.tab30.form.sta_ttl.uEssentiel = "true";
        	this.tab_bnr.tab30.form.sta_dispPeriod.uEssentiel = "true";
        	this.tab_bnr.tab30.form.sta_gnb.uEssentiel = "true";
        	this.tab_bnr.tab30.form.sta_catg.uEssentiel = "true";
        	this.tab_bnr.tab30.form.sta_useYn.uEssentiel = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = this.gfn_lengthByte(sVal);
        	var expsText = "";

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "ttl") {
        			sForm.sta_ttlSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByAscii(sVal, 0, maxByte);
        	count = this.gfn_lengthByte(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "ttl") {
        		sForm.edt_ttl.set_value("");
        		sForm.edt_ttl.set_value(tempVal);
        		sForm.sta_ttlSize.set_text(expsText);
        	}
        };

        this.fn_prdIncYnChange = function() {
        	if(sForm.rdo_prdIncYn.value == "Y") {
        		sForm.edt_prdIds.set_enable(true);
        		sForm.btn_prdMulti.set_enable(true);
        	} else {
        		sForm.edt_prdIds.set_enable(false);
        		sForm.btn_prdMulti.set_enable(false);
        	}
        };

        this.fn_mainUrlCnsolSprCd = function() {
        	if(sForm.rdo_mainUrlCnsolSprCd.value == "10") {
        		sForm.edt_mainUrl.set_enable(false);
        	} else {
        		sForm.edt_mainUrl.set_enable(true);
        	}
        }

        this.fn_subUrlCnsolSprCd = function() {
        	if(sForm.rdo_subUrlCnsolSprCd.value == "10") {
        		sForm.edt_subUrl.set_enable(false);
        	} else {
        		sForm.edt_subUrl.set_enable(true);
        	}
        }

        this.fn_chgNoEndDt = function() {
        	if (sForm.chk_noEdnDt.value == "Y") {
        		sForm.cal_dispEndDt.set_value("99991231");
        		sForm.cal_dispEndDt.set_readonly(true);
        	} else {
        		sForm.cal_dispEndDt.set_value(this.ds_bnrInfo.getOrgColumn(0, "DISP_END_DT"));
        		sForm.cal_dispEndDt.set_readonly(false);
        	}
        }

        this.fn_chgDispEndDt = function() {
        	if (sForm.cal_dispEndDt.value == "99991231") {
        		sForm.cal_dispEndDt.set_readonly(true);
        		sForm.chk_noEdnDt.set_value("Y");
        	} else {
        		sForm.cal_dispEndDt.set_readonly(false);
        		sForm.chk_noEdnDt.set_value("N");
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //운영단위 멀티 검색 버튼
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {
        	           };

        	var oOption = { top : "-1"
        	              , left : "-1"
        	              , width : "-1"
        	              , height : "-1"
        	              , popuptype : "modal"	// modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWindow
        	              , layered : "false"
        	              , opacity : "100"
        	              , autosize : "true"
        	              , titlebar : "true"
        	              , title : "운영단위 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallback", oOption);
        };

        //운영단위 멀티텍스트 검색 버튼
        this.btn_oprUnitMultiText_onclick = function(obj,e)
        {
        	var params = { textId : sForm.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_popupCallback", options);
        };

        //게시구분 변경 이벤트
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	if(sForm.rdo_noticSprCd.value == "30") {
        		sForm.grd_oprUnitList.set_enable(true);

        		sForm.btn_oprUnitMulti.set_enable(true);
        		sForm.btn_oprUnitMultiText.set_enable(true);
        	} else {
        		sForm.grd_oprUnitList.set_enable(false);

        		sForm.btn_oprUnitMulti.set_enable(false);
        		sForm.btn_oprUnitMultiText.set_enable(false);
        	}
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm("입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?")) {
        		this.close();
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(sForm.rdo_noticSprCd.value == "" || sForm.rdo_noticSprCd.value == undefined) {
        		alert("게시구분은 필수 입력항목입니다.");
        		sForm.rdo_noticSprCd.setFocus();
        		return;
        	}
        	if (sForm.rdo_noticSprCd.value == "30") {
        		if (this.ds_oprUnitList.getRowCount() <= 0) {
        			alert("로그인 운영단위를 선택하시면, 최소 1개의 운영단위는 필수 입력항목입니다.");
        			return;
        		}
        	}

        	if(sForm.edt_ttl.value == "" || sForm.edt_ttl.value == undefined) {
        		alert("제목은 필수 입력항목입니다.");
        		sForm.edt_ttl.setFocus();
        		return;
        	}
        	if (sForm.cal_dispStrDt.value == "" || sForm.cal_dispStrDt.value == undefined) {
        		alert("전시 시작일은 필수 입력항목입니다.");
        		sForm.cal_dispStrDt.setFocus();
        		return;
        	}
        	if (sForm.cal_dispEndDt.value == "" || sForm.cal_dispEndDt.value == undefined) {
        		alert("전시 종료일은 필수 입력항목입니다.");
        		sForm.cal_dispEndDt.setFocus();
        		return;
        	}
        	if(sForm.edt_mainAtflNm.value == "" || sForm.edt_mainAtflNm.value == undefined) {
        		alert("이미지는 필수 입력항목입니다.");
        		sForm.edt_mainAtflNm.setFocus();
        		return;
        	}
        	if(sForm.rdo_mainUrlCnsolSprCd.value == "" || sForm.rdo_mainUrlCnsolSprCd.value == undefined) {
        		alert("URL은 필수 입력항목입니다.");
        		sForm.rdo_mainUrlCnsolSprCd.setFocus();
        		return;
        	}
        	if(sForm.rdo_mainUrlCnsolSprCd.value != 10) {
        		if(sForm.edt_mainUrl.value == "" || sForm.edt_mainUrl.value == undefined) {
        			alert("URL은 필수 입력항목입니다.");
        			sForm.edt_mainUrl.setFocus();
        			return;
        		}
        	}
        	if(sForm.rdo_useYn.value == "" || sForm.rdo_useYn.value == undefined) {
        		alert("사용여부는 필수 입력항목입니다.");
        		sForm.rdo_useYn.setFocus();
        		return;
        	}

        	if(vBnrExpsPstId == catgBnr) { // 카테고리 전문관, 2번째 탭일 경우
        		if(sForm.rdo_prdIncYn.value == "" || sForm.rdo_prdIncYn.value == undefined) {
        			alert("상품포함 여부는 필수 입력항목입니다.");
        			sForm.rdo_prdIncYn.setFocus();
        			return;
        		} else {
        			if(sForm.rdo_prdIncYn.value == "Y") {
        				if(sForm.edt_prdIds.value == "" || sForm.edt_prdIds.value == undefined) {
        					alert("상품은 필수 입력항목입니다.");
        					sForm.edt_prdIds.setFocus();
        					return;
        				} else {
        					var prdIdLeng = sForm.edt_prdIds.value.split(",").length;
        					if(prdIdLeng != 3) {
        						alert("상품 3개 등록은 필수입니다.");
        					}
        					return;
        				}
        			}
        		}
        	} else if(vHrnkBnrExpsPstId == oneDpthCatgBnr) { // 1뎁스 카테고리 배너, 3번쨰 탭일 경우
        		if(sForm.edt_subAtflNm.value == "" || sForm.edt_subAtflNm.value == undefined) {
        			alert("이미지는 필수 입력항목입니다.");
        			sForm.edt_subAtflNm.setFocus();
        			return;
        		}
        		if(sForm.rdo_subUrlCnsolSprCd.value == "" || sForm.rdo_subUrlCnsolSprCd.value == undefined) {
        			alert("URL은 필수 입력항목입니다.");
        			sForm.rdo_subUrlCnsolSprCd.setFocus();
        			return;
        		}
        		if(sForm.rdo_subUrlCnsolSprCd.value != 10) {
        			if(sForm.edt_subUrl.value == "" || sForm.edt_subUrl.value == undefined) {
        				alert("URL은 필수 입력항목입니다.");
        				sForm.edt_subUrl.setFocus();
        				return;
        			}
        		}
         	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 ) {
        		if(this.fn_dataCheck(this.ds_file) ) {
        			var jsonArray = new Array();
        			for(var i=0; i<this.ds_file.rowcount; i++){
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "main") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ") == undefined ? 1 :this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ");
        					jsonObj.DOC_REG_ID = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_STOR_PATH") == undefined ? "" :this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_bnrInfo.getColumn(0, "MAIN_ORI_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "sub") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_SEQ") == undefined ? 1 :this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_SEQ");
        					jsonObj.DOC_REG_ID = this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_ID") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_bnrInfo.getColumn(0, "SUB_ATFL_STOR_PATH") == undefined ? "" :this.ds_bnrInfo.getColumn(0, "SUB_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_bnrInfo.getColumn(0, "SUB_ORI_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "SUB_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_bnrInfo.getColumn(0, "SUB_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "SUB_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        			}
        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		} else {
        			this.fn_save();
        		}
        	} else {
        		this.fn_save();
        	}
        };

        // 운영단위 삭제
        this.grd_oprUnitList_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button") {
        		this.ds_oprUnitList.deleteRow(e.row);
        	}
        };

        // 배너 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm("이 배너를 삭제하시겠습니까?")) {
        		this.fn_delete();
        	}
        };

        //  제목 keyup
        this.edt_ttl_onkeyup = function(obj,e)
        {
        	if(vBnrExpsPstId == catgBnr) { // 카테고리 전문관
        		this.fn_setLenByte(obj.value, 20, "ttl");
        	} else {
        		this.fn_setLenByte(obj.value, 200, "ttl");
        	}
        };

        // URL 연결 구분코드
        this.rdo_mainUrlCnsolSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_mainUrlCnsolSprCd();
        };

        // URL 연결 구분코드
        this.rdo_subUrlCnsolSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_subUrlCnsolSprCd();
        };

        // 이미지 업로드
        this.btn_mainImgAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 이미지 업로드
        this.btn_subImageAdd_onclick = function(obj,e)
        {
        	curImgBtnName = e.fromobject.id;
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // 상품 검색 팝업
        this.btn_prdMulti_onclick = function(obj,e)
        {
        	var params = {};
            var options = {};
            this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_16.xfdl", params,  "fn_popupCallback", options);
        };

        // 상품포함여부 수정시
        this.rdo_prdIncYn_onitemchanged = function(obj,e)
        {
        	this.fn_prdIncYnChange();
        };

        // 종료일 없음
        this.chk_noEndDt_onchanged = function(obj,e)
        {
        	this.fn_chgNoEndDt();
        };

        // 종료일 수정 시
        this.cal_dispEndDt_onchanged = function(obj,e)
        {
        	this.fn_chgDispEndDt();
        };

        // 메인이미지 삭제
        this.btn_mainImgDelete_onclick = function(obj,e)
        {
        	this.ds_bnrInfo.setColumn(0,"MAIN_ATFL_NM", "");
        };

        // 서브 이미지 삭제
        this.btn_subImgDelete_onclick = function(obj,e)
        {
        	this.ds_bnrInfo.setColumn(0,"SUB_ATFL_NM", "");
        };

        // 첨부파일 클릭
        this.edt_atflNm_onclick = function(obj,e)
        {
        	if(e.fromobject.id == "edt_mainAtflNm") {
        		if(!this.gfn_isNull(sForm.edt_mainAtflNm.value)) {
        			if(this.confirm(sForm.edt_mainAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        				this.downloadfile("main");
        			}
        		}
        	} else if(e.fromobject.id == "edt_subAtflNm") {
        		if(!this.gfn_isNull(sForm.edt_subAtflNm.value)) {
        			if(this.confirm(sForm.edt_subAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        				this.downloadfile("sub");
        			}
        		}
        	}
        };
        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/

        //해당 row에 파일 추가
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1){
        		//파일사이즈 체크
        		obj.getFileSize();
        	}

        	if (e.reason == 9) {
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;


        		// 같은 이름의 파일을 업로드했을 경우 대비
        // 		this.ds_bnrInfo.set_updatecontrol(false);
        // 		this.ds_bnrInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        // 		this.ds_bnrInfo.set_updatecontrol(true);

        		if(curImgBtnName == "btn_mainImgAdd") {
        			this.fileUpTrans.removeFile("main");

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "main");
        			this.ds_bnrInfo.setColumn(0, "MAIN_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("main", obj)
        		} else if(curImgBtnName == "btn_subImgAdd") {
        			this.fileUpTrans.removeFile("sub");

        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "sub");
        			this.ds_bnrInfo.setColumn(0, "SUB_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("sub", obj)
        		}
        	}
        };

        //업로드용 Virtual 파일 oneroor 이벤트
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : "+e.errortype+"\n";
        	msg += "errormsg : "+e.errormsg+"\n";
        	msg += "statuscode : "+e.statuscode;
        	this.nRow = -1;
        	alert(msg);
        };

        // 파일 다운로드
        this.downloadfile = function(imgType) {
        	this.FileDownTransfer.clearPostDataList();
        	if(imgType == "main") {
        		this.FileDownTransfer.set_downloadfilename(this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("filePath",this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_STOR_PATH"));
        		this.FileDownTransfer.setPostData("fileOrgName",this.ds_bnrInfo.getColumn(0, "MAIN_ORI_ATFL_NM"));
        		this.FileDownTransfer.setPostData("fileName",this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM"));
        	} else {
        		this.FileDownTransfer.set_downloadfilename(this.ds_bnrInfo.getColumn(0, "SUB_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("filePath",this.ds_bnrInfo.getColumn(0, "SUB_ATFL_STOR_PATH"));
        		this.FileDownTransfer.setPostData("fileOrgName",this.ds_bnrInfo.getColumn(0, "SUB_ORI_ATFL_NM"));
        		this.FileDownTransfer.setPostData("fileName",this.ds_bnrInfo.getColumn(0, "SUB_ATFL_NM"));
        	}
        	this.FileDownTransfer.download('/co/fileDownload.do');

        };

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize ) {
        		alert(extNm + " 파일은 10MB 이상으로 첨부하실 수 없습니다.");
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(extNm + " 파일은 허용되지 않는 파일 타입입니다.");
        		return false;
        	}

        	return true;
        };

        //파일 DIALOG CLOSE 이벤트
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles)){
        		return;
        	}

        	var vFile = e.virtualfiles[0];
        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 ){
        		alert("파일 업로드 오류입니다.");
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        // 		if(objCallDs.getColumn(i, "result") == "none") {
        // 			alert("파일이 없습니다.");
        // 			return;
        // 		}
        		if(objCallDs.getColumn(i, "imgType") == "main") {
        			this.ds_bnrInfo.setColumn(0, "MAIN_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		} else if(objCallDs.getColumn(i, "imgType") == "sub") {
        			this.ds_bnrInfo.setColumn(0, "SUB_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}
        	this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	this.fn_save();

        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.tab_bnr.tab10.form.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.tab_bnr.tab10.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.tab_bnr.tab10.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.tab_bnr.tab10.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.tab_bnr.tab10.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.tab_bnr.tab10.form.cal_dispEndDt.addEventHandler("onchanged",this.cal_dispEndDt_onchanged,this);
            this.tab_bnr.tab10.form.rdo_mainUrlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_mainUrlCnsolSprCd_onitemchanged,this);
            this.tab_bnr.tab10.form.edt_mainAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.tab_bnr.tab10.form.btn_mainImgAdd.addEventHandler("onclick",this.btn_mainImgAdd_onclick,this);
            this.tab_bnr.tab10.form.chk_noEdnDt.addEventHandler("onchanged",this.chk_noEndDt_onchanged,this);
            this.tab_bnr.tab10.form.btn_mainImgDelete.addEventHandler("onclick",this.btn_mainImgDelete_onclick,this);
            this.tab_bnr.tab20.form.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.tab_bnr.tab20.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.tab_bnr.tab20.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.tab_bnr.tab20.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.tab_bnr.tab20.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.tab_bnr.tab20.form.cal_dispEndDt.addEventHandler("onchanged",this.cal_dispEndDt_onchanged,this);
            this.tab_bnr.tab20.form.rdo_mainUrlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_mainUrlCnsolSprCd_onitemchanged,this);
            this.tab_bnr.tab20.form.edt_mainAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.tab_bnr.tab20.form.btn_mainImgAdd.addEventHandler("onclick",this.btn_mainImgAdd_onclick,this);
            this.tab_bnr.tab20.form.rdo_prdIncYn.addEventHandler("onitemchanged",this.rdo_prdIncYn_onitemchanged,this);
            this.tab_bnr.tab20.form.edt_prdIds.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.tab_bnr.tab20.form.btn_prdMulti.addEventHandler("onclick",this.btn_prdMulti_onclick,this);
            this.tab_bnr.tab20.form.chk_noEdnDt.addEventHandler("onchanged",this.chk_noEndDt_onchanged,this);
            this.tab_bnr.tab20.form.btn_mainImgDelete.addEventHandler("onclick",this.btn_mainImgDelete_onclick,this);
            this.tab_bnr.tab30.form.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.tab_bnr.tab30.form.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.tab_bnr.tab30.form.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.tab_bnr.tab30.form.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.tab_bnr.tab30.form.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.tab_bnr.tab30.form.cal_dispEndDt.addEventHandler("onchanged",this.cal_dispEndDt_onchanged,this);
            this.tab_bnr.tab30.form.rdo_mainUrlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_mainUrlCnsolSprCd_onitemchanged,this);
            this.tab_bnr.tab30.form.edt_mainAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.tab_bnr.tab30.form.btn_mainImgAdd.addEventHandler("onclick",this.btn_mainImgAdd_onclick,this);
            this.tab_bnr.tab30.form.edt_subAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.tab_bnr.tab30.form.btn_subImgAdd.addEventHandler("onclick",this.btn_subImageAdd_onclick,this);
            this.tab_bnr.tab30.form.rdo_subUrlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_subUrlCnsolSprCd_onitemchanged,this);
            this.tab_bnr.tab30.form.chk_noEdnDt.addEventHandler("onchanged",this.chk_noEndDt_onchanged,this);
            this.tab_bnr.tab30.form.btn_mainImgDelete.addEventHandler("onclick",this.btn_mainImgDelete_onclick,this);
            this.tab_bnr.tab30.form.btn_subImgDelete.addEventHandler("onclick",this.btn_subImgDelete_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_VA_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
