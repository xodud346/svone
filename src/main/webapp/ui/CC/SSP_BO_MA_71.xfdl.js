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
            this.set_titletext("계정신규생성 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctTpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctLvl", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCT_LVL\"/><Col id=\"ACCT_LVL_NM\">상위 계정을 선택하세요.</Col></Row><Row><Col id=\"ACCT_LVL\">1</Col><Col id=\"ACCT_LVL_NM\">1</Col></Row><Row><Col id=\"ACCT_LVL\">2</Col><Col id=\"ACCT_LVL_NM\">2</Col></Row><Row><Col id=\"ACCT_LVL\">3</Col><Col id=\"ACCT_LVL_NM\">3</Col></Row><Row><Col id=\"ACCT_LVL\">4</Col><Col id=\"ACCT_LVL_NM\">4</Col></Row><Row><Col id=\"ACCT_LVL\">5</Col><Col id=\"ACCT_LVL_NM\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acct", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACCT_TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RMKS_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"HRNK_ACCT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_res", this);
            obj._setContents("<ColumnInfo><Column id=\"SUCCESS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","15","48","470","192",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("2px solid #000000,1px,1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("계정유형");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","41","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("계정명 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("ACCT_NM","131","43","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","76","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("계정 코드");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","111","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("계정 레벨 *");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("ACCT_CD","131","78","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_enableevent("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("HRNK_ACCT_NM","131","149","303","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","146","123","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("상위 계정명");
            obj.set_textAlign("center");
            obj.set_background("#d8d8d8");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("ACCT_TP_CD","130","7","263","35",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_rowcount("1");
            obj.set_innerdataset("ds_acctTpCd");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("일반");
            obj.set_value("1");
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("ACCT_LVL","131","113","336","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_acctLvl");
            obj.set_codecolumn("ACCT_LVL");
            obj.set_datacolumn("ACCT_LVL_NM");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            obj.set_text("선택하세요.");
            obj.set_value("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","21","8","182","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계정생성");
            obj.set_font("bold 14pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","157","250","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","260","250","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","456","203","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,290,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div01.form.ACCT_TP_CD","value","ds_acct","ACCT_TP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div01.form.ACCT_NM","value","ds_acct","ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div01.form.ACCT_CD","value","ds_acct","ACCT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div01.form.ACCT_LVL","value","ds_acct","ACCT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div01.form.HRNK_ACCT_NM","value","ds_acct","HRNK_ACCT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_71.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_71.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_71.xfdl", function() {
        /*******************************************************
        PROJECT NAME : 배송지 등록
        CREATION DATES : 2021.01.19
        *******************************************************/
        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
        * Form 변수 선언 영역
        ************************************************************************************************/
        this.valiFormIds = [
        	   {"name" : "계정명"     , "id" : "ACCT_NM"}
        	  ,{"name" : "계정레벨"   , "id" : "ACCT_LVL"}
        	  ,{"name" : "계정유형"   , "id" : "ACCT_TP_CD"}
        ];

        //부모창에서 넘긴 파라미터
        //var mbrId = this.parent.mbrId;
        //var mbrNm = this.parent.mbrNm;

        this.CO_CD     = "";
        this.BZPLC_ID     = "";
        this.BZPLC_NM     = "";
        this.ACCT_LVL     = "";
        this.HRNK_ACCT_ID = "";
        this.HRNK_ACCT_NM = "";
        this.ACCT_TP_CD   = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//공통 코드 호출
        	this.fn_commonCodeSearch();	//계정유형 코드 호출안됨 확인후 다시 추가예정 2022-02-17

        	this.CO_CD     = this.parent.coCd;
        	this.BZPLC_ID     = this.parent.bzplcId;
        	this.BZPLC_NM     = this.parent.bzplcNm;
        	this.ACCT_LVL     = this.parent.acctLvl;
        	this.HRNK_ACCT_ID = this.parent.hrnkAcctId;
        	this.HRNK_ACCT_NM = this.parent.hrnkAcctNm;
        	this.ACCT_TP_CD   = this.parent.acctTpCd;

        	//화면 초기화 함수
        	this.fn_init();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function()
        {
        	var sSvcId = "commonCodeSearch";
        	var sUrl   = "/co/select-common-code-list.do";
        	var inDs   = "ds_search=ds_search";
        	var outDs  = "ds_acctTpCd=ds_output1";
        	var arg    = "";

        	this.ds_search.setColumn(0, "codeList", "ACCT_TP_CD");
        	this.ds_search.setColumn(0, "langCd", "KO");
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };
        //계정 등록
        this.fn_regist = function()
        {
        	var validation = this.fn_validationForm(this.Div01, this.valiFormIds, this.ds_acct);
        	if(validation){
        		//사업장 ID
        		this.ds_acct.setColumn(0, "CO_CD", this.CO_CD);
        		this.ds_acct.setColumn(0, "BZPLC_ID", this.BZPLC_ID);

        		trace("CO_CD  " + this.CO_CD);
        		var sSvcId = "insertAcctBasis";
        		var sUrl   = "/cc/acct/insertAcctBasis.do";
        		var inDs   = "ds_acct=ds_acct";
        		var outDs  = "ds_res=ds_output";
        		var arg    = "";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	}

        };
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}

        	switch(svcID)
        	{
        	case "commonCodeSearch":						//공통코드 조회
        		if( this.ACCT_TP_CD != null && this.ACCT_TP_CD != '' && this.ACCT_TP_CD != undefined ){
        			this.Div01.form.ACCT_TP_CD.set_index(this.ACCT_TP_CD-1);	//공통코드 계정유형 일반으로 기본세팅
        		}else{
        			this.Div01.form.ACCT_TP_CD.set_index(0);	//공통코드 계정유형 일반으로 기본세팅
        		}
        		break;
        	case "insertAcctBasis":
        		if(this.ds_res.getColumn(0, "SUCCESS_YN") == "Y"){
        			alert(this.ds_res.getColumn(0, "RETURN_MSG"));
        			this.opener.fn_treeSearch();
        			this.close();
        		}else{
        			alert(this.ds_res.getColumn(0, "RETURN_MSG"));
        		}
        		break;
        	default:
        		break;
        	}
        };
        //팝업 콜백함수
        this.fn_popupCallback = function(objID, rtnValue)
        {
        	if(rtnValue == undefined){return false;}

        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'Button01'){
        		this.ds_acct.setColumn(0, "HRNK_ACCT_NM", resParam.ACCT_NM);
        		this.ds_acct.setColumn(0, "HRNK_ACCT_ID", resParam.ACCT_ID);
        		this.Div01.form.ACCT_LVL.set_index(resParam.A_LVL.hi+1);
        		this.ds_acct.setColumn(0, "ACCT_LVL", resParam.A_LVL.hi+1);
        	}
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
        //초기화 함수
        this.fn_init = function()
        {
        	if (this.gfn_isNull(this.ACCT_LVL)){
        		this.Div01.form.ACCT_LVL.set_index(0);
        		this.ds_acct.setColumn(0, "ACCT_LVL", "");
        	} else if (this.ACCT_LVL == '0') {
        		this.ds_acct.setColumn(0, "ACCT_LVL", "1");
        		this.Div01.form.ACCT_LVL.set_index(1);
        	} else {
        		this.Div01.form.ACCT_LVL.set_index((this.ACCT_LVL*1)+1          );
        		this.ds_acct.setColumn(0, "ACCT_LVL"    , (this.ACCT_LVL*1)+1   );
        		this.ds_acct.setColumn(0, "HRNK_ACCT_ID", this.HRNK_ACCT_ID     );
        		this.ds_acct.setColumn(0, "HRNK_ACCT_NM", this.HRNK_ACCT_NM     );
        		this.ds_acct.setColumn(0, "ACCT_TP_CD"  , this.ACCT_TP_CD       );
        		this.Div01.form.ACCT_TP_CD.set_enable(false);
        	}

        }
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //돋보기 버튼
        this.Button01_onclick = function(obj,e)
        {
        	//레벨이 1인 경우 상위 계정이 없으므로 팝업을 열지 않는다.
        	if(this.ds_acct.getColumn(0, "ACCT_LVL") == '1'){
        		//alert("계정레벨 1의 경우 상위 계정 조회가 불가합니다.");
        		alert(this.fn_getMessage("ERRC000019"));
        		return false;
        	}else if(this.ds_acct.getColumn(0, "ACCT_LVL") == ''){
        		var params = { bzplcId : this.BZPLC_ID
        					 , coCd : this.CO_CD
        					 , underAcctSearch : "Y"
        					 , acctTpCd : this.ds_acct.getColumn(0, "ACCT_TP_CD")
        					 };
        	}else{
        		var params = { bzplcId : this.BZPLC_ID
        					 , coCd : this.CO_CD
        					 , acctLvl : this.ds_acct.getColumn(0, "ACCT_LVL")
        					 , minusYn : "Y"
        					 , acctTpCd : this.ds_acct.getColumn(0, "ACCT_TP_CD")
        					 };
        	}

        	var options = { };

        	this.gfn_openPopup(e.fromobject.id, "CC::SSP_BO_MA_75.xfdl", params,  "fn_popupCallback", options);
        };
        //등록 버튼
        this.insert_btn_onclick = function(obj,e)
        {
        	if(this.ds_acct.getColumn(0, "ACCT_TP_CD") == null ){
        		alert('계정유형을 선택 해주세요.');
        		return false;
        	}
        	if(this.gfn_trim(this.ds_acct.getColumn(0, "ACCT_NM")).length == 0 ){
        		alert('계정명을 입력 해주세요.');
        		return false;
        	}
        	//if(this.confirm("등록하시겠습니까?")){this.fn_regist();}
        	if(this.confirm(this.fn_getMessage("ERRC000080"))){this.fn_regist();}
        };
        //취소 버튼
        this.btn_clear_onclick = function(obj,e)
        {
        	//if(this.confirm("취소하시겠습니까?")){this.close();}
        	this.close();
        };
        //계정레벨 ONCHANGE
        this.fn_itemChg = function(obj,e)
        {
        	this.ds_acct.setColumn(0, "HRNK_ACCT_ID", null);
        	this.ds_acct.setColumn(0, "HRNK_ACCT_NM", null);
        	this.ds_acct.setColumn(0, "ACCT_LVL", obj.value)
        };

        this.dlvplcRegistPopup_onkeyup = function(obj,e)
        {
        	//ESC : 닫기기능
        	if(e.keycode == 27){
        		this.close();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.dlvplcRegistPopup_onkeyup,this);
            this.Div01.form.ACCT_TP_CD.addEventHandler("onitemchanged",this.Div01_o_onitemchanged,this);
            this.Div01.form.ACCT_LVL.addEventHandler("onitemchanged",this.fn_itemChg,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_71.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
