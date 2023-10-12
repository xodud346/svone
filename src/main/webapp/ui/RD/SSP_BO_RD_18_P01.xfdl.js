(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("중복상품확인");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel_report", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empty", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"exclNm\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"excelStorTblNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"refCdGrpSeq\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_export", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGPLC_CTRY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_UNT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_UNT\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_save", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"usrId\" type=\"STRING\" size=\"256\"/><Column id=\"upldPgmIdtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"prdId\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal01\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal02\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal03\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal04\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal05\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal06\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal07\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal08\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal09\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal10\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal11\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal12\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal13\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal14\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal15\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal16\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal17\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal18\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal19\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal20\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal21\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal22\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal23\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal24\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal25\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal26\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal27\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal28\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal29\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal30\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal31\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal32\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal33\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal34\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal35\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal36\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal37\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal38\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal39\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal40\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal41\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal42\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal43\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal44\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal45\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal46\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal47\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal48\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal49\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal50\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal51\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal52\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal53\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal54\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal55\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal56\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal57\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal58\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal59\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal60\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal61\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal62\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal63\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal64\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal65\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal66\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal67\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal68\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal69\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal70\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal71\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal72\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal73\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal74\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal75\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal76\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal77\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal78\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal79\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal80\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal81\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal82\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal83\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal84\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal85\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal86\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal87\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal88\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal89\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal90\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal91\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal92\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal93\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal94\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal95\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal96\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal97\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal98\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal99\" type=\"STRING\" size=\"256\"/><Column id=\"updMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCts\" type=\"STRING\" size=\"256\"/><Column id=\"vldLnmVldtDtm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"regDtm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_save", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_YN\" type=\"STRING\" size=\"1\"/><Column id=\"EXCEL_ROW_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_ROW_NO_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_exportTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"usrId\" type=\"STRING\" size=\"256\"/><Column id=\"upldPgmIdtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"prdId\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal01\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal02\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal03\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal04\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal05\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal06\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal07\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal08\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal09\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal10\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal11\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal12\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal13\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal14\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal15\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal16\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal17\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal18\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal19\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal20\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal21\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal22\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal23\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal24\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal25\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal26\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal27\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal28\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal29\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal30\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal31\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal32\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal33\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal34\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal35\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal36\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal37\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal38\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal39\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal40\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal41\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal42\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal43\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal44\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal45\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal46\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal47\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal48\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal49\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal50\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal51\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal52\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal53\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal54\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal55\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal56\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal57\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal58\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal59\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal60\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal61\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal62\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal63\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal64\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal65\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal66\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal67\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal68\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal69\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal70\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal71\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal72\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal73\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal74\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal75\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal76\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal77\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal78\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal79\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal80\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal81\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal82\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal83\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal84\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal85\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal86\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal87\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal88\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal89\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal90\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal91\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal92\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal93\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal94\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal95\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal96\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal97\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal98\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal99\" type=\"STRING\" size=\"256\"/><Column id=\"updMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCts\" type=\"STRING\" size=\"256\"/><Column id=\"vldLnmVldtDtm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"regDtm\" type=\"STRING\" size=\"256\"/><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_job", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"usrId\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"modified\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj._setContents("<ColumnInfo><Column id=\"errorCount\" type=\"INT\" size=\"256\"/><Column id=\"totalCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","62",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpKorNm","20","62","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("양식");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_01","22","38","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("요청자 정보");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","20","94",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_format_download","466","66","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("양식다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("FILE_NAME","160","98","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cprtcpKorNm00","20","94","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Combo("PGM_ID","160","68","300","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_excel_report");
            obj.set_codecolumn("PGM_ID");
            obj.set_datacolumn("UPLD_FRM_NM");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_search","465","98","85","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","627","98","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("엑셀다운로드");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","184",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_excel_export");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj.set_selecttype("cell");
            obj.set_cellmovingtype("col");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행번호\"/><Cell col=\"2\" text=\"오류코드\"/><Cell col=\"3\" text=\"오류내용\"/><Cell col=\"4\" text=\"회사코드\"/><Cell col=\"5\" text=\"사용자ID\"/><Cell col=\"6\" text=\"업로드프로그램식별명\"/><Cell col=\"7\" text=\"사업장ID\"/><Cell col=\"8\" text=\"운영단위ID\"/><Cell col=\"9\" text=\"상품ID\"/><Cell col=\"10\" text=\"엑셀자료값01\"/><Cell col=\"11\" text=\"엑셀자료값02\"/><Cell col=\"12\" text=\"엑셀자료값03\"/><Cell col=\"13\" text=\"엑셀자료값04\"/><Cell col=\"14\" text=\"엑셀자료값05\"/><Cell col=\"15\" text=\"엑셀자료값06\"/><Cell col=\"16\" text=\"엑셀자료값07\"/><Cell col=\"17\" text=\"엑셀자료값08\"/><Cell col=\"18\" text=\"엑셀자료값09\"/><Cell col=\"19\" text=\"엑셀자료값10\"/><Cell col=\"20\" text=\"엑셀자료값11\"/><Cell col=\"21\" text=\"엑셀자료값12\"/><Cell col=\"22\" text=\"엑셀자료값13\"/><Cell col=\"23\" text=\"엑셀자료값14\"/><Cell col=\"24\" text=\"엑셀자료값15\"/><Cell col=\"25\" text=\"엑셀자료값16\"/><Cell col=\"26\" text=\"엑셀자료값17\"/><Cell col=\"27\" text=\"엑셀자료값18\"/><Cell col=\"28\" text=\"엑셀자료값19\"/><Cell col=\"29\" text=\"엑셀자료값20\"/><Cell col=\"30\" text=\"엑셀자료값21\"/><Cell col=\"31\" text=\"엑셀자료값22\"/><Cell col=\"32\" text=\"엑셀자료값23\"/><Cell col=\"33\" text=\"엑셀자료값24\"/><Cell col=\"34\" text=\"엑셀자료값25\"/><Cell col=\"35\" text=\"엑셀자료값26\"/><Cell col=\"36\" text=\"엑셀자료값27\"/><Cell col=\"37\" text=\"엑셀자료값28\"/><Cell col=\"38\" text=\"엑셀자료값29\"/><Cell col=\"39\" text=\"엑셀자료값30\"/><Cell col=\"40\" text=\"엑셀자료값31\"/><Cell col=\"41\" text=\"엑셀자료값32\"/><Cell col=\"42\" text=\"엑셀자료값33\"/><Cell col=\"43\" text=\"엑셀자료값34\"/><Cell col=\"44\" text=\"엑셀자료값35\"/><Cell col=\"45\" text=\"엑셀자료값36\"/><Cell col=\"46\" text=\"엑셀자료값37\"/><Cell col=\"47\" text=\"엑셀자료값38\"/><Cell col=\"48\" text=\"엑셀자료값39\"/><Cell col=\"49\" text=\"엑셀자료값40\"/><Cell col=\"50\" text=\"수정방법코드\"/><Cell col=\"51\" text=\"유효성검증일시\"/><Cell col=\"52\" text=\"등록자ID\"/><Cell col=\"53\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkCol\"/><Cell col=\"1\" text=\"bind:excelRowNo\"/><Cell col=\"2\" text=\"bind:comErrOcurCd\"/><Cell col=\"3\" text=\"bind:comErrOcurCts\"/><Cell col=\"4\" text=\"bind:coCd\"/><Cell col=\"5\" text=\"bind:usrId\"/><Cell col=\"6\" text=\"bind:upldPgmIdtNm\"/><Cell col=\"7\" text=\"bind:bzplcId\"/><Cell col=\"8\" text=\"bind:oprUnitId\"/><Cell col=\"9\" text=\"bind:prdId\"/><Cell col=\"10\" text=\"bind:excelDataVal01\"/><Cell col=\"11\" text=\"bind:excelDataVal02\"/><Cell col=\"12\" text=\"bind:excelDataVal03\"/><Cell col=\"13\" text=\"bind:excelDataVal04\"/><Cell col=\"14\" text=\"bind:excelDataVal05\"/><Cell col=\"15\" text=\"bind:excelDataVal06\"/><Cell col=\"16\" text=\"bind:excelDataVal07\"/><Cell col=\"17\" text=\"bind:excelDataVal08\"/><Cell col=\"18\" text=\"bind:excelDataVal09\"/><Cell col=\"19\" text=\"bind:excelDataVal10\"/><Cell col=\"20\" text=\"bind:excelDataVal11\"/><Cell col=\"21\" text=\"bind:excelDataVal12\"/><Cell col=\"22\" text=\"bind:excelDataVal13\"/><Cell col=\"23\" text=\"bind:excelDataVal14\"/><Cell col=\"24\" text=\"bind:excelDataVal15\"/><Cell col=\"25\" text=\"bind:excelDataVal16\"/><Cell col=\"26\" text=\"bind:excelDataVal17\"/><Cell col=\"27\" text=\"bind:excelDataVal18\"/><Cell col=\"28\" text=\"bind:excelDataVal19\"/><Cell col=\"29\" text=\"bind:excelDataVal20\"/><Cell col=\"30\" text=\"bind:excelDataVal21\"/><Cell col=\"31\" text=\"bind:excelDataVal22\"/><Cell col=\"32\" text=\"bind:excelDataVal23\"/><Cell col=\"33\" text=\"bind:excelDataVal24\"/><Cell col=\"34\" text=\"bind:excelDataVal25\"/><Cell col=\"35\" text=\"bind:excelDataVal26\"/><Cell col=\"36\" text=\"bind:excelDataVal27\"/><Cell col=\"37\" text=\"bind:excelDataVal28\"/><Cell col=\"38\" text=\"bind:excelDataVal29\"/><Cell col=\"39\" text=\"bind:excelDataVal30\"/><Cell col=\"40\" text=\"bind:excelDataVal31\"/><Cell col=\"41\" text=\"bind:excelDataVal32\"/><Cell col=\"42\" text=\"bind:excelDataVal33\"/><Cell col=\"43\" text=\"bind:excelDataVal34\"/><Cell col=\"44\" text=\"bind:excelDataVal35\"/><Cell col=\"45\" text=\"bind:excelDataVal36\"/><Cell col=\"46\" text=\"bind:excelDataVal37\"/><Cell col=\"47\" text=\"bind:excelDataVal38\"/><Cell col=\"48\" text=\"bind:excelDataVal39\"/><Cell col=\"49\" text=\"bind:excelDataVal40\"/><Cell col=\"50\" text=\"bind:updMtdCd\"/><Cell col=\"51\" text=\"bind:vldLnmVldtDtm\"/><Cell col=\"52\" text=\"bind:regpsnId\"/><Cell col=\"53\" text=\"bind:regDtm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","517",null,"67","24",null,"20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","2","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("중복상품확인");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","555","98","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","0","610",null,"38","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_down_excel","30","750",null,null,"870","-210",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_excel_save");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"139\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"행번호\"/><Cell col=\"1\" text=\"오류코드\"/><Cell col=\"2\" text=\"오류내용\"/><Cell col=\"3\" text=\"회사코드\"/><Cell col=\"4\" text=\"사용자ID\"/><Cell col=\"5\" text=\"업로드프로그램식별명\"/><Cell col=\"6\" text=\"사업장ID\"/><Cell col=\"7\" text=\"운영단위ID\"/><Cell col=\"8\" text=\"상품ID\"/><Cell col=\"9\" text=\"엑셀자료값01\"/><Cell col=\"10\" text=\"엑셀자료값02\"/><Cell col=\"11\" text=\"엑셀자료값03\"/><Cell col=\"12\" text=\"엑셀자료값04\"/><Cell col=\"13\" text=\"엑셀자료값05\"/><Cell col=\"14\" text=\"엑셀자료값06\"/><Cell col=\"15\" text=\"엑셀자료값07\"/><Cell col=\"16\" text=\"엑셀자료값08\"/><Cell col=\"17\" text=\"엑셀자료값09\"/><Cell col=\"18\" text=\"엑셀자료값10\"/><Cell col=\"19\" text=\"엑셀자료값11\"/><Cell col=\"20\" text=\"엑셀자료값12\"/><Cell col=\"21\" text=\"엑셀자료값13\"/><Cell col=\"22\" text=\"엑셀자료값14\"/><Cell col=\"23\" text=\"엑셀자료값15\"/><Cell col=\"24\" text=\"엑셀자료값16\"/><Cell col=\"25\" text=\"엑셀자료값17\"/><Cell col=\"26\" text=\"엑셀자료값18\"/><Cell col=\"27\" text=\"엑셀자료값19\"/><Cell col=\"28\" text=\"엑셀자료값20\"/><Cell col=\"29\" text=\"엑셀자료값21\"/><Cell col=\"30\" text=\"엑셀자료값22\"/><Cell col=\"31\" text=\"엑셀자료값23\"/><Cell col=\"32\" text=\"엑셀자료값24\"/><Cell col=\"33\" text=\"엑셀자료값25\"/><Cell col=\"34\" text=\"엑셀자료값26\"/><Cell col=\"35\" text=\"엑셀자료값27\"/><Cell col=\"36\" text=\"엑셀자료값28\"/><Cell col=\"37\" text=\"엑셀자료값29\"/><Cell col=\"38\" text=\"엑셀자료값30\"/><Cell col=\"39\" text=\"엑셀자료값31\"/><Cell col=\"40\" text=\"엑셀자료값32\"/><Cell col=\"41\" text=\"엑셀자료값33\"/><Cell col=\"42\" text=\"엑셀자료값34\"/><Cell col=\"43\" text=\"엑셀자료값35\"/><Cell col=\"44\" text=\"엑셀자료값36\"/><Cell col=\"45\" text=\"엑셀자료값37\"/><Cell col=\"46\" text=\"엑셀자료값38\"/><Cell col=\"47\" text=\"엑셀자료값39\"/><Cell col=\"48\" text=\"엑셀자료값40\"/><Cell col=\"49\" text=\"수정방법코드\"/><Cell col=\"50\" text=\"유효성검증일시\"/><Cell col=\"51\" text=\"등록자ID\"/><Cell col=\"52\" text=\"등록일시\"/></Band><Band id=\"body\"><Cell text=\"bind:excelRowNo\"/><Cell col=\"1\" text=\"bind:comErrOcurCd\"/><Cell col=\"2\" text=\"bind:comErrOcurCts\"/><Cell col=\"3\" text=\"bind:coCd\"/><Cell col=\"4\" text=\"bind:usrId\"/><Cell col=\"5\" text=\"bind:upldPgmIdtNm\"/><Cell col=\"6\" text=\"bind:bzplcId\"/><Cell col=\"7\" text=\"bind:oprUnitId\"/><Cell col=\"8\" text=\"bind:prdId\"/><Cell col=\"9\" text=\"bind:excelDataVal01\"/><Cell col=\"10\" text=\"bind:excelDataVal02\"/><Cell col=\"11\" text=\"bind:excelDataVal03\"/><Cell col=\"12\" text=\"bind:excelDataVal04\"/><Cell col=\"13\" text=\"bind:excelDataVal05\"/><Cell col=\"14\" text=\"bind:excelDataVal06\"/><Cell col=\"15\" text=\"bind:excelDataVal07\"/><Cell col=\"16\" text=\"bind:excelDataVal08\"/><Cell col=\"17\" text=\"bind:excelDataVal09\"/><Cell col=\"18\" text=\"bind:excelDataVal10\"/><Cell col=\"19\" text=\"bind:excelDataVal11\"/><Cell col=\"20\" text=\"bind:excelDataVal12\"/><Cell col=\"21\" text=\"bind:excelDataVal13\"/><Cell col=\"22\" text=\"bind:excelDataVal14\"/><Cell col=\"23\" text=\"bind:excelDataVal15\"/><Cell col=\"24\" text=\"bind:excelDataVal16\"/><Cell col=\"25\" text=\"bind:excelDataVal17\"/><Cell col=\"26\" text=\"bind:excelDataVal18\"/><Cell col=\"27\" text=\"bind:excelDataVal19\"/><Cell col=\"28\" text=\"bind:excelDataVal20\"/><Cell col=\"29\" text=\"bind:excelDataVal21\"/><Cell col=\"30\" text=\"bind:excelDataVal22\"/><Cell col=\"31\" text=\"bind:excelDataVal23\"/><Cell col=\"32\" text=\"bind:excelDataVal24\"/><Cell col=\"33\" text=\"bind:excelDataVal25\"/><Cell col=\"34\" text=\"bind:excelDataVal26\"/><Cell col=\"35\" text=\"bind:excelDataVal27\"/><Cell col=\"36\" text=\"bind:excelDataVal28\"/><Cell col=\"37\" text=\"bind:excelDataVal29\"/><Cell col=\"38\" text=\"bind:excelDataVal30\"/><Cell col=\"39\" text=\"bind:excelDataVal31\"/><Cell col=\"40\" text=\"bind:excelDataVal32\"/><Cell col=\"41\" text=\"bind:excelDataVal33\"/><Cell col=\"42\" text=\"bind:excelDataVal34\"/><Cell col=\"43\" text=\"bind:excelDataVal35\"/><Cell col=\"44\" text=\"bind:excelDataVal36\"/><Cell col=\"45\" text=\"bind:excelDataVal37\"/><Cell col=\"46\" text=\"bind:excelDataVal38\"/><Cell col=\"47\" text=\"bind:excelDataVal39\"/><Cell col=\"48\" text=\"bind:excelDataVal40\"/><Cell col=\"49\" text=\"bind:updMtdCd\"/><Cell col=\"50\" text=\"bind:vldLnmVldtDtm\"/><Cell col=\"51\" text=\"bind:regpsnId\"/><Cell col=\"52\" text=\"bind:regDtm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"300","28",null,"522",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("총 0건 (정상 0건 / 오류 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,700,this,function(p){});
            obj.set_description("중복상품확인");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","PGM_ID","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_18_P01.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_RD_18_P01.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_RD_18_P01
        /* 작 성 일 자 : 2023/07/15
        /* 작  성   자 : 김완수
        /* 설       명 : 중복상품확인 팝업
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트
        this.normalCount = 0;
        this.abnormalCount = 0;
        this.delFilePath = ""	//삭제할 파일 경로
        this.resListDataset = "";
        this.pageSize = 20;
        this.searFlag = true;
        this.exclNm = "";
        this.excelStorTblNm = "";

        this.excelHeader = "";

        //첨부파일 종류
        this.fileType = ".xls, .xlsx, .XLS, .XLSX";

        this.excelColumn;
        this.bindFlag = true;

        this.bzplcId = "";
        this.refCdGrpSeq = "";
        this.oprUnitId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//업로드 양식 가져오기
        	this.fn_getExcelReport();

        	//파라메터
        	this.fn_paramSetting(this.parent);


        	//강제로딩
        	//this.setWaitCursor(true);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_getExcelReport = function() {
        	var sSvcId = "selectExcelReportList";
            var sUrl = "/co/excel/select-excel-report-list.do";
        	var inDs = "ds_search=ds_search"
            var outDs = "ds_excel_report=ds_output";
            var arg;

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        //페이징용
        this.fn_search = function(page) {
        	 this.ds_search.setColumn(0,"PGM_ID", "SSP_PW_CS_25");
        	 var sSvcId = "selectExcelTemp";
             var sUrl = "/co/excel/select-excel-temp-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_excel_export=ds_output ds_count=ds_count";
             var arg;
             var callback = "fn_callBack";

        	 // 조회버튼 클릭시 페이징 초기화 시킨다.
        	 if( page == 0 ) {
        		this.div_paging.uPage=1;
        		this.div_paging.uPageNum=0;
        		this.ds_search.setColumn(0,"START_NUM", 0);
        		this.ds_search.setColumn(0,"ROW_COUNT",50000);
        		this.ds_search.setColumn(0,"ROW_COUNT",50000);
        	 }

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        this.fn_delete = function() {
        	 var sSvcId = "deleteTemp";
             var sUrl = "/co/excel/excel-delete-temp-ajax.do";
        	 var inDs = "ds_save=ds_save"
             var outDs = "ds_count=ds_count";
             var arg;

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
         }

         //엑셀 다운로드
         this.fn_save_excel = function() {

        	 //선택한 행이 있으면 선택해서 다운로드
        	var chkArr = [];
        	var chkCnt = this.ds_excel_export.getCaseCount("chkCol == 1");
        	var nRowType = "";
        	var chkArr = [];

        		for(var i=0; i < this.ds_excel_export.rowcount; i++){
        			if(this.ds_excel_export.getColumn(i, "chkCol") == 1){
        				chkArr.push(this.ds_excel_export.getColumn(i, "excelRowNo"));
        				chkArr.push(i);
        			}
        		}

        	if(this.ds_excel_export.getRowCount() < 1)
            {
                this.alert("엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
            }

            var result = this.confirm("EXCEL을 출력하시겠습니까?");    // Excel를 출력하시겠습니까?

        	if(!result)
            {
               return false;
            }

        	 var sSvcId = "selectExcelSaveTemp";
             var sUrl = "/co/excel/select-excel-temp-list.do";
        	 var inDs = "ds_search=ds_search_save"
             var outDs = "ds_excel_save=ds_output";
             var arg;

        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", "SSP_PW_CS_25");
        	 this.ds_search_save.setColumn(0,"LANG_CD", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_search_save.setColumn(0,"ERROR_YN", this.ds_search.getColumn(0, "ERROR_YN"));
        	 this.ds_search_save.setColumn(0, "EXCEL_ROW_NO", chkArr);
        	 this.ds_search_save.setColumn(0, "EXCEL_ROW_NO_LIST", chkArr);

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
         }

         this.fn_rtrvJob = function() {
        	 var sSvcId = "rtrvJob";
             var sUrl = "/co/excel/job.do";
        	 var inDs = "ds_search=ds_search_save";
             var outDs = "ds_excel_job=ds_output ds_count=ds_count";
             var arg;

        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", "SSP_PW_CS_25");
        	 this.ds_search_save.setColumn(0,"LANG_CD", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_search_save.setColumn(0,"ERROR_YN", this.ds_search.getColumn(0, "ERROR_YN"));

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBackJob");
        }
         //중복체크용
        this.fn_validate = function() {
        	 var sSvcId = "validate";
             var sUrl = "/co/excel/excel-validate-pkg.do" + "?pgmId=SSP_PW_CS_25&bzplcId=" + this.bzplcId + "&refCdGrpSeq=" + this.refCdGrpSeq + "&oprUnitId=" + this.oprUnitId + "&rowCount=50000";
        	 var inDs = "ds_search=ds_search_save";
             var outDs = "ds_excel_job=ds_output";
             var arg;
        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", "SSP_PW_CS_25");
        	 this.ds_search_save.setColumn(0,"LANG_CD", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_search_save.setColumn(0,"ERROR_YN", this.ds_search.getColumn(0, "ERROR_YN"));

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBackJob");
        }

        this.fn_callBackJob = function(svcID, errorCode, errorMsg) {
        	var status = this.ds_excel_job.getColumn(0, "status");

        	switch(status) {
        		case "complete_insert":
        			this.fn_validate();
        			break;
        		case "complete_validate":
        			this.fn_search(0);
        			break;
        		case "complete_proc":
        		console.log(this.ds_count);
        				this.totalCount = this.ds_count.getColumn(0, "totalCount");
        				this.abnormalCount = this.ds_count.getColumn(0, "errorCount");
        				this.normalCount = this.totalCount - this.abnormalCount;
        				this.totalPageCount.set_text("총 " + this.totalCount + "건 (정상 " + this.normalCount + "건 / 오류 " + this.abnormalCount + "건)");

        				alert(this.normalCount + " 건 저장이 완료되었습니다.");

        				if (this.abnormalCount <= 0) {
        					this.close();
        				} else {
        					this.fn_search(0);
        				}
        			break;
        		case "error_insert":
        			alert("엑셀 데이터 저장 중 오류가 발생하였습니다.");
        			break;
        		case "error_validate":
        			alert("엑셀 데이터 검증 중 오류가 발생하였습니다.");
        			break;
        		case "error_proc":
        			var errorMsg = this.ds_excel_job.getColumn(0, "errorMsg");
        			if(this.gfn_isNull(errorMsg))	errorMsg = "엑셀 데이터 저장 중 오류가 발생하였습니다.";
        			alert(errorMsg);
        			break;
        		case "ongoing_insert":
        		case "ongoing_validate":
        		case "ongoing_proc":
        			var that = this
        			setTimeout(function() { that.fn_rtrvJob() }, 1000);
        		default:
        			break;
        	}
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	switch(svcID) {
        		//양식
        		case "selectExcelReportList" :
        			var pgmId = this.parent.pgmId;
        			this.ds_excel_report.insertRow(0);
        			this.ds_excel_report.setColumn(0,"PGM_ID","");
        			this.ds_excel_report.setColumn(0,"UPLD_FRM_NM", "전체");

        			this.PGM_ID.set_value("SSP_PW_CS_25_1");

        			break;
        		case "deleteTemp" :
        			if( errorCode == 0 ) {
        				this.totalCount = this.ds_count.getColumn(0, "totalCount");
        				this.abnormalCount = this.ds_count.getColumn(0, "errorCount");
        				this.normalCount = this.totalCount - this.abnormalCount;
        				this.totalPageCount.set_text("총 " + this.totalCount + "건 (정상 " + this.normalCount + "건 / 오류 " + this.abnormalCount + "건)");
        				//this.gfn_alert_null("MSG000011111", "", "MSG000011111", "성공.", "A", "");
        				alert("삭제가 완료되었습니다.");
        			} else {
        				//this.gfn_alert_null("MSG000011111", "", "MSG000011111", errorMsg, "A", "");
        				alert("삭제중 오류가 발생하였습니다.");
        			}
        			break;

        		case "selectExcelTemp" :
        			//체크박스 추가.
        			this.ds_excel_export.addColumn("chkCol","String");
        			this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, 50000, "fn_pageCallback");

        			if( this.abnormalCount < 0 ) {
        				this.btn_excel.set_enable(true);
        			}

        			this.fn_setGrid(this.ds_excel_export, this.ds_count);
        			break;

        		case "selectExcelSaveTemp" :
        			//체크박스 삭제
        			this.grd_down_excel.deleteContentsCol("body", 0);

        			var fileName = this.FILE_NAME.value.split(".");
        			var fileName = "중복상품 확인.".split(".");
        			this.ofn_exportExcel({form:this, grid:this.grd_down_excel, fileName:fileName[0]});
        			break;


        		default:
        	}
        }

        this.fn_setGrid = function(dataset, count) {

        	this.grd_excel.set_enableredraw(false)
        	this.grd_down_excel.set_enableredraw(false);

        	//그리드 포멧 초기화
        	this.grd_excel.set_formats("");
        	this.grd_excel.set_autofittype("none");
        	this.grd_excel.set_autosizingtype("both");
        	this.grd_excel.set_autosizebandtype("allband");

        	//엑셀용
        	this.grd_down_excel.set_formats("");
        	this.grd_down_excel.set_autofittype("none");

        	var idx = 0;
        	//그리드 설정
        	this.grd_excel.appendContentsRow("head");
        	this.grd_excel.appendContentsRow("body");

        	this.grd_down_excel.appendContentsRow("head");
        	this.grd_down_excel.appendContentsRow("body");

        	//헤더 바디 높이 조정
        	this.grd_excel.setFormatRowProperty(0, "size", 31);
        	this.grd_excel.setFormatRowProperty(1, "size", 31);

        	this.grd_down_excel.setFormatRowProperty(0, "size", 31);
        	this.grd_down_excel.setFormatRowProperty(1, "size", 31);



        	//체크박스
        	this.grd_excel.setFormatColProperty(0, "size", 30);
        	this.grd_excel.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.grd_excel.setCellProperty("head", 0, "edittype", "checkbox");
        	this.grd_excel.setCellProperty("head", 0, "text", "");

        	this.grd_down_excel.setFormatColProperty(0, "size", 30);
        	this.grd_down_excel.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        	this.grd_down_excel.setCellProperty("head", 0, "edittype", "checkbox");
        	this.grd_down_excel.setCellProperty("head", 0, "text", "");

        	//오류코드
        	this.grd_excel.appendContentsCol();
        	this.grd_excel.setFormatColProperty(1, "size", 100);
        	this.grd_excel.setCellProperty("head", 1, "displaytype", "text");
        	this.grd_excel.setCellProperty("head", 1, "edittype", "none");
        	this.grd_excel.setCellProperty("head", 1, "text", "오류코드");

        	this.grd_down_excel.appendContentsCol();
        	this.grd_down_excel.setFormatColProperty(1, "size", 100);
        	this.grd_down_excel.setCellProperty("head", 1, "displaytype", "text");
        	this.grd_down_excel.setCellProperty("head", 1, "edittype", "none");
        	this.grd_down_excel.setCellProperty("head", 1, "text", "오류코드");

        	//오류내용
        	this.grd_excel.appendContentsCol();
        	this.grd_excel.setFormatColProperty(2, "size", 100);
        	this.grd_excel.setCellProperty("head", 2, "displaytype", "text");
        	this.grd_excel.setCellProperty("head", 2, "edittype", "none");
        	this.grd_excel.setCellProperty("head", 2, "text", "오류내용");

        	this.grd_down_excel.appendContentsCol();
        	this.grd_down_excel.setFormatColProperty(2, "size", 100);
        	this.grd_down_excel.setCellProperty("head", 2, "displaytype", "text");
        	this.grd_down_excel.setCellProperty("head", 2, "edittype", "none");
        	this.grd_down_excel.setCellProperty("head", 2, "text", "오류내용");

        	var index = 0;
        	for (var r = 3; r < this.excelHeader.rowcount+3; r++)
        	{
        		this.grd_excel.appendContentsCol();
        		this.grd_excel.setFormatColProperty(r, "size", 100);
        		this.grd_excel.setCellProperty("head", r, "text", this.excelHeader.getColumn(index, "name"));

        		this.grd_down_excel.appendContentsCol();
        		this.grd_down_excel.setFormatColProperty(r, "size", 100);
        		this.grd_down_excel.setCellProperty("head", r, "text", this.excelHeader.getColumn(index, "name"));
        		index ++;
        	}

        	//데이터 바인딩시작.
        	this.fn_setBinding(dataset);

        	//this.grd_excel.set_autofittype("col");

        	//그리드 에러표시
        	var idx = 0;
        	for (var r = 0; r < this.ds_excel_export.getColCount(); r++)  {
        		var colinfo = this.ds_excel_export.getColumnInfo(r);
        		this.grd_excel.setCellProperty("body", idx, "cssclass", "expr:comp.parent.fn_test(dataset, " + idx + ", currow)");
        		idx++;
        	}


        	//너비조정
        	this.grd_excel.uCellSizeType = "true";

        	//페이징
        	this.totalCount = count.getColumn(0, "totalCount");
        	this.abnormalCount = count.getColumn(0, "errorCount");
        	this.normalCount = this.totalCount - this.abnormalCount;

        	//this.totalCount = dataset.getRowCount();
        	//this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");
        	this.div_paging.form.cfn_createPage(this.div_paging, this.abnormalCount, 50000, "fn_pageCallback");

        	//삭제파일 패스 설정
        	//this.delFilePath = params.getColumn(0, "delFilePath");

        	//파일명
        	//this.exclNm = params.getColumn(0, "exclNm");

        	//그리드에 바인딩
        	//var oPaging = this.div_paging;
        	if( this.ds_excel_export != undefined ) {
        		//this.resListDataset.filter("currow >= " + oPaging.uPageNum ) + " && currow <= " + ( oPaging.uPageNum + this.fv_oApp.gv_pageViewCnt ));
        // 		this.ds_excel_export.setColumn(0, "chkCol", 0);
        		for(var i = 0; i < this.ds_excel_export.rowcount; i++)
        		{
        			this.ds_excel_export.setColumn(i, "chkCol", 0);
        		}
        		this.grd_excel.set_binddataset(this.ds_excel_export);
        	}

        	if( this.ds_excel_export.getRowCount() > 0 ) {
        		this.btn_excel.set_enable(true);
        	}

        	//this.div_paging.form.cfn_createPage(this.div_paging, this.totalCount, this.fv_oApp.gv_pageViewCnt, "fn_pageCallback");

        	//this.grd_excel.set_binddataset(dataset);
        	this.grd_excel.set_enableredraw(true);
        	this.grd_down_excel.set_enableredraw(true);

        	this.searFlag = true;

        	alert("총" + this.totalCount + " 건의 엑셀 업로드를 완료 했습니다.");

        	this.totalPageCount.set_text("총 " + this.totalCount + "건 (정상 " + this.normalCount + "건 / 오류 " + this.abnormalCount + "건)");

        	this.setWaitCursor(false);
        	//this.btn_save.set_enable(this.totalCount > 0 && this.abnormalCount == 0);
        }


        //페이징 콜백
        this.fn_pageCallback = function(sFlag){
        	var oPaging = this.div_paging;

        	if(sFlag){
        		//this.ds_search.setColumn(0,"START_NUM", (oPaging.uPageNum == 0 || oPaging.uPageNum == 1 ? 0 : ( oPaging.uPageNum -1 ) * 10));
        		this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT", 50000);
        		this.fn_search();
        	}

        	var sTotText = "총 " + this.totalCount + "건 (정상 " + this.normalCount + "건 / 오류 " + this.abnormalCount + "건)";
        	this.totalPageCount.set_text(sTotText);
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//페이징 초기 설정
        	this.div_paging.uPage = 1;
        	this.div_paging.uPageNum = 0;
        	this.div_paging.uPageRowCnt = 50000;
        	this.div_paging.uPageCnt = 0;
        	this.div_paging.uTotCount = 0;

        	//grid cell size 변경
        	this.grd_excel.uCellSizeType = "true";
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	this.ds_save.setColumn(0, "bzplcId", param.bzplcId);
        	this.ds_save.setColumn(0, "refCdGrpSeq", param.refCdGrpSeq);
        	this.ds_save.setColumn(0, "oprUnitId", param.oprUnitId);

        	this.bzplcId = param.bzplcId;
        	this.refCdGrpSeq = param.refCdGrpSeq;
        	this.oprUnitId = param.oprUnitId;
        }


        this.fn_test = function(dataset, col, row) {

        	var errorCol = dataset.getColumn(row, "comErrOcurCd");
        	if( errorCol == null || errorCol == undefined ) {
        		return "";
        	} else {
        		return "error";
        	}
        }

        //에러메시지처리
        this.fn_errorMsg = function(dataset, col, row) {
        	var errorCol = dataset.getColumn(row, "error_col");
        	var errorMsg = dataset.getColumn(row, "error_msg");
        	var bind = this.grd_excel.getCellProperty( "body", col, "text" ).replace("bind:", "");
        	var errorYn = "";

        	if( errorCol == null || errorCol == undefined ) return "";

        	var errorCols = errorCol.split("|");
        	var errorMsgs = errorMsg.split("|");
        	var colErrorMsg = "";

        	//오류 col에 해당하는 errorMsg만 추출한다. 같은 위치에 errorMsg가 있다는 가정하에 같은 idx로 해서 데이터를 가져온다.
        	//만약 빈값이면 errorMsg를 통째로 return 처리

        	for( var idx in errorCols ) {
        		if( errorCols[idx] == bind ) {
        			errorYn = "Y";
        			colErrorMsg = errorMsgs[idx];
        			break;
        		}
        	}

        	if( errorYn == "Y" ) {
        		//에러메세지가 존재하면 버튼 비활성화 처리
        		this.btn_save.set_enable(false);
        		return colErrorMsg;
        	}
        }


        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };

        this.getMaster = function(dataset) {
        	var mstr = [];

        	if (this.excelColumn.getCaseCount( "name == 'BZPLC_ID'" ) == 1) { mstr.push('BZPLC_ID') };
        	if (this.excelColumn.getCaseCount( "name == 'OPR_UNIT_ID'" ) == 1) { mstr.push('OPR_UNIT_ID') };
        	if (this.excelColumn.getCaseCount( "name == 'PRD_ID'" ) == 1) { mstr.push('PRD_ID') };

        	return mstr;
        }

        this.fn_setBindingMaster = function(mstr) {
        	for (var i=0; i < mstr.length; i++) {
        		if( mstr[i] === 'BZPLC_ID') {
        			this.grd_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_excel.setCellProperty("body", 3 + i, "text", "bind:bzplcId");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "text", "bind:bzplcId");
        		}

        		if( mstr[i] === 'OPR_UNIT_ID') {
        			this.grd_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_excel.setCellProperty("body", 3 + i, "text", "bind:oprUnitId");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "text", "bind:oprUnitId");
        		}

        		if( mstr[i] === 'PRD_ID') {
        			this.grd_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_excel.setCellProperty("body", 3 + i, "text", "bind:prdId");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "displaytype", "text");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "edittype", "none");
        			this.grd_down_excel.setCellProperty("body", 3 + i, "text", "bind:prdId");
        		}
        	}
        }

        this.fn_setBinding = function(dataset) {
        	var idx = 0;
        	var mstr = this.getMaster();
        	var scnt = mstr.length;
        	this.grd_excel.autosizingtype = "both";
        	this.grd_down_excel.autosizingtype = "both";
        	this.fn_setBindingMaster(mstr);
        	console.log(scnt);
        	for (var r = 1; r < dataset.getColCount(); r++ ) {
        		var colinfo = dataset.getColumnInfo(r);
            	this.grd_excel.setFormatColProperty(r, "size", 100);
        		this.grd_down_excel.setFormatColProperty(r, "size", 100);

        		if( colinfo.id != "excelStorTblNm" ){
        			//this.grd_excel.appendContentsCol(); --> 주석처리하고 위에서 처리
        			//this.grd_excel.setCellProperty("head", idx, "text", colinfo.name);

        			if( colinfo.name === "prdId" || colinfo.name === "prdIdData" || colinfo.name === "bzplcId" || colinfo.name === "bzplcIdData" || colinfo.name === "oprUnitId" || colinfo.name === "oprUnitIdData") {
        					continue;
        			}

        			//에러코드 바인딩
        			switch(idx) {
        				case 0:
        					//체크박스 바인딩
        					this.grd_excel.setCellProperty("body", idx, "displaytype", "checkboxcontrol");
        					this.grd_excel.setCellProperty("body", idx, "edittype", "checkbox");
        					this.grd_excel.setCellProperty("body", idx, "text", "bind:chkCol");
        					break;
        				case 1:
        					this.grd_excel.setCellProperty("body", idx, "displaytype", "text");
        					this.grd_excel.setCellProperty("body", idx, "edittype", "none");
        					this.grd_excel.setCellProperty("body", idx, "text", "bind:comErrOcurCd");
        					this.grd_down_excel.setCellProperty("body", idx, "displaytype", "text");
        					this.grd_down_excel.setCellProperty("body", idx, "edittype", "none");
        					this.grd_down_excel.setCellProperty("body", idx, "text", "bind:comErrOcurCd");
        					break;
        				case 2:
        					this.grd_excel.setCellProperty("body", idx, "displaytype", "text");
        					this.grd_excel.setCellProperty("body", idx, "edittype", "none");
        					this.grd_excel.setCellProperty("body", idx, "text", "bind:comErrOcurCts");
        					this.grd_down_excel.setCellProperty("body", idx, "displaytype", "text");
        					this.grd_down_excel.setCellProperty("body", idx, "edittype", "none");
        					this.grd_down_excel.setCellProperty("body", idx, "text", "bind:comErrOcurCts");
        					break;
        				default:
        					this.grd_excel.setCellProperty("body", idx + scnt, "text", "bind:" + colinfo.name);
        					this.grd_down_excel.setCellProperty("body", idx + scnt, "text", "bind:" + colinfo.name);
        					break;
        			}

        			this.grd_excel.setCellProperty("body", idx, "autosizecol", "limitmin");
        			this.grd_excel.setCellProperty("autosizingtype", r, "both");
        			this.grd_down_excel.setCellProperty("body", idx, "autosizecol", "limitmin");
        			this.grd_down_excel.setCellProperty("autosizingtype", r, "both");

        			this.grd_excel.setCellProperty("body", idx, "cssclass", "expr:comp.parent.fn_test(dataset, " + idx + ", currow)");
        			//에러메시지를 tooltip으로 보여줘야해서 추가
        			this.grd_excel.setCellProperty("body", idx, "tooltiptext", "expr:comp.parent.fn_errorMsg(dataset, " + idx + ", currow)");

        			idx++;
        		}
        	}
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.btn_file_search_onclick = function(obj,e)
        {
        	this.FileDialog.set_accept(this.fileType);
        	this.FileDialog.open('nexacro17', FileDialog.LOAD);
        };

        this.FileDialog_onclose = function(obj,e)
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


        //파일 추가 성공
        this.fileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			//파일리스트 초기화
        			this.FileUpTransfer.clearFileList();

        			this.FILE_NAME.set_value(obj.filename);
        			this.FileUpTransfer.addFile(obj.filename, obj);

        			break;
        	}
        }

        // 파일추가 실패
        this.fileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }


        // 파일 전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {

        	this.searFlag = true;
        	this.setWaitCursor(false);

        	var params;
        	var dataset;
        	var res;

        	for( var idx in e.datasets ) {
        		if( e.datasets[idx].id == "ds_excelHeader" ) {
        			this.excelHeader = e.datasets[idx];
        		} else if( e.datasets[idx].id == "ds_excelColumn" ) {
        			this.excelColumn = e.datasets[idx];
        		} else if( e.datasets[idx].id == "ds_output" ) {
        			res = e.datasets[idx];
        		}
        	}

        	if (typeof res !== "undefined") {
        		var code = res.getColumn(0, "resCode");

        		if (code == -1) {
        			var msg = res.getColumn(0, "resMsg");
        			alert(msg);
        			return;
        		}
        	}

        	this.fn_rtrvJob();
        };


        //조회버튼
        this.btnSearch_onclick = function(obj,e)
        {
        	if( this.searFlag == false ) {
        		//this.gfn_alert_null("MSG000011111", "", "MSG000011111", "엑셀업로드가 진행 중입니다.", "A", "");
        		alert("엑셀업로드가 진행 중입니다.");
        		return false;
        	}

        	if( this.PGM_ID.value == "" ) {
        		alert("양식을 선택해 주십시오");
        		return false;
        	}

        	if( this.gfn_isNull(this.FILE_NAME.value) ) {
        		//this.gfn_alert_null("MSG000011111", "", "MSG000011111", "첨부된 파일이 없습니다.", "A", "");
        		alert("첨부된 파일이 없습니다.");
        		return false;
        	}

        	if( this.gfn_isNull(this.ds_search.getColumn(0, "PGM_ID")) ) {
        		//this.gfn_alert_null("MSG000011111", "", "MSG000011111", "양식을 선택해 주세요.", "A", "");
        		alert("양식을 선택해 주세요.");
        		return false;
        	}

        	if( this.confirm("엑셀 업로드를 진행 하시겠습니까?") ) {
        		this.searFlag = false;
        		//강제로딩
        		this.setWaitCursor(true);

        		this.FileUpTransfer.upload("/co/excel/excel-upload.do" + "?pgmId=SSP_PW_CS_25&bzplcId=" + this.bzplcId + "&refCdGrpSeq=" + this.refCdGrpSeq + "&oprUnitId=" + this.oprUnitId + "&rowCount=50000");
        	}
        };

        //양식 다운로드
        this.btn_format_download_onclick = function(obj,e)
        {
        	for( var i = 0; i < this.ds_excel_report.rowcount; i++ ) {
        		if( this.ds_search.getColumn(0, "PGM_ID") == this.ds_excel_report.getColumn(i, "PGM_ID" ) ) {
        			this.FileDownTransfer.clearPostDataList();

        			this.FileDownTransfer.set_downloadfilename(this.ds_excel_report.getColumn(i, "ATFL_NM"));	//runtime 전용 프로퍼티
        			this.FileDownTransfer.setPostData("docRegId",this.ds_excel_report.getColumn(i, "DOC_REG_ID"));	//문서번호
        			this.FileDownTransfer.setPostData("filePath",this.ds_excel_report.getColumn(i, "DOC_REG_SEQ"));	//문서 순번
        			this.FileDownTransfer.setPostData("filePath",this.ds_excel_report.getColumn(i, "ATFL_STOR_PATH"));
        			this.FileDownTransfer.setPostData("fileOrgName",this.ds_excel_report.getColumn(i, "ORI_ATFL_NM"));
        			this.FileDownTransfer.setPostData("fileName",this.ds_excel_report.getColumn(i, "ATFL_NM"));
        			this.FileDownTransfer.download('/co/file-download.do');
        			break;
        		}
        	}

        };

        //파일 업로드 에러
        this.FileUpTransfer_onerror = function(obj,e)
        {
        	alert("엑셀 업로드 에러");
        };
        //엑셀 다운로드 관련 처리
        this.btn_excel_onclick = function(obj,e)
        {
        	this.fn_save_excel();
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_format_download.addEventHandler("onclick",this.btn_format_download_onclick,this);
            this.btn_file_search.addEventHandler("onclick",this.btn_file_search_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.grd_excel.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("SSP_BO_RD_18_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
