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
            this.set_titletext("R&D KC인증정보 등록/변경");
            this.set_background("black");
            if (Form == this.constructor)
            {
                this._setFormPosition(1244,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_master", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_ITM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"KC_CERT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_CTS\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CPRTCP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_CHG_DGRCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CO_CD\"/><Col id=\"CONT_NO\"/><Col id=\"PRD_ID\"/><Col id=\"CPRTCP_ID\"/><Col id=\"CONT_CHG_DGRCNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kcCertCdCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kcCertInfoCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">선택</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">대상</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">면제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uploadResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_downLoad", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_REG_SEQ\" type=\"string\" size=\"32\"/><Column id=\"ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ORI_ATFL_NM\" type=\"string\" size=\"32\"/><Column id=\"ATFL_LEN\" type=\"bigdecimal\" size=\"8\"/><Column id=\"ATFL_STOR_PATH\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_1\" type=\"string\" size=\"32\"/><Column id=\"ETC_FDS_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kcCertCdCombo_1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COM_DTL_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"COM_USR_DEFN_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COM_CLSF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SRT_SO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COM_DTL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"COM_USR_DEFN_NM_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("X");
            obj.set_visible("true");
            obj.set_background("black");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","22",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("white");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","543","292","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","615","292","67","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stcBackGround02_00","555","72","254","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_infoIptRef",null,"26","110","24","170",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("정보입력참고");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","49","1244","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","0","83","1244","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"26","67","24","23",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"26","67","24","btn_del:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("+ 추가");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","20","58",null,"215","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_master");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_nodatatext("KC인증정보 등록된 데이터가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"80\"/><Column size=\"500\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\"/><Cell col=\"1\" text=\"KC인증대상여부\"/><Cell col=\"2\" text=\"인증명\"/><Cell col=\"3\" text=\"인증번호\"/><Cell col=\"4\" colspan=\"2\" text=\"첨부파일\"/><Cell col=\"6\" text=\"메모\"/></Band><Band id=\"body\"><Cell textDecoration=\"underline\" color=\"#235da8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combocontrol\" comboautoselect=\"true\" combodataset=\"ds_kcCertInfoCombo\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"bind:KC_CERT_YN\" edittype=\"expr:dataset.getRowType(currow) != 2 ? &quot;none&quot; : &quot;combo&quot;\"/><Cell col=\"2\" text=\"bind:KC_CERT_CD\" displaytype=\"combocontrol\" combodataset=\"ds_kcCertCdCombo\" combocodecol=\"COM_DTL_CD\" combodatacol=\"COM_DTL_CD_NM\" edittype=\"expr:dataset.getRowType(currow) != 2 ? &quot;none&quot; : &quot;combo&quot;\" comboautoselect=\"true\"/><Cell col=\"3\" text=\"bind:KC_CERT_NO\" displaytype=\"expr:comp.parent.fn_setDisplaytype(currow,&quot;editcontrol&quot;)\" combodataset=\"dsReqDiv\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"expr:dataset.getRowType(currow) != 2 ? &quot;none&quot; : comp.parent.fn_setEdittype(currow,&quot;text&quot;)\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" editautoselect=\"true\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow) == 1 ? &quot;hide&quot; : comp.parent.fn_setExpandshow(currow,&quot;show&quot;)\" expandsize=\"25\"/><Cell col=\"4\" text=\"bind:ATFL_NM\" displaytype=\"editcontrol\" border=\"1px solid #d4d4d4,0px solid #d4d4d4,1px solid #d4d4d4,1px solid #d4d4d4\" textAlign=\"left\" color=\"royalblue\" textDecoration=\"underline\" editautoselect=\"true\" cursor=\"pointer\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:ATFL_NM == null || ATFL_NM == &quot;&quot; ? &quot;파일등록&quot; : &quot;삭제&quot;\" subsumtext=\"첨부파일\"/><Cell col=\"6\" text=\"bind:MEMO_CTS\" displaytype=\"editcontrol\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) != 2 ? &quot;none&quot; : &quot;text&quot;\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00","0","273","100.00%","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_color("#000000");
            obj.set_background("aqua");
            obj.set_visible("false");
            obj.set_text("20");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_02","20","20","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("KC인증정보 등록/변경");
            obj.set_cssclass("sta_WF_title04");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","20","3","155","16",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("KC인증정보 등록/변경");
            obj.set_cssclass("sta_WF_title02");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","562","30","290","19",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","856","30","98","19",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1244,330,this,function(p){});
            obj.set_description("R&D KC인증정보 등록/변경");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_master");
        };
        
        // User Script
        this.addIncludeScript("SSP_BO_RD_55.xfdl","RD::rdMain.xjs");
        this.registerScript("SSP_BO_RD_55.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SSP_BO_RD_55.xfdl(R&D KC인증정보 등록/변경)
        * 작 성         일 명: 오왕표
        * 작 성         일 자: 2022/05/25
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
        this.fv_oApp     = nexacro.getApplication();			 // application object
        this.lv_coCd     = this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"") == "" ? "1000" : this.gfn_nvl(this.fv_oApp.gds_userInfo.getColumn(0,"CO_CD"),"");

        this.sOptinoArg1 = "";
        this.sOptinoArg2 = "";
        this.sParamArg1  = "";
        this.sParamArg2  = "";
        this.sParamArg3  = "";
        this.sParamArg4  = "";
        this.sParamArg5  = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            // 폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnLoad(this);
            // 사용자 화면  초기화 함수
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

            var strDs    = "ds_kcCertCdCombo";              		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "KC_CERT_CD";                            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                     // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.ds_kcCertCdCombo_1.copyData(this.ds_kcCertCdCombo);
        	var nRow = this.ds_kcCertCdCombo.insertRow();
        	this.ds_kcCertCdCombo.setColumn(nRow,"COM_DTL_CD",   "");
        	this.ds_kcCertCdCombo.setColumn(nRow,"COM_DTL_CD_NM","선택");

        	if(this.sOptinoArg2 == "R")
        	{
        		this.fn_compontAllControl();
        	}

        	// 구매정보등록 팝업에서 호출시
        	if(this.sParamArg4 == "SSP_BO_RD_13" || this.sParamArg4 == "SSP_BO_RD_14")
        	{
        		if(this.opener.ds_kcCertInfoList.getRowCount() > 0)
        		{
        			this.ds_master.copyData(this.opener.ds_kcCertInfoList);
        		}
        	}
        	else
        	{
        		this.ds_search.setColumn(0,"CO_CD",          this.sParamArg1);
        		this.ds_search.setColumn(0,"CONT_NO",        this.sParamArg2);
        		this.ds_search.setColumn(0,"CPRTCP_ID",      this.sParamArg3);
        		this.ds_search.setColumn(0,"PRD_ID",         this.sParamArg4);
        		this.ds_search.setColumn(0,"CONT_CHG_DGRCNT",this.sParamArg5);

        		this.fn_Ret();
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            if(nErrorCode != 0)
            {
                this.fn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }
        	else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "CasNoCnfYn":
        					this.fn_PostCasNoCnfYn();
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
            var strUrl      = "/rd/kc-cert-info-inq/select-kc-cert-info-inq.do";
            var strInDs     = "ds_search=ds_search";
            var strOutDs    = "ds_master=ds_master"
        	                + " ds_saveFileList=ds_saveFileList";
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
            this.ds_master.setColumn(nRow,"CHK","0");          			              // 체크박스 초기화
        	// 구매정보등록 팝업에서 호출시
        	if(this.sParamArg4 == "SSP_BO_RD_13" || this.sParamArg4 == "SSP_BO_RD_14")
        	{
        		this.ds_master.setColumn(nRow,"CO_CD",    this.sParamArg1);           // 회사코드 Set
        		this.ds_master.setColumn(nRow,"PRD_ID",   this.sParamArg2);           // 상품ID Set
        		this.ds_master.setColumn(nRow,"CPRTCP_ID",this.sParamArg3);           // 협력사 Set
        	}
        	else
        	{
        		this.ds_master.setColumn(nRow,"CO_CD",          this.sParamArg1);      // 회사코드 Set
        		this.ds_master.setColumn(nRow,"CONT_NO",        this.sParamArg2);      // 계약번호 Set
        		this.ds_master.setColumn(nRow,"CPRTCP_ID",      this.sParamArg3);      // 협력사 Set
        		this.ds_master.setColumn(nRow,"PRD_ID",         this.sParamArg4);      // 상품ID Set
        		this.ds_master.setColumn(nRow,"CONT_CHG_DGRCNT",this.sParamArg5);      // 계약변경차수 Set
        	}
        	this.ds_master.setColumn(nRow,"KC_CERT_YN","");                        // KC인증대상여부 Set
        	this.ds_master.setColumn(nRow,"KC_CERT_CD","");                        // 인증명 Set
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
            // 멀티삭제용도
            if(this.ds_master.rowcount < 1 || this.ds_master.findRow("CHK",1) == -1)
            {
                this.fn_alert("ERRR000188","삭제정보","","warning"); // 선택된 값이 없습니다.
                return false;
            }

            var result = this.fn_confirm("ERRR000179", "삭제정보","","question" ); // 현재선택행을 삭제하시겠습니까?

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
        			// 첨부파일 삭제
        			var delRow = this.ds_saveFileList.findRow("DOC_REG_ID",this.ds_master.getColumn(i,"DOC_REG_ID"));
        			this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
                }
            }

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
        this.btn_save_onclick = function(obj,e)
        {
            this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_dsIsUpdated(this.ds_master))
            {
                this.fn_alert("ERRC000035","저장정보","","question"); // 변경된 이력이 없습니다.!
                return false;
            }

        	for(var idx=0; idx<this.ds_master.getRowCount(); idx++)
        	{
        		var strKcCertYn = this.ds_master.getColumn(idx,"KC_CERT_YN");	// 인증대상
        		var strKcCertCd = this.ds_master.getColumn(idx,"KC_CERT_CD");	// 인증명
        		var strKcCertNo = this.ds_master.getColumn(idx,"KC_CERT_NO");	// 인증번호
        		var strAtflNm   = this.ds_master.getColumn(idx,"ATFL_NM");		// 첨부파일

        		// 인증대상 미선택시
        		if(this.gfn_isNull(strKcCertYn))
        		{
        			this.fn_alert("ERRR000190","저장정보",(idx+1)+",KC인증대상여부","question"); // KC인증정보 &1번째 &2 (을)를 필수 입력 하셔야 합니다.
        			this.ds_master.set_rowposition(idx);
        			this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body","KC_CERT_YN"));
        			this.grdMaster.showEditor();
        			return false;
        		}

        		// 인증명 미선택시
        		if(this.gfn_isNull(strKcCertCd))
        		{
        			this.fn_alert("ERRR000190","저장정보",(idx+1)+",인증명","question"); // KC인증정보 &1번째 &2 (을)를 필수 입력 하셔야 합니다.
        			this.ds_master.set_rowposition(idx);
        			this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body","KC_CERT_CD"));
        			this.grdMaster.showEditor();
        			return false;
        		}

        		var findRow    = this.ds_kcCertCdCombo.findRow("COM_DTL_CD",strKcCertCd);
        		var certNoYn   = this.ds_kcCertCdCombo.getColumn(findRow,"COM_USR_DEFN_NM_3");
        		var attcFileYn = this.ds_kcCertCdCombo.getColumn(findRow,"COM_USR_DEFN_NM_1");

        		if(certNoYn == "Y" && this.gfn_isNull(strKcCertNo))
        		{
        			this.fn_alert("ERRR000190","저장정보",(idx+1)+",인증번호","question"); // KC인증정보 &1번째 &2 (을)를 필수 입력 하셔야 합니다.
        			this.ds_master.set_rowposition(idx);
        			this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body","KC_CERT_NO"));
        			this.grdMaster.showEditor();
        			return false;
        		}

        		if(attcFileYn == "Y" && this.gfn_isNull(strAtflNm))
        		{
        			this.fn_alert("ERRR000191","저장정보",(idx+1)+",첨부파일","question");// KC인증정보 &1번째 &2은 필수 등록 하셔야 합니다.
        			this.ds_master.set_rowposition(idx);
        			this.grdMaster.setCellPos(this.grdMaster.getBindCellIndex("body","ATFL_NM"));
        			this.grdMaster.showEditor();
        			return false;
        		}
        	}

        	// 30 * 1,024 * 1,024 = 31,457,280 size
        	// 1 * 1,024 * 1,024  =  1,048,576 size
        	if(this.ds_saveFileList.getRowCount() > 0)
        	{
        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			if(this.ds_saveFileList.getColumn(idx,"ETC_FDS_2") == "del")
        			{
        				continue;
        			}

        			if(this.ds_saveFileList.getColumn(idx,"ATFL_LEN") > 31457280)
        			{
        				this.fn_alert("ERRR000172","저장정보","30M","question"); // 해당 파일 사이즈가 {#1}를 초과 합니다.
        				return false;
        			}
        		}
        	}

            var result = this.fn_confirm( "ERRR000098", "저장","", "question" ); // 저장 하시겠습니까?

            if(result == 0)
            {
                return false;
            }

        	// 구매정보등록 팝업에서 넘어온 경우 호출된 곳에서 같이 저장 처리함.
        	if(this.sParamArg4 == "SSP_BO_RD_13" || this.sParamArg4 == "SSP_BO_RD_14")
        	{
        		if(this.sOptinoArg2 == "I")
        		{
        			this.opener.fn_dsChildCopydsDummy(this.ds_master,this.ds_saveFileList);
        			this.close();
        			return false;
        		}
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
            var strUrl      = "/rd/kc-cert-info-inq/save-kc-cert-info-inq.do";
            var strInDs     = "ds_master=ds_master:u"
        		            + " ds_saveFileList=ds_saveFileList:u";
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
        	this.fn_alert("ERRR000007","저장","","question"); // 정상적으로 저장되었습니다

        	// 구매정보등록 팝업에서 호출시
        	if(this.sParamArg4 == "SSP_BO_RD_13" || this.sParamArg4 == "SSP_BO_RD_14")
        	{
        		var objRtnArr = new Array(3);
        		objRtnArr[0] = "SAVE";
        		objRtnArr[1] = this.gfn_nvl(this.ds_master.getColumn(0,"MTL_GRAVITY"),"");
        		objRtnArr[2] = this.gfn_nvl(this.ds_master.getColumn(0,"PHASE_SPR_CD"),"");

        		this.opener.fn_dsChildCopydsDummy(this.ds_chmMtlListTemp,this.ds_chmMtlAddListTemp,this.ds_uploadResult);
        		this.close(objRtnArr.toString());
        	}
        	else
        	{
        		this.close("SAVE");
        	}
        };
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        this.fn_compontAllControl = function ()
        {
        	var btnEnableTreu   = {
        							btn_exit        : this.btn_exit
        						  , btn_close       : this.btn_close
        						  , btn_infoIptRef  : this.btn_infoIptRef
        	                      };
        	var btnVisibleFalse = {
        							btn_save : this.btn_save
        	                      };
        	this.fn_componentInitViewControl(this,btnEnableTreu,btnVisibleFalse);
        };

        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 마스터 그리드 컬럼값 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "KC_CERT_YN")
        	{
        		if(this.gfn_nvl(e.newvalue,"") == "")
        		{
        			this.ds_kcCertCdCombo.filter("COM_DTL_CD == '"+ e.newvalue +"'");
        		}
        		else
        		{
        			var strKcCertYn = e.newvalue == "Y" ? "N" : "Y";
        			this.ds_kcCertCdCombo.filter("COM_USR_DEFN_NM_5 != '"+ strKcCertYn +"'");
        		}
        		obj.setColumn(e.row,"KC_CERT_CD","");
        	}
        };

        /**
         * 마스터 그리드 로우포지션 변경시 oncolumnchanged 이벤트 발생 처리
         */
        this.ds_master_onrowposchanged = function(obj,e)
        {
        	var strKcCertYn = obj.getColumn(e.newrow,"KC_CERT_YN");

        	if(this.gfn_nvl(strKcCertYn,"") == "")
        	{
        		this.ds_kcCertCdCombo.filter("COM_DTL_CD == '"+ strKcCertYn +"'");
        	}
        	else
        	{
        		strKcCertYn = strKcCertYn == "Y" ? "N" : "Y";
        		this.ds_kcCertCdCombo.filter("COM_USR_DEFN_NM_5 != '"+ strKcCertYn +"'");
        	}
        };

        /**
         * 그리드 셀 확장버튼 클릭시 onexpandup 이벤트 발생 처리
         */
        this.grdMaster_onexpandup = function(obj,e)
        {
        	if(obj.getBindCellIndex("body","KC_CERT_NO") == e.cell)
        	{
        		var strKcCertNo = obj.getBindDataset().getColumn(e.row,"KC_CERT_NO");

        		if(!this.gfn_isNull(strKcCertNo))
        		{
        			system.execBrowser("https://www.rra.go.kr/ko/license/A_b_popup_keyno.do?key_no="+ strKcCertNo);
        		}
        		else
        		{
        			this.fn_alert("ERRR000189","인증번호","","information");  // 인증번호를 입력하셔야 합니다.
        			return false;
        		}
        	}
        };

        /**
         * 그리드 셀 클릭시 oncellclick 이벤트 발생 처리
         */
        this.grdMaster_oncellclick = function(obj,e)
        {
        	// 첨부파일 버튼 클릭시 이벤트 발생 처리
        	if(this.gfn_nvl(obj.getCellPropertyValue(e.row,e.cell,"subsumtext"),"") != "")
        	{
        		var strFileNm = obj.getCellPropertyValue(e.row,e.cell,"text");

        		if(strFileNm == "파일등록")
        		{
        			this.FileUploadSingle.deleteItem(0);
        			this.FileUploadSingle.appendItem();
        			this.FileUploadSingle.filefindbuttons[0].click();
        		}
        		else
        		{
        			// 구매정보등록 팝업에서 호출시
        			if(this.sParamArg4 == "SSP_BO_RD_13")
        			{
        				if(this.sOptinoArg2 == "R")
        				{
        					return false;
        				}
        			}

        			var result = this.fn_confirm( "ERRR000134", "파일 삭제","", "question" ); // 등록된 파일을 삭제하시겠습니까?

        			if(result)
        			{
        				var delRow = this.ds_saveFileList.findRow("DOC_REG_ID",this.ds_master.getColumn(this.ds_master.rowposition,"DOC_REG_ID"));
        				this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");
        				this.ds_master.setColumn(this.ds_master.rowposition,"ATFL_NM",       "");
        				this.ds_master.setColumn(this.ds_master.rowposition,"ATFL_STOR_PATH","");
        				this.ds_master.setColumn(this.ds_master.rowposition,"ORI_ATFL_NM",   "");
        			}
        		}
        	}
        	// 첨부파일 존재시
        	if(obj.getBindCellIndex("body","ATFL_NM") == e.cell)
        	{
        		if(this.gfn_nvl(obj.getCellValue(e.row,e.cell),"") != "")
        		{
        			this.ds_uploadResult.clearData();
        			var nRow    = this.ds_uploadResult.addRow();
        			var findRow = this.ds_saveFileList.findRow("DOC_REG_ID",this.ds_master.getColumn(this.ds_master.rowposition,"DOC_REG_ID"));
        			this.ds_uploadResult.copyRow(nRow,this.ds_saveFileList,findRow);

        			this.fn_fileDownload(this.ds_uploadResult,this.ds_downLoad,this.FileDownload);
        		}
        	}
        };

        /**
         * 이미지등록 아이템 값 변경시 onitemchanged 이벤트 발생 처리
         */
        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.FileUploadSingle.value; // 파일 업로드 로컬패스(전용브라우저 가능)
        	var start = sCompValue.lastIndexOf(".");	   						// [object Grid]

        	if( start > -1)
        	{
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);  // 확장자명
        	}

        	if(!(sCompValue.toUpperCase() == "PPTX" || sCompValue.toUpperCase() == "PPT"
        	  || sCompValue.toUpperCase() == "DOCX" || sCompValue.toUpperCase() == "DOC"
        	  || sCompValue.toUpperCase() == "XLS"  || sCompValue.toUpperCase() == "XLSX"
        	  || sCompValue.toUpperCase() == "TEXT" || sCompValue.toUpperCase() == "ZIP"
        	  || sCompValue.toUpperCase() == "TXT"  || sCompValue.toUpperCase() == "PDF"
        	  || sCompValue.toUpperCase() == "PNG"  || sCompValue.toUpperCase() == "JPG"
        	  || sCompValue.toUpperCase() == "GIF"  || sCompValue.toUpperCase() == "JPEG"
        	  || sCompValue.toUpperCase() == "HWP"))
        	{
        		this.fn_alert("ERRR000173","파일 정보","파일","information");  // &1 형식이 아닙니다.
        		return false;
        	}

        	var sFilePath = this.FileUploadSingle.value; 						// 파이로 로컬풀패스
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;    // 파일이름 시작위치
        	var sFileName = sFilePath.substr(dirExpt);                          // 파일명
        	var docRegId  = this.gfn_nvl(this.ds_master.getColumn(this.ds_master.rowposition,"DOC_REG_ID"),"");

        	var objEnv  = nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcUrl"].url;               			        	 // web서버 URL ex)http://localhost:8080/
        	var strUrl  = svcUrl + "rd/file-upload-dowload/save-file-upload-dowload.do?";    // BLOB변환 && 파일업로드 기능
        		strUrl += "&docRegId="+ docRegId;
        		strUrl += "&etcFds2=90";

        	var bSucc = this.FileUploadSingle.upload(strUrl); 		 // 파일 업로드
        };

        /**
         * 이미지 첨부파일 업로드 성공후 onsuccess 이벤트 발생 처리
         */
        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	this.ds_uploadResult.assign(e.datasets[0]);
        	this.ds_uploadResult.clear();
        	this.ds_uploadResult.copyData(e.datasets[0]);

        	var delRow = this.ds_saveFileList.findRow("DOC_REG_ID",this.ds_master.getColumn(this.ds_master.rowposition,"DOC_REG_ID"));
        	this.ds_saveFileList.setColumn(delRow,"ETC_FDS_2","del");

        	var nRow = this.ds_saveFileList.addRow();
        	this.ds_saveFileList.copyRow(nRow,this.ds_uploadResult);         	// 싱글 파일 패스

        	this.ds_master.setColumn(this.ds_master.rowposition,"ATFL_NM",       this.ds_saveFileList.getColumn(nRow,"ATFL_NM"));
        	this.ds_master.setColumn(this.ds_master.rowposition,"ATFL_STOR_PATH",this.ds_saveFileList.getColumn(nRow,"ATFL_STOR_PATH"));
        	this.ds_master.setColumn(this.ds_master.rowposition,"ORI_ATFL_NM",   this.ds_saveFileList.getColumn(nRow,"ORI_ATFL_NM"));

        	// 최초 파일 등록시 상품문서등록ID Set
        	if(this.gfn_nvl(this.ds_master.getColumn(this.ds_master.rowposition,"DOC_REG_ID"),"") == "")
        	{
        		this.ds_master.setColumn(this.ds_master.rowposition,"DOC_REG_ID",this.ds_uploadResult.getColumn(0,"DOC_REG_ID"));
        	}
        };

        /**
         * 정보입력참고 팝업 버튼 클릭시 이벤트 발생 처리
         */
        this.btn_infoIptRef_onclick = function(obj,e)
        {
        	var lv_sFlag01 	    = "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02	    = "";	    				// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sValue01     = "";						// 부모에서 넘어가는 파라미터(프로그래ID)
        	var lv_sValue02     = "";						// 부모에서 넘어가는 파라미터(폼ID)
        	var lv_sValue03     = "";	  		    		// 부모에서 넘어가는 파라미터(폼이름)
        	var lv_sValue04     = "";						// 부모에서 넘어가는 파라미터(폼경로)
        	var sPopId 		    = "SSP_BO_RD_63";
        	var sUrl 		    = "RD::SSP_BO_RD_63.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04};     // 파라미터4
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {titlebar:"false"};

        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        /**
         * 그리드 화면 표시 타입 함수
         */
        this.fn_setDisplaytype = function(nRow,editType)
        {
        	var findRow = this.ds_kcCertCdCombo_1.findRow("COM_DTL_CD",this.ds_master.getColumn(nRow,"KC_CERT_CD"))
        	var chkYn   = this.ds_kcCertCdCombo_1.getColumn(findRow,"COM_USR_DEFN_NM_3");

        	var re_EditType = "normal";

        	if(chkYn == "Y" || chkYn == "N")
        	{
        		re_EditType = editType;
        	}

        	return re_EditType;
        };

        /**
         * 그리드 화면 에디터 타입 함수
         */
        this.fn_setEdittype = function(nRow,editType)
        {
        	var findRow = this.ds_kcCertCdCombo_1.findRow("COM_DTL_CD",this.ds_master.getColumn(nRow,"KC_CERT_CD"))
        	var chkYn   = this.ds_kcCertCdCombo_1.getColumn(findRow,"COM_USR_DEFN_NM_3");

        	var re_EditType = "none";

        	if(chkYn == "Y" || chkYn == "N")
        	{
        		re_EditType = editType;
        	}

        	return re_EditType;
        };

        /**
         * 그리드 expandshow 에디터 타입 함수
         */
        this.fn_setExpandshow = function(nRow,editType)
        {
        	var findRow = this.ds_kcCertCdCombo_1.findRow("COM_DTL_CD",this.ds_master.getColumn(nRow,"KC_CERT_CD"))
        	var chkYn   = this.ds_kcCertCdCombo_1.getColumn(findRow,"COM_USR_DEFN_NM_3");

        	var re_EditType = "hide";

        	if(chkYn == "Y" || chkYn == "N")
        	{
        		re_EditType = editType;
        	}

        	return re_EditType;
        };

        /**
         * 닫기 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_close_onclick = function(obj,e)
        {
        	// ERRC000087 : 취소하시겠습니까?
        	var result = this.fn_confirm("ERRC000087", "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("CLOSE");
        };

        /**
         * 취소 버튼 클릭시 onclick 이벤트 발생 처리
         */
        this.btn_exit_onclick = function(obj,e)
        {
        	// ERRC000087 : 취소하시겠습니까?
        	var result = this.fn_confirm("ERRC000087", "취소","", "question" );

            if(result == 0)
            {
                return false;
            }

        	this.fn_saveMultiFileDelUpdate("EXIT");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_infoIptRef.addEventHandler("onclick",this.btn_infoIptRef_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload.addEventHandler("onerror",this.FileDownload_onerror,this);
            this.FileDownload.addEventHandler("onsuccess",this.FileDownload_onsuccess,this);
            this.ds_master.addEventHandler("oncolumnchanged",this.ds_master_oncolumnchanged,this);
            this.ds_master.addEventHandler("onrowposchanged",this.ds_master_onrowposchanged,this);
        };
        this.loadIncludeScript("SSP_BO_RD_55.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
