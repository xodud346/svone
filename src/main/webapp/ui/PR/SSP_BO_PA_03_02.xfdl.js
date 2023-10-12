(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_PP_03_02");
            this.set_titletext("SSP 카테고리/속성 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(638,302);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sspAttr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_ATTR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"ASIS_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"TOBE_PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_ITM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MD_OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRC_APLY_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sspAttrReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_ATTR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DataSetRowType2\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_RSN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"MCND_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static27_00_00","0","62",null,"240","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_00","0","31",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00","0","31","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("카테고리");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static26_00_00","0","62","130","240",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("속성");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mroAttr","140","73",null,"219","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_list");
            obj.set_binddataset("ds_sspAttr");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("카테고리를 선택하세요");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"59\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"PRD_ATTR_CD\"/><Cell col=\"1\" text=\"속성명\"/><Cell col=\"2\" text=\"속성값\"/><Cell col=\"3\" text=\"SRT_SO\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell text=\"bind:PRD_ATTR_CD\"/><Cell col=\"1\" displaytype=\"decoratetext\" cssclass=\"grd_WF_bg_image\" text=\"expr:MAND_YN==&quot;Y&quot;?PRNM+&quot;&lt;fc v=&apos;red&apos;&gt; *&lt;/fc&gt;&quot;:PRNM\"/><Cell col=\"2\" text=\"bind:PRVL\" displaytype=\"editcontrol\" edittype=\"expr:GRP_PRD_YN==&apos;Y&apos;?BSS_PRD_YN==&apos;Y&apos;?&apos;text&apos;:BSS_ATTR_YN==&apos;Y&apos;?&apos;text&apos;:&apos;readonly&apos;:&apos;text&apos;\" editmaxlength=\"90\" editautoselect=\"false\"/><Cell col=\"3\" text=\"bind:SRT_SO\"/><Cell col=\"4\" text=\"bind:EXPS_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("SSP 카테고리/속성 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_category",null,"35","404","24","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_category");
            obj.set_codecolumn("PRD_CLCD");
            obj.set_datacolumn("FULL_PRD_CLSF_NM");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_prdClcd","140","35","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_text("C0100005");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",638,302,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_PA_03_02.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_PA_03_02.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_PA_03_02.xfdl", function() {
        /*******************************************************
        PROJECT NAME : SSP-BO
        CREATION DATES : 2022.03.17 조지훈
        *******************************************************/
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object
        this.sSvcID = "";	//콜백서비스ID
        this.fCallBackFn = "";	//콜백
        this.prdClcd = "";	//카테고리 초기선택 카테고리코드(필수아님)
        this.pageMode = "readonly";	//기본읽기모드

        //오리지널  카테고리ID. 카테고리변경시 기존 속성 삭제후 데이터 입력
        this.originalPrdClcd = "";
        this.loaded = false;

        //가격대상 검색
        this.searchMcnd = "";
        this.mallSprCd = "10";
        //공용전용 구분
        this.pubOnlySprCd = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//ctrl+c v
        	this.copyPaste.addGrid(this.grd_mroAttr);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //조회
        this.fn_categoryInfo = function(svcID){
        	var sSvcId = svcID;
        	var sUrl = "/pr/prd-mng/select-ssp-category-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_category=categoryInfo";
        	var arg;

        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //조회
        this.fn_attrInfo = function(){
        	var sSvcId = "attrInfo";
        	var sUrl = "/pr/prd-mng/select-ssp-attr-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspAttr=attrInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };


        //조회 등록처리전용
        this.fn_attrRegProcInfo = function(){
        	var sSvcId = "attrRegProcInfo";
        	var sUrl = "/pr/prd-add/select-reg-proc-ssp-attr-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_sspAttr=attrInfo";
        	var arg;
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack", false);
        };

        //저장
        this.fn_save = function(){
        	var sSvcId = "save";
        	var sUrl = "/pr/prd-mng/update-ssp-product-attr-info.do";
        	var inDs = "ds_search=ds_search ds_sspAttr=ds_sspAttr:U";
        	var outDs = "";
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
        		case "categoryInfo":
        			if(this.ds_category.rowcount<=0){
        				this.grd_mroAttr.set_nodatatext("S-MRO카테고리와 맵핑된 SSP카테고리가 없습니다.");
        			}

        			this.ds_category.insertRow(0);
        			this.ds_category.setColumn(0, "CO_CD", "");
                    this.ds_category.setColumn(0, "PRD_CLCD", "");
                    this.ds_category.setColumn(0, "FULL_PRD_CLSF_NM", "선택");

        			var bExistsPrdClcd = false;
        			if(!this.gfn_isNull(this.prdClcd)){
        				for(var i=0; i<this.ds_category.rowcount;i++){
        					if(this.ds_category.getColumn(i, "PRD_CLCD") == this.prdClcd){
        						this.cmb_category.set_value(this.prdClcd);
        						this.edt_prdClcd.set_value(this.prdClcd);
        						this.ds_search.setColumn(0, "PRD_CLCD", this.prdClcd);
        						this.fn_callParentNotiItmId(this.prdClcd);	//부모창에 고시품목 전달
        						this.fn_callParentPrdClcd(this.prdClcd);    //부모창에 카테고리 상품군 전달
        						bExistsPrdClcd = true;
        					}
        				}
        				if(!bExistsPrdClcd && this.ds_category.rowcount==2){
        					this.fn_setDefaultCategory();
        				}

        			}else if(this.ds_category.rowcount==2){
        				this.fn_setDefaultCategory();
        			}
        			this.fn_attrInfo();

        			break;

        		case "categoryRegProcInfo":
        			if(this.ds_category.rowcount<=0){
        				this.grd_mroAttr.set_nodatatext("S-MRO카테고리와 맵핑된 SSP카테고리가 없습니다.");
        			}

        			this.ds_category.insertRow(0);
        			this.ds_category.setColumn(0, "CO_CD", "");
                    this.ds_category.setColumn(0, "PRD_CLCD", "");
                    this.ds_category.setColumn(0, "FULL_PRD_CLSF_NM", "선택");

        			if(!this.gfn_isNull(this.prdClcd)){
        				for(var i=0; i<this.ds_category.rowcount;i++){
        					if(this.ds_category.getColumn(i, "PRD_CLCD") == this.prdClcd){
        						this.cmb_category.set_value(this.prdClcd);
        						this.edt_prdClcd.set_value(this.prdClcd);
        						this.ds_search.setColumn(0, "PRD_CLCD", this.prdClcd);
        						this.fn_callParentNotiItmId(this.prdClcd);	//부모창에 고시품목 전달
        						this.fn_callParentPrdClcd(this.prdClcd);    //부모창에 카테고리 상품군 전달
        					}
        				}

        			}else if(this.ds_category.rowcount==2){
        				this.cmb_category.set_index(1);
        				this.edt_prdClcd.set_value(this.ds_category.getColumn(1, "PRD_CLCD"));
        				this.ds_search.setColumn(0, "PRD_CLCD", this.ds_category.getColumn(1, "PRD_CLCD"));
        				this.fn_callParentNotiItmId(this.ds_category.getColumn(1, "PRD_CLCD"));	//부모창에 고시품목 전달
        				this.fn_callParentPrdClcd(this.ds_category.getColumn(1, "PRD_CLCD"));   //부모창에 카테고리 상품군 전달
        				this.fn_callParentMroAttr(this.ds_category.getColumn(1, "PRD_CLCD"));
        			}
        			this.fn_attrRegProcInfo();

        			break;

        		case "attrInfo" :
        			if(this.pubOnlySprCd == '전용') {
        				var cnt = this.ds_sspAttr.rowcount;
        				for(var i=0; i<cnt; i++){
        					this.ds_sspAttr.setColumn(i, "MAND_YN","N");
        				}
        			}

        			if(!this.loaded){
        				this.originalPrdClcd = this.ds_sspAttr.getColumn(0, "PRD_CLCD");	//수정전 카테고리코드
        			}
        			var grpPrdYn = this.ds_sspAttr.getColumn(0, "GRP_PRD_YN");	//시리즈속성 상품여부
        			if(grpPrdYn == 'Y'){	//시리즈속성 상품일경우 카테고리 비활성(수정불가)
        				this.cmb_category.set_readonly(true);
        			}

        			this.loaded = true;

        			var delArr = this.ds_sspAttr.extractRowsNF("DEL_YN=='Y'");
        			this.ds_sspAttr.deleteMultiRows(delArr);

        			break;

        		case "attrRegProcInfo" :
        			if(this.pubOnlySprCd == '전용') {
        				var cnt = this.ds_sspAttr.rowcount;
        				for(var i=0; i<cnt; i++){
        					this.ds_sspAttr.setColumn(i, "MAND_YN","N");
        				}
        			}
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
        페이지타입 옵션 : edit:수정모드, readonly:읽기모드
        */
        this.cfn_read = function(svcID, params, callBackFunction, pageMode){
        	if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        		this.pubOnlySprCd = params.pubOnlySprCd;
        		//데이터 조회
        		this.fn_categoryInfo("categoryInfo");

        		//this.fn_mcndPrdYn(); //가격 대상 검색
        	}
        }

        //등록처리전용(상품추가메뉴 전용)
        this.cfn_regProcRead = function(svcID, params, callBackFunction, pageMode){
        	if(this.fn_init(svcID, params, callBackFunction, pageMode)){
        		this.pubOnlySprCd = params.pubOnlySprCd;
        		//데이터 조회
        		this.fn_categoryInfo("categoryRegProcInfo");
        	}
        }

        //데이터 적합성 체크. 이상없을시 true리턴(저장시 호출필요) type a:alert, b:boolean
        this.cfn_valiation = function(type) {
        	var result = true;
        	if(this.gfn_isNull(type)){
        		type = 'a';
        	}

        	if(this.gfn_isNull(this.cmb_category.value)){
        		if(type=='a'){
        			//alert('AM-BO-005 카레고리를 선택해 주세요');
        			alert(this.gfn_getMessage('ERRP000005'));
        			this.setFocus();
        			result = false;
        		}else if(type=='b'){
        			result = false;
        		}
        	}

        	if(result){
        		if(this.pubOnlySprCd == '공용'){
        			for(var i=0; i<this.ds_sspAttr.rowcount; i++){
        				var MAND_YN = this.ds_sspAttr.getColumn(i, "MAND_YN");
        				var PRVL = this.ds_sspAttr.getColumn(i, "PRVL");
        				if(MAND_YN=='Y' && this.gfn_isNull(PRVL)){
        					if(type=='a'){
        						//alert('AM-BO-003 필수 속성값을 입력해 주세요');
        						alert(this.gfn_getMessage('ERRP000003'));
        						this.setFocus();
        						result = false;
        						break;
        					}else if(type=='b'){
        						result = false;
        						break;
        					}
        				}
        			}

        		} else if (this.pubOnlySprCd == '전용') {
        			var cnt = this.ds_sspAttr.rowcount;
        			var chk = 0;
        			for(var i=0; i<cnt; i++){
        				this.ds_sspAttr.setColumn(i, "MAND_YN","N");
        				var PRVL = this.ds_sspAttr.getColumn(i, "PRVL");
        				if(this.gfn_isNull(PRVL)){
        					chk++;
        				}
        			}
        			if(chk == cnt){
        				alert('최소 1개 이상의 속성값을 입력해 주세요');
        				result = false;
        			}
        		}
        	}

        	return result;
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
        		'PRD_CLCD' : this.cmb_category.value,
        		'ASIS_PRD_CLCD' : this.originalPrdClcd,
        		'TOBE_PRD_CLCD' : this.ds_sspAttr.getColumn(0, "PRD_CLCD")
        	};

        	return returnObject;
        };

        //변경사유 세팅(부모창에서 데이터셋 복사시 변경프래그 반영안됨)
        this.cfn_setData = function() {
        	this.fn_setData();
        }

        //부모창에서 데이터셋 복사
        this.cfn_copyDataSet = function() {
        	if(this.fn_setData()){
        		return this.ds_sspAttr;
        	}
        }

        //저장	단독으로 저장버튼이 있을경우에만 쓰이므로 사용안함
        this.cfn_save = function() {
        	this.fn_setData();

        	if(this.fn_dataCheck(this.ds_sspAttr)){	//데이터 변경이 있을경우에만 저장
        		this.fn_save();
        	}
        };
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.fn_init = function(svcID, params, callBackFunction, pageMode) {
        	var paramArr = [{id:'coCd', name:'회사코드'}, {id:'prdId', name:'상품ID'}, {id:'mroPrdClcd', name:'S-MRO카테고리ID'}];
        	for(var i = 0; i<paramArr.length; i++){
        		if(this.gfn_isNull(params[paramArr[i]['id']])){
        			alert(this.titletext+' > 필수값 오류 > '+paramArr[i]['name']);
        			return false;
        		}
        	}
        	var coCd = params.coCd;
        	var prdId = params.prdId;
        	var mroPrdClcd = params.mroPrdClcd;
        	var prdClcd = params.prdClcd;
        	this.sSvcID = svcID;
        	this.fCallBackFn = callBackFunction;
        	this.pageMode = pageMode;

        	this.fn_setPageMode(pageMode);

        	this.prdClcd = prdClcd;	//빈값이 아닐경우 해당카테고리 기본셋팅
        	this.ds_search.setColumn(0, "CO_CD", coCd);
        	this.ds_search.setColumn(0, "PRD_ID", prdId);
        	this.ds_search.setColumn(0, "MRO_PRD_CLCD", mroPrdClcd);

        	return true;
        }

        this.fn_callParentNotiItmId = function(prdClcd){
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		//부모창에 고시품목 전달
        		var fRow = -1;
        		for(var i = 0; i<this.ds_category.rowcount; i++){
        			if(prdClcd == this.ds_category.getColumn(i, "PRD_CLCD")){
        				fRow = i;
        			}
        		}

        		var param = {
        			'NOTI_ITM_ID' : this.ds_category.getColumn(fRow, "NOTI_ITM_ID")
        		};
        		this.lookupFunc(this.fCallBackFn).call("sspCategorySelect", 0, '', param);
        	}
        }

        this.fn_callParentPrdClcd = function(prdClcd){
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		//부모창에 상품군 전달
        		var fRow = -1;
        		for(var i = 0; i<this.ds_category.rowcount; i++){
        			if(prdClcd == this.ds_category.getColumn(i, "PRD_CLCD")){
        				fRow = i;
        			}
        		}

        		var param = {
        			'PRD_CLCD' : this.ds_category.getColumn(fRow, "PRD_CLCD"),
        			'USE_YN'   : this.ds_category.getColumn(fRow, "USE_YN")
        		};
        		this.lookupFunc(this.fCallBackFn).call("sspAttr", 0, '', param);
        	}
        }

        this.fn_callParentOprtr = function(prdClcd){
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		//부모창에 MD/상품 담당자 전달
        		var fRow = -1;
        		for(var i = 0; i<this.ds_category.rowcount; i++){
        			if(prdClcd == this.ds_category.getColumn(i, "PRD_CLCD")){
        				fRow = i;
        			}
        		}

        		var param = {
        			'PRD_OPRTR_ID' : this.ds_category.getColumn(fRow, "PRD_OPRTR_ID"),
        			'PRD_OPRTR_NM' : this.ds_category.getColumn(fRow, "PRD_OPRTR_NM"),
        			'MD_OPRTR_ID' : this.ds_category.getColumn(fRow, "MD_OPRTR_ID"),
        			'MD_OPRTR_NM' : this.ds_category.getColumn(fRow, "MD_OPRTR_NM")
        		};
        		this.lookupFunc(this.fCallBackFn).call("oprtrInfo", 0, '', param);
        	}
        }

        this.fn_callParentMroAttr = function(prdClcd){
        	if(!this.gfn_isNull(this.fCallBackFn)){
        		//부모창에 상품군 전달
        		var fRow = -1;
        		for(var i = 0; i<this.ds_category.rowcount; i++){
        			if(prdClcd == this.ds_category.getColumn(i, "PRD_CLCD")){
        				fRow = i;
        			}
        		}

        		var param = {
        			'PRD_CLCD' : this.ds_category.getColumn(fRow, "PRD_CLCD")
        		};
        		this.lookupFunc(this.fCallBackFn).call("mroAttrReload", 0, '', param);
        	}
        }

        //페이지 모드 설정(readonly:읽기전용, edit:수정모드)
        this.fn_setPageMode = function(pageMode){
        	if(pageMode == 'readonly'){
        		this.cmb_category.set_readonly(true);
        		this.grd_mroAttr.set_readonly(true);
        	}else if(pageMode == 'edit'){
        		this.cmb_category.set_readonly(false);
        		this.grd_mroAttr.set_readonly(false);
        	}
        }

        this.fn_setData = function(){
        	this.ds_search.setColumn(0, "ASIS_PRD_CLCD", this.originalPrdClcd);	                    //변경전 카테고리
        	this.ds_search.setColumn(0, "TOBE_PRD_CLCD", this.ds_sspAttr.getColumn(0, "PRD_CLCD"));	//변경후 카테고리

        	this.ds_sspAttrReturn.clearData();
        	this.ds_sspAttrReturn.copyData(this.ds_sspAttr, true);

        	var j = 0;
        	var rowcnt = this.ds_sspAttr.getRowCount() + this.ds_sspAttr.getDeletedRowCount();
        	for(var i=0; i<rowcnt; i++){
        		if(i<this.ds_sspAttr.getRowCount()){
        			var rowType = this.ds_sspAttr.getRowType(i);
        			var newtype = rowType==1?0:rowType==2?1:rowType==4?2:rowType==8?3:0;
        			this.ds_sspAttrReturn.setColumn(i, "DataSetRowType2", newtype);

        		}else{
        			//삭제건 존재시 세팅
        			var cocd = this.ds_sspAttr.getDeletedColumn(j, "CO_CD");
        			var attrcd = this.ds_sspAttr.getDeletedColumn(j, "PRD_ATTR_CD");
        			var prdid = this.ds_sspAttr.getDeletedColumn(j, "PRD_ID");

        			this.ds_sspAttrReturn.insertRow(i);
        			this.ds_sspAttrReturn.setColumn(i, "CO_CD", cocd);
        			this.ds_sspAttrReturn.setColumn(i, "PRD_ATTR_CD", attrcd);
        			this.ds_sspAttrReturn.setColumn(i, "PRD_ID", prdid);
        			this.ds_sspAttrReturn.setColumn(i, "DataSetRowType2", 3);
        			j = j+1;
        		}
        	}

        	return true;
        }

        this.fn_setDefaultCategory = function(){
        	this.cmb_category.set_index(1);
        	this.edt_prdClcd.set_value(this.ds_category.getColumn(1, "PRD_CLCD"));
        	this.ds_search.setColumn(0, "PRD_CLCD", this.ds_category.getColumn(1, "PRD_CLCD"));
        	this.fn_callParentNotiItmId(this.ds_category.getColumn(1, "PRD_CLCD"));	//부모창에 고시품목 전달
        }

        this.fn_dataCheck = function(dataset) {
        	for(var i=0; i < dataset.rowcount; i++){
        		var sRowType = dataset.getRowType(i);
        		if( sRowType == 2 || sRowType == 4 ){
        			return true;
        		}
        	}
        	if(dataset.getDeletedRowCount() > 0){
        		return true;
        	}
        	return false;
        }

        this.fn_lenChk = function(a, b, max){
        	var totalByte = 0;
        	for (var i = 0; i < b.length; i++) {
        		var oneChar = b.charAt(i);
        		if (escape(oneChar).length > 4) {
        			totalByte = totalByte + 3;
        		} else {
        			totalByte = totalByte + 1;
        		}
        	}

        	if(totalByte > max){
        		alert('속성값은 한글30자, 영문90자까지 입력 가능합니다.');
        		return a;
        	}else{
        		return b;
        	}
        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/

        //카테고리 상품군 변경 시
        this.cmb_category_onitemchanged = function(obj,e)
        {
        	if(this.ds_category.getColumn(obj.index, 'MCND_PRD_YN') == 'Y' && this.ds_category.getColumn(obj.index,'PRC_APLY_SPR_CD') =='20' ) {
        		alert('미끼상품은 시황자재 상품군을 선택할 수 없습니다.')
        		this.ds_search.setColumn(0, "PRD_CLCD", e.preindex);
        		this.edt_prdClcd.set_value(e.prevalue);
        		this.cmb_category.set_value(e.prevalue);
        	} else {
        		this.ds_search.setColumn(0, "PRD_CLCD", obj.value);
        		this.fn_attrInfo();
        		this.edt_prdClcd.set_value(obj.value);
        		this.fn_callParentNotiItmId(obj.value);
        		this.fn_callParentPrdClcd(obj.value);
        		this.fn_callParentOprtr(obj.value);
        		this.fn_callParentMroAttr(obj.value);
        	}
        };

        this.ds_sspAttr_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'PRVL'){
        		this.ds_sspAttr.setColumn(e.row, "PRVL", this.fn_lenChk(e.oldvalue, e.newvalue, 90));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.cmb_category.addEventHandler("onitemchanged",this.cmb_category_onitemchanged,this);
            this.ds_sspAttr.addEventHandler("oncolumnchanged",this.ds_sspAttr_oncolumnchanged,this);
        };
        this.loadIncludeScript("SSP_BO_PA_03_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
