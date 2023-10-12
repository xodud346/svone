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
            this.set_titletext("EXCEL IMPORT");
            this.getSetter("classname").set("Work");
            this.getSetter("inheritanceid").set("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">A-01</Col><Col id=\"NAME\">홍길동</Col><Col id=\"DESCRIPTION\">123</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">한글</Col><Col id=\"CHK2\">1</Col></Row><Row><Col id=\"ID\">A-02</Col><Col id=\"NAME\">홍통합</Col><Col id=\"DESCRIPTION\">456</Col><Col id=\"USE_YN\">N</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK2\">1</Col></Row><Row><Col id=\"ID\">B-01</Col><Col id=\"NAME\">홍문서</Col><Col id=\"DESCRIPTION\">789</Col><Col id=\"USE_YN\">Y</Col><Col id=\"REG_USER\">영문</Col><Col id=\"CHK2\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelForm03", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list03", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelForm02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelForm01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list04", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelForm04", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","12","33",null,"47","133",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\" background=\"beige\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\" background=\"beige\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"84","1622","23","6",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("- 각종 업로드 EXCEL IMPORT(Sheet 셋팅을 무시하고 첫번째 Sheet1를 불러온다.) -");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDn",null,"32","120","22","6",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01","12","176","48.54%","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_excelForm01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpLoad01",null,"150","120","22","6",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀업로드1");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02","12","345","48.48%","100",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_excelForm02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpLoad02",null,"317","120","22","6",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀업로드2");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpLoad03",null,"489","120","22","9",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀업로드3");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","7",null,"22","6",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("※ EXCEL 업로드를 위해 아래 템플릿 샘풀을 다운로드 받아 다시 그것를 번튼을 선택후 업로드한다. ");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpLoad04",null,"664","120","22","7",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀업로드4");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","109",null,"38","6",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("this.gfn_excelImportNsheet(\"ds_excelForm01\",\"\",\"\",\"fn_importCallback\",\"importAll01\",this); 1.받을 ds/2.해더범위/3.출력할 데이트시작 (행)Row/4.업로드시 넘어올 콜백/5.importId/6.현재폼(this)\r\n- 첫행 타이틀을 삭제 => 데이타셋구조가 :Column0,Column1,Column2 ....Column5들어온다.  첫번째로는 타이틀 삭제: this.ds_excelForm01.deleteRow(0);");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","grdList01:29","150","260","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("받아서 가공데이타(ds_list01)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList01_1","grdList01:28","176",null,"100","8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_list01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_77","13","150","210","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("원시데이타(ds_excelForm01)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","12","281",null,"34","6",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("this.gfn_excelImportNsheet(\"ds_excelForm01\",\"\",\"A2\",\"fn_importCallback\",\"importAll02\",this); 1.받을 ds/2.해더범위/3.출력할 데이트시작 (행)Row/4.업로드시 넘어올 콜백/5.importId/6.현재폼(this)\r\n- 엑젤에서 가지고 올때 A2부터 가지고 온다. => 데이타셋구조가 :Column0,Column1,Column2 ....Column5들어온다.  엑셀의  Row행을  A2부터 데이타를 가지고옮 삭제가 필요 없음.");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList02_1","grdList02:29","342",null,"100","9",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_list02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","448",null,"37","6",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("this.gfn_excelImportNsheet(\"ds_excelForm01\",\"A1:F1\",\"\",\"fn_importCallback\",\"importAll03\",this); 1.받을 ds/2.해더범위/3.출력할 데이트시작 (행)Row/4.업로드시 넘어올 콜백/5.importId/6.현재폼(this)\r\n- 첫행 타이틀을 삭제 => 데이타셋구조가 :ID,NAME,DESCRIPTION ....CHK2들어온다.  첫번째로는 타이틀 삭제: this.ds_excelForm03.deleteRow(0);");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList03","13","515","48.48%","100",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_excelForm03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList03_1","grdList03:29","515",null,"100","8",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_list03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","12","619",null,"41","6",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("this.gfn_excelImportNsheet(\"ds_excelForm01\",\"A1:F1\",\"A2\",\"fn_importCallback\",\"importAll01\",this); 1.받을 ds/2.해더범위/3.출력할 데이트시작 (행)Row/4.업로드시 넘어올 콜백/5.importId/6.현재폼(this)\r\n- 엑젤에서 가지고 올때 A2부터 가지고 온다. => 데이타셋구조가 :ID,NAME,DESCRIPTION ....CHK2들어온다.   엑셀의  Row행을  A2부터 데이타를 가지고옮 삭제가 필요 없음.");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList04","13","690","48.48%","100",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_excelForm04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList04_1","grdList04:29","690",null,"100","8",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_list04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/><Cell col=\"5\" text=\"CHK2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/><Cell col=\"5\" text=\"bind:CHK2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","12","319","210","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("원시데이타(ds_excelForm02)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","grdList02:29","319","260","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("받아서 가공데이타(ds_list02)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","12","489","210","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("원시데이타(ds_excelForm03)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","grdList03:28","489","260","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("받아서 가공데이타(ds_list03)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","12","666","210","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("원시데이타(ds_excelForm04)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","grdList04:28","664","258","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("받아서 가공데이타(ds_list04)");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_CO_07.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SMPM000001S.xfdl(싱글한행처리)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2018/09/13
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 화면  초기화 함수
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

        };

        /**
         * EXCEL IMPORT SAMPLE
         */
        this.btnExcelDn_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.grdList, "시트1_소분류","SAMPLE1_소문류");
        };

        this.btnExcelUpLoad01_onclick = function(obj,e)
        {

        	this.ds_excelForm01.clearData();
        	this.ds_list01.clearData();
        	this.gfn_excelImportNsheet("ds_excelForm01","","","fn_importCallback","importAll01",this);
        };

        this.btnExcelUpLoad02_onclick = function(obj,e)
        {

        	this.ds_excelForm02.clearData();
        	this.ds_list02.clearData();
        	this.gfn_excelImportNsheet("ds_excelForm02","","A2","fn_importCallback","importAll02",this);
        };

        this.btnExcelUpLoad03_onclick = function(obj,e)
        {

        	this.ds_excelForm03.clearData();
        	this.ds_list03.clearData();
        	this.gfn_excelImportNsheet("ds_excelForm03","A1:F1","","fn_importCallback","importAll03",this);
        };

        this.btnExcelUpLoad04_onclick = function(obj,e)
        {

        	this.ds_excelForm04.clearData();
        	this.ds_list04.clearData();
        	this.gfn_excelImportNsheet("ds_excelForm04","A1:F1","A2","fn_importCallback","importAll04",this);
        };


        this.fn_importCallback = function(obj, importId)
        {
        	if(importId == "importAll01")
        	{
        		//trace(this.ds_excelForm01.saveXML());
        		this.grdList.createFormat();
        		this.ds_excelForm01.deleteRow(0);
        		var addRow = 0;
        		/*
        		for(var i = 0 ; i < this.ds_excelForm01.getRowCount(); i++)
        		{
        			addRow = this.ds_list01.addRow();
        			this.ds_list01.setColumn(addRow, 0, this.ds_excelForm01.getColumn(i,0));
        			this.ds_list01.setColumn(addRow, 1, this.ds_excelForm01.getColumn(i,1));
        			this.ds_list01.setColumn(addRow, 2, this.ds_excelForm01.getColumn(i,2));
        			this.ds_list01.setColumn(addRow, 3, this.ds_excelForm01.getColumn(i,3));
        			this.ds_list01.setColumn(addRow, 4, this.ds_excelForm01.getColumn(i,4));
        			this.ds_list01.setColumn(addRow, 5, this.ds_excelForm01.getColumn(i,5));
        		}
        		*/
        		for(var i = 0 ; i < this.ds_excelForm01.getRowCount(); i++)
        		{
        			addRow = this.ds_list01.addRow();
        			this.ds_list01.setColumn(addRow, "ID", 			this.ds_excelForm01.getColumn(i,"Column0"));
        			this.ds_list01.setColumn(addRow, "NAME", 		this.ds_excelForm01.getColumn(i,"Column1"));
        			this.ds_list01.setColumn(addRow, "DESCRIPTION", this.ds_excelForm01.getColumn(i,"Column2"));
        			this.ds_list01.setColumn(addRow, "USE_YN", 		this.ds_excelForm01.getColumn(i,"Column3"));
        			this.ds_list01.setColumn(addRow, "REG_USER", 	this.ds_excelForm01.getColumn(i,"Column4"));
        			this.ds_list01.setColumn(addRow, "CHK2", 		this.ds_excelForm01.getColumn(i,"Column5"));
        		}
        	}else if(importId == "importAll02")
        	{
        		this.grdList.createFormat();
        		//trace(this.ds_excelForm02.saveXML());
        		var addRow = 0;
        		/*
        		for(var i = 0 ; i < this.ds_excelForm02.getRowCount(); i++)
        		{
        			addRow = this.ds_list02.addRow();
        			this.ds_list02.setColumn(addRow, 0, this.ds_excelForm02.getColumn(i,0));
        			this.ds_list02.setColumn(addRow, 1, this.ds_excelForm02.getColumn(i,1));
        			this.ds_list02.setColumn(addRow, 2, this.ds_excelForm02.getColumn(i,2));
        			this.ds_list02.setColumn(addRow, 3, this.ds_excelForm02.getColumn(i,3));
        			this.ds_list02.setColumn(addRow, 4, this.ds_excelForm02.getColumn(i,4));
        			this.ds_list02.setColumn(addRow, 5, this.ds_excelForm02.getColumn(i,5));
        		}
        		*/
        		for(var i = 0 ; i < this.ds_excelForm02.getRowCount(); i++)
        		{
        			addRow = this.ds_list02.addRow();
        			this.ds_list02.setColumn(addRow, "ID", 			this.ds_excelForm02.getColumn(i,"Column0"));
        			this.ds_list02.setColumn(addRow, "NAME", 		this.ds_excelForm02.getColumn(i,"Column1"));
        			this.ds_list02.setColumn(addRow, "DESCRIPTION", this.ds_excelForm02.getColumn(i,"Column2"));
        			this.ds_list02.setColumn(addRow, "USE_YN", 		this.ds_excelForm02.getColumn(i,"Column3"));
        			this.ds_list02.setColumn(addRow, "REG_USER", 	this.ds_excelForm02.getColumn(i,"Column4"));
        			this.ds_list02.setColumn(addRow, "CHK2", 		this.ds_excelForm02.getColumn(i,"Column5"));
        		}
        	}else if(importId == "importAll03")
        	{
        		this.grdList.createFormat();
        		//trace(this.ds_excelForm03.saveXML());
        		this.ds_excelForm03.deleteRow(0);
        		var addRow = 0;
        		/*
        		for(var i = 0 ; i < this.ds_excelForm03.getRowCount(); i++)
        		{
        			addRow = this.ds_list03.addRow();
        			this.ds_list03.setColumn(addRow, 0, this.ds_excelForm03.getColumn(i,0));
        			this.ds_list03.setColumn(addRow, 1, this.ds_excelForm03.getColumn(i,1));
        			this.ds_list03.setColumn(addRow, 2, this.ds_excelForm03.getColumn(i,2));
        			this.ds_list03.setColumn(addRow, 3, this.ds_excelForm03.getColumn(i,3));
        			this.ds_list03.setColumn(addRow, 4, this.ds_excelForm03.getColumn(i,4));
        			this.ds_list03.setColumn(addRow, 5, this.ds_excelForm03.getColumn(i,5));
        		}
        		*/
        		for(var i = 0 ; i < this.ds_excelForm03.getRowCount(); i++)
        		{
        			addRow = this.ds_list03.addRow();

        			this.ds_list03.setColumn(addRow, "ID", 			this.ds_excelForm03.getColumn(i,"ID"));
        			this.ds_list03.setColumn(addRow, "NAME", 		this.ds_excelForm03.getColumn(i,"NAME"));
        			this.ds_list03.setColumn(addRow, "DESCRIPTION", this.ds_excelForm03.getColumn(i,"DESCRIPTION"));
        			this.ds_list03.setColumn(addRow, "USE_YN", 		this.ds_excelForm03.getColumn(i,"USE_YN"));
        			this.ds_list03.setColumn(addRow, "REG_USER", 	this.ds_excelForm03.getColumn(i,"REG_USER"));
        			this.ds_list03.setColumn(addRow, "CHK2", 		this.ds_excelForm03.getColumn(i,"CHK2"));
        		}

        	}else if(importId == "importAll04")
        	{
        		this.grdList.createFormat();
        		//trace(this.ds_excelForm04.saveXML());
        		var addRow = 0;
        		/*
        		for(var i = 0 ; i < this.ds_excelForm04.getRowCount(); i++)
        		{
        			addRow = this.ds_list04.addRow();
        			this.ds_list04.setColumn(addRow, 0, this.ds_excelForm04.getColumn(i,0));
        			this.ds_list04.setColumn(addRow, 1, this.ds_excelForm04.getColumn(i,1));
        			this.ds_list04.setColumn(addRow, 2, this.ds_excelForm04.getColumn(i,2));
        			this.ds_list04.setColumn(addRow, 3, this.ds_excelForm04.getColumn(i,3));
        			this.ds_list04.setColumn(addRow, 4, this.ds_excelForm04.getColumn(i,4));
        			this.ds_list04.setColumn(addRow, 5, this.ds_excelForm04.getColumn(i,5));
        		}
        		*/

        		for(var i = 0 ; i < this.ds_excelForm04.getRowCount(); i++)
        		{
        			addRow = this.ds_list04.addRow();

        			this.ds_list04.setColumn(addRow, "ID", 			this.ds_excelForm04.getColumn(i,"ID"));
        			this.ds_list04.setColumn(addRow, "NAME", 		this.ds_excelForm04.getColumn(i,"NAME"));
        			this.ds_list04.setColumn(addRow, "DESCRIPTION", this.ds_excelForm04.getColumn(i,"DESCRIPTION"));
        			this.ds_list04.setColumn(addRow, "USE_YN", 		this.ds_excelForm04.getColumn(i,"USE_YN"));
        			this.ds_list04.setColumn(addRow, "REG_USER", 	this.ds_excelForm04.getColumn(i,"REG_USER"));
        			this.ds_list04.setColumn(addRow, "CHK2", 		this.ds_excelForm04.getColumn(i,"CHK2"));
        		}
        	}

        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsDetail);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnExcelDn.addEventHandler("onclick",this.btnExcelDn_onclick,this);
            this.btnExcelUpLoad01.addEventHandler("onclick",this.btnExcelUpLoad01_onclick,this);
            this.btnExcelUpLoad02.addEventHandler("onclick",this.btnExcelUpLoad02_onclick,this);
            this.btnExcelUpLoad03.addEventHandler("onclick",this.btnExcelUpLoad03_onclick,this);
            this.btnExcelUpLoad04.addEventHandler("onclick",this.btnExcelUpLoad04_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_CO_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
