//XJS=CcUtils.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        //================================================================================================================================================
        // Global Form Protype
        //================================================================================================================================================
        var pForm = nexacro.Form.prototype;

        //this.$=window.jQuery;

        // 문자열의 Byte길이를 리턴한다.
        String.prototype.getByteLength=function(s,b,i,c){
        	s=s!=undefined?s:this;
        	for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
        	return b;
        }
        this.getByteLength=function(s){ return s!=undefined?s.getByteLength():-1; }
        //================================================================================================================================================
        //  Session
        //================================================================================================================================================
        /*
        this.getSession().coCd
        */
        this.getSession=function() {
        	var sessKeys = {
        		userId    : 'USER_ID'   ,
        		userNm    : 'USER_NM'   ,
        		userDept  : 'USER_DEPT' ,
        		userClass : 'USER_CLASS',
        		coCd      : 'CO_CD'     ,
        		bzplcId   : 'BZPLC_ID'  ,
        		oprUnitId : 'BZPLC_ID'  ,
        		wptalId   : 'WPTAL_ID'  ,
        	};

        	var gds_userInfo = nexacro.getApplication().gds_userInfo;
        	if (gds_userInfo == undefined || gds_userInfo.rowcount < 1) {
        		return {
        			userId    : 'userId',
        			userNm    : '홍길동',
        			userDept  : '부서'  ,
        			userClass : '클래스',
        			coCd      : '1000'  ,
        			bzplcId   : null    ,
        			oprUnitId : null    ,
        			wptalId   : null    ,
        		};
        	}

        	var sKeys=Object.keys( sessKeys ), sessObj={};
        	for (var i in sKeys) {
        		var oKey=sKeys[i], dKey=sessKeys[oKey], oVal=gds_userInfo.getColumn(0, dKey);
        		sessObj[oKey]=oVal;
        	}
        	sessObj['coCd']=sessObj['coCd']==undefined ? '1000' : sessObj['coCd'];

        	return sessObj;
        }

        // 로그인 세션정보 체크 true일시 세션정보 없음
        this.checkSessionId = function(){
        	var sesId = this.getSession().wptalId;
        	if(sesId==null || sesId==undefined || sesId==''){
        		alert("세션이 만료되었습니다. 다시 로그인 후 작업을 진행해주세요.");
        		return true;
        	}
        }

        //================================================================================================================================================
        //  Date
        //================================================================================================================================================
        this.$Date={
        	_d: {},
        	getTodayMonthIntvl: function(iTerm, sChar) {
        		if (undefined==iTerm) { iTerm =   3; }
        		if (undefined==sChar) { sChar = '.'; }

        		var today = new Date(), yyyy=today.getFullYear(), mm=today.getMonth() + 1, dd=today.getDate(),
        			strDt = yyyy +sChar+ ('0'+(mm - iTerm)).substr(-2) +sChar+ ('0'+dd).substr(-2),
        			endDt = yyyy +sChar+ ('0'+(mm        )).substr(-2) +sChar+ ('0'+dd).substr(-2)
        		;

        		return { strDt: strDt, endDt: endDt };
        	},
        }

        //================================================================================================================================================
        //  Pagnation Class
        //================================================================================================================================================
        this.$page={
        	_p: null,
        	isNull: function(o) {  // Clone Function : // Util.js > pForm.gfn_isNull = function(sValue)
        		if (o==null||o==undefined) { return true; }

        		var s=new String(o);
        		if(s==null||s.toString().length==0) { return true; }

        		return false;
        	},
        	init: function(p) {
        		if (!this.isNull(p)){ this._p=p; }
        		if ( this.isNull(p.dflt)){ p.dflt={ page: 1, startNum: 0, rowCount: 20 }; }

        		if (!this.isNull(p.grid)) {
        			p.grid.uSortFlag     = 'false';
        			p.grid.uCellSizeType = 'true';
        		}
        		if (!this.isNull(p.div)) {
        			p.div.uPageNum      = p.dflt.startNum;
        			p.div.uPageRowCnt   = p.dflt.rowCount;
        		}

        		if (p.fSrch==undefined) { p.fSrch = this._p.fSrch; } // $this.fnSearch; }
        		trace('[init>p.fSrch:'+ p.fSrch +']');
        	},
        	pageClbk: function(flg, p) {
        		//if (this.$page.isNull(p)) { p=this.$page._p; }
        		if (p==null || p==undefined) { p=this.$p; /*this.$page._p;*/ }

        		if (flg) {
        			var page=p.dflt.page, startNum=p.div.uPageNum, rowCount=p.size.value;
        			p.param.setColumn (0, 'startNum' , startNum);  p.param.setColumn(0, "START_NUM", startNum);
        			p.param.setColumn (0, 'rowCount' , rowCount);  p.param.setColumn(0, "ROW_COUNT", rowCount);

        			trace('[pageClbk>p.fSrch:'+ p.fSrch +']');
        			p.fSrch(page);
        		}

        		trace(JSON.stringify( p ));
        		if (p==null || p==undefined || p.label==null || p.label==undefined) { return; }
        		p.label.set_text("(총 "+ p.div.uTotCunt +"건, "+ p.div.uPage +" / "+ p.div.uPageCnt +")");
        	},
        	preSearch: function(page, p) {
        		if (this.isNull(p)) { p=this._p; }
        		if (this.isNull(page) || page<1) { page=1; }
        		trace('[page:'+ page +'][p:'+ p  +'][this.$p:'+ this._p +']'); // [p.pDft:'+ p['pDft'] == undefined +']');

        		var startNum=p.dflt.startNum;  if (page!=1 && !this.isNull(p.div ) && !this.isNull(p.div .uPageNum)) { startNum=p.div .uPageNum; }
        		var rowCount=p.dflt.rowCount;  if (page!=1 && !this.isNull(p.size) && !this.isNull(p.size.value   )) { rowCount=p.size.value   ; }

        		p.div.uPage    = page    ;
        		p.div.uPageNum = startNum;
        		p.param.setColumn (0, 'startNum' , startNum);  p.param.setColumn (0, 'START_NUM', startNum);
        		p.param.setColumn (0, 'rowCount' , rowCount);  p.param.setColumn (0, 'ROW_COUNT', rowCount);

        		trace('[page:'+ page +'][startNum:'+ startNum +'][rowCount:'+ rowCount +'][p:'+ p  +'][this.$p:'+ this._p +']');
        	},
        	postSearch: function(total, sClbk, p) {
        		var $p=this._p;
        		//if (this.isNull(p)) { p=this._p; }
        		if (this.isNull(sClbk )) { sClbk='fnPageClbk';  }
        		if (this.isNull($p.div)) { return; }

        		$p.div.uTotCunt = total==undefined ? 0 : total;
        		$p.div.form.cfn_createPage($p.div, $p.div.uTotCunt, $p.size.value, sClbk);
        	},
        }
        this.isNull = function(s) { return this.$page.isNull(s); }
        this.isNotNull = function(s) { return !this.isNull(s); }


        //================================================================================================================================================
        //  Pop-Up
        //================================================================================================================================================
        /*
        	Usage :
        	var params = { bzplcId: this.dsParams.BZPLC_ID, bzplcNm: this.dsParams.BZPLC_NM };
        	this.ccPopBzplcSingle({}, function(sPopupId, sRetValue){
        		// callback act
        	});
        */
        this.ccPopBzplcSingle = function(params, fCallback) {
        	if (params == undefined) {
        		params = { bzplcId: this.dsParams.BZPLC_ID, bzplcNm: this.dsParams.BZPLC_NM };
        	}
        	this.gfn_openPopup('bzplcSinglePop', 'CO_POP::bzplcSinglePopup.xfdl', params, fCallback);
        }

        this.ccPopMultiMbr = function(callId, params, fCallback) {
        	// alert('[CC COM] 회원 멀티선택 팝업 > 준비 중');  return;
        	this.gfn_openPopup(callId, 'CO_POP::SSP_PP_25.xfdl' , params, fCallback, { title: '회원 얼티선택'   });
        }
        this.ccPopMultiText = function(callId, params, fCallback) {
        	this.gfn_openPopup(callId, 'CO_POP::multiTextPopup.xfdl', params, fCallback, { title: '텍스트 멀티선택 팝업' });
        }


        this.$popup=function(This){
        	this._this=undefined;
        	this._cfg={
        	    mTexts  : { popId: 'mTexts'  , url: 'CO_POP::'+'multiTextPopup.xfdl', title: '텍스트 입력'   },

        		sIddt   : { popId: 'sIddt'   , url: 'CC::'    +'SSP_BO_PP_30.xfdl'  , title: '산업군 조회'   },
        		mIddt   : { popId: 'mIddt'   , url: 'CC::'    +'SSP_BO_PP_30.xfdl'  , title: '산업군 조회'   },

        		sCorp   : { popId: 'sCorp'   , url: 'CC::'    +'SSP_BO_MA_42.xfdl'  , title: '법인 조회'     },
        		mCorp   : { popId: 'mCorp'   , url: 'CC::'    +'SSP_BO_MA_42.xfdl'  , title: '법인 조회'     },

        		sBzplc  : { popId: 'sBzplc'  , url: 'CO_POP::'+'SSP_BO_PP_22.xfdl'  , title: '사업장 조회'   },
        		mBzplc  : { popId: 'mBzplc'  , url: 'CO_POP::'+'SSP_BO_PP_14.xfdl'  , title: '사업장 조회'   },
        		iBzplc  : { popId: 'iBzplc'  , url: 'CC::'    +'SSP_BO_MA_02.xfdl'  , title: '사업장 정보'   },

        		sOprunit: { popId: 'sOprunit', url: 'CO_POP::'+'SSP_BO_PP_30.xfdl'  , title: '운영단위 조회' },
        		mOprunit: { popId: 'mOprunit', url: 'CO_POP::'+'SSP_BO_PP_23.xfdl'  , title: '운영단위 조회' },

        		sDept   : { popId: 'sDept'   , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '부서 조회'     },
        		mDept   : { popId: 'mDept'   , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '부서 조회'     },

        		sMbr    : { popId: 'sMbr'    , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '담당자 조회'   },
        		mMbr    : { popId: 'mMbr'    , url: 'CO_POP::'+'SSP_BO_PP_25.xfdl'  , title: '담당자 조회'   },

        		sOprtr  : { popId: 'sOprtr'  , url: 'CO_POP::'+'SSP_BO_PP_44.xfdl'  , title: '운영자 조회'   },
        		mOprtr  : { popId: 'mOprtr'  , url: 'CO_POP::'+'SSP_BO_PP_44.xfdl'  , title: '운영자 조회'   },

        		sZendesk: { popId: 'sZendesk', url: 'CC::'    +'SSP_BO_PP_21.xfdl'  , title: '젠데스크 조회' },
        		mZendesk: { popId: 'mZendesk', url: 'CC::'    +'SSP_BO_PP_21.xfdl'  , title: '젠데스크 조회' },
        	};

        	this.init=function(This) {
        		trace('this.$popup.init()');
        		this._this=This;

         		var bindFunction=[ 'getOwnerFrame', /*'gfn_isNull', 'gfn_openPopup'*/ ];
         		for (var i in bindFunction) {
         			var fn=this[bindFunction[i]];
         			this[fn]=This[fn];
         		}

        		return this;
        	};

        	this.show=function(popId, o, clbk) {
        		if (this._this==undefined) { trace('this.$popup.init()'); }

        		var cfg = this._cfg[popId];
        		if (cfg==undefined) { return; }

        		var clbkNm=cfg.popId+'Clbk';  //trace('[this._this:'+ this._this +'][clbkNm:'+ clbkNm +'='+ (typeof clbk) +']');
        		if('function'==typeof clbk) { this._this[clbkNm]=clbk; }
        		//trace('[clbkNm:'+ clbkNm +'='+ this._this[clbkNm] +']');

        		this._this.gfn_openPopup('$popup.'+cfg.popId, cfg.url, o, clbkNm, { title: cfg.title, titlebar: 'true' });
        	};


        	this.sIddt   =function(o, clbk) { this.show('sIddt'   , o, clbk); };  // 팝업-단일-산업군
        	this.mIddt   =function(o, clbk) { this.show('mIddt'   , o, clbk); };  // 팝업-멀티-산업군

        	this.mCorp   =function(o, clbk) { this.show('mCorp'   , o, clbk); };  // 팝업-단일-산업군

        	this.sBzplc  =function(o, clbk) { this.show('sBzplc'  , o, clbk); };  // 팝업-단일-사업장
        	this.mBzplc  =function(o, clbk) { this.show('mBzplc'  , o, clbk); };  // 팝업-멀티-사업장
        	this.iBzplc  =function(o, clbk) { this.show('iBzplc'  , o, clbk); };  // 팝업-사업장 정보

        	this.sOprunit=function(o, clbk) { this.show('sOprunit', o, clbk); };  // 팝업-운영단위 정보
        	this.mOprunit=function(o, clbk) { this.show('mOprunit', o, clbk); };  // 팝업-운영단위 정보

        	this.sDept   =function(o, clbk) { this.show('sDept'   , o, clbk); };  // 팝업-부서 정보
        	this.mDept   =function(o, clbk) { this.show('mDept'   , o, clbk); };  // 팝업-부서 정보

        	this.sMbr    =function(o, clbk) { this.show('sMbr'    , o, clbk); };  // 팝업-단일-회원
        	this.mMbr    =function(o, clbk) { this.show('mMbr'    , o, clbk); };  // 팝업-멀티-회원

        	this.sOprtr  =function(o, clbk) { this.show('sOprtr'  , o, clbk); };  // 팝업-단일-운영자
        	this.mOprtr  =function(o, clbk) { this.show('mOprtr'  , o, clbk); };  // 팝업-멀티-운영자

        	this.sZendesk=function(o, clbk) { this.show('sZendesk', o, clbk); };  // 팝업-젠데스크 조회
        	this.mZendesk=function(o, clbk) { this.show('mZendesk', o, clbk); };  // 팝업-젠데스크 조회

        	this.init(This);
        	return this;
        };
        this.$popup(this);

        this.$popupd={
        	_cfg: {
        	    mTexts  : { popId: 'mTexts'  , url: 'CO_POP::'+'multiTextPopup.xfdl', title: '텍스트 입력'   },

        		sIddt   : { popId: 'sIddt'   , url: 'CC::'    +'SSP_BO_PP_30.xfdl'  , title: '산업군 조회'   },
        		mIddt   : { popId: 'mIddt'   , url: 'CC::'    +'SSP_BO_PP_30.xfdl'  , title: '산업군 조회'   },

        		sCorp   : { popId: 'sCorp'   , url: 'CC::'    +'SSP_BO_MA_42.xfdl'  , title: '법인 조회'     },
        		mCorp   : { popId: 'mCorp'   , url: 'CC::'    +'SSP_BO_MA_42.xfdl'  , title: '법인 조회'     },

        		sBzplc  : { popId: 'sBzplc'  , url: 'CO_POP::'+'SSP_BO_PP_22.xfdl'  , title: '사업장 조회'   },
        		mBzplc  : { popId: 'mBzplc'  , url: 'CO_POP::'+'SSP_BO_PP_14.xfdl'  , title: '사업장 조회'   },
        		iBzplc  : { popId: 'iBzplc'  , url: 'CC::'    +'SSP_BO_MA_02.xfdl'  , title: '사업장 정보'   },

        		sOprunit: { popId: 'sOprunit', url: 'CO_POP::'+'SSP_BO_PP_30.xfdl'  , title: '운영단위 조회' },
        		mOprunit: { popId: 'mOprunit', url: 'CO_POP::'+'SSP_BO_PP_23.xfdl'  , title: '운영단위 조회' },

        		sDept   : { popId: 'sDept'   , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '부서 조회'     },
        		mDept   : { popId: 'mDept'   , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '부서 조회'     },

        		sMbr    : { popId: 'sMbr'    , url: 'CO_POP::'+'SSP_BO_PP_24.xfdl'  , title: '담당자 조회'   },
        		mMbr    : { popId: 'mMbr'    , url: 'CO_POP::'+'SSP_BO_PP_25.xfdl'  , title: '담당자 조회'   },

        		sOprtr  : { popId: 'sOprtr'  , url: 'CO_POP::'+'SSP_BO_PP_44.xfdl'  , title: '운영자 조회'   },
        		mOprtr  : { popId: 'mOprtr'  , url: 'CO_POP::'+'SSP_BO_PP_44.xfdl'  , title: '운영자 조회'   },

        		sZendesk: { popId: 'sZendesk', url: 'CC::'    +'SSP_BO_PP_21.xfdl'  , title: '젠데스크 조회' },
        		mZendesk: { popId: 'mZendesk', url: 'CC::'    +'SSP_BO_PP_21.xfdl'  , title: '젠데스크 조회' },
        	},
        	show: function(popId, o, clbk) {
        		if (this._this==undefined) { trace('this.$popup.init()'); }

        		var cfg = this._cfg[popId];
        		if (cfg==undefined) { return; }

        		var clbkNm=cfg.popId+'Clbk';  trace('[this._this:'+ this._this +'][clbkNm:'+ clbkNm +'='+ (typeof clbk) +']');
        		if('function'==typeof clbk) { this._this[clbkNm]=clbk; }
        		trace('[clbkNm:'+ clbkNm +'='+ this._this[clbkNm] +']');

        		this._this.gfn_openPopup('$popup.'+cfg.popId, cfg.url, o, clbkNm, { title: cfg.title, titlebar: 'true' });
        	},
        	sIddt   : function(o, clbk) { this.show('sIddt'   , o, clbk); },  // 팝업-단일-산업군
        	mIddt   : function(o, clbk) { this.show('mIddt'   , o, clbk); },  // 팝업-멀티-산업군

        	mCorp   : function(o, clbk) { this.show('mCorp'   , o, clbk); },  // 팝업-단일-산업군

        	sBzplc  : function(o, clbk) { this.show('sBzplc'  , o, clbk); },  // 팝업-단일-사업장
        	mBzplc  : function(o, clbk) { this.show('mBzplc'  , o, clbk); },  // 팝업-멀티-사업장
        	iBzplc  : function(o, clbk) { this.show('iBzplc'  , o, clbk); },  // 팝업-사업장 정보

        	sOprunit: function(o, clbk) { this.show('sOprunit', o, clbk); },  // 팝업-운영단위 정보
        	mOprunit: function(o, clbk) { this.show('mOprunit', o, clbk); },  // 팝업-운영단위 정보

        	sDept   : function(o, clbk) { this.show('sDept'   , o, clbk); },  // 팝업-부서 정보
        	mDept   : function(o, clbk) { this.show('mDept'   , o, clbk); },  // 팝업-부서 정보

        	sMbr    : function(o, clbk) { this.show('sMbr'    , o, clbk); },  // 팝업-단일-회원
        	mMbr    : function(o, clbk) { this.show('mMbr'    , o, clbk); },  // 팝업-멀티-회원

        	sOprtr  : function(o, clbk) { this.show('sOprtr'  , o, clbk); },  // 팝업-단일-운영자
        	mOprtr  : function(o, clbk) { this.show('mOprtr'  , o, clbk); },  // 팝업-멀티-운영자

        	sZendesk: function(o, clbk) { this.show('sZendesk', o, clbk); },  // 팝업-젠데스크 조회
        	mZendesk: function(o, clbk) { this.show('mZendesk', o, clbk); },  // 팝업-젠데스크 조회
        };


        //================================================================================================================================================
        // 공통코드 바인딩
        //================================================================================================================================================
        // this.ccBindComCode = function(oTrgt, sComClsfCd, oDlftCdNm, sSeleCd, sCallback) {
        this.ccBindCode = function(sComCdCfg, oDlftCdNm, sSeleCd, sCallback) {
        	var aComCdCfg=sComCdCfg.split(':'), cmpID = aComCdCfg[0], sComClsfCd = aComCdCfg[1], sDfltCd = aComCdCfg[2];
        	var tkey = 'TRGT', ckey = 'COM_CLSF_CD', iDsNm = 'ds_search', oDsNm = 'ds'+sComClsfCd;

        	this[iDsNm] = new Dataset(iDsNm);
        	this[iDsNm].set_name(iDsNm);
        	this[iDsNm].addColumn(ckey, 'String');
        	this[iDsNm].addColumn(tkey, 'String');
        	this[iDsNm].addColumn('CD', 'String');
        	this[iDsNm].addColumn('NM', 'String');
        	if (oDlftCdNm['useYn'] != undefined) { this[iDsNm].addColumn('USE_YN', 'String'); }

        	var rn = this[iDsNm].addRow();
        	this[iDsNm].setColumn(rn, ckey, sComClsfCd  );
        	this[iDsNm].setColumn(rn, tkey, oDsNm       );
        	this[iDsNm].setColumn(rn, 'CD', oDlftCdNm.cd);
        	this[iDsNm].setColumn(rn, 'NM', oDlftCdNm.nm);
        	if (oDlftCdNm['useYn'] != undefined) { this[iDsNm].setColumn(rn, 'USE_YN', oDlftCdNm.useYn); }

        	this[oDsNm] = new Dataset(oDsNm);
        	this[oDsNm].set_name(oDsNm);

        	var sSvcId = sComCdCfg;
        	var sUrl   = '/cc/com/comCdClsfDtlList.do';
        	var inDs   = iDsNm +'='+ iDsNm; // 'dsParams=dsParams';  // + dsParams.id;
        	var outDs  = oDsNm +'='+ oDsNm;
        	var arg    = '';

        	trace('this.ccBindCode4Combo('+ sUrl +', '+ this.ds_search.getColumn(rn, ckey) +')');
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'ccBindCodeClbk');
        }

        this.ccBindCodeClbk = function(svcID, rCode, rMesg){
        	var svc=svcID.split(':'), cmpID = svc[0], dsNM = 'ds'+ svc[1], dlftCd = svc[2], fCallback = svc[3];
        	var frmSrch = this.divSrch.form;

        	var oTrgt = frmSrch[cmpID];
        	if (undefined==oTrgt) { return; }

        	oTrgt.codecolumn = 'COM_DTL_CD'   ;
        	oTrgt.datacolumn = 'COM_DTL_CD_NM';
        	oTrgt.setInnerDataset(this[dsNM]);
        	oTrgt.set_index(0);

        //   	oTrgt.set_value(this[dsNM].getColumn(0, oTrgt['codecolumn']));
        //   	oTrgt.set_text (this[dsNM].getColumn(0, oTrgt['datacolumn']));

        	trace('[cmpID:'+ cmpID +'][dsNM:'+ dsNM +'][codecolumn:'+ oTrgt['codecolumn'] +'][datacolumn:'+ oTrgt['datacolumn'] +'][CV:'+ this[dsNM].getColumn(0, oTrgt['codecolumn']) +'][DV:'+ this[dsNM].getColumn(0, oTrgt['datacolumn']) +']');
        	//if (fCallback != undefined) { fCallback(this[dsNM]); }
        }

        //================================================================================================================================================
        // 다중 공통코드
        //================================================================================================================================================
        /*
        use case #1 :
          this.ccComCodes(['선택:USE_YN', '선택MAND_YN', '선택:REF_CD_CHG_TGT_CD', '선택:REF_CD_EXPS_MTHD_CD', '선택:NO_CHAR_SPR_CD'], 'fnCcCodesClbk');

        use case #2 :
          var aCodes = [];  // ['USE_YN', 'MAND_YN', 'REF_CD_CHG_TGT_CD', 'REF_CD_EXPS_MTHD_CD', 'NO_CHAR_SPR_CD']
          aCodes.push('선택:USE_YN');
          aCodes.push('선택:MAND_YN');
          aCodes.push('선택:REF_CD_CHG_TGT_CD');
          aCodes.push('선택:REF_CD_EXPS_MTHD_CD');
          aCodes.push('선택:NO_CHAR_SPR_CD');
          this.ccComCodes(aCodes, 'fnCcCodesClbk');
         */
        this.ccComCodes = function(aCodes, sClbk) {
        	var dsSID='dsCodes', dsCID='comClsfCd', sCodes = aCodes.join(',')+',callback:'+sClbk; // 'COM_CLSF_CD'  // alert(sCodes);

        	var dsIN = new Dataset(dsSID);
        	dsIN.addColumn(dsCID, 'String');

        	var dsPfix='dsCom', dsCdss = '';
        	for (var i in aCodes) {
        		var j=dsIN.addRow();
        		dsIN.setColumn(j, dsCID, aCodes[i]);

        		var sItm=aCodes[i], aItm = sItm.split(':'), dsComNm=dsPfix+(sItm.indexOf(':') > -1 ? aItm[1] : aItm[0]);
        		dsCdss += (i==0?'':' ')+(dsComNm+'='+dsComNm);

        		//this[dsComNm] = new Dataset(dsComNm);
        	}
        	this[dsSID] = dsIN;

        	var sSvcId = sCodes;
        	var sUrl   = '/cc/com/codes.do';
        	var inDs   = dsSID +'='+ dsSID;  // 'dsParams=dsParams';  // + dsParams.id;
        	var outDs  = dsCdss;  trace('outDs(dsCdss) > '+ dsCdss);  // oDsNm +'='+ oDsNm;
        	var arg    = '';
        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, 'ccComCodesClbk');
        }
        this.ccComCodesClbk = function(rSvcId, rCode, rMesg) {
        	var aSvc=rSvcId.split(','), lastItem=aSvc[aSvc.length-1];  trace('aSvc> '+ aSvc);
        	for(var i in aSvc) {
        		var sItm=aSvc[i], aItm=sItm.split(':'), aItmKey=sItm.indexOf(':')>-1? aItm[1] : sItm;
        		if (sItm.indexOf('callback') > -1) { continue; }

        		var jDs=this['dsCom'+aItmKey];
        		if (jDs == undefined) { continue; }
        		trace('[dsCom'+ aItmKey +']');
        		trace('[dsCom'+ aItmKey +']<'+ this['dsCom'+aItmKey] +'.rowcount:'+ this['dsCom'+aItmKey].rowcount +'>');
        		var jDs=this['dsCom'+aItmKey];
        		for (var j=0; j<jDs.rowcount; j++) {
        			trace('    ds item['+j+']['+ jDs.getColumn(j, 'CD')+':'+ jDs.getColumn(j, 'NM')+']');
        		}
        	}
        	if (lastItem.indexOf('callback:') > -1) {
        		var aClbk=lastItem.split(':'), fClbk=aClbk[aClbk.length-1];
        		if (this[fClbk] != undefined) { this[fClbk](rSvcId, rCode, rMesg); }
        	}
        }

        //================================================================================================================================================
        //  Generator Parameter Dataset
        //================================================================================================================================================
        this.newDataset=function(sId, cols) {
        	var ds=new Dataset(sId);
        	this[sId]=ds;

        	if (undefined==cols) { return ds; }

        	for (var i in cols) {
        		ds.addColumn( cols[i] );
        	}
        	//ds.addRow();

        	return ds;
        }

        this.cnvtExtnlArgs2Dataset=function(oParam, sDsNm, aProps) {
        	trace('this.cnvtExtnlArgs2Dataset > oParam['+ oParam +']');
        	if (oParam == undefined || oParam == null) { return null; }

        	var pKey=sDsNm, pProp=aProps, pParam=new Dataset(pKey);
        	for (var i in pProp) {
        		var p = pProp[i], v = oParam[p];
        		pParam.addColumn(p, 'String');
        	}

        	// page 관련 프로퍼티
        	var aPageProp = [ 'START_NUM', 'ROW_COUNT', 'startNum', 'rowCount' ];
        	for (var i in aPageProp) {
        		var p = aPageProp[i];
        		pParam.addColumn(p, 'String');
        	}

        	var rIdx = pParam.addRow();
        	for (var i in pProp) {
        		var p = pProp[i];  trace(' >>> oParam['+ i +']['+ p +':'+ oParam[p] +']');
        		pParam.setColumn(rIdx, p, oParam[p]);
        	}

        	this[pKey] = pParam;
        	return this[pKey];
        }

        this.cnvtObject2Dataset=function(dsId, obj) {
        	trace('this.cnvtObject2Dataset() > obj >> '+ JSON.stringify( obj ));

        	dsId = dsId == undefined ? 'dsParam' : dsId;
        	var ds=this[dsId]=this[dsId]!=undefined ? this[dsId] : new Dataset(dsId);
        	trace('[ds:'+ ds +':this[dsId]==undefined?'+ this[dsId]==undefined +']');

        	// pagination proprties
        	var oPageInf = { startNum: 0, rowCount: 20 }, pProp=Object.keys(oPageInf);
        	for (var i in pProp) {
        		var k=pProp[i], v=oPageInf[k];
        		trace('[ds:'+ this[dsId] +']['+dsId+'.'+ k +':'+ k +']');
        		ds.addColumn(k, 'String');
        	}
        	if (obj == undefined) {
        		var rIx=ds.addRow();
        		for (var i in pProp) {
        			var k=pProp[i], v=oPageInf[k];
        			ds.setColumn(rIx, k,  v);
        		}
        		return ds;
        	}
        	var props = Object.keys(obj);
        	for (var i in props) {
        		var k=props[i], v=obj[k];
        		ds.addColumn(k, 'String');
        	}
        	var rIx=ds.addRow();
        	for (var i in props) {
        		var k=props[i], v=obj[k];
        		ds.setColumn(rIx, k,  v);
        	}

        	for (var i in props) {
        		var k=props[i], v=ds.getColumn(rIx, k);
        		trace(dsId +'['+ i +':'+ k +'='+ v +']')
        	}


        	this[dsId]=ds;
        	return ds;
        }

        this.fnDatasetRow2Object=function(ds, rowp) {
        	if (ds==undefined){ return null; }
        	rowp=rowp!=undefined ? rowp : ds.rowposition;
        	if (rowp==undefined){ return null; }

        	var colCunt=ds.getColCount(), colNms={}, row={};
        	for (var i=0; i<colCunt; i++) {
        		var colNm=ds.getColumnInfo(i).name, colVl=ds.getColumn(rowp, colNm);  trace('['+ colNm +':'+ colVl +']');
        		var usColNm=this.cnvtCC2US(colNm), ccColNm=this.cnvtUS2CC(colNm);
        		row[colNm]=colVl;
        		if (colNm!=usColNm) { row[usColNm]=row[colNm]; }
        		if (colNm!=ccColNm) { row[ccColNm]=row[colNm]; }
        	}

        	return row;
        }

        this.cnvtCC2US=function(s) {
        	var r='';
        	if (s==undefined) { return r; }
        	if (s.indexOf('_') > -1 || s==s.toUpperCase()) { return  s; }

        	r=s.replace(/([A-Z0-9])/g, function (g) { return '_'+g[0]; }).replace(/__/g, '_').toUpperCase();
        	// trace('<CC2US underscore="'+r+'" camelcase="'+ s +'" />');

        	return r;
        }

        this.cnvtUS2CC=function(s) {
        	var r='';
        	if (s==undefined) { return r; }
        	if (s.indexOf('_') < 0) { return  s.toLowerCase(); }

        	r=s.toLowerCase().replace(/_([a-z0-9])/g, function (g) { return g[1].toUpperCase(); });
        	// trace('<US2CC underscore="'+s+'" camelcase="'+ r +'" />');

        	return r;
        }
        this.cnvtUnderScore2CamelCase=function(sUnderScore) {
        	return this.cnvtUS2CC(sUnderScore);
        }


        this.cnvtDsRow2Object=function(dsRow) {
        	var r={};
        	if (dsRow == undefined) { return r; }
        }

        //================================================================================================================================================
        //  Grid Util
        //================================================================================================================================================

        // 그리드 이벤트에서 해당 칼럼의 ID를 찾는 햄수
        this.getBindColumnIDByIndex = function(grid, index) {
        	var text = "";
        	var columnid = null;
        	var subCell = grid.getCellProperty("body", index, "subcell");
        	if ( subCell > 0 ) {
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	}
        	else {
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if ( text && text.length > 0 ) {
        		if ( text.search(/^bind:/) > -1 ) {
        			columnid = text.replace(/^bind:/, "");
        		} else if ( text.search(/^BIND\(/) > -1 ) {
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		}
        	}
        	return columnid;
        }

        // 추가, 수정, 삭제 된 데이터셋 리턴함.
        this.getChgdRowsDataset = function(rDS) {
        	if (rDS == undefined) { return null; }

        	var tDS=new Dataset(), tChgColNm='CHNG_TYPE';
        	var rColCunt=rDS.getColCount(), rCls=[], rRowCunt=rDS.rowcount;
        	for (var i=0; i<rColCunt; i++) {
        		var cInf=rDS.getColumnInfo(i);
        		tDS.addColumn(cInf.name, cInf.type);
        		rCls.push(cInf.name);
        	}
        	tDS.addColumn(tChgColNm, 'String');

        	var chgdTypes={ 2: 'I', 4: 'U', 8: 'D' };
        	for (var i=0; i<rColCunt; i++) {
        		var rType=chgdTypes[ rDS.getRowType(i) ];  // trace(' ds ChngType ('+ i +') > ['+ rDS.getRowType(i) +'] row['+ i +'][rType:'+ rType +']');
        		if (rType == undefined) { continue; }

        		var tRow=tDS.addRow();
        		tDS.setColumn(tRow, tChgColNm, rType);
        		for (var j in rCls) {
        			tDS.setColumn(tRow, rCls[j], rDS.getColumn(i, rCls[j]));
        		}
        	}

        	return tDS;
        }

        // 서버에서 받은 에러메세지를 처리함
        this.fn_getMessageOnServer = function(str){
        	if (str == undefined) { return null; }

        	var val = str.split(',');
        	var code = ""
        	var data = ["","","",""];
        	for(var i=0; i < val.length; i++){
        		if(i==0){
        			code = val[i];
        		}
        		else{
        			data[i-1] = val[i];
        		}
        	}

        	return this.fn_getMessage(code, data[0], data[1], data[2], data[3]);
        }

        //================================================================================================================================================
        //  기타 Util
        //================================================================================================================================================
        //div 내의 폼 컨트롤의 활성화 or 비활성화 일괄 처리
        //bool : 폼 컨트롤의 활성화 or 비활성화 플래그(true, false), obj : 실행할 div(this.div_search), except : 제외할 컨트롤 목록(["edt_ucessdiId", "edt_mngAuth", "edt_bgtAuth"])
        this.fn_enableFormObjects = function(bool, obj, except) {
        	var arrComponent = obj.form.components;
        	var isExcept;
        	for(i=0; i<arrComponent.length; i++) {
        		if(arrComponent[i] instanceof nexacro.Static) continue;

        		isExcept = false;

        		if(except != null && except != "") {
        			for(j=0; j<except.length; j++) {
        				if(arrComponent[i].id == except[j]) {
        					isExcept = true;
        				}
        			}
        		}

        		if(arrComponent[i] instanceof nexacro.Edit) { //Edit 의 경우 복사가능하도록, readonly 처리
        			if(isExcept == true)  arrComponent[i].set_readonly(bool);
        			else arrComponent[i].set_readonly(!bool);
        		}
        		else { //Edit 이외의 경우 enable 처리
        			if(isExcept == true)  arrComponent[i].set_enable(!bool);
        			else arrComponent[i].set_enable(bool);
        		}
        	}
        }

        //회원생성 및 회원수정시 로그인id 생성규칙 유효성 검사
        this.fn_validateLoginId = function(strId) {
        	var isValid = true;

        	if(strId.trim() == ""){
        	  isValid = false;
        	}else{
        	  var availableChars = new RegExp(/[\._\-@0-9a-z]/,"g");

        	  var resultArray = [];
        	  resultArray = resultArray.concat(strId.match(availableChars));

        	  if(strId.length != resultArray.length){
        		  isValid = false;
        	  }else if (strId.length >= 5 && strId.length == resultArray.length){
        		  isValid = true;
        	  }else{
        		  isValid = false;
        	  }
        	}

        	return isValid;
        }

        //데이터셋 일괄 공백제거
        this.fn_trimDatasetRow = function(oDs) {
        	for(i=0; i<oDs.getRowCount(); i++) {
        		for(j=0; j<oDs.colcount; j++) {
        			//oDs.setColumn(i, j, undefined==oDs.getColumn(i, j) ? oDs.getColumn(i, j) : this.gfn_trim(oDs.getColumn(i, j)));
        			oDs.setColumn(i, j, this.gfn_trim(oDs.getColumn(i, j)));
        		}
        	}
        }

        // 사업장ID가 맞는거니?
        // 최초작성 : 박재광 20220720
        // param : bzplcId - string
        // return : boolean
        this.fn_isBzplcId = function(bzplcId) {
        	if(this.gfn_isNull(bzplcId)) {
        		return false;
        	}

        	if(this.gfn_trim(bzplcId).length != bzplcId.length) {	// 공백이 포함되어있으면
        		return false;
        	}

        	if(bzplcId.length != 10) {	// 10자리 맞냐
        		return false;
        	}

        	if(bzplcId.charAt(0) != 'S') {	// 'S'로 시작하냐
        		return false;
        	}

        	for (idx = 1; idx < 10; idx++) {	// 나머지 9자리가 모두 숫자냐
        		if(!nexacro.isNumeric(bzplcId.charAt(idx))) {
        			return false;
        		}
        	}

        	return true;
        }

        // 운영단위ID가 맞는거니?
        // 최초작성 : 박재광 20220720// param : oprUnitId - string
        // return : boolean
        this.fn_isOprUnitId = function(oprUnitId) {
        	if(this.gfn_isNull(oprUnitId)) {
        		return false;
        	}

        	if(this.gfn_trim(oprUnitId).length != oprUnitId.length) {	// 공백이 포함되어있으면
        		return false;
        	}

        	if(oprUnitId.length != 10) {	// 10자리 맞냐
        		return false;
        	}

        	if(oprUnitId.charAt(0) != 'S') {	// 'S'로 시작하냐
        		return false;
        	}

        	for (idx = 1; idx < 10; idx++) {	// 나머지 9자리가 모두 숫자냐
        		if(!nexacro.isNumeric(oprUnitId.charAt(idx))) {
        			return false;
        		}
        	}

        	return true;
        }

        // 부서ID가 맞는거니?
        // 최초작성 : 박재광 20220720
        // param : deptId - string
        // return : boolean
        this.fn_isDeptId = function(deptId) {
        	if(this.gfn_isNull(deptId)) {
        		return false;
        	}

        	if(this.gfn_trim(deptId).length != deptId.length) {	// 공백이 포함되어있으면
        		return false;
        	}

        	if(deptId.length != 10) {	// 10자리 맞냐
        		return false;
        	}

        	if(deptId.substr(0,2) != "PD") {	// 'PD'로 시작하냐
        		return false;
        	}

        	for (idx = 2; idx < 10; idx++) {	// 나머지 9자리가 모두 숫자냐
        		if(!nexacro.isNumeric(deptId.charAt(idx))) {
        			return false;
        		}
        	}

        	return true;
        }

        // 계정ID가 맞는거니?
        // 최초작성 : 박재광 20220720
        // param : acctId - string
        // return : boolean
        this.fn_isAcctId = function(acctId) {
        	if(this.gfn_isNull(acctId)) {
        		return false;
        	}

        	if(this.gfn_trim(acctId).length != acctId.length) {	// 공백이 포함되어있으면
        		return false;
        	}

        	if(acctId.length != 10) {	// 10자리 맞냐
        		return false;
        	}

        	for (idx = 0; idx < 10; idx++) {	// 나머지 9자리가 모두 숫자냐
        		if(!nexacro.isNumeric(acctId.charAt(idx))) {
        			return false;
        		}
        	}

        	var numAcctId = nexacro.toNumber(acctId);
        	if(numAcctId < 7000000001 || numAcctId > 7999999999) {	// 7000000001~7999999999
        		return false;
        	}

        	return true;
        }

        this.fn_fileDownload = function(o) {
        	var syNavi=system.navigatorname, nxEnvs=nexacro.getEnvironment();
        	var fdOrg=nxEnvs.services['svcUrl'].url+'DownloadServlet.do?file_path=${PATH}${ORI_ATFL_NM}&file_name=${ATFL_NM}';   //  DownloadServlet.do?file_path=${PATH}${ORI_ATFL_NM}&file_name=${ATFL_NM}

        	var a=null;
        	if (Array.isArray(o)) { a=o; } else { a=[]; a.push(o); }
        	for (var i in a) {
        		var e=a[i], fdUrl=fdOrg
        			.replace(/\$\{PATH\}/g       , e.PATH)
        			.replace(/\$\{ORI_ATFL_NM\}/g, encodeURIComponent(e.ORI_ATFL_NM))
        			.replace(/\$\{ATFL_NM\}/g    , encodeURIComponent(e.ATFL_NM    ))
        		;
        		if ('nexacro,IE'.indexOf(syNavi) > -1) {
        			var fDnNm='fileDownload', fDnld = this[fDnNm] || new nexacro.FileDownload(fDnNm);
        			fDnld.downloadurl = fdUrl;
        			fDnld.set_downloadfilename(o.ATFL_NM);
        			fDnld.show();
        			var bSucc = fDnld.download();
        		} else {
        			var wbUuid='wbSspBoCc_'+Math.floor(Math.random() * (999999 - 1 + 1)), oWB=this[wbUuid] || new WebBrowser(wbUuid, 0, 0, 0, 0, null, null);
        			if (this[wbUuid] == undefined) { this.addChild(wbUuid, oWB); }
        			oWB.show();
        			oWB.set_url(fdUrl);
        		}
        	}

        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
