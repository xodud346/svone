//XJS=rdMsg.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == 폼과 관련된 공통함수들은 여기에 작성한다.
         ===============================================================================
         -
        */

        /********************************************************************************
         * Function Name: fn_alert
         * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
         *				  생성해서 해당 값을 보여주는 함수
         * Arguments	: strMsgId(MessageId)
         *				  strMsgType(메세지 종류 : ERR, WARN, INFO)//런타이모듈에서만 가능함
         *				  msgArr[](메세지값으로 치환될 Parameter Array)
         * Return 		: 팝업에 해당 메세지값을 표현
         ********************************************************************************/
        this.fn_alert = function (strMsgId,strMsgTitle,msgArr,strMsgType)
        {
        	if (this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "information";
        	}
        	var msgParam;

        	if(!this.gfn_isNull(msgArr))
        	{
        		msgParam = msgArr.split(",");
        	}
        	var strMsgParam1 = "";
        	var strMsgParam2 = "";
        	var strMsgParam3 = "";
        	var strMsgParam4 = "";
        	var strMsgParam5 = "";
        	var strMsgParam6 = "";

        	if(this.gfn_isNull(msgParam) != true)
        	{

        		for(var i = 0; i < msgParam.length; i++)
        		{
        			if(i==0)
        			{
        				strMsgParam1 = this.fn_getComponent(msgParam[0]);

        			}else if(i==1)
        			{
        				strMsgParam2 = this.fn_getComponent(msgParam[1]);
        			}else if(i==2)
        			{
        				strMsgParam3 = this.fn_getComponent(msgParam[2]);
        			}else if(i==3)
        			{
        				strMsgParam4 = this.fn_getComponent(msgParam[3]);
        			}else if(i==4)
        			{
        				strMsgParam5 = this.fn_getComponent(msgParam[4]);
        			}else if(i==5)
        			{
        				strMsgParam6 = this.fn_getComponent(msgParam[5]);
        			}
        		}
        	}
        	var strMsg = this.fn_getMessage(strMsgId, strMsgParam1,strMsgParam2,strMsgParam3,strMsgParam4,strMsgParam5,strMsgParam6);
        	return this.alert(strMsg, strMsgTitle, strMsgType);
        };

        /********************************************************************************
         * Function Name	: fn_getMessage												*
         * Desc				: 메세지 코드에 따른 실제 메세지값을 반환				*
         * Parameter		: code(MessageId)											*
         *					  strMsgParam[](메세지값으로 치환될 Parameter Array)		*
         * Return 			: 등록된 MessageId에 해당하는 실제 메세지값				*
         *					  등록된 MessageId가 없을 경우 code를 그대로 반환		*
         ********************************************************************************/
        this.fn_getMessage = function (code, strMsgParam1, strMsgParam2, strMsgParam3, strMsgParam4, strMsgParam5, strMsgParam6)
        {
        	code = code.trim();
        	var value = '';
        	for (var i = 0; i <= nexacro.getApplication().gds_message.rowcount; i++)
        	{
        		var msgCol = nexacro.getApplication().gds_message.getColumn(i, "MSG_CD");

        		if(msgCol == code)
        		{
        			value = nexacro.getApplication().gds_message.getColumn(i, "MSG_CTS");
        			break;
        		}
        	}

        	if (this.gfn_isNull(value))
        	{
        		// trace("["+code+"] 해당 메시지 코드가 등록되지 않았습니다.");
        		value = code;
        		if (!this.gfn_isNull(strMsgParam1))
        		{
        			value = value.split("&1").join(strMsgParam1);
        		}
        		if (!this.gfn_isNull(strMsgParam2))
        		{
        			value = value.split("&2").join(strMsgParam2);
        		}
        		if (!this.gfn_isNull(strMsgParam3))
        		{
        			value = value.split("&3").join(strMsgParam3);
        		}
        		if (!this.gfn_isNull(strMsgParam4))
        		{
        			value = value.split("&4").join(strMsgParam4);
        		}
        		if (!this.gfn_isNull(strMsgParam5))
        		{
        			value = value.split("&5").join(strMsgParam5);
        		}
        		if (!this.gfn_isNull(strMsgParam6))
        		{
        			value = value.split("&6").join(strMsgParam6);
        		}
        	}else
        	{

        		if (!this.gfn_isNull(strMsgParam1))
        		{
        			value = value.split("&1").join(strMsgParam1);
        		}
        		if (!this.gfn_isNull(strMsgParam2))
        		{
        			value = value.split("&2").join(strMsgParam2);
        		}
        		if (!this.gfn_isNull(strMsgParam3))
        		{
        			value = value.split("&3").join(strMsgParam3);
        		}
        		if (!this.gfn_isNull(strMsgParam4))
        		{
        			value = value.split("&4").join(strMsgParam4);
        		}
        		if (!this.gfn_isNull(strMsgParam5))
        		{
        			value = value.split("&5").join(strMsgParam5);
        		}
        		if (!this.gfn_isNull(strMsgParam6))
        		{
        			value = value.split("&6").join(strMsgParam6);
        		}
        	}

        	return value;
        };

        /********************************************************************************
         * Function Name: fn_confirm
         * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
         *				  생성해서 해당 값을 보여주는 함수
         * Arguments	: strMsgId(MessageId)
         *				  strMsgType(메세지 종류 : ERR, WARN, INFO)//런타이모듈에서만 가능함
         *				  msgArr[](메세지값으로 치환될 Parameter Array)
         * Return 		: 팝업에 해당 메세지값을 표현
         ********************************************************************************/
        this.fn_confirm = function (strMsgId,strMsgTitle,msgArr,strMsgType)
        {
        	if(this.gfn_isNull(strMsgType))
        	{
        		strMsgType = "information";
        	}
        	var msgParam;

        	if(!this.gfn_isNull(msgArr))
        	{
        		msgParam = msgArr.split(",");
        	}
        	var strMsgParam1 = "";
        	var strMsgParam2 = "";
        	var strMsgParam3 = "";
        	var strMsgParam4 = "";
        	var strMsgParam5 = "";
        	var strMsgParam6 = "";

        	if(this.gfn_isNull(msgParam) != true)
        	{
        		for(var i = 0; i < msgParam.length; i++)
        		{
        			if(i==0)
        			{
        				strMsgParam1 = this.fn_getComponent(msgParam[0]);

        			}else if(i==1)
        			{
        				strMsgParam2 = this.fn_getComponent(msgParam[1]);

        			}else if(i==2)
        			{
        				strMsgParam3 = this.fn_getComponent(msgParam[2]);

        			}else if(i==3)
        			{
        				strMsgParam4 = this.fn_getComponent(msgParam[3]);

        			}else if(i==4)
        			{
        				strMsgParam5 = this.fn_getComponent(msgParam[4]);

        			}else if(i==5)
        			{
        				strMsgParam6 = this.fn_getComponent(msgParam[5]);
        			}

        		}
        	}

        	var strMsg = this.fn_getMessage(strMsgId, strMsgParam1,strMsgParam2,strMsgParam3,strMsgParam4,strMsgParam5,strMsgParam6);

        	return this.confirm(strMsg, strMsgTitle, strMsgType);;

        };

        /**********************************************************************************
         * Function Name: fn_getComponent()
         * Description  : 컴포넌트 코드에 따른 실제 컴포넌트의 값을 반환
         * Arguments    : 등록된 컴포넌트 코드값
         * Return       : 등록된 컴포넌트 해당하는 실제 컴포넌트값
                          등록된 컴포넌트 값일 없을 경우는 CODE를 그대로 반환
         **********************************************************************************/
        this.fn_getComponent = function(code)
        {
        	code = this.gfn_trim(code);
        	var value = '';
        	/*
        	for (var i = 0; i < objApp.gds_Component.rowcount; i++)
        	{
        		var copCol = objApp.gds_Component.getColumn(i, "COP_CODE");

        		if(copCol == code)
        		{
        			value = objApp.gds_Component.getColumn(i, "COP_NAME");
        			break;
        		}
        	}
        	*/
        	if (this.gfn_isNull(value))
        	{
        		// trace("["+code+"] 해당 메시지 코드가 등록되지 않았습니다.");
        		return code;
        	}
        	return value;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
