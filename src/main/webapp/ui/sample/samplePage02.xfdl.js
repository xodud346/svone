(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePage01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1328,843);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sampleList", this);
            obj._setContents("<ColumnInfo><Column id=\"_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PG_TP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PG_TP_DTLS\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"17\"/><Column id=\"PGM_NM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PG_CALL_ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\">1</Col><Col id=\"MNU_SPR_CD\">1</Col><Col id=\"UPDPSN_ID\">AA</Col></Row><Row><Col id=\"CO_CD\">3</Col><Col id=\"MNU_SPR_CD\">2</Col><Col id=\"UPDPSN_ID\">BB</Col></Row><Row><Col id=\"CO_CD\">4</Col><Col id=\"MNU_SPR_CD\">3</Col><Col id=\"UPDPSN_ID\">CC</Col></Row><Row><Col id=\"CO_CD\"/><Col id=\"MNU_SPR_CD\">4</Col><Col id=\"UPDPSN_ID\">DD</Col></Row><Row><Col id=\"CO_CD\"/><Col id=\"MNU_SPR_CD\">5</Col><Col id=\"UPDPSN_ID\">EE</Col></Row><Row><Col id=\"CO_CD\"/><Col id=\"MNU_SPR_CD\">6</Col><Col id=\"UPDPSN_ID\">FF</Col></Row><Row><Col id=\"CO_CD\">7</Col><Col id=\"MNU_SPR_CD\">7</Col><Col id=\"UPDPSN_ID\">GG</Col></Row><Row><Col id=\"CO_CD\">5</Col><Col id=\"MNU_SPR_CD\">8</Col><Col id=\"UPDPSN_ID\">HH</Col></Row><Row><Col id=\"CO_CD\">4</Col><Col id=\"MNU_SPR_CD\">9</Col><Col id=\"UPDPSN_ID\">II</Col></Row><Row><Col id=\"CO_CD\">10</Col><Col id=\"MNU_SPR_CD\">10</Col><Col id=\"UPDPSN_ID\">JJ</Col></Row><Row><Col id=\"CO_CD\">11</Col><Col id=\"MNU_SPR_CD\">11</Col><Col id=\"UPDPSN_ID\">KK</Col></Row><Row><Col id=\"CO_CD\">12</Col><Col id=\"MNU_SPR_CD\">12</Col><Col id=\"UPDPSN_ID\">LL</Col></Row><Row><Col id=\"CO_CD\">13</Col><Col id=\"MNU_SPR_CD\">13</Col><Col id=\"UPDPSN_ID\">MM</Col></Row><Row><Col id=\"CO_CD\">14</Col><Col id=\"MNU_SPR_CD\">14</Col><Col id=\"UPDPSN_ID\">NN</Col></Row><Row><Col id=\"CO_CD\">15</Col><Col id=\"MNU_SPR_CD\">15</Col><Col id=\"UPDPSN_ID\">OO</Col></Row><Row><Col id=\"CO_CD\">16</Col><Col id=\"MNU_SPR_CD\">16</Col><Col id=\"UPDPSN_ID\">PP</Col></Row><Row><Col id=\"CO_CD\">17</Col><Col id=\"MNU_SPR_CD\">17</Col><Col id=\"UPDPSN_ID\">QQ</Col></Row><Row><Col id=\"CO_CD\">18</Col><Col id=\"MNU_SPR_CD\">18</Col><Col id=\"UPDPSN_ID\">RR</Col></Row><Row><Col id=\"CO_CD\">19</Col><Col id=\"MNU_SPR_CD\">19</Col><Col id=\"UPDPSN_ID\">SS</Col></Row><Row><Col id=\"CO_CD\">20</Col><Col id=\"MNU_SPR_CD\">20</Col><Col id=\"UPDPSN_ID\">TT</Col></Row><Row><Col id=\"CO_CD\">21</Col><Col id=\"MNU_SPR_CD\">21</Col><Col id=\"UPDPSN_ID\">UU</Col></Row><Row><Col id=\"CO_CD\">22</Col><Col id=\"MNU_SPR_CD\">22</Col><Col id=\"UPDPSN_ID\">VV</Col></Row><Row><Col id=\"CO_CD\">23</Col><Col id=\"MNU_SPR_CD\">23</Col><Col id=\"UPDPSN_ID\">WW</Col></Row><Row><Col id=\"CO_CD\">24</Col><Col id=\"MNU_SPR_CD\">24</Col><Col id=\"UPDPSN_ID\">XX</Col></Row><Row><Col id=\"CO_CD\">25</Col><Col id=\"MNU_SPR_CD\">25</Col><Col id=\"UPDPSN_ID\">YY</Col></Row><Row><Col id=\"CO_CD\">26</Col><Col id=\"MNU_SPR_CD\">26</Col><Col id=\"UPDPSN_ID\">ZZ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색 영역");
            obj.set_background("#fee2e1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"125","60","30","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up","20","130","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("▲");
            this.addChild(obj.name, obj);

            obj = new Button("btn_up00","55","130","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("▼");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mainList","30","157",null,null,"10","33",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_sampleList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"REG_DTM\"/><Cell col=\"2\" text=\"UPDPSN_ID\"/><Cell col=\"3\" text=\"CO_CD\"/><Cell col=\"4\" text=\"MNU_SPR_CD\"/><Cell col=\"5\" text=\"SRT_SO\"/><Cell col=\"6\" text=\"PG_TP_ID\"/><Cell col=\"7\" text=\"BASIS_PGM_YN\"/><Cell col=\"8\" text=\"MALL_SPR_CD\"/><Cell col=\"9\" text=\"REGPSN_ID\"/><Cell col=\"10\" text=\"USE_YN\"/><Cell col=\"11\" text=\"PGM_ID\"/><Cell col=\"12\" text=\"PGM_GRP_ID\"/><Cell col=\"13\" text=\"PG_TP_DTLS\"/><Cell col=\"14\" text=\"HRNK_PGM_ID\"/><Cell col=\"15\" text=\"PGM_MNU_SPR_CD\"/><Cell col=\"16\" text=\"UPD_DTM\"/><Cell col=\"17\" text=\"PGM_NM_CD\"/><Cell col=\"18\" text=\"PG_CALL_ADDR\"/><Cell col=\"19\" text=\"QCK_MNU_USE_YN\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_CHK\"/><Cell col=\"1\" text=\"bind:REG_DTM\"/><Cell col=\"2\" text=\"bind:UPDPSN_ID\"/><Cell col=\"3\" text=\"bind:CO_CD\"/><Cell col=\"4\" text=\"bind:MNU_SPR_CD\"/><Cell col=\"5\" text=\"bind:SRT_SO\"/><Cell col=\"6\" text=\"bind:PG_TP_ID\"/><Cell col=\"7\" text=\"bind:BASIS_PGM_YN\"/><Cell col=\"8\" text=\"bind:MALL_SPR_CD\"/><Cell col=\"9\" text=\"bind:REGPSN_ID\"/><Cell col=\"10\" text=\"bind:USE_YN\"/><Cell col=\"11\" text=\"bind:PGM_ID\"/><Cell col=\"12\" text=\"bind:PGM_GRP_ID\"/><Cell col=\"13\" text=\"bind:PG_TP_DTLS\"/><Cell col=\"14\" text=\"bind:HRNK_PGM_ID\"/><Cell col=\"15\" text=\"bind:PGM_MNU_SPR_CD\"/><Cell col=\"16\" text=\"bind:UPD_DTM\"/><Cell col=\"17\" text=\"bind:PGM_NM_CD\"/><Cell col=\"18\" text=\"bind:PG_CALL_ADDR\"/><Cell col=\"19\" text=\"bind:QCK_MNU_USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1328,843,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("samplePage02.xfdl", function() {
        /*******************************************************
          PROJECT NAME : MarketA
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//메뉴에서 호출과 업무화면간 연동으로 화면 오픈 구분
        	var oForm = this.getOwnerFrame();
        	var oArgs = oForm.arguments["oArgs"];
        	if(this.gfn_isNull(oArgs)){
        		//alert("메뉴에서 OPEN");
        	} else {
        		trace("oArgs===>" + oArgs["aaa"]);
        		//alert("업무화면에서 OPEN");
        	}
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "sampleSelect";
        		var sUrl = "/sampleSelectMap.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_sampleList=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "sampleSelect"){
        			this.ds_sampleList.addColumn("_CHK","String");
        			//trace(this.ds_sampleList.saveXML());
        		}
        	}
        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	//조회 버튼 click  이벤트
        	this.btn_search_onclick = function(obj,e)
        	{
        		this.fn_search();
        	};

        this.Button00_onclick = function(obj,e)
        {
        	trace("Quick Frame ===>"+this.fv_oApp.agv_QuickFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_QuickFrame.getOffsetHeight());
        	trace("Left Frame ===>"+this.fv_oApp.agv_LeftFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_LeftFrame.getOffsetHeight());
        	trace("Main Frame ===>"+this.fv_oApp.agv_MainFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MainFrame.getOffsetHeight());
        	trace("Mdi Frame ===>"+this.fv_oApp.agv_MdiFrame.getOffsetWidth() + " : " +  this.fv_oApp.agv_MdiFrame.getOffsetHeight());
        	trace("Work Frame Set===>"+this.fv_oApp.agv_WorkFrameSet.getOffsetWidth() + " : " +  this.fv_oApp.agv_WorkFrameSet.getOffsetHeight());
        };

        this.btn_up_onclick = function(obj,e)
        {
        	var nTRow = this.ds_sampleList.rowposition;
        	if(nTRow == 0){
        		this.alert("더 이상 이동할 수 없습니다.");
        		return false;
        	}

        	this.ds_sampleList.moveRow(nTRow, (nTRow-1));
        };

        this.btn_up00_onclick = function(obj,e)
        {
        	var nTRow = this.ds_sampleList.rowposition;
        	if(nTRow == (this.ds_sampleList.getRowCount()-1)){
        		this.alert("더 이상 이동할 수 없습니다.");
        		return false;
        	}

        	this.ds_sampleList.moveRow(nTRow, (nTRow+1));
        };


        //drag 시작
        this.grd_mainList_ondrag = function(obj,e)
        {
        	var nRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	var sValue = oBindDs.getColumn(e.row,"UPDPSN_ID");

        	//static component check
        	var oStatic =  this["sta_drag"];
        	if(!this.gfn_isNull(oStatic)){
        		oStatic = this.removeChild("sta_drag");
        		oStatic.destroy();
        	}

        	//static component position 설정
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();

        	//static component 생성
        	oStatic = new Static();
        	oStatic.init( "sta_drag", nLeft, nTop, 200,50);
        	this.addChild("sta_drag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text(sValue);
        	oStatic.uAsRow = nRow;
        	oStatic.show();

        	return true;

        };

        //이동
        this.grd_mainList_ondragmove = function(obj,e)
        {
        	var nLeft = e.clientx + obj.getOffsetLeft() + 10;
        	var nTop  = e.clienty + obj.getOffsetTop();
        	this.sta_drag.move(nLeft,nTop);
        };


        //row 변경
        this.grd_mainList_ondrop = function(obj,e)
        {
        	var nToRow = e.row;
        	var oBindDs = this[obj.binddataset];
        	oBindDs.exchangeRow(this.sta_drag.uAsRow,nToRow);
        	var	oStatic = this.removeChild("sta_drag");
        	oStatic.destroy();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_up.addEventHandler("onclick",this.btn_up_onclick,this);
            this.btn_up00.addEventHandler("onclick",this.btn_up00_onclick,this);
            this.grd_mainList.addEventHandler("ondrag",this.grd_mainList_ondrag,this);
            this.grd_mainList.addEventHandler("ondrop",this.grd_mainList_ondrop,this);
            this.grd_mainList.addEventHandler("ondragmove",this.grd_mainList_ondragmove,this);
        };
        this.loadIncludeScript("samplePage02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
