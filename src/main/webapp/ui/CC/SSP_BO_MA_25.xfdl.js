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
            this.set_titletext("탈퇴회원관리 상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,502);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"DRMC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UNIT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BZPLC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEV_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"LEV_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"SVY_CTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MBR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"MBR_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","20","20",null,"444","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","0","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("등록 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0","25",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","25","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("회원 상태");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00","432","25","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00","0","82","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("상위 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","108",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","108","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01","862","108","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("사업장");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","432","108","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("운영단위");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00","0","167","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","0","192",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","192","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("로그인ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00","432","192","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("고객유형");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_title1_00_00_00_00_00","0","250","130","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("이력 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00","0","276",null,"32","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00_00","0","276","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("탈퇴 일시");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00_01_00_00_00","432","276","130","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("탈퇴 사유");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_list","613","Static05_00_00_01_00_00:94","70","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("목록");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_mbrId","Static04_00:10","29","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_lognId","Static02_00_00:10","196","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_custSprCd","Static04_01_00_00:10","196","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_regDtm","Static02_00_00_01_00_00:10","280","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01_04","Static04_00_00_00_00_01_00_00_00:10","280","690","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptId","Static02_00:10","112","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","edt_deptId:4","112","166","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitId","Static04_00_00:10","112","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_oprUnitNm","edt_oprUnitId:4","112","166","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcId","Static04_01:10","112","90","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_bzplcNm","edt_bzplcId:4","112","166","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_rtl("");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","Static02:10","29","260","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05_00_00_01_00_00_00","0","307",null,"64","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","0","307","130","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("설문내용");
            obj.set_cssclass("sta_cm_box01L");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","Static04_01_00:10","312","1122","54",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","670","388","208","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,502,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","Div00.form.edt_mbrId","value","ds_list","MBR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.edt_01_00_00","value","ds_mbrInfo","ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_01_00_00_00","value","ds_mbrInfo","REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.edt_01_00_00_00_00","value","ds_mbrInfo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","Div00.form.edt_01_00_00_00_00_00","value","ds_mbrInfo","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","Div00.form.edt_01_00_00_00_01","value","ds_mbrInfo","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Div00.form.edt_01_00_01","value","ds_mbrInfo","MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Div00.form.edt_01_00_01_00","value","ds_mbrInfo","UT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Div00.form.edt_01_00_01_01","value","ds_mbrInfo","CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","Div00.form.edt_01_00_00_01","value","ds_mbrInfo","DLPLC_ZPCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","Div00.form.edt_01_00_00_02","value","ds_mbrInfo","DLPLC_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","Div00.form.edt_01_00_00_01_00","value","ds_mbrInfo","DLPLC_REPR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","Div00.form.edt_01_00_00_02_00","value","ds_mbrInfo","DLPLC_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Div00.form.edt_01_00_00_01_00_00","value","ds_mbrInfo","DLPLC_DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Div00.form.edt_01_00_00_00_02","value","ds_mbrInfo","JBPOS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Div00.form.edt_01_00_00_00_02_00","value","ds_mbrInfo","CLT_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Div00.form.edt_01_00_00_00_02_00_00","value","ds_mbrInfo","JOIN_PATH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Div00.form.edt_01_00_00_00_01_00","value","ds_mbrInfo","MKTG_CHAR_RCV_AGRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Div00.form.edt_01_00_00_00_01_00_00","value","ds_mbrInfo","MRO_MBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Div00.form.edt_01_00_00_02_00_00","value","ds_mbrInfo","TAXINV_PUBC_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.edt_lognId","value","ds_list","LOGN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Div00.form.edt_custSprCd","value","ds_list","CUST_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Div00.form.edt_regDtm","value","ds_list","LEV_DTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Div00.form.edt_01_04","value","ds_list","LEV_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Div00.form.edt_deptId","value","ds_list","DEPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Div00.form.edt_oprUnitId","value","ds_list","OPR_UNIT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Div00.form.edt_dept00_00_00","value","ds_mbrInfo","UPDPSN_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Div00.form.edt_deptNm","value","ds_list","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Div00.form.edt_oprUnitNm","value","ds_list","OPR_UNIT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Div00.form.edt_dept01_00","value","ds_mbrInfo","UPDPSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Div00.form.edt_bzplcId","value","ds_list","BZPLC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Div00.form.edt_bzplcNm","value","ds_list","BZPLC_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Static00","text","ds_list","DRMC_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.TextArea00","value","ds_list","SVY_CTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basis.form.TextArea00_00","value","dsOprunitBasis","SVC_CHRPSN_INF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basis.form.TextArea00_00_00","value","dsOprunitBasis","OPR_CHRPSN_INF");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_MA_25.xfdl","OD::odUtils.xjs");
        this.registerScript("SSP_BO_MA_25.xfdl", function() {
        /*******************************************************
          PROJECT NAME : SSP-BO
          CREATION DATES :
        *******************************************************/
        this.executeIncludeScript("OD::odUtils.xjs"); /*include "OD::odUtils.xjs"*/;
        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        var coCd = "";
        var mbrId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/

        this.fn_onLoad = function(obj,e)
        {
        	//공통 함수 호출(필수)
        	this.gfn_formOnLoad(this);

        	//검색 영역 최소size 적용
        	this.resetScroll();

        	// 파라미터 값이 빈값인지 체크
        	this.fn_popupCheck();

        	this.fn_search();
        };

        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
        		var sSvcId = "search";
        		var sUrl = "/bo/cust/mbr/select-lev-mbr-deatail.do";
        		var inDs = "ds_search=ds_search";
        		var outDs = "ds_list=ds_output1";
        		var arg = "";
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "");
        	};

        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/
        	this.fn_popupCheck = function(){
        		if(this.parent.mbrId == null || this.parent.mbrId == ""){
        			alert(this.fn_getMessage("ERRC000077")); // 잘못된 접근입니다. 고객ID를 찾을 수 없습니다.
        			this.close();
        		}

        		this.ds_search.setColumn(0, "CO_CD", this.parent.coCd);
        		this.ds_search.setColumn(0, "MBR_ID", this.parent.mbrId);
        	}
        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        	// 목록버튼
        	this.btn_list_onclick = function(obj,e)
        	{
        		this.close();
        	};

        	this.samplePage01_onkeyup = function(obj,e)
        	{
        		//ESC : 닫기기능
        		if(e.keycode == 27){
        			this.close();
        		}
        	};

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.addEventHandler("onkeyup",this.samplePage01_onkeyup,this);
            this.Div00.form.sta_title1.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.sta_title1_00_00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Div00.form.btn_list.addEventHandler("onclick",this.btn_list_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_MA_25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
