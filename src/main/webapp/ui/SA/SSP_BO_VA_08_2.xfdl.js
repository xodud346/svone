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
                this._setFormPosition(1000,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bnrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_INFO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"BNR_EXPS_PST_ID\" type=\"INT\" size=\"256\"/><Column id=\"CHN_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_SO\" type=\"INT\" size=\"256\"/><Column id=\"DISP_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_URL_CNSOL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_URL\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_INC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_IDS\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_BNR_EXPS_PST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BNR_EXPS_PST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"MAIN_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"SUB_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtnOprUnitCheckList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID_VIEW\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static65_00_00_00_00","20","397",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","20","460",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","491",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","179",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","20","304",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","273",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","20",null,"160","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","210",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ttl","160","214",null,"24","120",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","20","20","130","160",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","34","150","116",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_noticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("horizontal");
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_oprUnitList","327","30",null,"139","80",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_oprUnitList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"200\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMulti","924","29","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oprUnitMultiText","952","29","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dispPeriod","20","273","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("전시 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispStrDt","160","277","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_dispEndDt","277","277","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","264","277","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","20","335",null,"64","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_url","20","335","130","128",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mainUrlCnsolSprCd","160","339","300","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_urlCnsolSprCd");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_taborder("19");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mainUrl","160","370",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_img","20","304","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mainImgSize","679","308","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("이미지사이즈 : 2,560*437");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttl","20","210","130","64",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("탭명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mainAtflNm","160","308","420","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainImgAdd","584","308","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttlSize","885","213","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(0 / 20 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prdIncYn","20","179","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("상품포함");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","491","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_prdIncYn","160","184","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_prdIncYn");
            obj.set_codecolumn("PRD_INC_YN");
            obj.set_datacolumn("PRD_INC_YN_NM");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prd","20","460","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("상품(3개만가능)");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdIds","160","464",null,"24","120",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdMulti","884","464","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_multi");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","495","150","24",null,null,null,null,null,null,this);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("33");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_noEdnDt","391","278","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("종료일 없음");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mainImgDelete","648","308","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"70","30","519","40",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","485",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","559",null,"70","30",null,"40",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prdIdsDelete","btn_prdMulti:4","464","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","239","30","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_view","1040","0","100","100",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_imagealign("center middle");
            obj.set_padding("0px");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblUrl","62","397","88","64",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("MOBILE(GNB)");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcUrl","62","335","88","64",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("PC");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_subUrl","160","403",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ttlMsg","160","edt_ttl:3","240","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("(MOBILE GNB 영역에도 메뉴가 노출됩니다.)\r\n");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblUrlMsg","160","edt_subUrl:3","380","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("(MOBILE GNB 영역에 메뉴(탭명 입력값) 선택 시 이동되는 URL 입니다.)\r\n");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","160","152","134","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,620,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_ttl","value","ds_bnrInfo","TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdo_noticSprCd","value","ds_bnrInfo","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_dispStrDt","value","ds_bnrInfo","DISP_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_dispEndDt","value","ds_bnrInfo","DISP_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","rdo_mainUrlCnsolSprCd","value","ds_bnrInfo","MAIN_URL_CNSOL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mainUrl","value","ds_bnrInfo","MAIN_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_mainAtflNm","value","ds_bnrInfo","MAIN_ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdo_prdIncYn","value","ds_bnrInfo","PRD_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_prdIds","value","ds_bnrInfo","PRD_IDS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","rdo_useYn","value","ds_bnrInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","chk_noEdnDt","value","ds_cpnInfo","UNLMT_PUBC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_subUrl","value","ds_bnrInfo","SUB_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","chk_notLogn_Inc_Yn","value","ds_bnrInfo","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_VA_08_2.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_08_2.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_VA_08_2.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_VA_08_2.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배너 상세(카테고리 전문관)
        CREATION DATES : 2022.03.16
        CREATER        : 이민호
        *******************************************************/
        //인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        var curImgBtnName = "";
        this.fv_oApp = nexacro.getApplication();
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        	this.ds_search.setColumn(0, "CHN_TP_CD", this.parent.chnTpCd);
        	this.ds_search.setColumn(0, "MALL_SPR_CD", this.parent.mallSprCd);
        	this.ds_search.setColumn(0, "BNR_EXPS_PST_ID", this.parent.bnrExpsPstId);
        	this.ds_search.setColumn(0, "HRNK_BNR_EXPS_PST_ID", this.parent.hrnkBnrExpsPstId);
        	this.ds_search.setColumn(0, "BNR_INFO_SEQ", this.parent.bnrInfoSeq);
        	this.ds_search.setColumn(0, "BNR_EXPS_PST_NM", this.parent.bnrExpsPstNm);
        	this.ds_search.setColumn(0, "PRD_CLCD", this.parent.prdClCd);

        	if(this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) {
        		this.btn_delete.set_visible(false);
        		this.btn_save.set_left(this.btn_save.getOffsetLeft() - 37);
        		this.btn_cancel.set_left(this.btn_cancel.getOffsetLeft() - 37);
        	}

        	//공통코드 조회
        	this.fn_commonCodeSearch();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
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
        	this.ds_search.setColumn(0, "CODE_LIST", "EXPS_NOTIC_SPR_CD,URL_CNSOL_SPR_CD");
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

        // 운영단위ID 유효성 검사
        this.fn_oprUnitCheck = function() {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_rtnOprUnitCheckList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callBack";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {

        	switch(svcID) {
        		case "commonCodeSearch" :
        			// 배너순번이 있으면 조회하여 상세를 보여주고
        			if(!this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) {
        				// SSP-2971
        				this.chk_notLogn_Inc_Yn.set_enable(true);
        				this.fn_search();
        			} else { // 없으면 부모창에서 가져온 파라미터들을 배너 데이터셋에 set
        				this.ds_bnrInfo.copyRow(0, this.ds_search, 0);
        				this.rdo_noticSprCd.set_index(0);
        				// 디폴트 상품포함
        				this.rdo_prdIncYn.set_index(0);
        				this.fn_prdIncYnChange();
        				// 디폴트 링크없음
        				this.rdo_mainUrlCnsolSprCd.set_index(0);
        				this.fn_mainUrlCnsolSprCd();
        				// 디폴트 사용
        				this.rdo_useYn.set_index(0);
        				this.rdo_noticSprCd_onitemchanged(); // 게시구분 disable 세팅

        				// SSP-2971
        				this.chk_notLogn_Inc_Yn.set_enable(true);
        				this.chk_notLogn_Inc_Yn.set_value(false);
        				this.ds_bnrInfo.setColumn(0, "NOTLOGN_INC_YN", "N");
        			}

        			break;

        		case "selectBnrInfo" :
        			this.fn_setLenByte(this.edt_ttl.value, 30, "ttl");
        			if( this.ds_oprUnitList.rowcount == 0 ) {
        				this.ds_oprUnitList.copyData(this.ds_oprUnitList_copy);
        			}

        			this.fn_prdIncYnChange();
        			this.fn_mainUrlCnsolSprCd();
        			this.fn_chgDispEndDt(); // 종료일 없음 체크박스 처리 위하여
        			this.rdo_noticSprCd_onitemchanged(); // 게시구분 disable 세팅

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;
        		case "saveBnrInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000030")); // 저장되었습니다.

        				this.opener.fn_bnrDtlListSearch();
        				if(this.gfn_isNull(this.ds_search.getColumn(0, "BNR_INFO_SEQ"))) { //등록일 경우는 창 닫기
        					this.close();
        				} else {
        					//this.fn_search();
        					this.close();
        				}

        			}else{
        				alert(errorMsg);
        			}
        			break;
        		case "deleteBnrInfo" :
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000031")); // 삭제되었습니다.
        				this.opener.fn_bnrDtlListSearch();
        				this.close();
        			} else {
        				alert(this.fn_getMessage("ERRN000032")); // 삭제에 실패하였습니다.
        			}
        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined) {
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "") {
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_rtnOprUnitCheckList.getRowCount(); x++) {
        				var sBzplcId = this.ds_rtnOprUnitCheckList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_rtnOprUnitCheckList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined) {
        					var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0) {
        						var nRow = this.ds_oprUnitList.addRow();

        						this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					} else {
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

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
        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i < retObj.length; i++) {
        				var rowData = JSON.parse(retObj[i]);
        				var findRow = this.ds_oprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");
        				if(findRow < 0) {
        					var nRow = this.ds_oprUnitList.addRow();
        					this.ds_oprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_oprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				} else {
        					totalCount2 = totalCount2 + 1;
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0) {
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_oprUnitMultiText" :

        			var retValue = retObj.textValue;

        			if (retValue != "") {
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++) {
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined) {
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.parent.coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_prdMulti" :

        			var prdIds = "";
        			var totalCount = 0;
        			var totalCount2 = 0;
        			var tempPrdId = "";

        			this.ds_prdInfoList.clearData();

        			if(!this.gfn_isNull(this.edt_prdIds.value)) {
        				var splitEdtPrdIds = this.edt_prdIds.value.split(",");
        				for(var i=0; i < splitEdtPrdIds.length; i++) {
        					var nRow = this.ds_prdInfoList.addRow();
        					this.ds_prdInfoList.setColumn(nRow, "PRD_ID_VIEW", splitEdtPrdIds[i]);
        					totalCount = totalCount + 1
        				}
        			}

        			if((retObj.length + totalCount) > 3) {
        				alert(this.fn_getMessage("ERRN000003")); // 최대 3개까지만 추가할 수 있습니다.
        			} else {

        				for(var i=0; i<retObj.length; i++) {
        					var rowData = JSON.parse(retObj[i]);
        					var findRow = this.ds_prdInfoList.findRowExpr("PRD_ID_VIEW == '" + rowData.PRD_ID_VIEW + "'");
        					if(findRow < 0) {
        						var nRow = this.ds_prdInfoList.addRow();
        						this.ds_prdInfoList.setColumn(nRow, "PRD_ID_VIEW", rowData.PRD_ID_VIEW);
        					} else {
        						totalCount2 = totalCount2 + 1;
        						tempPrdId = tempPrdId + rowData.PRD_ID_VIEW + ",";
        					}
        				}

        				if (totalCount2 > 0) {
        					tempPrdId = tempPrdId.substring(0, tempPrdId.length-1);
        					this.fn_textCopy(this.fn_getMessage("ERRN000026", tempPrdId));
        					alert(this.fn_getMessage("ERRN000026", tempPrdId)); // 상품이 중복되었습니다. 상품ID를 확인해주세요.\n&1
        				}

        				for(var i=0; i < this.ds_prdInfoList.rowcount; i++){
        					prdIds += this.ds_prdInfoList.getColumn(i, "PRD_ID_VIEW") + ",";
        				}

        				this.edt_prdIds.set_value(prdIds.substring(0, prdIds.length-1));
        			}

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
        	this.sta_noticSprCd.uEssentiel = "true";
        	//this.sta_prdIncYn.uEssentiel = "true";
        	this.sta_ttl.uEssentiel = "true";
        	this.sta_dispPeriod.uEssentiel = "true";
        	this.sta_img.uEssentiel = "true";
        	this.sta_url.uEssentiel = "true";
        	this.sta_prd.uEssentiel = "true";
        	this.sta_useYn.uEssentiel = "true";

        	// grid 초기 설정
        	this.grd_oprUnitList.uSortFlag = "true";
        	this.grd_oprUnitList.uServerSortFlag = "false";
        	this.grd_oprUnitList.uCellSizeType = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        // 글자 byte 체크 함수
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0) {
        		count = 0;
        	}

        	if(count <= maxByte) {
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "ttl") {
        			this.sta_ttlSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "ttl") {
        		this.edt_ttl.set_value("");
        		this.edt_ttl.set_value(tempVal);
        		this.sta_ttlSize.set_text(expsText);
        	}
        };

        this.fn_prdIncYnChange = function() {
        	if(this.rdo_prdIncYn.value == "Y") {
        		this.edt_prdIds.set_enable(true);
        		this.btn_prdMulti.set_enable(true);
        	} else {
        		this.edt_prdIds.set_enable(false);
        		this.btn_prdMulti.set_enable(false);
        	}
        };

        this.fn_mainUrlCnsolSprCd = function() {
        	if(this.rdo_mainUrlCnsolSprCd.value == "10") {
        		this.edt_mainUrl.set_enable(false);
        	} else {
        		this.edt_mainUrl.set_enable(true);
        	}
        }

        this.fn_chgNoEndDt = function() {
        	if (this.chk_noEdnDt.value == "Y") {
        		this.cal_dispEndDt.set_value("99991231");
        		this.cal_dispEndDt.set_readonly(true);
        	} else {
        		this.cal_dispEndDt.set_value(this.ds_bnrInfo.getOrgColumn(0, "DISP_END_DT"));
        		this.cal_dispEndDt.set_readonly(false);
        	}
        }

        this.fn_chgDispEndDt = function() {
        	if (this.cal_dispEndDt.value == "99991231") {
        		this.cal_dispEndDt.set_readonly(true);
        		this.chk_noEdnDt.set_value("Y");
        	} else {
        		this.cal_dispEndDt.set_readonly(false);
        		this.chk_noEdnDt.set_value("N");
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //운영단위 멀티 검색 버튼
        this.btn_oprUnitMulti_onclick = function(obj,e)
        {
        	var oArg = {coCd:this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD")
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
        	var params = { textId : this.btn_oprUnitMultiText };
        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", params,  "fn_popupCallback", options);
        };

        //게시구분 변경 이벤트
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {

        	if(this.rdo_noticSprCd.value == "30" || this.rdo_noticSprCd.value == "50"
        			|| this.rdo_noticSprCd.value == "60" || this.rdo_noticSprCd.value == "70") {
        		this.grd_oprUnitList.set_enable(true);

        		this.btn_oprUnitMulti.set_enable(true);
        		this.btn_oprUnitMultiText.set_enable(true);

        		this.chk_notLogn_Inc_Yn.set_enable(true);
        	} else {
        		this.grd_oprUnitList.set_enable(false);

        		this.btn_oprUnitMulti.set_enable(false);
        		this.btn_oprUnitMultiText.set_enable(false);

        		this.chk_notLogn_Inc_Yn.set_value(false);
        		this.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_bnrInfo.setColumn(0, "NOTLOGN_INC_YN", "N");
        	}
        };

        // 취소 버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000054"))) { // 입력한 내용은 저장되지 않습니다. 목록으로 이동하시겠습니까?
        		this.close();
        	}
        };

        // 저장 버튼
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.rdo_noticSprCd.value == "" || this.rdo_noticSprCd.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "게시구분은")); // 게시구분은 필수 입력항목입니다.
        		this.rdo_noticSprCd.setFocus();
        		return;
        	}
        	if (this.rdo_noticSprCd.value == "30") {
        		if (this.ds_oprUnitList.getRowCount() <= 0) {
        			alert(this.fn_getMessage("ERRN000001", "로그인 운영단위를 선택하시면, 최소 1개의 운영단위는")); // 로그인 운영단위를 선택하시면, 최소 1개의 운영단위는 필수 입력항목입니다.
        			return;
        		}
        	}

        	if(this.edt_ttl.value == "" || this.edt_ttl.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "제목은")); // 제목은 필수 입력항목입니다.
        		this.edt_ttl.setFocus();
        		return;
        	}
        	if (this.cal_dispStrDt.value == "" || this.cal_dispStrDt.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "전시 시작일은")); // 전시 시작일은 필수 입력항목입니다.
        		this.cal_dispStrDt.setFocus();
        		return;
        	}
        	if (this.cal_dispEndDt.value == "" || this.cal_dispEndDt.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "전시 종료일은")); // 전시 종료일은 필수 입력항목입니다.
        		this.cal_dispEndDt.setFocus();
        		return;
        	}
        	if (this.cal_dispStrDt.value > this.cal_dispEndDt.value) {
        		alert(this.fn_getMessage("ERRN000002", "전시 종료일이 전시 시작일보다")); // 전시 종료일이 전시 시작일보다 작습니다.
        		return;
        	}
        	if(this.edt_mainAtflNm.value == "" || this.edt_mainAtflNm.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "이미지는")); // 이미지는 필수 입력항목입니다.
        		this.edt_mainAtflNm.setFocus();
        		return;
        	}
        	if(this.rdo_mainUrlCnsolSprCd.value == "" || this.rdo_mainUrlCnsolSprCd.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "URL은")); // URL은 필수 입력항목입니다.
        		this.rdo_mainUrlCnsolSprCd.setFocus();
        		return;
        	}
        	if(this.rdo_mainUrlCnsolSprCd.value != 10) {
        		if(this.edt_mainUrl.value == "" || this.edt_mainUrl.value == undefined) {
        			alert(this.fn_getMessage("ERRN000001", "링크없음이 아니면 URL은")); // 링크없음이 아니면 URL은 필수 입력항목입니다.
        			this.edt_mainUrl.setFocus();
        			return;
        		}
        	}
        	if(this.rdo_useYn.value == "" || this.rdo_useYn.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "사용여부는")); // 사용여부는 필수 입력항목입니다.
        		this.rdo_useYn.setFocus();
        		return;
        	}
        	if(this.rdo_prdIncYn.value == "" || this.rdo_prdIncYn.value == undefined) {
        		alert(this.fn_getMessage("ERRN000001", "상품포함 여부는")); // 상품포함 여부는 필수 입력항목입니다.
        		this.rdo_prdIncYn.setFocus();
        		return;
        	} else {
        		if(this.rdo_prdIncYn.value == "Y") {
        			if(this.edt_prdIds.value == "" || this.edt_prdIds.value == undefined) {
        				alert(this.fn_getMessage("ERRN000001", "상품은")); // 상품은 필수 입력항목입니다.
        				this.edt_prdIds.setFocus();
        				return;
        			} else {
        				var prdIdLeng = this.edt_prdIds.value.split(",").length;
        				if(prdIdLeng != 3) {
        					alert(this.fn_getMessage("ERRN000001", "상품 3개 등록은")); // 상품 3개 등록은 필수 입력항목입니다.
        					return;
        				}
        			}
        		}
        	}

        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.rdo_noticSprCd.value != "30" && this.rdo_noticSprCd.value != "50"
        		&& this.rdo_noticSprCd.value != "60" && this.rdo_noticSprCd.value != "70") {
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_oprUnitList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_oprUnitList.deleteMultiRows(aDelArr);
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
        					jsonObj.DOC_REG_SEQ = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ") == undefined ? 1 :this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ").toString();
        					jsonObj.DOC_REG_ID = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID");
        					jsonObj.ATFL_STOR_PATH = this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_STOR_PATH") == undefined ? "" :this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_bnrInfo.getColumn(0, "MAIN_ORI_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_ORI_ATFL_NM");
        					jsonObj.ATFL_NM = this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM") == undefined ? "" : this.ds_bnrInfo.getColumn(0, "MAIN_ATFL_NM");
        					jsonArray.push(jsonObj);
        				} else if(this.ds_file.getColumn(i, "IMG_TYPE") == "sub") {
        					var jsonObj		= new Object();
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_SEQ = this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_SEQ") == undefined ? 1 :this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_SEQ").toString();
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
        		if(confirm(this.fn_getMessage("ERRN000048"))) { // 삭제하시겠습니까?
        			this.ds_oprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_oprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        // 배너 삭제
        this.btn_delete_onclick = function(obj,e)
        {
        	if(confirm(this.fn_getMessage("ERRN000052"))) { // 이 배너를 삭제하시겠습니까?
        		this.fn_delete();
        	}
        };

        //  제목 keyup
        this.edt_ttl_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 30, "ttl");
        };

        // URL 연결 구분코드
        this.rdo_mainUrlCnsolSprCd_onitemchanged = function(obj,e)
        {
        	this.fn_mainUrlCnsolSprCd();
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
        	var params = {coCd:this.parent.coCd, mallSprCd : '0'}; // SSP, R&D 모두 조회되도록 0 보냄
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

        	this.fileUpTrans.removeFile("main");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'main'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 서브 이미지 삭제
        this.btn_subImgDelete_onclick = function(obj,e)
        {
        	this.ds_bnrInfo.setColumn(0,"SUB_ATFL_NM", "");

        	this.fileUpTrans.removeFile("sub");
        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'sub'");
        	if (findRow >= 0) {
        		this.ds_file.deleteRow(findRow);
        	}
        };

        // 첨부파일 클릭
        this.edt_atflNm_onclick = function(obj,e)
        {
        // 	if(e.fromobject.id == "edt_mainAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_mainAtflNm.value)) {
        // 			if(this.confirm(this.edt_mainAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("main");
        // 			}
        // 		}
        // 	} else if(e.fromobject.id == "edt_subAtflNm") {
        // 		if(!this.gfn_isNull(this.edt_subAtflNm.value)) {
        // 			if(this.confirm(this.edt_subAtflNm.value + " 파일을 저장 하시겠습니까?")) {
        // 				this.downloadfile("sub");
        // 			}
        // 		}
        // 	}
        };

        // 이미지 노출 처리
        this.edt_atflNm_onmouseenter = function(obj,e)
        {
        	var docRegId = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID");
        	var docRegSeq = this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ");

        	this.img_view.set_width(500);
        	this.img_view.set_height(100);

        	if(!this.gfn_isNull(docRegId)) {
        		this.fn_imgView(this.img_view, obj, docRegId, docRegSeq);
        	}
        };

        this.edt_atflNm_onmouseleave = function(obj,e)
        {
        	this.img_view.set_visible(false);
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
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'main'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        			var nRowIdx = this.ds_file.addRow();
        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "main");
        			this.ds_bnrInfo.setColumn(0, "MAIN_ATFL_NM", obj.filename);
        			this.fileUpTrans.addFile("main", obj)
        		} else if(curImgBtnName == "btn_subImgAdd") {
        			this.fileUpTrans.removeFile("sub");
        			var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'sub'");
        			if (findRow >= 0) {
        				this.ds_file.deleteRow(findRow);
        			}

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
        		this.FileDownTransfer.setPostData("docRegId",this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_bnrInfo.getColumn(0, "MAIN_DOC_REG_SEQ"));
        	} else {
        		this.FileDownTransfer.set_downloadfilename(this.ds_bnrInfo.getColumn(0, "SUB_ATFL_NM"));	//runtime 전용 프로퍼티
        		this.FileDownTransfer.setPostData("docRegId",this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_ID"));
        		this.FileDownTransfer.setPostData("docRegSeq",this.ds_bnrInfo.getColumn(0, "SUB_DOC_REG_SEQ"));
        	}
        	this.FileDownTransfer.download('/co/file-download.do');
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
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
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
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
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

        this.btn_prdIdsDelete_onclick = function(obj,e)
        {
        	// 입력 항목 영역
        	this.edt_prdIds.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.edt_ttl.addEventHandler("onkeyup",this.edt_ttl_onkeyup,this);
            this.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.grd_oprUnitList.addEventHandler("oncellclick",this.grd_oprUnitList_oncellclick,this);
            this.btn_oprUnitMulti.addEventHandler("onclick",this.btn_oprUnitMulti_onclick,this);
            this.btn_oprUnitMultiText.addEventHandler("onclick",this.btn_oprUnitMultiText_onclick,this);
            this.cal_dispEndDt.addEventHandler("onchanged",this.cal_dispEndDt_onchanged,this);
            this.rdo_mainUrlCnsolSprCd.addEventHandler("onitemchanged",this.rdo_mainUrlCnsolSprCd_onitemchanged,this);
            this.edt_mainAtflNm.addEventHandler("oneditclick",this.edt_atflNm_onclick,this);
            this.edt_mainAtflNm.addEventHandler("onmouseenter",this.edt_atflNm_onmouseenter,this);
            this.edt_mainAtflNm.addEventHandler("onmouseleave",this.edt_atflNm_onmouseleave,this);
            this.btn_mainImgAdd.addEventHandler("onclick",this.btn_mainImgAdd_onclick,this);
            this.rdo_prdIncYn.addEventHandler("onitemchanged",this.rdo_prdIncYn_onitemchanged,this);
            this.btn_prdMulti.addEventHandler("onclick",this.btn_prdMulti_onclick,this);
            this.chk_noEdnDt.addEventHandler("onchanged",this.chk_noEndDt_onchanged,this);
            this.btn_mainImgDelete.addEventHandler("onclick",this.btn_mainImgDelete_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_prdIdsDelete.addEventHandler("onclick",this.btn_prdIdsDelete_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_VA_08_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
