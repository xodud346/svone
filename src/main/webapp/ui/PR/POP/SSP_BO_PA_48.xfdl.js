(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PA_48");
            this.set_titletext("변경이력관리");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,584);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"HST_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_CHG_TP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"KEY1\" type=\"STRING\" size=\"256\"/><Column id=\"KEY2\" type=\"STRING\" size=\"256\"/><Column id=\"KEY3\" type=\"STRING\" size=\"256\"/><Column id=\"KEY4\" type=\"STRING\" size=\"256\"/><Column id=\"KEY5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","90",null,null,"20","120",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_cellsizebandtype("allband");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_scrollbartype("auto fixed");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"변경항목\"/><Cell col=\"2\" text=\"기존값\"/><Cell col=\"3\" text=\"신규값\"/><Cell col=\"4\" text=\"변경사유\"/><Cell col=\"5\" text=\"변경자ID\"/><Cell col=\"6\" text=\"변경자명\"/><Cell col=\"7\" text=\"변경일시\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" wordWrap=\"char\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:COL\" wordWrap=\"char\"/><Cell col=\"2\" text=\"expr:COL==&apos;상품상세설명&apos;?&apos;내용보기&apos;:ASIS\" wordWrap=\"char\" expandshow=\"expr:COL==&apos;상품상세설명&apos;?&apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"3\" text=\"expr:COL==&apos;상품상세설명&apos;?&apos;내용보기&apos;:TOBE\" wordWrap=\"char\" expandshow=\"expr:COL==&apos;상품상세설명&apos;?&apos;show&apos;:&apos;hide&apos;\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:UPD_RSN\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:UPD_ID\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:UPD_NAME\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:UPD_DTM\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
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

            obj = new Static("staticTitle","20","20","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 변경이력관리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","568",null,"65","30",null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_positionstep("0");
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
        this.registerScript("SSP_BO_PA_48.xfdl", function() {
        /*******************************************************
        PROJECT NAME : ssp_bo
        CREATION DATES : 2022.03.10
        DESC : 상품파트 공용 변경이력 팝업

        * 호출예)
        var params = {
        	historyType:'person', //히스토리 유형 필수값
        	key1:'111',	//파라미터1
        	key2:'222' //파라미터2
        	//필요에따라 추가
        };
        var options = {};
        this.gfn_openPopup(e.fromobject.id, "PR_POP::SSP_BO_PA_48.xfdl", params,  "fn_popupCallback", options);

        * ======================= 변경 내역 ======================
        * 날짜			담당자		유형코드		유형명칭
        * 2020.03.10	조지훈 	person			담당자변경이력
        *******************************************************/

        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.totalCount = 0;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();
        this.fn_onLoad = function(obj,e)
        {
            this.gfn_formOnLoad(this);

        	//조회
        	this.ds_search.setColumn(0, "HISTORY_TYPE", this.parent.historyType);	//이력유형(필수)
        	//키값 파라미터(필요에따라)
        	this.ds_search.setColumn(0, "KEY1", this.parent.key1);
        	this.ds_search.setColumn(0, "KEY2", this.parent.key2);
        	this.ds_search.setColumn(0, "KEY3", this.parent.key3);
        	this.ds_search.setColumn(0, "KEY4", this.parent.key4);
        	this.ds_search.setColumn(0, "KEY5", this.parent.key5);

            this.fn_search(true);
        };

        // 화면 단축키
        this.fn_onkeyup = function(obj,e)
        {
        	if (e.keycode == 27) {// ESC
        		this.close();// 팝업 화면 닫기
        		e.stopPropagation();
        	}
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fn_search = function (bInit)
        {
            var sSvcId = "search";
            var sUrl = "/pr/prd-hst/select-product-history.do";
            var inDs = "ds_search=ds_search";
            var outDs = "ds_list=historyList";
            var arg = "";

            if(bInit) {
                this.div_paging.uPage = 1;
                this.div_paging.uPageNum = 0;
                this.ds_search.setColumn(0,"START_NUM",0);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
            }

            this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
            switch(svcID) {
                case "search" :
                    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
                    break;

            }
        };

        this.fn_pageCallback = function(sFlag){
            var oPaging = this.div_paging;

            if(sFlag){
                this.ds_search.setColumn(0,"START_NUM", oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT", this.fv_oApp.gv_pageViewCnt);
                this.fn_search();
            }

            var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.totalPageCount.set_text(sTotText);
        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.grd_list_oncellclick = function(obj,e)
        {
        	var hstType = this.parent.historyType;
        	var col = this.ds_list.getColumn(e.row, "COL");
        	if(hstType == 'productDetail' && col == '상품상세설명'){
        		if(obj.getCellPos() == 2){
        			var params = {
        				PRD_ID:this.ds_list.getColumn(e.row, "ID"),
        				HST_SEQ:this.ds_list.getColumn(e.row, "ASIS")
        			};
        			this.gfn_openPopup('historyHtmlView', "PR_POP::SSP_BO_PA_48_01.xfdl", params,  "fn_popupCallback", {title:'상품상세설명'});
        		}else if(obj.getCellPos() == 3){
        			var params = {
        				PRD_ID:this.ds_list.getColumn(e.row, "ID"),
        				HST_SEQ:this.ds_list.getColumn(e.row, "TOBE")
        			};
        			this.gfn_openPopup('historyHtmlView', "PR_POP::SSP_BO_PA_48_01.xfdl", params,  "fn_popupCallback", {title:'상품상세설명'});
        		}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_48.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
