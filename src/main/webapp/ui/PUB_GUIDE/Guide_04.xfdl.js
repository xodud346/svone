(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_04");
            this.set_titletext("Grd");
            this.getSetter("classname").set("Guide_04");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,1514);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_excel.png&apos;)</Col><Col id=\"Column5\">Ready</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">접수</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_hwp.png&apos;)</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_file.png&apos;)</Col><Col id=\"Column5\">Ready</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">[메뉴] 결제매체별판매현황, 결제매체별판매</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_img.png&apos;)</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_pdf.png&apos;)</Col><Col id=\"Column5\">Ready</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">접수</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_ppt.png&apos;)</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_txt.png&apos;)</Col><Col id=\"Column5\">Ready</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">삭제</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_video.png&apos;)</Col><Col id=\"Column5\"/></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_word.png&apos;)</Col><Col id=\"Column5\">Ready</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\">9999999</Col><Col id=\"Column3\">20150728</Col><Col id=\"Column4\">URL(&apos;theme://images/ico_zip.png&apos;)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj.set_preload("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">첫번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">세번째뎁스</Col><Col id=\"Column2\"/></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">첫번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">두번째뎁스</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">세번째뎁스</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">세번째뎁스</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">세번째뎁스</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">첫번째뎁스</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("grid_master", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">URL(&apos;theme://images/img_WF_Cell_N.png&apos;)</Col><Col id=\"Column1\">접수</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나</Col><Col id=\"Column8\">Link 1</Col><Col id=\"Column9\">a</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">반려</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나다</Col><Col id=\"Column8\">Link 2</Col></Row><Row><Col id=\"Column0\">URL(&apos;theme://images/img_WF_Cell_U.png&apos;)</Col><Col id=\"Column1\">진행</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나다라</Col><Col id=\"Column8\">Link 3</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">접수</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나다라마</Col><Col id=\"Column8\">Link 4</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">반려</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나다라마바</Col><Col id=\"Column8\">Link 5</Col></Row><Row><Col id=\"Column0\"/><Col id=\"Column1\">진행</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column6\">9999999</Col><Col id=\"Column7\">20150629</Col><Col id=\"Column5\">가나다라마바사</Col><Col id=\"Column8\">Link 6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DsDataset", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"radio1\" type=\"STRING\" size=\"256\"/><Column id=\"radiotext1\" type=\"STRING\" size=\"256\"/><Column id=\"radio2\" type=\"STRING\" size=\"256\"/><Column id=\"radiotext2\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">normal1</Col><Col id=\"Column1\">text1</Col><Col id=\"Column2\">textarea1</Col><Col id=\"Column3\">1000</Col><Col id=\"Column4\">20150801</Col><Col id=\"Column5\">1234567890123</Col><Col id=\"Column6\">1</Col><Col id=\"Column7\">button1</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">가나다라</Col><Col id=\"Column10\">theme://images/treecollapse.png</Col><Col id=\"Column11\">link1</Col><Col id=\"Column12\">20150810</Col><Col id=\"Column13\">156709</Col><Col id=\"radio1\">1</Col><Col id=\"radio2\">0</Col><Col id=\"radiotext1\">Yes</Col><Col id=\"radiotext2\">No</Col><Col id=\"Column14\">123</Col></Row><Row><Col id=\"Column0\">normal2</Col><Col id=\"Column1\">text2</Col><Col id=\"Column2\">textarea2</Col><Col id=\"Column3\">10000</Col><Col id=\"Column4\">20150802</Col><Col id=\"Column5\">2345678901234</Col><Col id=\"Column6\">2</Col><Col id=\"Column7\">button2</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">가나다라</Col><Col id=\"Column10\">theme://images/treeexpand.png</Col><Col id=\"Column11\">link2</Col><Col id=\"Column12\">20150810</Col><Col id=\"Column13\">156709</Col><Col id=\"radio1\">0</Col><Col id=\"radio2\">1</Col><Col id=\"radiotext1\">Yes</Col><Col id=\"radiotext2\">No</Col><Col id=\"Column14\">123</Col></Row><Row><Col id=\"Column0\">normal3</Col><Col id=\"Column1\">text3</Col><Col id=\"Column2\">textarea3</Col><Col id=\"Column3\">100000</Col><Col id=\"Column4\">20150803</Col><Col id=\"Column5\"/><Col id=\"Column6\">3</Col><Col id=\"Column7\">button3</Col><Col id=\"Column8\">1</Col><Col id=\"Column9\">가나다라</Col><Col id=\"Column10\">theme://images/treecollapse.png</Col><Col id=\"Column11\">link3</Col><Col id=\"Column12\">20150810</Col><Col id=\"Column13\">156709</Col><Col id=\"radio1\">0</Col><Col id=\"radio2\">1</Col><Col id=\"radiotext1\">Yes</Col><Col id=\"radiotext2\">No</Col><Col id=\"Column14\">123</Col></Row><Row><Col id=\"Column0\">normal4</Col><Col id=\"Column1\">text4</Col><Col id=\"Column2\">textarea4</Col><Col id=\"Column3\">1000000</Col><Col id=\"Column4\">20150804</Col><Col id=\"Column5\"/><Col id=\"Column6\">4</Col><Col id=\"Column7\">button4</Col><Col id=\"Column8\">0</Col><Col id=\"Column9\">가나다라</Col><Col id=\"Column10\">theme://images/treeexpand.png</Col><Col id=\"Column11\">link4</Col><Col id=\"Column12\">20150810</Col><Col id=\"Column13\">156709</Col><Col id=\"radio1\">1</Col><Col id=\"radio2\">0</Col><Col id=\"radiotext1\">Yes</Col><Col id=\"radiotext2\">No</Col><Col id=\"Column14\">123</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("test", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2002년 말</Col><Col id=\"Column1\">최대주주 (국민연금)</Col><Col id=\"Column2\">33.968</Col><Col id=\"Column3\">99.7%</Col><Col id=\"Column4\">33.968</Col><Col id=\"Column5\">99.7%</Col></Row><Row><Col id=\"Column0\">2003년 말</Col><Col id=\"Column1\">이해진 외 특수관계인</Col><Col id=\"Column2\">2.968</Col><Col id=\"Column3\">8.7%</Col><Col id=\"Column4\">2.968</Col><Col id=\"Column5\">8.7%</Col></Row><Row><Col id=\"Column0\">2004년 말</Col><Col id=\"Column1\">외국인</Col><Col id=\"Column2\">31.100</Col><Col id=\"Column3\">99.7%</Col><Col id=\"Column4\">31.100</Col><Col id=\"Column5\">99.7%</Col></Row><Row><Col id=\"Column0\">2005년 말</Col><Col id=\"Column1\">국내기관</Col><Col id=\"Column2\">33.968</Col><Col id=\"Column3\">8.7%</Col><Col id=\"Column4\">33.968</Col><Col id=\"Column5\">8.7%</Col></Row><Row><Col id=\"Column0\">2006년 말</Col><Col id=\"Column1\">개인</Col><Col id=\"Column2\">2.968</Col><Col id=\"Column3\">8.7%</Col><Col id=\"Column4\">2.968</Col><Col id=\"Column5\">8.7%</Col></Row><Row><Col id=\"Column0\">2007년 말</Col><Col id=\"Column1\">최대주주 (국민연금)</Col><Col id=\"Column2\">31.100</Col><Col id=\"Column3\">99.7%</Col><Col id=\"Column4\">31.100</Col><Col id=\"Column5\">99.7%</Col></Row><Row><Col id=\"Column0\">2008년 말</Col><Col id=\"Column1\">이해진 외 특수관계인</Col><Col id=\"Column2\">33.968</Col><Col id=\"Column3\">8.7%</Col><Col id=\"Column4\">33.968</Col><Col id=\"Column5\">8.7%</Col></Row><Row><Col id=\"Column0\">2009년 말</Col><Col id=\"Column1\">외국인</Col><Col id=\"Column2\">2.968</Col><Col id=\"Column3\">99.7%</Col><Col id=\"Column4\">2.968</Col><Col id=\"Column5\">99.7%</Col></Row><Row><Col id=\"Column0\">2010년 말</Col><Col id=\"Column1\">국내기관</Col><Col id=\"Column2\">31.100</Col><Col id=\"Column3\">8.7%</Col><Col id=\"Column4\">31.100</Col><Col id=\"Column5\">8.7%</Col></Row><Row><Col id=\"Column0\">2011년 말</Col><Col id=\"Column1\">개인</Col><Col id=\"Column2\">2.968</Col><Col id=\"Column3\">99.7%</Col><Col id=\"Column4\">2.968</Col><Col id=\"Column5\">99.7%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("combolist", this);
            obj._setContents("<ColumnInfo><Column id=\"d\" type=\"STRING\" size=\"256\" sumtext=\"ddd\"/><Column id=\"a\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"d\">aa</Col><Col id=\"a\">aa</Col></Row><Row><Col id=\"d\">s</Col><Col id=\"a\">ss</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","175","918","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("MultiGrid");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","135","692",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","-65","135",null,null,"90",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_guide_subtitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","135","330",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","135","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Component Name");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","134","0",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Component View");
            obj.set_cssclass("sta_guide_title");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","175","79","1020","187",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("useinputpanel").set("false");
            obj.set_summarytype("default");
            obj.getSetter("hideendline").set("col");
            obj.set_fillareatype("none");
            obj.set_binddataset("grid");
            obj.set_extendsizetype("row");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"168\"/><Column size=\"85\"/><Column size=\"116\"/><Column size=\"55\"/><Column size=\"64\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"Text\"/><Cell col=\"2\" text=\"Number\"/><Cell col=\"3\" text=\"Date\"/><Cell col=\"4\" text=\"Icon\"/><Cell col=\"5\" text=\"State\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"padding:5 5 5 5 ;\" text=\"bind:Column1\" wordwrap=\"english\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:Column2\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"bind:Column3\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"image\" text=\"bind:Column4\" wordwrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"5\" displaytype=\"normal\" style=\"padding: ;background:URL(&apos;theme://images/grd_WF_state01.png&apos;) center middle;selectbackground:URL(&apos;theme://images/grd_WF_state01.png&apos;) center middle;\" cssclass=\"Cell_WF_FFNG\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","175","58","215","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Master Grid");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","165","80","8","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","153","88","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","153","114","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","165","110","8","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","175","395","1014","199",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("grid_master");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_summarytype("default");
            obj.getSetter("hideendline").set("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/><Row size=\"31\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Text\"/><Cell col=\"1\" displaytype=\"normal\" text=\"Text\" expandshow=\"hide\"/><Cell col=\"2\" edittype=\"expand\" cssclass=\"essential\" text=\"Edit\" expandshow=\"show\" expandsize=\"22\" expandimage=\"URL(&apos;theme://images/grd_WF_Filter.png&apos;)\"/><Cell col=\"3\" displaytype=\"normal\" style=\"line:0 none #808080,1 solid #404040ff,0 none #808080,0 none #808080;\" text=\"MaskEdit\" expandshow=\"hide\" expandsize=\"18\"/><Cell col=\"4\" displaytype=\"normal\" text=\"Combo\" expandshow=\"hide\" expandsize=\"18\"/><Cell col=\"5\" text=\"Text\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" text=\"bind:Column1\" editdisplay=\"edit\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align: ;line:1 solid #d9d8d8ff,1 solid #404040ff,1 solid #d9d8d8ff,0 none #808080ff;\" text=\"bind:Column3\" editdisplay=\"display\" combodisplay=\"edit\"/><Cell col=\"4\" displaytype=\"combo\" edittype=\"combo\" combodisplay=\"display\" calendardisplay=\"edit\"/><Cell col=\"5\" cssclass=\"grd_WF_left\" text=\"bind:Column5\"/><Cell col=\"6\" cssclass=\"cell_Icon_Descending\"/><Cell col=\"7\" cssclass=\"cell_Icon_Asending\"/><Cell col=\"8\" comboautoselect=\"true\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"가운데정렬\" combodataset=\"combolist\" combodatacol=\"d\"/><Cell col=\"9\" displaytype=\"combotext\" text=\"bind:Column9\" subsumtext=\"가운데\" cssclass=\"gridComboTextCenter\" combodataset=\"combolist\" combodatacol=\"a\" combocodecol=\"d\" edittype=\"combo\"/><Cell col=\"10\" displaytype=\"combocontrol\" text=\"콤보텍스트\" subsumtext=\"가운데정렬\" cssclass=\"gridComboTextCenter\" combodataset=\"combolist\" combodatacol=\"d\" edittype=\"combo\" combocodecol=\"a\"/><Cell col=\"11\" cssclass=\"grd_Txt_Blue_U\" text=\"bind:Column5\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" style=\"line:0 none #808080ff,1 solid #404040ff,0 none #808080ff,0 none #808080ff;\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","165","395","8","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","153","403","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","153","430","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","165","424","8","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","175","703","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Grid Cell Display Normal");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Grid("GrdList","175","736","1014","123",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("DsDataset");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("hideendline").set("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"156\"/><Column size=\"156\"/><Column size=\"156\"/><Column size=\"156\"/><Column size=\"100\"/><Column size=\"156\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"normal\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" edittype=\"text\" text=\"text\"/><Cell col=\"3\" text=\"number\"/><Cell col=\"4\" text=\"date\"/><Cell col=\"5\" text=\"mask\" editautoselect=\"true\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:Column0\" editautoselect=\"true\" cssclass=\"grd_WF_left\"/><Cell col=\"1\" edittype=\"none\" cssclass=\"Cell_WF_AlignL\" text=\"bind:Column1\" editautoselect=\"true\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" cssclass=\"Cell_WF_AlignL\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"none\" editfilter=\"number\" style=\"align: ;\" cssclass=\"grd_WF_right\" text=\"bind:Column3\" editautoselect=\"true\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" style=\"align:center;\" text=\"bind:Column4\" mask=\"yyyy/MM/dd\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:Column5\" mask=\"######-#######\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","777","699","22","41",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_FlagGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","965","664","232","54",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("숫자(금액)는 \r\ndisplaytype을 number로 지정(우측정렬)\r\nclass : grd_WF_right");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","509","701","22","41",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_FlagGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","695","664","202","52",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("비정형텍스트는 \r\ndisplaytype을 text로 지정(좌측정렬)\r\nclass : grd_WF_left");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","175","991","1014","100",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("da_grd");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" colspan=\"2\" text=\"Column1\"/><Cell col=\"4\" colspan=\"3\" text=\"Column2\"/><Cell col=\"7\" rowspan=\"2\" text=\"Date\"/><Cell row=\"1\" col=\"2\" text=\"Column1-1\"/><Cell row=\"1\" col=\"3\" text=\"Column1-2\"/><Cell row=\"1\" col=\"4\" text=\"Column2-1\"/><Cell row=\"1\" col=\"5\" text=\"Column2-2\"/><Cell row=\"1\" col=\"6\" text=\"Column2-3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" text=\"bind:Column2\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:Column3\"/><Cell col=\"4\" displaytype=\"text\" text=\"bind:Column4\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:Column5\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:Column6\"/><Cell col=\"7\" displaytype=\"date\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","175","969","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Double line Head");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","135","914",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_guide_Line");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","175","363","1014","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_GrdBtnArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","153","381","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","175","347","10","29",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_topGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","204","347","3","29",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_topGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","626","339","22","57",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_FlagGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","984","327","205","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("버튼간에 Distribute Horizontal  4px");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","423","363","20","6",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_rightGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","164","1020","8","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","152","1030","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","164","1049","8","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","152","1001","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","164","991","8","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_leftGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","152","1062","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","503","595","20","17",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_LeftBottomFlagGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","536","605","163","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Grid 틀고정 컬러값 : #d4d4d4");
            obj.set_cssclass("sta_guide_InstTxt");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","950","590","20","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_LeftBottomFlagGuide");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button62_00","994","361","81","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("일괄수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Button62_00:4","361","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_excel");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","175","365","121","25",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("(총 0건 1/1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1197","368","32","45",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","175","1208","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_guide_InstTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static47_00","153","744","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00","153","771","14","14",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("31");
            obj.set_cssclass("sta_guide_size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1349","0","450",null,null,"459",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","0",null,"21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("< 변경이력 >");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static63_00","0","30",null,"21","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("220308   color값 기표");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("12px/normal \"Malgun Gothic\",\"맑은고딕\",\"Apple SD Gothic Neo\",\"dotum\",\"돋움\",\"arial\",\"sans-serif\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02","275","298","465","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("(normal) font-color : #000000   line :  #d4d4d4   bg: #ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_00_00","275","320","475","26",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("(hover) font-color : #000000   line :  #d4d4d4    bg: #e7ebf4");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_01_01","275","342","465","26",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("(visited) font-color : #000000   line :  #d4d4d4    bg: #c1ceed");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_00_00_00_02_00","275","276","485","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("(제목)  font-color : #000000   상단line :  #999999   line :  #d4d4d4   bg: #ebebee");
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
            this._addPreloadList("data","","ds_menu");
            this._addPreloadList("data","","DsDataset");
        };
        
        // User Script
        this.registerScript("Guide_04.xfdl", function() {

        this.Static23_onclick = function(obj,  e)
        {

        }

        this.Static21_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static16.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static17.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static47.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static13.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static49_onclick,this);
            this.Static53.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static55.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static22.addEventHandler("onclick",this.Static49_onclick,this);
            this.Static23.addEventHandler("onclick",this.Static23_onclick,this);
            this.Static25.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static21.addEventHandler("onclick",this.Static21_onclick,this);
            this.Static37.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static39.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static41.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static43.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static47_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Static13_00.addEventHandler("onclick",this.Static107_onclick,this);
            this.Div00.form.Static63_00.addEventHandler("onclick",this.Div00_Static63_00_onclick,this);
            this.Static19_00_00_00_02.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_00_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_01_01.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
            this.Static19_00_00_00_02_00.addEventHandler("onclick",this.Static19_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Guide_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
