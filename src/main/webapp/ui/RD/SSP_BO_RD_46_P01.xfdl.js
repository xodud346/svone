(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_34");
            this.set_titletext("엑셀업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1230,810);
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
            obj._setContents("<ColumnInfo><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCts\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"partnerId\" type=\"STRING\" size=\"256\"/><Column id=\"msdsFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"etcFds\" type=\"STRING\" size=\"256\"/><Column id=\"msdsUrl\" type=\"STRING\" size=\"256\"/><Column id=\"msdsFile\" type=\"STRING\" size=\"256\"/><Column id=\"locAttcFile\" type=\"STRING\" size=\"256\"/><Column id=\"locAtflFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"srvonCertYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvonCertFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"trId\" type=\"STRING\" size=\"256\"/><Column id=\"urlOnly\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search_save", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_export00", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"usrId\" type=\"STRING\" size=\"256\"/><Column id=\"upldPgmIdtNm\" type=\"STRING\" size=\"256\"/><Column id=\"bzplcId\" type=\"STRING\" size=\"256\"/><Column id=\"oprUnitId\" type=\"STRING\" size=\"256\"/><Column id=\"prdId\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal01\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal02\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal03\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal04\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal05\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal06\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal07\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal08\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal09\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal10\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal11\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal12\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal13\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal14\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal15\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal16\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal17\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal18\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal19\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal20\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal21\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal22\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal23\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal24\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal25\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal26\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal27\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal28\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal29\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal30\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal31\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal32\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal33\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal34\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal35\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal36\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal37\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal38\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal39\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal40\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal41\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal42\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal43\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal44\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal45\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal46\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal47\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal48\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal49\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal50\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal51\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal52\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal53\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal54\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal55\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal56\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal57\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal58\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal59\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal60\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal61\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal62\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal63\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal64\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal65\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal66\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal67\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal68\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal69\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal70\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal71\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal72\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal73\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal74\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal75\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal76\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal77\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal78\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal79\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal80\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal81\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal82\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal83\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal84\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal85\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal86\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal87\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal88\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal89\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal90\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal91\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal92\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal93\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal94\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal95\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal96\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal97\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal98\" type=\"STRING\" size=\"256\"/><Column id=\"excelDataVal99\" type=\"STRING\" size=\"256\"/><Column id=\"updMtdCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCts\" type=\"STRING\" size=\"256\"/><Column id=\"vldLnmVldtDtm\" type=\"STRING\" size=\"256\"/><Column id=\"regpsnId\" type=\"STRING\" size=\"256\"/><Column id=\"regDtm\" type=\"STRING\" size=\"256\"/><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_job", this);
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"usrId\" type=\"STRING\" size=\"256\"/><Column id=\"pgmId\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"modified\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_count", this);
            obj._setContents("<ColumnInfo><Column id=\"errorCount\" type=\"INT\" size=\"256\"/><Column id=\"totalCount\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xlsx", this);
            obj._setContents("<ColumnInfo><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"I_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"I_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_MSDS_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATCH_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"I_RND_MSDS_URL\" type=\"STRING\" size=\"256\"/><Column id=\"I_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"I_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILENM\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATTC_FILE_ORI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"I_LOC_ATFL_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"I_SRVON_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"I_SRVON_CERT_FNL_CHG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"I_URL_ONLY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel_save", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"chkCol\" type=\"STRING\" size=\"256\"/><Column id=\"coCd\" type=\"STRING\" size=\"256\"/><Column id=\"excelRowNo\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCd\" type=\"STRING\" size=\"256\"/><Column id=\"comErrOcurCts\" type=\"STRING\" size=\"256\"/><Column id=\"productId\" type=\"STRING\" size=\"256\"/><Column id=\"partnerId\" type=\"STRING\" size=\"256\"/><Column id=\"msdsFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"etcFds\" type=\"STRING\" size=\"256\"/><Column id=\"msdsUrl\" type=\"STRING\" size=\"256\"/><Column id=\"msdsFile\" type=\"STRING\" size=\"256\"/><Column id=\"locAttcFile\" type=\"STRING\" size=\"256\"/><Column id=\"locAtflFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"srvonCertYn\" type=\"STRING\" size=\"256\"/><Column id=\"srvonCertFnlChgDt\" type=\"STRING\" size=\"256\"/><Column id=\"trId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"R_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"R_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("|엑셀업로드");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excel","20","173",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_excel_export");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행번호\"/><Cell col=\"2\" text=\"오류코드\"/><Cell col=\"3\" text=\"오류내용\"/><Cell col=\"4\" text=\"회사코드\"/><Cell col=\"5\" text=\"상품ID\"/><Cell col=\"6\" text=\"협력사ID\"/><Cell col=\"7\" text=\"최종개정일&#13;&#10;(YYYYMMDD)\"/><Cell col=\"8\" text=\"유형\"/><Cell col=\"9\" text=\"MSDS URL\"/><Cell col=\"10\" text=\"MSDS 파일위치\"/><Cell col=\"11\" text=\"레터 파일위치\"/><Cell col=\"12\" text=\"레터증빙일&#13;&#10;(YYYYMMDD)\"/><Cell col=\"13\" text=\"자체증빙&#13;&#10;( Y/ N )\"/><Cell col=\"14\" text=\"자체 증빙일&#13;&#10;(YYYYMMDD)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkCol\" cssclass=\"error\"/><Cell col=\"1\" text=\"bind:excelRowNo\" cssclass=\"error\"/><Cell col=\"2\" text=\"bind:comErrOcurCd\" cssclass=\"error\"/><Cell col=\"3\" text=\"bind:comErrOcurCts\" tooltiptype=\"hover\" tooltiptext=\"bind:comErrOcurCts\" cssclass=\"error\"/><Cell col=\"4\" text=\"bind:coCd\" cssclass=\"error\"/><Cell col=\"5\" text=\"bind:productId\" cssclass=\"error\"/><Cell col=\"6\" text=\"bind:partnerId\" cssclass=\"error\"/><Cell col=\"7\" text=\"bind:msdsFnlChgDt\" cssclass=\"error\"/><Cell col=\"8\" text=\"bind:etcFds\" cssclass=\"error\"/><Cell col=\"9\" text=\"bind:msdsUrl\" cssclass=\"error\"/><Cell col=\"10\" text=\"bind:msdsFile\" cssclass=\"error\"/><Cell col=\"11\" text=\"bind:locAttcFile\" cssclass=\"error\"/><Cell col=\"12\" text=\"bind:locAtflFnlChgDt\" cssclass=\"error\"/><Cell col=\"13\" text=\"bind:srvonCertYn\" cssclass=\"error\"/><Cell col=\"14\" text=\"bind:srvonCertFnlChgDt\" cssclass=\"error\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"300","28",null,"grd_excel:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("총 0건 (정상 0건 / 오류 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","710",null,"38","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","43.66%","768","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","613","768","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","60",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","60","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("양식");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","91",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","91","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("PGM_ID","Static02:10","64","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_excel_report");
            obj.set_codecolumn("PGM_ID");
            obj.set_datacolumn("UPLD_FRM_NM");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("FILE_NAME","Static02_00:10","95","190","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_file_search","FILE_NAME:4","95","79","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","btn_file_search:10","95","60","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_default");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","btn_file_search:10","95","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","btn_excel:4","95","68","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("선택삭제");
            obj.set_cssclass("btn_WF_default");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("ERROR_YN","1065","95","125","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var ERROR_YN_innerdataset = new nexacro.NormalDataset("ERROR_YN_innerdataset", obj);
            ERROR_YN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">오류</Col></Row></Rows>");
            obj.set_innerdataset(ERROR_YN_innerdataset);
            obj.set_text("");
            obj.set_value("E");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_format_download","358","64","84","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("양식 다운로드");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","444","140","767","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("※ 필수/선택 값에 대하여 입력 원하는 모든 정보를 작성 요청드립니다. (오류가 없으면 일괄업로드 바로 진행 가능합니다.)");
            obj.set_font("normal 700 12px/normal \"Arial\"");
            obj.set_color("#ff0000");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("Raonkupload","30","540","1184","130",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_FolderTransfer("1");
            obj.getSetter("RAONKUPLOAD_OnExcelLoadedWithOnlyData").set("Raonkupload_RAONKUPLOAD_OnExcelLoadedWithOnlyData");
            obj.set_text("");
            obj.set_UseTrace("true");
            obj.set_RunTimes("agent");
            obj.set_DisableDeleteConfirm("1");
            obj.set_AllowDuplicationFile("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_down_excel","0","853",null,null,"860","-320",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autofittype("none");
            obj.set_cellsizebandtype("body");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_excel_save");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"행번호\"/><Cell col=\"2\" text=\"오류코드\"/><Cell col=\"3\" text=\"오류내용\"/><Cell col=\"4\" text=\"회사코드\"/><Cell col=\"5\" text=\"상품ID\"/><Cell col=\"6\" text=\"협력사ID\"/><Cell col=\"7\" text=\"최종개정일&#13;&#10;(YYYYMMDD)\"/><Cell col=\"8\" text=\"유형\"/><Cell col=\"9\" text=\"MSDS URL\"/><Cell col=\"10\" text=\"MSDS 파일위치\"/><Cell col=\"11\" text=\"레터 파일위치\"/><Cell col=\"12\" text=\"레터증빙일&#13;&#10;(YYYYMMDD)\"/><Cell col=\"13\" text=\"자체증빙&#13;&#10;( Y/ N )\"/><Cell col=\"14\" text=\"자체 증빙일&#13;&#10;(YYYYMMDD)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chkCol\" cssclass=\"error\"/><Cell col=\"1\" text=\"bind:excelRowNo\" cssclass=\"error\"/><Cell col=\"2\" text=\"bind:comErrOcurCd\" cssclass=\"error\"/><Cell col=\"3\" text=\"bind:comErrOcurCts\" tooltiptype=\"hover\" tooltiptext=\"bind:comErrOcurCts\" cssclass=\"error\"/><Cell col=\"4\" text=\"bind:coCd\" cssclass=\"error\"/><Cell col=\"5\" text=\"bind:productId\" cssclass=\"error\"/><Cell col=\"6\" text=\"bind:partnerId\" cssclass=\"error\"/><Cell col=\"7\" text=\"bind:msdsFnlChgDt\" cssclass=\"error\"/><Cell col=\"8\" text=\"bind:etcFds\" cssclass=\"error\"/><Cell col=\"9\" text=\"bind:msdsUrl\" cssclass=\"error\"/><Cell col=\"10\" text=\"bind:msdsFile\" cssclass=\"error\"/><Cell col=\"11\" text=\"bind:locAttcFile\" cssclass=\"error\"/><Cell col=\"12\" text=\"bind:locAtflFnlChgDt\" cssclass=\"error\"/><Cell col=\"13\" text=\"bind:srvonCertYn\" cssclass=\"error\"/><Cell col=\"14\" text=\"bind:srvonCertFnlChgDt\" cssclass=\"error\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1230,810,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","PGM_ID","value","ds_search","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ERROR_YN","value","ds_search","ERROR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_46_P01.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_RD_46_P01.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_46_P01.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_34
        /* 작 성 일 자 : 2023/08/08
        /* 작  성   자 : yhj
        /* 설       명 : MSDS 엑셀업로드 팝업처리 -kupload 모듈
        /***********************************************************/

        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;

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

        /*kupload 관련 */
        this.trId                   = "";
        this.sheets                 = [];  this.upFiles = [];
        this.Error = "";
        this.isError = false;
        this.selectRow = 0;


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//필수값 표시
        	this.Static02_00.uEssentiel = "true";

        	//업로드 양식 가져오기
        	this.fn_getExcelReport();

        	this.ERROR_YN.set_index(1);

        	//파라메터
        	this.fn_paramSetting(this.parent);

        	var navigatorName = system.navigatorname;            // Browser명("nexacro","IE","Chrome","Gecko")

        	if(navigatorName != "nexacro") {
        		this.trId = this.uuidv4();
        	}
        	// 로컬 로그인 사용 않할시
        	this.fn_setLocalUserCreate(true);


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

        this.fn_save = function() {
        	 var sSvcId = "proceExcel";
             var sUrl = "/co/excel/excel-save-temp-ajax.do";
        	 var inDs = "ds_save=ds_save"
             var outDs = "ds_excel_job=ds_output ds_count=ds_count";
             var arg;

        	 this.ds_save.setColumn(0,"excelStorTblNm", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_save.setColumn(0,"pgmId", this.ds_search.getColumn(0, "PGM_ID"));
        	 this.ds_save.setColumn(0,"langCd", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_save.setColumn(0,"errorYn", this.ds_search.getColumn(0, "ERROR_YN"));

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBackJob");
        }

        //페이징용
        this.fn_search = function(page) {
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
        	 var sSvcId = "selectExcelSaveTemp";
             var sUrl = "/co/excel/select-excel-temp-list.do";
        	 var inDs = "ds_search=ds_search_save"
             var outDs = "ds_excel_save=ds_output";
             var arg;

        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", this.ds_search.getColumn(0, "PGM_ID"));
        	 this.ds_search_save.setColumn(0,"LANG_CD", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_search_save.setColumn(0,"ERROR_YN", this.ds_search.getColumn(0, "ERROR_YN"));

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
         }

         this.fn_rtrvJob = function() {
        	 var sSvcId = "rtrvJob";
             var sUrl = "/co/excel/job.do";
        	 var inDs = "ds_search=ds_search_save";
             var outDs = "ds_excel_job=ds_output ds_count=ds_count";
             var arg;

        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", this.ds_search.getColumn(0, "PGM_ID"));
        	 this.ds_search_save.setColumn(0,"LANG_CD", this.ds_search.getColumn(0, "LANG_CD"));
        	 this.ds_search_save.setColumn(0,"ERROR_YN", this.ds_search.getColumn(0, "ERROR_YN"));

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBackJob");
        }

        this.fn_validate = function() {
        	 var sSvcId = "validate";
             var sUrl = "/co/excel/excel-validate.do" + "?pgmId=" + this.ds_search.getColumn(0, "PGM_ID") + "&bzplcId=" + this.bzplcId + "&refCdGrpSeq=" + this.refCdGrpSeq + "&oprUnitId=" + this.oprUnitId + "&rowCount=50000";
        	 var inDs = "ds_search=ds_search_save";
             var outDs = "ds_excel_job=ds_output";
             var arg;
        	 this.ds_search_save.setColumn(0,"EXCEL_STOR_TBL_NM", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM"));
        	 this.ds_search_save.setColumn(0,"PGM_ID", this.ds_search.getColumn(0, "PGM_ID"));
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
        			this.btn_save.set_enable(true);
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

        			if( this.ds_excel_report.getCaseCount("PGM_ID == '" +pgmId + "'") == 0 ) {
        				this.PGM_ID.set_index(0);
        			} else {
        				this.PGM_ID.set_value(pgmId);
        			}

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
        			this.ofn_exportExcel({form:this, grid:this.grd_down_excel, fileName:fileName[0]});
        			break;


        		default:
        	}

        	this.btn_save.set_enable(this.totalCount > 0 && this.abnormalCount == 0);
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

        	if( this.ds_excel_export.getCaseCount("comErrOcurCd != undefined") > 0 ) {
        		this.btn_save.set_enable(false);
        		this.btn_delete.set_enable(true);
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
        	this.btn_save.set_enable(this.totalCount > 0 && this.abnormalCount == 0);
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
        //엑셀만 parsing 후 dataset에 담기
        this.btn_file_search_onclick_old = function(obj,e)
        {
        	//this.FileDialog.set_accept(this.fileType);
        	//this.FileDialog.open('nexacro17', FileDialog.LOAD);
        	var param = { options: this.upldXlsxOpts };
        	this.Raonkupload.GetExcelData(param);
        	console.log("KUP DEBUG 1 ");
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

        		this.FileUpTransfer.upload("/co/excel/excel-upload.do" + "?pgmId=" + this.ds_search.getColumn(0, "PGM_ID") + "&bzplcId=" + this.bzplcId + "&refCdGrpSeq=" + this.refCdGrpSeq + "&oprUnitId=" + this.oprUnitId + "&rowCount=50000");
        	}

        	this.ERROR_YN.set_index(1);

        };


        //목록
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	if( this.ds_excel_report.rowcount == 0 ) {
        		//this.gfn_alert_null("MSG000011111", "", "MSG000011111", "데이터 없음.", "A", "");
        		alert("저장할 데이터가 없습니다.");
        		return false;
        	}

        	if( this.ds_excel_export.getCaseCount("comErrOcurCd != undefined") > 0 ) {
        		alert("오류가 존재하여 저장할 수 없습니다.");
        		return false;
        	}

        	var confirm = this.confirm("저장 하시겠습니까?");
        	if( confirm ) {
        		this.btn_save.set_enable(false);
        		//this.ds_save.setColumn( 0, "exclNm", this.exclNm );
        		this.ds_save.setColumn( 0, "pgmId", this.ds_search.getColumn(0, "PGM_ID") );
        		this.ds_save.setColumn( 0, "excelStorTblNm", this.ds_search.getColumn(0, "EXCEL_STOR_TBL_NM") );
        		this.fn_save();
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

        this.btn_delete_onclick = function(obj,e)
        {
        	var delArr = [];
        	var chkCnt = this.ds_excel_export.getCaseCount("chkCol == 1");
        	var nRowType = "";
        	var delArry = [];

        	if(chkCnt == 0){
        		alert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	var sReturn = this.confirm("선택한 데이터를 삭제하시겠습니까?");
        	if(sReturn == true){
        		for(var i=0; i < this.ds_excel_export.rowcount; i++){
        			if(this.ds_excel_export.getColumn(i, "chkCol") == 1){
        				delArr.push(this.ds_excel_export.getColumn(i, "excelRowNo"));
        				delArry.push(i);
        			}
        		}

        		this.ds_excel_export.deleteMultiRows(delArry);

        		this.ds_save.setColumn( 0, "pgmId", this.ds_search.getColumn(0, "PGM_ID") );
        		this.ds_save.setColumn( 0, "excelRowNo", delArr);
        		this.ds_save.setColumn( 0, "excelStorTblNm", this.excelStorTblNm);

        		this.fn_delete();
        	}
        };

        this.ERROR_YN_onitemchanged = function(obj,e)
        {
        	this.fn_search(0);
        };

        this.btn_excel_onclick_old = function(obj,e)
        {
        	this.fn_save_excel();
        };
        this.totalPageCount_onclick = function(obj,e)
        {

        };

        this.btn_excel_onclick = function(obj,e)
        {
        	//this.fn_save_excel();
        	this.totalCount =  this.ds_excel_export.getRowCountNF();
        	this.abnormalCount = this.ds_excel_export.getCaseCount( "comErrOcurCd == '에러'" );
            this.normalCount = this.totalCount - this.abnormalCount;

        	if(this.abnormalCount < 1 ){

        		this.alert("엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.");              // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.
                return false;
        	 }

        	//ds_excel_save

        	var chkCnt = this.ds_excel_export.getCaseCount("chkCol == 1");
        	if(chkCnt > 0){ //체크한 건이 있다면
        		this.ds_excel_save.clearData();
        		for(var i=0; i < this.ds_excel_export.rowcount; i++){
        			if(this.ds_excel_export.getColumn(i, "chkCol") == 1){
        			    var nRow = this.ds_excel_save.addRow();
        				this.ds_excel_save.copyRow(nRow, this.ds_excel_export, i);
        			}
        		}

        	}else{

        		this.ds_excel_save.copyData(this.ds_excel_export,true);
        	}

            var result = this.confirm("EXCEL을 출력하시겠습니까?");    // Excel를 출력하시겠습니까?

        	if(!result)
            {
               return false;
            }

        	//체크박스 삭제
        	this.grd_down_excel.deleteContentsCol("body", 0);

        	var fileName = "MSDS일괄업로드_";
        	this.ofn_exportExcel({form:this, grid:this.grd_down_excel, fileName });

        };

        /***********************************************************************************************
        *  Kupload
        /***********************************************************************************************/
        /**
         * K-Upload 업로드 취소시 발생하는 UploadingCancel 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadingCancel = function(obj, paramObj)
        {
        	console.log("전송 취소 이벤트 : " + obj.id);
            console.log(paramObj);
        	console.log(paramObj.arrUploadedFileList);

        	if(paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != "")
        	{
        		console.log("업로드 된 파일 리스트 -");

        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for(var idx=0; idx<uploadedFileLen; idx++)
        		{
        			console.log(paramObj.userdata.arrUploadedFileList[i].uploadName + ", " + paramObj.userdata.arrUploadedFileList[i].uploadPath);
        		}
        	}
        };

        /**
         * K-Upload 오류가 발생하는 OnError 이벤트 처리
        - paramObj.strCode  오류코드를 의미합니다.
        - paramObj.strMessage  오류 메시지를 의미합니다.
        - paramObj.arrUploadedFileList  업로드된 파일 정보를 의미합니다.
        - paramObj.arrUploadedFileList[index].originName  업로드된 파일의 원본 파일명을 의미합니다.
        - paramObj.arrUploadedFileList[index].fileSize  업로드된 파일의 사이즈를 의미합니다.
        - paramObj.arrUploadedFileList[index].uploadName  업로드된 파일명을 의미합니다.
        - paramObj.arrUploadedFileList[index].uploadPath  업로드된 파일의 저장 경로 정보를 의미합니다.
        - paramObj.arrUploadedFileList[index].order  업로드된 파일의 순서 정보를 의미합니다.
         */
        this.Raonkupload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	this.Error = "";
        	console.log("KUP DEBUG >>Raonkupload_RAONKUPLOAD_OnError  "+paramObj);
        	this.Error = "Error : " + paramObj.userdata.strCode + ", " + paramObj.userdata.strMessage;
        	this.Raonkupload.ResetUpload();
        	this.sheets = [];  console.log('this.sheets 초기화 #2 < Raonkupload_RAONKUPLOAD_OnError');

        	console.log("Error : " + paramObj.userdata.strCode + ", " + paramObj.userdata.strMessage);
        	//console.log("업로드 된 파일 리스트");
        	this.isError = true;
        	//this.btn_save.set_enable(false);
        	//alert("Error : " + paramObj.userdata.strCode + ", " + paramObj.userdata.strMessage);
        	/*if(paramObj.userdata.arrUploadedFileList != null && paramObj.userdata.arrUploadedFileList != "")
        	{
        		var uploadedFileLen = paramObj.userdata.arrUploadedFileList.length;

        		for(var idx=0; idx<uploadedFileLen; idx++)
        		{
        			console.log(paramObj.userdata.arrUploadedFileList[idx].uploadName + ", " + paramObj.userdata.arrUploadedFileList[idx].uploadPath);
        		}
        	}*/
        	if (this.isError && !this.gfn_isNull(this.Error)) {
        		alert(this.Error+"\n 파일 경로에 파일이 존재하지 않습니다. \n 다시 확인해 주세요.");
        		return false;
        	}else{

        	}

        };

        this.uuidv4 = function()
        {
        	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
        };

        this.fn_delArrayToString = function(arrayDel)
        {
            var str = "-- 삭제된 파일 정보 --\n";
            str += this.fn_RPAD("Key", " ", 8) + " : {0}\n";
            str += this.fn_RPAD("FileName", " ", 8) + " : {1}\n";
            str += this.fn_RPAD("Size", " ", 8) + " : {2}\n";
            str += "-- 삭제된 파일 정보 끝 --\n";

            var sUniqKey      = "";
            var sOriginalName = "";
            var sSize         = "";

            var filesArrLen = arrayDel.length;

            for(var idx=0; idx<filesArrLen; idx++)
        	{
                sUniqKey      += arrayDel[idx].uniqKey;
                sOriginalName += arrayDel[idx].originalName;
                sSize         += arrayDel[idx].size;

                if(idx != (filesArrLen-1))
        		{
                    sUniqKey      += ",";
                    sOriginalName += ",";
                    sSize         += ",";
                }
            }

            str = str.replace("{0}", sUniqKey);
            str = str.replace("{1}", sOriginalName);
            str = str.replace("{2}", sSize);

            console.log(str);
        };

        this.fn_newArrayToString = function(arrayNew)
        {
        	console.dir(arrayNew);
        	return;

            var str = "-- 업로드 파일 정보 시작 --\n";
            str += this.fn_RPAD("RealFileName",        " ", 20) + " : {0}\n";
            str += this.fn_RPAD("ServerFileName",      " ", 20) + " : {1}\n";
            str += this.fn_RPAD("IsLargeFile",         " ", 20) + " : {2}\n";
            str += this.fn_RPAD("Size",                " ", 20) + " : {3}\n";
            str += this.fn_RPAD("UploadPath",          " ", 20) + " : {4}\n";
            str += this.fn_RPAD("LogicalPath",         " ", 20) + " : {5}\n";
            str += this.fn_RPAD("fileExtention",       " ", 20) + " : {6}\n";
            str += this.fn_RPAD("LocalPath",           " ", 20) + " : {7}\n";
            str += this.fn_RPAD("CustomValue",         " ", 20) + " : {8}\n";
            str += this.fn_RPAD("ResponseCustomValue", " ", 20) + " : {9}\n";
            str += this.fn_RPAD("Order",               " ", 20) + " : {10}\n";
            str += "-- 업로드 파일 정보 끝 --\n";

            var originalName        = "";
            var uploadName          = "";
            var size                = "";
            var uploadPath          = "";
            var logicalPath         = "";
            var fileExtension       = "";
            var localPath           = "";
            var customValue         = "";
            var responseCustomValue = "";
            var order               = "";
            var isLargeFile         = "";

            var fileLen = arrayNew.length;

            for(var idx=0; idx<fileLen; idx++)
        	{
                originalName        += arrayNew[idx].originalName;
                uploadName          += arrayNew[idx].uploadName;
                isLargeFile         += arrayNew[idx].isLargeFile;
                size                += arrayNew[idx].size;
                uploadPath          += arrayNew[idx].uploadPath;
                logicalPath         += arrayNew[idx].logicalPath;
                fileExtension       += arrayNew[idx].extension;
                localPath           += arrayNew[idx].localPath;
                customValue         += arrayNew[idx].customValue;
                responseCustomValue += arrayNew[idx].responseCustomValue;
                order               += arrayNew[idx].order;

                if(idx != (fileLen-1))
        		{
                    originalName        += ",";
                    uploadName          += ",";
                    size                += ",";
                    uploadPath          += ",";
                    logicalPath         += ",";
                    fileExtension       += ",";
                    localPath           += ",";
                    customValue         += ",";
                    responseCustomValue += ",";
                    order               += ",";
                    isLargeFile         += ",";
                }
            }

            str = str.replace("{0}",  originalName);
            str = str.replace("{1}",  uploadName);
            str = str.replace("{2}",  isLargeFile);
            str = str.replace("{3}",  size);
            str = str.replace("{4}",  uploadPath);
            str = str.replace("{5}",  logicalPath);
            str = str.replace("{6}",  fileExtension);
            str = str.replace("{7}",  localPath);
            str = str.replace("{8}",  customValue);
            str = str.replace("{9}",  responseCustomValue);
            str = str.replace("{10}", order);

        	console.log(str);
        };

        this.fn_RPAD = function(s, c, n)
        {
            if(!s || !c || s.length >= n)
        	{
                return s;
            }

            var max = (n-s.length)/c.length;

            for(var idx=0; idx<max; idx++)
        	{
                s += c;
            }

            return s;
        };

        this.Raonkupload_RAONKUPLOAD_BeforeCreation = function(obj)
        {
        	this.Raonkupload.set_MassFileMode(1);
        };

        /**
         * K-Upload 객체 생성이 완료 되었을때 발생하는 CreationComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	console.log("업로드 생성 완료 : " + obj.id);
        	console.log(paramObj);
        };


        /**
         * K-Upload에 파일이 모두 추가 완료 되었을때 발생되는 AfterAddAllFile 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_AfterAddAllFile = function(obj, paramObj)
        {
        	console.dir("KUP DEBUG Raonkupload_RAONKUPLOAD_AfterAddAllFile  >>");
        	//if (!this.isError) {

        		this.Raonkupload.Transfer(obj.id);
        	//}

        };

        // 업로드 엑셀양식 정의
        this.upldXlsxOpts={
        	"LoadKindOfType": 1,
        	"data_sheets"   : [{
        		"sheet_data_name": "MSDS",
        		"data"           : [
        				{ "data_title": "A1", "data_start": "A2", "return_name": "coCd"              },  // 회사코드
        				{ "data_title": "B1", "data_start": "B2", "return_name": "productId"         },  // 상품ID
        				{ "data_title": "C1", "data_start": "C2", "return_name": "partnerId"         },  // 협력사ID
        				{ "data_title": "D1", "data_start": "D2", "return_name": "msdsFnlChgDt"      },  // 최종개정일 (YYYYMMDD)
        				{ "data_title": "E1", "data_start": "E2", "return_name": "etcFds"            },  // 유형
        				{ "data_title": "F1", "data_start": "F2", "return_name": "msdsUrl"           },  // MSDS URL
        				{ "data_title": "G1", "data_start": "G2", "return_name": "msdsFile"          },  // MSDS 파일위치

        				{ "data_title": "H1", "data_start": "H2", "return_name": "locAttcFile"       },  // 레터 파일위치  => LOC_ATTC_FILEID  파일유형은 '9A'
        				{ "data_title": "I1", "data_start": "I2", "return_name": "locAtflFnlChgDt"   },  // LOC첨부파일최종변경일자 (YYYYMMDD) => LOC_ATFL_FNL_CHG_DT
        				{ "data_title": "J1", "data_start": "J2", "return_name": "srvonCertYn"       },  // 서브원인증여부 => SRVON_CERT_YN
        				{ "data_title": "K1", "data_start": "K2", "return_name": "srvonCertFnlChgDt" },  // 서브원인증최종변경일자 (YYYYMMDD) => SRVON_CERT_FNL_CHG_DT
        		]
        	}],
        	xlsx : [],
        	files: [],
        };

        /*PG08 MSDS파일 일괄등록 오류 개선 및 양식다운로드 개발 관련 작업*/
        //엑셀만 parsing 후 dataset에 담기
        this.btn_file_search_onclick = function(obj,e)
        {
        	this.ds_excel_export.clearData();
        	var param = { options: this.upldXlsxOpts };
        	this.Raonkupload.GetExcelData(param);
        	//console.log("KUP DEBUG 1 ");
        };

        /**
         * 일괄등록·일괄수정 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_pkgDownRegUpd_onclick_old = function(obj,e) {
        // 	var param = { options: this.upldXlsxOpts };
        // 	this.Raonkupload.GetExcelData(param);
        // 	console.log("KUP DEBUG 1 "+'');
        };


        this.Raonkupload_RAONKUPLOAD_GetExcelData = function(obj, paramObj)
        {
        	//this.btn_save.set_enable(false);
        	this.isError = false;
        	this.uploadClear();
        	//console.dir("KUP DEBUG 1 Raonkupload_RAONKUPLOAD_GetExcelData  111 >> paramObj  "+paramObj.arrUploadedFileList);
        	/*
        	GetExcelData CallBack Event
        	paramObj.userdata.resultMsg  : "OK" or "FAIL"
        	paramObj.userdata.resultData : object or null
        	paramObj.userdata.errorMsg   : resultMsg 값이 "FAIL" 인 경우에 string 값이 있음
        	paramObj.userdata.uploadID    : 업로드 ID
        	*/
        	var resultData = "resultMsg : " + paramObj.userdata.resultMsg + "\n"
        	+ "errorMsg : " + paramObj.userdata.errorMsg + "\n"
        	+ "-------------------- resultData --------------------\n" ;
        	//console.log("KUP DEBUG 2 >> resultData  "+resultData);
        	//console.dir("KUP DEBUG 2 >> paramObj  "+paramObj);
        	//console.dir("KUP DEBUG 2 >> paramObj  "+paramObj.userdata);

        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'CANCEL'==paramObj.userdata.resultMsg) {
        		console.log('업로드 취소되었습니다.');
        		return;
        	}
        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'OK'!=paramObj.userdata.resultMsg) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ paramObj.userdata.errorMsg+"\n"
        		+"업로드 할 엑셀파일이 열려있으면 닫아 주세요");
        		return;
        	}

        	if(!paramObj.userdata.resultData || !paramObj.userdata.resultData.Sheets) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 시트정보 확인이 필요합니다.');
        		return;
        	}
        	this.Error = "";

        	this.upldXlsxOpts.files=[];  this.sheets=[];  console.log('this.sheets 초기화 #1 < Raonkupload_RAONKUPLOAD_GetExcelData');
        	var lUpldFiles=[], lSheets=paramObj.userdata.resultData.Sheets;

        	for (var sIdx in lSheets) {

        		var oSheet=lSheets[sIdx], oRows=oSheet.Data;
        		this.upldXlsxOpts.xlsx = oRows;

        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		var cvIdx=0;
        		var cnt = 2 ; //엑셀 행번호 시작이 2번
        		for (var rIdx in oRows) {
        			var oRow=oRows[rIdx];  oRow.trId=this.uuidv4();
        			rObj={ coCd: oRow.coCd, productId: oRow.productId, partnerId: oRow.partnerId, trId: oRow.trId }, cvObj=null;
        			var nRow = this.ds_excel_export.addRow();
        			//this.selectRow = nRow ;
        			this.ds_excel_export.setColumn(nRow, "excelRowNo", cnt );
        			this.ds_excel_export.setColumn(nRow, "comErrOcurCd", "" );
        			this.ds_excel_export.setColumn(nRow, "comErrOcurCts", "" );
        			this.ds_excel_export.setColumn(nRow, "coCd", oRow.coCd );
        			this.ds_excel_export.setColumn(nRow, "productId", oRow.productId );
        			this.ds_excel_export.setColumn(nRow, "partnerId", oRow.partnerId );
        			this.ds_excel_export.setColumn(nRow, "msdsFnlChgDt", oRow.msdsFnlChgDt );
        			this.ds_excel_export.setColumn(nRow, "etcFds", oRow.etcFds );
        			this.ds_excel_export.setColumn(nRow, "msdsUrl", oRow.msdsUrl );
        			this.ds_excel_export.setColumn(nRow, "msdsFile", oRow.msdsFile );
        			this.ds_excel_export.setColumn(nRow, "locAttcFile", oRow.locAttcFile );
        			this.ds_excel_export.setColumn(nRow, "locAtflFnlChgDt", oRow.locAtflFnlChgDt );
        			this.ds_excel_export.setColumn(nRow, "srvonCertYn", oRow.srvonCertYn );
        			this.ds_excel_export.setColumn(nRow, "srvonCertFnlChgDt", oRow.srvonCertFnlChgDt );
        			//msds
        			if (!this.gfn_isNull(oRow.msdsUrl) && this.gfn_isNull(oRow.msdsFile) ) {
        				this.ds_excel_export.setColumn(nRow, "urlOnly", "Y");
        			}

        			if (!this.gfn_isNull(oRow.msdsUrl) && !this.gfn_isNull(oRow.msdsFile)) { //url Y,  파일 Y  	 정상
        				lUpldFiles.push({ path: oRow.msdsFile   , fType: 'msds' });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : oRow.etcFds           ,
        					msdsUrl          : oRow.msdsUrl          ,
        					//msdsFile         : oRow.msdsFile         ,
        					msdsFileNm       : oRow.msdsFile.substr(oRow.msdsFile.lastIndexOf('\\')+1),
        					msdsFnlChgDt     : oRow.msdsFnlChgDt     ,
        				}));
        				/*this.ds_excel_export.setColumn(nRow, "msdsFnlChgDt", oRow.msdsFnlChgDt );
        				this.ds_excel_export.setColumn(nRow, "etcFds", oRow.etcFds );
        				this.ds_excel_export.setColumn(nRow, "msdsUrl", oRow.msdsUrl );
        				this.ds_excel_export.setColumn(nRow, "msdsFile", oRow.msdsFile );
        				*///if (lUpldFile.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFile);}
        			}
        			if (this.gfn_isNull(oRow.msdsUrl) && !this.gfn_isNull(oRow.msdsFile)) { //url N,  파일 Y  	 정상
        				lUpldFiles.push({ path: oRow.msdsFile   , fType: 'msds' });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : oRow.etcFds           ,
        					msdsUrl          : oRow.msdsUrl          ,
        					//msdsFile         : oRow.msdsFile         ,
        					msdsFileNm       : oRow.msdsFile.substr(oRow.msdsFile.lastIndexOf('\\')+1),
        					msdsFnlChgDt     : oRow.msdsFnlChgDt     ,
        				}));
        				/*this.ds_excel_export.setColumn(nRow, "msdsFnlChgDt", oRow.msdsFnlChgDt );
        				this.ds_excel_export.setColumn(nRow, "etcFds", oRow.etcFds );
        				this.ds_excel_export.setColumn(nRow, "msdsUrl", oRow.msdsUrl );
        				this.ds_excel_export.setColumn(nRow, "msdsFile", oRow.msdsFile );
        				*///if (lUpldFile.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFile);}
        			}

        			if (!this.gfn_isNull(oRow.locAttcFile )) {
        				lUpldFiles.push({ path: oRow.locAttcFile, fType: 'loc'  });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : '9A'                  ,
        					locAttcFile      : oRow.locAttcFile      ,
        					//locAttcFileNm    : oRow.locAttcFile.substr(oRow.locAttcFile.lastIndexOf('\\')+1),
        					locAtflFnlChgDt  : oRow.locAtflFnlChgDt  ,
        					srvonCertYn      : oRow.srvonCertYn      ,
        					srvonCertFnlChgDt: oRow.srvonCertFnlChgDt,
        				}));
        				/*this.ds_excel_export.setColumn(nRow, "locAttcFile", oRow.locAttcFile );
        				this.ds_excel_export.setColumn(nRow, "locAtflFnlChgDt", oRow.locAtflFnlChgDt );
        				this.ds_excel_export.setColumn(nRow, "srvonCertYn", oRow.srvonCertYn );
        				this.ds_excel_export.setColumn(nRow, "srvonCertFnlChgDt", oRow.srvonCertFnlChgDt );
        				*/

        				//if (lUpldFile.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFile);}

        			}
        			cnt ++;
        			// this.sheets.push(oRow);
        			//console.log('[lUpldFiles:'+ lUpldFiles.length +']');

        		}
        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		//this.sheets = oRows;
        	}
        	//console.log("KUP DEBUG 3 >> resultData  "+resultData);
        	/*validation 진행  */
        	this.chkValidation();
        	this.fn_validateionCallback();
        	var urlCnt =  this.ds_excel_export.getCaseCountNF("urlOnly == 'Y'");
        	if (lUpldFiles.length < 1 && urlCnt < 1) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 데이터 확인이 필요합니다.');
        		return;
        	}
        	//console.log("KUP DEBUG 4 >> lUpldFiles.length  "+lUpldFiles.length);
        	if (lUpldFiles.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFiles); }  // 업로드 컴포넌트에 파일 추가

        	if (lUpldFiles.length < 1 && urlCnt > 0) {  //업로드 할 파일은 없고, url 만존재시

        		if (!this.isError) {

        			var result = this.confirm("오류가 없습니다. 업로드를 진행하시겠습니까?");    // Excel를 출력하시겠습니까?

        			if(!result)
        			{
        				return false;
        			}
        			this.fn_upladAftrProcWithErr();  // 엑셀정보 전달

        		}else {
        			var result = this.confirm("오류가 존재합니다. 오류를 제외하고, MSDS일괄 업로드를 진행하시겠습니까?");    // Excel를 출력하시겠습니까?

        			if(!result)
        			{
        				return false;
        			}
        			this.fn_upladAftrProcWithErr();  //오류건 삭제 후 Excell 정보 전달
        		}


        	}

        // 	if (this.isError) {
        // 		console.log("KUP DEBUG 에러 존재 다시 확인요 ");
        // 	}else{
        // 		console.log("KUP DEBUG 에러 미존재 저장 버튼 활성화 ");
        // 	}


        };


        this.chkValidation =function (){

        	var cnt = this.ds_excel_export.getRowCount();

        	for(var i = 0 ;i < cnt ; i++){
        		var errStr = "";
        		var msdsUrl = this.gfn_nvl(this.ds_excel_export.getColumn(i,"msdsUrl"),"");
        		var msdsFile = this.gfn_nvl(this.ds_excel_export.getColumn(i,"msdsFile"),"");
        		var locAttcFile = this.gfn_nvl(this.ds_excel_export.getColumn(i,"locAttcFile"),"");
        		//console.log("msdsUrl    "+i+"/"+msdsUrl);
        		if (this.gfn_isNull(msdsUrl) && this.gfn_isNull(msdsFile)) {  //msdsRrl 이 존재하지 않으면, msdsfile 필수

        		  if (this.gfn_isNull(msdsFile)) {
        			errStr += "msds url 미존재시 msds파일 필수/ " ;
        		   }
        		}
        		var msdsFnlChgDt = this.gfn_nvl(this.ds_excel_export.getColumn(i,"msdsFnlChgDt"),"");
        		var locAtflFnlChgDt = this.gfn_nvl(this.ds_excel_export.getColumn(i,"locAtflFnlChgDt"),"");
        		var srvonCertFnlChgDt = this.gfn_nvl(this.ds_excel_export.getColumn(i,"srvonCertFnlChgDt"),"");
        		if (!this.gfn_isNull(msdsFnlChgDt)) {
        				if(!this.gfn_isDate(msdsFnlChgDt)){
        				 errStr += "최종개정일 날짜형식 오류/ " ;
        				}
        		}
        		if (!this.gfn_isNull(locAtflFnlChgDt)) {
        				if(!this.gfn_isDate(locAtflFnlChgDt)){
        				 errStr += "레터증빙일 날짜형식 오류/ " ;
        				}
        		}
        		if (!this.gfn_isNull(srvonCertFnlChgDt)) {
        				if(!this.gfn_isDate(srvonCertFnlChgDt)){
        				 errStr += "자체증빙일 날짜형식 오류/ " ;
        				}
        		}

        		if (!this.gfn_isNull(errStr)) {
        			this.ds_excel_export.setColumn(i, "comErrOcurCd", "에러");
        			this.ds_excel_export.setColumn(i, "comErrOcurCts", errStr);
        			//this.btn_save.set_enable(false);
        			this.isError = true;
        		}
        	}
        	this.ds_excel_export.filter("");
        	this.ds_excel_export.filter("comErrOcurCd == '에러'");
        }

        //페이징 콜백
        this.fn_validateionCallback = function(){

        	this.totalCount =  this.ds_excel_export.getRowCountNF();
        	this.abnormalCount = this.ds_excel_export.getCaseCount( "comErrOcurCd == '에러'" );
            this.normalCount = this.totalCount - this.abnormalCount;

        	var sTotText = "총 " + this.totalCount + "건 (정상 " + this.normalCount + "건 / 오류 " + this.abnormalCount + "건)";
        	this.totalPageCount.set_text(sTotText);

        	/*if (this.isError) {
        		//오류시 멈춤
        		return false;
        	}else{

        	}*/
        }

        this.Raonkupload_RAONKUPLOAD_GetExcelData_old = function(obj, paramObj)
        {

        	console.dir("KUP DEBUG 1 Raonkupload_RAONKUPLOAD_GetExcelData  111 >> paramObj  "+paramObj.arrUploadedFileList);
        	/*
        	GetExcelData CallBack Event
        	paramObj.userdata.resultMsg  : "OK" or "FAIL"
        	paramObj.userdata.resultData : object or null
        	paramObj.userdata.errorMsg   : resultMsg 값이 "FAIL" 인 경우에 string 값이 있음
        	paramObj.userdata.uploadID    : 업로드 ID
        	*/
        	var resultData = "resultMsg : " + paramObj.userdata.resultMsg + "\n"
        	+ "errorMsg : " + paramObj.userdata.errorMsg + "\n"
        	+ "-------------------- resultData --------------------\n" ;
        	console.log("KUP DEBUG 2 >> resultData  "+resultData);

        	console.dir("KUP DEBUG 2 >> paramObj  "+paramObj);
        	console.dir("KUP DEBUG 2 >> paramObj  "+paramObj.userdata);

        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'CANCEL'==paramObj.userdata.resultMsg) {
        		console.log('업로드 취소되었습니다.');
        		return;
        	}
        	if (paramObj!=undefined && paramObj.userdata!=undefined && 'OK'!=paramObj.userdata.resultMsg) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ paramObj.userdata.errorMsg);
        		return;
        	}

        	/* Orgl
        	if(paramObj.userdata.resultData && paramObj.userdata.resultData.Sheets)
        	{
        		var arrayFileList = [];
        		for(var idx=0; idx<paramObj.userdata.resultData.Sheets.length; idx++)
        		{
        			var sheet = paramObj.userdata.resultData.Sheets[idx];
        			resultData += "-------------------- sheetName : " + sheet.sheet_name + " --------------------\n";
        			for(var jdx=0; jdx<sheet.Data.length; jdx++)
        			{
        				arrayFileList.push({ path : sheet.Data[jdx].msdsFile });
        				this.sheets.push(sheet.Data[jdx]);
        			}
        		}

        		console.log(resultData);

        		// 업로드 컴포넌트에 파일 추가
        		this.Raonkupload.AddLocalFileDirectlyEx(arrayFileList);
        	}
        	*/
        	if(!paramObj.userdata.resultData || !paramObj.userdata.resultData.Sheets) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 시트정보 확인이 필요합니다.');
        		return;
        	}

        	this.upldXlsxOpts.files=[];  this.sheets=[];  console.log('this.sheets 초기화 #1 < Raonkupload_RAONKUPLOAD_GetExcelData');
        	var lUpldFiles=[], lSheets=paramObj.userdata.resultData.Sheets;
        	for (var sIdx in lSheets) {
        		var oSheet=lSheets[sIdx], oRows=oSheet.Data;
        		this.upldXlsxOpts.xlsx = oRows;

        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		var cvIdx=0;
        		for (var rIdx in oRows) {
        			var oRow=oRows[rIdx];  oRow.trId=this.uuidv4();
        			rObj={ coCd: oRow.coCd, productId: oRow.productId, partnerId: oRow.partnerId, trId: oRow.trId }, cvObj=null;

        			if (!this.gfn_isNull(oRow.msdsFile)) {
        				lUpldFiles.push({ path: oRow.msdsFile   , fType: 'msds' });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : oRow.etcFds           ,
        					msdsUrl          : oRow.msdsUrl          ,
        					//msdsFile         : oRow.msdsFile         ,
        					msdsFileNm       : oRow.msdsFile.substr(oRow.msdsFile.lastIndexOf('\\')+1),
        					msdsFnlChgDt     : oRow.msdsFnlChgDt     ,
        				}));
        			}
        			if (!this.gfn_isNull(oRow.locAttcFile )) {
        				lUpldFiles.push({ path: oRow.locAttcFile, fType: 'loc'  });
        				this.upldXlsxOpts.files.push(cvObj=Object.assign({}, rObj, {
        					etcFds           : '9A'                  ,
        					locAttcFile      : oRow.locAttcFile      ,
        					//locAttcFileNm    : oRow.locAttcFile.substr(oRow.locAttcFile.lastIndexOf('\\')+1),
        					locAtflFnlChgDt  : oRow.locAtflFnlChgDt  ,
        					srvonCertYn      : oRow.srvonCertYn      ,
        					srvonCertFnlChgDt: oRow.srvonCertFnlChgDt,
        				}));
        			}

        			// this.sheets.push(oRow);
        			console.log('[lUpldFiles:'+ lUpldFiles.length +']');
        		}
        		resultData += "-------------------- [sheetName: " + oSheet.sheet_name + " ] --------------------\n";
        		//this.sheets = oRows;
        	}
        	console.log("KUP DEBUG 3 >> resultData  "+resultData);
        	if (lUpldFiles.length < 1) {
        		alert('업로드 중 오류가 발생했습니다.\n  - errorMsg: '+ '업로드 데이터 확인이 필요합니다.');
        		return;
        	}

        	//console.log("KUP DEBUG 4 >> lUpldFiles.length  "+lUpldFiles.length);

        	if (lUpldFiles.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldFiles); }  // 업로드 컴포넌트에 파일 추가
        // 	if (lUpldMsds.length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldMsds); }  // 업로드 컴포넌트에 파일 추가
        // 	if (lUpldLoc .length>0) { this.Raonkupload.AddLocalFileDirectlyEx(lUpldLoc ); }  // 업로드 컴포넌트에 파일 추가
        };

        /**
         * K-Upload 전송 시작전 발생하는 파일전송 여부 BeforeUpload 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_BeforeUpload = function(obj, paramObj)
        {

        	/*
        	for(var idx=0; idx<this.sheets.length; idx++)
        	{
        		var cv = this.trId + "|" + this.sheets[idx].cocd + "|"
        		       + this.sheets[idx].productId + "|"
        			   + this.sheets[idx].partnerId + "|"
        			   + this.sheets[idx].modDate + "|"
        			   + this.sheets[idx].etcFds + "|"
        			   + this.sheets[idx].msdsUrl + "|"
        			   + this.sheets[idx].msdsFile;
        		this.Raonkupload.SetFileCustomValue(idx, cv);
        	}
        	*/
        	var rIdx=0, fObj=null, sRows=this.upldXlsxOpts.files, rCols=this.upldXlsxOpts.data_sheets[0].data;
        	//var rIdx=0, fObj=null, sRows=this.upldXlsxOpts.xlsx, rCols=this.upldXlsxOpts.data_sheets[0].data;
        	for (var rIdx in sRows) {
        		var oRow=sRows[rIdx];  // , rObj={ coCd: oRow.coCd, productId: oRow.productId, partnerId: oRow.partnerId, trId: this.trId }, rbData=[];

        		this.Raonkupload.SetFileCustomValue(rIdx++, JSON.stringify( oRow ));
        		console.log('row.customValue: '+ JSON.stringify(oRow, null, 2));
        	}

        };

        /**
         * K-Upload 업로드 완료시 발생하는 UploadComplete 이벤트 처리
         */
        this.Raonkupload_RAONKUPLOAD_UploadComplete = function(obj, paramObj)
        {
        	// K Upload는 array, json, xml, text delimit 방식으로 결과값을 제공합니다.
        	// 파일에 대한 정보 중 업로드가 완료된 파일의 정보(업로드 된 파일경로,업로드 된 파일명)는
        	// RAONKUPLOAD_UploadComplete 이벤트 안에서만 추출이 가능합니다.
        	var dataArray = this.Raonkupload.GetListInfo();
            //console.log("KUP DEBUG Raonkupload_RAONKUPLOAD_UploadComplete  1 >> dataArray  "+dataArray);
        	// 신규 업로드된 파일, 삭제된 파일
        	var arrayNew = dataArray.newFile, arrayDel = dataArray.deleteFile;

        	if (arrayNew) { this.fn_newArrayToString(arrayNew); }
        	if (arrayDel) { this.fn_delArrayToString(arrayDel); }


        	console.log("업로드 완료 : " + obj.id);
        	if (arrayNew.length < 1) {
        		this.uploadClear();  console.log('this.sheets 초기화 #4 < Raonkupload_RAONKUPLOAD_UploadComplete < 신규 업로드파일 없음. ');
        		return;
        	}

        	/*
        	{ "data_title": "A1", "data_start": "A2", "return_name": "coCd"              },  // 회사코드
        	{ "data_title": "B1", "data_start": "B2", "return_name": "productId"         },  // 상품ID
        	{ "data_title": "C1", "data_start": "C2", "return_name": "partnerId"         },  // 협력사ID
        	{ "data_title": "D1", "data_start": "D2", "return_name": "msdsFnlChgDt"      },  // 최종개정일 (YYYYMMDD)
        	{ "data_title": "E1", "data_start": "E2", "return_name": "etcFds"            },  // 유형
        	{ "data_title": "F1", "data_start": "F2", "return_name": "msdsUrl"           },  // MSDS URL
        	{ "data_title": "G1", "data_start": "G2", "return_name": "msdsFile"          },  // MSDS 파일위치

        	{ "data_title": "H1", "data_start": "H2", "return_name": "locAttcFile"       },  // 레터 파일위치  => LOC_ATTC_FILEID  파일유형은 '9A'
        	{ "data_title": "I1", "data_start": "I2", "return_name": "locAtflFnlChgDt"   },  // LOC첨부파일최종변경일자 (YYYYMMDD) => LOC_ATFL_FNL_CHG_DT
        	{ "data_title": "J1", "data_start": "J2", "return_name": "srvonCertYn"       },  // 서브원인증여부 => SRVON_CERT_YN
        	{ "data_title": "K1", "data_start": "K2", "return_name": "srvonCertFnlChgDt" },  // 서브원인증최종변경일자 (YYYYMMDD) => SRVON_CERT_FNL_CHG_DT

        	{
        		"originalName": "01.MSDS샘플파일.png",
        		"uploadName": "9aaa9f1b2f384f39837944ad6d19013c.png",
        		"size": 6734,
        		"uploadPath": "Z:/SSP_TEST/attachFile/msds/2023/03/9aaa9f1b2f384f39837944ad6d19013c.png",
        		"status": "complete",
        		"extension": "png",
        		"localPath": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\01.MSDS샘플파일.png",
        		"customValue": "{\"coCd\":\"1000\",\"productId\":\"7000221602\",\"partnerId\":\"92712\",\"trId\":\"b64e5fa4-bd0d-4890-a3f6-8b67f0b12ca4\",\"etcFds\":\"95\",\"msdsUrl\":\"\",\"msdsFileNm\":\"01.MSDS샘플파일.png\",\"msdsFnlChgDt\":\"20190202\"}",
        		"responseCustomValue": "",
        		"isLargeFile": "0",
        		"order": 0,
        		"logicalPath": "",
        		"lastModifiedDate": "2023.02.09 14:20:06",
        		"mimeType": "image/png",
        		"hashValue": "",
        		"fileObject": {
        			"name": "01.MSDS샘플파일.png",
        			"type": "image/png",
        			"uniqValue": "",
        			"isFolder": "0",
        			"localPath": "C:\\jwork\\docs\\01. SSP 2023\\2023-02-01 MSDS 관리\\01.MSDS샘플파일.png",
        			"size": 6734,
        			"subFolderCount": "",
        			"fileCount": "",
        			"lastModifiedDate": "2023.02.09 14:20:06"
        		},
        		"extraDataObject": null,
        		"isFolder": "0",
        		"transferId": "2023-03-16_c17a5bfa30404e1aab338be184fea099",
        		"fileId": "9aaa9f1b2f384f39837944ad6d19013c",
        		"coCd": "1000",
        		"productId": "7000221602",
        		"partnerId": "92712",
        		"trId": "b64e5fa4-bd0d-4890-a3f6-8b67f0b12ca4",
        		"etcFds": "95",
        		"msdsUrl": "",
        		"msdsFileNm": "01.MSDS샘플파일.png",
        		"msdsFnlChgDt": "20190202"
        	}

        	*/
        	// 업로드 완료한 파일 정보 엑셀 데이터에 재비치 - this.upldXlsxOpts.xlsx
        	for (var i in arrayNew) {
        		var cf=arrayNew[i], cv=arrayNew[i].customValue;
        		if (!this.gfn_isNull(cv)) { cf.customValue = Object.assign(cf, JSON.parse(cv)); }

        		var xr=this.getXlsxRowByTrid(cf.trId);
        		if ( this.gfn_isNull(xr)) { continue;
        		}

        		cf.atflStorPath = this.gfn_isNull(cf.uploadPath) ? null : cf.uploadPath.substr(cf.uploadPath.indexOf('/attachFile')).replaceAll(cf.uploadName, '');
        		Object.assign(xr, {
        			docRegId: cf.trId,

        			msdsAttcFileid    : this.nvl(('95'==cf.etcFds ? cf.trId              : null) || xr['msdsAttcFileid'   ], null),  // MSDS
        			etcFds            : this.nvl(('95'==cf.etcFds ? cf.etcFds            : null) || xr['etcFds'           ], null),
        			msdsFileNm        : this.nvl(('95'==cf.etcFds ? cf.originalName      : null) || xr['msdsFileNm'       ], null),
        			atflNm            : this.nvl(('95'==cf.etcFds ? cf.originalName      : null) || xr['atflNm'           ], null),
        			oriAtflNm         : this.nvl(('95'==cf.etcFds ? cf.uploadName        : null) || xr['oriAtflNm'        ], null),
        			atflLen           : this.nvl(('95'==cf.etcFds ? cf.size              : null) || xr['atflLen'          ], null),
        			msdsUrl           : this.nvl((true            ? cf.msdsUrl           : null) || xr['msdsUrl'          ], null),
        			msdsFnlChgDt      : this.nvl((true            ? cf.msdsFnlChgDt      : null) || xr['msdsFnlChgDt'     ], null),
        			locAttcFileid     : this.nvl(('9A'==cf.etcFds ? cf.trId              : null) || xr['locAttcFileid'    ], null),  // LOC
        			locAttcFilenm     : this.nvl(('9A'==cf.etcFds ? cf.originalName      : null) || xr['locAttcFilenm'    ], null),
        			locAttcFileOriNm  : this.nvl(('9A'==cf.etcFds ? cf.uploadName        : null) || xr['locAttcFileOriNm' ], null),
        			locAttcFilesize   : this.nvl(('9A'==cf.etcFds ? cf.size              : null) || xr['locAttcFilesize'  ], null),
        			srvonCertYn       : this.nvl((true            ? cf.srvonCertYn       : null) || xr['srvonCertYn'      ], null),  // 자체인증
        			srvonCertFnlChgDt : this.nvl((true            ? cf.srvonCertFnlChgDt : null) || xr['srvonCertFnlChgDt'], null),
        			atflStorPath      : this.nvl(('95'==cf.etcFds ? cf.atflStorPath      : null) || xr['atflStorPath'     ], null),
        			locAttcFilepath   : this.nvl(('9A'==cf.etcFds ? cf.atflStorPath      : null) || xr['locAttcFileOriNm' ], null),
        		});
        		Object.assign(xr, {
        			I_CO_CD                 : xr.coCd             ,
        			I_PRD_ID                : xr.productId        ,
        			I_CPRTCP_ID             : xr.partnerId        ,

        			I_MSDS_FNL_CHG_DT       : xr.msdsFnlChgDt     ,  // MSDS
        			I_ATCH_TP_CD            : xr.etcFds           ,
        			I_RND_MSDS_URL          : xr.msdsUrl          ,
        			I_ORI_ATFL_NM           : xr.oriAtflNm        ,
        			I_ATFL_STOR_PATH        : xr.atflStorPath     ,
        			I_ATFL_LEN              : xr.atflLen          ,
        			I_ATFL_NM               : xr.atflNm           ,

        			I_LOC_ATTC_FILENM       : xr.locAttcFilenm    ,  // LOC
        			I_LOC_ATTC_FILEPATH     : xr.locAttcFilepath  ,
        			I_LOC_ATTC_FILESIZE     : xr.locAttcFilesize  ,
        			I_LOC_ATTC_FILE_ORI_NM  : xr.locAttcFileOriNm ,
        			I_LOC_ATFL_FNL_CHG_DT   : xr.locAtflFnlChgDt  ,

        			I_SRVON_CERT_YN         : xr.srvonCertYn      ,  // 자체인증
        			I_SRVON_CERT_FNL_CHG_DT : xr.srvonCertFnlChgDt,
        		});
        		this.trimObj(xr);
        	}
        	var oSrce=this.upldXlsxOpts.xlsx, oTrgt=this.ds_xlsx;
        	var rPos=0, rSize=oSrce.length, cSize=oTrgt.getColCount(), cClnm=[];  for (var i=0; i<cSize; i++) { cClnm.push(oTrgt.getColumnInfo(i).id); }
        	oTrgt.clearData();
        	for (var i in oSrce) {
        		var osRow=oSrce[i];  rPos=oTrgt.addRow();
        		for (var j in cClnm) {
        			var clnm=cClnm[j], clvl=osRow[clnm];
        			if (!osRow.hasOwnProperty(clnm) || this.gfn_isNull(clvl)) continue;
        			oTrgt.setColumn(rPos, clnm, clvl);
        		}
        	}
        	//this.settingUrlOnly();


        	if (!this.isError) {

        		 var result = this.confirm("오류가 없습니다. MSDS일괄 업로드를 진행하시겠습니까?");    // Excel를 출력하시겠습니까?

        		if(!result)
        		{
        		   return false;
        		}

        		this.fn_upladAftrProc();  // 엑셀정보 전달
        	}else {
        		 var result = this.confirm("오류가 존재합니다. 오류를 제외하고, MSDS일괄 업로드를 진행하시겠습니까?");    // Excel를 출력하시겠습니까?

        		if(!result)
        		{
        		   return false;
        		}
        		this.fn_upladAftrProcWithErr();  //오류건 삭제 후 Excell 정보 전달
        	}
        };

        this.settingUrlOnly = function(){
        /*urlOnly 처리 및 에러 삭제 처리 */
        	var urlCnt =  this.ds_excel_export.getCaseCountNF("urlOnly == 'Y'");
        	//console.log("this.ds_excel_export.   "+this.ds_excel_export.saveXML());
        	if(urlCnt > 0){
        		var cnt = this.ds_excel_export.getRowCountNF();
        		for(var i = 0 ;i < cnt ; i++){
        			var urlOnly = this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"urlOnly"),"");
        			var urlOnlyS = this.ds_excel_export.getColumnNF(i,"urlOnly");

        			if(urlOnly == "Y"){
        				var nRow = this.ds_xlsx.addRow();
        				 this.ds_xlsx.setColumn(nRow, "I_CO_CD",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"coCd"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_PRD_ID",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"productId"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_CPRTCP_ID",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"partnerId"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_RND_MSDS_URL",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"msdsUrl"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_SRVON_CERT_YN",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"srvonCertYn"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_SRVON_CERT_FNL_CHG_DT",this.gfn_nvl(this.ds_excel_export.getColumnNF(i,"srvonCertFnlChgDt"),""));
        				 this.ds_xlsx.setColumn(nRow, "I_URL_ONLY",urlOnly);
        			}
        		}
        	};
        }

        this.nvl = function(kcvl, rpvl) {
        	if (null==kcvl || undefined==kcvl || ''==new String(kcvl).replace(/ /g, '').replace(/[undefined]/g, '')) { return rpvl; }
        	return kcvl;
        }
        this.trimObj=function(o) {
        	if (null==this.nvl(o, null)) { return null; }

        	var keys=Object.keys(o), k=null, v=null;
        	for (var i in keys) {
        		k=keys[i];
        		if ('object' == typeof o[k]) { o[k] = this.trimObj(o[k]); }
        		o[k]=this.nvl(o[k], null);
        		if (null==o[k]) { delete o[k]; }
        	}

        	return o;
        }
        this.uploadClear=function() {
        		this.Raonkupload.ResetUpload();
        		this.sheets=[];
        		this.trId = this.uuidv4();
        }

        this.getXlsxRow=function(k, v) {
        	var rs = this.upldXlsxOpts.xlsx;

        	for (var i in rs) {
        		var r=rs[i];
        		if (!r.hasOwnProperty(k)) continue;
        		if (r[k] === v) { return r; }
        	}

        	return null;
        }
        this.getXlsxRowByTrid=function(v) {
        	return this.getXlsxRow('trId', v);
        }

        /** K-Upload 완료 후 처리호출 **/
        this.fn_upladAftrProc=function() {
        	this.settingUrlOnly();
        	this.ds_result.clearData();
        	this.setWaitCursor(true);
        	console.log("KUP DEBUG fn_upladAftrProc  1 >> ds_xlsx  "+this.ds_xlsx.saveXML());
        	var strSvc 		= "upladAftrProc";
        	//var strUrl 		= "/rd/msds-mng/xlsx-upload-aftr-proc.do";
        	var strUrl 		= "/rd/msds-mng/xlsx-upload-aftr-proc_re.do";
        	var strInDs  	= "ds_xlsx=ds_xlsx";                  // 물리적 생성 ds_input
        	var strOutDs 	= "ds_xlsx=ds_xlsx ds_result=ds_result";                  // 물리적 생성 ds_popupList
        	var strArg 		= "";
        	var strCallBack = "fn_upladAftrProc_callBack";    						// 공백일시 기본 fn_callBack
        	var strASync    = true;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction( strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_upladAftrProcWithErr=function() {
            this.settingUrlOnly();
        	this.ds_result.clearData();
        	this.setWaitCursor(true);
        	console.log("KUP DEBUG fn_upladAftrProcWithErr  1 >> ds_xlsx  "+this.ds_xlsx.saveXML());
        	var strSvc 		= "upladAftrProc";
        	//var strUrl 		= "/rd/msds-mng/xlsx-upload-aftr-proc.do";
        	var strUrl 		= "/rd/msds-mng/xlsx-upload-aftr-proc_re.do";
        	var strInDs  	= "ds_xlsx=ds_xlsx";                  // 물리적 생성 ds_input
        	var strOutDs 	= "ds_xlsx=ds_xlsx ds_result=ds_result";                  // 물리적 생성 ds_popupList
        	var strArg 		= "";
        	var strCallBack = "fn_upladAftrProc_callBack";    						// 공백일시 기본 fn_callBack
        	var strASync    = true;												// 생략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction( strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };


        this.fn_upladAftrProc_callBack=function(sSvcId, nErrorCode, sErrorMsg) {
        	//console.log("KUP DEBUG fn_upladAftrProc_callBack  1 >> sSvcId, nErrorCode, sErrorMsg  "+sSvcId+"/"+nErrorCode+"/"+sErrorMsg);

        	// console.log('this.sheets 초기화 #4 < fn_upladAftrProc_callBack < 처리완료 후. ');

        	if ('SUCCESS'== sErrorMsg) {

        	  if(this.ds_result.getRowCount() > 0){ //오류가 있을때
        		var cnt = this.ds_result.getRowCount();
        		var resultStr = "";
        		for(var i = 0 ;i < cnt ; i++){
        			resultStr += this.gfn_nvl(this.ds_result.getColumn(i,"R_PRD_ID"),"")+this.gfn_nvl(this.ds_result.getColumn(i,"R_NM"), "")+", "
        		}
        		alert('일괄 업로드 처리를 완료했습니다. \n 실패 건수PRD_ID : '+resultStr);

        	  }else{
        		alert('일괄 업로드 처리를 완료했습니다.');
        	  }
        	  this.uploadClear();
        	  this.close();
        	}
        	this.setWaitCursor(false);
        }



        this.Raonkupload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	console.log("KUP DEBUG Raonkupload_RAONKUPLOAD_BeforeAddFile  1 >");
        };

        this.Raonkupload_RAONKUPLOAD_AfterAddFile = function(obj, paramObj)
        {
        	console.log("KUP DEBUG Raonkupload_RAONKUPLOAD_AfterAddFile  1 >> ");
        };
        this.Raonkupload_RAONKUPLOAD_AddLocalFileDirectlyEx = function(obj, paramObj)
        {
        	console.log("KUP DEBUG Raonkupload_RAONKUPLOAD_AddLocalFileDirectlyEx  1 >> ");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.Static02_00.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.PGM_ID.addEventHandler("onitemchanged",this.PGM_ID_onitemchanged,this);
            this.btn_file_search.addEventHandler("onclick",this.btn_file_search_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.ERROR_YN.addEventHandler("onitemchanged",this.ERROR_YN_onitemchanged,this);
            this.btn_format_download.addEventHandler("onclick",this.btn_format_download_onclick,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadingCancel",this.Raonkupload_RAONKUPLOAD_UploadingCancel,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_OnError",this.Raonkupload_RAONKUPLOAD_OnError,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_UploadComplete",this.Raonkupload_RAONKUPLOAD_UploadComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_CreationComplete",this.Raonkupload_RAONKUPLOAD_CreationComplete,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeUpload",this.Raonkupload_RAONKUPLOAD_BeforeUpload,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_AfterAddAllFile",this.Raonkupload_RAONKUPLOAD_AfterAddAllFile,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeCreation",this.Raonkupload_RAONKUPLOAD_BeforeCreation,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_GetExcelData",this.Raonkupload_RAONKUPLOAD_GetExcelData,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.Raonkupload_RAONKUPLOAD_BeforeAddFile,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.Raonkupload_RAONKUPLOAD_AfterAddFile,this);
            this.Raonkupload.addEventHandler("RAONKUPLOAD_AddLocalFileDirectlyEx",this.Raonkupload_RAONKUPLOAD_AddLocalFileDirectlyEx,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("SSP_BO_RD_46_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
