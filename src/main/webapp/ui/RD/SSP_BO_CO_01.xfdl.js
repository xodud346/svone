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
            this.set_titletext("제너레이트(Ibits/Map버전)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"32\"/><Column id=\"OWNER\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"32\"/><Column id=\"VW_DATA_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"COL_NULL\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_LENGTH\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COL_PK\" type=\"STRING\" size=\"32\"/><Column id=\"COL_DEF\" type=\"STRING\" size=\"32\"/><Column id=\"REMK_TEXT\" type=\"STRING\" size=\"32\"/><Column id=\"ORD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ower", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1Depth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVLE1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">com</Col><Col id=\"NAME\">com</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">sys</Col><Col id=\"NAME\">sys</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">pop</Col><Col id=\"NAME\">pop</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">sml</Col><Col id=\"NAME\">sml</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">ord</Col><Col id=\"NAME\">ord</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">pla</Col><Col id=\"NAME\">pal</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">ipgo</Col><Col id=\"NAME\">ipgo</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">outord</Col><Col id=\"NAME\">outord</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">trun</Col><Col id=\"NAME\">trun</Col></Row><Row><Col id=\"CODE\">tst</Col><Col id=\"NAME\">tst</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mov</Col><Col id=\"NAME\">mov</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">sale</Col><Col id=\"NAME\">sale</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">stock</Col><Col id=\"NAME\">stock</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">calc</Col><Col id=\"NAME\">calc</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">repair</Col><Col id=\"NAME\">repair</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">cust</Col><Col id=\"NAME\">cust</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mess</Col><Col id=\"NAME\">mess</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">analy</Col><Col id=\"NAME\">analy</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mmatr</Col><Col id=\"NAME\">mmatr</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mamou</Col><Col id=\"NAME\">mamou</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mord</Col><Col id=\"NAME\">mord</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mipgo</Col><Col id=\"NAME\">mipgo</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mout</Col><Col id=\"NAME\">mout</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mstock</Col><Col id=\"NAME\">mstock</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">mcalc</Col><Col id=\"NAME\">mcalc</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wsale</Col><Col id=\"NAME\">wsale</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wout</Col><Col id=\"NAME\">wout</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wmove</Col><Col id=\"NAME\">wmove</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wstock</Col><Col id=\"NAME\">wstock</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wcust</Col><Col id=\"NAME\">wcust</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">wmess</Col><Col id=\"NAME\">wmess</Col></Row><Row><Col id=\"CODE\">wcom</Col><Col id=\"NAME\">wcom</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">acin</Col><Col id=\"NAME\">acin</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">amai</Col><Col id=\"NAME\">amai</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">aban</Col><Col id=\"NAME\">aban</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">acpn</Col><Col id=\"NAME\">acpn</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">apot</Col><Col id=\"NAME\">apot</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">apus</Col><Col id=\"NAME\">apus</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">aevt</Col><Col id=\"NAME\">aevt</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">anew</Col><Col id=\"NAME\">anew</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">amsg</Col><Col id=\"NAME\">amsg</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">aeva</Col><Col id=\"NAME\">aeva</Col></Row><Row><Col id=\"LEVLE1\">prj</Col><Col id=\"CODE\">aany</Col><Col id=\"NAME\">aany</Col></Row><Row><Col id=\"CODE\">apop</Col><Col id=\"NAME\">apop</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">exception</Col><Col id=\"NAME\">exception</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">util</Col><Col id=\"NAME\">util</Col></Row><Row><Col id=\"CODE\">vo</Col><Col id=\"NAME\">vo</Col><Col id=\"LEVLE1\">common</Col></Row><Row><Col id=\"CODE\">ria</Col><Col id=\"NAME\">ria</Col><Col id=\"LEVLE1\">cmmn</Col></Row><Row><Col id=\"CODE\">web</Col><Col id=\"NAME\">web</Col><Col id=\"LEVLE1\">cmmn</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDepth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">rd</Col><Col id=\"NAME\">rd</Col><Col id=\"DESC\">R&amp;D</Col></Row><Row><Col id=\"CODE\">common</Col><Col id=\"NAME\">common</Col><Col id=\"DESC\">공통</Col></Row><Row><Col id=\"CODE\">cmmn</Col><Col id=\"NAME\">cmmn</Col><Col id=\"DESC\">프레임웍</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3Depth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"NAME\">M : MAIN</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"NAME\">D : DIV</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">T : TAB</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">P : POPUP</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static11","48","140","330","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","48","110","330","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","176","377",null,null,"5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_scrollbartrackbarsize("20");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"142\"/><Column size=\"194\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"테이블\"/><Cell col=\"2\" text=\"테이불명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TABLE_NAME\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:COMMENTS\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel14","0","140","76","31",null,null,null,null,null,null,this);
            obj.set_text("테이블명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel13","0","110","76","31",null,null,null,null,null,null,this);
            obj.set_text("USER명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUsers","81","114","290","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_ower");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilter","81","144","290","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"106","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel00","0","8","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("업무명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","75","8","229","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","75","38","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","75","68","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","372","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","669","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","966","66",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","966","36",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbProjectName","81","12","151","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsDepth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12","374","7",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","372","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","669","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName","378","10","208","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName1","604","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPackage","1082","10","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDao","972","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtController","81","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSqlXml","378","70","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtService","379","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNexacro","674","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtServiceImpl","675","40","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDtoVo","972","70","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel11","897","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Vo/Dto");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel07","304","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Service");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel08","600","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Nexacro");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel01","1001","8","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Package");
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel02","0","68","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("DaoImpl");
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel04","0","37","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Contoller ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel05","303","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("IbitsXml");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel12","304","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("클래스/\r\n메소드명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel10","600","36","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Impl");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","591","10","8","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edClassName","803","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edMethodName","1179","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDevelopName","1255","70","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_value("홍길동");
            obj.set_autoselect("true");
            obj.set_text("홍길동");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel03","1179","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("개발자명");
            obj.set_taborder("35");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel02_00","897","36","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Dao");
            obj.set_taborder("36");
            obj.set_cssclass("sta_cm_box01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDaoImpl","81","72","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("tabMain","379","110",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.tabMain);
            obj.set_text("Tab");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdDetail","5","5",null,null,"5","5",null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_detail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_scrollbarsize("10");
            obj.set_scrollbartrackbarsize("20");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"115\"/><Column size=\"166\"/><Column size=\"102\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"97\"/><Column size=\"171\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"NULL\"/><Cell col=\"5\" text=\"PK\"/><Cell col=\"6\" text=\"DEFAULT\"/><Cell col=\"7\" text=\"엑셀임시설명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:COL_NO\"/><Cell col=\"1\" text=\"bind:COLUMN_NAME\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COMMENTS\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:VW_DATA_TYPE\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:COL_NULL\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"5\" text=\"bind:COL_PK\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"6\" text=\"bind:COL_DEF\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"7\" text=\"bind:REMK_TEXT\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/></Band></Format></Formats>");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.tabMain);
            obj.set_text("Controller");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtContoller","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.tabMain);
            obj.set_text("Service");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtSarvice","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Tabpage("tabSub04",this.tabMain);
            obj.set_text("ServiceImpl");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtServiceImpl","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Tabpage("tabSub05",this.tabMain);
            obj.set_text("Dao");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtDao","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub05.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub05.addChild(obj.name, obj);

            obj = new Tabpage("tabSub06",this.tabMain);
            obj.set_text("DaoImpl");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtDaoImpl","0","0",null,null,"2","1",null,null,null,null,this.tabMain.tabSub06.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub06.addChild(obj.name, obj);

            obj = new Tabpage("tabSub07",this.tabMain);
            obj.set_text("XQry");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtXmlquery","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub07.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub07.addChild(obj.name, obj);

            obj = new Tabpage("tabSub08",this.tabMain);
            obj.set_text("XOracle");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtXOracle","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub08.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub08.addChild(obj.name, obj);

            obj = new Tabpage("tabSub09",this.tabMain);
            obj.set_text("NXPlatForm");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtPID","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub09.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub09.addChild(obj.name, obj);

            obj = new Tabpage("tabSub10",this.tabMain);
            obj.set_text("Vo/Dto");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtVo","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub10.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            obj.set_wordWrap("char");
            this.tabMain.tabSub10.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("제너레이트(Ibits/Map버전)");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboUsers","value","ds_search","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtFilter","value","ds_search","CODE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_01.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_01.xfdl", function() {
        /*
        * FormID(화면 ID명)  : COMM000001S.xfdl(제너레이트(Ibits/Map버전))
        * 작 성		 일 명   : 나용철
        * 작 성	     일 자   : 2022.04.18
        * 변 경		 일 자   :
        * 변 경	     자 명   :
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.gvlProject 	 = "rd"; //현재 프로젝트명을 셋팅
        this.gvlDyty    	 = "rdNxPlatGenerator";
        this.gvlProjectTatle = "SSP Project";
        this.gvlDelpNm       = "홍길동";
        this.gvlsysDate      = "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	//사용자 화면  초기화 함수
        	this.fn_formInit();

        	// 로그인 사용자명 Set
        	//this.divSearch.form.edtDevelopName.set_value(objApp.gv_userNm);
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
        	var strSvc 			= "formInit";
        	var strUrl 			= "/"+ this.gvlProject + "/" + this.gvlDyty + "/selectNxPlatGeneratorUser.do";
        	var strInDs  		= "";
        	var strOutDs 		= "ds_ower=ds_ower";
        	var strArg 			= "";
        	var strCallBack 	= "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    	= true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction(strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);

        };

        this.fn_PostformInit = function()
        {
        	this.divSearch.form.cbProjectName.set_value(this.gvlProject);  //  기본프로젝트를 셋팅한다. this.dsDepth => 현프로젝트명을 기입(Project의 약자를 기입:prj);
        	this.ds1Depth.filter("LEVLE1 == '" + this.divSearch.form.cbProjectName.value + "'");

        	this.divSearch.form.edtWorkName.set_value("CommonCode");
        	this.divSearch.form.edtWorkName1.set_value("List");

        	this.divSearch.form.edtPackage.set_value("com.ssp.bo" + "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value));
        	this.divSearch.form.edClassName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));


        	var strDate 	= this.gfn_getDate("date");

        	this.gvlsysDate = strDate.substr(0, 4) + "/" + strDate.substr(4, 2) + "/" + strDate.substr(6, 2);
        	this.gvlProject = this.divSearch.form.cbProjectName.value;
        	//this.gvlDyty	= this.divSearch.form.cbWorkName.value;
        	this.gvlDelpNm  = this.divSearch.form.edtDevelopName.text;


        	//DB사용자
        	this.cboUsers.set_value("SSP_APP");
        	this.fn_Ret();
        };


        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "formInit":
        				this.fn_PostformInit();
        				break;
        			case "Ret":
        			    this.fn_PostRet();
        			  	break;
        			case "DRet":
        			    this.fn_PostDRet();
        			  	break;
        			default:
        				break;
        		}
        	}
        };
        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        	    case "confirm" :			//확정
        				this.fn_Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.fn_Tmp1();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.fn_Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.fn_Tmp3();
        			break;

        		default :
        			break;
        	}
        };

        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	return true;
        };

        this.fn_Ret = function()
        {
        	if(!this.fn_PreRet())
        	{
        		return false;
        	}

        	var strSvc 		= "Ret";
        	var strUrl 		= "/"+ this.gvlProject + "/" + this.gvlDyty + "/selectNxPlatGeneratorM.do";
        	var strInDs  	= "ds_search=ds_search";
        	var strOutDs 	= "ds_master=ds_master";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);

        };


        this.fn_PostRet = function()
        {
        	//trace(this.ds_master.saveXML());
        	//this.ds_master_onrowposchanged(this.ds_master);
        };
        /**********************************************************************
        	05-1. detail 조회 함수 선언
        ***********************************************************************/
        this.ds_master_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	return true;
        };


        this.fn_DRet = function()
        {
        	if(!this.fn_PreDRet())
        	{
        		return false;
        	}


        	var strSvc 			= "DRet";
        	var strUrl 			= "/"+ this.gvlProject + "/" + this.gvlDyty + "/selectNxPlatGeneratorD.do";
        	var strInDs  		= "";
        	var strOutDs 		= "ds_detail=ds_detail";
        	var strArg 			= "TABLE_NAME="	+ nexacro.wrapQuote(this.ds_master.getColumn(this.ds_master.rowposition,"TABLE_NAME"));
        		strArg 	   	   += " CODE="		+ nexacro.wrapQuote(this.cboUsers.value);
        	var strCallBack    	= "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync       	= true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로


        	this.gfn_transaction(strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);

        };
        /**********************************************************************************************************************
        * 공통으로 사용하는 Function
        ***********************************************************************************************************************/
        /**
        * 첫자 대문자 만들기
        */
        this.fn_strTextToUpper = function(sText)
        {
        	var strText = sText.substr(0,1).toUpperCase() + sText.substr(1);
        	return strText;
        };

        /**
        * 첫자 소문자 만들기
        */
        this.fn_xmlFile = function(FileName)
        {
        	var strXmlFile ="";
        	strXmlFile = (FileName.substr(0,1)).toLowerCase() + FileName.substr(1);
        	return strXmlFile;
        };

        /**
         * 어너테이션 최신 트렌드 만들기
         */
        this.fn_setRequestMapping = function(FileName)
        {
        	var textArry = "";

        	for(var idx=0; idx<FileName.length; idx++)
        	{
        		if((FileName.charCodeAt(idx) >= 33 && FileName.charCodeAt(idx) <= 64))
        		{
        			textArry += String.fromCharCode(FileName.charCodeAt(idx));
        			continue;
        		}

        		if(FileName.charCodeAt(idx) < 97)
        		{
        			if(textArry != "")
        			{
        				textArry += "-";
        			}

        			textArry += String.fromCharCode(FileName.charCodeAt(idx)+32);
        			continue;
        		}
        		textArry += String.fromCharCode(FileName.charCodeAt(idx));
        	}

        	return textArry;
        }

        this.fn_strColName = function(strCol)
        {
        	var strPCol  	= "";
        	var arrCol	 	= strCol.split("_");
        	var colCount 	= 0;
        	colCount 	= arrCol.length;

        	if(colCount == 0)
        	{
        		strPCol =  strCol;

        	}else
        	{
        		strPCol =  strCol;

        		for(var i=0; i < colCount; i++)
        		{
        			if(i==0)
        			{
        				strPCol = arrCol[i];
        			}else
        			{
        				strPCol +=  (arrCol[i].substr(0,1)).toUpperCase() + (arrCol[i].substr(1)).trim();
        			}
        		}


        	}
        	return strPCol;
        };

        this.PidFileName = function()
        {

        	var strPath 			= (this.divSearch.form.edtPath.text.trim()).toLowerCase();
        	var strMixmlFileNm 		= strPath.split(".");
        	var strName 			= "";
        	var strWork 			= this.divSearch.form.edtWorkName.text.trim() + this.divSearch.form.edtWorkName1.text.trim();

        	for(var i = 0; i<strMixmlFileNm.length ; i++)
        	{
        		if(strMixmlFileNm.length < 2)
        		{
        			this.alert("최소한 2레벨은 입력하셔야 합니다.ex)oem.xxx");

        		}else
        		{
        			if(strMixmlFileNm.length==2)
        			{
        				strName = strMixmlFileNm[i].toLowerCase() + this.divSearch.form.edtWorkName.text.trim();

        			}else if(strMixmlFileNm.length==3)
        			{
        				if(i == 1)
        				{
        					strName = strMixmlFileNm[i].toLowerCase();

        				}else if(i == 2)
        				{
        					strName += (strMixmlFileNm[i].toUpperCase()).substr(0,1) + strMixmlFileNm[i].substr(1) + this.divSearch.form.edtWorkName.text.trim() + ".xml";
        				}
        			}
        		}
        	}
        	return strName;
        };

        this.fn_PostDRet = function()
        {

        	//trace(this.ds_detail.saveXML());
        	var strTableName 	= this.cboUsers.value + "." + this.ds_master.getColumn(this.ds_master.rowposition, "TABLE_NAME");
        	var strTableName1 	= this.cboUsers.value + "." + this.ds_master.getColumn(this.ds_master.rowposition, "TABLE_NAME");
        	var strWork 	 	= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.gfn_trim(this.divSearch.form.edtWorkName.text);

        	this.divSearch.form.edtController.set_value(strWork 	+ "Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "Dao.java");
        	this.divSearch.form.edtDaoImpl.set_value(strWork 	    + "DaoImpl.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_SQL.xml");
        	//this.divSearch.form.edtNexacro.set_value(strNexacroNm 	+ ".xfdl");
        	this.divSearch.form.edtNexacro.set_value("SSP_BO_LA_XX.xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "VO.java");

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtDaoImpl();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName1);
        	this.fn_txtPidXml();
        	this.fn_txtVo();

        };

        /**********************************************************************************************************************
        * 서버 프로세스 Navigation시작
        ***********************************************************************************************************************/
        /**
        * Devon Navigation Create()
        * Contorler /입력/저장/수정/삭제
        */
        this.fn_txtContorller = function()
        {
        	var strContoller 	= "";
        	var strGroup     	= this.divSearch.form.edClassName.text.trim();
        	var strMethod	  	= this.divSearch.form.edMethodName.text.trim();
        	var strUrl          = this.gfn_trim(this.divSearch.form.cbProjectName.value);
        	var strControlName 	= strGroup + "Controller";
        	var strServiceName  = strGroup + "Service";
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();
        	var strServiceNmPr  = strServiceName.substring(0,2).toLowerCase() + strServiceName.substring(2) ;
        	var strDbTitle      = this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	strContoller += "/*------------------------------------------------------------------------------\n";
        	strContoller += " * NAME : " + strControlName + ".java\n";
        	strContoller += " * DESC :\n";
        	strContoller += " * VER  : V1.0\n";
        	strContoller += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strContoller += " * Copyright " + this.gfn_getDate("date").substr(0, 4) + " Ready Korea All rights reserved\n";
        	strContoller += " *------------------------------------------------------------------------------\n";
        	strContoller += " *                               MODIFICATION LOG\n";
        	strContoller += " *------------------------------------------------------------------------------\n";
        	strContoller += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strContoller += " * ----------  ------  ---------------------------------------------------------\n";
        	strContoller += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strContoller += " *------------------------------------------------------------------------------*/\n";
        	strContoller += "package " + strPath + ".controller;\n";
        	strContoller += "\n";
        	strContoller += "import java.util.List;\n";
        	strContoller += "import java.util.Map;\n";
        	strContoller += "\n";
        	strContoller += "import javax.annotation.Resource;\n";
        	strContoller += "import javax.servlet.http.HttpServletRequest;\n";
        	strContoller += "import javax.servlet.http.HttpSession;\n";
        	strContoller += "\n";
        	strContoller += "import org.slf4j.Logger;\n";
        	strContoller += "import org.slf4j.LoggerFactory;\n";
        	strContoller += "import org.springframework.stereotype.Controller;\n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMapping;\n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMethod;\n";
        	strContoller += "\n";
        	strContoller += "import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;\n";
        	strContoller += "import com.nexacro.uiadapter17.spring.core.data.NexacroResult;\n";
        	strContoller += "import " + strPath + ".service." + strServiceName + ";\n";
        	strContoller += "import com.ssp.core.util.StringUtil;\n";
        	strContoller += "import com.ssp.core.co.util.SessionsAdmin;\n";
        	strContoller += "import com.ssp.core.common.property.SspPropertyService;\n";
        	strContoller += "import com.ssp.core.legacy.util.CommUtil;\n";
        	strContoller += "import com.ssp.core.common.exception.LoggingException;\n";
        	strContoller += "\n";
        	strContoller += "/**\n";
        	strContoller += " * <pre>\n";
        	strContoller += " *\n";
        	strContoller += " * @title   "+strGroup+"Controller\n";
        	strContoller += " * @@desc   "+strDbTitle+" Controller\n";
        	strContoller += " * @package "+strPath+".controller\n";
        	strContoller += " * <pre>\n";
        	strContoller += " * @author\n";
        	strContoller += " * @since " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strContoller += " * @version 1.0\n";
        	strContoller += " * @see =================== 변경 내역 ================== 날짜 변경자 내용\n";
        	strContoller += " */\n";
        	strContoller += "@Controller\n";
        	strContoller += "@RequestMapping(" + "\"" + "/" + strUrl.replace(/\./g,"/") + "/" + this.fn_setRequestMapping(strMethod) + "\"" + ")\n";
        	strContoller += "public class " + strControlName + " {\n";
         	strContoller += "	private Logger logger = LoggerFactory.getLogger("+strControlName+".class);\n";
         	strContoller += "\n";
         	strContoller += "	@Resource(name = " + "\"" + strServiceNmPr + "\"" + ")\n";
         	strContoller += "	private "+ strServiceName + " " + strServiceNmPr +";\n";
        	strContoller += "\n";
        	strContoller += "	protected static SspPropertyService propertiesService;\n";
        	strContoller += "\n";
        	strContoller += "	@Autowired\n";
        	strContoller += "	void setSspPropertyService(SspPropertyService propertiesService) {\n";
        	strContoller += "		"+strControlName+".propertiesService = propertiesService;\n";
        	strContoller += "	}\n";
        	strContoller += "\n";
        	strContoller += "	/**\n";
        	strContoller += "	 * <pre>\n";
        	strContoller += "	 * 1. MethodName : select"+strMethod+"\n";
        	strContoller += "	 * 2. ClassName  : "+ strControlName+".java\n";
        	strContoller += "	 * 3. Comment    : " + strDbTitle + " 리스트 조회 (select" + strMethod + ")\n";
        	strContoller += "	 * 4. 작성자    :\n";
        	strContoller += "	 * 5. 작성일    : " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strContoller += "	 * </pre>\n";
        	strContoller += "	 *\n";
        	strContoller += "	 * @param searchMap\n";
        	strContoller += "	 * @return\n";
        	strContoller += "	 * @throws Exception\n";
        	strContoller += "	 */\n";
        	strContoller += "	@RequestMapping(value = " + "\"/select-" + this.fn_setRequestMapping(strMethod) + ".do\"" + ", method = RequestMethod.POST)\n";
        	strContoller += "	public NexacroResult select" + strMethod + "(@ParamDataSet(name = " + "\"" + "ds_search" + "\"" + ", required = false) Map<String, Object> searchMap\n";
        	strContoller += "	                                           , HttpSession session) throws Exception\n";
        	strContoller += "	{\n";
        	strContoller += "		NexacroResult result = new NexacroResult();\n";
        	strContoller += "\n";
        	strContoller += "		searchMap.put(" + "\"" + "SES_ID" + "\"" + ", session.getId());\n";
        	strContoller += "\n";
        	strContoller += "		String langCd = StringUtil.getString(searchMap.get(" + "\"" + "LANG_CD" + "\"));\n";
        	strContoller += "\n";
         	strContoller += "		if(CommUtil.nvl(langCd).equals(" + "\"" +"\"))\n";
         	strContoller += "		{\n";
        	strContoller += "			searchMap.put(" + "\"" + "LANG_CD\", " + "\"" + "KO\");\n";
         	strContoller += "		}\n";
        	strContoller += "\n";
        	strContoller += "		if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean(" + "\"" + "ssp.run.develop" + "\"" + ")) \n";
        	strContoller += "		{\n";
        	strContoller += "			SessionsAdmin.setSessionAdminLocal();\n";
        	strContoller += "		}\n";
        	strContoller += "\n";
        	strContoller += "		Map<String, Object> admin = SessionsAdmin.getSessionAdmn();\n";
        	strContoller += "\n";
        	strContoller += "		String coCd = StringUtil.getString(searchMap.get(" + "\"" + "CO_CD" + "\"" + "));\n";
        	strContoller += "\n";
        	strContoller += "		if(CommUtil.nvl(coCd).equals(" + "\"" + "" + "\"" + "))\n";
        	strContoller += "		{\n";
        	strContoller += "			searchMap.put(" + "\"" + "CO_CD" + "\"" + ", admin.get(" + "\"" + "CO_CD" + "\"" + "));\n";
        	strContoller += "		}\n";
        	strContoller += "\n";
        	strContoller += "		try\n";
        	strContoller += "		{\n";
        	strContoller += "			result = "+strServiceNmPr+".select"+strMethod+"(searchMap);\n";
        	strContoller += "		}\n";
        	strContoller += "		catch(Exception e)\n";
        	strContoller += "		{\n";
        	strContoller += "			throw new LoggingException(new String[] { " + "\"RD\", " + "\"BO\", " + "\"select"+strMethod+"\", " + "\""+strDbTitle+" 조회\" }, e) { };\n";
         	strContoller += "		}\n";
         	strContoller += "\n";
         	strContoller += "		return result;\n";
         	strContoller += "	}\n";
        	strContoller += "\n";
        	strContoller += "	/**\n";
        	strContoller += "	 * <pre>\n";
        	strContoller += "	 * 1. MethodName : save"+strMethod+"\n";
        	strContoller += "	 * 2. ClassName  : "+ strControlName+".java\n";
        	strContoller += "	 * 3. Comment    : " + strDbTitle + " 리스트 저장 (save" + strMethod + ")\n";
        	strContoller += "	 * 4. 작성자    :\n";
        	strContoller += "	 * 5. 작성일    : " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strContoller += "	 * </pre>\n";
        	strContoller += "	 *\n";
        	strContoller += "	 * @param searchMap\n";
        	strContoller += "	 * @return\n";
        	strContoller += "	 * @throws Exception\n";
        	strContoller += "	 */\n";
        	strContoller += "	@RequestMapping(value = " + "\"/save-" + this.fn_setRequestMapping(strMethod) + ".do\"" + ", method = RequestMethod.POST)\n";
        	strContoller += "	public NexacroResult save" + strMethod + "(@ParamDataSet(name = " + "\"" + "ds_search" + "\"" + ", required = false) Map<String, Object>       searchMap \n";
        	strContoller += "	                                         , @ParamDataSet(name = " + "\"" + "ds_master" + "\"" + ", required = false) List<Map<String, Object>> saveMap) throws Exception \n";
        	strContoller += "	{\n";
        	strContoller += "		NexacroResult result;\n";
        	strContoller += "\n";
        	strContoller += "		try\n";
        	strContoller += "		{\n";
        	strContoller += "\n";
        	strContoller += "			if(SessionsAdmin.getSessionAdmn() == null && propertiesService.getBoolean(" + "\"" + "ssp.run.develop" + "\"" + ")) \n";
        	strContoller += "			{\n";
        	strContoller += "				SessionsAdmin.setSessionAdminLocal();\n";
        	strContoller += "			}\n";
        	strContoller += "\n";
        	strContoller += "			Map<String, Object> userInfo = SessionsAdmin.getSessionAdmn();\n";
        	strContoller += "\n";
        	strContoller += "			result = "+strServiceNmPr+".save"+strMethod+"(searchMap, saveMap, userInfo);\n";
        	strContoller += "		}\n";
        	strContoller += "		catch(Exception e)\n";
        	strContoller += "		{\n";
        	strContoller += "			throw new LoggingException(new String[] { " + "\"RD\", " + "\"BO\", " + "\"save"+strMethod+"\", " + "\""+strDbTitle+" 저장\" }, e) { };\n";
        	strContoller += "		}\n";
        	strContoller += "\n";
        	strContoller += "		return result;\n";
        	strContoller += "	}\n";
        	strContoller += "}";

        	this.tabMain.tabSub02.form.txtContoller.set_value(strContoller);
        };

        /**********************************************************************************************************************
        * 서버 프로세스 명령어 처리(입력/수정/삭제/저장) Cmd
        ***********************************************************************************************************************/
        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_txtService = function()
        {
        	var strService 		= "";

        	var strGroup    	= this.divSearch.form.edClassName.text.trim();
        	var strMethod		= this.divSearch.form.edMethodName.text.trim();
        	var strUrl          = this.gfn_trim(this.divSearch.form.cbProjectName.value);
        	var strServiceName 	= strGroup + "Service";
        	var strPath    		= this.divSearch.form.edtPackage.text.trim();
        	var strServiceNmPr  = strServiceName.substring(0,2).toLowerCase() + strServiceName.substring(2) ;
        	var strDbTitle      = this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	strService += "/*------------------------------------------------------------------------------\n";
        	strService += " * NAME : " + strServiceName + ".java\n";
        	strService += " * DESC :\n";
        	strService += " * VER  : V1.0\n";
        	strService += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strService += " * Copyright " + this.gfn_getDate("date").substr(0, 4) + " Ready Korea All rights reserved\n";
        	strService += " *------------------------------------------------------------------------------\n";
        	strService += " *                               MODIFICATION LOG\n";
        	strService += " *------------------------------------------------------------------------------\n";
        	strService += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strService += " * ----------  ------  ---------------------------------------------------------\n";
        	strService += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strService += " *------------------------------------------------------------------------------*/\n";
        	strService += "package " + strPath + ".service;\n";
        	strService += "\n";
        	strService += "import java.util.List;\n";
        	strService += "import java.util.Map;\n";
        	strService += "\n";
        	strService += "import com.nexacro.uiadapter17.spring.core.data.NexacroResult;\n";
        	strService += "\n";
        	strService += "/**\n";
        	strService += " * <pre>\n";
        	strService += " *\n";
        	strService += " * @title   "+strGroup+"Service\n";
        	strService += " * @@desc   "+strDbTitle+" Service\n";
        	strService += " * @package "+strPath+".service\n";
        	strService += " * <pre>\n";
        	strService += " * @author\n";
        	strService += " * @since " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strService += " * @version 1.0\n";
        	strService += " * 날짜			변경자		내용 \n";
         	strService += " * ------------------------------------------------ \n";
         	strService += " * "+nexacro.replaceAll(this.gvlsysDate,"/",".")+"			       최초작성\n";
        	strService += " */\n";
        	strService += "public interface " + strServiceName + " {\n";
        	strService += "\n";
        	strService += "    /**\n";
        	strService += "     * " + strDbTitle + " 리스트 조회(select" + strMethod + ")\n";
        	strService += "     * @param input\n";
        	strService += "     * @return\n";
        	strService += "     * @throws Exception\n";
        	strService += "     */\n";
        	strService += "    NexacroResult select" + strMethod + "(Map<String, Object> searchMap) throws Exception;\n";
        	strService += "\n";
        	strService += "    /**\n";
        	strService += "     * " + strDbTitle + " 리스트 저장/수정(save" + strMethod + ")\n";
        	strService += "     * @param input\n";
        	strService += "     * @return\n";
        	strService += "     * @throws Exception\n";
        	strService += "     */\n";
        	strService += "    NexacroResult save" + strMethod + "(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception;\n";
        	strService += "\n";
        	strService += "}";


        	this.tabMain.tabSub03.form.txtSarvice.set_value(strService);
        };

        /**
        * Devon SaveCmd Create()
        * 저장 Cmd 자동생성기
        */
        this.fn_txtServiceImpl = function()
        {
        	var strServiceImpl 		= "";
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceImplName 	= strGroup + "ServiceImpl";
        	var strServiceName    	= strGroup + "Service";
        	var strServiceDAO  	    = strGroup + "Dao";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var sMethodNamePKey     = "select" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameCnt      = "select" 	+ this.gfn_trim(strMethod) + "Count";
        	var sMethodNamePCnt     = "select" 	+ this.gfn_trim(strMethod) + "PKCount";
        	var strServiceNmPr  	= strServiceName.substring(0,2).toLowerCase() + strServiceDAO.substring(2) ;
        	var strDbTitle      	= this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	strServiceImpl += "/*------------------------------------------------------------------------------\n";
        	strServiceImpl += " * NAME : " + strServiceImplName + ".java\n";
        	strServiceImpl += " * DESC :\n";
        	strServiceImpl += " * VER  : V1.0\n";
        	strServiceImpl += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strServiceImpl += " * Copyright " + this.gfn_getDate("date").substr(0, 4) + " Ready Korea All rights reserved\n";
        	strServiceImpl += " *------------------------------------------------------------------------------\n";
        	strServiceImpl += " *                               MODIFICATION LOG\n";
        	strServiceImpl += " *------------------------------------------------------------------------------\n";
        	strServiceImpl += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strServiceImpl += " * ----------  ------  ---------------------------------------------------------\n";
        	strServiceImpl += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strServiceImpl += " *------------------------------------------------------------------------------*/\n";
        	strServiceImpl += "package " + strPath + ".service.impl;\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "import java.util.List;\n";
        	strServiceImpl += "import java.util.Map;\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "import javax.annotation.Resource;\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "import org.springframework.stereotype.Service;\n";
        	strServiceImpl += "import org.springframework.transaction.interceptor.TransactionAspectSupport;\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "import com.nexacro.uiadapter17.spring.core.data.DataSetRowTypeAccessor;\n";
        	strServiceImpl += "import com.nexacro.uiadapter17.spring.core.data.NexacroResult;\n";
        	strServiceImpl += "import com.nexacro17.xapi.data.DataSet;\n";
        	strServiceImpl += "import " + strPath + ".dao."+ strGroup + "Dao;\n";
        	strServiceImpl += "import " + strPath + ".service."+ strServiceName + ";\n";
        	strServiceImpl += "import com.ssp.core.common.exception.MessageException;\n";
        	strServiceImpl += "import com.ssp.core.util.StringUtil;\n";
        	strServiceImpl += "import com.ssp.core.legacy.util.CommUtil;\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "/**\n";
        	strServiceImpl += " * <pre>\n";
        	strServiceImpl += " *\n";
        	strServiceImpl += " * @title   "+strGroup+"ServiceImpl\n";
        	strServiceImpl += " * @@desc   "+strDbTitle+" ServiceImpl\n";
        	strServiceImpl += " * @package "+strPath+".service.impl\n";
        	strServiceImpl += " * <pre>\n";
        	strServiceImpl += " * @author\n";
        	strServiceImpl += " * @since " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strServiceImpl += " * @version 1.0\n";
        	strServiceImpl += " * 날짜			변경자		내용\n";
         	strServiceImpl += " * ------------------------------------------------ \n";
         	strServiceImpl += " * "+nexacro.replaceAll(this.gvlsysDate,"/",".")+"			       최초작성\n";
        	strServiceImpl += " */\n";
        	strServiceImpl += "@Service(" + "\"" + this.fn_xmlFile(strServiceName) + "\"" + ")\n";
        	strServiceImpl += "public class " + strServiceImplName + " implements " + strServiceName + " {\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "    @Resource(name = " + "\"" + strServiceNmPr + "\"" + ")\n";
        	strServiceImpl += "    private " + strGroup + "Dao " + strServiceNmPr + ";\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "    /**\n";
        	strServiceImpl += "     * " + strDbTitle + " 리스트 조회(select" + strMethod + ")\n";
        	strServiceImpl += "     * @param input\n";
        	strServiceImpl += "     * @return\n";
        	strServiceImpl += "     * @throws Exception\n";
        	strServiceImpl += "     */\n";
        	strServiceImpl += "    @Override\n";
        	strServiceImpl += "    public NexacroResult select" + strMethod + "(Map<String, Object> searchMap) throws Exception {\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "        NexacroResult result = new NexacroResult();\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "        int totalCount    = " + strServiceNmPr + "." + sMethodNameCnt + "(searchMap);\n";
        	strServiceImpl += "        List<Map> records = " + strServiceNmPr + ".select" + strMethod + "(searchMap);\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "        result.addDataSet(" + "\"" + "ds_master" + "\"" + ",  records);\n";
        	strServiceImpl += "        result.addVariable(" + "\"" + "totalCount" + "\"" + ",totalCount);\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "        return result;\n";
        	strServiceImpl += "    }\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "    /**\n";
        	strServiceImpl += "     * " + strDbTitle + " 리스트 저장/수정(save" + strMethod + ")\n";
        	strServiceImpl += "     * @param input\n";
        	strServiceImpl += "     * @return\n";
        	strServiceImpl += "     * @throws Exception\n";
        	strServiceImpl += "     */\n";
        	strServiceImpl += "    @Override\n";
        	strServiceImpl += "    public NexacroResult save" + strMethod + "(Map<String, Object> searchMap, List<Map<String, Object>> saveMap, Map<String, Object> userInfo) throws Exception {\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "        NexacroResult result = new NexacroResult();\n";
        	strServiceImpl += "\n";
        	strServiceImpl +="        int iCnt            = 0;\n";
        	strServiceImpl +="        int uCnt            = 0;\n";
        	strServiceImpl +="        int dCnt            = 0;\n";
        	strServiceImpl +="        int rowType;\n";
        	strServiceImpl +="        String recordPKeyValue = " + "\"" + "" + "\"" + ";\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="    try\n";
        	strServiceImpl +="    {\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="        if(saveMap.size() > 0)\n";
        	strServiceImpl +="        {\n";
        	strServiceImpl +="             for (int i=0; i < saveMap.size() ; i++)\n";
        	strServiceImpl +="             {\n";
        	strServiceImpl +="                  Map<String,Object> saveData = saveMap.get(i);\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                  rowType = Integer.parseInt(String.valueOf(saveData.get(DataSetRowTypeAccessor.NAME)));\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                  if (rowType == DataSet.ROW_TYPE_INSERTED)\n";
        	strServiceImpl +="                  {\n";
        	strServiceImpl +="                      List <Map> recordKeyValue = "+strServiceNmPr+"."+ sMethodNamePKey + "(saveData);\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                      Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);\n";
        	strServiceImpl +="                      saveData.put(" + "\"" + "PK_ID" + "\"" + ", mapKeyValue.get(" + "\"" + "KEY_CODE" + "\"" + ").toString());\n";
        	strServiceImpl +="                      saveData.put(" + "\"" + "REGPSN_ID" + "\"" + ", StringUtil.getString(userInfo.get(" + "\"" + "EMP_NO" + "\"" + ")));\n";
        	strServiceImpl +="                      saveData.put(" + "\"" + "UPDPSN_ID" + "\"" + ", StringUtil.getString(userInfo.get(" + "\"" + "EMP_NO" + "\"" + ")));\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                      int dupList = "+strServiceNmPr+"."+sMethodNamePCnt+"(saveData);\n";
            strServiceImpl +="\n";
            strServiceImpl +="                      if (dupList > 0)\n";
            strServiceImpl +="                      {\n";
        	strServiceImpl +="                            throw new MessageException(-100, " + "\"" + "PK코드가 중복되어 있습니다." + "\"" + ");\n";
            strServiceImpl +="                      }\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                      iCnt += "+strServiceNmPr+".insert"+strMethod+"(saveData);\n";
        	strServiceImpl +="                  }\n";
        	strServiceImpl +="                  else if (rowType == DataSet.ROW_TYPE_UPDATED)\n";
        	strServiceImpl +="                  {\n";
        	strServiceImpl +="                      saveData.put(" + "\"" + "UPDPSN_ID" + "\"" + ", StringUtil.getString(userInfo.get(" + "\"" + "EMP_NO" + "\"" + ")));\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="                      uCnt += "+strServiceNmPr+".update"+strMethod+"(saveData);\n";
        	strServiceImpl +="                  }\n";
        	strServiceImpl +="                  else if (rowType == DataSet.ROW_TYPE_DELETED)\n";
        	strServiceImpl +="                  {\n";
        	strServiceImpl +="                      dCnt += "+strServiceNmPr+".delete"+strMethod+"(saveData);\n";
        	strServiceImpl +="                  }\n";
        	strServiceImpl +="                  recordPKeyValue = CommUtil.nvl(saveData.get(" + "\"" + "PK_ID" + "\"" + ")).toString();\n";
        	strServiceImpl +="              }\n";
        	strServiceImpl +="        }\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="        int totalCount    = " + strServiceNmPr + "." + sMethodNameCnt + "(searchMap);\n";
        	strServiceImpl +="        List <Map> dsList = "+ strServiceNmPr + ".select"+strMethod+"(searchMap);\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="        result.addDataSet(" + "\"" + "ds_master" + "\"" + ",   dsList);\n";
        	strServiceImpl +="        result.addVariable(" + "\"" + "totalCount" + "\"" + ",totalCount);\n";
        	strServiceImpl +="        result.addVariable(" + "\"" + "strKeyValue" + "\"" + ",recordPKeyValue);\n";
        	strServiceImpl +="\n";
            strServiceImpl +="    }\n";
            strServiceImpl +="    catch(MessageException e)\n";
            strServiceImpl +="    {\n";
            strServiceImpl +="        if(e.getCode() == -100)\n";
            strServiceImpl +="        {\n";
            strServiceImpl +="            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();  // 강제 롤백.\n";
            strServiceImpl +="            result.setErrorCode(e.getCode());\n";
            strServiceImpl +="            result.setErrorMsg(e.getMessage());\n";
            strServiceImpl +="            return result;\n";
            strServiceImpl +="        }\n";
            strServiceImpl +="        else\n";
            strServiceImpl +="        {\n";
            strServiceImpl +="            throw e;\n";
            strServiceImpl +="        }\n";
            strServiceImpl +="    }\n";
        	strServiceImpl +="\n";
        	strServiceImpl +="        return result;\n";
        	strServiceImpl += "    }\n";
        	strServiceImpl += "\n";
        	strServiceImpl += "}";

        	this.tabMain.tabSub04.form.txtServiceImpl.set_value(strServiceImpl);
        };

        /**
        * Devon DeleteCmd Create()
        * 삭제 Cmd 자동생성기
        */
        this.fn_txtDao = function()
        {
        	var strDao = "";
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup + "Dao";
        	var sMethodNamePKey     = "select" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameCnt      = "select" 	+ this.gfn_trim(strMethod) + "Count";
        	var sMethodNamePCnt     = "select" 	+ this.gfn_trim(strMethod) + "PKCount";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var strDbTitle      	= this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	strDao += "/*------------------------------------------------------------------------------\n";
        	strDao += " * NAME : " + strServiceDAO + ".java\n";
        	strDao += " * DESC :\n";
        	strDao += " * VER  : V1.0\n";
        	strDao += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strDao += " * Copyright " + this.gfn_getDate("date").substr(0, 4) + " Ready Korea All rights reserved\n";
        	strDao += " *------------------------------------------------------------------------------\n";
        	strDao += " *                               MODIFICATION LOG\n";
        	strDao += " *------------------------------------------------------------------------------\n";
        	strDao += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strDao += " * ----------  ------  ---------------------------------------------------------\n";
        	strDao += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strDao += " *------------------------------------------------------------------------------*/\n";
        	strDao += "package " + strPath + ".dao;\n";
        	strDao += "\n";
        	strDao += "import java.util.List;\n";
        	strDao += "import java.util.Map;\n";
        	strDao += "\n";
        	strDao += "/**\n";
        	strDao += " * <pre>\n";
        	strDao += " *\n";
        	strDao += " * @title   "+strGroup+"Dao\n";
        	strDao += " * @@desc   "+strDbTitle+" Dao\n";
        	strDao += " * @package "+strPath+".dao\n";
        	strDao += " * <pre>\n";
        	strDao += " * @author\n";
        	strDao += " * @since " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strDao += " * @version 1.0\n";
        	strDao += " * 날짜			변경자		내용 \n";
         	strDao += " * ------------------------------------------------ \n";
         	strDao += " * "+nexacro.replaceAll(this.gvlsysDate,"/",".")+"			       최초작성\n";
        	strDao += " */\n";
        	strDao += "public interface " + strServiceDAO + " {\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 조회(select" + strMethod + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    List<Map> select" + strMethod + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 카운트 조회(" + sMethodNameCnt + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    int " + sMethodNameCnt + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 키값을 조회(" + sMethodNamePKey + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    List<Map> " + sMethodNamePKey + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 PK중복 체크조회(" + sMethodNamePCnt + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    int " + sMethodNamePCnt + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 저장(insert" + strMethod + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    int insert" + strMethod + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 수정(update" + strMethod + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    int update" + strMethod + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
        	strDao += "    /**\n";
        	strDao += "     * " + strDbTitle + " 리스트 삭제(delete" + strMethod + ")\n";
        	strDao += "     * @param input\n";
        	strDao += "     * @return\n";
        	strDao += "     * @throws Exception\n";
        	strDao += "     */\n";
        	strDao += "    int delete" + strMethod + "(Map<String, Object> map) throws Exception;\n";
        	strDao += "\n";
          	strDao += "}";

        	this.tabMain.tabSub05.form.txtDao.set_value(strDao);
        };

        /**
        * Devon DeleteCmd Create()
        * 삭제 Cmd 자동생성기
        */
        this.fn_txtDaoImpl = function()
        {
        	var strDaoImpl = "";
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup + "DaoImpl";
        	var sMethodNamePKey     = "select" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameCnt      = "select" 	+ this.gfn_trim(strMethod) + "Count";
        	var sMethodNamePCnt     = "select" 	+ this.gfn_trim(strMethod) + "PKCount";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var strDbTitle      	= this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	strDaoImpl += "/*------------------------------------------------------------------------------\n";
        	strDaoImpl += " * NAME : " + strServiceDAO + ".java\n";
        	strDaoImpl += " * DESC :\n";
        	strDaoImpl += " * VER  : V1.0\n";
        	strDaoImpl += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strDaoImpl += " * Copyright " + this.gfn_getDate("date").substr(0, 4) + " Ready Korea All rights reserved\n";
        	strDaoImpl += " *------------------------------------------------------------------------------\n";
        	strDaoImpl += " *                               MODIFICATION LOG\n";
        	strDaoImpl += " *------------------------------------------------------------------------------\n";
        	strDaoImpl += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strDaoImpl += " * ----------  ------  ---------------------------------------------------------\n";
        	strDaoImpl += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strDaoImpl += " *------------------------------------------------------------------------------*/\n";
        	strDaoImpl += "package " + strPath + ".dao.impl;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "import java.util.List;\n";
        	strDaoImpl += "import java.util.Map;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "import javax.annotation.Resource;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "import org.springframework.stereotype.Repository;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "import " + strPath + ".dao."+strGroup+"Dao;\n";
        	strDaoImpl += "import com.ssp.core.co.dao.CommonDAO;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "/**\n";
        	strDaoImpl += " * <pre>\n";
        	strDaoImpl += " *\n";
        	strDaoImpl += " * @title   "+strGroup+"DaoImpl\n";
        	strDaoImpl += " * @@desc   "+strDbTitle+" DaoImpl\n";
        	strDaoImpl += " * @package "+strPath+".dao.Impl\n";
        	strDaoImpl += " * <pre>\n";
        	strDaoImpl += " * @author\n";
        	strDaoImpl += " * @since " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "\n";
        	strDaoImpl += " * @version 1.0\n";
        	strDaoImpl += " * 날짜			변경자		내용\n";
         	strDaoImpl += " * ------------------------------------------------\n";
         	strDaoImpl += " * "+nexacro.replaceAll(this.gvlsysDate,"/",".")+"			       최초작성\n";
        	strDaoImpl += " */\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "@SuppressWarnings(" + "\"" + "unchecked" + "\"" + ")\n";
        	strDaoImpl += "@Repository(" + "\"" + this.fn_xmlFile(strGroup) + "Dao\"" + ")\n";
        	strDaoImpl += "public class " + strServiceDAO + " implements "+strGroup+"Dao {\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    @Resource(name=" + "\"" + "commonDAO" + "\"" + ")\n";
        	strDaoImpl += "    private CommonDAO commonDAO;\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 조회(select" + strMethod + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public List<Map> select" + strMethod + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.selectList(" + "\"" + strGroup+ "." + "select" + strMethod + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 카운트 체크조회(" + sMethodNameCnt + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public int " + sMethodNameCnt + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.selectInteger(" + "\"" + strGroup+ "." + sMethodNameCnt + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 키값을 조회(" + sMethodNamePKey + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public List<Map> " + sMethodNamePKey + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.selectList(" + "\"" + strGroup + "." + sMethodNamePKey + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 PK중복 체크조회(" + sMethodNamePCnt + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public int " + sMethodNamePCnt + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.selectInteger(" + "\"" + strGroup+ "." + sMethodNamePCnt + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 저장(insert" + strMethod + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public int insert" + strMethod + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.insert(" + "\"" + strGroup+ "." + "insert" + strMethod + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 수정(update" + strMethod + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public int update" + strMethod + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.update(" + "\"" + strGroup+ "." + "update" + strMethod + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
        	strDaoImpl += "\n";
        	strDaoImpl += "    /**\n";
        	strDaoImpl += "     * " + strDbTitle + " 리스트 삭제(delete" + strMethod + ")\n";
        	strDaoImpl += "     * @param input\n";
        	strDaoImpl += "     * @return\n";
        	strDaoImpl += "     * @throws Exception\n";
        	strDaoImpl += "     */\n";
        	strDaoImpl += "    @Override\n";
        	strDaoImpl += "    public int delete" + strMethod + "(Map<String, Object> map) throws Exception {\n";
        	strDaoImpl += "     	return commonDAO.delete(" + "\"" + strGroup+ "." + "delete" + strMethod + "\"" + ", map);\n";
        	strDaoImpl += "    }\n";
          	strDaoImpl += "}";

        	this.tabMain.tabSub06.form.txtDaoImpl.set_value(strDaoImpl);
        };


        /*===============================================================================================================================*/
        this.fn_txtXmlquery = function(strTableName)
        {
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup;
        	var sMethodNamePKey     = "select" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "select" 	+ this.gfn_trim(strMethod) + "Count";
        	var sMethodNamePCnt     = "select" 	+ this.gfn_trim(strMethod) + "PKCount";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var idx   				= 0;
            var nRowCnt 			= this.ds_detail.rowcount;
        	var strMetaData 		= "";
        	var strColName  		= "";
        	var strColPk    		= "";
        	var strDataLength 		= "";
        	var strColType    		= "";
        	var strColComent		= "";
        	var strSortColNm        = "";
        	var strDbTitle      	= this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));

        	this.tabMain.tabSub07.form.txtXmlquery.set_value("");

        	strMetaData += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>\n";
        	strMetaData += "<!DOCTYPE mapper PUBLIC "+ "\"" + "-//mybatis.org//DTD Mapper 3.0//EN"+ "\"" + " "+ "\"" + "http://mybatis.org/dtd/mybatis-3-mapper.dtd"+ "\"" + ">\n";
        	strMetaData += "\n";
        	strMetaData += "<mapper namespace=" + "\"" + strServiceDAO + "\"" + ">\n";
        	strMetaData += "\n";
        	strMetaData += "    <select id=" + "\"" + "select" + strMethod +  "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + " resultType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + "select" + strMethod + " " + strDbTitle + " 조회 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            SELECT '0' AS CHK" + "/*".padLeft((30-"0 AS CHK".length)," ") + "CHK" + "*/\n";
            for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.ds_detail.getColumn(idx, "COMMENTS"));
        		strMetaData   += "                 , A." + strColName + "/*".padLeft((30-this.fn_getLengthB(strColName,2))," ") + strColComent + "*/\n";
        	}
        	strMetaData += "              FROM " + strTableName + " A" + "\n";
        	strMetaData += "             WHERE 1=1\n";
         	strMetaData += "        ]]" +">\n";
        	/*-------------------------------------------------------------------*/
        	pkRow = this.ds_detail.findRow("COL_PK","Y");
        	if(pkRow >-1)
        	{
        		for(var idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName = this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        			 strColPk   = this.gfn_trim(this.ds_detail.getColumn(idx, "COL_PK"));
        			 if((strColPk.trim()).length > 0)
        			 {
        				strMetaData += "        <if test=" + "\"" + this.gfn_trim(strColName) + " != null and " + this.gfn_trim(strColName) + " != ''\"" +  ">\n";
        				strMetaData += "            <![CDATA[\n";
        				strMetaData += "               AND " +"A." + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        				strMetaData += "            ]]" + ">\n";
        				strMetaData += "        </if>\n";
        				if(strSortColNm != "")
        				{
        					strSortColNm += "\n                       , ";
        				}
        				strSortColNm += "A." + strColName;
        			 }

        		}
        	}
        	strMetaData += "        <choose>\n";
        	strMetaData += "            <when test='(SORT_COLUMN != null and SORT_COLUMN != " + "\"" +"" + "\"" +") and (SORT_TYPE != null and SORT_TYPE != " + "\"" +"" + "\"" +")'>\n";
        	strMetaData += "             ORDER BY A.${SORT_COLUMN} ${SORT_TYPE}\n";
        	strMetaData += "            </when>\n";
        	strMetaData += "            <otherwise>\n";
        	strMetaData += "             ORDER BY " + strSortColNm + "\n";
        	strMetaData += "            </otherwise>\n";
        	strMetaData += "        </choose>\n";
        	strMetaData += "            OFFSET #{START_NUM} ROWS FETCH FIRST #{ROW_COUNT} ROWS ONLY\n";
        	strMetaData += "    </select>\n";
        	strMetaData += "\n";
        	strMetaData += "    <select id=" + "\"" + sMethodNameKey + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + " resultType=" + "\"" + "Integer" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO + "Dao." + sMethodNameKey +  " " + strDbTitle + " 카운트 조회 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            SELECT COUNT(1) AS CNT\n";
        	strMetaData += "              FROM " + strTableName + "\n";
        	strMetaData += "             WHERE 1=1\n";
        	strMetaData += "        ]]" + ">\n";
        	pkRow = this.ds_detail.findRow("COL_PK","Y");
        	if(pkRow >-1)
        	{
        		for(var idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName = this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        			 strColPk   = this.gfn_trim(this.ds_detail.getColumn(idx, "COL_PK"));
        			 if((strColPk.trim()).length > 0)
        			 {
        				strMetaData += "        <if test=" + "\"" + this.gfn_trim(strColName) + " != null and " + this.gfn_trim(strColName) + " != ''\"" +  ">\n";
        				strMetaData += "            <![CDATA[\n";
        				strMetaData += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        				strMetaData += "            ]]" + ">\n";
        				strMetaData += "        </if>\n";
        			 }
        		}
        	}

        	strMetaData += "    </select>\n";
        	strMetaData += "\n";
        	strMetaData += "    <select id=" + "\"" + sMethodNamePKey + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + " resultType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + sMethodNamePKey +  " " + strDbTitle + " PK 조회 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            SELECT LPAD(NVL(MAX(TO_NUMBER(CODE))+1,'1'),5,'0') AS KEY_CODE\n";
        	strMetaData += "              FROM " + strTableName + "\n";
        	strMetaData += "             WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        		 strColPk 		= this.gfn_trim(this.ds_detail.getColumn(idx, "COL_PK"));

        		 if( (strColPk.trim()).length > 0)
        		 {
        			strMetaData += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        		 }
        	}
         	strMetaData += "        ]]" +">\n";
        	strMetaData += "    </select>\n";
        	strMetaData += "\n";
        	strMetaData += "    <select id=" + "\"" + sMethodNamePCnt + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + " resultType=" + "\"" + "Integer" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO + "Dao." + sMethodNamePCnt +  " " + strDbTitle + " PK카운트 조회 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            SELECT COUNT(1) AS CNT\n";
        	strMetaData += "              FROM " + strTableName + "\n";
        	strMetaData += "             WHERE 1=1\n";
        	strMetaData += "        ]]" + ">\n";
        	pkRow = this.ds_detail.findRow("COL_PK","Y");
        	if(pkRow >-1)
        	{
        		for(var idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName = this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        			 strColPk   = this.gfn_trim(this.ds_detail.getColumn(idx, "COL_PK"));
        			 if((strColPk.trim()).length > 0)
        			 {
        				strMetaData += "        <if test=" + "\"" + this.gfn_trim(strColName) + " != null and " + this.gfn_trim(strColName) + " != ''\"" +  ">\n";
        				strMetaData += "            <![CDATA[\n";
        				strMetaData += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        				strMetaData += "            ]]" + ">\n";
        				strMetaData += "        </if>\n";
        			 }
        		}
        	}

        	strMetaData += "    </select>\n";
        	strMetaData += "\n";
        	strMetaData += "    <insert id=" + "\"" + "insert" + strMethod + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + "insert" + strMethod +  " " + strDbTitle + " 저장 */	\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            INSERT INTO " + strTableName + "\n";
        	strMetaData += "            (\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		if(idx == 0)
        		{
        			strMetaData += "                   " + strColName + "/*".padLeft((30-this.fn_getLengthB(strColName,2))," ") + this.gfn_trim(strColComent) + "*/\n";
        		}else
        		{
        			strMetaData += "                 , " + strColName + "/*".padLeft((30-this.fn_getLengthB(strColName,2))," ") + this.gfn_trim(strColComent) + "*/\n";
        		}
        	}
        	strMetaData += "            )VALUES\n";
        	strMetaData += "            (\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                   SYSDATE\n";

        			}else
        			{
        				strMetaData += "                   #{" + this.gfn_trim(strColName) + "}" + "\n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                 , SYSDATE\n";

        			}else
        			{
        				strMetaData += "                 , #{" +  this.gfn_trim(strColName) + "}" + "\n";
        			}
        		}
        	}
        	strMetaData += "            )\n";
        	strMetaData += "        ]]" +">\n";
        	strMetaData += "    </insert>\n";
        	/*--------------------------UPDATE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "    <update id=" + "\"" + "update" + strMethod + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + "update" + strMethod +  " " + strDbTitle + " 수정 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            UPDATE " + strTableName + "\n";
        	strMetaData += "               SET\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                   " + strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(strColName,2))," ") + "/*".padLeft((61-this.fn_getLengthB(this.gfn_trim(strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(strColName,2))," ")),2))," ") + this.gfn_trim(strColComent) + "*/\n";

        			}else
        			{
        				strMetaData += "                   " + strColName + " = #{".padLeft((30-this.fn_getLengthB(strColName,2))," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                 , " + strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(strColName,2))," ") +  "/*".padLeft((61-this.fn_getLengthB(this.gfn_trim(strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(this.gfn_trim(strColName),2))," ")),2))," ") + this.gfn_trim(strColComent) + "*/\n";

        			}else
        			{
        				strMetaData += "                 , " + strColName + " = #{".padLeft((30-this.fn_getLengthB(strColName,2))," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}
        	}
        	strMetaData += "             WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 	= this.ds_detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        		    strMetaData += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        		 }
        	}
        	strMetaData += "        ]]>\n";
        	strMetaData += "    </update>\n";
        		/*--------------------------MERGE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "    <update id=" + "\"" + "merge" + strMethod + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + "merge" + strMethod +  " " + strDbTitle + " 저장/수정 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            MERGE INTO " + strTableName + " A\n";
        	strMetaData += "                 USING DUAL\n";
        	strMetaData += "                    ON (\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 	= this.ds_detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        			if(idx == 0)
        			{
        				strMetaData += "                               A." + strColName + " = #{".padLeft((18-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColName) + "}" + "\n";

        			} else
        			{
        				strMetaData += "                           AND A." + strColName + " = #{".padLeft((18-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColName) + "}" + "\n";
        			}
        		 }
        	}
        	strMetaData += "                       )\n";
        	strMetaData += "                  WHEN MATCHED THEN\n";
        	strMetaData += "                        UPDATE SET\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));
        		strColPk 	    = this.ds_detail.getColumn(idx, "COL_PK");

        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                               A." + strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/\n";

        			}else
        			{
        				strMetaData += "                               A." + strColName + " = #{".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                             , A." + strColName + " = SYSDATE".padLeft((35-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") +  "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/\n";

        			}else
        			{
        				strMetaData += "                             , A." + strColName + " = #{".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.fn_getLengthB(this.gfn_trim(strColName),2))," ") + this.gfn_trim(strColComent) + "*/\n";
        			}
        		}

        	}
        	strMetaData += "                  WHEN NOT MATCHED THEN\n";
        	strMetaData += "                            INSERT\n";
        	strMetaData += "                            (\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		if(idx == 0)
        		{
        			strMetaData += "                                   A." + strColName + "\n";
        		}else
        		{
        			strMetaData += "                                 , A." + strColName + "\n";
        		}
        	}
        	strMetaData += "                             )VALUES\n";
        	strMetaData += "                             (\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                                   SYSDATE\n";

        			}else
        			{
        				strMetaData += "                                   #{" + this.gfn_trim(strColName) + "}" + "\n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "                                 , SYSDATE\n";

        			}else
        			{
        				strMetaData += "                                 , #{" +  this.gfn_trim(strColName) + "}" + "\n";
        			}
        		}
        	}
        	strMetaData += "                             )\n";
        	strMetaData += "        ]]>\n";
        	strMetaData += "    </update>\n";

        	/*--------------------------------DELETE-----------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "    <delete id=" + "\"" + "delete" + strMethod + "\"" + " parameterType=" + "\"" + "HashMap" + "\"" + ">\n";
        	strMetaData += "        /* " + strServiceDAO+ "Dao." + "delete" + strMethod +  " " + strDbTitle + " 삭제 */\n";
        	strMetaData += "        <![CDATA[\n";
        	strMetaData += "            DELETE FROM " + strTableName + "\n";
        	strMetaData += "             WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.ds_detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        			strMetaData += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        		 }
        	}
        	strMetaData += "        ]]>\n";
        	strMetaData += "    </delete>\n";
        	strMetaData += "</mapper>\n";
            strMetaData += "\n";
            strMetaData += "------------------------------------파싱데이타 셋(ds에 Contents속성에 반듯이 넣어주세요. -------------------------------\n";
            strMetaData += "\n";
        	strMetaData += "<ColumnInfo>\n";
        	strMetaData += "\t"	+  "<Column id=" + "\"" +  "CHK" 		+ "\"" +
        	                            " type=" + "\"" + "STRING" 		+ "\"" +
        								" size=" + "\"" + "1" 			+ "\"" + "/>\n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strDataLength 	= this.ds_detail.getColumn(idx, "DATA_LENGTH");

        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        strDsType = "STRING";
                        break;
                    case "CHAR":
        				strDsType = "CHAR";
        				break;
                    case "DATE":
        				strDsType = "DATETIME";
        				break;
                    case "NUMBER":
        				strDsType = "BIGDECIMAL";
        				break;
                    case "INTEGER":
        				strDsType = "INT";
        				break;
                    case "BLOB":
                        strDsType = "BLOB";
                        break;
                    default:
                        strDsType = "STRING";
                        break;
                }

        		strMetaData += "\t"	+  "<Column id=" + "\"" + this.gfn_trim(strColName) + "\"" +
        		                            " type=" + "\"" + strDsType 				+ "\"" +
        									" size=" + "\"" + strDataLength 			+ "\"" + "/>\n";
        	}
        	strMetaData += "</ColumnInfo>\n";
        	strMetaData += "\n";
            strMetaData += "------------------------------------그리드 데이타 셋 디자인 입니다.   ------------------------------------------\n";
            strMetaData += "\n";
        	strMetaData += "<Grid id=" 				+ "\"" + "grd_list" 				+ "\"" +
        	                    " taborder=" 		+ "\"" + "1" 						+ "\"" +
        						" binddataset=" 	+ "\"" + "ds_master" 				+ "\"" +
        						" autoenter=" 		+ "\"" + "select" 					+ "\"" +
        						" autofittype=" 	+ "\"" + "col" 			   		    + "\"" +
        						" autoupdatetype=" 	+ "\"" + "itemselect" 				+ "\"" +
        						" cellclickbound=" 	+ "\"" + "cell" 					+ "\"" +
        						" left=" 			+ "\"" + "20" 						+ "\"" +
        						" top=" 			+ "\"" + "162" 						+ "\"" +
        						" right=" 			+ "\"" + "20" 						+ "\"" +
        						" bottom=" 			+ "\"" + "90" 						+ "\"" +
        						" nodatatext=" 		+ "\"" + "조회된 결과가 없습니다." + "\"" +
        						" uSortFlag=" 		+ "\"" + "false" 					+ "\"" +
        						" uServerSortFlag=" + "\"" + "true" 					+ "\"" +
        						" uSortCallback=" 	+ "\"" + "fn_sortCallback" 			+ "\"" +
        						" uCellSizeType=" 	+ "\"" + "true" 					+ "\"" + ">\n";
        	strMetaData += "       <Formats>\n";
        	strMetaData += "              <Format id=" + "\"" + "default" + "\"" + ">\n";
        	strMetaData += "                     <Columns>\n";
        	strMetaData += "                            <Col size=" 			+ "\"" + "40" 										+ "\"" + "/>\n";
        	strMetaData += "                            <Col size=" 			+ "\"" + "40" 										+ "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strMetaData += "                            <Col size=" 		+ "\"" + "100" 										+ "\"" + "/>\n";
        	}
        	strMetaData += "                     </Columns>\n";
        	strMetaData += "                     <Rows>\n";
        	strMetaData += "                            <Row" + " size=" 		+ "\"" + "31" 										+ "\"" +
        	                                                    " band=" 		+ "\"" + "head" 									+ "\"" + "/>\n";
        	strMetaData += "                            <Row" + " size=" 		+ "\"" + "31" 										+ "\"" + "/>\n";
        	strMetaData += "                     </Rows>\n";
        	strMetaData += "                     <Band id=" + "\"" + "head" 	+ "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" 	+ "\"" + "checkboxcontrol" 							+ "\"" +
        	                                                " edittype=" 		+ "\"" + "checkbox" 								+ "\"" + "/>  \n";
        	strMetaData += "                            <Cell col=" 			+ "\"" + "1" 										+ "\"" +
        	                                                " displaytype=" 	+ "\"" + "normal" 									+ "\"" +
        													" text=" 			+ "\"" + "No." + "\"" 								+ "/>  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strHeadName = this.ds_detail.getColumn(idx, "COMMENTS");
        		strMetaData += "                            <Cell col=" 		+ "\"" + (idx + 2).toString() 						+ "\"" +
        		                                                " disptype="	+ "\"" + "normal" 									+ "\"" +
        														" text=" 		+ "\"" + this.gfn_trim(strHeadName).toLowerCase() 	+ "\"" + "/>\n";

        	}
        	strMetaData += "                     </Band>\n";
        	strMetaData += "                     <Band id=" + "\"" + "body" + "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" 	+ "\"" + "checkboxcontrol" 	+ "\"" +
        	                                                " edittype=" 		+ "\"" + "checkbox" 		+ "\"" +
        													" text=" 			+ "\"" + "bind:CHK" 		+ "\"" +
        													" editmaxlength=" 	+ "\"" + "1" 				+ "\"" + "/>\n";
        	strMetaData += "                            <Cell col=" 			+ "\"" + "1" 				+ "\"" +
        	                                                " displaytype=" 	+ "\"" + "normal" 			+ "\"" +
        													" expr=" 			+ "\"" + "expr:(dataset.getRowType(currow)) == '2' ? '+':(dataset.getRowType(currow)) == '4' ? 'U':currow+1" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName 		= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColType 		= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));
        		strDataLength 	= this.ds_detail.getColumn(idx, "DATA_LENGTH");

        		var strDsType;
        		var strAlignSize;
        		var strEType;
        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				strDsType 		= "text";
        				strEType 		= "text";
        				strAlignSize 	= "left";
        				break;
        			case "CHAR":
        				strDsType 		= "text";
        				strEType 		= "text";
        				strAlignSize 	= "center";
        				break;
        			case "DATE":
        				strDsType 		= "date";
        				strEType 		= "date";
        				strAlignSize 	= "center";
        				break;
        			case "NUMBER":
        				strDsType 		= "number";
        				strEType 		= "mask";
        				strAlignSize 	= "right";
        				break;
        			case "INTEGER":
        				strDsType 		= "number";
        				strEType 		= "mask";
        				strAlignSize 	= "right";
        				break;
        			case "BLOB":
        				strDsType 		= "text";
        				strEType 		= "text";
        				strAlignSize 	= "left";
        				break;
        			default:
        				strDsType 		= "text";
        				strEType 		= "text";
        				strAlignSize 	= "center";
        				break;
        		}
        		if (strDsType == "date")
        		{
        			strMetaData += "                            <Cell col=" 				+ "\"" + (idx + 2).toString() 					+ "\"" +
        			                                            " displaytype=" 			+ "\"" + this.gfn_trim(strDsType) 				+ "\"" +
        														" edittype=" 				+ "\"" + this.gfn_trim(strEType) 				+ "\"" +
        														" textAlign=" 				+ "\"" +  this.gfn_trim(strAlignSize) 			+ "\"" +
        														" text=" 					+ "\"" + "bind:" + this.gfn_trim(strColName) 	+ "\"" +
        			                                            " editmaxlength=" 			+ "\"" + strDataLength 							+ "\"" +
        			                                            " calendardateformat="      + "\"" + "yyyy-MM-dd" 							+ "\"" +
        														" calendardisplaynulltype=" + "\"" + "none" + "\"" 							+ "/>\n";
        		}
        		else
        		{
        			strMetaData += "                            <Cell col=" 				+ "\"" + (idx + 2).toString() + "\"" +
        			                                            " displaytype=" 			+ "\"" + this.gfn_trim(strDsType) + "\"" +
        														" edittype=" 				+ "\"" + this.gfn_trim(strEType) + "\"" +
        														" textAlign=" 				+ "\"" +  this.gfn_trim(strAlignSize) + "\"" +
        														" text="					+ "\"" + "bind:" + this.gfn_trim(strColName) + "\"" +
        														" editmaxlength=" 			+ "\"" + strDataLength + "\"" + "/>\n";
        		}
        	}
        	strMetaData += "                    </Band>\n";
        	strMetaData += "              </Format>\n";
        	strMetaData += "      </Formats>\n";
        	strMetaData += "</Grid>\n";

        	this.tabMain.tabSub07.form.txtXmlquery.set_value(strMetaData);
        };

        /**
        	테이블 크레이트를 만든다
         */
        this.fn_txtXOracle = function(strTableName)
        {
        	this.tabMain.tabSub08.form.txtXOracle.set_value("");
        	var strBlank   			= "                                                         ";
            var strXOracle 			= "";
            var strColLine 			= "";
            var strComent 			= "";
            var strSqData  			= "";
            var strSqData1  		= "";
            var strSqData2  		= "";
            var strSqData3  		= "";
            var DsType 				= "";
            var strTabspace 		= "";
            var strTabIndex 		="";

            var strColName   		= "";
            var strColType   		= "";
            var strColNull   		= "";
            var strColDef    		= "";
            var strColComent 		= "";
            var strDataType  		= "";
            var strDataLength 		= "";

            var strConstraint 		= "";
            var strConstraint1 		= "";
            var strTableNamePk 	= "PK_" + this.ds_master.getColumn(this.ds_master.rowposition, "TABLE_NAME");

            var idx   = 0;
            var nRowCnt = this.ds_detail.rowcount;

            strXOracle += "DROP TABLE " 			+  strTableName + ";\n\n";
            strXOracle += "CREATE TABLE " 			+  strTableName + "(\n";
            strComent  += "COMMENT ON TABLE " 		+  strTableName + " IS '" +
            this.ds_master.getColumn(this.ds_master.rowposition, "COMMENTS") + "';\n";

        	var chkFalg = this.ds_detail.findRow("COL_PK","Y");

            for(var idx = 0; idx < nRowCnt; idx++)
            {
                 strColName   	= this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
                 strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "VW_DATA_TYPE"));
                 strColNull   	= this.gfn_trim(this.ds_detail.getColumn(idx, "COL_NULL"));
                 strColPk     	= this.gfn_trim(this.ds_detail.getColumn(idx, "COL_PK"));
                 strColDef    	= this.gfn_trim(this.ds_detail.getColumn(idx, "COL_DEF"));
                 strColComent 	= this.gfn_trim(this.ds_detail.getColumn(idx, "COMMENTS"));
                 strDataType  	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

                if ( this.gfn_trim(strColDef).length != 0)
                {
                    strColDef = " DEFAULT " + strColDef;
                }
                if(chkFalg > -1)
                {
                	if(idx == (nRowCnt-1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";

        			}else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";
        			}
                }else
                {

        			if(idx == (nRowCnt-1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef;

        			}else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";

        			}
                }

                strColLine += strBlank.substr( 0, 50 - strColLine.length);

                strXOracle += strColLine + " -- " + strColComent + "\n";

                strComent +=  "COMMENT ON COLUMN " + strTableName + "." + strColName + " IS '" + strColComent + "';\n";

                if ( (this.gfn_trim(strColPk)).length != 0)
                {

                    if (strConstraint == "")
                    {
                        strConstraint += strColName;
                        strConstraint1 += "\t  " + strColName +" ASC\n";
                    }
                    else
                    {
                        strConstraint += ", " + strColName;
                        strConstraint1 += "\t, " + strColName+" ASC\n";
                    }
                }


            } //END FOR

            if ((strConstraint.trim()).length != 0)
            {
                strXOracle += "  CONSTRAINT " + strTableNamePk + " PRIMARY KEY (" + strConstraint + ")\n";
            }

            strXOracle += ");";

            strSqData += "SELECT\n";

            for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.ds_detail.getColumn(idx, "COMMENTS"));
        		if(idx == 0)
        		{
        			strSqData += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";
        		}else
        		{
        			strSqData += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";
        		}
        	}
        	strSqData += "FROM " + strTableName + " \n";
        	strSqData += "WHERE 1=1";
        	var chk = this.ds_detail.findRow("COL_PK","Y");

        	if(chk < 0)
        	{
        		strSqData += ";";

        	}else
        	{
        		strSqData += "\n";
        	}
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.ds_detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		 if((this.gfn_trim(strColPk)).length > 0)
        		 {
        			strSqData += "-- AND " + strColName + " = @".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + "\n";
        		 }
        	}
        	if(chk > -1)
        	{
        		strSqData += ";";

        	}
        // 	====================sql 입력 쿼리 =========================================//
        	strSqData1 += "INSERT INTO " + strTableName + "\n";
        	strSqData1 += "(\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.ds_detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.ds_detail.getColumn(idx, "COMMENTS"));

        		if(idx == 0)
        		{
        			strSqData1 += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";

        		}else
        		{
        			strSqData1 += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";
        		}
        	}
        	strSqData1 += ")VALUES\n";
        	strSqData1 += "(\n";
        	for(var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        DsType = "";
                        break;
                    case "CHAR":
        				DsType = "";
        				break;
                    case "DATE":
        				DsType = "SYSDATE";
        				break;
                    case "NUMBER":
        				DsType = "0";
        				break;
                    case "INTEGER":
        				DsType = "0";
        				break;
                    case "BLOB":
                        DsType = "";
                        break;
                    default:
                        DsType = "";
                        break;
                }


        		if(idx == 0)
        		{
        			strSqData1 += "       " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + "\n";

        		}else
        		{
        			strSqData1 += "     , " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + "\n";
        		}

        	}
        	strSqData1 += ");\n";

           // ====================sql 수정 쿼리 =========================================//
            strSqData3 += "UPDATE " + strTableName + "\n";
        	strSqData3 += "SET \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        DsType = "";
                        break;
                    case "CHAR":
        				DsType = "";
        				break;
                    case "DATE":
        				DsType = "SYSDATE";
        				break;
                    case "NUMBER":
        				DsType = "0";
        				break;
                    case "INTEGER":
        				DsType = "0";
        				break;
                    case "BLOB":
                        DsType = "";
                        break;
                    default:
                        DsType = "";
                        break;
                }

        		if(idx == 0)
        		{
        			strSqData3 += "       " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + strColComent + "\n";
        		}else
        		{
        			strSqData3 += "     , " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + strColComent + "\n";
        		}
        	}
        	strSqData3 += "WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.ds_detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData3 +="AND " + strColName + " = '' --@".padLeft((15-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + "\n";
        		 }
        	}
            strSqData3 += ";";



          //  ====================sql 삭제 쿼리 =========================================//
            strSqData2 += "DELETE FROM " + strTableName + "\n";
        	strSqData2 += "WHERE 1=1\n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		 strColName		= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.ds_detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData2 +="AND " + strColName + " = '' --".padLeft((15-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + "\n";
        		 }
        	}
            strSqData2 += ";";

        	this.tabMain.tabSub08.form.txtXOracle.set_value(strXOracle + "\n\n" + strTabspace + "\n\n" + strComent + "\n\n" + strTabIndex + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 조회 쿼리 입니다. ----------------------- */\n\n"
        								   + strSqData + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 입력 쿼리 입니다. ----------------------- */\n\n"
        								   + strSqData1 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 수정 쿼리 입니다. ----------------------- */\n\n"
        								   + strSqData3 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 삭제 쿼리 입니다. ----------------------- */\n\n"
        								   + strSqData2 + "\n\n");
        };

        this.fn_txtPidXml = function()
        {
        	var strPidxml 	= "";

        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strWorkName         = this.fn_xmlFile(this.divSearch.form.edtWorkName.text.trim());
        	var strPath      		= "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value);
            var strNexacroNm        = this.gfn_trim(this.divSearch.form.edtNexacro.text);
        	var strDbTitle      	= this.gfn_trim(this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS"));
        	this.tabMain.tabSub09.form.txtPID.set_value("");

        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "* FormID(화면   ID명): " +  strNexacroNm 	+ "(" + this.gfn_trim(strDbTitle) + " 관리(조회))\n";
        	strPidxml += "* 작 성         일 명: " + this.gvlDelpNm 	+ "\n";
        	strPidxml += "* 작 성         일 자: " + this.gvlsysDate   + "\n";
        	strPidxml += "* 변 경         일 자:\n";
        	strPidxml += "* 변 경         자 명:\n";
        	strPidxml += "* 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술\n";
        	strPidxml += "*/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        01. 전처리 공통 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "include " + "\"" + "RD::rdMain.xjs" + "\"" + ";\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        02. 폼 변수 정의\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.fv_oApp                = nexacro.getApplication();	//application object\n";
        	strPidxml += "this.lv_pageViewCnt         = 10;\n";
        	strPidxml += "this.div_paging.uPage       = 1;\n";
        	strPidxml += "this.div_paging.uPageNum    = 0;\n";
        	strPidxml += "this.div_paging.uPageRowCnt = 10;\n";
        	strPidxml += "this.div_paging.uPageCnt    = 0;\n";
        	strPidxml += "this.div_paging.uTotCount   = 0;\n";
        	strPidxml += "this.totalCount             = 0;\n";
        	strPidxml += "this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수\n";
        	strPidxml += "\n";
        	strPidxml += "this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0," + "\"" + "CO_CD" + "\"" + ")," + "\"" + "" + "\"" + ") == " + "\"" + "" + "\"" + " ? " + "\"" + "1000" + "\"" + " : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0," + "\"" + "CO_CD" + "\"" + ")," + "\"" + "" + "\"" + ");\n";
        	strPidxml += "this.lvchkColidDs           = " + "\"" + "CLASS_NM" + "\"" + ";                        // 필수 입력사항 칼럼ID  예)  " + "\"" + "commSmcd$commName" + "\"" + "\n";
        	strPidxml += "this.lvchkColNameDs         = " + "\"" + "설명" + "\"" + ";\n";
        	strPidxml += "this.strKeyValue            = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "this.lvGetDate              = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        03. 폼 로드 및 닫을때(폼이 포커스 갈때)\n";
        	strPidxml += "***********************************************************************/\n";
         	strPidxml += "/**\n";
         	strPidxml += " * 기능 : 폼 로드 완료후 초기값 Setting\n";
         	strPidxml += " */\n";
         	strPidxml += "this.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n";
         	strPidxml += "{\n";
         	strPidxml += "    //폼에 공통으로 로드시 사용하는 함수.\n";
         	strPidxml += "    this.gfn_formOnLoad(this);\n";
        	strPidxml += "    // 로컬 로그인 사용 않할시 false\n";
        	strPidxml += "    this.fn_setLocalUserCreate(true);\n";
         	strPidxml += "    //사용자 화면  초기화 함수\n";
         	strPidxml += "    this.fn_formInit();\n";
         	strPidxml += "};\n";
         	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 폼언 로드(닫기전 셋팅)  Setting\n";
        	strPidxml += " */\n";
        	strPidxml += "this.form_onclose = function(obj:nexacro.Form,e:nexacro.CloseEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        04. 공통 코드 및 콤보 데이타 조회\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.fn_formInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var strDs    = " + "\"" + "dsUserYn|dsGUserYn" + "\"" + ";                    // 데이터를 받을 데이터셋리스트     예) " + "\"" + "DS_CODE01|DS_CODE02|DS_CODE03" + "\"" + "\n";
        	strPidxml += "    var strLgcd  = " + "\"" + "000002|000002" + "\"" + ";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) " + "\"" + "Z01|Z02|Z03" + "\"" + "\n";
        	strPidxml += "    var strComb  = " + "\"" + "T|X" + "\"" + ";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)\n";
        	strPidxml += "    var strOptn  = " + "\"" + "" + "\"" + ";                                      // 조건문 " + "\"" + " AND COMM_IT02 = '" + "\"" + " + vip + " + "\"" + "'|||" + "\"" + ";\n";
        	strPidxml += "    var svcId    = " + "\"" + "Init" + "\"" + ";\n";
        	strPidxml += "\n";
        	strPidxml += "    // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);\n";
        	strPidxml += "    // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.\n";
        	strPidxml += "    this.fn_CmmnMultiComboLoad(strDs\n";
        	strPidxml += "                              , strLgcd\n";
        	strPidxml += "                              , strComb\n";
        	strPidxml += "                              , strOptn\n";
        	strPidxml += "                              , svcId);\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
         	strPidxml += "this.fn_PostformInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.\n";
        	strPidxml += "    //this.ds_search.setColumn(0," + "\"" + "USE_CHK" + "\"" + ",null);\n";
        	strPidxml += "\n";
        	strPidxml += "    /*\n";
        	strPidxml += "    var strDs     = " + "\"" + "dsThrAfflts01" + "\"" + ";\n";
        	strPidxml += "    var strLgcd   = " + "\"" + "XBT_THR_AFFLTS" + "\"" + ";   //카드사 기관코드\n";
        	strPidxml += "    var strComb   = " + "\"" + "T" + "\"" + ";\n";
        	strPidxml += "    var svcId     = " + "\"" + "singleInit" + "\"" + ";\n";
        	strPidxml += "    var callback  = " + "\"" + "fn_callBack" + "\"" + ";\n";
        	strPidxml += "    \n";
        	strPidxml += "    // fn_CmmnSingleComboLoad(승인/정산);\n";
        	strPidxml += "    this.fn_CmmnSingleComboLoad(strDs\n";
        	strPidxml += "                              , strLgcd\n";
        	strPidxml += "                              , strComb\n";
        	strPidxml += "                              , svcId\n";
        	strPidxml += "                              , callback);\n";
            strPidxml += "    */\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
            strPidxml += "* 화면 최초 초기화 작업 함수\n";
        	strPidxml += "*/\n";
        	strPidxml += "this.fn_setResetBtnCall = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.ds_search.clearData();\n";
        	strPidxml += "    var nRow = this.ds_search.addRow();\n";
        	strPidxml += "    this.ds_search.setColumn(nRow," + "\"" + "PUB_ONLY_SPR_CD" + "\"" + ",         null); // 공용전용구분 초기화\n";
        	strPidxml += "\n";
        	strPidxml += "    // 일자 날짜 초기화 Setting\n";
        	strPidxml += "    this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr\n";
        	strPidxml += "                           ,this.div_search.form.cal_reqDtFnlProcDtEnd\n";
        	strPidxml += "                           ,this.div_search.form.cmb_dtUnit);\n";
        	strPidxml += "\n";
        	strPidxml += "    // Multi검색조회 데이터 존재시 초기화\n";
        	strPidxml += "    this.fn_deleteMultiData(" + "\"" + "fn_callBack" + "\"" + ");\n";
        	strPidxml += "}\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_PostSingleInt = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //trace(this.ds_mstCardOrg.saveXML());\n";
        	strPidxml += "    //this.ds_search.setColumn(0," + "\"" + "AFFLTS_CD1" + "\"" + ",null);\n";
        	strPidxml += "}\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 콜백함수(후처리)\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "    if(nErrorCode != 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_alert(sErrorMsg," + "\"" + "에러정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "error" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }else\n";
        	strPidxml += "    {\n";
        	strPidxml += "        /*sSvcId (Transaction Id)*/\n";
        	strPidxml += "        switch(sSvcId)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            case " + "\"" + "Init" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostformInit();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "singleInit" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostSingleInt();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Ret" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostRet();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "insertMultiData" + "\"" + " :\n";
            strPidxml += "                    this.fn_Ret(true);\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "deleteMultiData" + "\"" + " :\n";
        	strPidxml += "                    this.ds_select.deleteAll();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Save" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostSave();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "New" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostNew();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Del" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostDel();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            default:\n";
        	strPidxml += "                break;\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 팝업 종료후 dsDummy Copy\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_dsChildCopydsDummy = function(ds)\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.dsDummy.clearData();\n";
        	strPidxml += "    this.dsDummy.copyData(ds);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "//Popup callback영역\n";
        	strPidxml += "this.fn_popupCallback = function(strId, strVal)\n";
        	strPidxml += "{\n";
        	strPidxml += "    switch(strId)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        case " + "\"" + "SSP_BO_CO_03" + "\"" + " :\n";
        	strPidxml += "\n";
        	strPidxml += "            //중분류팝업조회\n";
        	strPidxml += "            if(!this.gfn_isNull(strVal))\n";
        	strPidxml += "            {\n";
        	strPidxml += "                //일반\n";
        	strPidxml += "                var sRtn = strVal.split(" + "\"" + "," + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "                if(sRtn[0] == " + "\"" + "CLOSE" + "\"" + ")\n";
        	strPidxml += "                {\n";
        	strPidxml += "                    //trace(sRtn[0]);\n";
        	strPidxml += "\n";
        	strPidxml += "                }else\n";
        	strPidxml += "                {\n";
        	strPidxml += "                    //this.div_search.form.edtCodeId.set_value(this.dsDummy.getColumn(0," + "\"" + "PROG_ID" + "\"" + "));\n";
        	strPidxml += "                    //this.div_search.form.edtCodeNm.set_value(this.dsDummy.getColumn(0," + "\"" + "PROG_NM" + "\"" + "));\n";
        	strPidxml += "\n";
        	strPidxml += "                    //Dataset\n";
        	strPidxml += "                    //this.dsDummy.loadXML(sRtn[2]);\n";
        	strPidxml += "                    trace(this.dsDummy.saveXML());\n";
        	strPidxml += "                }\n";
        	strPidxml += "            }\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        default:\n";
        	strPidxml += "            break;\n";
        	strPidxml += "    }\n";
            strPidxml += "};\n";
        	strPidxml += "\n";
         	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        05. 조회 함수 선언(마스터 함수)\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 버튼 클릭시\n";
        	strPidxml += " */\n";
        	strPidxml += "this.btn_search_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    // 멀티입력 검색조건 Set\n";
        	strPidxml += "    this.fn_setMultiSearch(this.formId," + "\"" + "NEW_PRD_REQ_NO" + "\"" + ",this.ds_search.getColumn(0," + "\"" + "NEW_PRD_REQ_NO" + "\"" + "));  // 요청번호\n";
        	strPidxml += "\n";
        	strPidxml += "    // 멀티입력조건 임시 테이블 저장 서비스 호출\n";
        	strPidxml += "    if(this.ds_select.getRowCount() > 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_insertMultiData(" + "\"" + "fn_callBack" + "\"" + ");\n";
        	strPidxml += "    }\n";
        	strPidxml += "    else\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_Ret(true);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 전 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreRet = function(page)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(page)\n";
        	strPidxml += "    {\n";
            strPidxml += "        var oPaging = this.div_paging;\n";
            strPidxml += "        oPaging.uPage    = 1;\n";
            strPidxml += "        oPaging.uPageNum = 0;\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "START_NUM" + "\"" + ",    0);\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "SORT_COLUMN" + "\"" + ",  " + "\"" + "" + "\"" + ");\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "SORT_TYPE" + "\"" + ",    " + "\"" + "" + "\"" + ");\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "INQ_COND_DTLS" + "\"" + ",this.formId);\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "CO_CD" + "\"" + ",        this.lv_coCd);\n";
            strPidxml += "        this.ds_search.setColumn(0," + "\"" + "TOTAL_COUNT" + "\"" + ",  this.totalCount);\n";
        	strPidxml += "\n";
        	strPidxml += "        // page 처리시 기존 조회조건 검색을 위한 데이터 카피\n";
        	strPidxml += "        this.ds_searchTemp.copyData(this.ds_search);\n";
            strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    // 조회조건 셋팅\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 조회 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_Ret = function(page)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreRet(page))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Ret" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/" + this.fn_setRequestMapping(strWorkName) + "/select-" + this.fn_setRequestMapping(strMethod) + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_search=ds_searchTemp" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "ds_master=ds_master" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 후 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PostRet = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.lv_pageViewCnt," + "\"" + "fn_pageCallback" + "\"" + ");\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += "* 초기화 버튼 클릭시 onclick 이벤트 발생 처리\n";
        	strPidxml += "*/\n";
        	strPidxml += "this.div_search_btn_init_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    // 초기화 호출\n";
        	strPidxml += "    this.fn_setResetBtnCall();\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        06. 추가 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 추가 버튼 클릭시\n";
        	strPidxml += " */\n";
        	strPidxml += "this.btn_add_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.fn_New();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 추가 전 실행(기본체크사항)\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreNew = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 추가 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_New = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreNew())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var nRow = this.ds_master.addRow();\n";
        	strPidxml += "    this.ds_master.setColumn(nRow," + "\"" + "CHK" + "\"" + ",     " + "\"" + "0" + "\"" + ");           //업체코드\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 처리 후 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PostNew = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        07. 삭제 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 버튼 클릭시\n";
        	strPidxml += " */\n";
        	strPidxml += "\n";
        	strPidxml += "this.btn_del_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.fn_Del();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 버튼 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //멀티삭제용도\n";
        	strPidxml += "    if(this.ds_master.rowcount < 1 || this.ds_master.findRow(" + "\"" + "CHK" + "\"" + ",1) == -1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_alert(" + "\"" + "ERRR000188" + "\"" + "," + "\"" + "삭제정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "warning" + "\"" + "); // 삭제할 데이타가 없습니다.!\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var result = this.fn_confirm( " + "\"" + "ERRR000179" + "\"" + ", " + "\"" + "삭제정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + " ); // 현재선택행을 삭제하시겠습니까?\n";
        	strPidxml += "\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    // 멀티 삭제 처리\n";
        	strPidxml += "    for(var i = this.ds_master.rowcount-1; 0 <= i; i--)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        if(this.ds_master.getColumn(i," + "\"" + "CHK" + "\"" + ") == 1)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.ds_master.deleteRow(i);\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    // 단건 한행 삭제 처리\n";
        	strPidxml += "    // this.ds_master.deleteRow(this.ds_master.rowposition);\n";
        	strPidxml += "\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : Row 삭제 또는 Transaction 삭제 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_Del = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreDel())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        // 	strPidxml += "    var strSvc      = " + "\"" + "Del" + "\"" + ";\n";
        // 	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/" + strWorkName + "/delete" + strMethod + ".do" + "\"" + ";\n";
        // 	strPidxml += "    var strInDs     = " + "\"" + "ds_master=ds_master:u" + "\"" + ";\n";
        // 	strPidxml += "    var strOutDs    = " + "\"" + "" + "\"" + ";\n";
        // 	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        // 	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        // 	strPidxml += "    var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        // 	strPidxml += "    this.gfn_transaction(strSvc\n";
        // 	strPidxml += "                       , strUrl\n";
        // 	strPidxml += "                       , strInDs\n";
        // 	strPidxml += "                       , strOutDs\n";
        // 	strPidxml += "                       , strArg\n";
        // 	strPidxml += "                       , strCallBack\n";
        // 	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_PostDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //this.gfn_getRowCount(this.staRowCnt,this.ds_master);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        08. 저장 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 버튼 클릭시\n";
        	strPidxml += " */\n";
        	strPidxml += "\n";
        	strPidxml += "this.btn_Save_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.fn_Save();\n";
        	strPidxml += "};\n"
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 전 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.ds_master.rowcount > 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        for(var i=0;i<this.ds_master.rowcount; i++)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            if(this.ds_master.getColumn(i," + "\"" + "CHK" + "\"" + ") == " + "\"" + "0" + "\"" + ")\n";
        	strPidxml += "            {\n";
        	strPidxml += "                continue;\n";
        	strPidxml += "            }\n";
        	strPidxml += "            this.ds_master.setColumn(i," + "\"" + "CHK" + "\"" + "," + "\"" + "0" + "\"" + ");\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    if(!this.gfn_dsIsUpdated(this.ds_master))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_alert(" + "\"" + "ERRC000035" + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + "); // 변경된 이력이 없습니다.\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    /*\n";
        	strPidxml += "    var sFindStr  		= " + "\"" + "\"" + ";\n";
        	strPidxml += "    var stdValCd  		= " + "\"" + "\"" + ";\n";
        	strPidxml += "    var dupChkRow 		= 0;\n";
        	strPidxml += "    var argCardOrgCd 	    = new Array();\n";
        	strPidxml += "\n";
        	strPidxml += "    for(var iRow=0; iRow < this.ds_master.rowcount; iRow ++)\n";
        	strPidxml += "    {\n";
            strPidxml += "        var strRowType = this.ds_master.getRowType(iRow);\n";
        	strPidxml += "        if(strRowType == 1)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            continue;\n";
        	strPidxml += "        }\n";
        	strPidxml += "        //*************** 화면 중복 체크(서버에서 중복체크도 함)  ***********************\n";
        	strPidxml += "        stdValCd    	= this.ds_master.getColumn(iRow," + "\"" + "CARD_ORG_CD" + "\"" + ");\n";
        	strPidxml += "        // 중복체크 할 Key Value 세팅\n";
        	strPidxml += "        sFindStr 		= " + "\"" + "cardOrgCd == '" + "\"" + "stdValCd" + "\"" + "'" + "\"" + ";\n";
        	strPidxml += "        dupChkRow     = this.gfn_dupCheck(this.dsMaster, sFindStr );	\n";
        	strPidxml += "        if ( dupChkRow > 1 )\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.dsMaster.set_rowposition(iRow);\n";
        	strPidxml += "            this.fn_alert(" + "\"" + "ERRR000169" + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "카드사정보" + "\"" + "," + "\"" + "error" + "\"" + "); // $1 중복 되었습니다.!\n";
        	strPidxml += "            this.edtCardOrgCd.setFocus();\n";
        	strPidxml += "            return false;\n";
            strPidxml += "        }\n";
            strPidxml += "        //*************** 한글 영문 숫자 바이트체크  ***********************\n";
        	strPidxml += "        var sOrgNm = this.ds_master.getColumn(iRow, " + "\"" + "ORG_NM" + "\"" + ");\n";
        	strPidxml += "        if(this.fn_getLengthB(sOrgNm,3) > 20)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.ds_master.set_rowposition(iRow);\n";
        	strPidxml += "            this.fn_alert(" + "\"" + "ERRR000172" + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "카드사명,20" + "\"" + "," + "\"" + "error" + "\"" + ");    //카드사명은(는) 20byte이하 여야합니다.   \n";
        	strPidxml += "            this.edtOrgNm.setFocus();\n";
        	strPidxml += "            return false;\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
            strPidxml += "    */\n";
        	strPidxml += "    // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)\n";
        	strPidxml += "    var chkFocusFlg = true;\n";
        	strPidxml += "    var result      = this.fn_cmmnChkEssentialItem(this.ds_master, this.lvchkColidDs, this.lvchkColNameDs, this.grd_list, chkFocusFlg, this);\n";
        	strPidxml += "\n";
        	strPidxml += "    if (result[0] != " + "\"" + "success" + "\"" + ")\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_alert(result[0]," + "\"" + "저장정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + ");\n";
        	strPidxml += "        this.ds_master.set_rowposition(result[1]); //데이터셋 변경\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "\n";
        	strPidxml += "     var result = this.fn_confirm( " + "\"" + "ERRR000098" + "\"" + ", " + "\"" + "저장" + "\"" + "," + "\"" + "" + "\"" + ", " + "\"" + "question" + "\"" + " ); // 저장 하시겠습니까?\n";
        	strPidxml += "     if(result == 0)\n";
        	strPidxml += "     {\n";
        	strPidxml += "         return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "     return true;\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_Save = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreSave())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Save" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/" + this.fn_setRequestMapping(strWorkName) + "/save-" + this.fn_setRequestMapping(strMethod) + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_search=ds_search:a " + "\"" + ";\n";
        	strPidxml += "        strInDs    += " + "\"" + "ds_master=ds_master:u" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "ds_master=ds_master" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장시 후처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PostSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var nRow = this.ds_master.findRow(" + "\"" + "CLASS_ID" + "\"" + ",this.strKeyValue);\n";
        	strPidxml += "    this.ds_master.set_rowposition(nRow);\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        09. 초기화\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        10. 출력 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        11. ExcelDnwn 엑셀로 출력\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += "* 엑셀다운로드 버튼 클릭시 onclick 이벤트 발생 처리\n";
        	strPidxml += "*/\n";
        	strPidxml += "this.btn_excelDown_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.fn_Excel();\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_Excel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.ds_master.rowcount < 1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_alert(" + "\"" + "ERRS000202" + "\"" + ", " + "\"" + "EXCEL 정보" + "\"" + " ," + "\"" + "" + "\"" + "," + "\"" + "information" + "\"" + "); // 엑셀 파일로 다운로드 할 수 있는 자료가 없습니다.\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    var result = this.fn_confirm( " + "\"" + "ERRR000168" + "\"" + ", " + "\"" + "EXCEL 출력" + "\"" + "," + "\"" + "Excel" + "\"" + "," + "\"" + "question" + "\"" + " ); // Excel를 출력하시겠습니까?\n";
        	strPidxml += "\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    this.gfn_excelExport(this.grd_list, " + "\"" + "시트이름" + "\"" + "," + "\"" + "파일이름" + "\"" + ");\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        13. Get, Set Method\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        14. 기타 Control Event\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 그리드 상단 Sort 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_sortCallback = function(sGridId)\n";
        	strPidxml += "{\n";
        	strPidxml += "    var oGrid = null;\n";
        	strPidxml += "\n";
        	strPidxml += "    if(sGridId == " + "\"" + "grd_list" + "\"" + ")\n";
        	strPidxml += "    {\n";
        	strPidxml += "        if(this.ds_master.getRowCount() > 0)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            var oSortInfo = this.grd_list.uaSortInfo;\n";
        	strPidxml += "            this.ds_searchTemp.setColumn(0," + "\"" + "SORT_COLUMN" + "\"" + ",oSortInfo.bindCol);\n";
        	strPidxml += "            this.ds_searchTemp.setColumn(0," + "\"" + "SORT_TYPE" + "\"" + ",  oSortInfo.status);\n";
        	strPidxml += "            this.fn_Ret(false);\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 그리드 하단 페이지 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_pageCallback = function(sFlag)\n";
        	strPidxml += "{\n";
        	strPidxml += "    var oPaging = this.div_paging;\n";
        	strPidxml += "\n";
        	strPidxml += "    if(sFlag)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.ds_searchTemp.setColumn(0," + "\"" + "START_NUM" + "\"" + ",oPaging.uPageNum);\n";
        	strPidxml += "        this.ds_searchTemp.setColumn(0," + "\"" + "ROW_COUNT" + "\"" + ",this.lv_pageViewCnt);\n";
        	strPidxml += "        this.fn_Ret(false);\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    var sTotText = " + "\"" + "(<b v='true'>총 " + "\"" + "+ oPaging.uTotCount+" + "\"" + "건 </b><fc v='red'>" + "\"" + "+ oPaging.uPage +" + "\"" + "</fc> / " + "\"" + "+ oPaging.uPageCnt +" + "\"" + ")" + "\"" + ";\n";
        	strPidxml += "    this.sta_totcnt.set_text(sTotText);\n";
        	strPidxml += "};";
        // 	strPidxml += "\n";
        // 	strPidxml += "/**\n";
        // 	strPidxml += "  * 닫을시 사용자가 변경유무를 체크(공통처리)\n";
        // 	strPidxml += " **/\n";
        // 	strPidxml += "this.fn_beforeclose = function()\n";
        // 	strPidxml += "{\n";
        // 	strPidxml += "    //return this.gfn_isUpdate(this.ds_master);\n";
        // 	strPidxml += "};";

        	this.tabMain.tabSub09.form.txtPID.set_value(strPidxml);
        };

        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_txtVo = function()
        {
        	var strVo 			= "";
        	var nRowCnt 		= this.ds_detail.rowcount;
        	var strGroup    	= this.divSearch.form.edClassName.text.trim();
        	var strMethod		= this.divSearch.form.edMethodName.text.trim();
        	var strVoName   	=  strGroup + "VO";
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();
        	var strMetaData 	= "";
        	var strColName  	= "";
        	var strColPk    	= "";
        	var strDataLength 	= "";
        	var	strColType    	= "";
        	var strColComent	= "";
        	var strTableNm      = this.ds_master.getColumn(this.ds_master.rowposition,"TABLE_NAME");
        	var strDesc			= this.ds_master.getColumn(this.ds_master.rowposition,"COMMENTS");

        	strVo += "/*------------------------------------------------------------------------------\n";
        	strVo += " * NAME : " + strVoName + ".java\n";
        	strVo += " * DESC :\n";
        	strVo += " * VER  : V1.0\n";
        	strVo += " * PROJ : " + this.gvlProjectTatle + "\n";
        	strVo += " * Copyright 2021 Ready Korea All rights reserved\n";
        	strVo += " *------------------------------------------------------------------------------\n";
        	strVo += " *                               MODIFICATION LOG\n";
        	strVo += " *------------------------------------------------------------------------------\n";
        	strVo += " *    DATE     AUTHOR                      DESCRIPTION\n";
        	strVo += " * ----------  ------  ---------------------------------------------------------\n";
        	strVo += " * " + nexacro.replaceAll(this.gvlsysDate,"/",".") + "  " + this.gvlDelpNm + "\n";
        	strVo += " *------------------------------------------------------------------------------*/\n";
        	strVo += "package " + strPath + ".vo;\n";
        	strVo += "\n";
        	strVo += "import java.sql.Date;\n";
        	strVo += "import java.math.BigDecimal;\n";
        	strVo += "\n";
        	strVo += "import lombok.Data;\n";
        	strVo += "import lombok.ToString;\n";
        	strVo += "\n";
        	strVo += "import org.apache.ibatis.type.Alias;\n";
        	strVo += " \n";
        	strVo += "import com.face.cmmn.vo.DefaultVO;\n";
        	strVo += "\n";
        	strVo += "@Alias( " + "\"" + strVoName + "\"" + " )\n";
        	strVo += "@Data\n";
        	strVo += "@ToString( callSuper = true )\n";
        	strVo += "public class " + strVoName + " extends DefaultVO {\n";
        	strVo += "\n";

        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");

        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                    case "CHAR":
        				strDsType = "String";
        				break;
                    case "DATE":
        				strDsType = "String";
        				break;
                    case "DECIMAL":
                    case "NUMBER":
        				strDsType = "BigDecimal";
        				break;
                    case "INTEGER":
        				strDsType = "int";
        				break;
                    case "BLOB":
                        strDsType = "Blob";
                        break;
                    default:
                        strDsType = "String";
                        break;
                }

        		strVo += "\n";
        		strVo += "\t/** " + this.gfn_trim(strColComent) + " **/\n";
        		strVo += "\t"	+  "private " + strDsType + " " + this.fn_strColName(strColName.toLowerCase()) +";\n";
        	}
        	strVo += "\n";

        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.ds_detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.ds_detail.getColumn(idx, "COMMENTS");

        		strColType   	= this.gfn_trim(this.ds_detail.getColumn(idx, "DATA_TYPE"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                    case "CHAR":
        				strDsType = "String";
        				break;
                    case "DATE":
        				strDsType = "Date";
        				break;
                    case "DECIMAL":
                    case "NUMBER":
        				strDsType = "BigDecimal";
        				break;
                    case "INTEGER":
        				strDsType = "int";
        				break;
                    case "BLOB":
                        strDsType = "Blob";
                        break;
                    default:
                        strDsType = "String";
                        break;
                }
        		strVo += "\n";

        		var strGetName = this.fn_strColName(strColName.toLowerCase());

        		strVo += "\t"	+  "public " + strDsType + " get" + strGetName.substr(0,1).toUpperCase() + strGetName.substr(1) + "() {\n";
        		strVo += "\t  return " + strGetName + ";\n";
        		strVo += "\t}\n";
        		strVo += "\n";
        		strVo += "\t"	+  "public void set" + strGetName.substr(0,1).toUpperCase() + strGetName.substr(1) + "(" + strDsType + " " + strGetName + ") {\n";
        		strVo += "\t  this." + strGetName + " = " + strGetName + ";\n";
        		strVo += "\t}\n";
        	}

        	strVo += "\n";
        	strVo += "}";

        	this.tabMain.tabSub10.form.txtVo.set_value(strVo);
        };
        this.fn_Excel = function()
        {
        	this.gfn_excelExport(this.tabMain.tabSub01.form.grdDetail);
        };

        this.cboUsers_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };


        this.divSearch_cbProjectName_onitemchanged = function(obj,e)
        {

        	this.ds1Depth.filter("LEVLE1 == '" + this.divSearch.form.cbProjectName.value + "'");

        	this.commObjectPro();
        };

        this.divSearch_cbWorkName_onitemchanged = function(obj,e)
        {
        	this.commObjectPro();
        };


        this.divSearch_edBuisNum_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edtWorkName_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edtWorkName1_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.commObjectPro = function()
        {

        	this.divSearch.form.edtPackage.set_value("com.ssp.bo" + "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value) );
        	this.divSearch.form.edClassName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));

        	var strTableName 	= this.cboUsers.value + "." + this.ds_master.getColumn(this.ds_master.rowposition, "TABLE_NAME");
        	var strTableName1 	= this.cboUsers.value + "." + this.ds_master.getColumn(this.ds_master.rowposition, "TABLE_NAME");
        	var strWork 	 	= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.gfn_trim(this.divSearch.form.edtWorkName.text);

        	this.divSearch.form.edtController.set_value(strWork 	+ "Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "Dao.java");
        	this.divSearch.form.edtDaoImpl.set_value(strWork 		+ "DaoImpl.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_SQL.xml");
        	//this.divSearch.form.edtNexacro.set_value(strNexacroNm 	+ ".xfdl");
        	this.divSearch.form.edtNexacro.set_value("SSP_BO_LA_XX.xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "VO.java");

        	this.gvlDelpNm  = this.divSearch.form.edtDevelopName.text;

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtDaoImpl();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName1);
        	this.fn_txtPidXml();
        	this.fn_txtVo();
        };

        this.edtFilter_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtDevelopName_onchanged = function(obj,e)
        {
        	this.commObjectPro();
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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.cboUsers.addEventHandler("onitemchanged",this.cboUsers_onitemchanged,this);
            this.edtFilter.addEventHandler("onkeyup",this.edtFilter_onkeyup,this);
            this.divSearch.form.cbProjectName.addEventHandler("onitemchanged",this.divSearch_cbProjectName_onitemchanged,this);
            this.divSearch.form.edtWorkName.addEventHandler("onchanged",this.divSearch_edtWorkName_onchanged,this);
            this.divSearch.form.edtWorkName1.addEventHandler("onchanged",this.divSearch_edtWorkName1_onchanged,this);
            this.divSearch.form.edtDevelopName.addEventHandler("onchanged",this.divSearch_edtDevelopName_onchanged,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheadclick",this.tabMain_tabSub01_grdDetail1_onheadclick,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheaddblclick",this.tabMain_tabSub01_grdDetail1_onheaddblclick,this);
            this.ds_master.addEventHandler("onrowposchanged",this.ds_master_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_CO_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
