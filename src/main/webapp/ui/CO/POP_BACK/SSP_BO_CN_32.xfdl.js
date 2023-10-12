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


            obj = new Dataset("ds_file_list", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delete_files", this);
            obj._setContents("");
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

            obj = new Static("Static17_01","0","656",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01","0","656","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("13");
            obj.set_text("최초 등록");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static17_01_00","0","687",null,"32","0",null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","0","687","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("15");
            obj.set_text("최종 수정");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_01","531","656","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("16");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","531","687","130","32",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("17");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_cm_box01L");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","140","660","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_00","675","660","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("19");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_01","140","691","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("20");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","675","691","167","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("21");
            obj.set_text("Static04");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Combo("USE_YN","140","55","150","24",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_useYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00","665","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01","505","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("24");
            obj.set_text("취소");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","585","735","70","30",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("25");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_select");
            this.div_top_info.addChild(obj.name, obj);

            obj = new Div("Div00","140","356","1090","294",null,null,null,null,null,null,this.div_top_info.form);
            obj.set_taborder("26");
            obj.set_text("Div00");
            obj.set_url("CO::fileUpload.xfdl");
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
            this._addPreloadList("fdl","CO::fileUpload.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CN_32.xfdl","CO::coUtils.xjs");
        this.registerScript("SSP_BO_CN_32.xfdl", function() {
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

        this.fileDs = "";
        this.fileUpTransfer = "";
        this.docRegId = "";


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
             var outDs = "ds_manual=ds_output ds_file_list=ds_file_list";
             var arg;
             var callback = "fn_callback";

        	 this.ds_search.setColumn(0,"MANUAL_REG_SEQ", this.parent.manualRegSeq);
        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }

        //저장
        this.fn_save = function(type) {

        	var sSvcId = "saveManual";
            var sUrl = "/co/save_manual.do";
        	var inDs = "ds_save=ds_manual:U ds_files=ds_file_list:U"
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

        		// include ds get
        		this.fileDs = this.div_top_info.form.Div00.form.ds_files;
        		//파일 트랜스퍼 연결
        		this.fileUpTransfer = this.div_top_info.form.Div00.form.FileUpTransfer;
        		//부모창 최상위값 연결
        		this.div_top_info.form.Div00.form.parentForm = this;

        		//docRegId
        		this.docRegId = this.ds_manual.getColumn(0, "DOC_REG_ID");


        		//파일 업로드 모듈에 등록
        		if( this.ds_file_list.rowcount > 0 ) {
        			this.fileDs.copyData(this.ds_file_list);
        		}

        		console.log(this.fileUpTransfer);

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
        this.fn_fileUploadCallback = function(result) {

        	if( result.code == "success" ) {

        		if( result.docRegId != 0 && result.docRegId != undefined) {
        			this.docRegId = result.docRegId;
        		}

        		//문서번호 설정.
        		if( this.fileDs.rowcount > 0 ) {
        			this.ds_manual.setColumn(0, "DOC_REG_ID", this.docRegId);
        			this.ds_manual.set_updatecontrol(false);
        			this.ds_manual.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		} else {
        			if( result.docRegId == undefined ) {
        				this.ds_manual.setColumn(0, "DOC_REG_ID", "");
        			}
        		}
        	}
        	// 수정함수 호출
        	this.fn_save("U");
        }

        //삭제한 로우를 강제로 받아온다.
        this.fn_fileDeleteCallback = function(dataset) {
        	var deletedRowsCount = dataset.getDeletedRowCount();
        	var rowSet = dataset.getDeletedRowset();

        	for(var i = 0; i < deletedRowsCount; i++) {
        		this.ds_file_list._deletedRecords[i] = rowSet[i];
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
        		if( this.fn_dataCheck(this.fileDs) == false ) {
        			alert("수정된 내용이 없습니다.");
        			return false;
        		}
        	}

        	// 필수값 체크
        	var validation = this.fn_validationForm(this.div_top_info, this.valiFormIds, this.ds_manual);

        	if( validation ) {
        		if( this.confirm("저장 하시겠습니까?") ){
        			if( this.fileDs.rowcount > 0 ) {
        				if( this.fn_dataCheck(this.fileDs) ) {
        					this.fileUpTransfer.setPostData("docRegId", this.ds_manual.getColumn(0, "DOC_REG_ID"));
        					this.fileUpTransfer.upload('/co/file_upload.do');
        				} else {
        					this.fn_save("U");
        				}
        				//alert("this.fileDs.rowcount==>" + this.fileDs.rowcount + "//" + this.ds_manual.getColumn(0, "DOC_REG_ID"));

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





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.div_top_info.form.Static02.addEventHandler("onclick",this.Div_top_info_Static02_onclick,this);
            this.div_top_info.form.Button01_00.addEventHandler("onclick",this.Div_top_info_Button01_00_onclick,this);
            this.div_top_info.form.Button01.addEventHandler("onclick",this.div_top_info_Button01_onclick,this);
            this.div_top_info.form.Button01_00_00.addEventHandler("onclick",this.div_top_info_Button01_00_00_onclick,this);
            this.PopupDiv3.addEventHandler("oncloseup",this.PopupDiv3_oncloseup,this);
            this.PopupDiv3.form.btn_confirm.addEventHandler("onclick",this.PopupDiv3_btn_confirm_onclick,this);
            this.PopupDiv3.form.btn_cancel.addEventHandler("onclick",this.PopupDiv3_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CN_32.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
