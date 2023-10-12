(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("상품군 R&D속성 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(860,604);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list1", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EXPS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRNM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","15","48","470","77",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divPopup","20","20",null,null,"20","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_positionstep("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","0","0","300","21",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("| 상품군 R&D속성 관리");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grd_list1","0","78","330",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list1");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"R&amp;D속성코드\"/><Cell col=\"2\" text=\"R&amp;D속성명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ATTR_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRNM\" cssclass=\"grd_WF_left\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("div","326","0","64",null,null,"0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_allRight","20","50%","24","24",null,null,null,null,null,null,this.divPopup.form.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_shuttleR");
            obj.set_text("");
            this.divPopup.form.div.addChild(obj.name, obj);

            obj = new Button("btn_allLeft","20","btn_allRight:4","24","24",null,null,null,null,null,null,this.divPopup.form.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleL");
            obj.set_text("");
            this.divPopup.form.div.addChild(obj.name, obj);

            obj = new Grid("grd_list2","387","78",null,null,"0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list2");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회 결과가 존재하지 않습니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"67\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"R&amp;D속성코드\"/><Cell col=\"2\" text=\"R&amp;D속성명\"/><Cell col=\"3\" text=\"필수항목\"/><Cell col=\"4\" text=\"노출여부\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_ATTR_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRNM\" cssclass=\"grd_WF_left\"/><Cell col=\"3\" text=\"bind:MAND_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:EXPS_YN\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","0","50","120","30",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("■ 상품군 조회");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static60_00_00_00","390","50","180","30",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("■ 상품군 사용 R&D속성");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Edit("edtSearch","161","50","141","24",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_top",null,"10.00%","24","24","29",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("7");
            obj.set_text("▲");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_down","btn_top:4","10.00%","24","24",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("8");
            obj.set_text("▼");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_find","306","50","24","24",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btn_cancel00","328",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","432",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",860,604,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_28.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_28.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_28.xfdl(상품군 R&D속성 관리)
        * 작 성			일 명: 김진섭
        * 작 성	    	일 자: 2022/05/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.prdClcd 	= this.parent.prdClcd;
        this.mallSprCd 	= "20"; 					//10:SSP, 20:R&D
        this.coCd 		= this.parent.coCd;

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
        	//사용자 초기화 함수
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
        	this.ds_search.setColumn(0,"CO_CD", this.coCd);
        	this.ds_search.setColumn(0,"MALL_SPR_CD", this.mallSprCd);
        	this.fn_LRet();

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
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        				this.fn_PostformInit();
        				break;
        			case "LRet":
        			    this.fn_postLRet();
        				break;
        			case "RRet":
        			    this.fn_postRRet();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;

        			default:
        				break;
        		}
        	}
        };

        /**********************************************************************
        	05. LEFT 조회 함수 선언
        ***********************************************************************/
        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_LRet();
        };

        this.divPopup_edtSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_LRet();
        	}
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_preLRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_search.setColumn(0,"PRNM", this.divPopup.form.edtSearch.value);
        	return true;
        };

        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_LRet = function()
        {
        	if(!this.fn_preLRet())
        	{
        		return false;
        	}
        	var strSvc      = "LRet";
            var strUrl      = "/rd/category/select-prd-attr-list.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_list1=ds_output";
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

        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_postLRet = function()
        {
        	if(this.ds_list2.rowcount > 0)
        	{
        		this.ds_list1.set_enableevent(false);
        		if(!this.gfn_dsIsUpdated(this.ds_list2))
        		{
        			this.fn_RRet();
        		} else
        		{
        			var aChkArr = new Array();
        			for(var i=0; i<this.ds_list2.rowcount; i++)
        			{
        				aChkArr.push(this.ds_list2.getColumn(i, "PRD_ATTR_CD"));
        			}
        			for(var i=0; i<=aChkArr.length-1; i++)
        			{
        				var aDelArr =  new Array();
        				var row = this.ds_list1.findRow("PRD_ATTR_CD", aChkArr[i]);

        				for (var j = row; j <= row; j++)
        				{
        					aDelArr.push(j);
        				}
        				this.ds_list1.deleteMultiRows(aDelArr);
        			}
        		}
        		this.ds_list1.set_enableevent(true);
        	}else
        	{
        		this.fn_RRet();
        	}
        	//trace(this.ds_master.saveXML());

        };
        /**********************************************************************
        	05_1. RIGHT 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_preRRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_search.setColumn(0,"PRD_CLCD", this.prdClcd);
        	return true;
        };
        /**
         * 기능 : 화면조회 전 실행
         */
        this.fn_RRet = function()
        {
        	if(!this.fn_preRRet())
        	{
        		return false;
        	}
        	var strSvc      = "RRet";
            var strUrl      = "/rd/category/select-clsf-attr-mapp-list.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_list2=ds_output";
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


        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_postRRet = function()
        {
        	var aChkArr = new Array();
        	for(var i=0; i<this.ds_list2.rowcount; i++)
        	{
        		aChkArr.push(this.ds_list2.getColumn(i, "PRD_ATTR_CD"));
        	}

        	for(var i=0; i<=aChkArr.length-1; i++)
        	{
        		var aDelArr =  new Array();
        		var row = this.ds_list1.findRow("PRD_ATTR_CD", aChkArr[i]);

        		for (var j = row; j <= row; j++)
        		{
        			aDelArr.push(j);
        		}
        		this.ds_list1.deleteMultiRows(aDelArr);
        	}
        	//trace(this.ds_master.saveXML());
        };
        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	 var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
             if(result == 0)
             {
                 return false;
             }
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }


            var strSvc      = "Save";
            var strUrl      = "/rd/category/save-clsf-attr-mapp.do";
        	var strInDs     = "ds_save=ds_list2:U";
            var strOutDs    = "";
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
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.fn_alert("ERRR000007","저장","","question");   //정상적으로 저장되었습니다.
        	var resData 	= {};
        	var resString 	= "";

        	resData.PRD_CLCD = this.prdClcd;
        	resString = JSON.stringify(resData);
        	this.close(resString);

        };
        /**********************************************************************
        	07. 닫기버튼
        ***********************************************************************/
        this.btn_clear_onclick = function(obj,e)
        {
        	this.close();
        };

        /**********************************************************************
        	08.Get, Set Method
        ***********************************************************************/
        //전체 메뉴 이동 호출 함수
        this.fn_allMoveDataSet= function(orgGrid, targetGrid, orgDs, targetDs){
        	var aChkArr = new Array();

        	for(var i=0; i<orgDs.rowcount; i++)
        	{
        		if(orgDs.getColumn(i, "CHK") == 1)
        		{
        			aChkArr.push(orgDs.getColumn(i, "PRD_ATTR_CD"));
        		}
        	}
        	this.fnAllCopy(orgGrid, targetGrid, orgDs, targetDs,  aChkArr);
        };

        this.fnAllCopy= function(orgGrid, targetGrid, orgDs, targetDs, arrayRow){
        	var dsOrg	  = orgDs;
        	var dsTarget  = targetDs;
        	var nEnd = 0;
        	var nStart = 0;
        	var nRow = 0;

        	for(var i=0; i<=arrayRow.length-1; i++){
        		var aDelArr =  new Array();
        		var row = orgDs.findRow("PRD_ATTR_CD", arrayRow[i]);

        		if( row >= 0){
        			//start, end에 현재 row 값 세팅
        			nStart = nEnd = row;
        			dsTarget.set_enableevent(false);

        			for (var j = nStart; j <= nEnd; j++){
        				//옮길트리에서 seqKey에 해당하는 값 찾아서 중복제거
        				var findRow = dsTarget.findRowExpr("PRD_ATTR_CD" + " == "+ dsOrg.getColumn(j, "PRD_ATTR_CD"));
        				if(findRow < 0){
        					nRow = dsTarget.addRow();
        					dsTarget.copyRow(nRow, dsOrg, j);
        					dsTarget.setColumn(nRow, "CHK", 0);
        					dsTarget.setColumn(nRow, "PRD_CLCD", this.prdClcd);
        					dsTarget.setColumn(nRow, "SRT_SO", nRow+1 );
        					dsTarget.setColumn(nRow, "EXPS_YN", 'Y' );
        				}
        				//삭제할 배열 row 추가
        				aDelArr.push(j);
        			}
        			dsTarget.set_enableevent(true);

        			//옮길 트리에 추가한 후 삭제시작
        			//1.선택한 현재~자식 row 삭제
        			dsOrg.deleteMultiRows(aDelArr);

        		}

        		nEnd = 0;
        		nStart = 0;
        		nRow = 0;
        	}
        };

         /**********************************************************************
        	09.기타 Control Event
        ***********************************************************************/
        this.btn_allRight_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list1.getCaseCount("CHK == 1");
        	if(chkCnt == 0)
        	{
        		this.fn_alert("ERRR000091","저장","","question");
        		return false;
        	}

        	this.fn_allMoveDataSet(this.divPopup.form.grd_list1, this.divPopup.form.grd_list2, this.ds_list1, this.ds_list2);
        	this.ds_list2.set_keystring("S:+SRT_SO");
        };

        this.btn_allLeft_onclick = function(obj,e)
        {
        	var chkCnt = this.ds_list2.getCaseCount("CHK == 1");
        	if(chkCnt == 0)
        	{
        		this.fn_alert("ERRC000050","저장","데이터","question");   //선택된 &1 이(가) 없습니다.
        		return false;
        	}

        	this.fn_allMoveDataSet(this.divPopup.form.grd_list2, this.divPopup.form.grd_list1, this.ds_list2, this.ds_list1);
        	this.ds_list1.set_keystring("S:+PRD_ATTR_CD");
        };

        this.divPopup_btn_top_onclick = function(obj,e)
        {
        	var nTRow = this.ds_list2.rowposition;
        	if(nTRow == 0)
        	{
        		this.fn_alert("ERRN000038","저장","","question");
        		return false;
        	}
        	this.ds_list2.moveRow(nTRow, (nTRow-1));

        	for(var i=0; i<this.ds_list2.rowcount; i++)
        	{
        		this.ds_list2.setColumn(i,"SRT_SO", i+1);
        	}
        };

        this.divPopup_btn_down_onclick = function(obj,e)
        {
        	var nTRow = this.ds_list2.rowposition;
        	if(nTRow == (this.ds_list2.getRowCount()-1))
        	{
        		this.fn_alert("ERRN000038","저장","","question");
        		return false;
        	}
        	this.ds_list2.moveRow(nTRow, (nTRow+1));

        	for(var i=0; i<this.ds_list2.rowcount; i++)
        	{
        		this.ds_list2.setColumn(i,"SRT_SO", i+1);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divPopup.form.div.form.btn_allRight.addEventHandler("onclick",this.btn_allRight_onclick,this);
            this.divPopup.form.div.form.btn_allLeft.addEventHandler("onclick",this.btn_allLeft_onclick,this);
            this.divPopup.form.edtSearch.addEventHandler("onkeyup",this.divPopup_edtSearch_onkeyup,this);
            this.divPopup.form.btn_top.addEventHandler("onclick",this.divPopup_btn_top_onclick,this);
            this.divPopup.form.btn_down.addEventHandler("onclick",this.divPopup_btn_down_onclick,this);
            this.divPopup.form.btn_find.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_cancel00.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_RD_28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
