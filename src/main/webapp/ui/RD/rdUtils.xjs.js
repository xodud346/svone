//XJS=rdUtils.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.fn_exprNecessary = function(obj)
        {
        	var sTotText = obj.text+"<fc v='red'>*</fc>";
        	obj.set_usedecorate(true);
        	obj.set_text(sTotText);

        }

        /**********************************************************************************
         * Function Name: fn_getLengthB(한글3Bitey)
         * Description  : 문자열 BYTE으로 계산해서  길이 반환하는 함수(한글3/영문1/숫자1)
         * Arguments    : sValue         : 문자열
                          nHanglByteSize : 한글 바이트 size 숫자로 등록 한글이3byte:3 2byte:2
         * Return       : v_cnt          : 숫자
         **********************************************************************************/
        this.fn_getLengthB = function(sValue,nHanglByteSize)
        {
        	if(this.gfn_isNull(sValue))
        	{
        		return 0;
        	}
            var v_ChkStr = sValue.toString();
            var v_cnt    = 0;

            for (var i=0; i<v_ChkStr.length; i++)
            {
                if (v_ChkStr.charCodeAt(i) > 127)
                {
                    v_cnt += nHanglByteSize;
                } else
                {
                    v_cnt += 1;
                }
            }
        	return v_cnt;
        }

        /******************************************************************************************************************
         * Function Name: fn_CmmnMultiComboLoad
         * Description  : 공통코드(CMMN010)의 데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
                          "|"(파이프라인)으로 구분하여 복수개 데이터 조회가 가능하다.
         * Arguments    : - strDS(데이터셋 문자열), strLgcd(중분류코드), strHipoFlag(콤보 유형 플래그),
                           strOptn(WHERE 부가 조건절), strSid(서비스 ID)
                          - strHipoFlag(데이터 상단에 나오는 항목 T:전체, S:선택, N:공백, X:해당사항없음)
                          - strSid(코드 조회 실행 후 CALLBACK 함수 지정.)
         * Return       : N/A
         *******************************************************************************************************************/
        this.fn_CmmnMultiComboLoad = function(strDS, strLgcd, strHipoFlag, strOptn, strSid)
        {
            if(this.gfn_isNull(strDS))
            {
        		alert("선언한 데이타 셋이 없습니다.");
        		return false;
            }

           	var oDsArray = new Array();
        	    oDsArray = strDS.split("|");
        	var intDsCnt = oDsArray.length;
        	if(intDsCnt == 1)
        	{
        		if(this.gfn_trim(oDsArray[0]).length == 0)
        		{
        			alert("공통 코드설정한 데이타셋이 없습니다...");
        			return false;
        		}
        	}

            var strDataSet = "";

            for(var idx = 0; idx < intDsCnt; idx++)
            {
                if (idx == 0)
                {
                    strDataSet = oDsArray[idx] + "=" + oDsArray[idx];
                }else
                {
                    strDataSet += " " + oDsArray[idx] + "=" + oDsArray[idx];
                }
            }
        	//dsDataSet		="dsOpen|dsClose|dsGrdOpen|dsGrdClose"	 							받아올 데이타셋
        	//commLgCode 	="ROP01|ROP01|ROP01|ROP01"				 							공통코드
        	//commHipoFg	="T|T|X|X";   						     							콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	//commOptn      =" AND COMM_IT02 = '" + vip + "'| AND COMM_IT02 = '" + vip + "'||"  조건문을 던저 줄시
        	var strSvc 		= strSid;
        	//gv_was:JAVA 자바 그외는 NET:단텟
        	var strUrl      = "/rd/rdCommInit/select-comm-init-list.do";
        	var strInDs  	= "";
        	var strOutDs 	= strDataSet;
        	var strArg 	    = "dsDataSet="  	+ nexacro.wrapQuote(strDS);
        		strArg 	   += " commLgCode=" 	+ nexacro.wrapQuote(strLgcd);
        		strArg     += " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);
        		strArg 	   += " commOptn=" 		+ nexacro.wrapQuote(strOptn);
        		strArg 	   += " language=" 		+ "KO";//nexacro.wrapQuote(nexacro.getApplication().gv_Language);

        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);
        };

        /**
         * 현재 Form 상의 imgViewer 컴포넌트를 이용하여 이미지 뷰어를 셋팅한다.
         * @param {Object}    dsObj		이미지 파일다운로드 기준 데이터셋
         * @param {Object}    dsTObj	로컬 파일다운로드 정보 데이터셋
         * @param {componert} cmpImg    이미지뷰어 콤포넌트 SET
         * @example this.fn_setFileImageUpload(dsObj, dsTObj, cmpImg);
         */
        this.fn_setFileImageUpload = function(dsObj,dsTObj,cmpImg)
        {
        	dsTObj.clearData();
        	var nRow = dsTObj.addRow();
        	dsTObj.copyRow(nRow,dsObj,0);

        	//trace(dsTObj.saveXML());
        	var objEnv 		 = nexacro.getEnvironment();
        	var svcUrl  	 = objEnv.services["svcUrl"].url;
        	var strUrl  	 = svcUrl + "DownloadServlet.do?";
        	var sNavigatorNm = system.navigatorname;

        	var full_path 	= dsTObj.getColumn(0,"ATFL_STOR_PATH");
        	// 서버 저장 경로
        	strUrl 		   += "file_path=" + full_path;

            if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE")
        	{
        		for(var i=0; i<dsTObj.rowcount; i++)
        		{
        			var strFileOrgName 	= dsTObj.getColumn(i,"ATFL_NM");
        			var strFileName 	= dsTObj.getColumn(i,"ORI_ATFL_NM");
        			    strUrl    		= strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);
        			cmpImg.set_image(strUrl);
        		}
        	} else
        	{
        		for(var i=0; i<dsTObj.rowcount; i++)
        		{
        			var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
        			// Create Object
        			var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
        			this.addChild(sDownID, objWebBrowser);
        			objWebBrowser.show();

        			var strFileOrgName = dsTObj.getColumn(i,"ATFL_NM");
        			var strFileName    = dsTObj.getColumn(i,"ORI_ATFL_NM");
        				strUrl         = strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);
        			cmpImg.set_image(strUrl);
        		}
        	}
        };

        /******************************************************************************************************************
         * Function Name: fn_setPopup
         * Description  : 원시리스트 데이타를 가지고 와서 하나의 필드에 콤마처리해서 넣는다
         * Arguments    : - inDs 던지는 데이타셋
        				  - outDs 받는 데이타셋
        				  - inColNm 던지는 바운드 필드
        				  - outColNm 받는필드
         * Return       : N/A
         *******************************************************************************************************************/
        this.fn_setPopup = function(inDs,outDs,inColNm,outColNm)
        {
        	if(inDs.rowcount > 0)
        	{
        		outDs.setColumn(0,outColNm,"");

        		var sComma = "";

        		for(var idx=0; idx<inDs.rowcount; idx++)
        		{
        			if(idx > 0)
        			{
        				sComma = ",";
        			}
        			outDs.setColumn(0,outColNm,outDs.getColumn(0,outColNm) + sComma + inDs.getColumn(idx,inColNm));

        		}
        	}
        };

        /******************************************************************************************************************
         * Function Name: fn_setInqPerdSprCd
         * Description  : 넘어온 시작일 & 종료일 & 조회기간구분코드에 따른 날짜 Setting
         * Arguments    : - sDate  시작일자 콤포넌트 ex) 20220422
        				  - eDate  종료일자 콤포넌트 ex) 20220422
        				  - obj    조회기간구분코드  ex) 1일 or 1주일 or 1년
         * Return       : N/A
         *******************************************************************************************************************/
        this.fn_setInqPerdSprCd = function(sDate,eDate,obj)
        {
        	if(this.gfn_isYMD(eDate.value||"") == false)
        	{
        		eDate.set_value(new nexacro.Date());
        	}

            // 시작일자가 정상이면서 전체 선택시
        	if((this.gfn_isYMD(sDate.value||"") && this.gfn_isNull(obj.value))
        	|| (this.gfn_nvl(sDate.value||"") == "" && this.gfn_isNull(obj.value)))
        	{
        		sDate.set_value("1900-01-01");
        		return false;
        	}

            /* 1 : 1일, 2 : 1주일, 3 : 2주일,    4 : 1개월,    5 : 3개월,    6 : 6개월,    7 : 1년 */
            var dateText = obj.text;
            var objDate  = this.gfn_strToDate(eDate.value);

        //     if(dateText.indexOf("주일") != -1)
        // 	{
        //         objDate.setDate(objDate.getDate() - (parseInt(dateText) * 6));
        //     }
        // 	else if(dateText.indexOf("일") != -1)
        // 	{
        // 	    //objDate.setDate(objDate.getDate() - parseInt(dateText));
        //         objDate.setDate(objDate.getDate());
        //     }
        // 	else if(dateText.indexOf("개월") != -1)
        // 	{
        //         objDate.setMonth(objDate.getMonth() - parseInt(dateText)) + objDate.setDate(objDate.getDate() + parseInt(dateText));
        //     }
        // 	else if(dateText.indexOf("년") != -1)
        // 	{
        // 		objDate.setFullYear(objDate.getFullYear() - parseInt(dateText));
        //     }

        	 if(dateText == ("1일") )
        	{
              objDate.setDate(objDate.getDate());
            }
        	else if(dateText == ("1주일") )
        	{
        	     objDate.setDate(objDate.getDate() - (parseInt(dateText) * 6));
            }else if(dateText == ("2주일") )
        	{
        	     objDate.setDate(objDate.getDate() - ((parseInt(dateText) * 7 ) -1));
            }
        	else if(dateText == ("1개월"))
        	{
                objDate.setMonth(objDate.getMonth() - parseInt(dateText)) + objDate.setDate(objDate.getDate() + parseInt(dateText));
            }
        	else if(dateText == ("3개월"))
        	{
                objDate.setMonth(objDate.getMonth() - parseInt(dateText)) + ((objDate.getDate() + parseInt(dateText) * 6 ) + objDate.setDate(objDate.getDate() + parseInt(dateText) -2) );
            }
        	else if(dateText == ("6개월"))
        	{
                      objDate.setMonth(objDate.getMonth() - parseInt(dateText)) + ((objDate.getDate() + parseInt(dateText) * 12 ) + objDate.setDate(objDate.getDate() + parseInt(dateText)-5) );
            }
        	else if(dateText.indexOf("년") != -1)
        	{
        		//objDate.setFullYear(objDate.getFullYear() - parseInt(dateText));
        		objDate.setDate(objDate.getDate() - (parseInt(dateText) * 364));
            }


            sDate.set_value(objDate.getFullYear() + ((objDate.getMonth() + 1) + "").padLeft(2,'0') + (objDate.getDate() + "").padLeft(2,'0'));
        };

        /******************************************************************************************************************
         * Function Name: fn_setMultiSearch
         * Description  : 멀티검색조건을 위한 콤마 리스트를 가지고 와서 데이터셋에 Row 단위로 추가한다.
         * Arguments    : - uiNm    호출된 화면명
        				  - colItm  컬럼 항목
        				  - comVal  콤마로 넘어온 문자열을 배열로 재정렬할 대상 값
        				  - dsObj   임의의 데이터셋으로 받기 위해 Dataset Object
         * Return       : N/A
         *******************************************************************************************************************/
        this.fn_setMultiSearch = function(uiNm,colItm,comVal,dsObj)
        {
        	if(comVal == undefined)
        	{
        		return false;
        	}

        	var strExpr = "COL_ITM =='" + colItm + "'";
        	var arrRows = this.ds_select.extractRows(strExpr);

        	this.ds_select.deleteMultiRows(arrRows);

        	var arrList  = comVal.split(',');
        	var nRow     = 0;
        	var strValue = "";

        	for(var idx=0; idx<arrList.length; idx++)
        	{
        		strValue = arrList[idx];

        		if(strValue.length != 0  &&  this.ds_select.findRowExpr("COL_ITM=='"+ colItm + "' && COND_DATA_VAL=='" + strValue + "'") == -1)
        		{
        			nRow = this.ds_select.addRow();
        			this.ds_select.setColumn(nRow,"SES_ID",       "");
        			this.ds_select.setColumn(nRow,"INQ_COND_DTLS",uiNm);
        			this.ds_select.setColumn(nRow,"COL_ITM",      colItm);
        			this.ds_select.setColumn(nRow,"COND_DATA_VAL",strValue);
        		}
        	}

        	this.ds_select.filter("COL_ITM=='"+ colItm + "'");
        	var totRowCount = this.ds_select.getRowCount();
        	this.ds_select.filter("");

        	if(dsObj == undefined)
        	{
        		this.ds_search.setColumn(0,colItm+"_CNT",totRowCount);
        	}
        	else
        	{
        		this[dsObj].setColumn(0,colItm+"_CNT",totRowCount);
        	}
        }

        // Multi검색조회 조건 저장
        this.fn_insertMultiData = function(strCallback)
        {
        	if(this.ds_select.getRowCount() <= 0)
        	{
        		return false;
        	}

        	var sSvcId      = "insertMultiData";
        	var sUrl        = "/od/odrPopup/insertOdrInqTgtDtls.do";
        	var inDs        = "ds_search=ds_select";
        	var outDs       = "";
        	var arg         = "";
        	var strCallBack = strCallback; // 공백일시 기본 fn_callBack
        	var strASync    = true;        // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(sSvcId
        	                   , sUrl
        					   , inDs
        					   , outDs
        					   , arg
        					   , strCallBack
        					   , strASync);
        };

        // Multi검색조회 조건 삭제
        this.fn_deleteMultiData = function(strCallback)
        {
        	if(this.ds_select.getRowCount() <= 0)
        	{
        		return false;
        	}

        	var sSvcId      = "deleteMultiData";
        	var sUrl        = "/od/odrPopup/deleteOdrInqTgtDtls.do";
        	var inDs        = "ds_search=ds_select";
        	var outDs       = "";
        	var arg         = "";
        	var strCallBack = strCallback; // 공백일시 기본 fn_callBack
        	var strASync    = true;        // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(sSvcId
        	                   , sUrl
        					   , inDs
        					   , outDs
        					   , arg
        					   , strCallBack
        					   , strASync);
        };

        /******************************************************************************************************************
         * Function Name: fn_getFormId(this)
         * Description  : 등록한 폼의 아디을 기지고 오는 로직
         * Arguments    : - formObj    this
         * Return       : String 폼에 아이디를 가지고 온다
         *******************************************************************************************************************/
        this.fn_getFormId = function(formObj)
        {
        	var sFormId = formObj.getOwnerFrame().arguments["pageUrl"];
        	return sFormId.substring(sFormId.indexOf("::")+2,sFormId.indexOf("."));
        }

        /*
         * 전체선택시 체크박스 전체 true 초기화
         * @param chkBoxAll - 전체체크박스 처리
         * @return  N/A
         */
        this.fn_chkBoxAllChkeck = function(chkBoxAll)
        {
        	for(var key in chkBoxAll)
        	{
        		chkBoxAll[key].set_value(true);
        	}
        };


        /******************************************************************************************************************
         * Function Name: fn_imageViewerUrl
         * Description  : 서버에 저장된 이미지 첨부파일을 이미지뷰어에 뿌려주기.
         * Arguments    : - filePath     /attach/2022/03/22/
        				  - fileOrgName  3fab0efd-4248-4e50-b45c-41cb042ef6b0.jpg
        				  - fileName     1.jpg
         * Return       : N/A
         *******************************************************************************************************************/
        this.fn_imageViewerUrl = function(filePath,fileOrgName,fileName)
        {
        	var objEnv = nexacro.getEnvironment();
        	var svcUrl = objEnv.services["svcUrl"].url;
        	var strUrl = svcUrl + "DownloadServlet.do?"
        		strUrl += "file_path=" + filePath;
        		strUrl = strUrl + encodeURIComponent(fileName) + "&file_name=" + encodeURIComponent(fileOrgName);

        	return strUrl;
        }

        /******************************************************************************************************************
         * 현재 Form 상의 fn_fileDownload 컴포넌트를 이용하여 첨부파일을 다운로드 한다.
         * @param {Object}    dsObj		      첨부파일 파일다운로드 기준 데이터셋
         * @param {Object}    dsTObj   	      로컬 파일다운로드 정보 데이터셋
         * @param {componert} fileDownload    다운로드 콤포넌트 SET
         * @example this.fn_setFileImageUpload(dsObj, dsTObj, cmpImg);
         *******************************************************************************************************************/
        this.fn_fileDownload = function(dsObj,dsTObj,fileDownload)
        {
        	dsTObj.clearData();
        	var nRow = dsTObj.addRow();
        	dsTObj.copyRow(nRow,dsObj,0);

        	var objEnv 		 = nexacro.getEnvironment();
        	var svcUrl  	 = objEnv.services["svcUrl"].url;
        	var strUrl  	 = svcUrl + "DownloadServlet.do?";
        	var full_path    = dsTObj.getColumn(0,"ATFL_STOR_PATH");
        	var sNavigatorNm = system.navigatorname;

        	var full_path 	= dsTObj.getColumn(0,"ATFL_STOR_PATH");
        	// 서버 저장 경로
        	strUrl 		   += "file_path=" + full_path;

            if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE")
        	{
        		for(var i=0; i<dsTObj.rowcount; i++)
        		{
        			var strFileOrgName 	= dsTObj.getColumn(i,"ATFL_NM");
        			var strFileName 	= dsTObj.getColumn(i,"ORI_ATFL_NM");
        			    strUrl 		    = strUrl + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);

        			fileDownload.downloadurl = strUrl;
        			fileDownload.set_downloadfilename(strFileOrgName);
        			fileDownload.show();
        			var bSucc = fileDownload.download();
        		}
        	} else
        	{
        		for(var i=0; i<dsTObj.rowcount; i++)
        		{
        			var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
        			// Create Object
        			var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
        			this.addChild(sDownID, objWebBrowser);
        			objWebBrowser.show();

        			var strFileOrgName = dsTObj.getColumn(i,"ATFL_NM");
        			var strFileName    = dsTObj.getColumn(i,"ORI_ATFL_NM");
        				strUrl         = strUrl + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);
        			objWebBrowser.set_url(strUrl);
        		}
        	}
        }

        this.fn_getDecodeString = function(source)
        {
        		var value = source;
        		value = value.replace(/\&lt\;/g, "<");
        		value = value.replace(/\&gt\;/g, ">");
        		value = value.replace(/\&quot\;/g, "\"");
        		value = value.replace(/\&apos\;/g, "'");
        		value = value.replace(/\&\#32\;/g, " ");
        		value = value.replace(/\&\#13\;/g, "\r");
        		value = value.replace(/\&\#10\;/g, "\n");
        		value = value.replace(/\&\#9\;/g, "\t");
        		value = value.replace(/\&\#92\;/g, "\\");
        		value = value.replace(/\&\#30\;/g, String.fromCharCode(30));
        		value = value.replace(/\&\#31\;/g, String.fromCharCode(31));
        		value = value.replace(/\&\#3\;/g, String.fromCharCode(3));
        		value = value.replace(/\&amp\;/g, "&");
        		return value;
        };

        /**
         * 팝업창 닫기전 이미지 & 첨부파일 가비지 데이터 삭제
         */
        this.fn_saveMultiFileDelUpdate = function(gubun)
        {
        	// 이미지 & 첨부파일 저장전 상태 0인것 체크
        	if(this.ds_saveFileList.getCaseCount("ETC_FDS_1 == 0") > 0)
        	{
        		this.ds_downLoad.clearData();
        		this.ds_saveFileList.filter("ETC_FDS_1 == 0");

        		for(var idx=0; idx<this.ds_saveFileList.getRowCount(); idx++)
        		{
        			var nRow = this.ds_downLoad.addRow();
        			this.ds_downLoad.copyRow(nRow,this.ds_saveFileList,idx);
        			this.ds_downLoad.setColumn(nRow,"ETC_FDS_2","del");
        		}

        		var strSvc      = "saveMultiFileDelUpdate";
        		var strUrl      = "/rd/file-upload-dowload/save-mult-file-del-update.do";
        		var strInDs     = "ds_saveFileList=ds_downLoad:u";
        		var strOutDs    = "";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        	}

        	this.ds_saveFileList.filter("");

        	if(this.gfn_nvl(gubun,"") != "")
        	{
        		this.close(gubun);
        	}
        }

        /**
         * RND상품권한조회(구매담당자or상품담당자) 정/부
         */
        this.fn_getRndPrdAuthInq = function(sMnfrNo,PrdClcd)
        {
        	var strSvc      = "selectRndPrdAuthInq";
        	var strUrl      = "/rd/rdCommInit/select-rnd-prd-auth-inq.do";
        	var strInDs     = "";
        	var strOutDs    = "ds_rndPrdAuth=ds_rndPrdAuth";
        	var strArg      = "MNFR_NO="   + nexacro.wrapQuote(this.gfn_nvl(sMnfrNo,""))
        	                + " PRD_CLCD=" + nexacro.wrapQuote(this.gfn_nvl(PrdClcd,""))
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
