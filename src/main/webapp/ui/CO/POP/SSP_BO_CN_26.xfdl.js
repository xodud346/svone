(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CN_26");
            this.set_titletext("등록자 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_memOprInfo","20","98",null,"482","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"298\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:OPRTR_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"60","60","26","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("sta_noData","20","162","526","398",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt","404","60",null,"26","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00_00","340","60",null,"25","edt_maxCnt:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","20","60","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록자 조회");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_CN_26.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_CN_26
        /* 작 성 일 자 : 2022/02/15
        /* 작  성   자 : 이성민
        /* 설       명 : 등록자 조회 팝업
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

        	this.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅

        	//전달받은 파라메터
        	this.fn_paramSetting(this.parent);

        	//초기화
        	this.fn_initGrid();

        	//조회
        	//this.fn_search(0);

        	// 단축키
        	this.gfn_initFormHotKey({
        		ENTER : "btn_search_onclick",
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
        	 var sSvcId = "selectMbrOprtrInfoList";
             var sUrl = "/co/popup/select-mbr-oprtr-info-list.do";
        	 var inDs = "ds_search=ds_search"
             var outDs = "ds_list=ds_output1";
             var arg;
             var callback = "fn_callBack";

        	 this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //콜백이벤트
        this.fn_callBack = function(svcID, errorCode, errorMsg){
        	if(svcID == "selectMbrOprtrInfoList"){
        		//trace(this.ds_sampleList.saveXML());

        		// 조회 카운트가 없으면 데이터셋이 날라감으로 강제 설정
        		if( this.ds_list.rowcount == 0 ) {
        			this.ds_list.copyData(this.ds_list_copy);
        			this.sta_noData.bringToFront();
        		} else {
        			this.sta_noData.sendToBack();
        		}


        		this.fn_initGrid();
        		var sTotText = "(<b v='true'>총 "+ this.totalCount +"건 </b>)";
        		this.sta_totcnt.set_text(sTotText);
        	}
        }


        //정렬 콜백
        this.fn_sortCallback = function(sGridId){
        	var oGrid=null;
        	if(sGridId == "grd_memOprInfo"){

        		this.fn_search();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){

        	//grid 초기 설정
        	this.grd_memOprInfo.uCellSizeType = "true";

        }

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        //변수 설정
        this.fn_paramSetting = function (param){
        	if(this.gfn_isNull(param.coCd) || param.coCd ==  undefined){
        		alert("팝업창의 회사코드가 비어있습니다. 확인해주세요.");
        		return;
        	}

        	this.ds_search.setColumn(0, "CO_CD", param.coCd);
        	this.ds_search.setColumn(0, "EMP_NO", param.empNp);
        	this.ds_search.setColumn(0, "OPRTR_NM", param.oprtrNm);
        }

        // 부모에 데이터 전달
        this.fn_resData = function() {

        	var resData = {};
        	var resString = "";

        	resData.OPRTR_ID = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_ID");
        	resData.OPRTR_NM = this.ds_list.getColumn(this.ds_list.rowposition, "OPRTR_NM");
        	resData.EMP_NO = this.ds_list.getColumn(this.ds_list.rowposition, "EMP_NO");

        	//json string 변경
        	resString = JSON.stringify(resData);

        	//return
        	this.close(resString);
        }

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "EMP_NO",  this.ds_search.getColumn(0, "EMP_NO"));
        	this.ds_list.setColumn(0, "OPRTR_NM",  this.ds_search.getColumn(0, "OPRTR_NM"));
        	this.ds_list.set_rowposition(-1);
        	this.grd_memOprInfo.setFixedRow(0);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "EMP_NO", this.ds_list.getColumn(0, "EMP_NO"));
        	this.ds_search.setColumn(0, "OPRTR_NM", this.ds_list.getColumn(0, "OPRTR_NM"));
        };


        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //조회버튼
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        // 조회데이터셋 리셋
        this.div_search_btnClear_onclick = function(obj,e)
        {
        	this.ds_search.reset();
        };

        //그리드 더블클릭 이벤트
        this.grd_memOprInfo_oncelldblclick = function(obj,e)
        {
        	if(e.row != 0) {
        		this.fn_resData();
        	}
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_memOprInfo_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        	}
        };

        //검색조건 ROW에서 enter 클릭 시
        this.grd_memOprInfo_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.grd_memOprInfo.addEventHandler("oncelldblclick",this.grd_memOprInfo_oncelldblclick,this);
            this.grd_memOprInfo.addEventHandler("oncellclick",this.grd_memOprInfo_oncellclick,this);
            this.grd_memOprInfo.addEventHandler("onenterdown",this.grd_memOprInfo_onenterdown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.sta_noData.addEventHandler("onclick",this.sta_noData_onclick,this);
            this.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_CN_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
