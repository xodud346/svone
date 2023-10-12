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
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_manual", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_REG_TTL\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_KEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top_info","20","0","1240","780",null,null,null,null,null,null,this);
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

            obj = new Edit("NOTCC_TTL","140","24",null,"24","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("10");
            this.div_top_info.addChild(obj.name, obj);

            obj = new TextArea("NOTCC_CTS","140","92",null,"245","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("11");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button00","138","354","109","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("파일 첨부");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01","290","354","388","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("13");
            obj.set_text("미만의 파일최대         까지 등록 할 수 있습니다.");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01_00","257","354","33","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("14");
            obj.set_text("10M");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","384","354","33","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("15");
            obj.set_text("10개");
            obj.set_color("red");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_01","917","355","109","23",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("16");
            obj.set_text("upload");
            obj.set_visible("false");
            this.div_top_info.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar","1031",null,"200","24",null,"402",null,null,null,null,this.div_top_info.form);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_min("0");
            obj.set_max("100");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_01","0","656",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01","0","656","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("19");
            obj.set_text("최초 등록");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_01_00","0","687",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","0","687","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("21");
            obj.set_text("최종 수정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_01","531","656","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("22");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","531","687","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("23");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","140","660","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("24");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_00","675","660","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("25");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_01","140","691","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("26");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","675","691","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("27");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("USE_YN","140","55","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static00_00","140","382",null,"265","9",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("29");
            obj.set_text("Drop Files Here");
            obj.set_visible("true");
            obj.set_background("aliceblue");
            obj.set_color("dodgerblue");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Grid("grd_file","139","382",null,"265","10",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("30");
            obj.set_binddataset("ds_files");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"459\"/><Column size=\"125\"/><Column size=\"28\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"크기\"/><Cell col=\"2\" autosizecol=\"none\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:ATFL_NM\"/><Cell col=\"1\" text=\"bind:ATFL_LEN_NM\" textAlign=\"right\"/><Cell col=\"2\" displaytype=\"imagecontrol\" edittype=\"none\" text=\"삭제\" background=\"url(&apos;theme://images/btn_WF_close_small.png&apos;) no-repeat center center #B61539\" autosizecol=\"limitmin\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00","665","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("31");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","505","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("32");
            obj.set_text("취소");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","585","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("33");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv3","425","940","330","230",null,null,null,null,null,null,this);
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
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_top_info.form.NOTCC_CTS","value","ds_manual","MEMO_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_top_info.form.NOTCC_TTL","value","ds_manual","MANUAL_REG_TTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_top_info.form.USE_YN","value","ds_manual","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_32_BAK.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_32_BAK.xfdl", function() {
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

        	//공통코드 조회
        	this.fn_commonCodeSearch();

        	//조회
        	this.fn_search();

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

        //조회
        this.fn_search = function() {
        	 var sSvcId = "searchManual";
             var sUrl = "/co/select_manual_detail.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_manual=ds_output ds_files=ds_files";
             var arg;
             var callback = "fn_callback";

        	 this.ds_search.setColumn(0,"MANUAL_REG_SEQ", this.parent.manualRegSeq);
        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function(type) {
        	var sSvcId = "saveManual";
            var sUrl = "/co/save_manual.do";
        	var inDs = "ds_save=ds_manual:U ds_files=ds_files:U"
            var outDs = "";
            var arg;
            var callback = "fn_callback";
        	var msg = "저장";

        	if( type == "D" ) {
        		msg = "삭제";
        	}

        	if( type == "D" ) {
        		if( this.confirm(msg + " 하시겠습니까?") ){
        			this.ds_manual.deleteAll();
        		}
        	}

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }



        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백 이벤트
        this.fn_callback = function(svcID, errorCode, errorMsg){
        	if(svcID == "searchManual"){

        		if( this.ds_files.rowcount == 0 ) {
        			this.ds_files.copyData(this.ds_files_copy);
        		}
        	} else if(svcID == "saveManual"){
        		if( errorCode != 0 ) {
        			alert(errorMsg);
        			return false;
        		} else {
        			this.opener.fn_popupClose(svcID);
        			this.close();
        		}
        	}
        }


        //파일 업로드 콜백.
        this.fn_fileUploadCallback = function(docRegId) {
        	//문서번호 설정.
        	this.ds_manual.setColumn(0, "DOC_REG_ID", this.docRegId);

        	// 수정함수 호출
        	this.fn_save("I");
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //초기값 설정
        this.initSetValue = function() {
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

        // 저장 버튼 이벤트
        this.Div_top_info_Button01_00_onclick = function(obj,e)
        {
        	var chkDsChange = this.fn_dataChangeCheck(this.ds_manual); //this.fn_dataCheck(this.ds_comCdList);
        	if( !chkDsChange ) {
        		//첨부파일 변경되었는지 확인.
        		if( this.fn_dataCheck(this.ds_files) == false ) {
        			alert("수정된 내용이 없습니다.");
        			return false;
        		}
        	}

        	// 필수값 체크
        	var validation = this.fn_validationForm(this.div_top_info, this.valiFormIds, this.ds_manual);

        	if( validation ) {
        		if( this.confirm("저장 하시겠습니까?") ){
        			if( this.ds_files.rowcount > 0 ) {
        				this.FileUpTransfer.upload('/co/file_upload.do');
        			} else {
        				this.fn_save("U");
        			}
        		}
        	}
        };


        //취소버튼
        this.div_top_info_Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        //삭제 버튼
        this.div_top_info_Button01_00_00_onclick = function(obj,e)
        {
        	this.fn_save("D");
        };



        /***********************************************************************************************
        *  파일첨부 관련  이벤트 영역
        ************************************************************************************************/

        // 파일 전송 성공
        this.FileUpTransfer_onsuccess = function(obj,e)
        {
        	var objCallDs = e.datasets[0];
        	console.log(objCallDs);

        	if( objCallDs!= undefined ) {
        		var docRegId = objCallDs.getColumn(0, "docRegId");
        		this.ds_manual.setColumn(0, "DOC_REG_ID", docRegId);
        	}
        	this.fn_save("U");
        };

        // 파일전송 실패
        this.fileUpTrans_onerror = function(obj,e)
        {
        	trace(e.errormsg);
        };

        //파일 추가 성공
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var nRowIdx = this.ds_files.addRow();
        			this.ds_files.setColumn(nRowIdx, "ATFL_NM", obj.filename);
        			this.ds_files.setColumn(nRowIdx, "ATFL_LEN_NM", this.cutFileSize(e.filesize));
        			this.ds_files.set_rowposition(nRowIdx);
        			this.FileUpTransfer.addFile(obj.filename, obj);
        			break;
        	}
        }

        // 파일추가 실패
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        //파일첨부 버튼 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog.set_accept(this.fileType);
        	this.FileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };


        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };


        this.grd_file_ondragenter = function(obj,e)
        {
        	if(e.datatype == "file") {
        		this.grd_file.set_opacity(0.5);
        	}
        };

        this.grd_file_ondragleave = function(obj,e)
        {
        	this.grd_file.set_opacity(1);
        };

        this.grd_file_ondrop = function(obj,e)
        {
        	this.grd_file.set_opacity(1);
        	if(e.datatype == "file") {
        		this.addFileList(e.filelist);
        	}
        };

        this.FileUpTransfer_onprogress = function(obj,e)
        {
        	var rtnPercent = this.fnGetPercent(e.loaded,e.total);
        	this.div_top_info.form.ProgressBar.set_pos(rtnPercent);
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.FileUpTransfer.upload('/co/fileUpload.do');
        };

        //그리드 클릭
        this.div_top_info_grd_file_oncellclick = function(obj,e)
        {
        	if( obj.getCellPos() == 2 ) {
        		if(this.confirm("첨부파일을 삭제 하시겠습니까?")) {
        			this.ds_files.deleteRow(this.ds_files.rowposition);
        		}
        	} else {
        		if(this.confirm(this.ds_files.getColumn(0, "ATFL_NM") + " 파일을 저장 하시겠습니까?")) {
        			this.downloadfile(e.row);
        		}
        	}
        };

        //다운 완료
        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        	alert("1");
        	console.log(e);
        	console.log(obj);
        };

        //다운 실패
        this.FileDownTransfer_onerror = function(obj,e)
        {
        	alert("2");
        	console.log(e);
        	console.log(obj);
        };



        //파일 사이즈.
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


        //퍼센트 계산
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

        //파일 이벤트 생성
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];

        		//파일 개수 및 확장자 검증
        		if(!this.fn_fileSizeCheck(vFile, vFile._handle.size)) {
        			return false;
        		}

        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        //파일 사이즈 가져오기
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


        // 파일 다운로드
        this.downloadfile = function(i) {
        	this.FileDownTransfer.clearPostDataList();

        	this.FileDownTransfer.set_downloadfilename(this.ds_files.getColumn(i, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("filePath",this.ds_files.getColumn(i, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_files.getColumn(i, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_files.getColumn(i, "ATFL_NM"));
        	this.FileDownTransfer.download('/co/fileDownload.do');

        	//this.FileDownTransfer.download(this.saveUrl + "fileDownload_postdatatest.jsp");
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_top_info.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.div_top_info.form.Static01.addEventHandler("onclick",this.div_top_info_Static01_onclick,this);
            this.div_top_info.form.Static01_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.div_top_info.form.Static01_00_00.addEventHandler("onclick",this.div_top_info_Static01_00_onclick,this);
            this.div_top_info.form.Button01_01.addEventHandler("onclick",this.Button01_onclick,this);
            this.div_top_info.form.Static00_00.addEventHandler("onclick",this.div_top_info_Static00_00_onclick,this);
            this.div_top_info.form.grd_file.addEventHandler("ondrop",this.grd_file_ondrop,this);
            this.div_top_info.form.grd_file.addEventHandler("ondragleave",this.grd_file_ondragleave,this);
            this.div_top_info.form.grd_file.addEventHandler("ondragenter",this.grd_file_ondragenter,this);
            this.div_top_info.form.grd_file.addEventHandler("oncellclick",this.div_top_info_grd_file_oncellclick,this);
            this.div_top_info.form.Button01_00.addEventHandler("onclick",this.Div_top_info_Button01_00_onclick,this);
            this.div_top_info.form.Button01.addEventHandler("onclick",this.div_top_info_Button01_onclick,this);
            this.div_top_info.form.Button01_00_00.addEventHandler("onclick",this.div_top_info_Button01_00_00_onclick,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer.addEventHandler("onprogress",this.FileUpTransfer_onprogress,this);
            this.FileUpTransfer.addEventHandler("onsuccess",this.FileUpTransfer_onsuccess,this);
            this.FileUpTransfer.addEventHandler("onerror",this.FileUpTransfer_onerror,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_CN_32_BAK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
