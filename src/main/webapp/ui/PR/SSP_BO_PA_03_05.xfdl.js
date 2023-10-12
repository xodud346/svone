(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_05");
            this.set_titletext("이미지 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_img", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"STOR_PLC_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAP_DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_3\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_4\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FDS_5\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_IMG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","0","1","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("이미지 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_001","0","32",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_image_bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("img_box60","3.24%","51","13.12%",null,null,"4",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("imgBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.img_box60.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.img_box60.addChild(obj.name, obj);

            obj = new ImageViewer("img_prdImage60","10","37","150","150",null,null,null,null,null,null,this.img_box60.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_text("");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            this.img_box60.addChild(obj.name, obj);

            obj = new Div("img_box61","21.76%","51","13.12%",null,null,"4",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("imgBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.img_box61.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.img_box61.addChild(obj.name, obj);

            obj = new ImageViewer("img_prdImage61","10","37","150","150",null,null,null,null,null,null,this.img_box61.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            this.img_box61.addChild(obj.name, obj);

            obj = new Div("img_box62","40.28%","51","13.12%",null,null,"4",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("imgBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.img_box62.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.img_box62.addChild(obj.name, obj);

            obj = new ImageViewer("img_prdImage62","10","37","150","150",null,null,null,null,null,null,this.img_box62.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            this.img_box62.addChild(obj.name, obj);

            obj = new Div("img_box80","82.72%","51","13.12%",null,null,"4",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("imgBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","90.00%","20",null,null,null,null,null,null,this.img_box80.form);
            obj.set_taborder("0");
            obj.set_text("상세이미지");
            obj.set_textAlign("center");
            this.img_box80.addChild(obj.name, obj);

            obj = new ImageViewer("img_prdImage80","0","37","150","150",null,null,null,null,null,null,this.img_box80.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            this.img_box80.addChild(obj.name, obj);

            obj = new Div("img_box63","58.80%","51","13.12%",null,null,"4",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("imgBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","-1","100.00%","20",null,null,null,null,null,null,this.img_box63.form);
            obj.set_taborder("0");
            obj.set_text("상품이미지");
            obj.set_textAlign("center");
            this.img_box63.addChild(obj.name, obj);

            obj = new ImageViewer("img_prdImage63","10","37","150","150",null,null,null,null,null,null,this.img_box63.form);
            obj.set_taborder("1");
            obj.set_cssclass("productImage");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_cursor("pointer");
            this.img_box63.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_03_05.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_PA_03_05.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fCallBackFn = "";	//콜백
        this.pageMode = "edit";	//기본edit모드
        this.sSvcID = "";
        this.contextRealPath = "";
        this.loaded = false;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_call = function(){
        	var sSvcId = "sspPrdImg";
        	var sUrl = "/pr/prd-mng/select-product-image-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_img=imageList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //조회
        this.fn_regProcCall = function(){
        	var sSvcId = "sspPrdImg";
        	var sUrl = "/pr/prd-add/select-reg-proc-product-image-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_img=imageList";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0 && errorCode != -100){
        		trace(errorMsg);
        	}

        	switch(svcID){
        		case "sspPrdImg":
        			var arr = ['60', '61', '62', '63', '80'];
        			for(var i=0; i<arr.length;i++){
        				//var sImgPath = 'file://'+this.ds_img.getColumn(this.ds_img.findRowExpr("ETC_FDS_2=="+arr[i]), "PRD_IMG");
        				var ORI_ATFL_NM = this.ds_img.getColumn(this.ds_img.findRowExpr("ETC_FDS_2=="+arr[i]), "ORI_ATFL_NM");
        				var ATFL_STOR_PATH = this.ds_img.getColumn(this.ds_img.findRowExpr("ETC_FDS_2=="+arr[i]), "ATFL_STOR_PATH");
        				var ATFL_NM = this.ds_img.getColumn(this.ds_img.findRowExpr("ETC_FDS_2=="+arr[i]), "ATFL_NM");
        				var newPath = this.fn_imageViewerUrl(ATFL_STOR_PATH, ATFL_NM, ORI_ATFL_NM);
        				this['img_box'+arr[i]].form['img_prdImage'+arr[i]].set_image(newPath);
        			}

        			this.loaded = true;

        			break;

        	}

        	//부모창 결과리턴
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		this.lookupFunc(this.fCallBackFn).call(this.sSvcID, errorCode, errorMsg, {id:this.sSvcID, status:this.loaded});
        	}

        };
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        /*
        서비스ID(콜백ID)
        파라미터맵,
        콜백펑션,
        페이지타입 옵션 : edit:수정모드, read:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageMode){
        	var paramArr = [{id:'coCd', name:'회사코드'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	this.fn_init(svcID, params, callBackFunction, pageMode);
        	this.fn_call();
        }

        //등록처리전용(상품추가메뉴 전용)
        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode){
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	this.fn_init(svcID, params, callBackFunction, pageMode);
        	this.fn_regProcCall();
        }

        //사이즈 조절 필요시 호출
        this.cfn_resize = function(width, height){
        	if(!this.gfn_isNull(width)){
        		this.set_width(width);
        	}
        	if(!this.gfn_isNull(height)){
        		this.set_height(height);
        	}
        }

        //필요값 리턴
        this.cfn_getData = function(){
        	var returnObject = {
        		'DOC_REG_ID' : this.ds_img.getColumn(0, "DOC_REG_ID")
        	};

        	return returnObject;
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function(svcID, params, callBackFunction, pageMode) {
        	var coCd = params.coCd;
        	var prdId = params.prdId;
        	var docRegId = params.docRegId;
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);
        	this.ds_search.setColumn(0, "DOC_REG_ID", docRegId);

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.Div_prd_imgbox_img_box01_ImageViewer00_onclick = function(obj,e)
        {
        	if(obj.imageheight>0 && obj.imagewidth>0){
        		var params = {
        			url:obj.image
        		};
        		var options = {};
        		this.gfn_openPopup('imageViewer', "PR_POP::SSP_BO_PA_03_05_01.xfdl", params,  "fn_popupCallback", options);
        	}

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.img_box60.form.img_prdImage60.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.img_box61.form.img_prdImage61.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.img_box62.form.img_prdImage62.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.img_box80.form.img_prdImage80.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
            this.img_box63.form.img_prdImage63.addEventHandler("onclick",this.Div_prd_imgbox_img_box01_ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
