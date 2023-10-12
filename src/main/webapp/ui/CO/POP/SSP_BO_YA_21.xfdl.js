(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_21");
            this.set_titletext("대용량 엑셀 다운로드 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1230,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_PROC_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOWN_PROC_STATS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"CRT_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_RSLT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"HOST_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"INST_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대용량 엑셀 다운로드 정보");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_excelDownInfo","20","108",null,"552","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"424\"/><Column size=\"122\"/><Column size=\"161\"/><Column size=\"159\"/><Column size=\"162\"/><Column size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"데이터 건수\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"요청일시\"/><Cell col=\"5\" text=\"생성일시\"/><Cell col=\"6\" text=\"생성인\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:FILE_NM\"/><Cell col=\"2\" text=\"bind:DATA_INQ_CNT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DOWN_PROC_STATS_NM\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:REQ_DTM\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy.MM.dd hh:mm:ss\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:CRT_DTM\" calendardisplaynulltype=\"none\" displaytype=\"normal\" calendardateformat=\"yyyy.MM.dd hh:mm:ss\"/><Cell col=\"6\" text=\"bind:OPRTR_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20",null,"300","28",null,"grd_excelDownInfo:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"Static60_00:20","60","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"grd_excelDownInfo:10","60","30","47.56%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1230,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_21.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_21
        /* 작 성 일 자 : 2022/03/23
        /* 작  성   자 : 이성민
        /* 설       명 : 대용량 엑셀다운로드 정보
        /***********************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.totalCount = 0;	//전체 카운트

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btnSearch_onclick",
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
        //조회
        this.fn_search = function(page) {
        	 var sSvcId = "excelDownInfoList";
             var sUrl = "/co/select-large-excel-down-info-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_excel=ds_output";
             var arg;
             var callback = "fn_callBack";

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "excelDownInfoList"){
        		var sTotText = "(<b v='true'>총 "+ this.totalCount +"건 </b>)";
        		this.totalPageCount.set_text(sTotText);
        	}
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        //닫기
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.grd_excelDownInfo_oncellclick = function(obj,e)
        {
        	var statsCD = this.ds_excel.getColumn(obj.currentrow, "DOWN_PROC_STATS_CD");
        	var fileNm = this.ds_excel.getColumn(obj.currentrow, "FILE_NM");

        	switch(statsCD) {
        		case "3":
        			//그리드 클릭
        			if(this.confirm(fileNm + " 파일을 저장 하시겠습니까?")) {

        				this.FileDownTransfer.clearPostDataList();

        				this.FileDownTransfer.set_downloadfilename(this.ds_excel.getColumn(e.row, "FILE_NM"));	//runtime 전용 프로퍼티
        				this.FileDownTransfer.setPostData("filePath",this.ds_excel.getColumn(e.row, "FILE_PATH"));
        				this.FileDownTransfer.setPostData("fileName",this.ds_excel.getColumn(e.row, "FILE_NM"));
        				this.FileDownTransfer.download('/co/file-large-download.do');
        			}
        			break;
        		case "2":
        			this.alert(fileNm + " 파일은 진행 중입니다.");
        			break;
        		case "1":
        			this.alert(fileNm + " 파일은 대기 중입니다.");
        			break;
        		default:
        			break;
        	}
        };

        this.FileDownTransfer_onsuccess = function(obj,e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_excelDownInfo.addEventHandler("oncellclick",this.grd_excelDownInfo_oncellclick,this);
            this.grd_excelDownInfo.addEventHandler("onmousemove",this.grd_excelDownInfo_onmouseup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
        };
        this.loadIncludeScript("SSP_BO_YA_21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
