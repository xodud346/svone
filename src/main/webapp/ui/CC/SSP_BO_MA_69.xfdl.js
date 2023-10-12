(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_69");
            this.set_titletext("운영단위 입고 책임자 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByoprunitGiChrpsn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBydeptGiChrpsn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lblBzplc","10","12","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업장");
            this.addChild(obj.name, obj);

            obj = new Static("txtBzplcInfo","140","12",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lblOprunit","10","44","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("txtOprunitInfo","140","44",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("lblOpuGi","10","75","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입고 책임자");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("txtOprunitInfo00","140","75",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","325","145","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btnCncl","250","145","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOpuGiIds","147","79","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOpuGiNms","360","79","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiPrsnGi","576","79","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_multi");
            this.addChild(obj.name, obj);

            obj = new Button("btnMultiTextGi","601","79","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",640,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("biOpuGiIds","edtOpuGiIds","value","dsByoprunitGiChrpsn","GI_CHRPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("biOpuGiNms","edtOpuGiNms","value","dsByoprunitGiChrpsn","GI_CHRPSN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_69.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_69.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_69.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_69.xfdl", function() {
        /*******************************************************
          PROJECT  NAME  : SSP
          PROGRAM  NAME  : CC [SSP_BO_MA_69] 운영단위 입고 책임자 설정
          CREATION DATES : 2022.03.08
          CREATER        : 박성근
        *******************************************************/

        // 공통형 스크립트 인클루드
        this.executeIncludeScript("CO::coUtils.xjs"); /*include "CO::coUtils.xjs"*/;
        this.executeIncludeScript("CC::CcUtils.xjs"); /*include "CC::CcUtils.xjs"*/;
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        this.fv_oApp = nexacro.getApplication();	//application object

        this.extParamKeys = [ 'coCd', 'bzplcId', 'bzplcNm', 'oprUnitId', 'oprUnitNm' ];
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onLoad = function(obj,e) {
        	this.gfn_formOnLoad(this);  //공통 함수 호출(필수)

        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnSelectGiChrspnInfo=function() {
        	trace('this.fnSrchGiChrspnInfo()');

        	var sSvc  = 'selectGiChrspnInfo';
        	var sUrl  = '/bo/cust/oprunit/gi/chrpsn.do';
        	var inDs  = 'dsParam=dsParam';
        	var outDs = 'dsByoprunitGiChrpsn=dsByoprunitGiChrpsn dsBydeptGiChrpsn=dsBydeptGiChrpsn'  ;
        	var arg   = '';

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSelectGiChrspnInfoClbk');
        }

        this.fnSaveGiChrspnInfo=function() {
        	trace('this.fnSaveGiChrspnInfo()');

        	var sSvc  = 'saveGiChrspnInfo';
        	var sUrl  = '/bo/cust/oprunit/gi/chrpsn/save.do';
        	var inDs  = 'dsParam=dsParam dsByoprunitGiChrpsn=dsSaveByoprunitGiChrpsn';
        	var outDs = '';
        	var arg   = '';

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSaveGiChrspnInfoClbk');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 공통코드 조회 콜백
        this.fnCcComCodesClbk=function(rCodes, rCode, rMesg) {
        	trace('this.fnCcComCodesClbk() >>' + rCodes);
         	trace('this.fnCcComCodesClbk[ this.dsParam:'+ this.dsParam +']');
        }

        // 입고 책임자 조회 콜백
        this.fnSelectGiChrspnInfoClbk = function(rCodes, rCode, rMesg) {
        	trace('this.fnSelectGiChrspnInfoClbk(rCodes:'+rCodes+', rCode:'+rCode+', rMesg:'+rMesg+')');
        	if (this.dsByoprunitGiChrpsn.rowcount < 1) {
        		var dsNm='dsByoprunitGiChrpsn', cols=['CO_CD', 'BZPLC_ID', 'OPR_UNIT_ID', 'GI_CHRPSN_ID', 'GI_CHRPSN_NM'];
        		var ds=new Dataset(dsNm);
        		for(var i in cols) { ds.addColumn(cols[i], 'String'); }
        		var nIdx=ds.addRow();
        		for(var i in cols) { // parameter to dataset
        			var colNm=cols[i], colNmCamel=this.cnvtUS2CC(colNm);
        			var pVal=this.dsParam.getColumn(0, colNmCamel);
        			if (pVal!=undefined) {
        				ds.setColumn(nIdx, colNm, pVal);
        			}
        		}
        		this.dsByoprunitGiChrpsn = ds;

        		var rbldBinds=[
        			{ bindId: 'biOpuGiIds', cpntId: 'edtOpuGiIds', cpntProp: 'value', dsId: 'dsByoprunitGiChrpsn', dsCol: 'GI_CHRPSN_ID' },
        			{ bindId: 'biOpuGiNms', cpntId: 'edtOpuGiNms', cpntProp: 'value', dsId: 'dsByoprunitGiChrpsn', dsCol: 'GI_CHRPSN_NM' },
        		];
        		for (var i in rbldBinds) {  // 기존 바인딩 제거
        			var cBI=rbldBinds[i], oBI=this.binds[cBI.bindId];
        			if (oBI!=undefined) {
        				var cpick=this.removeChild( cBI.bindId );
        				cpick.destroy();
        			};
          		}
          		for (var i in rbldBinds) {  // 신규 바인딩 추가
        			var cBI=rbldBinds[i], nBi=new BindItem();
        			nBi.init(cBI.bindId, cBI.cpntId, cBI.cpntProp, cBI.dsId, cBI.dsCol);
        			this.addChild(cBI.bindId, nBi);
        			nBi.bind();
        		}

        	}
        	trace(' >> [BindItem - this.biOpuGiIds : '+ this.biOpuGiIds +']');
        	trace(' >> [ds:'+ this.dsByoprunitGiChrpsn.id +':'+ this.dsByoprunitGiChrpsn +':'+ this.dsByoprunitGiChrpsn.rowcount +']');
        }

        this.fnSaveGiChrspnInfoClbk = function(rCodes, rCode, rMesg) {
        	trace('this.fnSaveGiChrspnInfoClbk(rCodes:'+rCodes+', rCode:'+rCode+', rMesg:'+rMesg+')');
        	if (rCode != 0) { return; }

        	alert('저장하였습니다.');
        	this.close();
        }


        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	//trace('this.cfn_formInit() > [refCdGrpNm:'+ this.parent['refCdGrpNm'] +']');

        	// Parent Parameter 생성
        	if (this.parent != undefined) {
        		var p={ startNum: 0, rowCount: 20, giChrpsnType: 'OPU' };

        		for (var i in this.extParamKeys) {
        			var k=this.extParamKeys[i], v=this.parent[k];  //trace('ext['+ k +':'+ v +']');
        			p[k]=v;
        			this.dsParam.setColumn(0, k, v);
        		}
        		if (p.bzplcNm   != undefined) { p['bzplcInf'  ]=p.bzplcId   +' | '+ p.bzplcNm  ; this.txtBzplcInfo  .set_text(p.bzplcInf  ); }
        		if (p.oprUnitNm != undefined) { p['oprUnitInf']=p.oprUnitId +' | '+ p.oprUnitNm; this.txtOprunitInfo.set_text(p.oprUnitInf); }

        		this.cnvtObject2Dataset('dsParam', p);  // trace('  p >>> '+ JSON.stringify(p));
        		this.fnSelectGiChrspnInfo();
        	}
        };

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        this.testCtlAuth=function() {
        	this.cnvtObject2Dataset('dsParam', { coCd: '1000', bzplcId: 'S000013507', oprUnitId: 'S000013644' });
        	this.fnSelectCtlAuthDtl();
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.infDsModRow = { row: null, id: null, nm: null };

        //
        this.btnMultiMbrGi_onclick = function(obj,e) {
        	this.infDsModRow = { row: 0, id: this.edtOpuGiIds, nm: this.edtOpuGiNms };

        	var popParam={ giAuthUseYn: 'Y' }, aProp=[ 'coCd', 'bzplcId', 'oprUnitId' ];
        	for (var i in aProp) { var prop=aProp[i]; popParam[prop]=this.dsParam.getColumn(0, prop); }

        	/*
        	this.$popup(this).mMbr (popParam, function(rID, rJson){  // this.edtOpuGiIds.id, { textId : this.edtOpuGiIds, giAuthUseYn: 'Y' }, 'fnMultiMbrClbk');
        		if (undefined==rJson) { return; }  trace("rJson: "+ rJson);

        		var oJson=JSON.parse(rJson), sIDs='', sNMs='';  trace('[oJson.length:'+ oJson.length +']');
        		for (var j in oJson) {  // trace('[typeof oJson[j]"'+ (typeof oJson[j]) +']'+ oJson[j]);
        			var sRow=oJson[j], oRow=JSON.parse(sRow);
        			sIDs += (sIDs==''?'':',')+oRow['MBR_ID'];
        			sNMs += (sNMs==''?'':',')+oRow['MBR_NM'];
        		}

        		var ds=this.dsByoprunitGiChrpsn;
        		trace('[sIDs:'+ sIDs +'][sNMs:'+ sNMs +'][ds:'+ ds.id +':'+ ds +':'+ ds.rowcount +']');

        		if (ds.rowcount < 1) { trace('addRow()'); ds.addRow(); }
        		trace('addRow after ('+ (ds.rowcount < 1) +') > [this.dsByoprunitGiChrpsn.rowcount:'+ ds.rowcount +']');

        		ds.setColumn(0, 'GI_CHRPSN_ID', sIDs);
        		ds.setColumn(0, 'GI_CHRPSN_NM', sNMs);
        		trace('[GI_CHRPSN_ID:'+ (ds.getColumn(0, 'GI_CHRPSN_ID')) +'][GI_CHRPSN_NM:'+ (ds.getColumn(0, 'GI_CHRPSN_NM')) +']');
        	});
        	*/
        	this.gfn_openPopup('', 'CC::SSP_BO_PP_25_1.xfdl', popParam, function(sPopupId, sRetValue) {
        		const cmpObj = JSON.parse(sRetValue);
        		var sIdList = '';
        		var sNmList = '';
        		for(var i=0; i<cmpObj.length; i++){
        			var rowData = JSON.parse(cmpObj[i]);
        			if(i == (cmpObj.length-1)){
        				sIdList += rowData.MBR_ID;
        				sNmList += rowData.MBR_NM;
        			}else{
        				sIdList += rowData.MBR_ID +',';
        				sNmList += rowData.MBR_NM +',';
        			}
        		}
        		var ds=this.dsByoprunitGiChrpsn;
        		ds.setColumn(0, 'GI_CHRPSN_ID', sIdList);
        		ds.setColumn(0, 'GI_CHRPSN_NM', sNmList);
        	}, { title: '운영단위 입고 책임자 조회', titlebar: 'true' });
        };

        this.fnMultiMbrClbk=function(rID, rJSON) {
        	trace('this.fnMultiMbrClbk(rID:'+ rID +', rJSON:'+ rJSON +')');
        	if (rJSON == undefined) { return; }

        	var vRN=this.infDsModRow.row, rOBJ=JSON.parse(rJSON), vID=rOBJ.textValue, vNM=rOBJ.nameValue;
        	if (undefined!=vID) {
        		this.infDsModRow.id.set_value(vID);
        		this.dsByoprunitGiChrpsn.setColumn(this.infDsModRow.row, 'GI_CHRPSN_ID', vID);
        	}
        	if (undefined!=vNM) {
        		this.infDsModRow.nm.set_value(vID);
        		this.dsByoprunitGiChrpsn.setColumn(this.infDsModRow.row, 'GI_CHRPSN_NM', vNM);
        	}
        }

        this.btnMultiTextGi_onclick = function(obj,e) {
        	this.infDsModRow = { row: 0, id: this.edtOpuGiIds, nm: this.edtOpuGiNms };
        	this.fn_showTareaInput(this.name, 'GI_CHRPSN_ID', this.infDsModRow.id.value, 'fnTextMultiClbk', 120, 300);  //this.ccPopMultiText(this.edtOpuGiIds.id, { textId : this.edtOpuGiIds, giAuthUseYn: 'Y' }, 'fnMultiTextClbk');
        }

        this.fnTextMultiClbk=function(sPopId, sRetVal) {
        	trace('this.fnTextMultiClbk(sPopId:'+ sPopId +', sRetVal:'+ sRetVal +')');
        	if (sRetVal == undefined) { return; }
        	var oRetVal=JSON.parse(sRetVal), rIdx=this.infDsModRow.row, rVl='';  // , vID=rOBJ.textValue, vNM=rOBJ.nameValue;
        	for (var i in oRetVal) {
        		var r = JSON.parse( oRetVal[i] );
        		rVl += (''==rVl ? '' : ',') + r.VALUE;
        	}

        	if (rVl != undefined) {
        		//this.infDsModRow.id.set_value(rVl);
        		this.dsByoprunitGiChrpsn.setColumn(rIdx, 'GI_CHRPSN_ID', rVl );
        		this.dsByoprunitGiChrpsn.setColumn(rIdx, 'GI_CHRPSN_NM', null);
        	}

        	trace('this.infDsModRow.id.value('+ this.infDsModRow.id.get_value() +')');
        }

        this.btnSave_onclick = function(obj,e)
        {
        	// Step01] Validation

        	// Step03] Check Modified
        	var  dsSavNm  = 'dsSaveByoprunitGiChrpsn';
        	this[dsSavNm] = this.getChgdRowsDataset(this.dsByoprunitGiChrpsn);  trace('ds changed row count:'+ this[dsSavNm].rowcount);
        	if ( this[dsSavNm].rowcount < 1) { alert('변경된 정보가 없습니다.'); return; }


        	// Step03] Confirm
        	if (!confirm('저장하시겠습니까?')) { return; }
        	this.fnSaveGiChrspnInfo();
        };

        this.btnCncl_onclick = function(obj,e)
        {
        	this.close();
        };

        this.SSP_BO_MA_69_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_MA_69_onkeyup,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCncl.addEventHandler("ondblclick",this.btnCncl_ondblclick,this);
            this.btnCncl.addEventHandler("onclick",this.btnCncl_onclick,this);
            this.btnMultiPrsnGi.addEventHandler("onclick",this.btnMultiMbrGi_onclick,this);
            this.btnMultiTextGi.addEventHandler("onclick",this.btnMultiTextGi_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_69.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
