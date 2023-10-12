(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_08");
            this.set_titletext("상품인증정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1296,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cert", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_FILE\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_mroAttr","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_cert");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("인증정보가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"339\"/><Column size=\"339\"/><Column size=\"128\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"인증명\"/><Cell col=\"1\" text=\"인증번호\"/><Cell col=\"2\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell text=\"bind:KC_CERT_CD\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"1\" text=\"bind:KC_CERT_NO\" textAlign=\"left\" padding=\"0px 10px\"/><Cell col=\"2\" textAlign=\"left\" color=\"blue\" textDecoration=\"underline\" text=\"expr:ATFL_NM != null ? &quot;theme::default/images/btn_WF_add_file.png&quot; : &quot;&quot;\" displaytype=\"imagecontrol\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1296,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_PA_03_08.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.fCallBackFn = "";	//콜백
        this.pageMode = "edit";	//기본edit모드
        this.sSvcID = "";
        this.contextRealPath = "";
        this.loaded = false;
        this.isResize = false;
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
        	var sSvcId = "call";
        	var sUrl = "/pr/prd-mng/select-product-cert-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_cert=certList";
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
        		case "call":

        			if(this.isResize){
        				//부모 사이즈 변경호출
        				var grdSize = this.grd_mroAttr.getRealRowFullSize()+21;
        				if(grdSize<200){
        					grdSize = 200;
        				}
        				this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':grdSize});
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
        this.cfn_read = function(svcID, params, callBackFunction, pageMode, isResize){
        	this.isResize = isResize;
        	if(isResize && !this.gfn_isNull(this.fCallBackFn)){
        		//부모 사이즈 변경호출
        		var grdSize = this.grd_mroAttr.getRealRowFullSize()+21;
        		if(grdSize<200){
        			grdSize = 200;
        		}
        		this.lookupFunc(this.fCallBackFn).call('tab_resize', 0, '', {'height':grdSize});
        	}
        	if(this.loaded){
        		return false;
        	}
        	this.fn_init(svcID, params, callBackFunction, pageMode);

        	this.fn_call();
        }

        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode, isResize){
        	this.cfn_read(svcID, params, callBackFunction, pageMode, isResize);
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
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function(svcID, params, callBackFunction, pageMode) {
        	var coCd = params.coCd;
        	var prdId = params.prdId;
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	if(pageMode == 'read'){
        		var object = this.all;
        		for( var i = 0; i < object.length; i++ ){
        			var stype = object[i].valueOf();
        			if(stype == '[object Edit]' || stype == '[object CheckBox]'
        				|| stype == '[object Calendar]' || stype == '[object Combo]'){
        				this[object[i].id].set_readonly(true);
        			}
        		}
        	}
        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);

        };

        // 파일 다운로드
        this.downloadfile = function(i) {
        	this.FileDownTransfer.clearPostDataList();

        	/*
        	this.FileDownTransfer.set_downloadfilename(this.ds_cert.getColumn(i, "ATFL_NM"));	//runtime 전용 프로퍼티
        	this.FileDownTransfer.setPostData("filePath",this.ds_cert.getColumn(i, "ATFL_STOR_PATH"));
        	this.FileDownTransfer.setPostData("fileOrgName",this.ds_cert.getColumn(i, "ORI_ATFL_NM"));
        	this.FileDownTransfer.setPostData("fileName",this.ds_cert.getColumn(i, "ATFL_NM"));
        	*/
        	this.FileDownTransfer.setPostData("docRegId",this.ds_cert.getColumn(i, "DOC_REG_ID"));
        	this.FileDownTransfer.setPostData("docRegSeq",this.ds_cert.getColumn(i, "DOC_REG_SEQ"));

        	this.FileDownTransfer.download('/co/file-download.do');
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        this.grd_mroAttr_oncellclick = function(obj,e)
        {
        	if(obj.getCellPos() == 2){	//추후 오픈텍스트 방식으로 변경필요. 아직 참조소스 없음(2022.04.14)
        		if(!this.gfn_isNull(this.ds_cert.getColumn(e.row,'ATFL_NM'))){
        			if(this.confirm(this.ds_cert.getColumn(e.row, "ATFL_NM") + " 파일을 저장 하시겠습니까?")) {
        				this.downloadfile(e.row);
        			}
        		} else {
        			this.alert('첨부파일이 없습니다.')
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.fn_onkeyup,this);
            this.grd_mroAttr.addEventHandler("oncellclick",this.grd_mroAttr_oncellclick,this);
            this.FileDownTransfer.addEventHandler("onsuccess",this.FileDownTransfer_onsuccess,this);
            this.FileDownTransfer.addEventHandler("onerror",this.FileDownTransfer_onerror,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
