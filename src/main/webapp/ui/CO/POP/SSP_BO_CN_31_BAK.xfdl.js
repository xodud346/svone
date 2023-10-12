(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_02");
            this.set_titletext("공지사항 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_manual", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"NOTCC_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"size\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top_info","20","0","1240","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_border("0px solid darkblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","82",null,"265","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static27","0","Static21:-1",null,"311","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","0","51",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","0","20",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","20","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_cm_box01L_tdt_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","0","51","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static20","0","82","130","265",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("4");
            obj.set_text("메모");
            obj.set_cssclass("sta_cm_box01L_necessary");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static26","0","Static20:-1","130","311",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-148","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-148","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Edit("MANUAL_REG_TTL","140","24",null,"24","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("10");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","545","672","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00","625","672","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new TextArea("MEMO_CTS","140","92",null,"245","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("13");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button00","138","354","109","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("14");
            obj.set_text("파일 첨부");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01","290","354","388","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("15");
            obj.set_text("미만의 파일최대         까지 등록 할 수 있습니다.");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01_00","257","354","33","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("16");
            obj.set_text("10M");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","384","354","33","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("17");
            obj.set_text("10개");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_01","917","355","109","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("upload");
            obj.set_visible("false");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static00_00","140","382",null,"265","9",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("19");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Grid("Grid","139","382",null,"265","9",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("20");
            obj.set_binddataset("ds_files");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"380\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:size\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_top_info.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","1031",null,"200","24",null,"342",null,null,null,null,this.div_top_info.form);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("USE_YN","140","55","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div_top_info.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","398","785","330","230",null,null,null,null,null,null,this);
            obj.getSetter("positionstep").set("0");
            obj.set_background("#fffff");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("searchStartDate","6","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_value("");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Calendar("searchEndDate","165","10","149","172",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_confirm","99","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.getSetter("uWord").set("popup.ok");
            this.PopupDiv3.addChild(obj.name, obj);

            obj = new Button("btn_cancel","169","192","60","24",null,null,null,null,null,null,this.PopupDiv3.form);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.getSetter("uWord").set("popup.cancel");
            this.PopupDiv3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_top_info.form.MANUAL_REG_TTL","value","ds_manual","MANUAL_REG_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_top_info.form.MEMO_CTS","value","ds_manual","MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_top_info.form.USE_YN","value","ds_manual","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_31_BAK.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_31_BAK.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_02
        /* 작 성 일 자 : 2022/02/16
        /* 작  성   자 : 이성민
        /* 설       명 : 공지사항 상세조회 팝업
        /***********************************************************/


        /* 스크립트 인클루드 */
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	  { "id" : "MANUAL_REG_TTL", "name" : "제목" }
        	, { "id" : "MEMO_CTS", "name" : "메모" }
        	, { "id" : "USE_YN", "name" : "사용여부" }
        ];

        //첨부파일 타입
        this.fileType = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, image/*, text/*"; //첨부파일 종류
        this.maxFileSize = 10; //MB단위

        //파일 경로
        this.filePath = "";


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//빈 로우 생성
        	this.ds_manual.addRow();

        	//초기값 설정
        	this.initSetValue();

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
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
        this.fn_save = function() {
        	var sSvcId = "saveManual";
            var sUrl = "/co/save_manual.do";
        	var inDs = "ds_save=ds_manual:U"
            var outDs = "";
            var arg;
            var callback = "fn_callback";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백 이벤트
        this.fn_callback = function(svcID, errorCode, errorMsg){
        	if(svcID == "saveManual"){
        		if( errorCode != 0 ) {
        			alert(errorMsg);
        			return false;
        		} else {
        			this.opener.fn_popupClose(svcID);
        			this.close();
        		}
        	}
        }


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //초기값 설정
        this.initSetValue = function() {
        	//사용여부 기본값
        	this.ds_manual.setColumn(0, "USE_YN", "Y");
        }


        //라디오 변경 이벤트
        this.fn_radioChage = function(objId) {
        }

        //팝업호출
        this.fn_popup = function(type) {
        	if( type == "TARGET" ){
        		var objParam = {};
        		this.gfn_openPopup("oprUntMultiPop", "CO_POP::operateUnitMultiPopup.xfdl", objParam, "fn_popupCallback");
        	}
        }


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //등록버튼 이벤트
        this.Div_top_info_Button01_00_onclick = function(obj,e)
        {
        	/*
        	if( this.parent.type == "U" ) {
        		var chkDsChange = this.fn_dataChangeCheck(this.ds_manual); //this.fn_dataCheck(this.ds_comCdList);
        		if( !chkDsChange ) {
        			alert("수정된 내용이 없습니다.");
        			return false;
        		}
        	}
        	*/

        	// 필수값 체크
        	var validation = this.fn_validationForm(this.div_top_info, this.valiFormIds, this.ds_manual);

        	if( validation ) {
        		if( this.confirm("저장 하시겠습니까?") ){
        			if( this.ds_files.rowcount > 0 ) {
        				this.FileUpTransfer.upload('/co/file_upload.do');
        			} else {
        				this.fn_save();
        			}
        		}
        	}
        };


        //취소버튼
        this.div_top_info_Button01_onclick = function(obj,e)
        {
        	this.close();
        };





        /***********************************************************************************************
        *  첨부파일 이벤트 영역
        ************************************************************************************************/

        //파일첨부 버튼 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog.set_accept(this.fileType);
        	this.FileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        //파일 dialog close 이벤트
        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        //파일 추가
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];

        		if(!this.fn_fileSizeCheck(vFile, vFile._handle.size)) {
        			return false;
        		}

        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        //파일 추가 성공 시
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:

        			var nRowIdx = this.ds_files.addRow();
        			this.ds_files.setColumn(nRowIdx, 0, obj.filename);
        			this.ds_files.setColumn(nRowIdx, 1, this.cutFileSize(e.filesize));
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			break;
        	}
        }

        //파일추가 실패 시
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        //사이즈 가져오기
        this.cutFileSize = function(filesize)
        {
        	var sOutput = filesize + " bytes";
        	var fileSizeType = "";
        	var size = 0;
        	for (var aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = filesize / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        		sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple];
        		fileSizeType = aMultiples[nMultiple];
        		size = nApprox;
        	}

        	return sOutput;
        };

        //드래그이벤트
        this.Grid_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file") {
        		this.div_top_info.form.Grid.set_opacity(0.5);
        	}
        };

        //드래그 아웃
        this.Grid_ondragleave = function(obj,e)
        {
        	this.div_top_info.form.Grid.set_opacity(1);
        };

        //드래그 드롭
        this.Grid_ondrop = function(obj,e)
        {
        	this.div_top_info.form.Grid.set_opacity(1);
        	if(e.datatype == "file")
        	{
        		this.addFileList(e.filelist);
        	}
        };

        //업로드 버튼 ( 숨김 )
        this.Button01_onclick = function(obj,e)
        {
        	this.FileUpTransfer.upload('/co/fileUpload.do');
        };

        //전송 에러
        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        //프로그래스 바
        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded,e.total);
        	this.div_top_info.form.ProgressBar.set_pos(rtnPercent);
        };

        //전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	var docRegId = objCallDs.getColumn(0, "docRegId");
        	this.ds_manual.setColumn(0, "DOC_REG_ID", docRegId);

        	this.fn_save();
        };

        //프로그래스바에 전송할 퍼센트
        this.fnGetPercent = function(nload,nTotal)
        {
        	//일부값 ÷ 전체값 X 100
        	var nCurPercent = (nload / nTotal) * 100;
        	return nCurPercent;
        };


        //파일 확장자 검증
        this.fn_fileSizeCheck = function(obj, fileSize) {
        	var fileName = obj.filename;
        	var extNm  = fileName.substr(fileName.lastIndexOf(".") + 1); // 맨 뒤 확장자만 자르기
        	var fileGbn = ".pptx, .ppt, .docx, .doc, .xls, .xlsx, .jpg, .png, .txt";

        	extNm = extNm.toLowerCase();

        	if( this.ds_files.rowcount >= 10 ) {
        		alert("최대 첨부 개수는 10개 입니다.");
        		return false;
        	}

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
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_top_info.form.Button01.addEventHandler("onclick",this.div_top_info_Button01_onclick,this);
            this.div_top_info.form.Button01_00.addEventHandler("onclick",this.Div_top_info_Button01_00_onclick,this);
            this.div_top_info.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.div_top_info.form.Static01.addEventHandler("onclick",this.div_top_info_Static01_onclick,this);
            this.div_top_info.form.Static01_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.div_top_info.form.Static01_00_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.div_top_info.form.Button01_01.addEventHandler("onclick",this.Button01_onclick,this);
            this.div_top_info.form.Static00_00.addEventHandler("onclick",this.div_top_info_Static00_00_onclick,this);
            this.div_top_info.form.Grid.addEventHandler("ondragenter",this.Grid_ondragenter,this);
            this.div_top_info.form.Grid.addEventHandler("ondragleave",this.Grid_ondragleave,this);
            this.div_top_info.form.Grid.addEventHandler("ondrop",this.Grid_ondrop,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CN_31_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
