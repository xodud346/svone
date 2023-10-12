(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleChart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">A</Col><Col id=\"Column1\">10</Col><Col id=\"Column2\">70</Col></Row><Row><Col id=\"name\">B</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">50</Col></Row><Row><Col id=\"name\">C</Col><Col id=\"Column1\">40</Col><Col id=\"Column2\">60</Col></Row><Row><Col id=\"name\">D</Col><Col id=\"Column1\">40</Col><Col id=\"Column2\">30</Col></Row><Row><Col id=\"name\">E</Col><Col id=\"Column1\">20</Col><Col id=\"Column2\">10</Col></Row><Row><Col id=\"name\">F</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">50</Col></Row><Row><Col id=\"name\">G</Col><Col id=\"Column1\">30</Col><Col id=\"Column2\">50</Col></Row><Row><Col id=\"name\">H</Col><Col id=\"Column1\">40</Col><Col id=\"Column2\">40</Col></Row><Row><Col id=\"name\">I</Col><Col id=\"Column1\">40</Col><Col id=\"Column2\">70</Col></Row><Row><Col id=\"name\">J</Col><Col id=\"Column1\">70</Col><Col id=\"Column2\">60</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sampleList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_DTM\" type=\"STRING\" size=\"17\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"SRT_SO\" type=\"STRING\" size=\"16\"/><Column id=\"PG_TP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"BASIS_PGM_YN\" type=\"STRING\" size=\"32\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_GRP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PG_TP_DTLS\" type=\"STRING\" size=\"32\"/><Column id=\"HRNK_PGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PGM_MNU_SPR_CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"17\"/><Column id=\"PGM_NM_CD\" type=\"STRING\" size=\"32\"/><Column id=\"PG_CALL_ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"QCK_MNU_USE_YN\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"REG_DTM\">1</Col><Col id=\"UPDPSN_ID\">2</Col><Col id=\"CO_CD\">3</Col><Col id=\"MNU_SPR_CD\">4</Col><Col id=\"SRT_SO\">5</Col><Col id=\"PG_TP_ID\">6</Col><Col id=\"BASIS_PGM_YN\">7</Col><Col id=\"MALL_SPR_CD\">8</Col><Col id=\"REGPSN_ID\">9</Col><Col id=\"USE_YN\">10</Col><Col id=\"PGM_ID\">11</Col><Col id=\"PGM_GRP_ID\">12</Col><Col id=\"PG_TP_DTLS\">13</Col><Col id=\"HRNK_PGM_ID\">14</Col><Col id=\"PGM_MNU_SPR_CD\">15</Col><Col id=\"UPD_DTM\">16</Col><Col id=\"PGM_NM_CD\">17</Col><Col id=\"PG_CALL_ADDR\">18</Col><Col id=\"QCK_MNU_USE_YN\">19</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new BasicChart("BasicChart00","20","20",null,"325","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chart");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "STEP Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"align": "bottomcenter"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "COL2",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:Column1",
            			"linevisible": "true",
            			"linetype": "step"
            		},
            		{
            			"id": "series1",
            			"titletext": "COL1",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#003860",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:Column2",
            			"linevisible": "true",
            			"linetype": "step"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"titletext": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	],
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	}
            });
            obj.set_categorycolumn("bind:name");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","386",null,null,"150","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_sampleList");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_format",null,"386","120","50","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleChart.xfdl", function() {
        this.Button01_onclick = function(obj,e)
        {
        	var sFormats = '<Formats><Format id="default">';
        	var sColumn = '<Columns>';
        	var sRows = '<Rows><Row size="40" band="head"/><Row size="30"/></Rows>';
        	var sHead = '<Band id="head">';
        	var sBody = '<Band id="body">';

        	var oBindDs = this.ds_sampleList;
        	for(var i = 0 ; i < oBindDs.getColCount() ; i++){
        		sColumn = sColumn + '<Column size="120"/>';
        		sHead = sHead + '<Cell col="'+i+'" text="'+oBindDs.getColID(i)+'"/>';
        		sBody = sBody + '<Cell col="'+i+'" text="bind:'+oBindDs.getColID(i) + '"/>';
        	}
        	sColumn = sColumn + '</Columns>';
        	sHead = sHead + '</Band>';
        	sBody = sBody + '</Band>';
        	sFormats = sFormats + sColumn + sRows + sHead + sBody + '</Format></Formats>';

        	this.Grid00.set_formats(sFormats);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_format.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("sampleChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
