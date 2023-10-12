//XJS=rdForm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == Form관련 관련 공통함수들은 여기에 작성한다.
         ===============================================================================
        */
        this.lv_dsObj;
        /*******************************************************************************
         * Function Name  : this.fn_componentInitViewControl(comObj,comEArray,comVArra)
         * Description    : 각종 Component(컴포넌트에 이벤트를 제어 시 사용함.=재귀호출을 한다.)
         * Arguments      : comObj - objs(전체 컴포넌트)
                          , comEArray - array (활성할 필요한 버튼을 배열러줌) 현재는 Button만 제어
        				  , comVArray = array (비활성할  필요한 버튼을 배열러줌) 현재는 Button만 제어
         * Return(objs)   : N/A
         *******************************************************************************/
        this.fn_componentInitViewControl = function(comObj,comEArray,comVArray)
        {
        	try{
        			var arrComp = comObj.components;
        			var nLength = arrComp.length;
        			for(var i=0; i < nLength; i++)
        			{
        				var sCompo = arrComp[i];
        				if(sCompo instanceof nexacro.Button || sCompo instanceof nexacro.ImageViewer || sCompo instanceof nexacro.WebBrowser) {
        					sCompo.set_enable(false);
        				} else if(sCompo instanceof nexacro.Edit || sCompo instanceof nexacro.MaskEdit || sCompo instanceof nexacro.Combo ||
        				          sCompo instanceof nexacro.TextArea || sCompo instanceof nexacro.Calendar) {
        					sCompo.set_autoselect(true);
        					sCompo.set_readonly(true);
        				} else if(sCompo instanceof nexacro.Button || sCompo instanceof nexacro.ImageViewer || sCompo instanceof nexacro.WebBrowser ||
        						  sCompo instanceof nexacro.Grid   || sCompo instanceof nexacro.Radio) {
        					sCompo.set_readonly(true);
        				}
        				for(var key in comEArray) {
        					if(sCompo instanceof nexacro.Button) {
        						if(sCompo == comEArray[key]) {
        						    if(sCompo == comEArray["btn_exit"])
        							{
        								var nLeft = (this.getOffsetWidth() / 2) - Math.round((sCompo.getOffsetWidth()) / 2);
        								sCompo.setOffsetLeft(nLeft);
        							}
        							sCompo.set_enable(true);
        						}
        					}
        				}
        				for(var key in comVArray) {
        					if(sCompo instanceof nexacro.Button) {
        						if(sCompo == comVArray[key]) {
        							sCompo.set_visible(false);
        							sCompo.set_enable(true);
        						}
        					}
        				}
        				if(sCompo instanceof nexacro.Div || sCompo instanceof nexacro.PopupDiv)	{
        					this.fn_componentInitViewControl(sCompo.form);                                            // 재귀함수
        				} else if(sCompo instanceof nexacro.Tab) {
        					var nPages = sCompo.tabpages.length;
        					for(var j=0; j<nPages; j++)	{
        						this.fn_componentInitViewControl(sCompo.tabpages[j].form) 	                          // 재귀함수
        					}
        				}
        			}
        	} catch(e) {
        		trace("errorCode : " + e.name + " / errorMessage : " + e.message);
        	}
        };
        /**
         * 넥사크로 리긴온시 로컬처리 함수
         */

        this.fn_setLocalUserCreate = function(pvUseFlog)
        {
        	var nApp            = nexacro.getApplication()
        	var appUrl 			= nApp.xadl;
        	var appUrlSplit		= appUrl.split("/");
        	var objEnv          = nexacro.getEnvironment();
        	var service         = objEnv.services["svcUrl"];       // TypeDefinition 접근하기위한 객체
        	var protocol		= appUrlSplit[0];                  // 프로토콜 : RUNTION(file:),Web(http)
        	var navigatorName	= system.navigatorname;            // Browser명("nexacro","IE","Chrome","Gecko")
        	if(protocol == "file:")
        	{
        		if(navigatorName == "nexacro")
        		{
        			if(pvUseFlog == true)
        			{
        				appUrlSplit = (service.url).split("/")
        				if(appUrlSplit[2] == "localhost:8080" || appUrlSplit[2] == "localhost" ||
        				   appUrlSplit[2] == "127.0.0.1:8080" || appUrlSplit[2] == "127.0.0.1")
        				{
        					var	lv_dsId 	= "_gds_userInfo";
        					this.lv_dsObj 	=  new Dataset;
        					this.lv_dsObj.addColumn("USR_STATS_CD","STRING",256);
        					this.lv_dsObj.addColumn("UPDPSN_ID","STRING",256);
        					this.lv_dsObj.addColumn("CO_CD","string",32);
        					this.lv_dsObj.addColumn("TEL_NO","STRING",256);
        					this.lv_dsObj.addColumn("HP_NO","STRING",256);
        					this.lv_dsObj.addColumn("ORG_CD","string",32);
        					this.lv_dsObj.addColumn("OPRTR_NM","string",32);
        					this.lv_dsObj.addColumn("MSSGR_ADDR","STRING",256);
        					this.lv_dsObj.addColumn("REGPSN_ID","STRING",256);
        					this.lv_dsObj.addColumn("USE_YN","string",32);
        					this.lv_dsObj.addColumn("JBPOS_NM","STRING",256);
        					this.lv_dsObj.addColumn("JB_NM","STRING",256);
        					this.lv_dsObj.addColumn("ACNT_CERT_AUTH_YN","STRING",256);
        					this.lv_dsObj.addColumn("PSTN_NM","STRING",256);
        					this.lv_dsObj.addColumn("UPD_DTM","datetime",17);
        					this.lv_dsObj.addColumn("EMP_NO","string",32);
        					this.lv_dsObj.addColumn("DIV_CD","string",32);
        					this.lv_dsObj.addColumn("SALS_TEAM_CD","STRING",256);
        					this.lv_dsObj.addColumn("REG_DTM","datetime",17);
        					this.lv_dsObj.addColumn("USR_SPR_CD","STRING",256);
        					this.lv_dsObj.addColumn("DTY_NM","STRING",256);
        					this.lv_dsObj.addColumn("OPRTR_ID","string",32);
        					this.lv_dsObj.addColumn("EMAIL_ADDR","string",32);
        					this.lv_dsObj.addColumn("RTCO_DT","STRING",256);
        					this.lv_dsObj.addColumn("SEX_SPR_CD","STRING",256);
        					this.lv_dsObj.addColumn("PLNT_ID","STRING",256);
        					this.lv_dsObj.addColumn("CHR_TASK_NM","STRING",256);
        					this.lv_dsObj.addColumn("ORG_NM","string",32);
        					this.lv_dsObj.addColumn("WPTAL_ID","string",32);
        					this.lv_dsObj.addColumn("ENCRP_USR_INFO_DTLS","STRING",256);
        					this.lv_dsObj.addColumn("ENT_DT","STRING",256);
        					this.lv_dsObj.addColumn("JB_CD","string",32);
        					this.lv_dsObj.addColumn("SALS_CHR_CD","STRING",256);
        					this.addChild(lv_dsId,this.lv_dsObj);
        					var nRow = this._gds_userInfo.addRow();
        					this._gds_userInfo.setColumn(nRow,"USR_STATS_CD"       ,"");
        					this._gds_userInfo.setColumn(nRow,"UPDPSN_ID"          ,"");
        					this._gds_userInfo.setColumn(nRow,"CO_CD"              ,"1000");
        					this._gds_userInfo.setColumn(nRow,"TEL_NO"             ,"");
        					this._gds_userInfo.setColumn(nRow,"HP_NO"              ,"");
        					this._gds_userInfo.setColumn(nRow,"ORG_CD"             ,"50164744");
        					this._gds_userInfo.setColumn(nRow,"OPRTR_NM"           ,"SM");
        					this._gds_userInfo.setColumn(nRow,"MSSGR_ADDR"         ,"");
        					this._gds_userInfo.setColumn(nRow,"REGPSN_ID"          ,"");
        					this._gds_userInfo.setColumn(nRow,"USE_YN"             ,"Y");
        					this._gds_userInfo.setColumn(nRow,"JBPOS_NM"           ,"");
        					this._gds_userInfo.setColumn(nRow,"JB_NM"              ,"");
        					this._gds_userInfo.setColumn(nRow,"ACNT_CERT_AUTH_YN"  ,"");
        					this._gds_userInfo.setColumn(nRow,"PSTN_NM"            ,"");
        					this._gds_userInfo.setColumn(nRow,"UPD_DTM"            ,"20220317150014000");
        					this._gds_userInfo.setColumn(nRow,"EMP_NO"             ,"X0025958");
        					this._gds_userInfo.setColumn(nRow,"DIV_CD"             ,"00000000");
        					this._gds_userInfo.setColumn(nRow,"SALS_TEAM_CD"       ,"");
        					this._gds_userInfo.setColumn(nRow,"REG_DTM"            ,"20220317150014000");
        					this._gds_userInfo.setColumn(nRow,"USR_SPR_CD"         ,"");
        					this._gds_userInfo.setColumn(nRow,"DTY_NM"             ,"");
        					this._gds_userInfo.setColumn(nRow,"OPRTR_ID"           ,"X0025958");
        					this._gds_userInfo.setColumn(nRow,"EMAIL_ADDR"         ,"SM_V000@serveone.co.kr");
        					this._gds_userInfo.setColumn(nRow,"RTCO_DT"            ,"");
        					this._gds_userInfo.setColumn(nRow,"SEX_SPR_CD"         ,"");
        					this._gds_userInfo.setColumn(nRow,"PLNT_ID"            ,"");
        					this._gds_userInfo.setColumn(nRow,"CHR_TASK_NM"        ,"");
        					this._gds_userInfo.setColumn(nRow,"ORG_NM"             ,"PI팀");
        					this._gds_userInfo.setColumn(nRow,"WPTAL_ID"           ,"admin");
        					this._gds_userInfo.setColumn(nRow,"ENCRP_USR_INFO_DTLS","");
        					this._gds_userInfo.setColumn(nRow,"ENT_DT"             ,"");
        					this._gds_userInfo.setColumn(nRow,"JB_CD"              ,"00000000");
        					this._gds_userInfo.setColumn(nRow,"SALS_CHR_CD"        ,"");
        					//trace(this._gds_userInfo.saveXML());
        					nApp.gds_userInfo.copyData(this._gds_userInfo);
        				}
        			}
        		}
        	}else
        	{
        		//trace("html5버전입니다.");
        	}
        };
        /*******************************************************************************
         * Function Name  : this.fn_setInitPersonalization(obj,grdObj,sRightMouse,sPersonalFlag)
         * Description    : fn_setInitPersonalization개인화 처리 하는 함수
         * Arguments      : obj => this(form)
                          , obj => grid
        				  , String = > sRightMouse 오른마우트 툴팁메뉴사용여부
        				  , sPersonalFlag => 개인화사용여부
         * Return(objs)   : N/A
         *******************************************************************************/
        this.fn_setInitPersonalization = function(obj,grdObj,sRightMouse,sPersonalFlag)
        {
        	var strGrdObjNm = grdObj.name;
        	var sMouse      = sRightMouse;
        	var sPsFlag     = sPersonalFlag;

        	var sBindId = "";
        	var aBindId = new Array();
        	var strId   = "";
        	for(var i = 0; i < grdObj.getCellCount("body"); i++)
        	{

        		sBindId = this.gfn_trim(grdObj.getCellProperty("body",i,"text")).replace("bind:","");
        		if(this.gfn_isNull(sBindId))
        		{
        			sBindId = "";
        		}
        		aBindId[i] 	= sBindId;
        	//	trace(i+ ":" + sBindId);
        	}
        	var arrayId = "";
        	for(var j = 0; j < aBindId.length; j++)
        	{
        		if(this.gfn_isNull(aBindId[j]))
        		{
        			continue;
        		}else
        		{
        			arrayId = arrayId + "," + aBindId[j];
        		}
        	}
        	strId = arrayId.substr(1);
        	obj.uGridList 			= strGrdObjNm;
        	grdObj.uRightMouse 		= sMouse;
        	grdObj.uPersonalFlag 	= sPsFlag;
        	grdObj.uDefaultFormat   = strId;
        	/** debug start **/
        	/*
        	trace("1.====================>obj.uGridList         : " + obj.uGridList);
        	trace("2.====================>grdObj.uRightMouse    : " + grdObj.uRightMouse);
        	trace("3.====================>grdObj.uPersonalFlag  : " + grdObj.uPersonalFlag);
        	trace("4.====================>grdObj.uDefaultFormat : " + grdObj.uDefaultFormat);
        	*/
        	/** debug end **/
        };

        /*******************************************************************************
         * Function Name  : this.fn_setInitPageCnt(ods,iCnt)
         * Description    : fn_setInitPageCnt 페이지 카운트 기본값셋팅처리
         * Arguments      : obj    => datset
                          , couint => grid

         * Return(objs)   : N/A
         *******************************************************************************/
        this.fn_setInitPageCnt = function(ods,iCnt)
        {
        	var intCnt = 0;
        	if(!this.gfn_isNull(iCnt))
        	{
        		var nRow = ods.findRow("COM_USR_DEFN_NM_1","Y");
        		if(nRow > -1)
        		{
        			intCnt = ods.getColumn(nRow,"COM_DTL_CD");
        		}else
        		{
        			intCnt = iCnt;
        		}
        	}else
        	{
        		intCnt = 10000;
        	}
        	return intCnt;
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
