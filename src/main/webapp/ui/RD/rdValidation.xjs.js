//XJS=rdValidation.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == Validation관련 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● fn_cmmnChkEssentialItem : 필수 항목을 입력했는지 체크함수.
         ● fn_componentsSetFocuse  : 필수 항목 체크시 포커스 처리및 메시지 처리(일반컴포넌트)
         ● fn_getXpName            : 그리드 항목체크시 경로를 이름 넘겨주는 함수
         ● fn_gridCellSetFocuse    : 필수 항목 체크시 포커스 처리및 메시지 처리(그리드)
         */

         /**************************************************************************************************************************
         * Function Name: fn_cmmnChkEssentialItem(dsObj, sCol, sColNm,objGrid,bFlag,forObject)  bFlag= ture:Grid,false:입력object
         * Description  : 필수 항목을 입력했는지 체크함수.
         * Arguments    : dsObj 		=> dataset(bind한 데이타셋                       예)  this.dsMaster
        				  sCol 	    	=> bind한 컬럼을 String으로                      예) "formPath$formId$formNm"
        				  sColNm 		=> 메세지 처리시 String으로                      예) "경로$화면아이디$화면이름";
        				  grdObj 		=> 일반컴포넌트 "",그리드이면 this.grdMaster    예) this.grdMaster or ""
        				  focusFlg 		=> 컴포넌트 유무                                 예) grid:true and 일반컴포넌트:false
        				  mainCmtsObj 	=> 검색할 범위의 컴포넌트                       예) 보통은:this 그외에는 this.div
        				  flag          => true or false
         * Return       : retMsg(array [0] 메세지, [1] row, [2] 칼럼) array(배열)
         *****************************************************************************************************************************/
        this.fn_cmmnChkEssentialItem = function (dsObj, sCol, sColNm, grdObj, focusFlg, mainCmtsObj,flag)
        {
        	var retMsg 		= new Array();
        	    retMsg[0] 	= "success";
        	    retMsg[1] 	= "";
        	    retMsg[2] 	= "";

        	var sObj 		= sCol.split("$");
        	var sColObj 	= sColNm.split("$");
        	var iCount 		= sObj.length;

        	if(this.gfn_isNull(flag))
        	{
        		flag = false;
        	}

        	for(var idx01 = 0; idx01 < dsObj.rowcount; idx01++)
        	{
        		if(!flag)
        		{
        			if(dsObj.getRowType(idx01) == 1)
        			{
        				continue;
        			}
        		}

        		for (var idx02 = 0; idx02 < iCount; idx02++)
        		{
        			var strObj 		= dsObj.getColumn(idx01, sObj[idx02]);
        			var strTempObj 	= this.fn_trim(strObj);

        			if (strTempObj.length == 0)
        			{

        				/*
        				retMsg[0] =  " 필수입력항목 '" + sColObj[idx02] + "'을(를) " + "입력 하지 않으셨습니다. \n\n" +
        				             " 입력하신 후 저장 해 주시길 바랍니다.";
        				*/
        				retMsg[0] = this.fn_getMessage("ERRS000144", sColObj[idx02]);
        				retMsg[1] = idx01;
        				retMsg[2] = sObj[idx02];
        				dsObj.set_rowposition(idx01);

        				if (focusFlg)
        				{
        					if(!this.gfn_isNull(grdObj))
        					{	// 그리드를 처리할시
        						this.fn_gridCellSetFocuse(grdObj, sObj[idx02]);
        					}
        				} else
        				{	// 일반 오브젝트를 처리할시
        					this.fn_componentsSetFocuse(dsObj, mainCmtsObj, sObj[idx02]);
        				}
        				return retMsg;
        			}
        		}
        	}
        	return retMsg;
        };

         /**************************************************************************************************************************
         * Function Name: fn_componentsSetFocuse(dsObj, mainCmtsObj, sColsID)
         * Description  : 필수 항목 체크시 포커스 처리및 메시지 처리(GRID)
         * Arguments    : dsObj   => dataset(bind한 데이타셋                        예)  this.dsMaster
              sCol       => 현재 form-this                            예) this
              sColNm   =>  포커스를 맞출 컬럼ID (Dataset의 ColumnName ) 예) "formPath$formId$formNm"
         * Return       : N/A
         *****************************************************************************************************************************/
        this.fn_componentsSetFocuse = function (dsObj, mainCmtsObj, sColsID)
        {
        	try
        	{
        		var sType;
        		var objBrack  = 0;
        		var objAll   = mainCmtsObj.components;

        		var nLength  = objAll.length;

        		for(var i = 0; i < nLength; i++)
        		{

        			sType = objAll[i];

        			if (sType instanceof nexacro.Edit || sType instanceof nexacro.TextArea || sType instanceof nexacro.Calendar || sType instanceof nexacro.CheckBox ||
        			    sType instanceof nexacro.MaskEdit ||sType instanceof nexacro.Combo || sType instanceof nexacro.Radio)
        			{

        				for (var k = 0; k < this.binds.length; k++)
        				{
        					if ((dsObj.name == this.binds[k].datasetid) && (sColsID == this.binds[k].columnid) && (this.fn_getXpName(sType, this) == this.binds[k].compid) )
        					{
        						objBrack = 1;
        						break;
        					}
        				}
        				if (objBrack == 1)
        				{
        					trace("sType >> " + sType);
        					sType.setFocus();
        					break;
        				}

        			}

        			if (sType instanceof nexacro.Div || sType instanceof nexacro.PopupDiv)
        			{
        				this.fn_componentsSetFocuse(dsObj, sType.form, sColsID);  //재귀함수

        			}else if (sType instanceof nexacro.Tab)
        			{
        				var nPages = sType.tabpages.length;
        				for (var j=0; j<nPages;j++)
        				{
        					this.fn_componentsSetFocuse(dsObj, sType.tabpages[j].form, sColsID);  //재귀함수
        				}

        			}

        		}

        	} catch (e)
        	{
        		trace(e.name + e.message);
        	}
        };
         /**************************************************************************************************************************
         * Function Name: fn_getXpName(grObj, sColsID)
         * Description  : 그리드 항목체크시 경로를 이름 넘겨주는 함수
         * Arguments    : obj 		=> Obj
        				  refParent => 포커스를 맞출 컬럼ID (Dataset의 ColumnName )
         * Return       : N/A
         *****************************************************************************************************************************/
        this.fn_getXpName = function(obj, refParent)
        {
        	var c 	= obj;
        	var arr	= [];
        	while ( c )
        	{
        		if ( c instanceof ChildFrame )
        		{
        			break;
        		}
        		if ( refParent && c === refParent )
        		{
        			break;
        		}
        		arr.push(c.name);
        		c = c.parent;
        	}
        	arr = arr.reverse();

        	return arr.join(".");
        };

         /**************************************************************************************************************************
         * Function Name: fn_componentsSetFocuse(grObj, sColsID)
         * Description  : 필수 항목 체크시 포커스 처리(일반컴포넌트)
         * Arguments    : grObj 		=> 그리드 Obj
        				  sColsID 	   	=> 포커스를 맞출 컬럼ID (Dataset의 ColumnName )
         * Return       : N/A
         *****************************************************************************************************************************/
        this.fn_gridCellSetFocuse = function (grObj, sColsID)
        {
        	var colsLength = grObj.getCellCount("Head");

        	for (var i = 0; i < colsLength; i++)
        	{
        		if(this.gfn_isNull(grObj.getCellProperty("body", i, "text")))
        		{
        			continue;
        		}

        		if ((((grObj.getCellProperty("body", i, "text")).toString().split(":"))[1]).toLowerCase() == sColsID.toLowerCase())
        		{
        			grObj.setCellPos(i);
        			grObj.showEditor();
        			return false;
        		}
        	}
        };

         /**************************************************************************************************************************
         * Function Name: fn_getXpName(grObj, sColsID)
         * Description  : 그리드 항목체크시 경로를 이름 넘겨주는 함수
         * Arguments    : obj 		=> Obj
        				  refParent => 포커스를 맞출 컬럼ID (Dataset의 ColumnName )
         * Return       : N/A
         *****************************************************************************************************************************/
        this.fn_getXpName = function(obj, refParent)
        {
        	var c 	= obj;
        	var arr	= [];
        	while ( c )
        	{
        		if ( c instanceof ChildFrame )
        		{
        			break;
        		}
        		if ( refParent && c === refParent )
        		{
        			break;
        		}
        		arr.push(c.name);
        		c = c.parent;
        	}
        	arr = arr.reverse();

        	return arr.join(".");
        };

        /**********************************************************************************
         * Function Name: fn_trim
         * Description  : 입력받은 문자열의 공백을 제거한다.
         * Arguments    : strText  : 원래문자열
         * Return       : 공백이 제거된 문자열
         **********************************************************************************/
        this.fn_trim = function(strText)
        {
        	if (strText == null) return "";
        	if (new String(strText).valueOf() == "undefined") return "";
        	if (new String(strText) == null) return "";

            var retVal = (new String(strText)).replace(/^\s+|\s+$/g, '');
            return retVal;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
