(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dlvplcMngList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1340,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dlvType_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"DLV_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DLV_TYPE\">0</Col><Col id=\"DLV_TYPE_NAME\">전체</Col></Row><Row><Col id=\"DLV_TYPE\">1</Col><Col id=\"DLV_TYPE_NAME\">기본 배송지</Col></Row><Row><Col id=\"DLV_TYPE_NAME\">추가 배송지</Col><Col id=\"DLV_TYPE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("displayCount_ds", this);
            obj._setContents("<ColumnInfo><Column id=\"DISPLAY_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_COUNT_TEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DISPLAY_COUNT\">20</Col><Col id=\"DISPLAY_COUNT_TEXT\">20개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT\">50</Col><Col id=\"DISPLAY_COUNT_TEXT\">50개씩</Col></Row><Row><Col id=\"DISPLAY_COUNT_TEXT\">100개씩</Col><Col id=\"DISPLAY_COUNT\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div_top_info","20","19",null,"161","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","20",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("0");
            obj.set_text("상품 기본 정보");
            obj.set_cssclass("sta_WF_title01");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static02","0","26","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("1");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static03","129","26","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static22_00","431","26","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("16");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static23_00","560","26","303","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static04","862","26","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("3");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static05","991","26",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static06","0","57","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("5");
            obj.set_text("회원");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static07","129","57","734","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08","862","57","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("7");
            obj.set_text("배송지 ID");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static09","991","57",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static10","0","88","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("9");
            obj.set_text("삭제여부");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static65","129","88","734","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static66","862","88","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static11","991","88",null,"32","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo50","159","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("Combo51","1021","-115","150","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08_00","431","57","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("17");
            obj.set_text("배송지 유형");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","431","88","130","32",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_cm_box01L");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("text01","137","30","233","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("19");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn01","374","30","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn01","397","31","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_document");
            obj.set_text("");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("text04","137","61","233","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("22");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn04","374","61","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn04","397","62","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("text02","567","30","233","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("25");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn02","804","30","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn02","827","31","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("text03","997","30","233","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("28");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("searchPopupBtn03","1234","30","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_search02");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("multipleTextBtn03","1257","31","24","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_document");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Edit("text05","997","61","233","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("31");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Radio("Radio00","138","93","162","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var Div_top_info_form_Radio00_innerdataset = new nexacro.NormalDataset("Div_top_info_form_Radio00_innerdataset", obj);
            Div_top_info_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">포함</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">제외</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(Div_top_info_form_Radio00_innerdataset);
            obj.set_text("포함");
            obj.set_value("1");
            obj.set_index("0");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_reset","1108","127","90","24",null,null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("33");
            obj.set_text("초기화");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Button("btn_search","1203","127",null,"24","0",null,null,null,null,null,this.Div_top_info.form);
            obj.set_taborder("34");
            obj.set_text("조회");
            this.Div_top_info.addChild(obj.name, obj);

            obj = new Combo("dlvplcType","587","80","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dlvType_ds");
            obj.set_codecolumn("DLV_TYPE");
            obj.set_datacolumn("DLV_TYPE_NAME");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00_00","20","201","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("■ 목록");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_industryList","20","246","1314","300",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_industryList");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"회원ID\" color=\"#000000\"/><Cell col=\"2\" text=\"회원명\" color=\"#000000\"/><Cell col=\"3\" text=\"배송지 유형\"/><Cell col=\"4\" text=\"배송지 ID\" color=\"#000000\"/><Cell col=\"5\" text=\"수령인명\"/><Cell col=\"6\" text=\"우편번호\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"상세주소\" tooltiptext=\"bind:COM_USR_DEFN_NM_4\"/><Cell col=\"9\" text=\"연락처 1\"/><Cell col=\"10\" text=\"연락처 2\"/><Cell col=\"11\" text=\"사업장ID\"/><Cell col=\"12\" text=\"사업장명\"/><Cell col=\"13\" text=\"운영단위ID\"/><Cell col=\"14\" text=\"운영단위명\"/><Cell col=\"15\" text=\"부서ID\"/><Cell col=\"16\" text=\"부서명\"/><Cell col=\"17\" text=\"삭제여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:B\"/><Cell col=\"3\" edittype=\"text\" displaytype=\"text\" text=\"bind:C\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" combocodecol=\"USE_YN\" combodataset=\"UseYnDtlDs\" combodatacol=\"USE_YN_NAME\" expandshow=\"hide\"/><Cell col=\"5\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"6\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"7\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"8\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"9\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"10\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"11\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"12\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"13\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"14\" edittype=\"normal\" displaytype=\"normal\" expandshow=\"hide\"/><Cell col=\"15\" edittype=\"none\"/><Cell col=\"16\" edittype=\"none\"/><Cell col=\"17\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("displayCount","1216","216","114","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("displayCount_ds");
            obj.set_codecolumn("DISPLAY_COUNT");
            obj.set_datacolumn("DISPLAY_COUNT_TEXT");
            obj.set_text("20개씩");
            obj.set_value("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("dlvplcAddBtn","954","214","91","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배송지 생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","1049","214","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel","1123","214","88","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("액셀 다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("totalPageCount","20","226","300","14",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(총 0건, 1/N)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1340,990,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","displayCount","value","ds_comCdList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dlvplcMngList.xfdl", function() {
        /*******************************************************
          PROJECT NAME : 공통코드 관리
          CREATION DATES : 2022.01.25
        *******************************************************/

        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        };
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //멀티텍스트팝업 콜백함수
        this.fn_multiTextPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	if(objID == 'multipleTextBtn01'){ this.Div_top_info.form.text01.set_value(resParam.textValue); }
        	if(objID == 'multipleTextBtn02'){ this.Div_top_info.form.text02.set_value(resParam.textValue); }
        	if(objID == 'multipleTextBtn03'){ this.Div_top_info.form.text03.set_value(resParam.textValue); }
        	if(objID == 'multipleTextBtn04'){ this.Div_top_info.form.text04.set_value(resParam.textValue); }
        }
        this.fn_searchMultiPopupCallback = function(objID, rtnValue)
        {
        	var resParam = JSON.parse(rtnValue);
        	var sIdList = "";
        	var sNmList = "";
        	if(objID == 'searchPopupBtn01'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.BZPLC_ID +",";
        			sNmList += rtnData.BZPLC_NM +",";
        		}
        		this.Div_top_info.form.text01.set_value(sIdList);
        	}
        	if(objID == 'searchPopupBtn02'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.BZPLC_ID +",";
        			sNmList += rtnData.BZPLC_NM +",";
        		}
        		this.Div_top_info.form.text02.set_value(sIdList);
        	}
        	if(objID == 'searchPopupBtn03'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.OPR_UNT_ID +",";
        			sNmList += rtnData.OPR_UNT_NM +",";
        		}
        		this.Div_top_info.form.text03.set_value(sIdList);
        	}
        	if(objID == 'searchPopupBtn04'){
        		for (var i = 0; i < resParam.length; i++) {
        			var rtnData = JSON.parse(resParam[i]);
        			sIdList += rtnData.MEM_ID +",";
        			sNmList += rtnData.MEM_NM +",";
        		}
        		this.Div_top_info.form.text04.set_value(sIdList);
        	}
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //초기화 버튼
        this.btn_reset_onclick = function(obj,e)
        {
        	this.Div_top_info.form.text01.set_value("");
        	this.Div_top_info.form.text02.set_value("");
        	this.Div_top_info.form.text03.set_value("");
        	this.Div_top_info.form.text04.set_value("");
        	this.Div_top_info.form.text05.set_value("");
        	this.Div_top_info.form.Radio00.set_index(0);
        	this.dlvplcType.set_index(0);
        	this.displayCount.set_index(0);
        };

        //조회 버튼
        this.btn_search_onclick = function(obj,e)
        {
        	alert("조회");
        };

        //배송지생성 버튼
        this.dlvplcAddBtn_onclick = function(obj,e)
        {
        	var objParam = {};
        	this.gfn_openPopup("dlvplcMngPopup", "CC::SSP_BO_MA_14.xfdl", objParam);
        };

        //선택삭제 버튼
        this.btn_delete_onclick = function(obj,e)
        {

        };

        //엑살다운로드 버튼
        this.btn_excel_onclick = function(obj,e)
        {

        };

        //그리드에 보여줄 개수 콤보박스 ONCHANGE함수
        this.useYn_onitemchanged = function(obj,e)
        {

        };

        //멀티 텍스트 팝업
        this.multipleTextBtn_onclick = function(obj,e)
        {
        	var params = {};
        	if(e.fromobject.id == 'multipleTextBtn01'){params = { textId : this.Div_top_info.form.text01 }}	//사업장
        	if(e.fromobject.id == 'multipleTextBtn02'){params = { textId : this.Div_top_info.form.text02 }}	//부서
        	if(e.fromobject.id == 'multipleTextBtn03'){params = { textId : this.Div_top_info.form.text03 }}	//운영단위
        	if(e.fromobject.id == 'multipleTextBtn04'){params = { textId : this.Div_top_info.form.text04 }}	//회원

        	var options = {};
        	options.title = "멀티 텍스트 팝업";

        	this.gfn_openPopup(e.fromobject.id, "CO_POP::multiTextPopup.xfdl", params,  "fn_multiTextPopupCallback", options);
        };


        //멀티 검색 팝업
        this.searchPopupBtn_onclick = function(obj,e)
        {
        	//사업장
        	var params = {};
        	var options = {};
        	if(e.fromobject.id == 'searchPopupBtn01'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::bzplcMultiPopup.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn02'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::bzplcMultiPopup.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn03'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::operateUnitMultiPopup.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        	if(e.fromobject.id == 'searchPopupBtn04'){ this.gfn_openPopup(e.fromobject.id, "CO_POP::clientMultiPopup.xfdl", params,  "fn_searchMultiPopupCallback", options); }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div_top_info.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div_top_info.form.searchPopupBtn01.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn01.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn04.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn04.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn02.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn02.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.searchPopupBtn03.addEventHandler("onclick",this.searchPopupBtn_onclick,this);
            this.Div_top_info.form.multipleTextBtn03.addEventHandler("onclick",this.multipleTextBtn_onclick,this);
            this.Div_top_info.form.btn_reset.addEventHandler("onclick",this.btn_reset_onclick,this);
            this.Div_top_info.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static00_03_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_industryList.addEventHandler("oncellclick",this.grd_comCdClsfDtl_oncellclick,this);
            this.grd_industryList.addEventHandler("ondrag",this.grd_comCdClsfDtl_ondrag,this);
            this.displayCount.addEventHandler("onitemchanged",this.useYn_onitemchanged,this);
            this.dlvplcAddBtn.addEventHandler("onclick",this.dlvplcAddBtn_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_excel.addEventHandler("onclick",this.btn_excel_onclick,this);
            this.totalPageCount.addEventHandler("onclick",this.totalPageCount_onclick,this);
        };
        this.loadIncludeScript("dlvplcMngList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
