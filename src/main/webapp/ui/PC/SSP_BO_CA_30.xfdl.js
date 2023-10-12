(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MF_21");
            this.set_titletext("참조가격입력 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CHG_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRC_SPR_CD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CHG_PRC\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_PRC\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRC_SPR_CD\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRD_PRC_ATFL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHG_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_insert", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTrans", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","60",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","0",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상품");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdId","135","4","175","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_popPrdId","492","4","24","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_prdNm","314","4","175","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_delete","43.64%","Div00:180","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","50.36%","Div00:180","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","146",null,"126","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"101\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"114\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"구분\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"현재가격\"/><Cell col=\"3\" text=\"판매통화\"/><Cell col=\"4\" text=\"변경가격\"/><Cell col=\"5\" text=\"변경사유\"/><Cell col=\"6\" colspan=\"3\" text=\"증빙첨부\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COM_DTL_CD_NM\"/><Cell col=\"2\" text=\"expr:PRE_PRC==&quot;0&quot;?&quot;&quot;:PRE_PRC\" displaytype=\"number\"/><Cell col=\"3\" text=\"KRW\"/><Cell col=\"4\" text=\"bind:CHG_PRC\" displaytype=\"expr:CHK==&quot;1&quot;?&quot;maskeditcontrol&quot;:&quot;readonly&quot;\" edittype=\"expr:CHK==&quot;1&quot;?&quot;mask&quot;:&quot;readonly&quot;\" editinputtype=\"digit\" maskeditlimitbymask=\"both\" maskeditformat=\"###,###,###,###,##9.9999\"/><Cell col=\"5\" text=\"bind:CHG_RSN\" displaytype=\"expr:CHK==&quot;1&quot;?&quot;editcontrol&quot;:&quot;readonly&quot;\" edittype=\"expr:CHK==&quot;1&quot;?&quot;text&quot;:&quot;readonly&quot;\" editmaxlength=\"100\"/><Cell col=\"6\" text=\"bind:ATFL_NM\" border=\"1px solid #d4d4d4,0px none,1px solid #d4d4d4,1px solid #d4d4d4\"/><Cell col=\"7\" text=\"bind:DATA_CHG_TP_NM\" background=\"url(&apos;theme::default/images/btn_WF_add_file.png&apos;) no-repeat center center\" border=\"0px none,0px none,1px solid #cbcbcb\" displaytype=\"expr:CHK==&quot;1&quot;?&quot;imagecontrol&quot;:&quot;none&quot;\"/><Cell col=\"8\" text=\"bind:UPDPSN_ID\" background=\"url(&apos;theme::default/images/grd_WF_FileDel.png&apos;) no-repeat center center\" border=\"1px solid #d4d4d4,0px none\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_history",null,"109","108","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("변경이력");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","20","20","490","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("참조가격입력 팝업");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,340,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","Div00.form.edt_prdNm","value","ds_search","PRD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.edt_prdId","value","ds_search","PRD_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CA_30.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_CA_30.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_CA_30.xfdl", function() {
        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
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
        this.fileType = "*/*"; //첨부파일 종류?
        this.maxFileSize = 20; //MB단위
        this.filePath = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        	var prdId = this.parent.prdId;
        	var prdNm = this.parent.prdNm;
        	var exYn = this.parent.exYn;


        	//prdId = "000000000001857031";
        	//prdNm = "상품아";

        	if(!this.gfn_isNull(prdId) || !this.gfn_isNull(prdNm)){
        		this.Div00.form.btn_popPrdId.set_enable(false);
        		this.Div00.form.edt_prdId.set_value(prdId);
        		this.Div00.form.edt_prdNm.set_value(prdNm);
        		this.fn_doSearch();
        	}

        	if(exYn == "Y"){
        		this.Div00.form.edt_prdId.set_enable(true);
        		this.Div00.form.btn_popPrdId.set_enable(true);
        	}

        	//단축키 함수 호출
        	this.fn_regShortCutMethod();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_doSearch = function()
        {
        	 var sSvcId = "selectExPrdPrcDetail";
             var sUrl = "/pc/prd-prc-chg/select-exprd-prc-detail.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output";
             var arg;
             var callback = "fn_received";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/pc/prd-prc-chg/update-ex-prd-prc.do";
        	var inDs = "ds_save=ds_save ds_search=ds_insert"
        	var outDs = "";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 트랜잭션 콜백함수
        this.fn_received = function(svcID, errorCode, errorMsg)	{

        	switch(svcID)
        	{
        		case 'selectExPrdPrcDetail' :

        			this.ds_insert.copyData(this.ds_search,true);

        		break;


        		default :
        		break;
        	}

        }
        this.fn_popupCallback = function(sPopupId, sRetValue){

        	switch(sPopupId){
        		case "btn_popPrdId":

        			const prdObj = JSON.parse(sRetValue);


        			this.Div00.form.edt_prdId.set_value(prdObj.PRD_ID_VIEW);
        			this.Div00.form.edt_prdNm.set_value(prdObj.PRD_NM);

        			this.fn_doSearch();

        		break;

        	}
        }

        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "save"){
        		if( errorCode == -1 || errorCode == -100){
        			alert(errorMsg);
        		}else{
        			//alert("저장되었습니다.");
        			this.alert(this.fn_getMessage("ERRP000207"));

        			this.close("OK");
        		}
        	}


        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
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
        		if(!this.gfn_isNull(this.ds_list.getColumn(this.nRow, "ATFL_NM"))){
        			//fileTransfer에 add된 기존 파일명으로 제거
        			this.fileUpTrans.removeFile(this.ds_list.getColumn(this.nRow, "COM_DTL_CD_NM"));

        			//파일dataset에 COM_DTL_CD_NM으로 데이터 찾아서 delete
        			var findRow = this.ds_file.findRowExpr("COM_DTL_CD_NM == '" + this.ds_list.getColumn(this.nRow, "COM_DTL_CD_NM")+ "'");
        			if(findRow >= 0){
        				this.ds_file.deleteRow(findRow);
        			}
        		}

        		//화면 파일정보 셋팅
        		var row = this.ds_file.addRow();
        		this.ds_file.setColumn(row, "ORG_FILE_NAME", obj.filename);
        		this.ds_file.setColumn(row, "COM_DTL_CD_NM", this.ds_list.getColumn(this.nRow, "COM_DTL_CD_NM"));
        		this.ds_file.setColumn(row, "ATFL_STOR_PATH", this.ds_list.getColumn(this.nRow, "ATFL_STOR_PATH"));
        		this.ds_file.setColumn(row, "ORI_ATFL_NM", this.ds_list.getColumn(this.nRow, "ORI_ATFL_NM"));
        		this.ds_list.setColumn(this.nRow, "ATFL_NM", sFileName);

        		this.fileUpTrans.addFile(this.ds_list.getColumn(this.nRow, "COM_DTL_CD_NM"), obj)

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
        		//alert("파일 업로드 오류입니다.");
        		this.alert(this.fn_getMessage("ERRP000242"));
        	}

        	for(var i = 0 ; i < objCallDs.rowcount ; i++){
        		var findRow  = this.ds_save.findRowExpr("COM_DTL_CD_NM == '" +  objCallDs.getColumn(i, "comDtlCdNm")+ "'");

        		if(findRow >= 0){
        			this.ds_save.setColumn(findRow, "PRD_PRC_ATFL_ID", objCallDs.getColumn(i, "docRegId"));
        		}
        	}

        	this.fn_save();

        };

        //저장 -> 파일 업로드 실패 시
        this.fileUpTrans_onerror = function(obj,e)
        {

        	//alert("파일 업로드 오류입니다.");
        	this.alert(this.fn_getMessage("ERRP000242"));

        };


        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	//var fileGbn = ".jpg, .png";
        	var fileGbn = ".bmp, .jpg, .jpeg, .png, .gif, .tif, .docx, .docm, .doc, .xlsx, .xlsm, .xlsb, .xls, .pptx, .pptm, .ppt, .hwp, .hwpx, .egg, .zip, .pdf, .txt, .csv"
        	extNm = extNm.toLowerCase();

        	//10485760 - 10메가
        	//메가바이트 변환
        	var mbSize = fileSize / 1024 / 1024;
        	if( this.maxFileSize < mbSize ) {
        		//alert(extNm + " 파일은 20MB 이상으로 첨부하실 수 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000243", extNm));
        		return false;
        	}

        	if( fileGbn.indexOf(extNm) == -1 ) {
        		//alert(extNm + " 파일은 허용되지 않는 파일 타입입니다.");
        		this.alert(this.fn_getMessage("ERRP000244", extNm));
        		return false;
        	}

        	return true;
        };


        //저장 유효성 체크
        this.fn_validationCheck = function(index){

        	if(this.gfn_isNull(this.ds_list.getColumn(index,"CHG_PRC"))) {
        		//alert("변경 가격이 입력되지 않았습니다.");
        		this.alert(this.fn_getMessage("ERRP000109"));
        		return false;
        	}

        	if(this.gfn_isNull(this.ds_list.getColumn(index,"CHG_RSN"))) {
        		//alert("변경사유가 입력되지 않았습니다.");
        		this.alert(this.fn_getMessage("ERRP000245"));
        		return false;
        	}

        	if(this.ds_list.getColumn(index,"CHG_RSN").length < 5) {
        		//alert("변경사유는 5글자 이상이어야합니다.");
        		this.alert(this.fn_getMessage("ERRP000246"));
        		return false;
        	}

        	return true;
        };

        this.fn_getPrdNameCB = function()	{
        	if(this.ds_search.getColumn(0,"PRD_ID") != "" && this.ds_search.getColumn(0,"PRD_ID") != undefined){
        		this.fn_doSearch();
        	}else{
        		this.ds_search.setColumn(0,"PRD_NM","");
        		this.ds_list.clearData();
        	}
        }

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("btn_delete_onclick");
        };

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/


        this.Div00_btn_popPrdId_onclick = function(obj,e)
        {
        	var params = {coCd:this.fv_coCd};
        	var oArg = {

        	};
        	var opts = { title : '상품 조회', titlebar: 'true' }
        	this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PP_38.xfdl", params, "fn_popupCallback", opts);
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == 7){
        		this.nRow = e.row;
        		if(this.ds_list.getColumn(e.row, "CHK") == "1"){
        			this.fileDialog.set_accept(this.fileType);
        			this.fileDialog.open('nexacro17', FileDialog.MULTILOAD);
        		}


        	}else if(e.cell == 8){
        		if(this.ds_list.getColumn(e.row, "CHK") == "1"){
        			if(!this.gfn_isNull(this.ds_list.getColumn(e.row, "COM_DTL_CD_NM"))){
        				//if(this.confirm("첨부파일을 삭제 하시겠습니까?")) {
        				if(this.confirm(this.fn_getMessage("ERRP000249"))) {
        					var findRow  = this.ds_file.findRowExpr("COM_DTL_CD_NM == '" +  this.ds_list.getColumn(e.row, "COM_DTL_CD_NM")+ "'");

        					if(findRow >= 0){
        						//this.ds_save.setColumn(findRow, "PRD_PRC_ATFL_ID", objCallDs.getColumn(i, "docRegId"));
        						this.ds_file.deleteRow(findRow);
        						this.ds_list.setColumn(e.row, "ATFL_NM", "");
        						this.fileUpTrans.removeFile(this.ds_list.getColumn(e.row, "COM_DTL_CD_NM"));
        					}
        					//그리드에서 첨부파일 삭제 시 파일명 "" 처리
        					//this.ds_rfiTpCd.setColumn(e.row, "ATFL_NM", "");
        					//this.ds_rfiTpCd.setColumn(e.row, "FILE_YN", "Y");
        				}
        			}
        		}
        	}else if(e.cell == 0){
        		if(this.ds_list.getColumn(e.row, "CHK") == "0"){
        			this.ds_list.setColumn(e.row, "CHG_PRC", "");
        			this.ds_list.setColumn(e.row, "CHG_RSN", "");
        			var findRow  = this.ds_file.findRowExpr("COM_DTL_CD_NM == '" +  this.ds_list.getColumn(e.row, "COM_DTL_CD_NM")+ "'");
        			if(findRow >= 0){
        				this.ds_file.deleteRow(findRow);
        				this.ds_list.setColumn(e.row, "ATFL_NM", "");
        			}
        		}
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var chkCnt			= this.ds_list.getCaseCount("CHK==1");
        	var isInsert = false;

        	if( chkCnt == 0 ) {
        		//alert("선택된 값이 없습니다.");
        		this.alert(this.fn_getMessage("ERRP000247"));
        		return false;
        	}



        	this.temp = 0;
        	this.ds_save.clearData();
        	for(var i=0; i < this.ds_list.rowcount; i++){
        		var checkbox = this.ds_list.getColumn(i, "CHK");

        		if( checkbox == 1 ) {
        			isInsert = this.fn_validationCheck(i);
        			if(isInsert){
        				this.ds_save.addRow();
        				this.ds_save.copyRow(this.temp,this.ds_list,i);
        				this.temp++;
        			}else{
        				break;
        			}

        		}
        	}

        	if(isInsert){
        		//var sReturn = this.confirm("입력된 내용을 저장하시겠습니까?");
        		var sReturn = this.confirm(this.fn_getMessage("ERRP000225"));
        		if(sReturn == true){

        			if( this.ds_file.rowcount > 0 ) {
        				var jsonArray = new Array();
        				for(var i=0; i<this.ds_file.rowcount; i++){
        					var jsonObj	= new Object();

        					jsonObj.COM_DTL_CD        = this.ds_file.getColumn(i, "COM_DTL_CD"       ) == undefined ? "" : this.ds_file.getColumn(i, "COM_DTL_CD"       );
        					jsonObj.COM_DTL_CD_NM     = this.ds_file.getColumn(i, "COM_DTL_CD_NM"    ) == undefined ? "" : this.ds_file.getColumn(i, "COM_DTL_CD_NM"    );
        					jsonObj.ORG_FILE_NAME     = this.ds_file.getColumn(i, "ORG_FILE_NAME"    ) == undefined ? "" : this.ds_file.getColumn(i, "ORG_FILE_NAME"    );
        					jsonObj.ATFL_STOR_PATH    = this.ds_file.getColumn(i, "ATFL_STOR_PATH"   ) == undefined ? "" : this.ds_file.getColumn(i, "ATFL_STOR_PATH"   );
        					jsonObj.ORI_ATFL_NM       = this.ds_file.getColumn(i, "ORI_ATFL_NM"      ) == undefined ? "" : this.ds_file.getColumn(i, "ORI_ATFL_NM"      );

        					jsonArray.push(jsonObj);
        				}

        				this.fileUpTrans.setPostData("resList", JSON.stringify(jsonArray));
        				this.fileUpTrans.upload('/pc/prd-prc-chg/update-ex-File.do');

        			}else{
        				this.fn_save();
        			}

        	}
        }

        };

        this.btn_delete_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_history_onclick = function(obj,e)
        {
        	var objParam = {
        		prdId: this.ds_search.getColumn(0, "PRD_ID" )
        	};
        	if((typeof(this.ds_search.getColumn(0, "PRD_ID" ))) == "undefined"){
        		//alert("상품ID가 존재하지 않습니다.");
        		this.alert(this.fn_getMessage("ERRP000248"));
        	}else{
        		this.gfn_openPopup(e.fromobject.id, "PC::SSP_BO_CA_28.xfdl", objParam);
        	}

        };

        this.Div00_edt_prdId_onchanged = function(obj,e)
        {
        	this.fn_getCodeName(obj,this.Div00.form.edt_prdNm,"PRD","fn_getPrdNameCB");
        };

        this.Div00_edt_prdId_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_getCodeName(obj,this.Div00.form.edt_prdNm,"PRD","fn_getPrdNameCB");
        	}
        };

        this.SSP_BO_MF_21_onkeyup = function(obj,e)
        {
        	// 단축키 등록
        	this.fn_processKey(obj, e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.SSP_BO_MF_21_onkeyup,this);
            this.Div00.form.edt_prdId.addEventHandler("onchanged",this.Div00_edt_prdId_onchanged,this);
            this.Div00.form.edt_prdId.addEventHandler("onkeyup",this.Div00_edt_prdId_onkeyup,this);
            this.Div00.form.btn_popPrdId.addEventHandler("onclick",this.Div00_btn_popPrdId_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_history.addEventHandler("onclick",this.btn_history_onclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTrans.addEventHandler("onerror",this.fileUpTrans_onerror,this);
            this.fileUpTrans.addEventHandler("onprogress",this.fileUpTrans_onprogress,this);
            this.fileUpTrans.addEventHandler("onsuccess",this.fileUpTrans_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CA_30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
