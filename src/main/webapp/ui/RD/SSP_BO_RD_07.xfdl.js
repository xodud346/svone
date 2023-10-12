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
            this.set_titletext("R&D 시리즈그룹 상품 관리 생성");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,763);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MALL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_DTM\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"codeList\" type=\"STRING\" size=\"256\"/><Column id=\"langCd\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_SPR_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CTRY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELL_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"MNFR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveList", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MRO_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"SSP_PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BSS_PRD_ATTR_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ATTR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"BASS_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdGrpSprCdCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","48",null,null,"20","123",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid darkblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","125","6",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_cm_box02L_tdt");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_spr_cd","0","6","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("그룹구분");
            obj.set_cssclass("sta_cm_box01L_tdt");
            obj.getSetter("uEssentiel").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","100","37",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_prd_grp_nm","0","37","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_cm_box01L");
            obj.getSetter("uEssentiel").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00","100","68",null,"32","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","68","140","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("그룹 상품 추가");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("PRD_GRP_SPR_CD","150","10","470","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_prdGrpSprCdCombo");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_rowcount("1");
            obj.set_text("시리즈-속성");
            obj.set_value("20");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("PRD_GRP_NM","150","41","470","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("40");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPrdNm","251","72","182","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_prd","436","72","25","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_verticalAlign("");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkBssPrdYn","150","72","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("기준상품");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("N");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","100","99",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_cm_box02L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","0","99","140",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("그룹 상품 리스트");
            obj.set_cssclass("sta_cm_box01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grd_list","151","110",null,null,"10","12",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grd_WF_list");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" colspan=\"2\" text=\"R&amp;D속성\"/><Cell col=\"6\" text=\"제조원\"/><Cell col=\"7\" text=\"주문단위\"/><Cell col=\"8\" text=\"원산지\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" suppressalign=\"middle\" suppress=\"2\"/><Cell col=\"1\" text=\"bind:PRD_NUM\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:PRD_ID\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"4\" displaytype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkboxcontrol&apos;:&apos; normal&apos;\" edittype=\"expr:(BSS_PRD_YN == &apos;Y&apos; &amp;&amp; PRD_GRP_SPR_CD == &apos;20&apos;)?&apos;checkbox&apos;:&apos;none&apos;\" text=\"bind:BASS_CHK\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:SSP_PRD_ATTR_VAL\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MNFR_NM\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:SELL_UNIT\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"8\" text=\"bind:CTRY_NM\" suppress=\"2\" suppressalign=\"middle\" wordWrap=\"char\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"220\"/><Column size=\"350\"/><Column size=\"120\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"상품ID\"/><Cell col=\"3\" text=\"상품명\"/><Cell col=\"4\" text=\"규격\"/><Cell col=\"5\" text=\"제조원\"/><Cell col=\"6\" text=\"주문단위\"/><Cell col=\"7\" text=\"원산지\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PRD_SEQ\"/><Cell col=\"2\" text=\"bind:PRD_ID\"/><Cell col=\"3\" text=\"bind:PRD_NM\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:PRD_ATTR_VAL\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:MNFR_NM\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:SELL_UNIT\"/><Cell col=\"7\" text=\"bind:CTRY_NM\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_add","471","72","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("추가");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_del","547","72","72","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_cancel","548",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insert","652",null,"100","32",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_select");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","20","20","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("| 시리즈그룹상품 생성");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00","20",null,null,"25","450","95",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("※ 시리즈상품 생성 시 기준상품의 선택된 R&D속성으로 나머지 상품들의 R&D속성도 동기화 됩니다. (주문단위는 제외)");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00_00","20",null,null,"25","450","75",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 기준상품의 경우에만 R&D속성마다 체크박스를 포함하여 개별 선택 가능");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","1280","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totcnt00_00_00","20",null,null,"25","450","55",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("※ 체크된 속성 값을 제외한 나머지 속성값이 동기화 됩니다.");
            obj.set_usedecorate("true");
            obj.set_color("#ff4242");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,763,this,function(p){});
            obj.set_stepindex("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.PRD_GRP_NM","value","ds_detail","PRD_GRP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.PRD_GRP_SPR_CD","value","ds_detail","PRD_GRP_SPR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.chkBssPrdYn","value","ds_detail","BSS_PRD_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_07.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_07.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_30.xfdl(R&D속성 생성 팝업)
        * 작 성			일 명: 나용철
        * 작 성	    	일 자: 2022/05/11
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sParamArg1;

        this.mallSprCd 		= "20";
        this.bssCnt 		= 0;
        this.prdClcd 		= null;

        var rtnData 		= {};
        var bssPrdYn 		= false;
        var prdSeq 			= 0;

        this.strKeyValue 	= "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	this.gfn_formOnLoad(this);
        	//사용자 초기화 함수
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
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}


        	var strDs   = "ds_prdGrpSprCdCombo";		        // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "PRD_GRP_SPR_CD";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);

        };

        this.fn_PostformInit = function()
        {
        	// 초기화
        	this.ds_detail.clearData();
        	var nRow = this.ds_detail.addRow();
        	this.ds_detail.setColumn(nRow,"CO_CD",			this.sParamArg1);    // 회사구분
        	this.ds_detail.setColumn(nRow,"MALL_SPR_CD",	this.mallSprCd);     // 몰구분코드 ssp상품 :10/ r&d상폼 :20

        	//this.ds_detail.setColumn(nRow,"PRD_GRP_SPR_CD",	"20");           // 그룹구분코드(20:시리즈-속성/10:시리즈-주문단위/30연관)
        	this.ds_detail.setColumn(nRow,"BSS_PRD_YN",		"Y" );               // 기준상품
        	this.divDetail.form.PRD_GRP_NM.setFocus();

        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.fn_alert(nErrorCode+"\n"+sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Init":
        					this.fn_PostformInit();
        				break;
        			case "RetTmp" :
        					this.fn_PostRetTmp();
        				break;
        			case "Save":
        					this.fn_PostSave();
        				break;
        			case "RetBssTmp" :
        					this.fn_PostRetBssTmp();
        				break;
        			default:
        				break;
        		}
        	}

        };


        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
           	rtnData = {};
            switch(strId)
            {
         		case "SSP_BO_PP_38":                                     // 상품·그룹ID 멀티입력팝업 후처리

        				if(!this.gfn_isNull(strVal))
        				{
        					resData = JSON.parse(strVal);
        					rtnData = resData;
        					this.divDetail.form.edtPrdNm.set_value(resData.PRD_NM);

        					if(this.divDetail.form.PRD_GRP_SPR_CD.value == "30")
        					{
        						this.prdClcd = null;
        					}else
        					{
        						this.prdClcd = resData.PRD_CLCD;
        					}
        				}else
        				{
        					// 닫기 버튼 처리
        				}
        		    break;
                default:
                    break;
            }
        };
        /**********************************************************************
                05. 기준상품 중복 체크 함수 선언
        ***********************************************************************/
        /*
         * 기준상품 중복 체크 전처리
         */
        this.fn_preRetBssTmp = function ()
        {
        	return true;
        };
        /*
         * 기준상품 중복 체크 메인
         */
        this.fn_RetBssTmp = function()
        {
        	 if(!this.fn_preRetBssTmp())
            {
                return false;
            }
        	var strSvc      = "RetBssTmp";
            var strUrl      = "/rd/srs-grp-prd-mng/select-series-bss-temp.do";
        	var strInDs     = "ds_search=ds_search";
        	var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /*
         * 기준상품 중복 체크 후처리
         */
        this.fn_PostRetBssTmp = function ()
        {
        	if(this.bssCnt > 0)
        	{
        		this.fn_alert("ERRR000169", "저장" ,"기준상품","information");  //&1이(가) 중복됩니다.
        	}
        	else
        	{
        		// 상품속성정보 조회
        		this.fn_RetTmp();
        	}
        };

        /**********************************************************************
                06. 상품속성정보 함수 선언
        ***********************************************************************/
        /*
         * 상품속성정보 전처리
         */
        this.fn_preRetTmp = function ()
        {
        	return true;
        };

        /*
         * 상품속성정보 조회 메인조회
         */
        this.fn_RetTmp = function()
        {
        	 if(!this.fn_preRetTmp())
            {
                return false;
            }

        	var strSvc      = "RetTmp";
            var strUrl      = "/rd/srs-grp-prd-mng/select-series-temp.do";
        	var strInDs     = "ds_search=ds_search";
        	var strOutDs    = "ds_temp=ds_output";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };
        /*
         * 상품속성정보 후처리
         */
        this.fn_PostRetTmp = function ()
        {
        	this.divDetail.form.grd_list.set_enableredraw(false);
        	this.divDetail.form.grd_list.set_enableevent(false);
        	this.ds_list.set_enableevent(false);

        	for(var i=0; i< this.ds_temp.rowcount; i++)
        	{
        		var nRow 	= this.ds_list.addRow();
        		this.ds_list.setColumn(nRow,"CO_CD",	this.ds_temp.getColumn(i,"CO_CD"));
        		this.ds_list.setColumn(nRow,"PRD_ID",	this.ds_temp.getColumn(i,"PRD_ID"));
        		this.ds_list.setColumn(nRow,"PRD_NM",	this.ds_temp.getColumn(i,"PRD_NM"));
        		this.ds_list.setColumn(nRow,"CTRY_NM",	this.ds_temp.getColumn(i,"CTRY_NM"));
        		this.ds_list.setColumn(nRow,"SELL_UNIT",this.ds_temp.getColumn(i,"SELL_UNIT"));
        		this.ds_list.setColumn(nRow,"MNFR_NM",	this.ds_temp.getColumn(i,"MNFR_NM"));
        		this.ds_list.setColumn(nRow,"PRD_GRP_SPR_CD",this.divDetail.form.PRD_GRP_SPR_CD.value);


        		var prdSeq = this.gfn_isNull(this.ds_list.getMax("PRD_SEQ"))?0:this.ds_list.getMax("PRD_SEQ");

        		if(this.divDetail.form.PRD_GRP_SPR_CD.value != "30")
        		{
        			if(this.divDetail.form.chkBssPrdYn.value == "Y")
        			{
        				this.ds_list.setColumn(nRow,"BSS_PRD_YN","Y");
        				this.ds_list.setColumn(nRow,"PRD_SEQ",0);
        				this.ds_list.setColumn(nRow,"PRD_NUM","기준상품");
        				bssPrdYn = true;
        			}else
        			{
        				this.ds_list.setColumn(nRow,"PRD_SEQ", prdSeq+1);
        				this.ds_list.setColumn(nRow,"PRD_NUM", prdSeq+1);
        			}
        			this.ds_list.setColumn(nRow,"SSP_PRD_ATTR_VAL",this.ds_temp.getColumn(i,"SSP_PRD_ATTR_VAL"));
        			this.ds_list.setColumn(nRow,"PRD_ATTR_CD",this.ds_temp.getColumn(i,"PRD_ATTR_CD"));

        		} else
        		{
        			this.ds_list.setColumn(nRow,"PRD_ATTR_VAL",this.ds_temp.getColumn(i,"PRD_ATTR_VAL"));
        			this.ds_list.setColumn(nRow,"PRD_SEQ",prdSeq+1);
        			this.ds_list.setColumn(nRow,"PRD_NUM",prdSeq+1);
        		}
        	}

        	// 상품추가 초기화
        	this.divDetail.form.chkBssPrdYn.set_value("N");
        	this.divDetail.form.edtPrdNm.set_value("");

        	// 기준상품 존재여부
        	if(bssPrdYn)
        	{
        		this.divDetail.form.chkBssPrdYn.set_enable(false);
        	}
        	rtnData = {};
        	this.ds_list.set_keystring("S:PRD_SEQ");

        	this.divDetail.form.grd_list.set_enableredraw(true);
        	this.divDetail.form.grd_list.set_enableevent(true);
        	this.ds_list.set_enableevent(true);

        };
        /**********************************************************************
                07. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */
        this.insert_btn_onclick = function(obj,e)
        {
        	this.ds_save.clearData();
        	this.ds_saveList.clearData();
        	this.ds_saveTemp.clearData();

        	// 기준상품 SSP속성  선택항목
        	var bssPrdAttrInfo = "";
        	for(var j=0; j<this.ds_list.rowcount; j++)
        	{
        		if(this.ds_list.getColumn(j,"BASS_CHK") == "Y")
        		{
        			bssPrdAttrInfo += this.ds_list.getColumn(j,"PRD_ATTR_CD") + ',';
        		}
        	}

        	for(var i=0; i<this.ds_list.rowcount; i++)
        	{
        		var nRow = this.ds_save.addRow();

        		this.ds_save.setColumn(nRow,"CO_CD",		this.sParamArg1);
        		this.ds_save.setColumn(nRow,"PRD_ID",		this.ds_list.getColumn(i,"PRD_ID"));
        		this.ds_save.setColumn(nRow,"BSS_PRD_YN",	this.ds_list.getColumn(i,"BSS_PRD_YN"));
        		this.ds_save.setColumn(nRow,"PRD_SEQ",		this.ds_list.getColumn(i,"PRD_SEQ"));

        		// 기준상품 체크한 SSP속성값 담기
        		if(this.ds_list.getColumn(i,"BSS_PRD_YN") == "Y")
        		{
        			this.ds_save.setColumn(nRow,"BSS_PRD_ATTR_INFO", bssPrdAttrInfo.replace(/,\s*$/, ""));
        		}
        	}

        	// 중복데이터 제거
        	this.fn_distincDsFilter(this.ds_save,"CO_CD,PRD_ID");
        	this.ds_saveList.copyData(this.ds_save,true);

        	// 순번 부여
        	for(var k=0; k<this.ds_saveList.rowcount; k++)
        	{
        		if(this.gfn_isNull(this.ds_saveList.getColumn(k,"PRD_SEQ")))
        		{
        			this.ds_saveList.setColumn(k,"PRD_SEQ",Number(k+1));
        		}
        	}

        	for(var i=0; i<this.ds_saveList.rowcount; i++)
        	{
        		var nRow = this.ds_saveTemp.addRow();
        		this.ds_saveTemp.setColumn(nRow,"CO_CD",			this.ds_saveList.getColumn(i,"CO_CD"));
        		this.ds_saveTemp.setColumn(nRow,"PRD_ID",			this.ds_saveList.getColumn(i,"PRD_ID"));
        		this.ds_saveTemp.setColumn(nRow,"BSS_PRD_YN",		this.ds_saveList.getColumn(i,"BSS_PRD_YN"));
        		this.ds_saveTemp.setColumn(nRow,"BSS_PRD_ATTR_INFO",this.ds_saveList.getColumn(i,"BSS_PRD_ATTR_INFO"));
        		this.ds_saveTemp.setColumn(nRow,"PRD_SEQ",			this.ds_saveList.getColumn(i,"PRD_SEQ"));
        	}

        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

        	 if(this.gfn_isNull(this.divDetail.form.PRD_GRP_SPR_CD.value))
        	 {
        		this.fn_alert("ERRS000144","저장","그룹구분","question");      // 그룹구분 (&1은(는) 필수입력사항입니다.)
        		this.divDetail.form.PRD_GRP_SPR_CD.setFocus();
        		return false;
        	 }

        	 if(this.gfn_isNull(this.divDetail.form.PRD_GRP_NM.value))
        	 {
        		this.fn_alert("ERRS000144","저장","그룹명 ","question");      // 그룹명 (&1은(는) 필수입력사항입니다.)
        		this.divDetail.form.PRD_GRP_NM.setFocus();
        		return false;
        	 }

        	if(this.divDetail.form.PRD_GRP_SPR_CD.value != "30")
        	{
        		if(!bssPrdYn)
        		{
        			this.fn_alert("ERRR000124","저장"," ","question");      //기준상품을 추가해야만 시리즈그룹을 만들 수 있습니다.
        			return false;
        		}

        		for(var i=0; i< this.ds_saveTemp.rowcount; i++)
        		{
        			if(this.divDetail.form.PRD_GRP_SPR_CD.value == "20")
        			{
        				if(this.ds_saveTemp.getColumn(i,"BSS_PRD_YN") == "Y" && this.gfn_isNull(this.ds_saveTemp.getColumn(i,"BSS_PRD_ATTR_INFO")))
        				{
        					this.fn_alert("ERRR000093","저장"," ","question");      //동기화가 필요한 기준상품의 R&D속성을 선택해 주세요.
        					return false
        				}
        			}
        		}
        	}

        	if(this.ds_saveTemp.rowcount < 2)
        	{
        		this.fn_alert("ERRR000080","저장"," ","question");      			//그룹 상품 리스트에 2개 이상의 상품을 구성해주세요
        		return false;
        	}

        	this.ds_detail.setColumn(0,"USE_YN","Y");

             var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?
             if(result == 0)
             {
                 return false;
             }
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

        	var strSvc      = "Save";
            var strUrl      = "/rd/srs-grp-prd-mng/save-product-series.do";
            var strInDs     = "ds_detail=ds_detail:U ";
        	    strInDs    += "ds_list=ds_saveTemp:U";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };


        /**
         * 기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            //this.fn_alert("ERRR000007.","저장"," ","question");      			//정상적으로 저장되었습니다
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = "SUCCESS";
        	objRtnArr[1] = this.strKeyValue;
        	this.close(objRtnArr.toString());

        };
        /**********************************************************************
                09. 삭제 함수 선언
        ***********************************************************************/
        //멀티 삭제
        this.fn_multiDelete = function(chkId, dataSet)
        {
        	if(this.gfn_isNull(chkId))
        	{
        		chkId = "CHK";
        	}

        	var chkCnt = dataSet.getCaseCount(chkId + "==1");

        	if( chkCnt == 0 )
        	{
        		this.fn_alert("ERRC000050","저장","행","question");      			//선택된 행이 없습니다.
        		return false;
        	}

        	var delArr = [];
        	for(var i=0; i<dataSet.rowcount; i++)
        	{
        		var checkbox = dataSet.getColumn(i, chkId);
        		var value 	 = dataSet.getColumn(i, "BSS_PRD_YN");
        		if(checkbox==1)
        		{
        			delArr.push(i);
        			if(value=="Y")
        			{
        				bssPrdYn=false;
        				this.divDetail.form.chkBssPrdYn.set_enable(true);
        				this.divDetail.form.chkBssPrdYn.set_value("Y");
        				this.prdClcd = null;
        			}
        		}
        	}
        	dataSet.deleteMultiRows(delArr);
        }

        this.divDetail_btn_del_onclick = function(obj,e)
        {
        	this.fn_multiDelete("CHK",this.ds_list);
        };

        /**********************************************************************
        	10. 닫기버튼
        ***********************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btn_clear_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };

        /**********************************************************************
        	11.Get, Set Method
        ***********************************************************************/
        // 중복값 제거
        this.fn_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= this.gfn_trim(sColID).split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (this.gfn_isNull(sFindRowExpr) == false) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (this.gfn_isNull(sFindRowExpr) == false)
        	{
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}

        	objDs.filter(sFilterExpr);
        }

         /**********************************************************************
        	08.기타 Control Event
        ***********************************************************************/
        /*
         * 추가버튼을 클릭시 처리
         */
        this.divDetail_btn_add_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_detail.getColumn(0,"PRD_GRP_SPR_CD")))
        	{
        		this.fn_alert("ERRS000144","저장","그룹구분","question");
        		return false;
        	}

        	if(this.gfn_isNull(rtnData.PRD_ID))
        	{
        		this.fn_alert("ERRR000091","저장"," ","question");                           //상품을 선택해 주세요

        	} else
        	{
        		for(var i=0; i<this.ds_list.rowcount; i++)
        		{
        			if(rtnData.PRD_ID_VIEW == this.ds_list.getColumn(i,"PRD_ID"))
        			{
        				this.fn_alert("ERRR000081","저장"," ","question");      			//그룹 상품 리스트에 중복된 상품이 있습니다. 확인해 주세요.
        				return false;
        			}
        		}

        		this.ds_search.setColumn(0,"CO_CD", 		 this.sParamArg1);
        		this.ds_search.setColumn(0,"PRD_ID", 		 rtnData.PRD_ID);
        		this.ds_search.setColumn(0,"PRD_GRP_SPR_CD", this.divDetail.form.PRD_GRP_SPR_CD.value);
        		this.ds_search.setColumn(0,"BSS_PRD_YN", 	 this.divDetail.form.chkBssPrdYn.value);

        		if(this.divDetail.form.chkBssPrdYn.value == "Y")
        		{
        			// 기준상품 중복 체크
        			this.fn_RetBssTmp();
        		}
        		else
        		{
        			// 상품속성정보 조회
        			this.fn_RetTmp();
        		}
        	}
        };
        /*
         * 그리드 셀을 체크박스를 처리한다.
         */
        this.divDetail_grd_list_oncellclick = function(obj,e)
        {
        	if(e.cell == this.divDetail.form.grd_list.getBindCellIndex("body","CHK"))
        	{
        		var checkbox 	= this.ds_list.getColumn(e.row, "CHK");
        		var prdid 		= this.ds_list.getColumn(e.row, "PRD_ID");

        		for(var j=0; j< this.ds_list.rowcount; j++)
        		{
        			if( checkbox == 1 && prdid == this.ds_list.getColumn(j,"PRD_ID"))
        			{
        				this.ds_list.setColumn(j,"CHK",1);

        			} else if( checkbox == 0 && prdid == this.ds_list.getColumn(j,"PRD_ID"))
        			{
        				this.ds_list.setColumn(j,"CHK",0);
        			}
        		}
        	}
        };
        /*
         * 그룹그분 옵션버튼 처리
         */
        this.divDetail_PRD_GRP_SPR_CD_onitemchanged = function(obj,e)
        {
        	// 데이터셋 초기화
        	this.ds_list.clearData();
        	this.ds_save.clearData();
        	this.ds_saveList.clearData();
        	//this.prdClcd 		= null;
        	//this.divDetail.form.edtPrdNm.set_value("");
        	if(obj.value == '30')
        	{ // 연관
        		bssPrdYn = false;
        		this.divDetail.form.grd_list.set_formatid("format00");
        		this.divDetail.form.grd_list.set_autofittype("col");
        		this.divDetail.form.chkBssPrdYn.set_enable(false);
        		this.divDetail.form.chkBssPrdYn.set_value("N");
        		this.prdClcd = null;
        	} else
        	{	// 시리즈
        		this.divDetail.form.grd_list.set_formatid("default");
        		this.divDetail.form.grd_list.set_autofittype("none");
        		this.divDetail.form.chkBssPrdYn.set_enable(true);
        		this.divDetail.form.chkBssPrdYn.set_value("Y");
        	}
        };
        /*
         * 그룹명을 등록시 그룹구분을 선택 필수처리
         */
        this.ds_detail_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PRD_GRP_NM")
        	{
        		if(this.gfn_isNull(this.ds_detail.getColumn(0,"PRD_GRP_SPR_CD")))
        		{
        			this.fn_alert("ERRR000176","저장","그룹구분","question");    // &1는(은) 필수 선택 입니다. 선택해 주세요.
        			return false;
        		}
        	}
        };

        /*
         * 그룹상품 추가 팝업 처리
         */
        this.divDetail_btn_prd_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.ds_detail.getColumn(0,"PRD_GRP_SPR_CD")))
        	{
        		this.fn_alert("ERRR000176","저장","그룹구분","question");
        		return false;
        	}

        	var objParam = { coCd   	:this.sParamArg1
        	               , prdClcd	:this.prdClcd
        				   , mallSprCd 	:this.mallSprCd
        				   };
        	this.gfn_openPopup("SSP_BO_PP_38"
        	                 , "PR_POP::SSP_BO_PP_38.xfdl"
        					 , objParam);
        };






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divDetail.form.Static29_00_00.addEventHandler("onclick",this.Div_top_info_Static29_00_00_onclick,this);
            this.divDetail.form.PRD_GRP_SPR_CD.addEventHandler("onitemchanged",this.divDetail_PRD_GRP_SPR_CD_onitemchanged,this);
            this.divDetail.form.btn_prd.addEventHandler("onclick",this.divDetail_btn_prd_onclick,this);
            this.divDetail.form.grd_list.addEventHandler("oncellclick",this.divDetail_grd_list_oncellclick,this);
            this.divDetail.form.btn_add.addEventHandler("onclick",this.divDetail_btn_add_onclick,this);
            this.divDetail.form.btn_del.addEventHandler("onclick",this.divDetail_btn_del_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_insert.addEventHandler("onclick",this.insert_btn_onclick,this);
            this.sta_totcnt00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.sta_totcnt00_00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.sta_totcnt00_00_00.addEventHandler("onclick",this.Div_top_info00_sta_totcnt00_onclick,this);
            this.ds_detail.addEventHandler("cancolumnchange",this.ds_detail_cancolumnchange,this);
        };
        this.loadIncludeScript("SSP_BO_RD_07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
