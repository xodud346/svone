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
            this.set_titletext("메타테이블정보조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"결과영단어조합구조\" type=\"STRING\" size=\"32\"/><Column id=\"용어존재여부\" type=\"STRING\" size=\"32\"/><Column id=\"단어ID조합구조\" type=\"STRING\" size=\"32\"/><Column id=\"단어생성우선순위\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"영문컬럼명\" type=\"STRING\" size=\"32\"/><Column id=\"결과단어조합구조\" type=\"STRING\" size=\"32\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/><Column id=\"기존데이타타입\" type=\"STRING\" size=\"256\"/><Column id=\"우선순위_STRUCT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"용어\" type=\"STRING\" size=\"32\"/><Column id=\"단어검색성공여부\" type=\"STRING\" size=\"32\"/><Column id=\"용어번호\" type=\"STRING\" size=\"256\"/><Column id=\"영문컬럼명길이\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"불일치단어목록\" type=\"STRING\" size=\"256\"/><Column id=\"단어조합구조\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","25",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","7","27","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","129","0",null,"32","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","20","0","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("용어조회");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","427","0","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("결과정보");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassId","155","5","267","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_imemode("none");
            obj.set_displaynulltext("메타 데이터 조회");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtEnglNm","562","5","267","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_imemode("none");
            obj.set_inputmode("normal");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtHangelNm","834","5","267","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("none");
            obj.set_inputmode("normal");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"29","60","24","21",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","58","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.24%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","93","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.24%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","154","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","798","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt","25","68","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("* 사용법 : 메타 테이블 조회 (단어 한칸씩 뛰어쓰기)");
            obj.set_usedecorate("true");
            obj.set_color("red");
            obj.set_font("normal 10pt/normal \"Arial\",\"굴림체\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("메타테이블정보조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_10.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_10.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_CO_10.xfdl(메타테이블정보조회)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/04/21
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
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
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {
            this.fn_Ret();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	this.ds_search.setColumn(0,"CODE",this.divSearch.form.edtClassId.value);
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/metaTblInfoInq/selectMetaTblInfoInq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	if(this.ds_master.getRowCount() > 0)
        	{
        		var hangel = this.ds_master.getColumn(0,"영문컬럼명").split("_");
        		var text   = "";

        		for(var idx=0; idx<hangel.length; idx++)
        		{
        			text += hangel[idx].substr(0,1) + hangel[idx].substr(1).toLowerCase();
        		}

        		this.divSearch.form.edtEnglNm.set_value(text);
        		this.divSearch.form.edtHangelNm.set_value(this.ds_master.getColumn(0,"용어"));
        	}
        	else
        	{
        		this.divSearch.form.edtEnglNm.set_value("");
        		this.divSearch.form.edtHangelNm.set_value("");
        	}
        };

        /**
         * 용어조회 Edit 엔터 클릭시 이벤트 발생 처리
         */
        this.divSearch_edtClassId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtClassId.addEventHandler("onkeyup",this.divSearch_edtClassId_onkeyup,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_CO_10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
