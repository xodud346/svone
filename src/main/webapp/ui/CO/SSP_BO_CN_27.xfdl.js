(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work04");
            this.set_titletext("FAQ 유형 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"1024\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rfiTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"INT\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info00","20","53","540","417",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","40","98.00%","377",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("등록된 유형이 없습니다.");
            obj.set_binddataset("ds_rfiTpCd");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"87\"/><Column size=\"132\"/><Column size=\"155\"/><Column size=\"35\"/><Column size=\"0\"/><Column size=\"35\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"노출 순서\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"유형 명\"/><Cell col=\"4\" colspan=\"4\" text=\"파일명\"/></Band><Band id=\"body\"><Cell background=\"url(&apos;theme::default/images/grd_WF_Asending.png&apos;) no-repeat center center\" displaytype=\"imagecontrol\" textAlign=\"center\" border=\"1px solid #d4d4d4,1px none #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"1\" expandsize=\"10\" displaytype=\"imagecontrol\" edittype=\"none\" border=\"0px none,1px solid #cbcbcb,1px solid #cbcbcb,0px none\" borderRadius=\"0px\" background=\"url(&apos;theme::default/images/grd_WF_Descending.png&apos;) no-repeat center center\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_useYn\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"3\" text=\"bind:COM_DTL_CD_NM\" edittype=\"text\"/><Cell col=\"4\" border=\"1px solid #d4d4d4,0px none,1px solid #d4d4d4,1px solid #d4d4d4\" text=\"bind:ATFL_NM\"/><Cell col=\"5\" displaytype=\"imagecontrol\" background=\"url(&apos;theme::default/images/btn_WF_add_file.png&apos;) no-repeat center center\" border=\"0px none,0px none,1px solid #cbcbcb\" borderRadius=\"0px\"/><Cell col=\"6\" text=\"bind:SRT_SO\"/><Cell col=\"7\" displaytype=\"imagecontrol\" background=\"url(&apos;theme::default/images/grd_WF_FileDel.png&apos;) no-repeat center center\" border=\"1px solid #d4d4d4,0px none\"/></Band></Format></Formats>");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","15","140","25",null,null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","140","15",null,"25","0",null,null,null,null,null,this.Div_top_info00.form);
            obj.set_taborder("2");
            obj.set_text("※ 유형의 상태를 미 사용으로 변경 시 종속된 FAQ는 노출되지 않습니다.");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.Div_top_info00.addChild(obj.name, obj);

            obj = new Button("btn_cancel","220","486","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","294","486","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","484","16","65","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",570,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_27.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_27.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.fv_oApp = nexacro.getApplication();	//application object
        this.nRow = -1;
        this.valiGridIds = [
        	  {"name" : "상태", "id" : "USE_YN"}
        	, {"name" : "유형명","id" : "COM_DTL_CD_NM"}
        ];

        //첨부파일 타입
        this.fileType = "image/*"; //첨부파일 종류?
        this.maxFileSize = 10; //MB단위
        this.filePath = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch();
        	//조회
        	this.fn_search();

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (){
        	var sSvcId = "search";
        	var sUrl = "/co/often_qst/select_rfi_tp_cd_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_rfiTpCd=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select_common_code_list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_useYn=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "USE_YN");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/co/often_qst/save_rfi_tp_cd_list.do";
        	var inDs = "ds_save=ds_rfiTpCd:U"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		alert(errorMsg);
        	}

        	switch(svcID){
        		case "search":
        			var sTotText = "(<b v='true'>총 "+ this.totalCount+"건)";
        			this.Div_top_info00.form.sta_totcnt.set_text(sTotText);
        			this.ds_rfiTpCd.set_rowposition(-1);
        			break;
        		case "save" :
        			if(errorCode == -100){
        				alert(errorMsg);
        			}else{
        				this.fn_search();
        				alert("저장되었습니다.");
        				this.close(true);
        			}
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
        this.fn_fileUploadInit = function(){
        	var idx = this.Div_top_info.form.fup_upload.getItemIndex(this.objSubControl);
        	if(idx < 0){
        		idx = this.Div_top_info.form.fup_upload.getItemCount()-1;
        	}

        	if(idx != undefined){
        		this.Div_top_info.form.fup_upload.deleteItem(idx);
        	}

        	if(this.Div_top_info.form.fup_upload.getItemCount() == 0){
        		this.Div_top_info.form.fup_upload.appendItem();
        	}
        };


        //저장 유효성 체크
        this.fn_validationCheck = function(){

        	if(!this.gfn_dsIsUpdated(this.ds_rfiTpCd)){
        		alert("저장할 내용이 없습니다.");
        		return false;
        	}else{
        		for(var i = 0 ; i < this.ds_rfiTpCd.getRowCount() ; i++){
        			this.ds_rfiTpCd.setColumn(i, "SRT_SO", i+1);
        		}
        	}

        	//그리드 필수값 체크
        	var validation = this.fn_validationGrid(this.Div_top_info00.form.grd_list, this.valiGridIds, this.ds_rfiTpCd);
        	if(!validation){
        		return false;
        	}

        	return true;
        };


        //정렬 버튼 클릭
        this.fn_exchangeRows = function(row1, row2){
        	this.ds_rfiTpCd.exchangeRow(row1, row2);

        	this.ds_rfiTpCd.set_updatecontrol(false);
        	//신규가 아닌 경우에만 상태 : 수정으로 변경
        	if(this.ds_rfiTpCd.getRowType(row1) != 2){
        		this.ds_rfiTpCd.setRowType(row1, Dataset.ROWTYPE_UPDATE);
        	}

        	if(this.ds_rfiTpCd.getRowType(row2) != 2){
        		this.ds_rfiTpCd.setRowType(row2, Dataset.ROWTYPE_UPDATE);
        	}
        	this.ds_rfiTpCd.set_updatecontrol(true);
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //유형 추가 버튼 클릭
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_rfiTpCd.addRow();
        	this.ds_rfiTpCd.setColumn(nRow, "USE_YN", "Y");
        	this.Div_top_info00.form.grd_list.setCellPos(2);
        	this.Div_top_info00.form.grd_list.showEditor(true);
        };

        //저장 버튼 클릭
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fn_validationCheck()){
        		var sReturn = this.confirm("저장하시겠습니까?");
        		if(sReturn == true){
        			//첨부파일이 존재하는 경우 파일업로드->저장 진행
        			if( this.ds_file.rowcount > 0 ) {
        				var jsonArray = new Array();
        				for(var i=0; i<this.ds_file.rowcount; i++){
        					var jsonObj		= new Object();
        					jsonObj.COM_DTL_CD= this.ds_file.getColumn(i, "COM_DTL_CD") == undefined ? "" : this.ds_file.getColumn(i, "COM_DTL_CD");
        					jsonObj.COM_DTL_CD_NM= this.ds_file.getColumn(i, "COM_DTL_CD_NM") == undefined ? "" : this.ds_file.getColumn(i, "COM_DTL_CD_NM");
        					jsonObj.ORG_FILE_NAME= this.ds_file.getColumn(i, "ORG_FILE_NAME") == undefined ? "" :this.ds_file.getColumn(i, "ORG_FILE_NAME");
        					jsonObj.COM_USR_DEFN_NM_1 = this.ds_file.getColumn(i, "COM_USR_DEFN_NM_1") == undefined ? "" :this.ds_file.getColumn(i, "COM_USR_DEFN_NM_1");
        					jsonObj.COM_USR_DEFN_NM_2 = this.ds_file.getColumn(i, "COM_USR_DEFN_NM_2") == undefined ? "" : this.ds_file.getColumn(i, "COM_USR_DEFN_NM_2");
        					jsonObj.ATFL_STOR_PATH = this.ds_file.getColumn(i, "ATFL_STOR_PATH") == undefined ? "" :this.ds_file.getColumn(i, "ATFL_STOR_PATH");
        					jsonObj.ORI_ATFL_NM = this.ds_file.getColumn(i, "ORI_ATFL_NM") == undefined ? "" : this.ds_file.getColumn(i, "ORI_ATFL_NM");
        					jsonArray.push(jsonObj);
        				}
        				this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        				this.fileUpTrans.upload('/co/often_qst/rfi_file_upload.do');
        			} else {
        				this.fn_save();
        			}
        		}
        	}
        };

        //취소 버튼 클릭
        this.btn_cancel_onclick = function(obj,e)
        {
        	var sReturn = this.confirm("취소하시겠습니까?");
        	if(sReturn == true){
        		this.close();
        	}
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var rowposition = this.ds_rfiTpCd.rowposition;

        	if(e.cell == 0){
        		if ( rowposition > 0 ){
        			this.fn_exchangeRows(rowposition, rowposition-1);
        		}
        	}else if(e.cell == 1){
        		if ( rowposition < this.ds_rfiTpCd.rowcount-1 ){
        			this.fn_exchangeRows(rowposition, rowposition+1);
        		}
        	}else if(e.cell == 4){
        		//if(!this.gfn_isNull(this.ds_rfiTpCd.getColumn(e.row, "ATFL_NM")) && !this.gfn_isNull(this.ds_rfiTpCd.getColumn(e.row, "COM_USR_DEFN_NM_1"))){
        		if(!this.gfn_isNull(this.ds_rfiTpCd.getColumn(e.row, "ATFL_NM"))){
        			if(this.confirm(" 파일을 저장 하시겠습니까?")) {
        				this.downloadfile(e.row);
        			}
        		}
        	}else if(e.cell == 5){
        		this.nRow = e.row;

        		if(this.gfn_isNull(this.ds_rfiTpCd.getColumn(e.row, "COM_DTL_CD_NM"))){
        			alert("유형명을 입력해주세요.");
        			return;
        		}

        		this.fileDialog.set_accept(this.fileType);
        		this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);

        	}else if(e.cell == 7){

        		if(!this.gfn_isNull(this.ds_rfiTpCd.getColumn(e.row, "COM_USR_DEFN_NM_1"))){
        			if(this.confirm("첨부파일을 삭제 하시겠습니까?")) {
        				//그리드에서 첨부파일 삭제 시 파일명 "" 처리
        				this.ds_rfiTpCd.setColumn(e.row, "ATFL_NM", "");
        				this.ds_rfiTpCd.setColumn(e.row, "FILE_YN", "Y");
        			}
        		}
        	}
        };

        this.ds_rfiTpCd_cancolumnchange = function(obj,e)
        {
        	var eRow = e.row;
        	if(e.columnid == "COM_DTL_CD_NM"){
        		var nCnt = this.ds_rfiTpCd.extractRowsNF("COM_DTL_CD_NM == '" + this.gfn_trim(e.newvalue) + "'");
        		if(nCnt.length >= 1){
        			alert("유형명 : "+ e.newvalue + "가 중복되었습니다.");
        			return false;
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

        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;
        		var delYn = "N";

        		//파일이 존재하는 상태에서 덮어씌운경우
        		if(!this.gfn_isNull(this.ds_rfiTpCd.getColumn(this.nRow, "ATFL_NM"))){
        			//fileTransfer에 add된 기존 파일명으로 제거
        			this.fileUpTrans.removeFile(this.ds_rfiTpCd.getColumn(this.nRow, "COM_DTL_CD_NM"));

        			//저장된 파일의 수정인 경우
        			if(!this.gfn_isNull(this.ds_rfiTpCd.getColumn(this.nRow, "COM_USR_DEFN_NM_1"))){
        				//this.ds_rfiTpCd.setColumn(this.nRow, "FILE_YN", "Y");
        			}else{
        				//파일dataset에 COM_DTL_CD_NM으로 데이터 찾아서 delete
        				var findRow = this.ds_file.findRowExpr("COM_DTL_CD_NM == '" + this.ds_rfiTpCd.getColumn(this.nRow, "COM_DTL_CD_NM")+ "'");
        				if(findRow >= 0){
        					this.ds_file.deleteRow(findRow);
        				}
        			}
        		}


        		//화면 파일정보 셋팅
        		var row = this.ds_file.addRow();
        		this.ds_file.setColumn(row, "ORG_FILE_NAME", obj.filename);
        		this.ds_file.setColumn(row, "COM_DTL_CD", this.ds_rfiTpCd.getColumn(this.nRow, "COM_DTL_CD"));
        		this.ds_file.setColumn(row, "COM_DTL_CD_NM", this.ds_rfiTpCd.getColumn(this.nRow, "COM_DTL_CD_NM"));
        		this.ds_file.setColumn(row, "COM_USR_DEFN_NM_1", this.ds_rfiTpCd.getColumn(this.nRow, "COM_USR_DEFN_NM_1"));
        		this.ds_file.setColumn(row, "COM_USR_DEFN_NM_2", this.ds_rfiTpCd.getColumn(this.nRow, "COM_USR_DEFN_NM_2"));
        		this.ds_file.setColumn(row, "ATFL_STOR_PATH", this.ds_rfiTpCd.getColumn(this.nRow, "ATFL_STOR_PATH"));
        		this.ds_file.setColumn(row, "ORI_ATFL_NM", this.ds_rfiTpCd.getColumn(this.nRow, "ORI_ATFL_NM"));
        		console.log("this.nRow : " + this.nRow);
        		console.log("sFileName : " + sFileName);
        		this.ds_rfiTpCd.setColumn(this.nRow, "ATFL_NM", sFileName);
        		trace(this.ds_rfiTpCd.saveXML());
        		this.fileUpTrans.addFile(this.ds_rfiTpCd.getColumn(this.nRow, "COM_DTL_CD_NM"), obj)

        		this.nRow = -1;
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
        this.downloadfile = function(i) {
        	this.FileDownTransfer.clearPostDataList();
        	this.FileDownTransfer.set_downloadfilename(this.ds_rfiTpCd.getColumn(i, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("filePath",this.ds_rfiTpCd.getColumn(i, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_rfiTpCd.getColumn(i, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_rfiTpCd.getColumn(i, "ATFL_NM"));
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
        		var findRow  = this.ds_rfiTpCd.findRowExpr("COM_DTL_CD_NM == '" +  objCallDs.getColumn(i, "comDtlCdNm")+ "'");
        		if(findRow >= 0){
        			this.ds_rfiTpCd.setColumn(findRow, "COM_USR_DEFN_NM_1", objCallDs.getColumn(i, "docRegId"));
        			this.ds_rfiTpCd.setColumn(findRow, "COM_USR_DEFN_NM_2", objCallDs.getColumn(i, "docRegSeq"));
        		}
        	}

        	this.fn_save();

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.Div_top_info00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div_top_info00.form.sta_totcnt00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
            this.ds_rfiTpCd.addEventHandler("cancolumnchange",this.ds_rfiTpCd_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_CN_27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
