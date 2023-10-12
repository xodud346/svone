(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DebugPop");
            this.set_titletext("디버깅(개발용)");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,703);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGDS", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponents", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">LOCAL</Col><Col id=\"NAME\">Local</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDatasetView", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_detail_td3","20","79",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tableBg_B");
            this.addChild(obj.name, obj);

            obj = new Static("sta_detail_td1","20","50",null,"30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tableBg_T");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Local");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","79","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Global");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGDS","123","83","247","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsGDS");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","728","50","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Tab("tabComponent","20","120",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabComponent);
            obj.set_text("Dataset");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdDataset","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridDataset");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats/>");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabComponent);
            obj.set_text("SaveXML");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSaveXML","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage2.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tabComponent);
            obj.set_text("Dataset To Grid");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSetGrid","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage3.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tabComponent);
            obj.set_text("Grid Format");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtGridFormat","0","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage4.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.tabComponent);
            obj.set_text("Components");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdProperties","0","10","350",null,null,"0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsProperties");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"186\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new TextArea("txtScript","370","10",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("1");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.tabComponent);
            obj.set_text("Variable");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Static("Static05","100","10",null,"38","0",null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detail_tdT");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Grid("grdVariable","1","46",null,null,"0","0",null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsVariable");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Combo("cboVariable","105","16","222","26",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsVariableType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Local");
            obj.set_value("LOCAL");
            obj.set_index("0");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00","0","10","100","38",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detail_thT");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("tabpage7",this.tabComponent);
            obj.set_text("Run Script");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtScript","0","36",null,null,"0","50",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Button("btnRunScript",null,"10","79","22","0",null,null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("1");
            obj.set_text("Run Script");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txtResult","0",null,null,"40","0","0",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Static("Static03","728","79","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGlobal","446","83","279","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnGlobalFilter","373","83","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("필터해제");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrid","831","54","225","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsGrid");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComponents","831","83","225","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("dsComponents");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDataset","123","54","247","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocal","446","54","279","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalFilter","373","54","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("필터해제");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0",null,"46","2",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("디버깅(개발용)");
            obj.getSetter("wordwrap").set("char");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","1077","46",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","46","46","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_POP_Close");
            obj.getSetter("wordwrap").set("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","dsProperties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DebugPop.xfdl", function() {
        /******************************************************************************************************************************************
        * 01. Form ID   : DebugPop
        * 02. Form Desc : 디버그 기능 지원
        * 03. Author    : 유대종
        * 04. Create    : 20211019
        *******************************************************************************************************************************************
        *     수정일     작성자   내용
        *******************************************************************************************************************************************

        /******************************************************************************************************************************************
                                                                공통 라이브러리 INCLUDE 영역
        ******************************************************************************************************************************************/
        //include "LIB::commInclude.xjs";

        /******************************************************************************************************************************************
                                                                폼 전역변수선언 영역
        ******************************************************************************************************************************************/
        this.fv_currentCombo = "cboDataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리
        this.fv_oApp = nexacro.getApplication();
        this.fv_workArea ="div_work.form.";

        /******************************************************************************************************************************************
                                                                FORM LOAD
        ******************************************************************************************************************************************/
        /*-----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : SYSTPRGM001
         *  설명       : 화면 로딩시 세팅
         *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.form_onload = function (obj, e) {

            // Form Load 시 공통 기능 처리
        //    this.gfn_popupInit(this); //초기화[필수]

            // 로컬 데이터셋을 가져온다.
            this.fnSaveDatasetList(this.opener);
            this.cboDataset.set_index(0);
            this.fnMakeDatasetGrid();

            // 글로벌 데이터셋을 가져온다.
            this.fnSaveGDSList();
            this.dsGDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
            this.fnSaveGridList(this.opener);
            this.cboGrid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
            this.fnSaveComponetsList(this.opener);
            this.cboComponents.set_index(0);

            // 화면에서 사용되는 변수목록을 가져온다.
            this.dsVariable.clearData();
            this.fnSaveVariableList(this.opener);

            // 글로벌 변수 목록을 가져온다.
            this.fnSaveGlobalVariableList();
            this.dsVariable.set_keystring("S:LVL+NAME");
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveDatasetList
         *  설명       : 데이터셋의 목록을 찾아 저장한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveDatasetList = function (targetObj, fullpath) {
            var datasetlist = targetObj.objects;
            for (var i = 0; i < datasetlist.length; i++) {
                if (datasetlist[i] + "" == "[object Dataset]") {
                    var nRow = this.dsDataset.addRow();
                    this.dsDataset.setColumn(nRow, "NAME", datasetlist[i].id);

                    if (this.gfn_isNull(fullpath)) {
                        this.dsDataset.setColumn(nRow, "PATH", datasetlist[i].id);
                    }
                    else {
                        // div_work.form. 으로 나오는 걸 잘라낸다.
                        var displayname = nexacro.replaceAll(fullpath + "." + datasetlist[i].id, this.fv_workArea, "");
                        this.dsDataset.setColumn(nRow, "NAME", displayname);
                        this.dsDataset.setColumn(nRow, "PATH", fullpath + "." + datasetlist[i].id);
                    }
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";
                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfn_isNull(fullpath))
                        this.fnSaveDatasetList(objList[i].form, objList[i].id + ".form");
                    else
                        this.fnSaveDatasetList(objList[i].form, fullpath + "." + objList[i].id + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfn_isNull(fullpath))
                            this.fnSaveDatasetList(tabPageList[j].form, objList[i].id + tabPageList[j].id + ".form");
                        else
                            this.fnSaveDatasetList(tabPageList[j].form, fullpath + "." + objList[i].id + tabPageList[j].id + ".form");
                    }
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveGridList
         *  설명       : 화면의 그리드목록을 저장한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveGridList = function (targetObj, fullpath) {
            var sObjType;

            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                if (objList[i] + "" == "[object Grid]") {
                    var nRow = this.dsGrid.addRow();

                    // div_work.form. 으로 나오는 걸 잘라낸다.
                    var displayname = "";
                    if (this.gfn_isNull(fullpath)) {
                        displayname = nexacro.replaceAll(objList[i].name, this.fv_workArea, "");
                    }
                    else {
                        displayname = nexacro.replaceAll(fullpath + "." + objList[i].name, this.fv_workArea, "");
                    }

                    this.dsGrid.setColumn(nRow, "NAME", displayname);
                    //this.dsGrid.setColumn(nRow, "NAME", objList[i].name);

                    if (this.gfn_isNull(fullpath))
                        this.dsGrid.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.dsGrid.setColumn(nRow, "PATH", fullpath + "." + objList[i].name);
                }

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfn_isNull(fullpath))
                        this.fnSaveGridList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fnSaveGridList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfn_isNull(fullpath))
                            this.fnSaveGridList(tabPageList[j].form, objList[i].name + "." + tabPageList[j].name + ".form");
                        else
                            this.fnSaveGridList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveComponetsList
         *  설명       : 화면의 모든 Object를 저장한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveComponetsList = function (targetObj, fullpath) {
            ////trace("=============== fnSaveComponetsList targetObj.name : " + targetObj.name);
            var sObjType;
            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfn_isNull(fullpath))
                        this.fnSaveComponetsList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fnSaveComponetsList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {

                        if (this.gfn_isNull(fullpath))
                            this.fnSaveComponetsList(tabPageList[j].form, objList[i].name +"."+ tabPageList[j].name + ".form");
                        else
                            this.fnSaveComponetsList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
                else {
                    // div_work.form. 으로 나오는 걸 잘라낸다.
                    if (!this.gfn_isNull(fullpath)) {
                        var nRow = this.dsComponents.addRow();
                        var displayname = nexacro.replaceAll(fullpath + "." + objList[i].name, this.fv_workArea, "");
                        this.dsComponents.setColumn(nRow, "NAME", displayname);
                        //this.dsComponents.setColumn(nRow, "NAME", objList[i].name);

                        if (this.gfn_isNull(fullpath))
                            this.dsComponents.setColumn(nRow, "PATH", objList[i].name);
                        else
                            this.dsComponents.setColumn(nRow, "PATH", fullpath + "." + objList[i].name);
                    }
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveGDSList
         *  설명       : 글로벌 데이터셋 목록을 만든다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveGDSList = function () {
            var applicationobj = this.fv_oApp.all;
            for (var i = 0; i < applicationobj.length; i++) {
                if (applicationobj[i] + "" == "[object Dataset]") {
                    try {
                        if (applicationobj[i].id.indexOf(".") == -1) {
                            var nRow = this.dsGDS.addRow();
                            this.dsGDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.dsGDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch (e) {
                    }
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeDatasetGrid
         *  설명       : Dataset을 GRID에 표시한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeDatasetGrid = function () {
            var dataset;

            if (this.fv_currentCombo == "cboDataset") {
                if (this.cboDataset.index == -1) return;

                dataset = eval("this.opener." + this.cboDataset.value);
            }
            else {
                if (this.cboGDS.index == -1) return;

                dataset = this.fv_oApp[this.cboGDS.text];
            }
            this.dsDatasetView.assign(dataset);

            // 데이터셋의 정보가 존재하지 않으면
            if (dataset.getColCount() < 1) {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.tabComponent.tabpage1.form.Grid00.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head = '    <Cell col="0" text=""/>\n';
            //var body    = '    <Cell col="0" displaytype="image" text="expr:(dataset.getRowType(currow)==2)?\'theme://images/sta_n.png\':(dataset.getRowType(currow)==4)?\'theme://images/sta_u.png\':(dataset.getRowType(currow)==8)?\'theme://images/sta_d.png\':\'default\'"/>\n';
            var body = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for (var i = 0; i < dataset.getColCount(); i++) {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try {
                    columname = columinfo.name;
                    columsize = parseInt(columinfo.size);
                    columtype = columinfo.type.toUpperCase();
                }
                catch (e) {
                    columname = "undefined";
                    columsize = 50;
                    columtype = "STRING";
                }

                //Sonar Qube Unused local variables should be removed 조치 JBC 2016-09-20
                //var columwidth= 100;
                var align = "";

                if (columtype == "STRING") {
                    columsize = columsize * 9;

                    if (columsize < columname.length * 9) {
                        columsize = columname.length * 9;
                    }

                    if (columsize > 200)
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="' + columsize + '" />\n';

                    align = 'style="align:left;"';
                }
                else if (columtype == "INT") {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if (columtype == "FLOAT") {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if (columtype == "DATE") {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "TIME") {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "DATETIME") {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if (columtype == "BIGDECIMAL") {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="' + (i + 1) + '" text="' + columname + '"/>\n';
                body += '    <Cell col="' + (i + 1) + '" ' + align + ' text="bind:' + columname + '" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n' + columns.substring(0, columns.length - 1) + '\n</Columns>\n';
            formats += '<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';
            formats += '<Band id="head">\n' + head.substring(0, head.length - 1) + '\n</Band>\n';
            formats += '<Band id="body">\n' + body.substring(0, body.length - 1) + '\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.tabComponent.tabpage1.form.grdDataset.set_binddataset(this.dsDatasetView);
            this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveVariableList
         *  설명       : 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveVariableList = function (targetObj, fullpath) {
            ////trace("================ fnSaveVariableList targetObj : " + targetObj.name);

            sObjType = targetObj + "";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for (var name in targetObj) {
                // 폼 변수는 fv로 Naming Rule 정의
                var sVariName = name.substr(0, 2).toUpperCase();
                if (sVariName == "FV") {
                    // 제외처리대상변수명
                    var value = targetObj[name] + "";
                    if (value.indexOf("[object") != -1) continue;
                    if (value.substring(0, 8) == "function") continue;
                    if (!targetObj.hasOwnProperty(name)) continue;

                    // div_work.form. 으로 나오는 걸 잘라낸다. // && (fullpath+"."+name).indexOf("div_work.form.") > -1
                    if (!this.gfn_isNull(fullpath)) {
                        var nRow = this.dsVariable.addRow();
                        var displayname = nexacro.replaceAll(fullpath + "." + name, this.fv_workArea, "");
                        this.dsVariable.setColumn(nRow, "NAME", displayname);
                        //this.dsVariable.setColumn(nRow, "NAME",  name);
                        this.dsVariable.setColumn(nRow, "VALUE", value);
                        this.dsVariable.setColumn(nRow, "TYPE", "LOCAL");
                        this.dsVariable.setColumn(nRow, "LVL", name.split(".").length);
                    }
                }
            }
            this.dsVariable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            var sObjType;
            var objList = targetObj.components;
            for (var i = 0; i < objList.length; i++) {
                sObjType = objList[i] + "";

                // Div
                if (sObjType == "[object Div]") {
                    if (this.gfn_isNull(fullpath))
                        this.fnSaveVariableList(objList[i].form, objList[i].name + ".form");
                    else
                        this.fnSaveVariableList(objList[i].form, fullpath + "." + objList[i].name + ".form");
                }
                // Tab
                else if (sObjType == "[object Tab]") {
                    var tabPageList = objList[i].tabpages;
                    for (var j = 0; j < tabPageList.length; j++) {
                        if (this.gfn_isNull(fullpath))
                            this.fnSaveVariableList(tabPageList[j].form, objList[i].name + tabPageList[j].name + ".form");
                        else
                            this.fnSaveVariableList(tabPageList[j].form, fullpath + "." + objList[i].name + tabPageList[j].name + ".form");
                    }
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnSaveGlobalVariableList
         *  설명       : 글로벌 변수를 찾아 데이터셋에 저장한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnSaveGlobalVariableList = function () {
            var targetObj = this.fv_oApp;

            sObjType = targetObj + "";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for (var name in targetObj) {
                // 글로벌 변수는 gv로 Naming Rule 정의
                var sVariName = name.substr(0, 2).toUpperCase();
                if (sVariName == "GV") {
                    // 제외처리대상변수명
                    var value = targetObj[name] + "";
                    if (value.indexOf("[object") != -1) continue;
                    if (value.substring(0, 8) == "function") continue;
                    if (!targetObj.hasOwnProperty(name)) continue;

                    // 글로벌 변수는 하나만이 존재하기 때문에..
                    if (this.dsVariable.findRow("NAME", name) == -1) {
                        var nRow = this.dsVariable.addRow();
                        this.dsVariable.setColumn(nRow, "NAME", name);
                        this.dsVariable.setColumn(nRow, "VALUE", value);
                        this.dsVariable.setColumn(nRow, "TYPE", "GLOBAL");
                        this.dsVariable.setColumn(nRow, "LVL", 0);
                    }
                }
            }
            this.dsVariable.set_enableevent(true);
        };
        /******************************************************************************************************************************************
                                                                Transaction 함수
        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************
        					                                    버튼 함수
        *******************************************************************************************************************************************/

        /******************************************************************************************************************************************

        								                Validation

        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************

                                                                PopUp CallBack 함수

        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************

                                                                외부 호출 함수

        ******************************************************************************************************************************************/

        /******************************************************************************************************************************************

                                                                개별컴포넌트 함수

        ******************************************************************************************************************************************/
        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : tabComponent_onchanged
         *  설명       : 선택한 TAB에 대한 처리를 한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.tabComponent_onchanged = function (obj, e) {
            var tabindex = this.tabComponent.tabindex;

            switch (tabindex) {
                case 0: this.fnMakeDatasetGrid(); break;
                case 1: this.fnMakeDatasetXml(); break;
                case 2: this.fnMakeDatasetGridFormat(); break;
                case 3: this.fnMakeGridFormats(); break;
                case 4: this.fnMakeCompoentsData(); break;
                case 5: this.fnMakeVariableList(); break;
                default: break;
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeDatasetXml
         *  설명       : 데이터셋의 내용을 XML로 표시한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeDatasetXml = function () {
            var dataset;

            if (this.fv_currentCombo == "cboDataset") {
                if (this.cboDataset.index == -1) return;

                dataset = eval("this.opener." + this.cboDataset.value);
            }
            else {
                if (this.cboGDS.index == -1) return;

                dataset = this.fv_oApp[this.cboGDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="' + dataset.id + '">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tabComponent.tabpage2.form.txtSaveXML.set_value(text);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeDatasetGridFormat
         *  설명       : 데이터셋을 GRID로 자동생성해준다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeDatasetGridFormat = function () {
            this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeGridFormats
         *  설명       : 화면의 그리드의 포맷을 가져온다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeGridFormats = function () {
            if (this.cboGrid.index == -1) return;
            var targetgrid = eval("this.opener." + this.cboGrid.value);

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for (var i = 0; i < targetgrid.getCellCount("Body"); i++) {
                newcolumn += '    <Column size="' + targetgrid.getRealColSize(i, true) + '"/>\n';
            }
            formats = formats.split("<Columns>")[0] + "<Columns>\n" + newcolumn + "</Columns>" + formats.split("</Columns>")[1];

            this.tabComponent.tabpage4.form.txtGridFormat.set_value(formats);
            this.tabComponent.set_tabindex(3);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeCompoentsData
         *  설명       : 컴포넌트의 모든속성을 디스플레이한다
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeCompoentsData = function () {
            if (this.cboComponents.index == -1) return;

            var targetobj = eval("this.opener." + this.cboComponents.value);

            this.dsProperties.clearData();
            this.dsProperties.set_enableevent(false);
            for (var name in targetobj) {
                var value = targetobj[name] + "";

                if (name[0] == "_") continue;
                if (value == "[object Object]") continue;
                if (value.substring(0, 8) == "function") continue;
                if (value.substring(0, 7) == "control") continue;

                if (this.gfn_isNull(value)) {
                    var nrow = this.dsProperties.addRow();
                    this.dsProperties.setColumn(nrow, "NAME", name);
                    this.dsProperties.setColumn(nrow, "VALUE", "");
                }
                else {
                    // 이벤트에 대한 처리
                    if (value.indexOf("[object") != -1) {
                        if (value.indexOf("EventListener") != -1) {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if (!this.gfn_isNull(eventhandler)) {
                                var nrow = this.dsProperties.addRow();
                                this.dsProperties.setColumn(nrow, "NAME", name);
                                this.dsProperties.setColumn(nrow, "VALUE", "function");
                                this.dsProperties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.dsProperties.setColumn(nrow, "COLOR", "red");
                            }
                        }
                    }
                    else {
                        var nrow = this.dsProperties.addRow();
                        this.dsProperties.setColumn(nrow, "NAME", name);
                        this.dsProperties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.dsProperties.set_enableevent(true);
            this.dsProperties.set_rowposition(0);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnMakeVariableList
         *  설명       : 화면에서 사용되는 모든 변수를 보여준다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnMakeVariableList = function () {
            this.dsVariable.filter("TYPE == '" + this.tabComponent.tabpage6.form.cboVariable.value + "'");
            this.dsVariable.set_rowposition(0);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : fnExecScript
         *  설명       : 문장을 스크립트로 실행한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.fnExecScript = function (obj, e) {
            try {
                var result = eval(this.tabComponent.tabpage7.form.txtScript.text);

                if (this.gfn_isNull(result)) result = "";

                this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : " + result);
            }
            catch (ex) {
                this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : " + ex);
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : edtLocal_onkeydown
         *  설명       : 로컬 데이터셋 바로 찾기 기능
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.edtLocal_onkeydown = function (obj, e) {
            if (e.keycode == 13) {
                var nrow = this.dsDataset.findRow("NAME", obj.value);
                if (nrow != -1) {

                    fv_currentCombo = "local";
                    this.cboDataset.set_index(nrow);
                    this.fnMakeDatasetGrid();
                    this.cboDataset_onitemchanged(this.cboDataset);
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : cboDataset_onitemchanged
         *  설명       : 로컬 데이터셋의 내용을 보여준다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.cboDataset_onitemchanged = function (obj, e) {
            this.fv_currentCombo = obj.name;
            this.edtLocal.set_value(obj.text);
            this.edtGlobal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : edtGlobal_onkeydown
         *  설명       : 글로벌 데이터셋 바로 찾기 기능
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.edtGlobal_onkeydown = function (obj, e) {
            if (e.keycode == 13) {
                var nrow = this.dsGDS.findRow("NAME", obj.value);
                if (nrow != -1) {
                    fv_currentCombo = "global";
                    this.cboGDS.set_index(nrow);
                    this.cboGDS_onitemchanged(this.cboGDS);
                    //this.fnMakeDatasetGrid();
                }
            }
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : cboGDS_onitemchanged
         *  설명       : 글로벌 데이터셋의 내용을 보여준다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.cboGDS_onitemchanged = function (obj, e) {
            this.fv_currentCombo = obj.name;
            this.edtGlobal.set_value(e.postvalue);
            this.edtLocal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : cboComponents_onitemchanged
         *  설명       : 컴포넌트의 모든 속성을 디스플레이한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.cboComponents_onitemchanged = function (obj, e) {
            this.tabComponent.set_tabindex(4);
            this.tabComponent_onchanged();
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : tabComponent_tabpage6_cboVariable_onitemchanged
         *  설명       : 변수의 형식을 선택한 타입으로 필터링한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.tabComponent_tabpage6_cboVariable_onitemchanged = function (obj, e) {
            this.dsVariable.filter("TYPE == '" + this.tabComponent.tabpage6.form.cboVariable.value + "'");
            this.dsVariable.set_rowposition(0);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : combo_onkeydown
         *  설명       : 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.combo_onkeydown = function (obj, e) {
            system.clearClipboard();
            system.setClipboard("CF_TEXT", obj.text);
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : btnLocalFilter_onclick
         *  설명       : 로컬 데이터셋 필터 초기화
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.btnLocalFilter_onclick = function (obj, e) {
            var dataset = eval("this.opener." + this.cboDataset.value);
            dataset.filter("");
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : btnGlobalFilter_onclick
         *  설명       : 글로벌 데이타셋 필터 초기화
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.btnGlobalFilter_onclick = function (obj, e) {
            var dataset = this.fv_oApp[this.cboGDS.text];
            dataset.filter("");
        };

        /*----------------------------------------------------------------------------------------------------------------------------------------
         *  Function명 : btnClose_onclick
         *  설명       : 닫기
        *---------------------------------------------------------------------------------------------------------------------------------------*/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGDS.addEventHandler("onitemchanged",this.cboGDS_onitemchanged,this);
            this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);
            this.tabComponent.tabpage6.form.cboVariable.addEventHandler("onitemchanged",this.tabComponent_tabpage6_cboVariable_onitemchanged,this);
            this.tabComponent.tabpage7.form.btnRunScript.addEventHandler("onclick",this.fnExecScript,this);
            this.edtGlobal.addEventHandler("onkeydown",this.edtGlobal_onkeydown,this);
            this.btnGlobalFilter.addEventHandler("onclick",this.btnGlobalFilter_onclick,this);
            this.cboGrid.addEventHandler("onitemchanged",this.fnMakeGridFormats,this);
            this.cboGrid.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboComponents.addEventHandler("onitemchanged",this.cboComponents_onitemchanged,this);
            this.cboComponents.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboDataset.addEventHandler("onitemchanged",this.cboDataset_onitemchanged,this);
            this.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.edtLocal.addEventHandler("onkeydown",this.edtLocal_onkeydown,this);
            this.btnLocalFilter.addEventHandler("onclick",this.btnLocalFilter_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("DebugPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
