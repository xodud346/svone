(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_MA_68");
            this.set_titletext("부서 입고 책임자 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(720,520);
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
            obj = new Static("lblBzplc","20","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.set_text("사업장");
            this.addChild(obj.name, obj);

            obj = new Static("txtBzplcInfo","140","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lblOprunit","20","52","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("txtOprunitInfo","140","52",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("lblPageInfo","20","95","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("(총 -건 -/-)");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBydeptGi","20","120",null,"300","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsBydeptGiChrpsn");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"24\"/><Column size=\"24\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"부서ID\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" colspan=\"4\" text=\"부서 입고 책임자\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_ID\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"left\" tooltiptext=\"bind:DEPT_NM\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:GI_CHRPSN_ID\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:GI_CHRPSN_NM\"/><Cell col=\"4\" displaytype=\"imagecontrol\" edittype=\"none\" cssclass=\"btn_WF_search02\" text=\"expr:&apos;theme://images/btn_WF_multi.png&apos;\"/><Cell col=\"5\" displaytype=\"imagecontrol\" text=\"expr:&apos;theme://images/btn_WF_document.png&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","20","421",null,"29","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("divCtrl","20","460",null,"51","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","345","10","70","30",null,null,null,null,null,null,this.divCtrl.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            obj.set_textAlign("center");
            this.divCtrl.addChild(obj.name, obj);

            obj = new Button("btnCncl","270","10","70","30",null,null,null,null,null,null,this.divCtrl.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_textAlign("center");
            this.divCtrl.addChild(obj.name, obj);

            obj = new Edit("edtTmpId","203","88","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTmpNm","320","88","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTmpRn","86","88","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbPageSz",null,"90","100","24","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            var cmbPageSz_innerdataset = new nexacro.NormalDataset("cmbPageSz_innerdataset", obj);
            cmbPageSz_innerdataset._setContents("<ColumnInfo><Column id=\"cd\" size=\"256\"/><Column id=\"nm\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">20</Col><Col id=\"nm\">20개씩</Col></Row><Row><Col id=\"cd\">30</Col><Col id=\"nm\">30개씩</Col></Row><Row><Col id=\"cd\">50</Col><Col id=\"nm\">50개씩</Col></Row><Row><Col id=\"cd\">100</Col><Col id=\"nm\">100개씩</Col></Row></Rows>");
            obj.set_innerdataset(cmbPageSz_innerdataset);
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"90","110","24","cmbPageSz:4",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",720,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmbPageSz","value","dsParam","rowCount");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_68.xfdl","CO::coUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_68.xfdl","CC::CcUtils.xjs");
        this.addIncludeScript("SSP_BO_MA_68.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_68.xfdl", function() {
        /*******************************************************
          PROJECT  NAME  : SSP
          PROGRAM  NAME  : CC [SSP_BO_MA_68] 부서 입고 책임자 설정
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

        	this.copyPaste.addGrid(this.grdBydeptGi, this);
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        this.fnSelectGiChrspnInfo=function(page) {
        	trace('this.fnSrchGiChrspnInfo()');

        	//	this.$page.preSearch(page);  // Paging
         	if( page==0 || page==undefined ) {
         		this.divPaging.uPage    = 1 ;
         		this.divPaging.uPageNum = 0 ;
         		this.dsParam.setColumn (0, 'startNum', this.divPaging.uPageNum);
         		this.dsParam.setColumn (0, 'rowCount', this.cmbPageSz.value   );
         	}

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
        	var inDs  = 'dsParam=dsParam dsBydeptGiChrpsn=dsSaveBydeptGiChrpsn';
        	var outDs = '';
        	var arg   = '';

        	trace('[sUrl:'+ sUrl +']');
        	this.gfn_transaction(sSvc, sUrl, inDs, outDs, arg, 'fnSaveGiChrspnInfoClbk');
        }

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        // 입고 책임자 조회 콜백
        this.fnSelectGiChrspnInfoClbk = function(rCodes, rCode, rMesg) {
        	trace('this.fnSelectGiChrspnInfoClbk()');
        	var totCunt = this.dsBydeptGiChrpsn.getColumn(0, 'TOT_CUNT');

         	this.divPaging.uTotCunt = totCunt              == undefined ? 0 : totCunt;
        	this.divPaging.uPage    = this.divPaging.uPage == undefined ? 1 : this.divPaging.uPage;
         	this.divPaging.form.cfn_createPage(this.divPaging, this.divPaging.uTotCunt, this.cmbPageSz.value, 'fnPageClbk');
        }
        // Page Callback
        this.fnPageClbk = function(flg){
        	trace("<flg:"+ flg +"/>");
         	if (flg) {
        		var startNum=this.divPaging.uPageNum, rowCount=this.cmbPageSz.value;
         		this.dsParam.setColumn(0, "START_NUM", startNum);  this.dsParam.setColumn(0, "startNum", startNum);
         		this.dsParam.setColumn(0, "ROW_COUNT", rowCount);  this.dsParam.setColumn(0, "rowCount", rowCount);
         		this.fnSelectGiChrspnInfo(this.divPaging.uPageNum);
         	}
         	this.lblPageInfo.set_text("(총 "+ this.divPaging.uTotCunt +"건, "+ this.divPaging.uPage +" / "+ this.divPaging.uPageCnt +")");
        }


        this.fnSaveGiChrspnInfoClbk = function(rCodes, rCode, rMesg) {
        	trace('this.fnSaveGiChrspnInfoClbk(rCodes:'+rCodes+', rCode:'+rCode+', rMesg:'+rMesg+')');
        	if (rCode != 0) { return; }

        	alert('저장하였습니다.');
        	this.close(); // 22-05-11 단위테스트 문주환
        }

        this.fnCcPopMultiMbrClbk=function(rID, rJSON) {
        	trace('[rID:'+ rID +'][rOBJ:'+ rOBJ +']');
        	if (rJSON == undefined) { return; }

        	var vRN=this.edtTmpRn.value, rOBJ=JSON.parse(rJSON), vID=rOBJ.textValue, vNM=rOBJ.nameValue;

        	this.edtTmpId.set_value( vID );
        	this.edtTmpNm.set_value( vNM );
        	this.dsBydeptGiChrpsn.setColumn(vRN, 'GI_CHRPSN_ID', vID);
        	this.dsBydeptGiChrpsn.setColumn(vRN, 'GI_CHRPSN_NM', vNM);
        }

        this.fnCcPopMultiTextClbk=function(rID, rJSON) {
        	trace('[rID:'+ rID +'][rOBJ:'+ rOBJ +']');
        	if (rJSON == undefined) { return; }

        	var vRN=this.edtTmpRn.value, rOBJ=JSON.parse(rJSON), vID=rOBJ.textValue, vNM=this.edtTmpNm.value;
        	trace('[rID:'+ rID +'][vRN:'+ vRN +'][vID:'+ vID +'][vNM:'+ vNM +'][rOBJ:'+ rOBJ +']');

        	this.edtTmpId.set_value( vID );
        	this.dsBydeptGiChrpsn.setColumn(vRN, 'GI_CHRPSN_ID', vID);
        	//this.dsBydeptGiChrpsn.setColumn(vRN, 'GI_CHRPSN_NM', vNM);
        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function() {
        	//trace('this.cfn_formInit() > [refCdGrpNm:'+ this.parent['refCdGrpNm'] +']');

        // 	// 화면에서 사용하는 공통코드 호출
        // 	this.ccComCodes([
        // 		  '선택:CURR_DD'
        // 		, 'USE_YN'
        // 		, 'BGT_FW_SPR_CD'
        // 		, 'BGT_CLOS_DD_CD'
        // 		, 'GI_LVL_CD'
        // 		, 'APRVL_PST_CD'
        // 		, 'BLNG_DEPT_USE_SPR_CD'
        // 		, 'CTL_AUTH_USE_SPR_CD'
        // 		, 'GI_VERF_PROC_CD'
        // 	], 'fnCcComCodesClbk');

        	// Parent Parameter 생성
        	if (this.parent != undefined) {
        		var p={ startNum: 0, rowCount: 20, giChrpsnType: 'DEP' };

        		for (var i in this.extParamKeys) {
        			var k=this.extParamKeys[i], v=this.parent[k];  //trace('ext['+ k +':'+ v +']');
        			p[k]=v;
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
        	this.cnvtObject2Dataset('dsParam', { coCd: '1000', bzplcId: 'S000013507', oprUnitId: 'S000013644', startNum: 0, rowCount: 20 });
        	this.fnSelectCtlAuthDtl();
        }

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.popConf = {
        	  4: { func: 'ccPopMultiMbr' , clbk: 'fnCcPopMultiMbrClbk'  }
        	, 5: { func: 'ccPopMultiText', clbk: 'fnCcPopMultiTextClbk' }
        };
        this.grdBydeptGi_oncellclick = function(obj, e) {
        	var evtColID=this.getBindColumnIDByIndex(obj, e.cell), eRix=e.row;

        	var actvPopup = this.popConf[e.cell];
        	if (actvPopup != undefined) {
        		trace('[e.cell:'+ e.cell +'] >> '+ actvPopup +' >> func:'+ this[actvPopup.func] +'>');

        		//var pickIds
        		var pick={
        			  ids: this.dsBydeptGiChrpsn.getColumn(eRix, 'GI_CHRPSN_ID')
        			, nms: this.dsBydeptGiChrpsn.getColumn(eRix, 'GI_CHRPSN_NM')
        		};
        		this.edtTmpRn.set_value( eRix );
        		this.edtTmpId.set_value( this.dsBydeptGiChrpsn.getColumn(eRix, 'GI_CHRPSN_ID') );
        		this.edtTmpNm.set_value( this.dsBydeptGiChrpsn.getColumn(eRix, 'GI_CHRPSN_NM') );

        		switch (e.cell) {
        			case 4:
        				var popParam={ giAuthUseYn: 'Y' }, aProp=[ 'coCd', 'bzplcId', 'oprUnitId' ];
        				for (var i in aProp) { var prop=aProp[i]; popParam[prop]=this.dsParam.getColumn(0, prop); }

        				this.gfn_openPopup("", "CC::SSP_BO_PP_25_1.xfdl", popParam, function(sPopupId, sRetValue) {
        					const cmpObj = JSON.parse(sRetValue);
        					var sIdList = "";
        					var sNmList = "";
        					for(var i=0; i<cmpObj.length; i++){
        						var rowData = JSON.parse(cmpObj[i]);
        						if(i == (cmpObj.length-1)){
        							sIdList += rowData.MBR_ID;
        							sNmList += rowData.MBR_NM;
        						}else{
        							sIdList += rowData.MBR_ID +",";
        							sNmList += rowData.MBR_NM +",";
        						}
        					}
        					this.dsBydeptGiChrpsn.setColumn(eRix, 'GI_CHRPSN_ID', sIdList);
        					this.dsBydeptGiChrpsn.setColumn(eRix, 'GI_CHRPSN_NM', sNmList);
        				}, {title : '부서 입고 책임자 조회', titlebar:"true"});
        				break;

        			case 5:
        				this.fn_showTareaInput(this.name, 'GI_CHRPSN_ID;'+eRix, pick.ids, 'fnTextMultiClbk', 120, 300);
        				break;
        		}
        	}
        }
        this.fnTextMultiClbk = function(sPopId, sRetVal) {
        	var aPopId=sPopId.split(';'), rPopId=aPopId[0]+';'+aPopId[1], rIdx=aPopId[2], oRetVal=JSON.parse(sRetVal), rVl='';
        	for (var i in oRetVal) {
        		var r = JSON.parse( oRetVal[i] );
        		rVl += (''==rVl ? '' : ',') + r.VALUE;
        	}
        	trace('fnTextMultiClbk > [sPopId:'+ sPopId +'][sRetVal:'+ sRetVal +'] > [rPopId:'+ rPopId +'][rIdx:'+ rIdx +']');

        	switch (rPopId) {
        		case this.name+';GI_CHRPSN_ID':
        			this.dsBydeptGiChrpsn.setColumn(rIdx, 'GI_CHRPSN_ID', rVl );
        			this.dsBydeptGiChrpsn.setColumn(rIdx, 'GI_CHRPSN_NM', null);
        			break;
        	}
        }


        this.divCtrl_btnSave_onclick = function(obj,e)
        {
        	// Step01] Validation

        	// Step03] Check Modified
        	var  dsSavNm  = 'dsSaveBydeptGiChrpsn';
        	this[dsSavNm] = this.getChgdRowsDataset(this.dsBydeptGiChrpsn);  trace('ds changed row count:'+ this[dsSavNm].rowcount);
        	if ( this[dsSavNm].rowcount < 1) { alert('변경된 정보가 없습니다.'); return; }

        	// Step03] Confirm
        	if (!confirm('저장하시겠습니까?')) { return; }
        	this.fnSaveGiChrspnInfo();
        };

        this.divCtrl_btnCncl_onclick = function(obj,e)
        {
        	this.close();
        };

        this.cmbPageSz_onitemchanged = function(obj,e)
        {
        	this.fnSelectGiChrspnInfo();
        };

        this.btn_excel_onclick = function(obj,e)
        {
        	this.ofn_exportExcel({form:this, grid:this.grdBydeptGi, fileName:"부서입고책임자목록"});
        };

        this.SSP_BO_MA_68_onkeyup = function(obj,e)
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
            this.addEventHandler("onkeyup",this.SSP_BO_MA_68_onkeyup,this);
            this.grdBydeptGi.addEventHandler("oncellclick",this.grdBydeptGi_oncellclick,this);
            this.divCtrl.form.btnSave.addEventHandler("onclick",this.divCtrl_btnSave_onclick,this);
            this.divCtrl.form.btnCncl.addEventHandler("ondblclick",this.btnCncl_ondblclick,this);
            this.divCtrl.form.btnCncl.addEventHandler("onclick",this.divCtrl_btnCncl_onclick,this);
            this.cmbPageSz.addEventHandler("onitemchanged",this.cmbPageSz_onitemchanged,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_68.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
