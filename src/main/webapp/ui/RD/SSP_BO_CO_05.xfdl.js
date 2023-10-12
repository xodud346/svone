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
            this.set_titletext("싱글다중처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1336,846);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"USE_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUserYn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_ID\"/><Col id=\"CLASS_NM\"/><Col id=\"START_NUM\">1</Col><Col id=\"ROW_COUNT\">20</Col><Col id=\"SORT_COLUMN\"/><Col id=\"SORT_TYPE\"/><Col id=\"LANG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totcnt","25","129","370","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(총 0건 1/1)");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","162",null,null,"20","90",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("ds_master");
            obj.set_nodatatext("조회된 결과가 없습니다.");
            obj.getSetter("uSortFlag").set("false");
            obj.getSetter("uServerSortFlag").set("true");
            obj.getSetter("uSortCallback").set("fn_sortCallback");
            obj.getSetter("uCellSizeType").set("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"40\"/><Col size=\"40\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/><Col size=\"100\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" displaytype=\"normal\" text=\"No.\"/><Cell col=\"2\" disptype=\"normal\" text=\"회사아이디\"/><Cell col=\"3\" disptype=\"normal\" text=\"회사명\"/><Cell col=\"4\" disptype=\"normal\" text=\"설명\"/><Cell col=\"5\" disptype=\"normal\" text=\"자동증가\"/><Cell col=\"6\" disptype=\"normal\" text=\"사용여부\"/><Cell col=\"7\" disptype=\"normal\" text=\"등록자id\"/><Cell col=\"8\" disptype=\"normal\" text=\"등록일자\"/><Cell col=\"9\" disptype=\"normal\" text=\"수정자id\"/><Cell col=\"10\" disptype=\"normal\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:CLASS_ID\" editmaxlength=\"6\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:CLASS_NM\" editmaxlength=\"50\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:REMK\" editmaxlength=\"400\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" text=\"bind:SN\" editmaxlength=\"22\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:USE_CHK\" editmaxlength=\"1\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:REG_ID\" editmaxlength=\"35\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:REG_DT\" editmaxlength=\"7\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:MOD_ID\" editmaxlength=\"35\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:MOD_DT\" editmaxlength=\"7\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","25",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","129","0",null,"32","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_cm_box02L_tdt");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","20","0","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("클래스코드 ");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","282","0","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("클 래 스  명 ");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","694","0","130","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사 용 여 부 ");
            obj.set_cssclass("sta_cm_box01L_tdt");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassId","155","5","122","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassNm","417","5","267","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("normal");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserYn","829","5","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUserYn");
            obj.set_codecolumn("COM_DTL_CD");
            obj.set_datacolumn("COM_DTL_CD_NM");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"69","60","24","21",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_require");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"69","60","24","btn_search:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"69","82","24","btn_del:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"69","82","24","btn_add:4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","0","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","58","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","0","0","20","100.24%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","0","93","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","1316","0","20","100.24%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_page","119","126","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_displayrowcount("5");
            obj.set_innerdataset("ds_page");
            obj.set_codecolumn("COUNT");
            obj.set_datacolumn("COUNT");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","154","100.00%","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","0","733","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("30");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","0","798","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("50");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_paging","20","grd_list:30","grd_list:86.50%","38",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("COMM::cmmPaging.xfdl");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1336,846,this,function(p){});
            obj.set_description("싱글다중처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtClassId","value","ds_search","CLASS_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtClassNm","value","ds_search","CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUserYn","value","ds_input","USE_CHK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","COMM::cmmPaging.xfdl");
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_CO_05.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_CO_05.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_LA_XX.xfdl(업체공통클래스(샘풀) 관리(조회))
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2022/04/20
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.executeIncludeScript("RD::rdMain.xjs"); /*include "RD::rdMain.xjs"*/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.fv_oApp                = nexacro.getApplication();	//application object
        this.fv_oApp.gv_pageViewCnt = 3;
        this.div_paging.uPage       = 1;
        this.div_paging.uPageNum    = 0;
        this.div_paging.uPageRowCnt = 10;
        this.div_paging.uPageCnt    = 0;
        this.div_paging.uTotCount   = 0;
        this.totalCount             = 0;

        this.lvchkColidDs           = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs         = "설명";
        this.strKeyValue            = "";
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
            var strLgcd  = "INQ_PERD_SPR_CD|DISP_STATS_CD";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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
            //this.ds_search.setColumn(0,"USE_CHK",null);

            /*
            var strDs     = "dsThrAfflts01";
            var strLgcd   = "XBT_THR_AFFLTS";   //카드사 기관코드
            var strComb   = "T";
            var svcId     = "singleInit";
            var callback  = "fn_callBack";

            // fn_CmmnSingleComboLoad(승인/정산);
            this.fn_CmmnSingleComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , svcId
                                      , callback);
            */
        };

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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
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
        	var oPaging = this.div_paging;
        		oPaging.uPageNum = 0;
        	this.ds_search.setColumn(0,"START_NUM",oPaging.uPageNum);
        	this.ds_search.setColumn(0,"ROW_COUNT",this.fv_oApp.gv_pageViewCnt);

            this.fn_Ret();
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
            var strUrl      = "/rd/rdServiceSml/selectRdServiceSml.do";
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
            this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
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
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.ds_master.addRow();
            this.ds_master.setColumn(nRow,"CHK",     "0");           //업체코드
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
            this.fn_Del();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.ds_master.rowcount < 1 || this.ds_master.findRow("CHK",1) == -1)
            {
                this.fn_alert("삭제할 데이타가 없습니다.!","삭제정보","","warning"); // 삭제할 데이타가 없습니다.!
                return false;
            }
            var result = this.fn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

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
            if(this.ds_master.rowcount > 0)
            {
                for(var i=0;i<this.ds_master.rowcount; i++)
                {
                    if(this.ds_master.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.ds_master.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_dsIsUpdated(this.ds_master))
            {
                this.fn_alert("MSG00008","저장정보","","question"); // 변경된 이력이 없습니다.!
                return false;
            }

            /*
            var sFindStr  		= "";
            var stdValCd  		= "";
            var dupChkRow 		= 0;
            var argCardOrgCd 	    = new Array();

            for(var iRow=0; iRow < this.ds_master.rowcount; iRow ++)
            {
                var strRowType = this.ds_master.getRowType(iRow);
                if(strRowType == 1)
                {
                    continue;
                }
                //*************** 화면 중복 체크(서버에서 중복체크도 함)  ***********************
                stdValCd    	= this.ds_master.getColumn(iRow,"CARD_ORG_CD");
                // 중복체크 할 Key Value 세팅
                sFindStr 		= "cardOrgCd == '"stdValCd"'";
                dupChkRow     = this.gfn_dupCheck(this.dsMaster, sFindStr );
                if ( dupChkRow > 1 )
                {
                    this.dsMaster.set_rowposition(iRow);
                    this.fn_alert("MSG00056","저장정보","카드사정보","error"); // $1 중복 되었습니다.!
                    this.edtCardOrgCd.setFocus();
                    return false;
                }
                //*************** 한글 영문 숫자 바이트체크  ***********************
                var sOrgNm = this.ds_master.getColumn(iRow, "ORG_NM");
                if(this.fn_getLengthB(sOrgNm,3) > 20)
                {
                    this.ds_master.set_rowposition(iRow);
                    this.fn_alert("MSG00057","저장정보","카드사명,20","error");    //카드사명은(는) 20byte이하 여야합니다.
                    this.edtOrgNm.setFocus();
                    return false;
                }
            }
            */
            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.fn_cmmnChkEssentialItem(this.ds_master, this.lvchkColidDs, this.lvchkColNameDs, this.grd_list, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.fn_alert(result[0],"저장정보","","question");
                this.ds_master.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.fn_confirm( "MSG00009", "저장","", "question" ); // 저장 하시겠습니까?
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
            var strUrl      = "/rd/rdServiceSml/saveRdServiceSml.do";
            var strInDs     = "ds_search=ds_search:a ";
                strInDs    += "ds_master=ds_master:u";
            var strOutDs    = "ds_master=ds_master";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	this.div_paging.form.cfn_createPage(this.div_paging,this.totalCount,this.fv_oApp.gv_pageViewCnt,"fn_pageCallback");
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.ds_master);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.divSearch.form.edtClassId.addEventHandler("onkeyup",this.divSearch_edtClassId_onkeyup,this);
            this.divSearch.form.edtClassNm.addEventHandler("onkeyup",this.divSearch_edtClassNm_onkeyup,this);
            this.divSearch.form.cboUserYn.addEventHandler("onitemclick",this.divSearch_cboUserYn_onitemclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.ds_master.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SSP_BO_CO_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
