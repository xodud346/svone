(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("topFrame");
            this.set_cursor("pointer");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_files", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_REG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_STOR_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORI_ATFL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN\" type=\"STRING\" size=\"256\"/><Column id=\"ATFL_LEN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MNU_LVL_SPR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"menuId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"OPRTR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPRTR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WPTAL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHR_TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JBPOS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenualDown",null,"10","130","30","270",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴얼 다운로드");
            obj.set_cssclass("btn_TF_menual");
            this.addChild(obj.name, obj);

            obj = new Static("staOrgNm",null,"10","100","30","165",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("SSP 기획팀");
            obj.set_cssclass("sta_TF_team");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("staName",null,"10","145","30","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>운영자</b>님 반갑습니다.");
            obj.set_cssclass("sta_TF_Welcome");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","60","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_TF_logo");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("topFrame.xfdl", function() {

        /*******************************************************
          PROJECT NAME :
          CREATION DATES :
        *******************************************************/



        /***********************************************************************************************
         * Form 변수 선언 영역
        ************************************************************************************************/
        	this.fv_oApp = nexacro.getApplication();	//application object
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        ************************************************************************************************/
        	this.fn_onLoad = function(obj,e)
        	{
        		this.fn_search();
        		this.fn_hostSearch();

        	};
        /***********************************************************************************************
        * Transaction 서비스 호출 영역
        ************************************************************************************************/
        	//조회
        	this.fn_search = function()	{
                // 세션 정보, 시스템 날짜 조회
                var sSvcId = "userInfoSelect";
                var sUrl = "/am/manager/login-info.do";
                var inDs = "";
                var outDs = "gds_userInfo=ds_output gds_systemdate=ds_output1";
                var arg = "";
                this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
            };

        	//ssp hosts 경로 조회
        	this.fn_hostSearch = function()	{
                var sSvcId = "sspHostsSelect";
                var sUrl = "/co/ssp-hosts.do";
                var inDs = "";
                var outDs = "gds_sspHosts=ds_output1";
                var arg = "";
                this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
            };

        	this.fn_fileInfo = function()	{

                var sSvcId = "fileInfo";
                var sUrl = "/co/fileInfo.do";
                var inDs = "ds_search=ds_search";
                var outDs = "ds_info=ds_output";
                var arg = "";
                this.gfn_transaction(sSvcId, sUrl, inDs, outDs, arg, "fn_callBack");
            };

         this.fn_fileDown = function(obj,e) {
        	  var oFramesInfo = this.fv_oApp.agv_WorkFrameSet.frames;
        	  for ( var i = 0 ; i < oFramesInfo.length ; i++ ) {
        		  //console.log(oFramesInfo);
        		   }
        		   var oOpenMenuDs = this.fv_oApp.gds_openMenu;

        		   var sWinId = oOpenMenuDs.getColumn(oOpenMenuDs.rowposition, "WIN_ID");

        		   this.cfn_isActiveFrame(sWinId);

            };
        	//업무 화면 활성화 함수
        	this.cfn_isActiveFrame = function (sWinId,  oArgs) {

        		//frame visibe 처리내역 추가(2019.9.5)
        		var oFramesInfo = this.fv_oApp.agv_WorkFrameSet.frames;
                var menuId='';
        		for ( var i = 0 ; i < oFramesInfo.length ; i++ ) {
        			if(oFramesInfo[i].name == sWinId){
        				 menuId = oFramesInfo[i].arguments.menuId;
        			}

        			this.ds_search.setColumn( 0, "MNU_LVL_SPR_CD", menuId);

        			this.fn_fileInfo();

        		}

        	};
        /***********************************************************************************************
        * Callback 처리 영역
        ************************************************************************************************/
        	this.fn_callBack = function(svcID, errorCode, errorMsg)	{
        		if(svcID == "userInfoSelect"){
        		    //alert(this.fv_oApp.gds_userInfo.saveXML());

        			var oGdsUserInfo = this.fv_oApp.gds_userInfo;

        			var sOrgNm         = this.gfn_trim(oGdsUserInfo.getColumn(0, "ORG_NM"));
        			var sOprtrNm       = this.gfn_trim(oGdsUserInfo.getColumn(0, "OPRTR_NM"));
        			var sOrgNmLength   = sOrgNm.length;
        			var sOprtrNmLength = sOprtrNm.length;

        			console.log("jeon.hj    sOprtrNm : " + sOprtrNm + ", sOprtrNmLength :" + sOprtrNmLength + ",   sOrgNm : " + sOrgNm + ", sOrgNmLength :" + sOrgNmLength);

        			if(sOprtrNmLength > 3){
        				sOprtrNmLength = sOprtrNmLength - 3;

        				this.btnMenualDown.set_right(290 + (sOprtrNmLength * 10));
        				this.staOrgNm.set_right(175 + (sOprtrNmLength * 10));

        				this.staName.set_width(155 + (sOprtrNmLength * 10));
        				this.staName.set_right(15);

        				console.log("btnMenualDown   left : " + this.btnMenualDown.right + ", staName width :" + this.staName.width);
        			} else {
        			    sOprtrNmLength = 0;
        			}

        			if(sOrgNmLength > 9){
        				sOrgNmLength = sOrgNmLength - 9;

        				this.btnMenualDown.set_right(290 + (sOrgNmLength * 10) + (sOprtrNmLength * 10));

        				//this.staOrgNm.set_right(175 + (sOrgNmLength * 10) + (sOprtrNmLength * 10));
        				this.staOrgNm.set_width(155 + (sOrgNmLength * 10) + (sOprtrNmLength * 10));
        			}

        			this.staOrgNm.set_text(sOrgNm);
        			this.staName.set_text("<b v='true'>&nbsp;&nbsp;&nbsp;" + sOprtrNm + "</b>님 반갑습니다.");
        		}if(svcID == "fileInfo"){

        			this.FileDownTransfer.setPostData("docRegId",this.ds_info.getColumn( 0,"DOC_REG_ID"));
        			//this.FileDownTransfer.setPostData("docRegSeq",this.ds_files.getColumn(i, "DOC_REG_SEQ"));

        			this.FileDownTransfer.download('/co/file-download.do');
        		}else{
        			//console.log("sspHostsSelect : " + this.fv_oApp.gds_sspHosts.saveXML());
        		}
        	}

        /***********************************************************************************************
        * 외부 호출 FUNCTION 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  개발자(사용자) 함수 영역
        ************************************************************************************************/

        /***********************************************************************************************
        *  각 Component 별 이벤트 영역
        ************************************************************************************************/
        this.img_logo_onclick = function(obj,e)
        {
        	window.location.href = "/ui/index.html";
        };

        this.btnMenualDown_onclick = function(obj,e)
        {
        	this.fn_fileDown();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onLoad,this);
            this.btnMenualDown.addEventHandler("onclick",this.btnMenualDown_onclick,this);
            this.img_logo.addEventHandler("onclick",this.img_logo_onclick,this);
        };
        this.loadIncludeScript("topFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
