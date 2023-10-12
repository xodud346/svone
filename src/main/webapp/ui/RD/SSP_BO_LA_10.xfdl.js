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
            this.set_titletext("사전설정매익률 추가");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,533);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bfSetPrfrt", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"32\"/><Column id=\"PRD_CLCD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"REG_UPD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_UPD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PLN_PRFRT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RND_PRFRT_SPR_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"32\"/><Column id=\"RND_PRFRT_SPR_CD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prfrtSpr", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEAM_ATTR_CLCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"PRD_CLCD\"/><Col id=\"ROW_COUNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popupList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","615","475","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","543","475",null,"24","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","50",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사전설정매익률 추가");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","0","502","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"71","67","24","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"71","67","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","96",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","453",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","106",null,null,"20","Static01_00_01_01:0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_bfSetPrfrt");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"\"/><Cell col=\"1\" text=\"할인율 구분\"/><Cell col=\"2\" colspan=\"2\" text=\"제조원\"/><Cell col=\"4\" colspan=\"2\" text=\"카테고리\"/><Cell col=\"6\" text=\"사전설정매익률\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RND_PRFRT_SPR_NM\"/><Cell col=\"2\" text=\"bind:MNFR_NO\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:MNFR_NM\" displaytype=\"normal\" expandshow=\"expr:RND_PRFRT_SPR_CD  == &apos;10&apos; || RND_PRFRT_SPR_CD == &apos;20&apos; ? &quot;show&quot; : &quot;hide&quot;;\" expandsize=\"25\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRD_CLCD\" displaytype=\"normal\" edittype=\"none\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:PRD_CLCD_NM\" displaytype=\"normal\" expandshow=\"expr:RND_PRFRT_SPR_CD  == &apos;10&apos; || RND_PRFRT_SPR_CD == &apos;30&apos; ? &quot;show&quot; : &quot;hide&quot;;\" expandsize=\"25\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PLN_PRFRT\" displaytype=\"editcontrol\" edittype=\"mask\" textAlign=\"right\" expr=\"PLN_PRFRT==null?&apos;&apos;:PLN_PRFRT+&apos; %&apos;\" maskeditclipmode=\"excludespace\" maskeditformat=\"+#0.##\" editmaxlength=\"5\" textareamaxlength=\"4\" maskeditlimitbymask=\"both\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","781","71","71","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("매익률 구분:");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_prfrtSpr","Static00:4","71","202","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_prfrtSpr");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_direction("vertical");
            obj.set_text("과세");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,533,this,function(p){});
            obj.set_description("사전설정매익률 추가");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_bfSetPrfrt");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_LA_10.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_LA_10.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_13.xfdl(사전설정매익율 등록 팝업)
        * 작 성			일 명: 손나라
        * 작 성	    	일 자: 2022/05/17
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
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
        this.mallSprCd 		= "20";
        this.totalCount 	= 0;
        this.strKeyValue 	= "";
        this.lv_coCd        = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
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
        	// 로컬 로그인 사용 않할시 false
        	this.fn_setLocalUserCreate(true);
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

        	var strDs   = "ds_prfrtSpr";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "RND_PRFRT_SPR_CD";       // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        this.fn_PostformInit = function()
        {
        	this.fn_setResetBtnCall();
        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {
        	//할인율 구분 초기값
        	this.ds_prfrtSpr.filter("COM_DTL_CD == '10' || COM_DTL_CD == '20'");
        	this.rdo_prfrtSpr.set_value("10");
        }


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(sErrorMsg,"에러정보","","error");
        		if(nErrorCode == -100)
        		{
        			//this.div.form.PRNM.setFocus();
        		}
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;

        			default:
        				break;
        		}
        	}
        };

        this.fn_popupCallback = function(strId, strVal)
        {
        	var strIdTemp = strId.split("|");
        	var nRow = strIdTemp[1];
            switch(strIdTemp[0])
            {
        		//제조원
        		case "MNFR_NM" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.ds_bfSetPrfrt.setColumn(nRow,"MNFR_NO",jsonData.MNFR_NO);
        				this.ds_bfSetPrfrt.setColumn(nRow,"MNFR_NM",jsonData.MNFR_NM);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
                    break;
        		//카테고리
        		case "PRD_CLCD" :
        			if(!this.gfn_isNull(strVal))
        			{
        				var jsonData = JSON.parse(strVal);
        				this.ds_bfSetPrfrt.setColumn(nRow,"PRD_CLCD",jsonData.PRD_CLCD);
        				this.ds_bfSetPrfrt.setColumn(nRow,"PRD_CLCD_NM",jsonData.FULL_PRD_CLSF_NM);
        			}else
        			{
        			// 닫기 버튼 처리
        			}
                    break;
                default:
                    break;
            }
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.ds_bfSetPrfrt.addRow();
        	/* 할인율구분
        	dcrtSpr ( 10 : 제조원/상품군, 20 : 제조원, 30 : 상품군 )
        	*/
        	var dcrtSpr = this.rdo_prfrtSpr.value;

            this.ds_bfSetPrfrt.setColumn(nRow,"CHK","0");                                  // 체크
        	this.ds_bfSetPrfrt.setColumn(nRow,"CO_CD",this.lv_coCd)                        // 회사코드
        	this.ds_bfSetPrfrt.setColumn(nRow,"RND_PRFRT_SPR_NM",this.rdo_prfrtSpr.text);   // 할인율구분명
        	this.ds_bfSetPrfrt.setColumn(nRow,"RND_PRFRT_SPR_CD",this.rdo_prfrtSpr.value);  // 할인율구분코드
        	this.ds_bfSetPrfrt.setColumn(nRow,"USE_YN","Y");                               // 사용여부
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */
        this.btn_del_onclick = function(obj,e)
        {
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            // 멀티삭제용도
            if(this.ds_bfSetPrfrt.rowcount < 1 || this.ds_bfSetPrfrt.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000011","삭제정보","","warning"); // 선택된 값이 없습니다.
                return false;
            }

            var result = this.fn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_bfSetPrfrt.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_bfSetPrfrt.getColumn(i,"CHK") == 1)
                {
                    this.ds_bfSetPrfrt.deleteRow(i);
                }
            }

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
        	this.btn_save.set_enable(true);
        };

        this.fn_PostDel = function()
        {

        };
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if ( this.ds_bfSetPrfrt.getRowCount() == 0 ) {
        		this.fn_alert("ERRS000174","저장","question");  // 적용할 내용이 없습니다.
        		return false;
        	}
            // 필수 입력사항 체크
            for(var idx=0; idx<this.ds_bfSetPrfrt.getRowCount(); idx++)
        	{
        		var dcrtSpr = this.ds_bfSetPrfrt.getColumn(idx,"RND_PRFRT_SPR_CD");
        		if ( dcrtSpr == "10" )
        		{
        			if ( this.gfn_isNull(this.ds_bfSetPrfrt.getColumn(idx,"MNFR_NO")) )
        			{
        				this.fn_alert("ERRS000144","저장","제조원 ","question");      // 제조원 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_bfSetPrfrt.getColumn(idx,"PRD_CLCD")) )
        			{
        				this.fn_alert("ERRS000144","저장","카테고리 ","question");      // 카테고리 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_bfSetPrfrt.getColumn(idx,"PLN_PRFRT")) )
        			{
        				this.fn_alert("ERRS000144","저장","사전설정매익율 ","question");      // 사전설정매익율 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        		}
        		else if ( dcrtSpr == "20" )
        		{
        			if ( this.gfn_isNull(this.ds_bfSetPrfrt.getColumn(idx,"MNFR_NO")) )
        			{
        				this.fn_alert("ERRS000144","저장","제조원 ","question");      // 제조원 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        			if ( this.gfn_isNull(this.ds_bfSetPrfrt.getColumn(idx,"PLN_PRFRT")) )
        			{
        				this.fn_alert("ERRS000144","저장","사전설정매익율 ","question");      // 사전설정매익율 (&1은(는) 필수입력사항입니다.)
        				return false;
        			}
        		}
        		else
        		{
        			return false;
        		}
        	}

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

             if(result == 0)
             {
                 return false;
             }
             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/rd/bf-set-prfrt-mng/save-bf-set-prfrt-mng.do";
            var strInDs     = "ds_master=ds_bfSetPrfrt:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = this.strKeyValue;
        	this.close(objRtnArr.toString());
        };
        /**********************************************************************
        	09. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("CLOSE");
        	}
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	var result = this.fn_confirm( "ERRN000053", "취소","", "question" ); // 취소 하시겠습니까?
            if(result == 1)
            {
        		this.close("EXIT");
        	}
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/

        this.grd_list_onexpandup = function(obj,e)
        {
        	var strMnfrNo             = this.ds_bfSetPrfrt.getColumn(e.row,"MNFR_NO");
        	var strPrdClcd            = this.ds_bfSetPrfrt.getColumn(e.row,"PRD_CLCD");
        	var strRndPrfrtSprCd      = this.ds_bfSetPrfrt.getColumn(e.row,"RND_PRFRT_SPR_CD");
        	if(e.cell == obj.getBindCellIndex("body","MNFR_NM"))
         	{
         		if( strRndPrfrtSprCd == "10" || strRndPrfrtSprCd == "20")
        		{
        			var params  = { coCd : this.lv_coCd, mnfrNo : strMnfrNo };
        			var options = { title  : "제조원" };
        			this.gfn_openPopup( "MNFR_NM|"+e.row
        			                  , "PR_POP::SSP_BO_PP_08.xfdl"
        							  , params
        							  , "fn_popupCallback"
        							  , options);
        		}

        	} else if(e.cell == obj.getBindCellIndex("body","PRD_CLCD_NM"))
         	{
         		if( strRndPrfrtSprCd == "10" || strRndPrfrtSprCd == "30")
        		{
        			var params  = { coCd   : this.lv_coCd, mallSprCd : this.mallSprCd, prdClcd : strPrdClcd };
        			var options = { title  : "카테고리" };
        			this.gfn_openPopup( "PRD_CLCD|"+e.row
        			                  , "PR_POP::SSP_BO_PP_07.xfdl"
        							  , params
        							  , "fn_popupCallback", options);
        		}
         	}
        };

        this.ds_bfSetPrfrt_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid == "PLN_PRFRT" )
        	{
        		var plnPrfrt = new nexacro.Decimal(e.newvalue);
        		if ( plnPrfrt <= 0 )
        		{
        			return false;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.ds_bfSetPrfrt.addEventHandler("cancolumnchange",this.ds_bfSetPrfrt_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_LA_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
