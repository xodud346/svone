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
            this.set_titletext("개발자테스트화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IF_CO_CD\" type=\"STRING\" size=\"4\"/><Column id=\"IF_MSG_ID\" type=\"STRING\" size=\"50\"/><Column id=\"IF_MSG_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"18\"/><Column id=\"BZPLC_ID\" type=\"STRING\" size=\"10\"/><Column id=\"OPR_UNIT_ID\" type=\"STRING\" size=\"10\"/><Column id=\"MTL_GRAVITY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PHASE_SPR_CD\" type=\"STRING\" size=\"3\"/><Column id=\"PRD_CHRPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"120\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"1\"/><Column id=\"CTRY_SPR_CD\" type=\"STRING\" size=\"3\"/><Column id=\"MNFR_NO\" type=\"STRING\" size=\"10\"/><Column id=\"MRO_PRD_CLCD\" type=\"STRING\" size=\"18\"/><Column id=\"HUB_HNL_PSB_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BASIS_UNIT_CD\" type=\"STRING\" size=\"3\"/><Column id=\"BASIS_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SELL_UNIT_CD\" type=\"STRING\" size=\"3\"/><Column id=\"SELL_UNIT_QTY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHM_MTL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"TX_CLCD\" type=\"STRING\" size=\"1\"/><Column id=\"REPR_SPEC\" type=\"STRING\" size=\"600\"/><Column id=\"MRO_CRT_SPR_CD\" type=\"STRING\" size=\"1\"/><Column id=\"INDV_PKG_SPR_CD\" type=\"STRING\" size=\"2\"/><Column id=\"SND_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PROC_SUCC_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PROC_ERRMSG\" type=\"STRING\" size=\"1000\"/><Column id=\"PI_IFID\" type=\"STRING\" size=\"7\"/><Column id=\"PI_STAT\" type=\"STRING\" size=\"1\"/><Column id=\"PI_MSG\" type=\"STRING\" size=\"100\"/><Column id=\"PI_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"PI_TIME\" type=\"STRING\" size=\"6\"/><Column id=\"PI_TID\" type=\"STRING\" size=\"40\"/><Column id=\"REGPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"REG_DTM\" type=\"DATETIME\" size=\"7\"/><Column id=\"UPDPSN_ID\" type=\"STRING\" size=\"10\"/><Column id=\"UPD_DTM\" type=\"DATETIME\" size=\"7\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NEW_PRD_REQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_NO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RND_REQ_PRD_ID_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_PRD_NM_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLCD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_CLSF_CHRPSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHM_MTL_PRD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUB_ONLY_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DISP_PRD_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_SPR\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PRD_REQ_STATS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROPOSAL_STATUS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_STR\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DT_FNL_PROC_DT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_SBJ_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PURG_CHRPSN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NEW_PRD_REQ_NO\"/><Col id=\"RND_REQ_PRD_ID\"/><Col id=\"REQ_PRD_NM\"/><Col id=\"PRD_CLCD\"/><Col id=\"PRD_CLSF_NM\"/><Col id=\"CHM_MTL_PRD_YN\"/><Col id=\"PUB_ONLY_SPR_CD\"/><Col id=\"PRD_CLSF_CHRPSN_ID\"/><Col id=\"PRD_CLSF_CHRPSN_NM\"/><Col id=\"DISP_PRD_SPR_CD\"/><Col id=\"NEW_PRD_REQ_STATS_CD\"/><Col id=\"PROPOSAL_STATUS_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_STR\"/><Col id=\"REQ_DT_FNL_PROC_DT_END\"/><Col id=\"REQ_SBJ_CD\"/><Col id=\"REQ_DT_FNL_PROC_DT_SPR\">REQ_DT</Col><Col id=\"REQ_DT_FNL_PROC_DT_UNIT\"/><Col id=\"START_NUM\"/><Col id=\"ROW_COUNT\"/><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"INQ_COND_DTLS\"/><Col id=\"CO_CD\"/><Col id=\"TOTAL_COUNT\"/><Col id=\"NEW_PRD_REQ_NO_CNT\"/><Col id=\"RND_REQ_PRD_ID_CNT\"/><Col id=\"REQ_PRD_NM_CNT\"/><Col id=\"PRD_CLCD_CNT\"/><Col id=\"DATE_FR_DT\"/><Col id=\"DATE_TO_DT\"/><Col id=\"PURG_CHRPSN_ID\"/><Col id=\"PURG_CHRPSN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SES_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_COND_DTLS\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ITM\" type=\"STRING\" size=\"256\"/><Column id=\"COND_DATA_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prd", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"18\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"120\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prdSave", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"18\"/><Column id=\"PRD_NM\" type=\"STRING\" size=\"120\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","106",null,null,"20","486",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_prd");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상품번호\"/><Cell col=\"2\" text=\"상품명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRD_ID\"/><Cell col=\"2\" text=\"bind:PRD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"69","82","24","371",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("단건호출");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"69","82","24","285",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("배치호출");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"69","80","24","200",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일괄등록");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"69","80","24","21",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("PI 조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","756","83.91%","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list00","20","396",null,null,"20","116",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_master");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"40\"/><Col size=\"40\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" text=\"No.\"/><Cell col=\"2\" disptype=\"normal\" text=\"if회사코드\"/><Cell col=\"3\" disptype=\"normal\" text=\"if메시지id\"/><Cell col=\"4\" disptype=\"normal\" text=\"if메시지순번\"/><Cell col=\"5\" disptype=\"normal\" text=\"상품id\"/><Cell col=\"6\" disptype=\"normal\" text=\"사업장id\"/><Cell col=\"7\" disptype=\"normal\" text=\"운영단위id\"/><Cell col=\"8\" disptype=\"normal\" text=\"물질비중\"/><Cell col=\"9\" disptype=\"normal\" text=\"성상구분코드\"/><Cell col=\"10\" disptype=\"normal\" text=\"상품담당자id\"/><Cell col=\"11\" disptype=\"normal\" text=\"구매담당자id\"/><Cell col=\"12\" disptype=\"normal\" text=\"상품명\"/><Cell col=\"13\" disptype=\"normal\" text=\"공용전용구분코드\"/><Cell col=\"14\" disptype=\"normal\" text=\"국가구분코드\"/><Cell col=\"15\" disptype=\"normal\" text=\"제조사번호\"/><Cell col=\"16\" disptype=\"normal\" text=\"mro상품분류코드\"/><Cell col=\"17\" disptype=\"normal\" text=\"허브취급가능여부\"/><Cell col=\"18\" disptype=\"normal\" text=\"기본단위코드\"/><Cell col=\"19\" disptype=\"normal\" text=\"기본단위수량\"/><Cell col=\"20\" disptype=\"normal\" text=\"판매단위코드\"/><Cell col=\"21\" disptype=\"normal\" text=\"판매단위수량\"/><Cell col=\"22\" disptype=\"normal\" text=\"화학물질여부\"/><Cell col=\"23\" disptype=\"normal\" text=\"세금분류코드\"/><Cell col=\"24\" disptype=\"normal\" text=\"대표규격\"/><Cell col=\"25\" disptype=\"normal\" text=\"mro생성구분코드\"/><Cell col=\"26\" disptype=\"normal\" text=\"개별일괄구분코드\"/><Cell col=\"27\" disptype=\"normal\" text=\"송신여부\"/><Cell col=\"28\" disptype=\"normal\" text=\"처리성공여부\"/><Cell col=\"29\" disptype=\"normal\" text=\"처리에러메시지\"/><Cell col=\"30\" disptype=\"normal\" text=\"pi인터페이스id\"/><Cell col=\"31\" disptype=\"normal\" text=\"pi수신상태\"/><Cell col=\"32\" disptype=\"normal\" text=\"pi메세지\"/><Cell col=\"33\" disptype=\"normal\" text=\"pi수신날짜\"/><Cell col=\"34\" disptype=\"normal\" text=\"pi수신시간\"/><Cell col=\"35\" disptype=\"normal\" text=\"pi트랜젝션id\"/><Cell col=\"36\" disptype=\"normal\" text=\"등록자id\"/><Cell col=\"37\" disptype=\"normal\" text=\"등록일시\"/><Cell col=\"38\" disptype=\"normal\" text=\"수정자id\"/><Cell col=\"39\" disptype=\"normal\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:IF_CO_CD\" editmaxlength=\"4\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:IF_MSG_ID\" editmaxlength=\"50\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:IF_MSG_SEQ\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PRD_ID\" editmaxlength=\"18\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BZPLC_ID\" editmaxlength=\"10\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:OPR_UNIT_ID\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:MTL_GRAVITY\" editmaxlength=\"22\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PHASE_SPR_CD\" editmaxlength=\"3\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PRD_CHRPSN_ID\" editmaxlength=\"10\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PURG_CHRPSN_ID\" editmaxlength=\"10\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PRD_NM\" editmaxlength=\"120\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PUB_ONLY_SPR_CD\" editmaxlength=\"1\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:CTRY_SPR_CD\" editmaxlength=\"3\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:MNFR_NO\" editmaxlength=\"10\"/><Cell col=\"16\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:MRO_PRD_CLCD\" editmaxlength=\"18\"/><Cell col=\"17\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:HUB_HNL_PSB_YN\" editmaxlength=\"1\"/><Cell col=\"18\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BASIS_UNIT_CD\" editmaxlength=\"3\"/><Cell col=\"19\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:BASIS_UNIT_QTY\" editmaxlength=\"22\"/><Cell col=\"20\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:SELL_UNIT_CD\" editmaxlength=\"3\"/><Cell col=\"21\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:SELL_UNIT_QTY\" editmaxlength=\"22\"/><Cell col=\"22\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:CHM_MTL_YN\" editmaxlength=\"1\"/><Cell col=\"23\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:TX_CLCD\" editmaxlength=\"1\"/><Cell col=\"24\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:REPR_SPEC\" editmaxlength=\"600\"/><Cell col=\"25\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:MRO_CRT_SPR_CD\" editmaxlength=\"1\"/><Cell col=\"26\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:INDV_PKG_SPR_CD\" editmaxlength=\"2\"/><Cell col=\"27\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:SND_YN\" editmaxlength=\"1\"/><Cell col=\"28\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PROC_SUCC_YN\" editmaxlength=\"1\"/><Cell col=\"29\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PROC_ERRMSG\" editmaxlength=\"1000\"/><Cell col=\"30\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_IFID\" editmaxlength=\"7\"/><Cell col=\"31\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_STAT\" editmaxlength=\"1\"/><Cell col=\"32\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_MSG\" editmaxlength=\"100\"/><Cell col=\"33\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_DATE\" editmaxlength=\"8\"/><Cell col=\"34\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_TIME\" editmaxlength=\"6\"/><Cell col=\"35\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:PI_TID\" editmaxlength=\"40\"/><Cell col=\"36\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:REGPSN_ID\" editmaxlength=\"10\"/><Cell col=\"37\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:REG_DTM\" editmaxlength=\"7\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"38\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:UPDPSN_ID\" editmaxlength=\"10\"/><Cell col=\"39\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:UPD_DTM\" editmaxlength=\"7\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"69","90","24","106",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("상품조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("개발자테스트화면");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
            this._addPreloadList("data","","ds_prd");
            this._addPreloadList("data","","ds_prdSave");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_12.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_12.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_XX.xfdl(상품전송정보 관리(조회))
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2022/05/09
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/;
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.fv_oApp.gv_pageViewCnt = 10;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;
        this.formId                 = this.fn_getFormId(this);           // 등록한 폼의 아디을 기지고 오는 함수

        this.lv_coCd                = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");
        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
        this.lvGetDate              = "";
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
        	// 로컬 로그인 사용 않할시 false
        	this.fn_setLocalUserCreate(true);
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
            var strDs    = "dsUserYn|dsGUserYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "000002|000002";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // fn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.fn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostformInit = function()
        {
            this.lvGetDate = this.fn_getSvrDate();             // 각각 실시간으로 시스템의 현재일자를 가지고 오는 함수.

        };

        /**
        * 화면 최초 초기화 작업 함수
        */
        this.fn_setResetBtnCall = function()
        {

           this.ds_search.clearData();
            var nRow = this.ds_search.addRow();
            this.ds_search.setColumn(nRow,"PUB_ONLY_SPR_CD",         null); // 공용전용구분 초기화

            // 일자 날짜 초기화 Setting
            this.fn_setInqPerdSprCd(this.div_search.form.cal_reqDtFnlProcDtStr
                                   ,this.div_search.form.cal_reqDtFnlProcDtEnd
                                   ,this.div_search.form.cmb_dtUnit);

            // Multi검색조회 데이터 존재시 초기화
            this.fn_deleteMultiData("fn_callBack");
        }

        this.fn_PostSingleInt = function()
        {
            //trace(this.ds_mstCardOrg.saveXML());
            //this.ds_search.setColumn(0,"AFFLTS_CD1",null);
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "insertMultiData" :
                            this.fn_Ret(true);
                        break;
                    case "deleteMultiData" :
                            this.ds_select.deleteAll();
                        break;
                    case "Save":
                            alert("성공적으로 호출하였습니다.");
                        break;
                    case "New":
                            alert("성공적으로 호출하였습니다.");
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "Prd":

        				break;
        			case "OnlySave":
        					alert("성공적으로 호출하였습니다.");
        				break;
                    default:
                        break;
                }
            }
        };

        /**
         * 기능 : 팝업 종료후 dsDummy Copy
         */
        this.fn_dsChildCopydsDummy = function(ds)
        {
            this.dsDummy.clearData();
            this.dsDummy.copyData(ds);
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
            switch(strId)
            {
                case "SSP_BO_CO_03" :

                    //중분류팝업조회
                    if(!this.gfn_isNull(strVal))
                    {
                        //일반
                        var sRtn = strVal.split(",");

                        if(sRtn[0] == "CLOSE")
                        {
                            //trace(sRtn[0]);

                        }else
                        {
                            //this.div_search.form.edtCodeId.set_value(this.dsDummy.getColumn(0,"PROG_ID"));
                            //this.div_search.form.edtCodeNm.set_value(this.dsDummy.getColumn(0,"PROG_NM"));

                            //Dataset
                            //this.dsDummy.loadXML(sRtn[2]);
                            trace(this.dsDummy.saveXML());
                        }
                    }
                    break;
                default:
                    break;
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 버튼 클릭시
         */
        this.btn_search_onclick = function(obj,e)
        {

            this.fn_Ret(true);

        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/rd/com-test/select-com-test.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            //this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
        };

        /**
        * 초기화 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.div_search_btn_init_onclick = function(obj,e)
        {
            // 초기화 호출
            this.fn_setResetBtnCall();
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 버튼 클릭시
         */
        this.btn_add_onclick = function(obj,e)
        {
            this.fn_New();
        };

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 클릭시
         */

        this.btn_del_onclick = function(obj,e)
        {
            this.fn_OnlySave();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.ds_master.rowcount < 1 || this.ds_master.findRow("CHK",1) == -1)
            {
                this.fn_alert("MSG00006","삭제정보","","warning"); // 삭제할 데이타가 없습니다.!
                return false;
            }
            var result = this.fn_confirm( "MSG00007", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

            if(result == 0)
            {
                return false;
            }

            // 멀티 삭제 처리
            for(var i = this.ds_master.rowcount-1; 0 <= i; i--)
            {
                if(this.ds_master.getColumn(i,"CHK") == 1)
                {
                    this.ds_master.deleteRow(i);
                }
            }

            // 단건 한행 삭제 처리
            // this.ds_master.deleteRow(this.ds_master.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

        };

        this.fn_PostDel = function()
        {
            //this.gfn_getRowCount(this.staRowCnt,this.ds_master);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 버튼 클릭시
         */

        this.btn_Save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {

             var result = this.fn_confirm( "저장하시겠습니까?", "저장","", "question" ); // 저장 하시겠습니까?
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
        	this.ds_prdSave.clearData();

        	for(var i = 0; i < this.ds_prd.rowcount; i++){
        		if(this.ds_prd.getColumn(i,"CHK") != 0){
        			var nRow = this.ds_prdSave.addRow();
        			this.ds_prdSave.setColumn(nRow,"CHK",this.ds_prd.getColumn(i,"CHK"));
        			this.ds_prdSave.setColumn(nRow,"PRD_ID",this.ds_prd.getColumn(i,"PRD_ID"));
        			this.ds_prdSave.setColumn(nRow,"PRD_NM",this.ds_prd.getColumn(i,"PRD_NM"));
        		}
        	}

            var strSvc      = "Save";
            var strUrl      = "/rd/com-test/save-com-test.do";
            var strInDs     = "ds_prdSave=ds_prdSave";
            var strOutDs    = "ds_master=ds_master";
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
         * 기능 : 저장 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
        	this.ds_prdSave.clearData();

        	for(var i = 0; i < this.ds_prd.rowcount; i++){
        		if(this.ds_prd.getColumn(i,"CHK") != 0){
        			var nRow = this.ds_prdSave.addRow();
        			this.ds_prdSave.setColumn(nRow,"CHK",this.ds_prd.getColumn(i,"CHK"));
        			this.ds_prdSave.setColumn(nRow,"PRD_ID",this.ds_prd.getColumn(i,"PRD_ID"));
        			this.ds_prdSave.setColumn(nRow,"PRD_NM",this.ds_prd.getColumn(i,"PRD_NM"));
        		}
        	}

            var strSvc      = "New";
            var strUrl      = "/rd/com-test/save-com-test-batch.do";
            var strInDs     = "ds_prdSave=ds_prdSave";
            var strOutDs    = "ds_master=ds_master";
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
         * 기능 : 저장 실행
         */
        this.fn_OnlySave = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
        	this.ds_prdSave.clearData();

        	for(var i = 0; i < this.ds_prd.rowcount; i++){
        		if(this.ds_prd.getColumn(i,"CHK") != 0){
        			var nRow = this.ds_prdSave.addRow();
        			this.ds_prdSave.setColumn(nRow,"CHK",this.ds_prd.getColumn(i,"CHK"));
        			this.ds_prdSave.setColumn(nRow,"PRD_ID",this.ds_prd.getColumn(i,"PRD_ID"));
        			this.ds_prdSave.setColumn(nRow,"PRD_NM",this.ds_prd.getColumn(i,"PRD_NM"));
        		}
        	}

            var strSvc      = "OnlySave";
            var strUrl      = "/rd/com-test/save-com-test-only.do";
            var strInDs     = "ds_prdSave=ds_prdSave";
            var strOutDs    = "ds_master=ds_master";
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
            var nRow = this.ds_master.findRow("CLASS_ID",this.strKeyValue);
            this.ds_master.set_rowposition(nRow);
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**
        * 엑셀다운로드 버튼 클릭시 onclick 이벤트 발생 처리
        */
        this.btn_excelDown_onclick = function(obj,e)
        {
            this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.ds_master.rowcount < 1)
            {
                this.fn_alert("MSG00004", "EXCEL 정보" ,"","information"); // 출력할 엑셀데이타가 없습니다.!
                return false;
            }

            var result = this.fn_confirm( "MSG00005", "EXCEL 출력","","question" ); // Excel를 출력하시겠습니까?

            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grd_list, "시트이름","파일이름");
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 그리드 상단 Sort 처리
         */
        this.fn_sortCallback = function(sGridId)
        {
            var oGrid = null;

            if(sGridId == "grd_list")
            {
                var oSortInfo = this.grd_list.uaSortInfo;
                this.ds_search.setColumn(0,"SORT_COLUMN",oSortInfo.bindCol);
                this.ds_search.setColumn(0,"SORT_TYPE",  oSortInfo.status);
                this.fn_Ret();
            }
        };

        /**
         * 그리드 하단 페이지 처리
         */
        this.fn_pageCallback = function(sFlag)
        {
            var oPaging = this.div_paging;

            if(sFlag)
            {
                this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
                this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);
                this.fn_Ret();
            }

            var sTotText = "(<b v='true'>총 "+ oPaging.uTotCount+"건 </b><fc v='red'>"+ oPaging.uPage +"</fc> / "+ oPaging.uPageCnt +")";
            this.sta_totcnt.set_text(sTotText);
        };
        this.btn_search_onclick00 = function(obj,e)
        {
        	if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Prd";
            var strUrl      = "/rd/com-test/select-com-test-prd.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_prd=ds_prd";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.btn_search_onclick00,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_prd.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_prdSave.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_CO_12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
