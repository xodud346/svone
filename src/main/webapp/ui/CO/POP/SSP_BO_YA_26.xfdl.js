(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SSP_BO_YA_26");
            this.set_titletext("엑셀메타상세등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,453);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_META_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TTL_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("| 엑셀메타 상세 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","60",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","Static60_00:10","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.addChild(obj.name, obj);

            obj = new Edit("PGM_ID","Static02:10","64","201","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("PGM_NM","364","64",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","20","Static03:-1",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","91","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀메타순번");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Edit("EXCEL_META_SEQ","160","95","201","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","20","122",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","122","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("언어");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new Combo("LANG_CD","160","126","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_lang");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","20","153",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","153","130","190",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("컬럼타이틀정보");
            obj.set_cssclass("sta_cm_box01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("COL_TTL_INFO","160","158","610","180",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","395","Static03_00_00_00:30","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","40.13%","373","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,453,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","PGM_ID","value","ds_save","PGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","PGM_NM","value","ds_save","PGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","EXCEL_META_SEQ","value","ds_save","EXCEL_META_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","LANG_CD","value","ds_save","LANG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","COL_TTL_INFO","value","ds_save","COL_TTL_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SSP_BO_YA_26.xfdl", function() {
        /***********************************************************/
        /* 프 로 그 램 : SSP_BO_YA_26
        /* 작 성 일 자 : 2022/03/15
        /* 작  성   자 : 이성민
        /* 설       명 : 엑셀메타관리 상세 언어등록 팝업
        /***********************************************************/





        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        this.fn_onload = function(obj,e)
        {
        	//공통 필수
        	this.gfn_formOnLoad(this);

        	//공통코드
        	this.fn_commonCodeSearch();

        	this.ds_save.addRow();
        };


        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        //공통코드조회
        this.fn_commonCodeSearch = function(){
        	var sSvcId = "commonCodeSearch";
        	var sUrl = "/co/select-common-code-list.do";
        	var inDs = "ds_search=ds_search";
        	var outDs = "ds_lang=ds_output1";
        	var arg = "";

        	this.ds_search.setColumn(0, "CODE_LIST", "LANG_CD");
        	this.ds_search.setColumn(0, "LANG_CD", "KO");

        	this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
        };

        // 저장
        this.fn_save = function() {
        	var sSvcId = "saveExcelMetaDtl";
            var sUrl = "/co/save-excel-meta-dtl.do";
        	var inDs = "ds_save=ds_save:U"
            var outDs = "";
            var arg;
            var callback = "fn_callBack";

        	if( this.confirm("저장 하시겠습니까?") ){
        		this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, callback);
        	}
        }


        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        //조회 콜백
        this.fn_callBack = function(svcID, errorCode, errorMsg) {
        	if(errorCode != 0){
        		this.alert(errorMsg);
        		return;
        	}

        	if( svcID == "commonCodeSearch" ) { //공통코드 콜백

        		//콤보박스 초기값
        		this.LANG_CD.set_index(0);

        		//초기값
        		this.ds_save.setColumn( 0, "PGM_ID", this.parent.pgmId );
        		this.ds_save.setColumn( 0, "PGM_NM", this.parent.pgmNm );
        		this.ds_save.setColumn( 0, "EXCEL_META_SEQ", this.parent.excelMetaSeq );

        	} else if( svcID == "saveExcelMetaDtl" ) {
        		this.opener.fn_popupClose("save");
        		this.close();
        	}

        }

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/
        //화면 설정 함수
        this.cfn_formInit = function(){
        	//static 필수값 표시 초기 설정
        	this.Static02.uEssentiel = "true";
        	this.Static02_00.uEssentiel = "true";
        	this.Static02_00_00.uEssentiel = "true";
        }
        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        //취소버튼
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        //저장
        this.btn_save_onclick = function(obj,e)
        {
        	this.fn_save();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.COL_TTL_INFO.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("SSP_BO_YA_26.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
