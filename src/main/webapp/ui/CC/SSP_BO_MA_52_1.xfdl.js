(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_52_1");
            this.set_titletext("패키지 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMG_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iddtMktgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"IDDT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_SO\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_ON_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID_ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_OFF_PC_DOC_REG_ID_ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_IDDT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static23_01","12","74",null,"36","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","74","112","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("노출여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_expsYn","120","108","220","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("number");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","11","108","112","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("노출순서");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Radio("radio_expsSo","156","74","158","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_columncount("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var radio_expsSo_innerdataset = new nexacro.NormalDataset("radio_expsSo_innerdataset", obj);
            radio_expsSo_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">Y</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(radio_expsSo_innerdataset);
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","11","154","139","38",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("아이콘 이미지(ON)");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_iconOnPcDocRegIdNm","11","192","189","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_iconOnPcDocRegId","226","195","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_iconOnPcDocRegIdClear","316","195","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_bottomBtn","53","365","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","33","5","60","30",null,null,null,null,null,null,this.div_bottomBtn.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.div_bottomBtn.addChild(obj.name, obj);

            obj = new Button("btn_save","133","5","70","30",null,null,null,null,null,null,this.div_bottomBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_bottomBtn.addChild(obj.name, obj);

            obj = new Static("Static04","11","229","139","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("아이콘 이미지(OFF)");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_iconOffPcDocRegIdNm","11","265","189","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_iconOffPcDocRegId","226","268","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_iconOffPcDocRegIdClear","316","268","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("X");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","11","318","112","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("MRO 코드");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_mroIddtId","120","318","220","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_iddtId","120","40","220","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_inputtype("number");
            obj.set_textAlign("center");
            obj.set_maxlength("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","11","40","112","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box01L");
            obj.set_text("산업군 ID");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",490,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdo_joinPathCd","value","ds_dtl","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_iconOnPcDocRegIdNm","value","ds_iddtMktgInfo","ICON_ON_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_iconOffPcDocRegIdNm","value","ds_iddtMktgInfo","ICON_OFF_PC_DOC_REG_ID_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","radio_expsSo","value","ds_iddtMktgInfo","EXPS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_expsYn","value","ds_iddtMktgInfo","EXPS_SO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_mroIddtId","value","ds_iddtMktgInfo","MRO_IDDT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_iddtId","value","ds_iddtMktgInfo","IDDT_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_52_1.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_52_1.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_52_1.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	this.ds_iddtMktgInfo.clearData();
        	var nRow = this.ds_iddtMktgInfo.addRow();
        	this.fn_paramSetting(this.parent);
        	this.fnLoadIddtMktgInfoSelect();

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "",
        		ESC : "",
        		CTRL_ENTER : "",
        		SHIFT_ENTER : "",
        		SHIFT_S : "",
        		SHIFT_A : "",
        		SHIFT_D : "",
        	});

        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnLoadIddtMktgInfoSelect = function() {
        	var sSvcId = 'loadIddtMktgInfoSelect';
        	var sUrl   = '/bo/cust/iddt/select-IddtMktgInfo.do';
        	var inDs   = 'ds_search=ds_iddtMktgInfo';
        	var outDs  = 'ds_iddtMktgInfo=ds_output1';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fn_callBack');
        }

        this.fnSaveIddtMktgInfo = function() {
        	var sSvcId = 'saveIddtMktgInfo';
        	var sUrl   = '/bo/cust/iddt/save-IddtMktgInfo.do';
        	var inDs   = 'ds_iddtMktgInfo=ds_iddtMktgInfo';
        	var outDs  = '';
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'fn_callBack');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "loadIddtMktgInfoSelect"){

        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/


        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	this.ds_iddtMktgInfo.setColumn(0,"IDDT_ID",param.iddtId);
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        /**
         * 아이콘 ON PC 파일 첨부 이벤트
         */
        this.Div00_btn_iconOnPcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.FileDialog00.set_accept(".png, .jpg, .gif");
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };
        /**
         * 아이콘 OFF PC 파일 첨부 이벤트
         */

        this.Div00_btn_iconOffPcDocRegId_onclick = function(obj,e)
        {
        	this.curImgBtnName = e.fromobject.id;

        	this.FileDialog00.set_accept(".png, .jpg, .gif");
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        /**
         * 파일 DIALOG CLOSE 이벤트
         */

        this.FileDialog00_onclose = function(obj,e)
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
         * 업로드용 Virtual 파일 onsuccess 이벤트
         */
        this.fileList_onsuccess = function
        (obj, e)
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


        		if(this.curImgBtnName == "btn_iconOnPcDocRegId")
        		{
        			this.FileUpTransfer00.removeFile("iconOnPcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "iconOnPcDocRegId");

        			this.ds_iddtMktgInfo.setColumn(0,"ICON_ON_PC_DOC_REG_ID_NM",obj.filename);

        			this.FileUpTransfer00.addFile("iconOnPcDocRegId", obj)
        		}
        		else if(this.curImgBtnName == "btn_iconOffPcDocRegId")
        		{
        			this.FileUpTransfer00.removeFile("iconOffPcDocRegId");

        			var nRowIdx = this.ds_file.addRow();

        			this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_file.setColumn(nRowIdx, "IMG_TYPE", "iconOffPcDocRegId");

        			this.ds_iddtMktgInfo.setColumn(0,"ICON_OFF_PC_DOC_REG_ID_NM",obj.filename);

        			this.FileUpTransfer00.addFile("iconOffPcDocRegId", obj)
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
        	var fileGbn = ".jpg, .png, .gif";

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
        		//alert(this.fn_getMessage("ERRN000040", extNm)); // &1 파일은 허용되지 않는 파일 타입입니다.
        		alert(this.fn_getMessage("ERRC000287"));  //올바른 이미지 파일을 업로드 해주세요.
        		return false;
        	}

        	return true;
        };


        /**
         * 아이콘 ON PC X 이벤트
         */
        this.Div00_btn_iconOnPcDocRegIdClear_onclick = function(obj,e)
        {
        	this.ds_iddtMktgInfo.setColumn(0,"ICON_ON_PC_DOC_REG_ID_NM","");

        	this.FileUpTransfer00.removeFile("iconOnPcDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'iconOnPcDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };
        /**
         * 아이콘 OFF PC X 이벤트
         */
        this.Div00_btn_iconOffPcDocRegIdClear_onclick = function(obj,e)
        {
        	this.ds_iddtMktgInfo.setColumn(0,"ICON_OFF_PC_DOC_REG_ID_NM","");

        	this.FileUpTransfer00.removeFile("iconOffPcMblDocRegId");

        	var findRow = this.ds_file.findRowExpr("IMG_TYPE == 'iconOffPcMblDocRegId'");

        	if (findRow >= 0)
        	{
        		this.ds_file.deleteRow(findRow);
        	}
        };



        this.fn_dataCheck = function(dataset) {
        	/*
        	getRowType = 2 : 데이터셋 추가/수정
        	*/
        	for(var i=0; i < dataset.rowcount; i++){
        		var sRowType = dataset.getRowType(i);

        		if( sRowType == 2 || sRowType == 4 ){
        			//if( dataset._rawRecords[i]._orgidx == undefined ) return false;
        			return true;
        		}
        	}

        	// 삭제된 데이터 셋
        	if(dataset.getDeletedRowCount() > 0){
        		return true;
        	}

        	return false;
        }

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

        		if(objCallDs.getColumn(i, "imgType") == "iconOnPcDocRegId")
        		{
        			this.ds_iddtMktgInfo.setColumn(0, "ICON_ON_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        		else if(objCallDs.getColumn(i, "imgType") == "iconOffPcDocRegId")
        		{
        			this.ds_iddtMktgInfo.setColumn(0, "ICON_OFF_PC_DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}
        	this.ds_file.clearData();			// 업로드 완료 후 ds_file 클리어
        	this.FileUpTransfer00.clearFileList();
        	// 신규 데이터 등록
        	this.fnSaveIddtMktgInfo();
        };

        /**
         * 파일전송 실패
         */
        this.fileUpTrans_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        /**
         * 취소버튼 클릭 시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	if(!confirm(this.fn_getMessage("ERRC000087"))) return;

        	this.close();
        };

        /**
         * 저장버튼 클릭 시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	var expsSo = this.ds_iddtMktgInfo.getColumn(0,"EXPS_SO");
        	var iconOnPcDocRegIdNm = this.ds_iddtMktgInfo.getColumn(0,"ICON_ON_PC_DOC_REG_ID_NM");
        	var iconOffPcDocRegIdNm = this.ds_iddtMktgInfo.getColumn(0,"ICON_OFF_PC_DOC_REG_ID_NM");
        	var mroIddtId = this.ds_iddtMktgInfo.getColumn(0,"MRO_IDDT_ID");

        	if(!expsSo || !iconOnPcDocRegIdNm || !iconOffPcDocRegIdNm || !mroIddtId){
        		alert(this.fn_getMessage("ERRC000286")); //필수 등록 값을 입력해주세요.
        		return;
        	}
        		if( this.ds_file.rowcount > 0 )
        	{
        		if(this.fn_dataCheck(this.ds_file) )
        		{
        			var jsonArray = new Array();

        			for(var i=0; i<this.ds_file.rowcount; i++)
        			{
        				var imgType = this.ds_file.getColumn(i, "IMG_TYPE") == undefined ? "" : this.ds_file.getColumn(i, "IMG_TYPE");

        				var jsonObj = new Object();
        				if(this.ds_file.getColumn(i, "IMG_TYPE") == "iconOnPcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_ON_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				else if(this.ds_file.getColumn(i, "IMG_TYPE") == "iconOffPcDocRegId")
        				{
        					jsonObj.IMG_TYPE = imgType;
        					jsonObj.DOC_REG_ID = this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID");
        					jsonObj.ATFL_NM = this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_NM") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_NM");
        					jsonObj.DOC_REG_SEQ = this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_REG_SEQ") == undefined ? 1 : this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_REG_SEQ").toString();
        					jsonObj.ATFL_STOR_PATH = this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_ATFL_STOR_PATH") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_ORI_ATFL_NM") == undefined ? "" : this.ds_iddtMktgInfo.getColumn(0, "ICON_OFF_PC_DOC_REG_ID_ORI_ATFL_NM");
        				}
        				jsonArray.push(jsonObj);
        			}

        			this.FileUpTransfer00.setPostData("resList", JSON.stringify(jsonArray));
        			this.FileUpTransfer00.upload("/bo/cust/iddt/iddtIcon-fileUpload.do");
        		}else{
        			this.fnSaveIddtMktgInfo();
        		}
        	}else{
        		this.fnSaveIddtMktgInfo();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_iconOnPcDocRegId.addEventHandler("onclick",this.Div00_btn_iconOnPcDocRegId_onclick,this);
            this.btn_iconOnPcDocRegIdClear.addEventHandler("onclick",this.Div00_btn_iconOnPcDocRegIdClear_onclick,this);
            this.div_bottomBtn.form.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div_bottomBtn.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_iconOffPcDocRegId.addEventHandler("onclick",this.Div00_btn_iconOffPcDocRegId_onclick,this);
            this.btn_iconOffPcDocRegIdClear.addEventHandler("onclick",this.Div00_btn_iconOffPcDocRegIdClear_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static00_02_01_01_00_00_onclick,this);
            this.Static06.addEventHandler("onclick",this.Static01_00_onclick,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("SSP_BO_MA_52_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
