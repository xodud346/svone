(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvplcRegistPopup");
            this.set_titletext("배송지 등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dlvplc", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UT_AGRE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_DLVPLC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ZPCD\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HP_NO\"/><Col id=\"BASIS_DLVPLC_YN\">Y</Col><Col id=\"TEL_NO\"/><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("search_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mbrOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basisYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"NAME\">기본 배송지</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"NAME\">추가 배송지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","15","48","470","400",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("2px solid #000000,1px,1px solid");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("사업장");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","41","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("운영단위");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("BZPLC_NM","131","8","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_enableevent("true");
            obj.set_inputtype("normal");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("OPR_UNIT_NM","131","43","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","76","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","111","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("회원 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("DEPT_NM","131","78","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("MBR_NM","131","113","303","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_enableevent("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","146","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("배송지 유형");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","181","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("수령인명 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("RCVR_NM","130","183","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","216","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("우편번호 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","0","251","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("ZPCD","130","218","137","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("REPR_ADDR","130","253","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","0","286","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("상세주소 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00","0","321","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("휴대폰번호*");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("DTL_ADDR","130","288","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("HP_NO","130","323","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_inputtype("digit");
            obj.set_maxlength("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00_00_00","0","356","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("BASIS_DLVPLC_YN","130","147","263","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_basisYn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("1");
            obj.set_text("기본 배송지");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("TEL_NO","130","359","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_inputtype("digit");
            obj.set_maxlength("20");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","21","8","182","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("배송지 관리");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","151","461","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","254","461","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","452","163","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","286","268","34","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,510,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div01.form.BASIS_DLVPLC_YN","value","ds_dlvplc","BASIS_DLVPLC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div01.form.RCVR_NM","value","ds_dlvplc","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div01.form.ZPCD","value","ds_dlvplc","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div01.form.REPR_ADDR","value","ds_dlvplc","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div01.form.DTL_ADDR","value","ds_dlvplc","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div01.form.HP_NO","value","ds_dlvplc","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div01.form.TEL_NO","value","ds_dlvplc","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div01.form.MBR_NM","value","ds_dlvplc","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_14.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_14.xfdl","OD::odUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_14.xfdl","CC::CcUtils.xjs");
        this.registerScript("SSP_BO_MA_14.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배송지 등록
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "회원"     , "id" : "MBR_NM"}
        	  ,{"name" : "우편번호", "id" : "ZPCD"}
        	  ,{"name" : "수령인명", "id" : "RCVR_NM"}
        	  ,{"name" : "상세주소", "id" : "DTL_ADDR"}
        	  ,{"name" : "연락처 1", "id" : "HP_NO"}
        ];

        //부모창에서 넘긴 파라미터
        var mbrId = this.parent.mbrId;
        var mbrNm = this.parent.mbrNm;
        this.fv_sessionData = this.getSession(); //session object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//회원정보 조회
        	if(mbrId != ''){
        		this.fn_search();
        	}

        	// 단축키 등록
        	this.fn_regShortCutMethod();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //등록
        this.fn_regist = function() {
        	this.ds_dlvplc.setColumn(0, "CO_CD", this.fv_sessionData.coCd);
        	var validation = this.fn_validationForm(this.Div01, this.valiFormIds, this.ds_dlvplc);
        	if(validation){
        		// SSP-1116 배송지 수령인명 45byte 제한 처리
        		var utAgreYn = this.ds_dlvplc.getColumn(0, 'UT_AGRE_YN');
        		if( utAgreYn!="Y"){
        			alert(this.fn_getMessage("ERRC000281")); //이용약관 동의 후 배송지 등록 바랍니다.
        			return false;
        		}

        		var rcvrNm = this.ds_dlvplc.getColumn(0, 'RCVR_NM'); // 수령인명
        		if ( this.getByteLength(rcvrNm) > 45 ) {
        			alert(this.fn_getMessage("ERRC000277")); // 수령인명 최대입력길이는 45바이트 입니다.
        			return false;
        		}

        		if(this.ds_dlvplc.getColumn(0, 'HP_NO').length < 7){
        			alert('연락처는 최소 7자리 이상 입력해야합니다.');
        			return false;
        		}

        		if(this.ds_dlvplc.getColumn(0, 'TEL_NO') != null && this.ds_dlvplc.getColumn(0, 'TEL_NO') != ''){
        			if(this.ds_dlvplc.getColumn(0, 'TEL_NO').length < 7){
        				alert('연락처는 최소 7자리 이상 입력해야합니다.');
        				return false;
        			}
        		}


        		var sSvcId = "dlvplcRegist";
        		var sUrl = "/bo/cc/cust/dvlplc/insert-dvplc-info.do";
        		var inDs = "ds_dlvplc=ds_dlvplc";
        		var outDs = "";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }

        this.fn_search = function() {

        	this.search_ds.setColumn(0,"MBR_ID",mbrId);
        	this.search_ds.setColumn(0,"MBR_NM",mbrNm);

        	var sSvcId = "dlvplcSearch";
        	var sUrl = "/bo/cc/cust/dvlplc/select-mbr-info.do";
        	var inDs = "search_ds=search_ds";
        	var outDs = "ds_mbrOutput=ds_mbrOutput";
        	var arg = "";
        	var callback = "fn_sarchCallBack";

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);

        }
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function()
        {
        	//alert("등록되었습니다.");
        	alert(this.fn_getMessage("ERRC000028"));
        	this.close();
        	this.opener.fn_doSearch(0);
        }
        //팝업 콜백
        this.fn_searchMultiPopupCallback = function(objID, rtnValue)
        {
        	if(rtnValue != undefined){
        		//회원팝업 콜백
        		if(objID == 'Button01'){
        			var resParam = JSON.parse(rtnValue);

        			this.Div01.form.BZPLC_NM.set_value(resParam.BZPLC_NM);
        			this.Div01.form.OPR_UNIT_NM.set_value(resParam.OPR_UNIT_NM);
        			this.Div01.form.DEPT_NM.set_value(resParam.DEPT_NM);
        			this.Div01.form.MBR_NM.set_value(resParam.MBR_NM);

        			this.ds_dlvplc.setColumn(0, "MBR_ID", resParam.MBR_ID);	//데이터셋(ds_dlvplc.MBR_ID)에 매핑
        			this.ds_dlvplc.setColumn(0, "UT_AGRE_YN", resParam.UT_AGRE_YN);
        		}

        		//우편번호팝업 콜백
        		if(objID == 'Button02'){
        			var resParam = JSON.parse(rtnValue);

        			this.Div01.form.ZPCD.set_value(resParam.ZIP_NO);
        			this.Div01.form.REPR_ADDR.set_value(resParam.ADDR);

        		}
        	}
        }
        //회원조회 콜백
        this.fn_sarchCallBack = function()
        {
        	this.Div01.form.BZPLC_NM.set_value(this.ds_mbrOutput.getColumn(0,"BZPLC_NM"));			//사업장
        	this.Div01.form.OPR_UNIT_NM.set_value(this.ds_mbrOutput.getColumn(0,"OPR_UNIT_NM"));	//운영단위
        	this.Div01.form.DEPT_NM.set_value(this.ds_mbrOutput.getColumn(0,"DEPT_NM"));			//부서
        	this.Div01.form.MBR_NM.set_value(this.ds_mbrOutput.getColumn(0,"MBR_NM"));				//회원명

        	this.ds_dlvplc.setColumn(0, "MBR_ID", this.ds_mbrOutput.getColumn(0, "MBR_ID"));		//등록 데이터셋에 회원아이디 바인딩

        }
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        /************************************************************************
         *  폼 필수값 체크
         *  obj : div 객체
         *  objIds : 필수값 체크할 id, name (  [{"name" : "분류코드", "id" : "COM_CLSF_CD"}] )
         *  dataset : 검증할 데이터셋
         ************************************************************************/
        this.fn_validationForm = function(obj, objIds, dataset) {
        	var object = obj.form.all;
        	for( var i = 0; i < object.length; i++ ){
        		var stype = object[i].valueOf();

        		for( var idx in objIds ) {
        			var id = objIds[idx].id;
        			var name = objIds[idx].name;
        			var txt = '은(는) 필수 입력항목입니다.';
        			if( object[i].id == id ) {
        				if( stype == "[object Edit]") {
        					var value = dataset.getColumn(dataset.rowposition, id);

        					var originValue = dataset.getOrgColumn(dataset.rowposition, id);

        					if( this.gfn_isNull(value) ) {
        						alert( name + txt);
        						obj.form[id].setFocus();
        						if( stype == "[object Combo]" ) {
        							obj.form[id].dropdown();
        						}
        						return false;
        					}
        				}

        				if(stype == "[object Combo]") {
        					var value = dataset.getColumn(dataset.rowposition, id);

        					var originValue = dataset.getOrgColumn(dataset.rowposition, id);

        					if( value == '' ) {
        						alert( name + txt);
        						obj.form[id].setFocus();
        						if( stype == "[object Combo]" ) {
        							obj.form[id].dropdown();
        						}
        						return false;
        					}
        				}
        			}
        		}
        	}
        	return true;
        }

        // 창닫기
        this.fn_closeForm = function() {
        	this.close();
        };

        // 단축키 등록
        this.fn_regShortCutMethod = function() {
        	this.fn_regMethodESC("fn_closeForm");
        };
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	//if(this.confirm("등록하시겠습니까?")){this.fn_regist();}
        	if(this.confirm(this.fn_getMessage("ERRC000029"))){this.fn_regist();}
        };
        //회원 검색버튼
        this.Button01_onclick = function(obj,e)
        {
        	var params = { coCd : '1000' };
        	var options = {};
        	if(e.fromobject.id == 'Button01'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_24.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	//if(e.fromobject.id == 'Button01'){ this.gfn_openPopup(e.fromobject.id, "CC::clientSinglePopup.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        };
        //우편번호 검색버튼
        this.Button02_onclick = function(obj,e)
        {
        	var params = {};
        	var options = {};
        	this.gfn_openPopup(e.fromobject.id, "CO_POP::SSP_BO_PP_28.xfdl", params,  "fn_searchMultiPopupCallback", options);
        };
        //취소버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//if(this.confirm("취소하시겠습니까?")){this.close();}
        	this.close();
        };
        this.dlvplcRegistPopup_onkeyup = function(obj,e)
        {
        	this.fn_processKey(obj, e);
        };

        this.Div01_Static00_01_00_00_00_00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcRegistPopup_onkeyup,this);
            this.Div01.form.RCVR_NM.addEventHandler("onchanged",this.Div01_edt_pgmId00_00_00_onchanged,this);
            this.Div01.form.Static00_01_00_00_00_00_00.addEventHandler("onclick",this.Div01_Static00_01_00_00_00_00_00_onclick,this);
            this.Div01.form.BASIS_DLVPLC_YN.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
