(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_NA_12");
            this.set_titletext("배지 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"BG_SEQ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col></Row><Row><Col id=\"USE_YN\">N</Col><Col id=\"USE_YN_NM\">미 사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BG_WGT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bgWgtYn", this);
            obj._setContents("<ColumnInfo><Column id=\"BG_WGT_YN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BG_WGT_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BG_WGT_YN_CD\">Y</Col><Col id=\"BG_WGT_YN_NM\">적용</Col></Row><Row><Col id=\"BG_WGT_YN_CD\">N</Col><Col id=\"BG_WGT_YN_NM\">미 적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title1","20","22","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("■  배지 등록");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_dtl","0","57",null,"123","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","0",null,"32","20",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("Static02","40","31",null,"64","20",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_bgNmTtl","20","0","130","32",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("2");
            obj.set_text("배지 명");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_bgImg","20","31","130","64",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("3");
            obj.set_text("이미지");
            obj.set_cssclass("sta_cm_box01L");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Edit("edt_atflNm","154","67",null,"24","60",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Edit("edt_bgNm","154","4",null,"24","120",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("5");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_imgDesc","240","35",null,"28","94",null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("6");
            obj.set_text("용량 : 10M 미만 / 1개 파일 / 형식 : PNG, JPG (최적 사이즈 : 52 * 22)");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Button("btn_imgDelete","edt_atflNm:4","67","24","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("7");
            obj.set_text("X");
            obj.set_visible("true");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_bgNmSize","887","3","88","24",null,null,null,null,null,null,this.div_dtl.form);
            obj.set_taborder("8");
            obj.set_text("(0 / 50 Byte)");
            obj.set_textAlign("right");
            obj.set_usedecorate("true");
            this.div_dtl.addChild(obj.name, obj);

            obj = new Static("sta_title3","20","div_dtl:0","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■  사용여부");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("div_useYn","0","sta_title3:15",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div03");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","0",null,"32","20",null,null,null,null,null,this.div_useYn.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_useYn.addChild(obj.name, obj);

            obj = new Static("sta_useYn","20","0","130","32",null,null,null,null,null,null,this.div_useYn.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.div_useYn.addChild(obj.name, obj);

            obj = new Radio("rdo_useYn","157","4","200","24",null,null,null,null,null,null,this.div_useYn.form);
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("USE_YN_NM");
            obj.set_codecolumn("USE_YN");
            obj.set_taborder("2");
            obj.set_direction("vertical");
            this.div_useYn.addChild(obj.name, obj);

            obj = new Static("sta_bgWgtYn","428","0","140","32",null,null,null,null,null,null,this.div_useYn.form);
            obj.set_taborder("3");
            obj.set_text("검색 가중치 적용여부");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_textAlign("left");
            this.div_useYn.addChild(obj.name, obj);

            obj = new Radio("rdo_bgWgtYn","578","-1","212","33",null,null,null,null,null,null,this.div_useYn.form);
            obj.set_innerdataset("ds_bgWgtYn");
            obj.set_codecolumn("BG_WGT_YN_CD");
            obj.set_datacolumn("BG_WGT_YN_NM");
            obj.set_taborder("4");
            obj.set_direction("vertical");
            this.div_useYn.addChild(obj.name, obj);

            obj = new Button("btn_save","502","div_useYn:30","70","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileAdd","154","95","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"div_useYn:30","70","32","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,370,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","div_dtl.form.edt_bgNm","value","ds_bgInfo","BG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_dtl.form.edt_atflNm","value","ds_bgInfo","ATFL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_useYn.form.rdo_useYn","value","ds_bgInfo","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_useYn.form.rdo_bgWgtYn","value","ds_bgInfo","BG_WGT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_NA_12.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_NA_12.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_NA_12.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배지 등록
        CREATION DATES : 2022.02.28
        CREATER        : 이민호
        *******************************************************/
        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.maxFileSize = "10";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        var opnrPageNum = 0;
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 파라미터 값 ds setcolumn
        	opnrPageNum = this.parent.pageNum;
        	this.ds_bgInfo.setColumn(0, "CO_CD", this.parent.coCd);

        	this.div_useYn.form.rdo_useYn.set_index(0);
        	this.div_useYn.form.rdo_bgWgtYn.set_index(0);
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
        	//저장
        	this.fn_insert = function() {
        		var sSvcId = "insertBgDetail";
        		var sUrl = "/sa/bg/insert-bg-detail.do";
        		var inDs = "ds_save=ds_bgInfo";
        		var outDs = "";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg) {
        		if(svcID == "insertBgDetail"){
        			if(errorCode == ""){
        				alert(this.fn_getMessage("ERRN000029")); // 등록되었습니다.
        				this.opener.fn_search(0);
        				this.close();
        			}else{
        				alert(errorMsg);
        			}
        		}
        	};

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        this.div_dtl.form.sta_bgNmTtl.uEssentiel = "true";
        this.div_dtl.form.sta_bgImg.uEssentiel = "true";
        this.div_useYn.form.sta_useYn.uEssentiel = "true";

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

        		if (sGubun == "bgNm") {
        			this.div_dtl.form.sta_bgNmSize.set_text(expsText);
        		}
        		return;
        	}

        	var tempVal = "";

        	tempVal = nexacro._substrByUtf8(sVal, 0, maxByte);
        	count = nexacro._getUtf8Length(tempVal);

        	expsText = "(<fc v='red'>" + count + "</fc> / " + maxByte + " Byte)";

        	if (sGubun == "bgNm") {
        		this.div_dtl.form.edt_bgNm.set_value("");
        		this.div_dtl.form.edt_bgNm.set_value(tempVal);
        		this.div_dtl.form.sta_bgNmSize.set_text(expsText);
        	}
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	// 취소버튼 클릭 시
        	this.btn_cancel_onclick = function(obj,e)
        	{
        		if(confirm(this.fn_getMessage("ERRN000053"))) { // 취소하시겠습니까?
        			this.close();
        		}
        	};

        	this.btn_save_onclick = function(obj,e)
        	{
        		// 필수 입력값 체크
        		if(this.ds_bgInfo.getColumn(0,"BG_NM") == "" || this.ds_bgInfo.getColumn(0,"BG_NM") == undefined){
        			alert(this.fn_getMessage("ERRN000001", "배지 명은")); // 배지 명은 필수 입력항목입니다.
        			this.div_dtl.form.edt_bgNm.setFocus();
        			return;
        		}
        		if(this.ds_bgInfo.getColumn(0,"ATFL_NM") == "" || this.ds_bgInfo.getColumn(0,"ATFL_NM") == undefined){
        			alert(this.fn_getMessage("ERRN000001", "이미지는")); // 이미지는 필수 입력항목입니다.
        			this.btn_fileAdd.setFocus();
        			return;
        		}
        		if(this.ds_bgInfo.getColumn(0,"USE_YN") == "" || this.ds_bgInfo.getColumn(0,"USE_YN") == undefined){
        			alert(this.fn_getMessage("ERRN000001", "사용 여부는")); // 사용 여부는 필수 입력항목입니다.
        			this.div_useYn.form.rdo_useYn.setFocus();
        			return;
        		}
        		if(this.ds_bgInfo.getColumn(0,"BG_WGT_YN") == "" || this.ds_bgInfo.getColumn(0,"BG_WGT_YN") == undefined){
        			alert(this.fn_getMessage("ERRN000001", "검색 가중치 적용여부는")); // 검색 가중치 적용여부는 필수 입력항목입니다.
        			this.div_useYn.form.rdo_bgWgtYn.setFocus();
        			return;
        		}

        		// 파일업로드
        		if( this.ds_file.rowcount > 0 ) {
        			if(this.fn_dataCheck(this.ds_file) ) {
        				var jsonObj		= new Object();
        				var oriAtflNm = this.ds_bgInfo.getColumn(0, "ORI_ATFL_NM") == undefined ? "" :this.ds_bgInfo.getColumn(0, "ORI_ATFL_NM");
        				var atflStorPath = this.ds_bgInfo.getColumn(0, "ATFL_STOR_PATH") == undefined ? "" :this.ds_bgInfo.getColumn(0, "ATFL_STOR_PATH");
        				var docRegId = this.ds_bgInfo.getColumn(0, "DOC_REG_ID") == undefined ? "" :this.ds_bgInfo.getColumn(0, "DOC_REG_ID");
        				var docRegSeq = this.ds_bgInfo.getColumn(0, "DOC_REG_SEQ") == undefined ? "1" :this.ds_bgInfo.getColumn(0, "DOC_REG_SEQ").toString();

        				// 파일삭제 및 첨부파일테이블에 insert 위하여 값 세팅.
        				this.fileUpTrans.setPostData("oriAtflNm", oriAtflNm);
        				this.fileUpTrans.setPostData("atflStorPath", atflStorPath);
        				this.fileUpTrans.setPostData("docRegId", docRegId);
        				this.fileUpTrans.setPostData("docRegSeq",  docRegSeq);
        				this.fileUpTrans.upload('/sa/com/singlec-file-upload.do')
        			} else {
        				this.fn_insert();
        			}
        		} else {
        			this.fn_insert();
        		}
        	};

        	this.btn_fileAdd_onclick = function(obj,e)
        	{
        		this.fileDialog.set_accept(this.fileType);
        		this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        	};

        	this.btn_imgDelete_onclick = function(obj,e)
        	{
        		this.ds_bgInfo.setColumn(0,"ATFL_NM", "");

        		this.fileUpTrans.clearFileList();
        		this.ds_file.clearData();
        	};

        	// 배지명 키업 이벤트
        	this.edt_bgNm_onkeyup = function(obj,e)
        	{
        		this.fn_setLenByte(obj.value, 90, "bgNm");
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
        		this.ds_bgInfo.set_updatecontrol(false);
        		this.ds_bgInfo.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.ds_bgInfo.set_updatecontrol(true);

        		// 수정 후 다시 저장 시에 기존 파일 데이터도 같이 전송하여 삭제 처리.
        		this.fileUpTrans.removeFile(this.ds_bgInfo.getColumn(0, "ATFL_NM"));
        		this.ds_file.clearData();

        		var nRowIdx = this.ds_file.addRow();
         		this.ds_file.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        		this.ds_bgInfo.setColumn(0, "ATFL_NM", obj.filename);
        		this.fileUpTrans.addFile(obj.filename, obj)
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
        		this.ds_bgInfo.setColumn(0, "DOC_REG_ID", objCallDs.getColumn(i, "docRegId"));
        		this.ds_file.clearData(); // 업로드 완료 후 ds_file 클리어
        		this.fileUpTrans.clearFileList();
        	}

        	this.fn_insert();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.div_dtl.form.sta_bgImg.addEventHandler("onclick",this.div_dtl_Static00_onclick,this);
            this.div_dtl.form.edt_bgNm.addEventHandler("onkeyup",this.edt_bgNm_onkeyup,this);
            this.div_dtl.form.btn_imgDelete.addEventHandler("onclick",this.btn_imgDelete_onclick,this);
            this.sta_title3.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_fileAdd.addEventHandler("onclick",this.btn_fileAdd_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_NA_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
