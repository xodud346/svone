(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_CA_BATCH");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(990,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prcBatch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dpBatch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">123</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","80","225","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_prcBatch");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ENAME\"/><Cell col=\"1\" text=\"EMPNO\"/><Cell col=\"2\" text=\"JOB\"/></Band><Band id=\"body\"><Cell text=\"bind:ENAME\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:JOB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","535","225","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dpBatch");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ENAME\"/><Cell col=\"1\" text=\"EMPNO\"/><Cell col=\"2\" text=\"JOB\"/></Band><Band id=\"body\"><Cell text=\"bind:ENAME\"/><Cell col=\"1\" text=\"bind:EMPNO\"/><Cell col=\"2\" text=\"bind:JOB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","80","120","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가격 배치");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","540","120","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("진열 배치");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","320","120","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("일 배치");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",990,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_CA_BATCH.xfdl", function() {


        this.SSP_BO_CA_BATCH_onload = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        };
        this.fn_prcBatch = function()	{

        		var sSvcId = "PrcBatch";
        		var sUrl = "/pc/pc-batch/prc.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_prcBatch=ds_prcBatch";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        this.fn_dpBatch = function()	{
        		var sSvcId = "DpBatch";
        		var sUrl = "/pc/pc-batch/dp.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_dpBatch=ds_dpBatch";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };

        this.fn_dayBatch = function()	{
        		var sSvcId = "DayBatch";
        		var sUrl = "/pc/pc-batch/day.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_dpBatch=ds_dpBatch";
        		var arg = "";
        		var callback = "fn_callBack";

        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        };
        this.fn_callBack = function(svcID, errorCode, errorMsg)	{

        		if(svcID == "PrcBatch"){
        		}
        		else if(svcID == "DpBatch"){
        		}
        		else if(svcID == "DayBatch"){
        		}
        }

        this.Button00_onclick = function(obj,e)
        {

        	this.fn_prcBatch();
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.fn_dpBatch();
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
        	this.fn_dayBatch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SSP_BO_CA_BATCH_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CA_BATCH.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
