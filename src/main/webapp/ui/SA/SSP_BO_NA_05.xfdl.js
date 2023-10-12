(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_05");
            this.set_titletext("이벤트 - 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,684);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchComCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchOprUnitCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboEvtFormCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboMallSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comboNoticSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_oprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evtInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_FORM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_NOTIC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_STR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STAMP_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PWNR_ANCMT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWNR_ANCMT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EVT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBATT\" type=\"STRING\" size=\"256\"/><Column id=\"PWNR_ANCMT_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CPN_EVT_NO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_LST_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PC_DTL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_LST_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"MBL_DTL_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CUST_PRTC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"URL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBATT_EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTLOGN_INC_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridEvtOprUnitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXHBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("Static00","0","0","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","0","20","704",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","980","0","20","704",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","663","1000","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","150","44","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","43","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","105","960","130",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00","0","33","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_noticSprCd","160","110","167","95",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_direction("horizontal");
            obj.set_innerdataset("ds_comboNoticSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("없음");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnit","945","109","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evtFormCd","20","43","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("이벤트 형태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noticSprCd","20","105","130","130",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("게시 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_02","260","106","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_OprUnit","380","109","561","115",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_gridEvtOprUnitList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col,band");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"운영단위ID\"/><Cell col=\"1\" text=\"운영단위명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:OPR_UNIT_ID\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_NM\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","19","12","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("이벤트 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_evtFormCd","160","47","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_comboEvtFormCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","265","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pwnrAncmtYn","20","265","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("당첨자 발표");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pwnrAncmtDt","500","265","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("당첨자 발표일");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00","20","234","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evtDt","20","234","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("이벤트 기간");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtStrDt","160","238","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","314","238","9","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_evtEndDt","327","238","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00","20","327","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evtNm","20","327","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("이벤트 명");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_evtNm","160","331","711","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evtNmSize","881","331","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("(200 / 200 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00","149","420","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","149","420","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("목록 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","630","424","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 384*200)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00","149","451","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","149","451","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("상세 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcDtlDocRegId","630","455","339","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,612)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pcImage","20","420","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("[PC] 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_01","149","482","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","149","482","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("목록 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","630","486","328","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 984*540)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_00_00_00_00","149","513","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","149","513","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("상세 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblDtlDocRegId","630","517","339","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,080*FREE)");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mblImage","20","482","130","63",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("[Mobile] 이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cpnEvtNo","20","389","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("쿠폰 설정");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_01_00","149","389","831","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","149","389","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("쿠폰 선택");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNoNm","289","393","624","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_cpnEvtNo","250","393","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnEvtNo","917","393","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00_01","150","620","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_00_01","20","544","960","108",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mbatt","20","544","130","80",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("유의사항");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_mbatt","160","548","809","49",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_01","666","620","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mbattSize","866","596","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("(2000 / 2000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01","0","623","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","623","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","623","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03","150","624","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00","150","624","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00","150","651","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_00","969","624","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","160","627","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_useYn_innerdataset = new nexacro.NormalDataset("rdo_useYn_innerdataset", obj);
            rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(rdo_useYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","428","665","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_write","502","665","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchCpnEvtNoClear","945","393","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOprUnitMulText","945","137","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02","20","74","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mallSprCd","20","74","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("몰 구분");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cbx_mallSprCd","160","78","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_comboMallSprCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_pwnrAncmtYn","160","269","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_pwnrAncmtYn_innerdataset = new nexacro.NormalDataset("rdo_pwnrAncmtYn_innerdataset", obj);
            rdo_pwnrAncmtYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">발표</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">미발표</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdo_pwnrAncmtYn_innerdataset);
            obj.set_text("포함");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_pwnrAncmtDt","640","269","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("cal_WF_calendar");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("Static65_02_00","20","297","960","32",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stampCnt","20","297","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("스템프 개수");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_stampCnt","160","300","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_stampCntTxt","320","300","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("※ 최소 1개에서 최대 10개 지정 가능");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00_01","360","44","4","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evtFormCdTxt","364","47","605","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("※ 고객의 참여가 불가능한 공지성 이벤트입니다.1");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_01_00","969","44","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_01_00","0","971","1000","10",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("H10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","981","960","84",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_pwnrAncmtCts","20","981","130","84",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("당첨자 발표");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static64_00","19","950","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("당첨자 발표");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_03_00","150","982","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_03_00_00","150","982","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00_00","150","1061","302","3",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("H3");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_01_00_00_00_00","969","982","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_01_00_00_00_00_00_00","0","928","1000","30",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("H30");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_pwnrAncmtCts","160","985","809","76",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_wordWrap("char");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcLstDocRegIdNm","289","424","219","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcLstDocRegId","512","424","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pcDtlDocRegIdNm","289","455","219","24",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDtlDocRegId","512","455","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblLstDocRegIdNm","289","486","219","24",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblLstDocRegId","512","486","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mblDtlDocRegIdNm","289","517","219","24",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDtlDocRegId","512","517","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcLstDocRegIdClear","596","424","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pcDtlDocRegIdClear","596","455","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblLstDocRegIdClear","596","486","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_mblDtlDocRegIdClear","596","517","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totalCountOprUnit","292","109","62","25",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_02_00","322","106","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("W10");
            obj.set_background("pink");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_contract","160","213","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("계약고객 참여");
            this.addChild(obj.name, obj);

            obj = new Static("sta_urlAddr","20","358","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("연결 URL");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_urlAddr","160","362","700","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            this.addChild(obj.name, obj);

            obj = new Static("sta_evturlAddrSize","863","362","109","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("(1000 / 1000 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_mbattExpsYn","160","596","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_mbattExpsYn_innerdataset = new nexacro.NormalDataset("rdo_mbattExpsYn_innerdataset", obj);
            rdo_mbattExpsYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">노출</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미노출</Col></Row></Rows>");
            obj.set_innerdataset(rdo_mbattExpsYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_expsYn","291","630","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("목록 미노출");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_notLogn_Inc_Yn","270","211","98","20",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("미로그인 포함");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,684,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_evtFormCd","value","ds_evtInfo","EVT_FORM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cbx_mallSprCd","value","ds_evtInfo","MALL_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdo_noticSprCd","value","ds_evtInfo","EXPS_NOTIC_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cal_evtStrDt","value","ds_evtInfo","EVT_STR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_evtEndDt","value","ds_evtInfo","EVT_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","rdo_pwnrAncmtYn","value","ds_evtInfo","PWNR_ANCMT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cal_pwnrAncmtDt","value","ds_evtInfo","PWNR_ANCMT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_stampCnt","value","ds_evtInfo","STAMP_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_evtNm","value","ds_evtInfo","EVT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_cpnEvtNo","value","ds_evtInfo","CPN_EVT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_cpnEvtNoNm","value","ds_evtInfo","CPN_EVT_NO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","txt_mbatt","value","ds_evtInfo","MBATT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","txt_pwnrAncmtCts","value","ds_evtInfo","PWNR_ANCMT_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","rdo_useYn","value","ds_evtInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edt_pcLstDocRegIdNm","value","ds_evtInfo","PC_LST_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edt_pcDtlDocRegIdNm","value","ds_evtInfo","PC_DTL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edt_mblLstDocRegIdNm","value","ds_evtInfo","MBL_LST_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edt_mblDtlDocRegIdNm","value","ds_evtInfo","MBL_DTL_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_urlAddr","value","ds_evtInfo","URL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","rdo_mbattExpsYn","value","ds_evtInfo","MBATT_EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","chk_expsYn","value","ds_evtInfo","EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","chk_notLogn_Inc_Yn","value","ds_evtInfo","NOTLOGN_INC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_05.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_05.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_05.xfdl","SA::saUtils.xjs");
        this.registerScript("SSP_BO_NA_05.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 이벤트 - 등록
          CREATION DATES : 2022.03.14
        *******************************************************/

        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("SA::saUtils.xjs"); /*include "SA::saUtils.xjs"*/;
        /* ===============================================================
         * 0. Form Variable
         *  - Form 변수 영역
         * ===============================================================
         */
        //var fv_변수명;
        this.fv_oApp = nexacro.getApplication();
        var fv_coCd = "";

        var curImgBtnName = "";
        this.maxFileSize = "10";
        /* ===============================================================
         * 1. Form Load
         *  - Form 로드시 실행
         * ===============================================================
         */
        this.SSP_BO_NA_05_onload = function(obj, e)
        {
        	// 공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 초기화
        	this.fn_init("VAL_INIT");
        	this.fn_init("FORM_INIT");
        	this.fn_init("CODE_INIT");
        }

        this.fn_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };








        /* ===============================================================
         * 2. transaction
         *  - transaction 영역
         * ===============================================================
         */

        /**
         * 공통코드 값 조회
         */
        this.fn_comCdList = function()
        {
        	this.ds_searchComCd.clearData();
        	var nRow = this.ds_searchComCd.addRow();

        	this.ds_searchComCd.setColumn(nRow, "CODE_LIST", "EVT_FORM_CD,MALL_SPR_CD,EXPS_NOTIC_SPR_CD");
        	this.ds_searchComCd.setColumn(nRow, "LANG_CD", "KO");

        	var sSvcId = "comCdList";
        	var sUrl = "/co/select-common-code-list.do";
        	var sInData = "ds_search=ds_searchComCd"
        	var sOutData = "ds_comboEvtFormCd=ds_output1 ds_comboMallSprCd=ds_output2 ds_comboNoticSprCd=ds_output3";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        };

        /**
         * 운영단위ID 유효성 검사
         */
        this.fn_oprUnitCheck = function()
        {
        	var sSvcId = "oprUnitCheck";
        	var sUrl = "/sa/com/select-opr-unit-check-list.do";
        	var sInData = "ds_searchOprUnitCheckList=ds_searchOprUnitCheckList:A"
        	var sOutData = "ds_oprUnitList=ds_output1";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }

        /**
         * 신규 데이터 등록
         */
        this.fn_saveEvtInfo = function()
        {
        	var sSvcId = "saveEvtInfo";
        	var sUrl = "/sa/evt/save-evt-info.do";
        	var sInData = "ds_save=ds_evtInfo:A ds_save2=ds_gridEvtOprUnitList:A"
        	var sOutData = "";
        	var sArg = "";
        	var sCallback = "fn_callbackFunction";

        	this.gfn_transaction(sSvcId, sUrl, sInData, sOutData, sArg, sCallback);
        }










        /* ===============================================================
         * 3. CallBack
         *  - transaction 후 처리 영역
         * ===============================================================
         */

        /**
         * 공통 callback
         */
        this.fn_callbackFunction = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0)
        	{
        		alert(errorMsg);
        		return;
        	}

        	switch (svcID)
        	{
        		case "comCdList" :

        			this.rdo_evtFormCd.set_index(0);

        			this.cbx_mallSprCd.set_index(0);

        			this.rdo_noticSprCd.set_index(0);

        			break;

        		case "oprUnitCheck" :

        			var tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm == "" || sOprUnitNm == undefined)
        				{
        					tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        				}
        			}

        			if (tempOprUnitId != "")
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000023", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000023", tempOprUnitId)); // 없는 운영단위ID를 입력하였습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var totalCount2 = 0;
        			tempOprUnitId = "";

        			for (var x = 0; x < this.ds_oprUnitList.getRowCount(); x++)
        			{
        				var sBzplcId = this.ds_oprUnitList.getColumn(x, "BZPLC_ID");
        				var sOprUnitId = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_ID");
        				var sOprUnitNm = this.ds_oprUnitList.getColumn(x, "OPR_UNIT_NM");

        				if (sOprUnitNm != "" && sOprUnitNm != undefined)
        				{
        					var findRow = this.ds_gridEvtOprUnitList.findRowExpr("BZPLC_ID == '" + sBzplcId + "' && OPR_UNIT_ID == '" + sOprUnitId + "'");

        					if(findRow < 0)
        					{
        						var nRow = this.ds_gridEvtOprUnitList.addRow();

        						this.ds_gridEvtOprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_gridEvtOprUnitList.setColumn(nRow, "EXHBN_SEQ", "");
        						this.ds_gridEvtOprUnitList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_gridEvtOprUnitList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        						this.ds_gridEvtOprUnitList.setColumn(nRow, "OPR_UNIT_NM", sOprUnitNm);
        					}
        					else
        					{
        						totalCount2 = totalCount2 + 1;

        						tempOprUnitId = tempOprUnitId + "사업장ID : " + sBzplcId + " / 운영단위ID : " + sOprUnitId + "\n";
        					}
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_gridEvtOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "saveEvtInfo" :

        			if( errorCode == -1 || errorCode == -100)
        			{
        				//사용자 지정 에러코드 -100
        				alert(errorMsg);
        			}
        			else
        			{
        				alert(this.fn_getMessage("ERRN000029")); // 등록되었습니다.

        				var resData = {};
        				var resString = "";

        				resData.RETURN_YN = "Y";

        				// json string 변경
        				resString = JSON.stringify(resData);

        				// return
        				this.close(resString);
        			}

        			break;

        		default :

        			break;
        	}
        }

        /**
         * 싱글/멀티 팝업 공통 callback
         */
        this.fn_popupCallbackFunction = function(sPopupId, sRetValue)
        {
        	if(this.gfn_isNull(sRetValue))
        	{
        		return;
        	}

        	var retObj = JSON.parse(sRetValue);

        	switch(sPopupId)
        	{
        		case "btn_searchOprUnit" :

        			var totalCount2 = 0;
        			var tempOprUnitId = "";

        			for(var i=0; i<retObj.length; i++)
        			{
        				var rowData = JSON.parse(retObj[i]);

        				var findRow = this.ds_gridEvtOprUnitList.findRowExpr("BZPLC_ID == '" + rowData.OPR_BZPLC_ID + "' && OPR_UNIT_ID == '" + rowData.OPR_UNIT_ID + "'");

        				if(findRow < 0)
        				{
        					var nRow = this.ds_gridEvtOprUnitList.addRow();

        					this.ds_gridEvtOprUnitList.setColumn(nRow, "CO_CD", this.fv_coCd);
        					this.ds_gridEvtOprUnitList.setColumn(nRow, "EXHBN_SEQ", "");
        					this.ds_gridEvtOprUnitList.setColumn(nRow, "BZPLC_ID", rowData.OPR_BZPLC_ID);
        					this.ds_gridEvtOprUnitList.setColumn(nRow, "OPR_UNIT_ID", rowData.OPR_UNIT_ID);
        					this.ds_gridEvtOprUnitList.setColumn(nRow, "OPR_UNIT_NM", rowData.OPR_UNIT_NM);
        				}
        				else
        				{
        					totalCount2 = totalCount2 + 1;

        					tempOprUnitId = tempOprUnitId + "사업장ID : " + rowData.OPR_BZPLC_ID + " / 운영단위ID : " + rowData.OPR_UNIT_ID + "\n";
        				}
        			}

        			if (totalCount2 > 0)
        			{
        				this.fn_textCopy(this.fn_getMessage("ERRN000024", tempOprUnitId));
        				alert(this.fn_getMessage("ERRN000024", tempOprUnitId)); // 운영단위ID가 중복되었습니다. 운영단위ID를 확인해주세요.\n&1
        			}

        			var sTotText = "(<b v='true'>총 " + this.ds_gridEvtOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);

        			break;

        		case "btn_searchOprUnitMulText" :

        			var retValue = retObj.textValue;

        			if (retValue != "")
        			{
        				this.ds_searchOprUnitCheckList.clearData();

        				var sTempValue = retValue.split(",");

        				for (var x = 0; x < sTempValue.length; x++)
        				{
        					var sTempValueSplit = sTempValue[x].split("	");

        					var sBzplcId = sTempValueSplit[0];
        					var sOprUnitId = sTempValueSplit[1];

        					if (sBzplcId != "" && sBzplcId != undefined && sOprUnitId != "" && sOprUnitId != undefined)
        					{
        						var nRow = this.ds_searchOprUnitCheckList.addRow();

        						this.ds_searchOprUnitCheckList.setColumn(nRow, "CO_CD", this.fv_coCd);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "BZPLC_ID", sBzplcId);
        						this.ds_searchOprUnitCheckList.setColumn(nRow, "OPR_UNIT_ID", sOprUnitId);
        					}
        				}

        				this.fn_oprUnitCheck();
        			}

        			break;

        		case "btn_searchCpnEvtNo" :

        			var rowData = JSON.parse(sRetValue);

        			this.edt_cpnEvtNo.set_value(rowData.CPN_EVT_NO);
        			this.edt_cpnEvtNoNm.set_value(rowData.CPN_NM);

        			break;

        		default :

        			break;
        	}
        }










        /* ===============================================================
         * 4. 외부 호출 FUNCTION 영역
         * ===============================================================
         */

        /**
         * 화면 설정 함수
         */
        this.cfn_formInit = function()
        {
        	// 필수 설정

        	this.sta_evtFormCd.uEssentiel = "true";
        	this.sta_mallSprCd.uEssentiel = "true";
        	this.sta_noticSprCd.uEssentiel = "true";
        	this.sta_evtDt.uEssentiel = "true";
        	this.sta_pwnrAncmtYn.uEssentiel = "false";
        	this.sta_pwnrAncmtDt.uEssentiel = "false";
        	this.sta_stampCnt.uEssentiel = "false";
        	this.sta_evtNm.uEssentiel = "true";
        	this.sta_cpnEvtNo.uEssentiel = "false";
        	this.sta_pcImage.uEssentiel = "true";
        	this.sta_mblImage.uEssentiel = "true";
        	this.sta_mbatt.uEssentiel = "false";
        	this.sta_pwnrAncmtCts.uEssentiel = "false";
        	this.sta_useYn.uEssentiel = "true";

        	// grid 초기 설정
        	this.grd_OprUnit.uSortFlag = "true";
        	this.grd_OprUnit.uServerSortFlag = "false";
        	this.grd_OprUnit.uCellSizeType = "true";
        }










        /* ===============================================================
         * 5. event action
         *  - dataset 및 component 이벤트 영역
         * ===============================================================
         */

        /**
         * 이벤트 형태 값 변경 시
         */
        this.rdo_evtFormCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_evtFormCd.value == "10")
        	{
        		// 10 : 일반형

        		this.sta_evtFormCdTxt.set_text("※ 고객의 참여가 불가능한 공지성 이벤트입니다.");

        		// 필수 설정
        		this.sta_pwnrAncmtYn.uEssentiel = "false";
        		this.sta_pwnrAncmtDt.uEssentiel = "false";
        		this.sta_stampCnt.uEssentiel = "false";
        		this.sta_cpnEvtNo.uEssentiel = "false";
        		this.txt_pwnrAncmtCts.uEssentiel = "false";

        		// 입력 항목 영역
        		//this.rdo_pwnrAncmtYn.set_index(1);
        		//this.cal_pwnrAncmtDt.set_value("");
        		//this.edt_stampCnt.set_value("");
        		//this.edt_cpnEvtNo.set_value("");
        		//this.edt_cpnEvtNoNm.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		// 당첨자 발표, 당첨자 발표일, 스템프 개수, 쿠폰번호, 쿠폰명, 당첨자 발표 항목 항목 비활성화
        		this.rdo_pwnrAncmtYn.set_enable(false);
        		this.cal_pwnrAncmtDt.set_readonly(true);
        		this.edt_stampCnt.set_readonly(true);
        		this.edt_cpnEvtNo.set_readonly(true);
        		this.edt_cpnEvtNoNm.set_readonly(true);
        		this.txt_pwnrAncmtCts.set_readonly(true);


        		// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘
        		this.btn_searchCpnEvtNo.set_enable(false);
        		this.btn_searchCpnEvtNoClear.set_enable(false);

        		//SSP-1642
        		this.chk_contract.set_enable(true);
        		this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N"); //초기값 세팅
        		this.chk_contract.set_value(false);




        		this.sta_pcDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,612)");
        		this.sta_mblDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,612)");
        	}
        	else if (this.rdo_evtFormCd.value == "20")
        	{
        		// 20 : 응모형

        		this.sta_evtFormCdTxt.set_text("※ 고객이 댓글을 통해 이벤트에 직접 참여할 수 있습니다.");

        		// 필수 설정
        		this.sta_pwnrAncmtYn.uEssentiel = "true";
        		this.sta_pwnrAncmtDt.uEssentiel = "true";
        		this.sta_stampCnt.uEssentiel = "false";
        		this.sta_cpnEvtNo.uEssentiel = "false";
        		this.txt_pwnrAncmtCts.uEssentiel = "true";

        		// 입력 항목 영역
        		//this.rdo_pwnrAncmtYn.set_index(1);
        		//this.cal_pwnrAncmtDt.set_value("");
        		//this.edt_stampCnt.set_value("");
        		//this.edt_cpnEvtNo.set_value("");
        		//this.edt_cpnEvtNoNm.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		// 당첨자 발표, 당첨자 발표일, 스템프 개수, 쿠폰번호, 쿠폰명, 당첨자 발표 항목 항목 비활성화
        		this.rdo_pwnrAncmtYn.set_enable(true);
        		this.cal_pwnrAncmtDt.set_readonly(true);
        		this.edt_stampCnt.set_readonly(true);
        		this.edt_cpnEvtNo.set_readonly(true);
        		this.edt_cpnEvtNoNm.set_readonly(true);
        		this.txt_pwnrAncmtCts.set_readonly(true);

        		// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘
        		this.btn_searchCpnEvtNo.set_enable(false);
        		this.btn_searchCpnEvtNoClear.set_enable(false);

        		//SSP-1642
        		this.chk_contract.set_enable(true);
        		this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N"); //초기값 세팅
        		this.chk_contract.set_value(false);



        		if (this.rdo_pwnrAncmtYn.value == "Y")
        		{
        			this.sta_pwnrAncmtDt.uEssentiel = "true";
        			this.txt_pwnrAncmtCts.uEssentiel = "true";

        			this.cal_pwnrAncmtDt.set_readonly(false);
        			this.txt_pwnrAncmtCts.set_readonly(false);
        		}
        		else
        		{
        			this.sta_pwnrAncmtDt.uEssentiel = "false";
        			this.txt_pwnrAncmtCts.uEssentiel = "false";

        			this.cal_pwnrAncmtDt.set_readonly(true);
        			this.txt_pwnrAncmtCts.set_readonly(true);
        		}

        		this.sta_pcDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,612)");
        		this.sta_mblDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,612)");
        	}
        	else if (this.rdo_evtFormCd.value == "30")
        	{
        		// 30 : 스템프

        		this.sta_evtFormCdTxt.set_text("※ 고객은 일정 기간/횟수로 직접 참여할 수 있으며, 조건 충족 시 혜택을 제공 받을 수 있습니다.");

        		// 필수 설정
        		this.sta_pwnrAncmtYn.uEssentiel = "false";
        		this.sta_pwnrAncmtDt.uEssentiel = "false";
        		this.sta_stampCnt.uEssentiel = "true";
        		this.sta_cpnEvtNo.uEssentiel = "true";
        		this.txt_pwnrAncmtCts.uEssentiel = "false";
        		this.chk_contract.uEssentiel = "true";

        		// 입력 항목 영역
        		//this.rdo_pwnrAncmtYn.set_index(1);
        		//this.cal_pwnrAncmtDt.set_value("");
        		//this.edt_stampCnt.set_value("");
        		//this.edt_cpnEvtNo.set_value("");
        		//this.edt_cpnEvtNoNm.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		// 당첨자 발표, 당첨자 발표일, 스템프 개수, 쿠폰번호, 쿠폰명, 당첨자 발표 항목 항목 비활성화
        		this.rdo_pwnrAncmtYn.set_enable(false);
        		this.cal_pwnrAncmtDt.set_readonly(true);
        		this.edt_stampCnt.set_readonly(false);
        		this.edt_cpnEvtNo.set_readonly(false);
        		this.edt_cpnEvtNoNm.set_readonly(true);
        		this.txt_pwnrAncmtCts.set_readonly(true);


        		// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘
        		this.btn_searchCpnEvtNo.set_enable(true);
        		this.btn_searchCpnEvtNoClear.set_enable(true);

        		//SSP-1642
        		this.chk_contract.set_enable(true);
        		this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N"); //초기값 세팅
        		this.chk_contract.set_value(false);

        		if(this.chk_contract.value)
        		{	this.edt_cpnEvtNo.set_value("");
        			this.edt_cpnEvtNoNm.set_value("");
        			this.btn_searchCpnEvtNo.set_enable(false);
        			this.btn_searchCpnEvtNoClear.set_enable(false);
        		}



        		this.sta_pcDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,577)");
        		this.sta_mblDtlDocRegId.set_text("용량 : 10M 미만 / 형식 : PNG, JPG (최적 사이즈 : 1,920*1,577)");
        	}
        };

        /**
         * 게시구분 값 변경 시
         */
        this.rdo_noticSprCd_onitemchanged = function(obj,e)
        {
        	if (this.rdo_noticSprCd.value == "30" || this.rdo_noticSprCd.value == "50"
        		|| this.rdo_noticSprCd.value == "60" || this.rdo_noticSprCd.value == "70")
        	{
        		this.grd_OprUnit.set_enable(true);

        		// 로그인운영단위 검색 아이콘
        		this.btn_searchOprUnit.set_enable(true);
        		this.btn_searchOprUnitMulText.set_enable(true);

        		this.chk_notLogn_Inc_Yn.set_enable(true);
        	}
        	else
        	{
        		this.grd_OprUnit.set_enable(false);

        		// 로그인운영단위 검색 아이콘
        		this.btn_searchOprUnit.set_enable(false);
        		this.btn_searchOprUnitMulText.set_enable(false);

        		this.chk_notLogn_Inc_Yn.set_value(false);
        		this.chk_notLogn_Inc_Yn.set_enable(false);
        		this.ds_evtInfo.setColumn(0, "NOTLOGN_INC_YN", "N");
        	}
        };

        /**
         * 그리드 cell 클릭 시
         */
        this.grd_OprUnit_oncellclick = function(obj,e)
        {
        	var sEditType = obj.getCellProperty("body", e.cell, "edittype");

        	if(sEditType == "button")
        	{
        		if ( confirm(this.fn_getMessage("ERRN000048"))) // 삭제하시겠습니까?
        		{
        			this.ds_gridEvtOprUnitList.deleteRow(e.row);

        			var sTotText = "(<b v='true'>총 " + this.ds_gridEvtOprUnitList.getRowCount() + "건 </b>)";
        			this.sta_totalCountOprUnit.set_text(sTotText);
        		}
        	}
        };

        /**
         * 로그인운영단위 검색 아이콘 클릭 시
         */
        this.btn_searchOprUnit_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
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

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_23.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 로그인운영단위 멀티텍스트 아이콘 클릭 시
         */
        this.btn_searchOprUnitMulText_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
        	           , textId : this.btn_searchOprUnitMulText
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
        	              , title : "멀티 텍스트"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_SA_MSEARCH.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 당첨자 발표 값 변경 시
         */
        this.rdo_pwnrAncmtYn_onitemchanged = function(obj,e)
        {
        	if (this.rdo_pwnrAncmtYn.value == "Y")
        	{
        		// 입력 항목 영역
        		//this.cal_pwnrAncmtDt.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		// 당첨자 발표일항목 활성화
        		this.cal_pwnrAncmtDt.set_readonly(false);
        		this.txt_pwnrAncmtCts.set_readonly(false);
        	}
        	else
        	{
        		// 입력 항목 영역
        		//this.cal_pwnrAncmtDt.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		// 당첨자 발표일항목 비활성화
        		this.cal_pwnrAncmtDt.set_readonly(true);
        		this.txt_pwnrAncmtCts.set_readonly(true);
        	}
        };

        /**
         * 이벤트 명 텍스트 입력 시
         */
        this.edt_evtNm_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 300, "00");
        };
        /**
         * 이벤트 URL 입력 시
         */
        this.edt_urlAddr_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 1000, "10");
        };

        /**
         * 쿠폰 선택 검색 아이콘 클릭 시
         */
        this.btn_searchCpnEvtNo_onclick = function(obj,e)
        {
        	var oArg = { coCd : this.fv_coCd
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
        	              , title : "쿠폰 조회"
        	              };

        	this.gfn_openPopup(e.fromobject.id, "SA::SSP_BO_PP_29.xfdl", oArg, "fn_popupCallbackFunction", oOption);
        };

        /**
         * 쿠폰 선택 삭제 아이콘 클릭 시
         */
        this.btn_searchCpnEvtNoClear_onclick = function(obj,e)
        {
        	this.edt_cpnEvtNo.set_value("");
        	this.edt_cpnEvtNoNm.set_value("");
        };

        /**
         * [PC] 이미지 - 목록 파일첨부 버튼 클릭 시
         */
        this.btn_pcLstDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [PC] 이미지 - 목록 삭제 아이콘 클릭 시
         */
        this.btn_pcLstDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_pcLstDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("pcLstDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcLstDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * [PC] 이미지 - 상세 파일첨부 버튼 클릭 시
         */
        this.btn_pcDtlDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [PC] 이미지 - 상세 삭제 아이콘 클릭 시
         */
        this.btn_pcDtlDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_pcDtlDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("pcDtlDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'pcDtlDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * [Mobile] 이미지 - 목록 파일첨부 버튼 클릭 시
         */
        this.btn_mblLstDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [Mobile] 이미지 - 목록 삭제 아이콘 클릭 시
         */
        this.btn_mblLstDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_mblLstDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("mblLstDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblLstDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * [Mobile] 이미지 - 상세 파일첨부 버튼 클릭 시
         */
        this.btn_mblDtlDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * [Mobile] 이미지 - 상세 삭제 아이콘 클릭 시
         */
        this.btn_mblDtlDocRegIdClear_onclick = function(obj,e)
        {
        	this.edt_mblDtlDocRegIdNm.set_value("");

        	this.fileUpTrans.removeFile("mblDtlDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'mblDtlDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };

        /**
         * 유의사항 텍스트 입력 시
         */
        this.txt_mbatt_onkeyup = function(obj,e)
        {
        	this.fn_setLenByte(obj.value, 2000, "09");
        };

        /**
         * 취소 버튼 클릭 시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if ( confirm(this.fn_getMessage("ERRN000053"))) // 취소하시겠습니까?
        	{
        		var resData = {};
        		var resString = "";

        		resData.RETURN_YN = "N";

        		// json string 변경
        		resString = JSON.stringify(resData);

        		// return
        		this.close(resString);
        	}
        };

        /**
         * 등록 버튼 클릭 시
         */
        this.btn_write_onclick = function(obj,e)
        {
        	if (this.rdo_noticSprCd.value == "30")
        	{
        		if (this.ds_gridEvtOprUnitList.getRowCount() <= 0)
        		{
        			alert(this.fn_getMessage("ERRN000022")); // 게시 구분(로그인운영단위)을 선택하시면 운영단위를 추가해야 합니다.
        			return;
        		}
        	}

        	if (this.cal_evtStrDt.value == "" || this.cal_evtStrDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "이벤트 시작일은")); // 이벤트 시작일은 필수 입력항목입니다.
        		this.cal_evtStrDt.setFocus();
        		return
        	}

        	if (this.cal_evtEndDt.value == "" || this.cal_evtEndDt.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "이벤트 종료일은")); // 이벤트 종료일은 필수 입력항목입니다.
        		this.cal_evtEndDt.setFocus();
        		return
        	}

        	if (this.cal_evtStrDt.value > this.cal_evtEndDt.value)
        	{
        		alert(this.fn_getMessage("ERRN000002", "이벤트 종료일이 이벤트 시작일보다")); // 이벤트 종료일이 이벤트 시작일보다 작습니다.
        		this.cal_evtStrDt.setFocus();
        		return
        	}

        	if (this.edt_evtNm.value == "" || this.edt_evtNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "이벤트 명은")); // 이벤트 명은 필수 입력항목입니다.
        		this.edt_evtNm.setFocus();
        		return
        	}

        	if (this.rdo_evtFormCd.value == "10")
        	{
        		// 10 : 일반형

        		// 입력 항목 영역
        		this.rdo_pwnrAncmtYn.set_index(1);
        		this.cal_pwnrAncmtDt.set_value("");
        		this.edt_stampCnt.set_value("");
        		this.edt_cpnEvtNo.set_value("");
        		this.edt_cpnEvtNoNm.set_value("");
        		this.txt_pwnrAncmtCts.set_value("");
        	}
        	else if (this.rdo_evtFormCd.value == "20")
        	{
        		// 20 : 응모형

        		// 입력 항목 영역
        		//this.rdo_pwnrAncmtYn.set_index(1);
        		//this.cal_pwnrAncmtDt.set_value("");
        		this.edt_stampCnt.set_value("");
        		this.edt_cpnEvtNo.set_value("");
        		this.edt_cpnEvtNoNm.set_value("");
        		//this.txt_pwnrAncmtCts.set_value("");

        		if (this.rdo_pwnrAncmtYn.value == "Y")
        		{
        			if (this.cal_pwnrAncmtDt.value == "" || this.cal_pwnrAncmtDt.value == undefined)
        			{
        				alert(this.fn_getMessage("ERRN000001", "당첨자 발표일은")); // 당첨자 발표일은 필수 입력항목입니다.
        				this.cal_pwnrAncmtDt.setFocus();
        				return
        			}

        			/*
        			if (this.txt_pwnrAncmtCts.value == "" || this.txt_pwnrAncmtCts.value == undefined)
        			{
        				alert("당첨자 발표는 필수 입력항목입니다.");
        				this.txt_pwnrAncmtCts.setFocus();
        				return
        			}
        			*/
        		}
        		else
        		{
        			// 입력 항목 영역
        			this.cal_pwnrAncmtDt.set_value("");
        			this.txt_pwnrAncmtCts.set_value("");
        		}
        	}
        	else if (this.rdo_evtFormCd.value == "30")
        	{
        		// 30 : 스템프

        		// 입력 항목 영역
        		this.rdo_pwnrAncmtYn.set_index(1);
        		this.cal_pwnrAncmtDt.set_value("");
        		//this.edt_stampCnt.set_value("");
        		//this.edt_cpnEvtNo.set_value("");
        		//this.edt_cpnEvtNoNm.set_value("");
        		this.txt_pwnrAncmtCts.set_value("");

        		if (this.edt_stampCnt.value == "" || this.edt_stampCnt.value == undefined)
        		{
        			alert(this.fn_getMessage("ERRN000001", "스템프 개수는")); // 스템프 개수는 필수 입력항목입니다.
        			this.edt_stampCnt.setFocus();
        			return
        		}

        		if (parseInt(this.edt_stampCnt.value) < 0 || parseInt(this.edt_stampCnt.value) > 10)
        		{
        			alert(this.fn_getMessage("ERRN000008")); // 스템프 개수는 최소 1개에서 최대 10개까지 입니다.
        			this.edt_stampCnt.setFocus();
        			return
        		}

        		if (parseInt(this.edt_stampCnt.value) > (this.gfn_getDiffDate(this.cal_evtStrDt.value, this.cal_evtEndDt.value) + 1))
        		{
        			alert(this.fn_getMessage("ERRN000009")); // 스템프 개수는 이벤트 일수를 초과할 수 없습니다.
        			return;
        		}

        		//SSP-1642
        		if(!this.chk_contract.value)
        		{
        			if (this.edt_cpnEvtNo.value == "" || this.edt_cpnEvtNo.value == undefined)
        			{
        				alert(this.fn_getMessage("ERRN000001", "쿠폰은")); // 쿠폰은 필수 입력항목입니다.
        				return
        			}
        		}



        	}

        	if (this.edt_pcLstDocRegIdNm.value == "" || this.edt_pcLstDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[PC] 목록 이미지는")); // [PC] 목록 이미지는 필수 입력항목입니다.
        		return;
        	}

        	if (this.edt_pcDtlDocRegIdNm.value == "" || this.edt_pcDtlDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[PC] 상세 이미지는")); // [PC] 상세 이미지는 필수 입력항목입니다.
        		return;
        	}

        	if (this.edt_mblLstDocRegIdNm.value == "" || this.edt_mblLstDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[Mobile] 목록 이미지는")); // [Mobile] 목록 이미지는 필수 입력항목입니다.
        		return;
        	}

        	if (this.edt_mblDtlDocRegIdNm.value == "" || this.edt_mblDtlDocRegIdNm.value == undefined)
        	{
        		alert(this.fn_getMessage("ERRN000001", "[Mobile] 상세 이미지는")); // [Mobile] 상세 이미지는 필수 입력항목입니다.
        		return;
        	}

        	if ( !confirm(this.fn_getMessage("ERRN000043"))) // 등록하시겠습니까?
        	{
        		return;
        	}

        	// 게시구분코드가 운영단위가 아니면 아니면 운영단위 정보 삭제
        	// SSP-2971
        	if(this.rdo_noticSprCd.value != "30" && this.rdo_noticSprCd.value != "50"
        		&& this.rdo_noticSprCd.value != "60" && this.rdo_noticSprCd.value != "70") {
        		var aDelArr = new Array();

        		for(var i = 0; i< this.ds_gridEvtOprUnitList.rowcount; i++)
        		{
        			aDelArr.push(i);
        		}

        		this.ds_gridEvtOprUnitList.deleteMultiRows(aDelArr);
        	}

        	// 파일업로드
        	if( this.ds_file.rowcount > 0 )
        	{
        		if(this.fn_dataCheck(this.ds_file) )
        		{
        			var jsonArray = new Array();

        			for(var i=0; i<this.ds_file.rowcount; i++)
        			{
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				var jsonObj = new Object();

        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcLstDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_LST_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "pcDtlDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "PC_DTL_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblLstDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_LST_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "mblDtlDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_REG_SEQ") == undefined ? 1 :this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" :this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_evtInfo.getColumn(0, "MBL_DTL_DOC_REG_ID_ORI_ATFL_NM");
        				}

        				jsonArray.push(jsonObj);
        			}

        			this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        			this.fileUpTrans.upload('/sa/com/file-upload.do');
        		}
        		else
        		{
        			this.fn_saveEvtInfo();
        		}
        	}
        	else
        	{
        		this.fn_saveEvtInfo();
        	}
        };










        /* ===============================================================
         * 6. User Function
         *  - 사용자 구현 함수 영역
         * =============================================================== */

        /**
         * 글자 byte 체크 함수
         */
        this.fn_setLenByte = function(sVal, maxByte, sGubun)
        {
        	var count = nexacro._getUtf8Length(sVal);
        	var expsText = "";

        	if (count < 0)
        	{
        		count = 0;
        	}

        	if(count <= maxByte)
        	{
        		expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        		if (sGubun == "00")
        		{
        			this.sta_evtNmSize.set_text(expsText);
        		}
        		else if (sGubun == "09")
        		{
        			this.sta_mbattSize.set_text(expsText);
        		}
        		else if (sGubun == "10")
        		{
        			this.sta_evturlAddrSize.set_text(expsText);
        		}

        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	//trace(tempVal + " / " + count);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "00")
        	{
        		this.edt_evtNm.set_value("");
        		this.edt_evtNm.set_value(tempVal);
        		this.sta_evtNmSize.set_text(expsText);
        	}
        	else if (sGubun == "09")
        	{
        		this.txt_mbatt.set_value("");
        		this.txt_mbatt.set_value(tempVal);
        		this.sta_mbattSize.set_text(expsText);
        	}
        	else if (sGubun == "10")
        	{
        		this.edt_urlAddr.set_value("");
        		this.edt_urlAddr.set_value(tempVal);
        		this.sta_evturlAddrSize.set_text(expsText);
        	}
        };

        /**
         * 화면 초기화 함수
         */
        this.fn_init = function(sVal)
        {
        	switch (sVal)
        	{
        		case "VAL_INIT" :

        			// 변수 초기화

        			this.fv_coCd = this.fv_oApp.gds_userInfo.getColumn(0, "CO_CD");

        			break;

        		case "FORM_INIT" :

        			// 입력 항목 초기화

        			// dataset 영역
        			this.ds_searchOprUnitCheckList.clearData();
        			this.ds_oprUnitList.clearData();

        			this.ds_evtInfo.clearData();
        			var nRow = this.ds_evtInfo.addRow();

        			this.ds_evtInfo.setColumn(nRow, "CO_CD", this.fv_coCd);

        			this.ds_gridEvtOprUnitList.clearData();

        			// 입력 항목 영역
        			this.rdo_evtFormCd.set_index(0);
        			this.sta_evtFormCdTxt.set_text("※ 고객의 참여가 불가능한 공지성 이벤트입니다.");
        			this.cbx_mallSprCd.set_index(0);
        			this.rdo_noticSprCd.set_index(0);
        			this.cal_evtStrDt.set_value("");
        			this.cal_evtEndDt.set_value("");
        			this.rdo_pwnrAncmtYn.set_index(1);
        			this.cal_pwnrAncmtDt.set_value("");
        			this.edt_stampCnt.set_value("");
        			this.edt_evtNm.set_value("");
        			this.sta_evtNmSize.set_text("(<fc v='red'>0</fc> / 300 Byte)");
        			this.sta_evturlAddrSize.set_text("(<fc v='red'>0</fc> / 1000 Byte)");
        			this.edt_cpnEvtNo.set_value("");
        			this.edt_cpnEvtNoNm.set_value("");
        			this.edt_pcLstDocRegIdNm.set_value("");
        			this.edt_pcDtlDocRegIdNm.set_value("");
        			this.edt_mblLstDocRegIdNm.set_value("");
        			this.edt_mblDtlDocRegIdNm.set_value("");
        			this.txt_mbatt.set_value("");
        			this.sta_mbattSize.set_text("(<fc v='red'>0</fc> / 2000 Byte)");
        			this.txt_pwnrAncmtCts.set_value("");
        			this.rdo_useYn.set_index(0);
        			this.rdo_mbattExpsYn.set_index(1); // SSP-2508

        			// 당첨자 발표, 당첨자 발표일, 스템프 개수, 쿠폰번호, 쿠폰명, [PC] 이미지 - 목록, [PC] 이미지 - 상세, [Mobile] 이미지 - 목록, [Mobile] 이미지 - 상세, 당첨자 발표 항목 비활성화
        			this.rdo_pwnrAncmtYn.set_enable(false);
        			this.cal_pwnrAncmtDt.set_readonly(true);
        			this.edt_stampCnt.set_readonly(true);
        			this.edt_cpnEvtNo.set_readonly(true);
        			this.edt_cpnEvtNoNm.set_readonly(true);
        			this.edt_pcLstDocRegIdNm.set_readonly(true);
        			this.edt_pcDtlDocRegIdNm.set_readonly(true);
        			this.edt_mblLstDocRegIdNm.set_readonly(true);
        			this.edt_mblDtlDocRegIdNm.set_readonly(true);
        			this.txt_pwnrAncmtCts.set_readonly(true);

        			// 버튼 영역

        			// 로그인운영단위 검색, 로그인운영단위 멀티텍스트 아이콘
        			this.btn_searchOprUnit.set_enable(false);
        			this.btn_searchOprUnitMulText.set_enable(false);

        			//SSP-1642
        			this.chk_contract.set_enable(true);

        			//SSP-2600 : 목록 미노출 체크박스
        			this.chk_expsYn.set_enable(true);
        			this.chk_expsYn.set_value(false);
        			this.ds_evtInfo.setColumn(nRow, "EXPS_YN", "Y");

        			// SSP-2971
        			this.chk_notLogn_Inc_Yn.set_enable(true);
        			this.chk_notLogn_Inc_Yn.set_value(false);
        			this.ds_evtInfo.setColumn(nRow, "NOTLOGN_INC_YN", "N");

        			// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘
        			this.btn_searchCpnEvtNo.set_enable(false);
        			this.btn_searchCpnEvtNoClear.set_enable(false);

        			// [PC] 이미지 - 목록 - 파일첨부, [PC] 이미지 - 상세 - 파일첨부, [Mobile] 이미지 - 목록 - 파일첨부, [Mobile] 이미지 - 상세 - 파일첨부
        			this.btn_pcLstDocRegId.set_enable(true);
        			this.btn_pcDtlDocRegId.set_enable(true);
        			this.btn_mblLstDocRegId.set_enable(true);
        			this.btn_mblDtlDocRegId.set_enable(true);

        			// 취소, 등록 버튼
        			this.btn_cancel.set_enable(true);
        			this.btn_write.set_enable(true);

        			// grid 영역
        			this.grd_OprUnit.nodatatext = "추가한 항목이 없습니다.";

        			// 운영단위 grid 항목 비활성화
        			this.grd_OprUnit.set_enable(false);

        			break;

        		case "CODE_INIT" :

        			// 코드 초기화

        			// 공통코드 값 조회
        			this.fn_comCdList();

        			break;

        		default :

        			//alert("작업구분이 없습니다.");

        			break;
        	}
        }










        /* ===============================================================
         * 6-1. 파일
         * =============================================================== */

        /**
         * 해당 row에 파일 추가
         */
        this.addFileList = function(filelists)
        {
        	var vFile= filelists[0];
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, VirtualFile.openRead);
        	vFile.getFileSize();	//return file size
        	vFile.close();
        };

        /**
         * 업로드용 Virtual 파일 onsuccess 이벤트
         */
        this.fileList_onsuccess = function(obj, e)
        {
        	if (e.reason == 1)
        	{
        		// 파일사이즈 체크

        		obj.getFileSize();
        	}

        	if (e.reason == 9)
        	{
        		if( !this.fn_fileSizeCheck(obj, e.filesize) )
        		{
        			return false;
        		}

        		// 같은 이름의 파일을 업로드했을 경우 대비

        		//this.ds_evtInfo.set_updatecontrol(false);
        		//this.ds_evtInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		//this.ds_evtInfo.set_updatecontrol(true);

        		if(this.curImgBtnName == "btn_pcLstDocRegId")
        		{
        			this.fileUpTrans.removeFile("pcLstDocRegId");

        			// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "pcLstDocRegId");

        			this.edt_pcLstDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("pcLstDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_pcDtlDocRegId")
        		{
        			this.fileUpTrans.removeFile("pcDtlDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "pcDtlDocRegId");

        			this.edt_pcDtlDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("pcDtlDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_mblLstDocRegId")
        		{
        			this.fileUpTrans.removeFile("mblLstDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mblLstDocRegId");

        			this.edt_mblLstDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("mblLstDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_mblDtlDocRegId")
        		{
        			this.fileUpTrans.removeFile("mblDtlDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "mblDtlDocRegId");

        			this.edt_mblDtlDocRegIdNm.set_value(obj.filename);

        			this.fileUpTrans.addFile("mblDtlDocRegId", obj)
        		}
        	}
        };

        /**
         * 업로드용 Virtual 파일 oneroor 이벤트
         */
        this.fileList_onerror = function(obj, e)
        {
        	var msg = ">>>>>>>>> VirtualFile event ERROR >>>>>>>>\n";
        	msg += "errortype : " + e.errortype + "\n";
        	msg += "errormsg : " + e.errormsg + "\n";
        	msg += "statuscode : " + e.statuscode;

        	alert(msg);

        	this.nRow = -1;
        };

        /**
         * 파일 확장자 검증
         */
        this.fn_fileSizeCheck = function(obj, fileSize)
        {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1);	// 맨 뒤 확장자만 자르기
        	var fileGbn = ".jpg, .png";

        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;

        	if( this.maxFileSize < mbSize )
        	{
        		alert(this.fn_getMessage("ERRN000039", extNm)); // &1 파일은 10MB 이상으로 첨부하실 수 없습니다.
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 )
        	{
        		alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		return false;
        	}

        	return true;
        };

        /**
         * 파일 DIALOG CLOSE 이벤트
         */
        this.fileDialog_onclose = function(obj,e)
        {
        	if(this.gfn_isNull(e.virtualfiles))
        	{
        		return;
        	}

        	var vFile = e.virtualfiles[0];

        	//VirtualFile 이벤트 생성
        	vFile.addEventHandler("onsuccess", this.fileList_onsuccess, this);
        	vFile.addEventHandler("onerror", this.fileList_onerror, this);
        	vFile.open(null, 1);
        };

        /**
         * 다운 완료
         */
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        /**
         * 다운 실패
         */
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        /**
         * 저장 -> 파일 업로드 성공 시
         */
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];

        	if(objCallDs.rowcount  == 0 )
        	{
        		alert(this.fn_getMessage("ERRN000041")); // 파일 업로드 오류입니다.
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++)
        	{
        		/*
        		if(objCallDs.getColumn(i, "result") == "none")
        		{
        			alert("파일이 없습니다.");
        			return;
        		}
        		*/

        		if(objCallDs.getColumn(i, "imgType") == "pcLstDocRegId")
        		{
        			this.ds_evtInfo.setColumn(0, "PC_LST_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "pcDtlDocRegId")
        		{
        			this.ds_evtInfo.setColumn(0, "PC_DTL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "mblLstDocRegId")
        		{
        			this.ds_evtInfo.setColumn(0, "MBL_LST_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "mblDtlDocRegId")
        		{
        			this.ds_evtInfo.setColumn(0, "MBL_DTL_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.ds_file.clearData();			// 업로드 완료 후 ds_file 클리어
        	this.fileUpTrans.clearFileList();

        	// 신규 데이터 등록
        	this.fn_saveEvtInfo	();
        };

        /**
         * 파일전송 실패
         */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };






        //SSP-1642 : 계약고객 참여 여부
        this.chk_contract_onchanged = function(obj,e)
        {

        	if(this.chk_contract.value)
        	{
        		//쿠폰번호, 쿠폰명 항목 비활성화
        		this.edt_cpnEvtNo.set_value("");
        	    this.edt_cpnEvtNoNm.set_value("");
        		// 쿠폰 선택 검색 아이콘, 쿠폰 선택 삭제 아이콘 비활성화
        		this.btn_searchCpnEvtNo.set_enable(false);
        		this.btn_searchCpnEvtNoClear.set_enable(false);

        		this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","Y");
        	}
        	else
        	{
        		if(this.rdo_evtFormCd.value == "10")
        		{
        			this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N");
        		}
        		else if(this.rdo_evtFormCd.value == "20")
        		{
        			this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N");
        		}
        		else if(this.rdo_evtFormCd.value == "30")
        		{
        			this.edt_cpnEvtNo.set_readonly(false);
        			this.edt_cpnEvtNoNm.set_readonly(true);
        			this.btn_searchCpnEvtNo.set_enable(true);
        			this.btn_searchCpnEvtNoClear.set_enable(true);
        			this.ds_evtInfo.setColumn(0,"CONT_CUST_PRTC_YN","N");
        		}

        	}

        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_NA_05_onload,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Static07.addEventHandler("onclick",this.Static07_onclick,this);
            this.rdo_noticSprCd.addEventHandler("onitemchanged",this.rdo_noticSprCd_onitemchanged,this);
            this.btn_searchOprUnit.addEventHandler("onclick",this.btn_searchOprUnit_onclick,this);
            this.sta_noticSprCd.addEventHandler("onclick",this.sta_noticSprCd_onclick,this);
            this.grd_OprUnit.addEventHandler("oncellclick",this.grd_OprUnit_oncellclick,this);
            this.rdo_evtFormCd.addEventHandler("onitemchanged",this.rdo_evtFormCd_onitemchanged,this);
            this.edt_evtNm.addEventHandler("onkeyup",this.edt_evtNm_onkeyup,this);
            this.btn_searchCpnEvtNo.addEventHandler("onclick",this.btn_searchCpnEvtNo_onclick,this);
            this.txt_mbatt.addEventHandler("onkeyup",this.txt_mbatt_onkeyup,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.btn_searchCpnEvtNoClear.addEventHandler("onclick",this.btn_searchCpnEvtNoClear_onclick,this);
            this.btn_searchOprUnitMulText.addEventHandler("onclick",this.btn_searchOprUnitMulText_onclick,this);
            this.rdo_pwnrAncmtYn.addEventHandler("onitemchanged",this.rdo_pwnrAncmtYn_onitemchanged,this);
            this.cal_pwnrAncmtDt.addEventHandler("onchanged",this.cal_pwnrAncmtDt_onchanged,this);
            this.edt_stampCnt.addEventHandler("onkeyup",this.edt_exhbnNm_onkeyup,this);
            this.txt_pwnrAncmtCts.addEventHandler("onkeyup",this.txt_exhbnDesc_onkeyup,this);
            this.btn_pcLstDocRegId.addEventHandler("onclick",this.btn_pcLstDocRegId_onclick,this);
            this.btn_pcDtlDocRegId.addEventHandler("onclick",this.btn_pcDtlDocRegId_onclick,this);
            this.btn_mblLstDocRegId.addEventHandler("onclick",this.btn_mblLstDocRegId_onclick,this);
            this.btn_mblDtlDocRegId.addEventHandler("onclick",this.btn_mblDtlDocRegId_onclick,this);
            this.btn_pcLstDocRegIdClear.addEventHandler("onclick",this.btn_pcLstDocRegIdClear_onclick,this);
            this.btn_pcDtlDocRegIdClear.addEventHandler("onclick",this.btn_pcDtlDocRegIdClear_onclick,this);
            this.btn_mblLstDocRegIdClear.addEventHandler("onclick",this.btn_mblLstDocRegIdClear_onclick,this);
            this.btn_mblDtlDocRegIdClear.addEventHandler("onclick",this.btn_mblDtlDocRegIdClear_onclick,this);
            this.chk_contract.addEventHandler("onchanged",this.chk_contract_onchanged,this);
            this.edt_urlAddr.addEventHandler("onkeyup",this.edt_urlAddr_onkeyup,this);
            this.chk_expsYn.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
