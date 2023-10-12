(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ssp_bo_ma_03");
            this.set_titletext("고객등급관리 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1330,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">전체</Col></Row><Row><Col id=\"COL_VALUE\">Y</Col><Col id=\"COL_NM\">사용</Col></Row><Row><Col id=\"COL_VALUE\">N</Col><Col id=\"COL_NM\">만료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGrd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"40\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_NM\" type=\"STRING\" size=\"40\"/><Column id=\"APLY_DCRT_FR\" type=\"INT\" size=\"2\"/><Column id=\"APLY_DCRT_END\" type=\"INT\" size=\"2\"/><Column id=\"APLY_DCRT\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_STR_DTM_STR\" type=\"STRING\" size=\"8\"/><Column id=\"VLD_PERD_STR_DTM_END\" type=\"STRING\" size=\"6\"/><Column id=\"VLD_PERD_END_DTM_STR\" type=\"STRING\" size=\"8\"/><Column id=\"VLD_PERD_END_DTM_END\" type=\"STRING\" size=\"6\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATE\" size=\"10\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATE\" size=\"10\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DTM1\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DTM2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CUST_GRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">10</Col><Col id=\"STATE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchChk", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_custGrdOut", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_ID\" type=\"STRING\" size=\"40\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_GRD_NM\" type=\"STRING\" size=\"40\"/><Column id=\"APLY_DCRT_FR\" type=\"INT\" size=\"2\"/><Column id=\"APLY_DCRT_END\" type=\"INT\" size=\"2\"/><Column id=\"VLD_PERD_STR_DTM_STR\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_STR_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_END_DTM_STR\" type=\"STRING\" size=\"256\"/><Column id=\"VLD_PERD_END_DTM_END\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATE\" size=\"10\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATE\" size=\"10\"/><Column id=\"MASTER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DTM1\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_DTM2\" type=\"STRING\" size=\"256\"/><Column id=\"APLY_DCRT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"msg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"97","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","20","20",null,"32","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static26","20","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"61","60","28","20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_state","Static26:10","24","265","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_useYn");
            obj.set_datacolumn("COL_NM");
            obj.set_codecolumn("COL_VALUE");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","450","20","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회기준일");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDt","Static04_00:10","24","120","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_headformat("yyyy.MM.DD");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"61","60","28","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_reset");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_hist",null,"116","80","28","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이력조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"116","83","28","btn_hist:4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","btn_save:10",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","0","0",null,null,"0","20",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_custGrd");
            obj.set_visible("true");
            obj.set_autoupdatetype("dateselect");
            obj.set_nodatatext("조회 결과가 없습니다.");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"78\"/><Column size=\"94\"/><Column size=\"561\"/><Column size=\"64\"/><Column size=\"22\"/><Column size=\"112\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"등급 ID\"/><Cell col=\"3\" text=\"등급명\" cssclass=\"grd_WF_bg_image\"/><Cell col=\"4\" colspan=\"2\" text=\"적용 할인율\"/><Cell col=\"6\" text=\"유효기간 시작일시\"/><Cell col=\"7\" text=\"유효기간 종료일시\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:STATE\" edittype=\"none\" combodataset=\"ds_useYn\" combodatacol=\"COL_NM\" combocodecol=\"COL_VALUE\" displaytype=\"combotext\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"bind:BZPLC_GRD_ID\" displaytype=\"text\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:BZPLC_GRD_NM\" displaytype=\"expr:String(TYPE).valueOf()!=&quot;0&quot; &amp;&amp; String(MASTER).valueOf()!=&quot;0&quot;  ?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:String(TYPE).valueOf()!=&quot;0&quot; &amp;&amp;  String(MASTER).valueOf()!=&quot;0&quot; ?&apos;text&apos;:&apos;none&apos;\" textAlign=\"left\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:APLY_DCRT\" maskedittype=\"number\" suppressalign=\"last\" maskeditformat=\"#0\" textareamaxlength=\"-1\" editmaxlength=\"5\" border=\"1px solid #d4d4d4, 1px none #d4d4d4, 1px solid #d4d4d4, 1px solid #d4d4d4\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\" textAlign=\"right\" edittype=\"expr:String(MASTER).valueOf()!=&quot;0&quot; ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"5\" text=\"%\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"calendarcontrol\" edittype=\"expr:String(MASTER).valueOf()!=&quot;0&quot;?&apos;date&apos;:&apos;none&apos;\" text=\"bind:VLD_PERD_STR_DTM_STR\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendardisplaynulltype=\"none\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/><Cell col=\"7\" displaytype=\"calendarcontrol\" edittype=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&apos;none&apos;:&apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:VLD_PERD_END_DTM_STR\" calendardisplaynulltype=\"none\" cssclass=\"expr:String(BZPLC_GRD_ID).valueOf()==&quot;G99999&quot;?&quot;error&quot;:&quot;&quot;\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_totCount","20",null,"200","25",null,"Div01:4",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update",null,"116","120","28","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기존코드 추가생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert",null,"116","100","28","btn_update:4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규코드생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1330,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.cbo_state","value","ds_search","STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.cal_fromDt","value","ds_search","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_03.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_03.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_03.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;

        this.grdRow = 0;
        this.state = '';
        this.flag = true;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {

        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	//this.Div00.set_height(this.Div00.uMinSize);
        	this.resetScroll();

        	this.fn_setSearchDate();

        	// 화면 open시 자동조회
        	this.fn_search();

        	this.copyPaste.addGrid(this.Div01.form.grd_mainList);
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "selectCustGrdList";
        		var sUrl = "/bo/cust/grade/select-cust-grade.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_custGrd=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_received");
        	};

        	//저장
        	this.fn_saveData = function(){
        		var sSvcId = "saveCustGrdList";
        		var sUrl = "/bo/cust/grade/save-cust-grd.do";
        		var inDs = "ds_save=ds_custGrdOut";
        		var outDs = "ds_result=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        	// 체크 시 해당 등급 사용중인지 조회
        	this.fn_searchGrdChk = function()	{
        		var sSvcId = "selectCustGrdChk";
        		var sUrl = "/bo/cust/grade/select-cust-grd-chk.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_searchChk=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "sampleSelect"){
        			this.ds_sampleList.addColumn("_CHK","String");
        			//paging 처리
        			this.div_paging.form.cfn_createPage(this.div_paging,1912,this.cbo_page.value,"fn_pageCallback");
        		}else if(svcID == "selectCustGrdList"){
        			// 조회 트랜잭션 콜백
        		}else if(svcID == "saveCustGrdList"){
        			// 저장 트랜잭션 콜백
        			if(errorCode == -1 || errorCode == -100){
        				//alert(this.fn_getMessageOnServer(errorMsg));
        			}else{
        				//alert("저장되었습니다."); 22.04.07 메세지 처리 제거
        				if(this.ds_result.getCount() > 0){
        					for(var i=0; i<this.ds_result.rowcount; i++){
        						if(this.ds_result.getColumn(i, "msg") != null && this.ds_result.getColumn(i, "msg") != 'undefined' && this.ds_result.getColumn(i, "msg") != ''){
        							alert(this.fn_getMessage("ERRC000082",this.ds_result.getColumn(i, "msg"))); // msg 등급을 저장하였습니다.
        						}
        					}
        				}

        				this.fn_search();
        			}
        		}else if(svcID == "selectCustGrdChk"){
        			// 해당 등급 사용중인지 조회
        			var chk = this.ds_searchChk.getColumn(0, "CNT");
        			if(chk > 0){
        				alert(this.fn_getMessage("ERRC000027")); // 등급사업장이 이미 존재합니다. 사업장등급 변경 후, 미사용처리 하시길 바랍니다.
        				if(this.state == "Y") {
        					this.state = "N";
        				}else if(this.state == "N"){
        					this.state = "Y";
        				}

        				this.flag = false;

        				this.ds_custGrd.setColumn(this.grdRow , "CHK", 0);
        				this.ds_custGrd.setColumn(this.grdRow , "USE_YN", this.state);
        			}
        		}
        	}

        	//조회 트랜잭션 콜백함수
        	this.fn_received = function(svcID, errorCode, errorMsg)	{
        		var sTotText = "(총 "+ this.gfn_appendComma(this.totalCount)+"건)";
        		this.sta_totCount.set_text(sTotText);
        	}

        	this.fn_sortCallback = function(sGridId){
        		var oGrid=null;
        		if(sGridId == "grd_mainList"){
        			oSortInfo = this.Div01.form.grd_mainList.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",oSortInfo.status);
        			this.fn_search();
        		}
        	};

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        	//화면 설정 함수
        	this.cfn_formInit = function(){
        		//search div 초기 설정
        		this.Div00.uMinSize = 94;
        		this.Div00.uMaxSize = 157;

        		//grid 초기 설정
        		this.Div01.form.grd_mainList.uSortFlag = "false";
        		this.Div01.form.grd_mainList.uServerSortFlag = "true";
        		this.Div01.form.grd_mainList.uSortCallback = "fn_sortCallback";
        		this.Div01.form.grd_mainList.uCellSizeType = "true";
        	}
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_chkValidTime = function(time){
        		var chkHh = time.substr(0,2); // 시
        		var chkMm = time.substr(2,2); // 분
        		var chkSs = time.substr(4,2); // 초

        		if(time.length != 6) return true;
        		if(chkHh >= 24) return true;
        		if(chkMm >= 60) return true;
        		if(chkSs >= 60) return true;

        		return false;
        	}

        	this.fn_setSearchDate = function() {
        		var objDate = new Date();
        		this.Div00.form.cal_fromDt.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2, '0') + (objDate.getDate() + "").padLeft(2, '0'));
        	};
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		this.fn_search();
        	};

        	this.Button00_onclick = function(obj,e)
        	{
        		trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        		trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        		trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        		trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        		trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        	};


        	this.ds_custGrd_oncolumnchanged = function(obj,e)
        	{
        		// 그리드 할인율 칼럼 수정 시 이벤트
        		if(e.columnid == "APLY_DCRT_FR"){
        			/*
        			22.04.18 앞자리수는 100% 초과가능
        			var inputData = this.ds_custGrd.getColumn(e.row,"APLY_DCRT_FR");
        			if(inputData>=100){
        				this.ds_custGrd.setColumn(e.row,"APLY_DCRT_FR",inputData%100);
        			}else if(inputData<1){
        				this.ds_custGrd.setColumn(e.row,"APLY_DCRT_FR",0);
        			}
        			*/
        		}else if(e.columnid == "APLY_DCRT_END"){
        			var inputData = this.ds_custGrd.getColumn(e.row,"APLY_DCRT_END");
        			if(inputData>=100){
        				this.ds_custGrd.setColumn(e.row,"APLY_DCRT_END",inputData%100);
        			}else if(inputData<1){
        				this.ds_custGrd.setColumn(e.row,"APLY_DCRT_END",0);
        			}
        		}else if(e.columnid == "VLD_PERD_STR_DTM_END"){
        			var times = this.ds_custGrd.getColumn(e.row,"VLD_PERD_STR_DTM_END");
        			if(this.fn_chkValidTime(times)){
        				alert(this.fn_getMessage("ERRC000054")); // 시분초 형식이 맞지 않습니다. 다시 입력해주세요.
        				this.ds_custGrd.setColumn(e.row, "VLD_PERD_STR_DTM_END", null);
        			}
        		}
        	};

        	this.btn_rowAdd = function(obj,e)
        	{
        		this.ds_custGrd.insertRow(0);
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "USE_YN", "Y");
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "CUST_GRD_ID", "");
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "REGPSN_ID", "");
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "STATE", "0");
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "CHK", "1");
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_STR_DTM_STR", this.gfn_getDate());
        		this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_END_DTM_STR", "99991231");
        		//this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_END_DTM_END", "235959");
        	};


        	this.fn_btnSave = function(obj,e)
        	{
        		var chkStr = this.ds_custGrd.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}

        		var newDataYn = false;
        		var updDataYn = false;
        		this.ds_custGrdOut.clearData();
        		for(var i=0; i<this.ds_custGrd.rowcount; i++){
        			if(this.ds_custGrd.getColumn(i, "CHK") == 1){
        				if(this.ds_custGrd.getColumn(i, "BZPLC_GRD_NM") == "" || this.ds_custGrd.getColumn(i, "BZPLC_GRD_NM") ==  null){
        					alert(this.fn_getMessage("ERRC000004", "등급명")); // 등급명은 필수 입력값 입니다.
        					return;
        				}

        // 				if(this.ds_custGrd.getColumn(i, "APLY_DCRT_FR") ==  "" || this.ds_custGrd.getColumn(i, "APLY_DCRT_FR") == undefined) {
        // 					this.ds_custGrd.setColumn(i, "APLY_DCRT_FR", 0);
        // 				}
        // 				if(this.ds_custGrd.getColumn(i, "APLY_DCRT_END") == "" || this.ds_custGrd.getColumn(i, "APLY_DCRT_END") == undefined) {
        // 					this.ds_custGrd.setColumn(i, "APLY_DCRT_END", 0);
        // 				}
        				if(this.ds_custGrd.getColumn(i, "APLY_DCRT") == "" || this.ds_custGrd.getColumn(i, "APLY_DCRT") == undefined) {
        					this.ds_custGrd.setColumn(i, "APLY_DCRT", 0);
        				}

        				if(this.ds_custGrd.getColumn(i, "STATE") == "N"){
        					alert(this.fn_getMessage("ERRC000102")); // 만료된 등급은 수정 할 수 없습니다.
        					return;
        				}

        				if(this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID") == "" || this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID") == undefined || this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID") == null){
        					newDataYn = true;
        				}else{
        					updDataYn = true
        				}
        				var row = this.ds_custGrdOut.addRow();
        				this.ds_custGrdOut.copyRow(row, this.ds_custGrd, i);

        				// 유효기간 시작일시가 당일인경우 null로 보냄
        				if(this.ds_custGrd.getColumn(i, "VLD_PERD_STR_DTM_STR") == this.gfn_getDate()){
        					this.ds_custGrdOut.setColumn(row, "VLD_PERD_STR_DTM_STR", null);
        				}
        			}
        		}

        		if(this.ds_custGrdOut.getRowCount() < 1){
        			alert(this.fn_getMessage("ERRC000083")); // 저장가능한 데이터가 없습니다.
        			return;
        		}

        		if(newDataYn == true && updDataYn == true){
        			if(!this.confirm(this.fn_getMessage("ERRC000103"))){
        				//신규코드를 생성하고 기존코드의 할인정보도 추가 생성합니다. 저장하시겠습니까?
        				return;
        			}
        		}else if(newDataYn == true){
        			if(!this.confirm(this.fn_getMessage("ERRC000104"))){
        				//신규코드를 생성합니다. 저장하시겠습니까?
        				return;
        			}
        		}else{
        			if(!this.confirm(this.fn_getMessage("ERRC000105"))){
        				//기존코드의 할인정보를 추가 생성합니다. 저장하시겠습니까?
        				return;
        			}
        		}

        		this.fn_saveData();
        	};

        	// 달력 box 클릭시
        	this.Div01_grd_mainList_oncellclick = function(obj,e)
        	{
        		if ((e.col == 8 || e.col == 10) && obj.getCurEditType() == "date") {
        			this.Div01.form.grd_mainList.setCellPos(e.cell);
        			this.Div01.form.grd_mainList.showEditor(true);
        			this.Div01.form.grd_mainList.dropdownCalendar();
        		}
        	};

        	this.btn_update_onclick = function(obj,e)
        	{
        		var chkStr = this.ds_custGrd.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}else if(chkStr > 1){
        			alert(this.fn_getMessage("ERRC000094")); // 하나의 항목만 선택해주세요.
        			return;
        		}

        		for(var i=0; i<this.ds_custGrd.rowcount; i++){
        			if(this.ds_custGrd.getColumn(i, "CHK") == 1){
        				if(this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID") == "" || this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID") == null){
        					alert(this.fn_getMessage("ERRC000025")); // 등급ID가 존재하는 경우만 기간변경이 가능합니다.
        					return;
        				}else if(this.ds_custGrd.getColumn(i, "STATE") == "N"){
        					alert(this.fn_getMessage("ERRC000102")); // 만료된 등급은 수정 할 수 없습니다.
        					return;
        				}

        				this.ds_custGrd.insertRow(i+1);
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "BZPLC_GRD_ID", this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID"));
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "BZPLC_GRD_NM", this.ds_custGrd.getColumn(i, "BZPLC_GRD_NM"));
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "USE_YN", "Y");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "CUST_GRD_ID", "");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "REGPSN_ID", "");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "TYPE", "0");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "STATE", "0");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "CHK", "1");
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_STR_DTM_STR", this.gfn_getDate());
        				this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_END_DTM_STR", "99991231");
        				//this.ds_custGrd.setColumn(this.ds_custGrd.rowposition, "VLD_PERD_END_DTM_END", "235959");

        				return;
        			}
        		}
        	};

        	// 이력조회 클릭
        	this.btn_hist_onclick = function(obj,e)
        	{
        		var chkStr = this.ds_custGrd.getCaseCount("CHK>0");
        		if(chkStr < 1){
        			alert(this.fn_getMessage("ERRC000050", "항목")); // 선택된 항목이 없습니다.
        			return;
        		}else if(chkStr > 1){
        			alert(this.fn_getMessage("ERRC000094")); // 하나의 항목만 선택해주세요.
        			return;
        		}

        		for(var i=0; i<this.ds_custGrd.rowcount; i++){
        			if(this.ds_custGrd.getColumn(i, "CHK") == 1){
        				var objParam = {
        					bzplcGrdId:this.ds_custGrd.getColumn(i, "BZPLC_GRD_ID")
        				};
        				this.gfn_openPopup("", "CC::SSP_BO_MA_04.xfdl", objParam, "", {title:"고객등급 이력 조회", titlebar:"true"});
        			}
        		}
        	};

        	this.btn_reset_onclick = function(obj,e)
        	{
        		this.ds_search.setColumn(0, "STATE", "Y");
        		this.fn_setSearchDate();
        	};

        	this.ssp_bo_ma_03_onkeyup = function(obj,e)
        	{
        		if(e.keycode == 13 && e.ctrlkey){
        			this.btn_search_onclick();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.ssp_bo_ma_03_onkeyup,this);
            this.Div00.form.Static27.addEventHandler("onclick",this.Div00_Static27_onclick,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.btn_hist.addEventHandler("onclick",this.btn_hist_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_btnSave,this);
            this.Div01.form.grd_mainList.addEventHandler("onselectchanged",this.fn_editChg,this);
            this.Div01.form.grd_mainList.addEventHandler("oncellclick",this.Div01_grd_mainList_oncellclick,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.btn_rowAdd,this);
            this.ds_custGrd.addEventHandler("oncolumnchanged",this.ds_custGrd_oncolumnchanged,this);
            this.ds_custGrdOut.addEventHandler("oncolumnchanged",this.ds_custGrd_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_MA_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
