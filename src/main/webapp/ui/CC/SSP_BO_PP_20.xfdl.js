(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_20");
            this.set_titletext("연락처 등록번호 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,599);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"INT\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"INT\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\">0</Col><Col id=\"ROW_COUNT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_CHN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_DLV\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_AS\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DSP_ONLY_EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NO4CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_DISP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_HELPER_CADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CADDR_CHN_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_caddrSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_caddrChnSprCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCodeSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"32\"/><Column id=\"langCd\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYn", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_useYnIf", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD_NM\">전체</Col></Row><Row><Col id=\"COM_DTL_CD_NM\">사용</Col><Col id=\"COM_DTL_CD\">Y</Col></Row><Row><Col id=\"COM_DTL_CD\">N</Col><Col id=\"COM_DTL_CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_positionstep("0");
            obj.set_enableevent("true");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"41","60","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("연락처 등록번호 조회");
            obj.set_cssclass("sta_WF_title04");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","0","40","180","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("총 0건");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","77",null,"442","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"68\"/><Column size=\"46\"/><Column size=\"96\"/><Column size=\"71\"/><Column size=\"51\"/><Column size=\"89\"/><Column size=\"125\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"text\"/><Cell col=\"1\" text=\"text\"/><Cell col=\"2\" text=\"4merge\"/><Cell col=\"3\" text=\"연락처 등록번호\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"Front 표시명\"/><Cell col=\"6\" text=\"연락처\"/><Cell col=\"7\" text=\"사용여부\"/><Cell col=\"8\" text=\"채널구분\"/><Cell col=\"9\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:BZPLC_ID\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:OPR_UNIT_ID\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:NO4CHK\" suppress=\"3\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:CUST_HELPER_CADDR_REG_NO\" textAlign=\"center\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" suppress=\"4\"/><Cell col=\"4\" text=\"bind:CADDR_SPR_CD\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" cssclass=\"grd_WF_left\" textAlign=\"center\" combodataset=\"ds_caddrSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" suppress=\"5\"/><Cell col=\"5\" text=\"bind:CADDR_DISP_NM\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"left\" suppress=\"6\"/><Cell col=\"6\" text=\"bind:CUST_HELPER_CADDR\" displaytype=\"expr:currow == 0 ? &quot;editcontrol&quot; : &quot;normal&quot;\" edittype=\"expr:currow == 0 ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"left\" suppress=\"7\"/><Cell col=\"7\" text=\"bind:USE_YN\" displaytype=\"expr:currow == 0 ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:currow == 0 ? &quot;combo&quot; : &quot;none&quot;\" combodataset=\"ds_useYnIf\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\" suppress=\"8\"/><Cell col=\"8\" text=\"bind:CADDR_CHN_SPR_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"ds_caddrChnSprCd\" combodatacol=\"COM_DTL_CD_NM\" combocodecol=\"COM_DTL_CD\"/><Cell col=\"9\" text=\"bind:EMAIL_ADDR\" textAlign=\"left\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_noData","0","155",null,"354","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("조회된 결과가 없습니다.");
            obj.set_textAlign("center");
            obj.set_visible("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_select","400","grd_list:10","60","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_select");
            obj.set_positionstep("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_maxCnt",null,"41","66","26","btn_search:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_text("1,000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00",null,"40","60","25","edt_maxCnt:4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("최대조회수");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,599,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.edt_maxCnt","value","ds_search","ROW_COUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PP_20.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PP_20.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_PP_20
        /* 작 성 일 자 : 2022/04/25
        /* 작  성   자 : 문주환
        /* 설       명 : 연락처 등록번호 단일조회 팝업
        /***********************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        this.coCd = "";					// 회사코드
        this.custHelperCaddrRegNo = "";	// 연락처 등록번호
        this.caddrSprCd = "";			//  구분
        this.caddrDispNm = "";			// Front표시명
        this.custHelperCaddr = "";		// 연락처
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e){
        	this.gfn_formOnLoad(this);
        	this.fn_commonCodeSearch(); //공통코드 조회
        	this.ds_list_copy.copyData(this.ds_list);
        	this.Div00.form.edt_maxCnt.set_value("1,000"); //초기 1000으로 셋팅
        	this.fn_paramSetting(this.parent);

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        this.fn_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드 조회
        this.fn_commonCodeSearch = function(){
        	this.ds_comCodeSearch.setColumn(0, "codeList", "CADDR_SPR_CD,CADDR_CHN_SPR_CD,USE_YN");
        	this.ds_comCodeSearch.setColumn(0, "langCd", "KO");
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_comCodeSearch";
        	var outDs = "ds_caddrSprCd=ds_output1 ds_caddrChnSprCd=ds_output2 ds_useYn=ds_output3";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        }

        // 팝업 조회
        this.fn_search = function (){
        	var sSvcId = "search";
        	var sUrl = "/bo/cust/cmn/popup/select-caddr-reg-num.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_list=ds_output1";
        	var arg = "";
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(svcID == "commonCodeSearch"){
        		this.ds_caddrSprCd.insertRow(0);
        		this.ds_caddrSprCd.setColumn(0,"COM_DTL_CD_NM","전체");
        	}else if(svcID == "search"){
        		if(this.ds_list.getCount() < 1){
        			this.ds_list.copyData(this.ds_list_copy);
        			this.Div00.form.sta_noData.bringToFront();
        		}else{
        			this.Div00.form.sta_noData.sendToBack();
        		}

        		this.totalCount = this.ds_list.getCount();

        		this.fn_initGrid();
        		this.Div00.form.sta_totcnt.set_text("총 "+ this.gfn_appendComma(this.totalCount, 0) +"건");
        		this.Div00.form.grd_list.setFixedRow(0);

        		//그리드에 포커스
        		this.Div00.form.grd_list.setFocus();
        	}
        };

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_paramSetting = function (param){
        	this.coCd 				  = param.coCd;
        	this.custHelperCaddrRegNo = param.custHelperCaddrRegNo;
        	this.caddrSprCd 	 	  = param.caddrSprCd;
        	this.caddrDispNm		  = param.caddrDispNm;
        	this.custHelperCaddr	  = param.custHelperCaddr;

        	this.ds_search.setColumn(0, "CO_CD"						, this.coCd				);
        	this.ds_search.setColumn(0, "CUST_HELPER_CADDR_REG_NO"	, this.custHelperCaddrRegNo	);
        	this.ds_search.setColumn(0, "CADDR_SPR_CD"				, this.caddrSprCd			);
        	this.ds_search.setColumn(0, "CADDR_DISP_NM"				, this.caddrDispNm			);
        	this.ds_search.setColumn(0, "CUST_HELPER_CADDR"			, this.custHelperCaddr		);

        	if(!this.gfn_isNull(this.custHelperCaddrRegNo) || !this.gfn_isNull(this.caddrSprCd)
        			 || !this.gfn_isNull(this.caddrDispNm) || !this.gfn_isNull(this.custHelperCaddr)){
        		this.fn_search();
        	}else{
        		this.fn_initGrid();

        		//팝업창으로 넘어온 값이 ''면 sta_noData 안보이도록 처리
        		this.Div00.form.sta_noData.sendToBack();
        	}
        };

        //그리드 검색조건 셋팅
        this.fn_initGrid = function(){
        	this.ds_list.insertRow(0);
        	this.ds_list.setColumn(0, "CUST_HELPER_CADDR_REG_NO",  this.ds_search.getColumn(0, "CUST_HELPER_CADDR_REG_NO"));
        	this.ds_list.setColumn(0, "CADDR_SPR_CD"            ,  this.ds_search.getColumn(0, "CADDR_SPR_CD"            ));
        	this.ds_list.setColumn(0, "CADDR_DISP_NM"           ,  this.ds_search.getColumn(0, "CADDR_DISP_NM"           ));
        	this.ds_list.setColumn(0, "CUST_HELPER_CADDR"       ,  this.ds_search.getColumn(0, "CUST_HELPER_CADDR"       ));
        	this.ds_list.setColumn(0, "USE_YN"                  ,  this.ds_search.getColumn(0, "USE_YN"                  ));
        	this.ds_list.set_rowposition(-1);
        };

        this.fn_searchMapSetting = function(){
        	this.ds_search.setColumn(0, "CUST_HELPER_CADDR_REG_NO", this.ds_list.getColumn(0, "CUST_HELPER_CADDR_REG_NO"));
        	this.ds_search.setColumn(0, "CADDR_SPR_CD"            , this.ds_list.getColumn(0, "CADDR_SPR_CD"            ));
        	this.ds_search.setColumn(0, "CADDR_DISP_NM"           , this.ds_list.getColumn(0, "CADDR_DISP_NM"           ));
        	this.ds_search.setColumn(0, "CUST_HELPER_CADDR"       , this.ds_list.getColumn(0, "CUST_HELPER_CADDR"       ));
        	this.ds_search.setColumn(0, "USE_YN"                  , this.ds_list.getColumn(0, "USE_YN"                  ));
        };

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodENTER("btn_search_onclick");
        	this.fn_regMethodESC("fn_closeForm");
        	this.fn_regMethodShiftENTER("btn_select_onclick");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_search_onclick = function(obj,e){
        	var coCd = this.ds_search.getColumn(0, "CO_CD");
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //그리드 셀 더블클릭
        this.grd_list_oncelldblclick = function(obj,e){
        	if(e.row != 0){
        		var resData = {};
        		var resString = "";

        		resData.CO_CD 	 				= this.ds_list.getColumn(e.row, "CO_CD");   		             // 회사코드
        		resData.BZPLC_ID 	 			= this.ds_list.getColumn(e.row, "BZPLC_ID");   		             // 사업장ID
        		resData.OPR_UNIT_ID 	 		= this.ds_list.getColumn(e.row, "OPR_UNIT_ID");   	             // 운영단위ID
        		resData.CUST_HELPER_CADDR_REG_NO= this.ds_list.getColumn(e.row, "CUST_HELPER_CADDR_REG_NO");     // 연락처 등록번호
        		resData.CADDR_SPR_CD 			= this.ds_list.getColumn(e.row, "CADDR_SPR_CD");   	             // 구분(연락처구분코드)
        		resData.CADDR_DISP_NM 	 		= this.ds_list.getColumn(e.row, "CADDR_DISP_NM");                // Front표시명
        		resData.CUST_HELPER_CADDR 		= this.ds_list.getColumn(e.row, "CUST_HELPER_CADDR");            // 연락처
        		resData.USE_YN 	 				= this.ds_list.getColumn(e.row, "USE_YN");   		             // 사용여부
        		resData.CADDR_CHN_SPR_CD 	 	= this.ds_list.getColumn(e.row, "CADDR_CHN_SPR_CD");             // 채널구분(연락처채널구분코드)
        		resData.EMAIL_ADDR 	 			= this.ds_list.getColumn(e.row, "EMAIL_ADDR");                	 // 이메일

        		resData.EMAIL_ADDR_ALL          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ALL");   //전체 이메일
          	    resData.EMAIL_ADDR_DLV          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_DLV");   //배송 이메일
          	    resData.EMAIL_ADDR_ORD          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ORD");   //주문 이메일
          	    resData.EMAIL_ADDR_AS           = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_AS");    //반품/교환/취소/AS
          	    resData.EMAIL_ADDR_ETC          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ETC");   //회원/정산/기타
          	    resData.CADDR_SPR_NM            = this.ds_list.getColumn(this.ds_list.rowposition, "CADDR_SPR_NM");   	// 구분(연락처구분코드)
        		resData.DSP_ONLY_EMAIL_ADDR     = this.ds_list.getColumn(this.ds_list.rowposition, "DSP_ONLY_EMAIL_ADDR");   // 발신전용EMAIL
        		resString = JSON.stringify(resData);
        		this.close(resString);
        	}
        };

        //검색조건 ROW에서 enter 클릭 시
        this.grd_list_onenterdown = function(obj,e)
        {
        	this.fn_searchMapSetting();
        	this.fn_search();
        };

        //검색조건 ROW의 CELL 클릭 시 글자 맨 끝으로 커서 가도록
        this.grd_list_oncellclick = function(obj,e)
        {
        	if(e.row == 0){
        		var cellText = obj.getCellText(e.row, e.cell);
        		if(cellText != undefined){
        			obj.setEditSelect(cellText.length, cellText.length);
        		}
        		obj.dropdownCombo();
        	}
        };

        //선택 클릭 이벤트
        this.btn_select_onclick = function(obj,e)
        {
        	var resData = {};
        	var resString = "";

        	if(this.ds_list.rowposition < 1){
        		alert(this.fn_getMessage("ERRC000050", "데이터")); // 선택된 데이터가 없습니다.

        		this.Div00.form.grd_list.setFocus();
        		return;
        	}
        	resData.CO_CD 	 				= this.ds_list.getColumn(this.ds_list.rowposition, "CO_CD");   			// 회사코드
        	resData.BZPLC_ID 	 			= this.ds_list.getColumn(this.ds_list.rowposition, "BZPLC_ID");   		// 사업장ID
        	resData.OPR_UNIT_ID 	 		= this.ds_list.getColumn(this.ds_list.rowposition, "OPR_UNIT_ID");   	// 운영단위ID
        	resData.CUST_HELPER_CADDR_REG_NO= this.ds_list.getColumn(this.ds_list.rowposition, "CUST_HELPER_CADDR_REG_NO");   // 연락처 등록번호
        	resData.CADDR_SPR_CD 			= this.ds_list.getColumn(this.ds_list.rowposition, "CADDR_SPR_CD");   	// 구분(연락처구분코드)
        	resData.CADDR_DISP_NM 	 		= this.ds_list.getColumn(this.ds_list.rowposition, "CADDR_DISP_NM");    // Front표시명
        	resData.CUST_HELPER_CADDR 		= this.ds_list.getColumn(this.ds_list.rowposition, "CUST_HELPER_CADDR");// 연락처
        	resData.USE_YN 	 				= this.ds_list.getColumn(this.ds_list.rowposition, "USE_YN");   		// 사용여부
        	resData.CADDR_CHN_SPR_CD 	 	= this.ds_list.getColumn(this.ds_list.rowposition, "CADDR_CHN_SPR_CD"); // 채널구분(연락처채널구분코드)
        	resData.EMAIL_ADDR 	 			= this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR");   	// 이메일

        	resData.EMAIL_ADDR_ALL          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ALL");  //전체 이메일
        	resData.EMAIL_ADDR_DLV          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_DLV");  //배송 이메일
        	resData.EMAIL_ADDR_ORD          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ORD");  //주문 이메일
        	resData.EMAIL_ADDR_AS           = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_AS");   //반품/교환/취소/AS
        	resData.EMAIL_ADDR_ETC          = this.ds_list.getColumn(this.ds_list.rowposition, "EMAIL_ADDR_ETC");  //회원/정산/기타
        	resData.CADDR_SPR_NM            = this.ds_list.getColumn(this.ds_list.rowposition, "CADDR_SPR_CD");   	// 구분(연락처구분코드)
        	resString = JSON.stringify(resData);

        	this.close(resString);
        };

        //최대 조회수 KEYUP 이벤트
        this.Div00_edt_maxCnt_onkeyup = function(obj,e)
        {
        	var cntValue = this.gfn_removeComma(this.Div00.form.edt_maxCnt.value);

        	if(!this.gfn_isNull(cntValue)){
        		this.Div00.form.edt_maxCnt.set_value(this.gfn_appendComma(cntValue, 0));
        	}else{
        		this.Div00.form.edt_maxCnt.set_value("0");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.Div00.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.Div00.form.grd_list.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.Div00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.Div00.form.sta_noData.addEventHandler("onclick",this.Div00_sta_noData_onclick,this);
            this.Div00.form.btn_select.addEventHandler("onclick",this.btn_select_onclick,this);
            this.Div00.form.edt_maxCnt.addEventHandler("onkeyup",this.Div00_edt_maxCnt_onkeyup,this);
        };
        this.loadIncludeScript("SSP_BO_PP_20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
