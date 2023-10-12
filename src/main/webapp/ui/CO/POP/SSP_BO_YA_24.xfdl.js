(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_24");
            this.set_titletext("엑셀업로드 양식 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excelUpldDtls", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPLD_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_STR_ROW_PST\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BF_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"POST_VLDT_METHOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelStorTblNm", this);
            obj._setContents("<ColumnInfo><Column id=\"EXCEL_STOR_TBL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_STOR_TBL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EXCEL_STOR_TBL_NM\">TB_CO_COM_EXCEL_TMP_FO_DTLS</Col><Col id=\"EXCEL_STOR_TBL_ID\">TB_CO_COM_EXCEL_TMP_FO_DTLS</Col></Row><Row><Col id=\"EXCEL_STOR_TBL_NM\">TB_CO_COM_EXCEL_TMP_FO_CPRTCP_DTLS</Col><Col id=\"EXCEL_STOR_TBL_ID\">TB_CO_COM_EXCEL_TMP_FO_CPRTCP_DTLS</Col></Row><Row><Col id=\"EXCEL_STOR_TBL_NM\">TB_CO_COM_EXCEL_TMP_BO_SSP_DTLS</Col><Col id=\"EXCEL_STOR_TBL_ID\">TB_CO_COM_EXCEL_TMP_BO_SSP_DTLS</Col></Row><Row><Col id=\"EXCEL_STOR_TBL_NM\">TB_CO_COM_EXCEL_TMP_BO_CPRTCP_DTLS</Col><Col id=\"EXCEL_STOR_TBL_ID\">TB_CO_COM_EXCEL_TMP_BO_CPRTCP_DTLS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_save","20","20","540","372",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드 양식");
            obj.set_cssclass("sta_WF_title04");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static03","0","36",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07","0","67",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","97",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static02","0","66","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("4");
            obj.set_text("업로드 Report명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06","0","97","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_upldFrmNm","140","70","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("7");
            this.Div_save.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","141","102","285","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div_save_form_rdo_useYn_innerdataset = new nexacro.NormalDataset("Div_save_form_rdo_useYn_innerdataset", obj);
            Div_save_form_rdo_useYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">유</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">무</Col></Row></Rows>");
            obj.set_innerdataset(Div_save_form_rdo_useYn_innerdataset);
            obj.set_text("유");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","0","127",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","0","220",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_02","0","250",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_03","0","280",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_04","0","310",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","0","220","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("15");
            obj.set_text("사전검증클래스명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_01","0","250","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("16");
            obj.set_text("사전검증메소드명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_02","0","280","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("17");
            obj.set_text("사후검증클래스명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_03","0","310","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("18");
            obj.set_text("사후검증메소드명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_bfVldtClassNm","140","224","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("20");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_bfVldtMethodNm","140","254","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("21");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_postVldtClassNm","140","284","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("22");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_PostVldtMethodNm","140","314","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("23");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_04_00","0","340",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_colInfo","140","344","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("24");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_04","0","340","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("19");
            obj.set_text("컬럼정보");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","127","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("sta_atflNm","130","127","303","31",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_cursor("pointer");
            this.Div_save.addChild(obj.name, obj);

            obj = new Button("btn_fileOpen","435","131","86","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("9");
            obj.set_text("파일첨부");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","36","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("27");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_pgmId","140","40","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","158",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_05","0","158","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("30");
            obj.set_text("자료시작행위치");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("sta_atflNm00","130","158","303","31",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_cursor("pointer");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","0","189",null,"32","10",null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("Static06_00_05_00","0","189","130","32",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("33");
            obj.set_text("엑셀저장테이블명");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.Div_save.addChild(obj.name, obj);

            obj = new Static("sta_atflNm00_00","130","189","303","31",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_cm_box02L_txt");
            obj.set_cursor("pointer");
            this.Div_save.addChild(obj.name, obj);

            obj = new Edit("edt_dataStrRowPst","140","162","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("35");
            this.Div_save.addChild(obj.name, obj);

            obj = new Combo("cmb_excelStorTblNm","140","193","381","24",null,null,null,null,null,null,this.Div_save.form);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_excelStorTblNm");
            obj.set_codecolumn("EXCEL_STOR_TBL_ID");
            obj.set_datacolumn("EXCEL_STOR_TBL_NM");
            obj.set_text("Combo00");
            this.Div_save.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","Div_save:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","btn_cancel:4","Div_save:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div_save.form.edt_upldFrmNm","value","ds_excelUpldDtls","UPLD_FRM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div_save.form.rdo_useYn","value","ds_excelUpldDtls","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div_save.form.edt_bfVldtClassNm","value","ds_excelUpldDtls","BF_VLDT_CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div_save.form.edt_bfVldtMethodNm","value","ds_excelUpldDtls","BF_VLDT_METHOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div_save.form.edt_postVldtClassNm","value","ds_excelUpldDtls","POST_VLDT_CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div_save.form.edt_PostVldtMethodNm","value","ds_excelUpldDtls","POST_VLDT_METHOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div_save.form.edt_colInfo","value","ds_excelUpldDtls","COL_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div_save.form.sta_atflNm","text","ds_excelUpldDtls","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div_save.form.edt_pgmId","value","ds_excelUpldDtls","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div_save.form.sta_atflNm00","text","ds_excelUpldDtls","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div_save.form.sta_atflNm00_00","text","ds_excelUpldDtls","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div_save.form.edt_bfVldtClassNm","value","ds_excelUpldDtls","BF_VLDT_CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div_save.form.edt_dataStrRowPst","value","ds_excelUpldDtls","DATA_STR_ROW_PST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div_save.form.cmb_excelStorTblNm","value","ds_excelUpldDtls","EXCEL_STOR_TBL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_YA_24.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_YA_24.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        //첨부파일 타입
        this.fileType = ".xls, .xlsx"; //첨부파일 종류?
        this.maxFileSize = 10; //MB단위
        this.fileUpYn = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.ds_search.setColumn(0, "PGM_ID", this.parent.pgmId);
        	this.fn_search();

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "",
        		SHIFT_S : "btn_save_onclick",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_search = function(){
        	var sSvcId = "search";
        	var sUrl = "/co/select-excel-upld-dtls-info-detail.do";
        	var inDs = "ds_search=ds_search"
        	var outDs = "ds_excelUpldDtls=ds_output1";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/save-excel-upld-dtls-info.do";
        	var inDs = "ds_save=ds_excelUpldDtls:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	switch(svcID){
        	case "save" :
        		alert("저장되었습니다.");
        		this.close(true);
        		break;
        	default:
        		break;
        	}

        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //저장 유효성 체크
        this.fn_validationCheck = function(){
        	var checkList = [{"name" : "프로그램ID", "id" : "PGM_ID"}
        		, {"name" : "업로드Report명", "id" : "UPLD_FRM_NM"}
        		, {"name" : "첨부파일", "id" : "ATFL_NM"}
        		, {"name" : "사전검증클래스명", "id" : "BF_VLDT_CLASS_NM"}
        		, {"name" : "사전검증메소드명", "id" : "BF_VLDT_METHOD_NM"}
        		, {"name" : "사후검증클래스명", "id" : "POST_VLDT_CLASS_NM"}
        		, {"name" : "사후검증메소드명", "id" : "POST_VLDT_METHOD_NM"}
        		, {"name" : "컬럼정보", "id" : "COL_INFO"}
        		, {"name" : "사용여부", "id" : "USE_YN"}
        	];

        	for(var i = 0; i < checkList.length; i++){
        		var value = this.ds_excelUpldDtls.getColumn(0, checkList[i].id);
        		if(this.gfn_isNull(value)) {
        			alert( checkList[i].name + "를(을) 입력해 주세요.");
        			return false;
        		}
        	}
        	return true;
        };


        // 파일 다운로드
        this.downloadfile = function() {
        	this.fileDownTrans.clearPostDataList();
        	this.fileDownTrans.set_downloadfilename(this.ds_excelUpldDtls.getColumn(0, "ATFL_NM"));	//runtime 전용 프로퍼티
        	//this.fileDownTrans.setPostData("filePath",this.ds_excelUpldDtls.getColumn(0, "ATFL_STOR_PATH"));
        //	this.fileDownTrans.setPostData("fileOrgName",this.ds_excelUpldDtls.getColumn(0, "ORI_ATFL_NM"));
        	//this.fileDownTrans.setPostData("fileName",this.ds_excelUpldDtls.getColumn(0, "ATFL_NM"));
        	this.fileDownTrans.setPostData("docRegId",this.ds_excelUpldDtls.getColumn(0, "DOC_REG_ID"));
        	this.fileDownTrans.setPostData("docRegSeq",this.ds_excelUpldDtls.getColumn(0, "DOC_REG_SEQ"));
        	this.fileDownTrans.download('/co/file-download.do');
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			if(this.fileUpYn){
        				this.fileUpTrans.setPostData("docRegId", this.ds_excelUpldDtls.getColumn(0, "DOC_REG_ID"));
        				this.fileUpTrans.setPostData("docRegSeq", this.ds_excelUpldDtls.getColumn(0, "DOC_REG_SEQ"));
        				this.fileUpTrans.setPostData("atflStorPath", this.ds_excelUpldDtls.getColumn(0, "ATFL_STOR_PATH"));
        				this.fileUpTrans.setPostData("oriAtflNm", this.ds_excelUpldDtls.getColumn(0, "ORI_ATFL_NM"));
        				this.fileUpTrans.upload('/co/excel-upld-dtls-file-upload.do');
        			}else{
        				this.fn_save();
        			}
        		}
        	}
        };

        //취소 버튼 클릭
        this.btn_cancel_onclick = function(obj,e)
        {
        	//var sReturn = this.confirm("취소하시겠습니까?");
        	//if(sReturn == true){
        		this.close();
        	//}
        };

        /***********************************************************************************************
        *  파일 관련 영역
        ************************************************************************************************/
        //업로드용 Virtual 파일 onsuccess 이벤트
        this.fileList_onsuccess = function(obj, e)
        {
        	switch(e.reason){
        	case 1:
        		obj.getFileSize();
        		break;
        	case 9:
        		if( !this.fn_fileSizeCheck(obj, e.filesize) ) return false;

        		//파일이 존재하는 상태에서 덮어씌운경우
        		if(!this.gfn_isNull(this.ds_excelUpldDtls.getColumn(0, "ATFL_NM"))){
        			//fileTransfer에 add된 기존 파일명으로 제거
        			this.fileUpTrans.removeFile(this.ds_excelUpldDtls.getColumn(0, "ATFL_NM"));
        		}

        		var sExptType = obj.filename.lastIndexOf(".")+1;
        		var sFileType = obj.filename.substr(sExptType).toLowerCase();

        		this.fileUpYn = true;
        		this.ds_excelUpldDtls.setColumn(0,"ATFL_NM",obj.filename);
        		this.fileUpTrans.addFile(obj.filename, obj);
        		break;
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

        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".xls, .xlsx";

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

        //저장 -> 파일 업로드 성공 시
        this.fileUpTrans_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	if(objCallDs.rowcount  == 0 || objCallDs == undefined  ){
        		alert("파일 업로드 오류입니다.");
        		return;
        	}else{
        		var docRegId = objCallDs.getColumn(0, "docRegId");
        		var docRegSeq = objCallDs.getColumn(0, "docRegSeq");

        		if( objCallDs.getColumn(0, "result") == "success" ) {
        			this.ds_excelUpldDtls.setColumn(0, "DOC_REG_ID", docRegId);
        			this.ds_excelUpldDtls.setColumn(0, "DOC_REG_SEQ", docRegSeq);
        		}
        	}

        	this.fn_save();

        };

        this.btn_fileOpen_onclick = function(obj,e)
        {
        	this.fileDialog.set_accept(this.fileType);
        	this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.Div_save_sta_atflNm_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.ds_excelUpldDtls.getColumn(0, "ATFL_NM"))){
        		if(this.confirm(" 파일을 저장 하시겠습니까?")) {
        			this.downloadfile();
        		}
        	}
        };

        //다운 실패
        this.fileDownTrans_onerror = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        //다운 완료
        this.fileDownTrans_onsuccess = function(obj,e)
        {
        	console.log(e);
        	console.log(obj);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div_save.form.Static06.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.rdo_useYn.addEventHandler("onitemchanged",this.Div_top_info_Radio00_onitemchanged,this);
            this.Div_save.form.Static06_00_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.Static06_00_01.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.Static06_00_02.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.Static06_00_03.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.Static06_00_04.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.Static06_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.sta_atflNm.addEventHandler("onclick",this.Div_save_sta_atflNm_onclick,this);
            this.Div_save.form.btn_fileOpen.addEventHandler("onclick",this.btn_fileOpen_onclick,this);
            this.Div_save.form.Static06_00_05.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.sta_atflNm00.addEventHandler("onclick",this.Div_save_sta_atflNm_onclick,this);
            this.Div_save.form.Static06_00_05_00.addEventHandler("onclick",this.Div00_Static06_onclick,this);
            this.Div_save.form.sta_atflNm00_00.addEventHandler("onclick",this.Div_save_sta_atflNm_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onsuccess",this.fileDownTrans_onsuccess,this);
            this.fileDownTrans.addEventHandler("onerror",this.fileDownTrans_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_YA_24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
