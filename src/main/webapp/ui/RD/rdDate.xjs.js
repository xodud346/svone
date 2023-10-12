//XJS=rdDate.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
         ===============================================================================
         == 날짜(Date)관련 관련 공통함수들은 여기에 작성한다.
         ===============================================================================
         ● fn_getSvrDate : 시스템 서버날짜를 가지고 오는 함수
          /*******************************************************************************
         * Function Name  : this.gfn_getSvrDate(strFormat)
         * Description    : 포멧에 맞는 날짜를 실시간으로가기고오는 함수
         * Arguments      : String => strFormat
                          , "YYYY"              2020
        				  ,	"YYYYMMDD"          20200624
        				  ,	"KOR_YYYYMMDD"      2020.06.24 수요일
        				  ,	"YYYYMM"            202006
        				  ,	"MMDD"              0624
        				  ,	"MM"                06
        				  ,	"DD"                24
        				  ,	"MONTH_FIRST_DAY"   20200601
        				  , "MONTH_LAST_DAY"    20200630
        				  ,	"DAY_OF_WEEK"       4
        				  ,	"DAY_OF_KOR_WEEK"   수요일
                          , obj    => dataset Obj       // 받는 데이타셋
         * Return(String) : String => ret 날짜에 맞는 포멧을 가지고 리턴함.
         *******************************************************************************/

        this.fn_getSvrDate = function(strFormat)
        {
        	var	objApp = nexacro.getApplication();

        	var ret     = "";
        	var sFromat = "YYYYMMDD";
        	var ds		= objApp.gds_systemdate;
        	//trace(ds.saveXML());

        	if(this.gfn_isNull(strFormat))
        	{
        		strFormat = sFromat;

        	}else
        	{
        		if(strFormat != "MM" && strFormat != "DD" && strFormat != "MMDD" &&
        		   strFormat != "KOR_YYYYMMDD" &&  strFormat != "YYYY" && strFormat != "MONTH_LAST_DAY" &&
        		   strFormat != "DAY_OF_WEEK" && strFormat != "YYYYMMDD"  && strFormat != "MONTH_FIRST_DAY" &&
        		   strFormat != "DAY_OF_KOR_WEEK" && strFormat != "YYYYMM" )
        		{
        			strFormat = sFromat;
        		}
        	}
        	//trace(strFormat);
        	ret = ds.getColumn(0,strFormat);
        	return ret;
        };



        /*
         * 날짜 기본  fn_getDefaultDateChk 체크
         * @param {String} strFrDate - 시작일자
                  {String} strFoDate - 종료일자
        		  {String} 제목
        		  {boolean} true - 필수체크 해제
         * @return {Boolean}
         */
        this.fn_getDefaultDateChk = function (strFrDate,strFoDate,title,flag)
        {
        	if(this.gfn_isNull(flag))
        	{
        		flag = false;
        	}

        	// 시작일자 오류
        	if (!this.gfn_isNull(strFrDate.value))
        	{
        		if (!this.gfn_isDate(strFrDate.value))
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 시작날짜","information"); 				// {0} 형식이 아닙니다
        			strFrDate.setFocus();
        			return false;
        		}
        	} else
        	{
        		if(!flag)
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 시작날짜","information"); 				// {0} 형식이 아닙니다
        			strFrDate.setFocus();
        			return false;
        		}
        	}

        	// 종료일자 오류
        	if (!this.gfn_isNull(strFoDate.value))
        	{
        		if (!this.gfn_isDate(strFoDate.value))
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 종료날짜","information"); 				// {0} 형식이 아닙니다
        			strFoDate.setFocus();
        			return false;
        		}
        	}else
        	{
        		if(!flag)
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 종료날짜","information"); 				// {0} 형식이 아닙니다
        			strFoDate.setFocus();
        			return false;
        		}
        	}


            // 일자 체크
            if ((!this.gfn_isNull(strFrDate.value)) && (!this.gfn_isNull(strFoDate.value)))
        	{
        		if (strFrDate.value > strFoDate.value)
        		{
        			this.fn_alert("ERRR000175","날짜체크",title + " 시작날짜," + title + " 종료일자","information"); 	//	&1는(은) &2보다 작거나 같아야 합니다.
        			strFrDate.setFocus();
        			return false;
        		}
        	}
        	return true;

        };


        /*
         * 날짜 기본  fn_getDefaultDateChk 체크
         * @param {String} strFrDate - 시작일자
                  {String} strFoDate - 종료일자
        		  {String} 제목
        		  {boolean} true - 필수체크 해제
         * @return {Boolean}
         */
        this.fn_getDefaultDateTimeChk = function (strFrDate,strFoDate,title,flag)
        {
        	if(this.gfn_isNull(flag))
        	{
        		flag = false;
        	}

        	// 시작일자 오류
        	if (!this.gfn_isNull(strFrDate.value))
        	{
        		if (!this.gfn_isDate(strFrDate.value.substr(0,8)))
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 시작날짜","information"); 				// {0} 형식이 아닙니다
        			strFrDate.setFocus();
        			return false;
        		}
        	} else
        	{
        		if(!flag)
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 시작날짜","information"); 				// {0} 형식이 아닙니다
        			strFrDate.setFocus();
        			return false;
        		}
        	}

        	// 종료일자 오류
        	if (!this.gfn_isNull(strFoDate.value))
        	{
        		if (!this.gfn_isDate(strFoDate.value.substr(0,8)))
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 종료날짜","information"); 				// {0} 형식이 아닙니다
        			strFoDate.setFocus();
        			return false;
        		}
        	}else
        	{
        		if(!flag)
        		{
        			this.fn_alert("ERRR000173","날짜체크",title + " 종료날짜","information"); 				// {0} 형식이 아닙니다
        			strFoDate.setFocus();
        			return false;
        		}
        	}

            // 일자 체크
            if ((!this.gfn_isNull(strFrDate.value)) && (!this.gfn_isNull(strFoDate.value)))
        	{
        		if (strFrDate.value.substr(0,8) > strFoDate.value.substr(0,8))
        		{
        			this.fn_alert("ERRR000175","날짜체크",title + " 시작날짜," + title + " 종료일자","information"); 	//	&1는(은) &2보다 작거나 같아야 합니다.
        			strFrDate.setFocus();
        			return false;
        		}
        	}
        	return true;

        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
