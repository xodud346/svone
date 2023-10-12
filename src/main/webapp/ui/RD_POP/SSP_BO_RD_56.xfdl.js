(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("R&D 변경이력관리");
            this.set_scrollbartype("none none");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,584);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"HST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_CHG_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRD_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"HIS_TABLE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"KEY3\" type=\"STRING\" size=\"256\"/><Column id=\"KEY4\" type=\"STRING\" size=\"256\"/><Column id=\"KEY5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"CO_CD\"/><Col id=\"HIS_TABLE\"/><Col id=\"KEY1\"/><Col id=\"KEY2\"/><Col id=\"KEY3\"/><Col id=\"KEY4\"/><Col id=\"KEY5\"/><Col id=\"MALL_SPR_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pageRowCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COM_DTL_CD\">100</Col><Col id=\"COM_DTL_CD_NM\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static05",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","90",null,null,"20","120",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.getSetter("uCellSizeType").set("true");
            obj.getSetter("uServerSortFlag").set("false");
            obj.getSetter("uSortFlag").set("false");
            obj.set_formatid("FORMAT01");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"FORMAT01\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"ID\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"변경항목\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"기존값\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"신규값\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"변경사유\"/><Cell col=\"5\" text=\"변경자ID\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"변경자명\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" wordWrap=\"char\" displaytype=\"text\" autosizecol=\"limitmax\"/><Cell col=\"1\" text=\"bind:COL\" wordWrap=\"char\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:ASIS\" wordWrap=\"char\" expandshow=\"expr:COL==&apos;상품상세설명&apos;?&apos;show&apos;:&apos;hide&apos;\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:TOBE\" wordWrap=\"char\" expandshow=\"expr:COL==&apos;상품상세설명&apos;?&apos;show&apos;:&apos;hide&apos;\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:UPD_RSN\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:UPD_ID\" wordWrap=\"char\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:UPD_NAME\" wordWrap=\"char\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:UPD_DTM\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30",null,"grd_list:30","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_url("COMM::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","70","200","14",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staticTitle","20","27","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 변경이력관리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","568",null,"65","30",null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00","1180","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00",null,"0","20",null,"1180","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_rowCont",null,"56","100","28","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_pageRowCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_readonly("true");
            obj.set_text("100");
            obj.set_value("100");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("변경이력관리");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,584,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_56.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_56.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_56.xfdl(공통 히스트로 팝업관리)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2018/09/17
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.lv_pageViewCnt 		= 100;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.mallSprCd              = "20";

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvGetDate              = "";

        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.sParamArg5;

        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
        	this.fn_formInit();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

        	var strDs   = "ds_pageRowCd";		    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "PAGE_HST_CNT";         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);

        };

        /**
         *  초기화셋팅
         */
        this.fn_setInitForm = function()
        {
        	this.lvGetDate = this.fn_getSvrDate();                              // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        	if(!this.gfn_isNull(this.sOptinoArg1))
        	{
        		this.grd_list.set_formatid(this.sOptinoArg1);

        	}else
        	{
        		this.grd_list.set_formatid("FORMAT01");
        	}
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

            this.lv_pageViewCnt = this.cbo_rowCont.text;
        	this.ds_search.setColumn(nRow, "GRD_FORMAT",  this.sOptinoArg1);    // 그리드 화면 포멧
        	this.ds_search.setColumn(nRow, "HIS_TABLE" ,  this.sOptinoArg2);    // 로그 테이블 이름

        	this.ds_search.setColumn(nRow, "KEY1"      , this.sParamArg1);
        	this.ds_search.setColumn(nRow, "KEY2"      , this.sParamArg2);
        	this.ds_search.setColumn(nRow, "KEY3"      , this.sParamArg3);
        	this.ds_search.setColumn(nRow, "KEY4"      , this.sParamArg4);
        	this.ds_search.setColumn(nRow, "KEY5"      , this.sParamArg5);

        	this.ds_search.setColumn(nRow,"START_NUM"  , 0);
        	this.ds_search.setColumn(nRow,"SORT_COLUMN", "");
        	this.ds_search.setColumn(nRow,"SORT_TYPE"  , "");
        	this.ds_search.setColumn(nRow,"CO_CD"      , this.lv_coCd);
        	this.ds_search.setColumn(nRow,"MALL_SPR_CD", this.mallSprCd);      // 몰구분
        	this.ds_search.setColumn(nRow,"ROW_COUNT"  , this.lv_pageViewCnt); // 현재 레코드 페이즈크기
        	this.fn_search();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_setInitForm();
        				break;
        			case "Search":
        			    this.postSearch();
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.fn_popupCallback = function(svcID, strVal)
        {
            switch(svcID)
        	{
        		case "SSP_BO_RD_56_01" :                         // CLOB상세변경시 콜빽함수
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
                        {
                        }else if(sRtn[0] == "EXIT")
                        {
                        }else
        				{

        				}
                    }
        		    break;
        		default :
        			break;
            }
        }
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	// 조회조건 셋팅
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_search = function()
        {
        	if(!this.preSearch())
        	{
        		return false;
        	}
        	var strSvc 		= "Search";
        	var strUrl 		= "/rd/rd-product-com-history/select-rd-product-com-history.do";
        	var strInDs  	= "ds_search=ds_search";
        	var strOutDs 	= "ds_list=ds_list";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.postSearch = function()
        {

        	//trace(this.dsMaster.saveXML());
        	this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt,"fn_pageCallback");
        };

        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };
        /**********************************************************************
        	07.Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	08.기타 Control Event
        ***********************************************************************/
        /**
         * 그리드 상단 Sort 처리
         */
        this.fn_sortCallback = function(sGridId)
        {
            var oGrid = null;

            if(sGridId == "grd_list")
            {
        		if(this.ds_list.getRowCount() > 0)
        		{
        			var oSortInfo = this.grd_list.uaSortInfo;
        			this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
        			this.ds_search.setColumn(0,"SORT_TYPE",  oSortInfo.status);
        			this.fn_search();
        		}
            }
        };


        /**
         * 그리드 하단 페이지 처리
         */
        this.fn_pageCallback = function(sFlag)
        {
            var oPaging = this.div_paging;

        	if(sFlag)
        	{
        		this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        		this.ds_search.setColumn(0,"ROW_COUNT",this.lv_pageViewCnt);
        		this.fn_search();
        	}

            var sTotText = "(<b v='true'>총 "+ oPaging.form.fv_nTotRowCount+"건 </b><fc v='red'>"+ (oPaging.form.fv_nPageCnt == 0 ? 0 : oPaging.form.fv_nPage) +"</fc> / "+ oPaging.form.fv_nPageCnt +")";
            this.totalPageCount.set_text(sTotText);
        };

        /**
         *  상품 조회시 상품상세설명을 클릭시 뷰를 보여줌(이전/이후)
         */
        this.grd_list_onexpandup = function(obj,e)
        {
        	var col = this.ds_list.getColumn(e.row, "COL");
        	if(this.sOptinoArg2 == 'TB_PR_PRD_INFO_HST' && col == '상품상세설명')
        	{
        		if(obj.getCellPos() == obj.getBindCellIndex("body","ASIS") || obj.getCellPos() == obj.getBindCellIndex("body","TOBE"))
        		{
        		    var strBindId = this.gfn_trim(obj.getCellProperty( "body", obj.getCellPos(), "text" )).replace("bind:",""); //ASIS or TOBE

        		    var lv_sValue01 		= this.ds_list.getColumn(e.row, "ID");
        			var lv_sValue02 		= this.ds_list.getColumn(e.row, "HST_SEQ");
        			var lv_sValue03 		= this.ds_list.getColumn(e.row,  strBindId);

        			var sPopId 			= "SSP_BO_RD_56_01";
        			var sUrl 			= "RD_POP::SSP_BO_RD_56_01.xfdl";
        			var oArg 			= { pv_sVal01 :lv_sValue01      	  // 상품ID
        								  , pv_sVal02 :lv_sValue02       	  // 히스토리순번
        								  , pv_sVal03 :lv_sValue03};         // 파라미터1

        			var sPopupCallBack 	= "fn_popupCallback";
        			var oOption 		= {titlebar:"false"};

        			this.gfn_openPopup( sPopId
        							  , sUrl
        							  , oArg
        							  , sPopupCallBack
        							  , oOption);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.sta_bg.addEventHandler("onclick",this.sta_bg_onclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_56.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
