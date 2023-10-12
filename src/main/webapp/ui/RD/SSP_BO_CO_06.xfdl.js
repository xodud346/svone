(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample008_excel");
            this.set_titletext("EXCEL IMPORT/EXPORT");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">홍길동</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">영문</Col></Row><Row><Col id=\"ID\">B-02</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col></Row><Row><Col id=\"ID\">C-01</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"cond1\" type=\"STRING\" size=\"256\"/><Column id=\"cond2\" type=\"STRING\" size=\"256\"/><Column id=\"cond3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"date\">20171120</Col><Col id=\"cond1\">서울시</Col><Col id=\"cond2\">강남구</Col><Col id=\"cond3\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list00", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A1111</Col><Col id=\"NAME\">홍1</Col><Col id=\"DESCRIPTION\">123a</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col></Row><Row><Col id=\"ID\">A2222</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456a</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col></Row><Row><Col id=\"ID\">B1111</Col><Col id=\"NAME\">홍2</Col><Col id=\"DESCRIPTION\">789a</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">영문</Col></Row><Row><Col id=\"ID\">B2222</Col><Col id=\"NAME\">홍고딕</Col><Col id=\"DESCRIPTION\">987a</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col></Row><Row><Col id=\"ID\">C1111</Col><Col id=\"NAME\">김수식</Col><Col id=\"DESCRIPTION\">765a</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnExcelEx01",null,"63","90","34","616",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("excel export");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelImport",null,"63","160","34","18",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("excel import");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","169",null,"273","17",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\" background=\"beige\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\" background=\"beige\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","13","808","1007","142",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_cond");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제조일자\"/><Cell col=\"1\" text=\"대분류\"/><Cell col=\"2\" text=\"중분류\"/><Cell col=\"3\" text=\"사용유무\"/></Band><Band id=\"body\"><Cell text=\"bind:date\"/><Cell col=\"1\" text=\"bind:cond1\"/><Cell col=\"2\" text=\"bind:cond2\"/><Cell col=\"3\" text=\"bind:cond3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelEx02",null,"63","150","34","456",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회조건(Grid)");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","55","66","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","205","66","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","55","106","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","205","106","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelSheetEx01",null,"104","90","34","616",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Sheet별");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","11","459",null,null,"14","18",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"사용유무\"/><Cell col=\"4\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\" background=\"beige\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\" background=\"beige\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","65","54","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("제조일자");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","150","65","42","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대분류");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","105","38","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("중분류");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","147","105","54","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사용유무");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelEx04",null,"63","95","34","195",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("excel export");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelSheetEx04",null,"104","95","34","195",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Sheet별");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"21","96","35","196",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("- 컬럼제외 -");
            obj.set_textAlign("center");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelEx03",null,"63","150","34","296",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회조건(배열)");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelSheetEx03",null,"104","150","34","296",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Sheet별 조회조건(배열)");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelSheetEx02",null,"104","150","34","456",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Sheet별 조회조건(Grid)");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"21","160","35","18",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("- EXCEL IMPORT -");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"21","255","35","453",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("- EXCEL EXPORT -");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_cond","date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit01","value","ds_cond","cond1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit02","value","ds_cond","cond2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit03","value","ds_cond","cond3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_CO_06.xfdl", function() {

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };
        /****************************************EXPORT 처리****************************************************/
        /////////////////////////////////// Export 일반 ///////////////////////////////

        /**
         * @class excel export <br>
         * @param {Object} objGrid - Grid Object
         * @param {String} [sSheetName]	- sheet name[생략가능]
         * @param {String} [sFileName]	- file name[생략가능]
         * @return N/A
         * @example
         * this.gfn_excelExport(this.grid_export, "SheetName", "FileName");
         */
        this.btnExcelEx01_onclick = function(obj,e)
        {

        	this.gfn_excelExport(this.Grid00, "소분류","소문류");
        };

        //////////////////////////////Export 조회조건 포함(Grid) /////////////////////////////
        /**
         * @class excel export <br>
         * @param {Object} objGrid - Grid Object
         * @param {String} [sSheetName]	- sheet name[생략가능]
         * @param {String} [sFileName]	- file name[생략가능]
         * @param {Object} objCondition - Grid Object(조회조건)
         * @return N/A
         * @example
         * this.gfn_excelExport(this.grid_export, "SheetName","FileName",objCondition);
         */
        this.btnExcelEx02_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.Grid00, "sheet_test1","TEST01",this.Grid01);
        };

        //////////////////////////////Export 조회조건 포함(배열) /////////////////////////////

        /**
         * @class excel export <br>
         * @param {Object} objGrid - Grid Object
         * @param {String} [sSheetName]	- sheet name[생략가능]
         * @param {String} [sFileName]	- file name[생략가능]
         * @param {Array} objCondition  - Array(조회조건)
         * @return N/A
         * @example
         * this.gfn_excelExport(this.grid_export, "SheetName","FileName",objCondition);
         */
        this.btnExcelEx03_onclick = function(obj,e)
        {
        	//var arrCond = [["제조일자",this.Edit00.value],["대분류",this.Edit01.value],["중분류",this.Edit02.value],["사용유무",this.Edit03.value]];
        	//var arrCond = {"제조일자":this.Edit00.value, "대분류":this.Edit01.value,"중분류":this.Edit02.value,"사용유무":this.Edit03.value};

        	//var arrCond = new Array[2];

        	var arrCond = ["제조일자^$"+this.Edit00.value, "대분류^$"+this.Edit01.value, "중분류^$"+this.Edit02.value, "사용유무^$"+this.Edit03.value];

        	this.gfn_excelExport(this.Grid00, "sheet_test1","TEST01", arrCond);
        };


        /**
         * @class Grid별 Sheet excel export <br>
         * @param {Array} objGrid - Grid Object
         * @param {Array} [sSheetName]	- sheet name
         * @param {Array} [sFileName]	- file name
         * @param {Object} objCondition - Grid Object
         * @param {Array} arrExceptcolumns - 제외할 컬럼
         * @return N/A
         * @example
         *
         */

        ///////////////////////////// 컬럼제외 일반 //////////////////////////////////////

        this.btnExcelEx04_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.Grid00, "중분류","중분류","",[1,3]);
        };

        /****************************************EXPORT SHEET 처리****************************************************/
        //////////////////////////////Export Grid별 Sheet생성/////////////////////////////

        /**
         * @class Grid별 Sheet excel export <br>
         * @param {Array} objGrid - Grid Object
         * @param {Array} [sSheetName]	- sheet name
         * @param {Array} [sFileName]	- file name
         * @param {Object} objCondition - Grid Object
         * @return N/A
         * @example
         *
         */
        this.btnExcelSheetEx01_onclick = function(obj,e)
        {
        	this.gfn_excelExportSheet([this.Grid00,this.Grid02],["Sheet_Grid00","Sheet_Grid02"],"TEST171215" );
        };

        //////////////////////////////Export Grid별 Sheet생성 조회조건(Grid) /////////////////////////////

        /**
         * @class Grid별 Sheet excel export <br>
         * @param {Array} objGrid - Grid Object
         * @param {Array} [sSheetName]	- sheet name
         * @param {Array} [sFileName]	- file name
         * @param {Object} objCondition - Grid Object
         * @return N/A
         * @example
         *
         */
        this.btnExcelSheetEx02_onclick = function(obj,e)
        {
        	this.gfn_excelExportSheet([this.Grid00,this.Grid02],["Sheet_Grid00","Sheet_Grid02"],"TEST171215", [this.Grid01,this.Grid01] );
        };


        //////////////////////////////Export Grid별 Sheet생성 조회조건(배열) /////////////////////////////

        /**
         * @class Grid별 Sheet excel export <br>
         * @param {Array} objGrid - Grid Object
         * @param {Array} [sSheetName]	- sheet name
         * @param {Array} [sFileName]	- file name
         * @param {Object} objCondition - array
         * @return N/A
         * @example
         *
         */
        this.btnExcelSheetEx03_onclick = function(obj,e)
        {

        	var arrCond = new Array;
        	    arrCond[0] = ["제조일자^$"+this.Edit00.value, "대분류^$"+this.Edit01.value, "중분류^$"+this.Edit02.value, "사용유무^$"+this.Edit03.value];
        	    arrCond[1] = ["중분류^$"+this.Edit02.value, "사용유무^$"+this.Edit03.value];

        	this.gfn_excelExportSheet([this.Grid00,this.Grid02],["Sheet_Grid00","Sheet_Grid02"],"TEST171215" , arrCond);
        };



        ///////////////////////////// 컬럼제외 Sheet별 //////////////////////////////////////

        this.btnExcelSheetEx04_onclick = function(obj,e)
        {
        //	this.gfn_excelExportSheet([this.Grid00,this.Grid02],["Sheet_Grid00","Sheet_Grid02"],"TEST171215", "", [[1,3],[2,4]] );  // [[],[2,4]]
        	this.gfn_excelExportSheet([this.Grid00,this.Grid02],["Sheet_Grid00","Sheet_Grid02"],"b", "", [[1,3],[2,4]] );  // [[],[2,4]]
        };

        /****************************************IMPORT 처리****************************************************/

        ////////////////////////////// Import /////////////////////////////////////////////
        this.btnExcelImport_onclick = function(obj,e)
        {
        	/**
        	* gfnExcelImport : excel import
        	* @param  : sDataset	- [string] dataset
        	* @param  : sSheet 		- [string] sheet name	  [생략가능 default:Sheet1]
        	* @param  : sHead  		- [string] Head 영역지정 [필수:: from:to]
        	* @param  : sBody  		- [string] body 영역지정 [생략가능default A2]
        	* @param  : sCallback	- [string] callback 함수[callback호출시 필수]
        	* @param  : sImportId 	- [string] import id 	 [callback호출시 필수]
        	* @param  : objForm  	- [object] form object	 [callback호출시 필수]
        	* @return : N/A
        	* @example :this.gfnExcelImportAll("ds_list","SheetName","A1:G1","A2","fnImportCallback","import",this);
        	*/
        	//this.gfn_excelImportNsheet("ds_list","Sheet1","A1:E1","A2","fn_importCallback","importAll",this);
        	this.gfn_excelImportAll("ds_list","소분류","A1:E1","A2","fnImportCallback","import",this);
        	//this.gfn_excelImportNsheet("ds_list","A1:E1","A2","fn_importCallback","importAll",this);
        };

        this.fnImportCallback = function(obj, importId)
        {
        	this.Grid00.createFormat();
        };

        this.fn_importCallback = function(obj, importId)
        {
        	this.Grid00.createFormat();
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnExcelEx01.addEventHandler("onclick",this.btnExcelEx01_onclick,this);
            this.btnExcelImport.addEventHandler("onclick",this.btnExcelImport_onclick,this);
            this.btnExcelEx02.addEventHandler("onclick",this.btnExcelEx02_onclick,this);
            this.btnExcelSheetEx01.addEventHandler("onclick",this.btnExcelSheetEx01_onclick,this);
            this.btnExcelEx04.addEventHandler("onclick",this.btnExcelEx04_onclick,this);
            this.btnExcelSheetEx04.addEventHandler("onclick",this.btnExcelSheetEx04_onclick,this);
            this.btnExcelEx03.addEventHandler("onclick",this.btnExcelEx03_onclick,this);
            this.btnExcelSheetEx03.addEventHandler("onclick",this.btnExcelSheetEx03_onclick,this);
            this.btnExcelSheetEx02.addEventHandler("onclick",this.btnExcelSheetEx02_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CO_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
