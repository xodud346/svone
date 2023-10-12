(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">A</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">B</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">C</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">D</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","61","82","279","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","363","88","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("transaction");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCode.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.ds_combo.copyData(this.ds_temp,true);
        	this.fn_callback("comCode",0,"");
        };


        this.fn_callback = function(sSeviceId, nErrCd, sErrM){
        	if(sSeviceId == "comCode"){
        		this.ds_combo.insertRow(0);
        		this.ds_combo.setColumn(0,"NAME","전체");
        	}
        };
        this.comCode_ondrag = function(obj,e)
        {
        	var oStatic = new Static();
        trace(" e.screenx===>"+ e.screenx);
        trace(" e.screeny===>"+ e.screeny);
        trace("e.clientx ===> " + e.clientx);
        trace("e.clienty ===> " + e.clienty);
        	var nLeft = e.clientx;
        	var nTop = e.clienty;
        	oStatic.init( "staDrag", nLeft, nTop, 200,50);
        	this.addChild("staDrag",oStatic);
        	oStatic.set_background("#bcbcbc");
        	oStatic.set_text("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        	oStatic.show();
        	return true;
        };

        this.comCode_ondrop = function(obj,e)
        {
        trace("grd_mainList_ondrop");
        	var oStatic = this.removeChild("staDrag");
        trace(oStatic);
        	oStaticdestroy();
        };

        this.comCode_ondragmove = function(obj,e)
        {
        trace("grd_mainList_ondragmove");
        	var nLeft = e.clientx;
        	var nTop = e.clienty;
        	this.staDrag.move(nLeft,nTop);
        };

        this.Calendar00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ondrag",this.comCode_ondrag,this);
            this.addEventHandler("ondrop",this.comCode_ondrop,this);
            this.addEventHandler("ondragmove",this.comCode_ondragmove,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("comCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
