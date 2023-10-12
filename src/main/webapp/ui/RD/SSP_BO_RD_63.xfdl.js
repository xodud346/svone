(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_RD_63");
            this.set_titletext("KC인증정보 등록가이드");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,605);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_3_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_5_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"LANG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22","560","583",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","20","515","565",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","6","300","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("| KC인증정보 등록가이드");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","4","46","556","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("aquamarine");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list01","20","56","520","529",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("body");
            obj.set_autoenter("select");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"인증명\"/><Cell col=\"1\" text=\"인증번호\"/><Cell col=\"2\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell text=\"bind:COM_DTL_CD_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:COM_USR_DEFN_NM_3_NM\"/><Cell col=\"2\" text=\"bind:COM_USR_DEFN_NM_1_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("KC인증정보 등록가이드");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,605,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_63.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_63.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_XX.xfdl( 관리(조회))
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/24
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
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
            //사용자 화면  초기화 함수
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
            this.fn_Ret();
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
            }
        	else
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
            var strUrl      = "/rd/kc-cert-info-inq/select-kc-cert-info-list-inq.do";
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

        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_list01.addEventHandler("onenterdown",this.grd_list_onenterdown,this);
            this.grd_list01.addEventHandler("oncelldblclick",this.grd_list01_oncelldblclick,this);
            this.grd_list01.addEventHandler("oncellclick",this.grd_list01_oncellclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_63.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
