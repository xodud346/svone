(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmPaging");
            this.set_titletext("페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(1328,37);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_page","0","5","800","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1328,37,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPaging.xfdl", function() {

        /************************************************************************************************
        * FORM 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oPagingDiv = null;
        	this.fv_nTotRowCount = 0;		// 전체 Row Count
        	this.fv_nPageCnt = 0;			// 전체페이지갯수
        	this.fv_nPage = 1;				// 현제 page Number
        	this.fv_nPageNum = 0;			// 현제 page Number
        	this.fv_nPageMaxCnt = 10;		// 표현 할수 있는 Page cnt
        	this.fv_sCallbackFn = ""; 		// callback 함수

        /************************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        ************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        };

        /************************************************************************************************
        * transaction 호출 함수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * callback 함수 영역
        ************************************************************************************************/
        /************************************************************************************************
        * 외부 호출 되는 함수
        ************************************************************************************************/
        	this.cfn_createPage = function(oPagingDiv,nTotalCnt, nPageRowCnt,sCallBack){
        		this.fv_oPagingDiv = oPagingDiv;
        		this.fv_nTotRowCount = nTotalCnt;
        		this.fv_nPageRowCnt = nPageRowCnt;
        		this.fv_nPage = nexacro.toNumber(this.fv_oPagingDiv.uPage);
        		this.fv_nPageNum = nexacro.toNumber(this.fv_oPagingDiv.uPageNum);
        		this.fv_sCallbackFn = sCallBack;
        		this.fv_nPageCnt = nexacro.ceil(this.fv_nTotRowCount/this.fv_nPageRowCnt);

        		this.fv_oPagingDiv.uPageCnt = this.fv_nPageCnt;
        		this.fv_oPagingDiv.uTotCount = this.fv_nTotRowCount;
        		//component 삭제
        		this.fn_deleteComponent();

        		/*component 생성 초기화 설정*/
        		var nTermBtn = 2;		 //버튼사이
        		var nTerm = 14;   		 //큰버튼과 숫자사이
        		var nTernLastNum = 12; 	 //마지막숫자버튼과 뒤로버튼사이

        		var nLeft = 3;
        		var nTop = 0;
        		var nWidth = 21;
        		var nNumWidth = 37;
        		var nHeight = 21;

        		var oPageDiv = this.div_page;
        		var nStartPage = this.fv_nPage;
        		if(this.fv_nPageCnt < 1){
        			//조회된 데이터가 없는 경우
        			nStartPage = 1;
        			nEndPage = 1;
        		} else {
        			if(this.fv_nPage == 1){
        				nStartPage = 1;
        				nEndPage = 10;
        				if(nEndPage > this.fv_nPageCnt){
        					nEndPage =this.fv_nPageCnt;
        				}
        			} else {
        				var nRest = this.fv_nPage%10;
        				if(nRest < 1){
        					nStartPage = nexacro.toNumber(this.fv_nPage) - 9;
        				} else {
        					nStartPage = nexacro.toNumber(this.fv_nPage) - nRest + 1;
        				}
        				nEndPage = nStartPage + 9
        				if(nEndPage > this.fv_nPageCnt){
        					nEndPage = this.fv_nPageCnt;
        				}
        			}
        		}
        		var nPage = 1;
        		/************************************************************************
        		 * 첫페이지(<<) 버튼생성
        		 ************************************************************************/
        		var oBtnFirst = new Button("btn_First", nLeft, nTop, nWidth, nHeight, null, null);
        		oPageDiv.addChild(oBtnFirst.name, oBtnFirst);

        		oBtnFirst.set_cssclass("btn_WF_paging_first");
        		oBtnFirst.addEventHandler("onclick", this.fn_movePage, this);
        		nPage = this.fv_nPage - 5;
        		if(nPage <= 1){
        			nPage = 1;
        		}
        		oBtnFirst.uPage = nPage;

        		oBtnFirst.set_enable(true);

        		// 현재페이지가 '1'이면 비활성화
        		if( this.fv_nPage < 11 ) {
        			oBtnFirst.set_visible(false);
        		}
        		oBtnFirst.show();

        		nLeft = nLeft + nWidth + nTermBtn;	//left값 계산
        		/************************************************************************
        		 * 앞으로(<) 버튼생성
        		 ************************************************************************/
        		var oBtnBefore = new Button("btn_before", nLeft, nTop, nWidth, nHeight, null, null);
        		oPageDiv.addChild(oBtnBefore.name, oBtnBefore);

        		oBtnBefore.set_cssclass("btn_WF_paging_prev");

        		oBtnBefore.addEventHandler("onclick", this.fn_movePage, this);
        		oBtnBefore.set_enable(true);

        		// 현재페이지가 '1'이면 비활성화
        		if( this.fv_nPage < 11)	{
        			oBtnBefore.set_visible(false);
        		}
        		oBtnBefore.show();

        		nLeft = nLeft + nWidth + nTerm;	//left값 계산
        		/************************************************************************
        		 *페이징[1 2 3 4 5 6 7 8 9 10] 버튼생성
        		 ************************************************************************/

        		for(var i=nStartPage; i<=nEndPage; i++ ) {
        			oBtnPage = new Button("btn_page"+i,  nLeft, nTop, nNumWidth, nHeight, null, null);
        			oPageDiv.addChild(oBtnPage.name, oBtnPage);
        			oBtnPage.set_cssclass("btn_WF_paging");
        			oBtnPage.set_text(i);
        			oBtnPage.addEventHandler("onclick", this.fn_movePage, this);

        			if(i == this.fv_nPage) {
        				oBtnPage.set_cssclass("btn_WF_paging_S"); //누름표시
        			}
        			oBtnPage.show();

        			nLeft = nLeft + nNumWidth + nTermBtn; //left값 계산
        		}

        		nLeft = nLeft + nTernLastNum;//left값 계산
        		/************************************************************************
        		 * 뒤로(>) 버튼생성
        		 ************************************************************************/
        		var oBtnNext = new Button("btn_next", nLeft, nTop, nWidth, nHeight, null, null);
        		oPageDiv.addChild(oBtnNext.name, oBtnNext);
        		oBtnNext.set_cssclass("btn_WF_paging_next");
        		oBtnNext.addEventHandler("onclick", this.fn_movePage, this);
        		oBtnNext.set_enable(true);

        		var nVisibleCnt = this.fv_nPageCnt - (this.fv_nPageCnt % 10);
        		if( this.fv_nPage > nVisibleCnt){
        			oBtnNext.set_visible(false);
        		}
        		oBtnNext.show();

        		nLeft = nLeft + nWidth + nTermBtn; //left값 계산
        		/************************************************************************
        		* 마지막페이지(>>) 버튼생성
        		************************************************************************/
        		var oBtnEnd = new Button("btn_end", nLeft, nTop, nWidth, nHeight, null, null);
        		oPageDiv.addChild(oBtnEnd.name, oBtnEnd);
        		oBtnEnd.set_cssclass("btn_WF_paging_last");

        		oBtnEnd.addEventHandler("onclick", this.fn_movePage, this);
        		if(this.fv_nPage == 1){
        			nPage = this.fv_nPage + 4;
        		} else {
        			nPage = this.fv_nPage + 5;
        		}
        		if(nPage >= this.fv_nPageCnt){
        			nPage = this.fv_nPageCnt
        		}
        		oBtnEnd.uPage = nPage;

        		oBtnEnd.set_enable(true);

        		var nVisibleCnt = this.fv_nPageCnt - (this.fv_nPageCnt % 10);
        		if( this.fv_nPage > nVisibleCnt){
        			oBtnEnd.set_visible(false);
        		}
        // 		if( this.fv_nPage == this.fv_nPageCnt) {
        // 			oBtnEnd.set_enable(false);
        // 		}
        		oBtnEnd.show();

        		nLeft = nLeft + nWidth ;	//left값 계산

        		//생성된 컴포넌트 갯수에 따른 div의 Width 조절
        		oPageDiv.set_width(nLeft + 6);

        		//가운데로
        		this.fvPageLeft = ((800 - nLeft) / 2);
        		this.fn_setCenter(this);

        		this.lookupFunc(this.fv_sCallbackFn).call(false);
        	};
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        	//page component 삭제 함수
        	this.fn_deleteComponent = function(){
        		var oComponent = null;
        		var aComponent = this.div_page.form.components;
        		for(var i = aComponent.length-1 ; i >= 0  ; i--){
        			oComponent = this.div_page.removeChild(aComponent[i].name);
        			oComponent.destroy();
        		}
        	};

        	//페이지 이동 버튼 click 함수
        	this.fn_movePage = function(obj,e)
        	{

        		var nPage = 1;
        		var nRest = this.fv_nPage % 10;
        		switch(obj.name){
        			case "btn_First":
        				nPage = 1;
        				//nPage = nexacro.toNumber(obj.uPage);
        			break;
        			case "btn_before":
        				if(nRest < 1){
        					nPage = this.fv_nPage -19;
        					if(nPage < 1){
        						nPage = 1;
        					}
        				} else {
        					nPage = this.fv_nPage-(this.fv_nPage%10)-9;
        					if(nPage < 1){
        						nPage = 1;
        					}
        				}
        			break;
        			case "btn_next":
        				if(nRest < 1){
        					nPage = this.fv_nPage + 1;
        				} else {
        					nPage = this.fv_nPage-(this.fv_nPage%10)+11;
        				}
        				if(nPage >= this.fv_nPageCnt){
        					nPage = this.fv_nPageCnt;
        				}
        				//nPage = this.fv_nPage + 1;
        			break;
        			case "btn_end":
        				nPage = this.fv_nPageCnt;
        				//nPage = nexacro.toNumber(obj.uPage);
        			break;
        			default:
        				nPage = nexacro.toNumber(obj.text);
        			break;
        		}
        		this.fv_oPagingDiv.uPage= nPage;
        		this.fv_oPagingDiv.uPageNum = (nPage-1)*nexacro.toNumber(this.fv_nPageRowCnt);
        		this.lookupFunc(this.fv_sCallbackFn).call(true);
        	};

        	//pagingDiv가 가운데오도록
        	this.fn_setCenter = function(obj)
        	{
        		var oLeft = this.fvPageLeft;
        		var oWidth = 800;
        		var diffWidth = nexacro.toNumber(obj.getOffsetWidth()) - oWidth;

        		this.div_page.move((parseFloat(oLeft) + parseFloat(diffWidth/2)),5);
        	};

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        	this.form_onsize = function(obj,e)
        	{
        		if (this.fv_sCallbackFn != "") this.fn_setCenter(obj);
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("cmmPaging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
