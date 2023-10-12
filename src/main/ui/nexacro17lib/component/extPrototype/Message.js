
var pForm = nexacro.Form.prototype;

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} aArgument - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example
 * this.gfnAlert(this, "A", "확인하세요");	
 */
pForm.gfn_alert = function (sMsgId, aArgument, sPopId, sCallback)
{
    var oApp =  nexacro.getApplication();
	if(oApp.gds_message.findRow("MSG_ID", sMsgId) < 0){
		return false;
	}

	var sColumn  = "MSG_TXT";
	
	var sMsg = oApp.gds_message.lookup("MSG_ID", sMsgId, sColumn);
	if( this.gfn_isNull(sMsg) ){
		sMsg = "확인";
	}
	
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfn_convertMessage(sMsg, aArgument);
	
	var sMsgType = oApp.gds_message.lookup("MSG_ID", sMsgId, "MSG_TYPE");	
	if( this.gfn_isNull(sPopId) ){
		sPopId = sMsgId;
	}

	var sMsgUrl ="";
	switch(sMsgType) {
		case "A":
			sMsgUrl = "COMM::cmmAlert.xfdl";
			break;
		case "C":
			sMsgUrl = "COMM::cmmConfirm.xfdl";
			if(this.gfn_isNull(sCallback)){
				trace("callback함수를 지정하지 않았습니다");
			}
			break;
	}
	
	var oArg = {paramContents:sMsg};
	var oOption = {titlebar:"false"};	
	
	this.gfn_openPopup(sPopId,sMsgUrl,oArg,sCallback,oOption);
};



pForm.gfn_alert_null = function (sMsgId, aArgument, sPopId, nullValue, sMsgType, sCallback) {
	var oApp =  nexacro.getApplication();

	var sColumn  = "MSG_TXT";
	var sMsg = "";
	
	if(oApp.gds_message.findRow("MSG_ID", sMsgId) < 0){
		sMsg = nullValue;
	} else {
		sMsg = oApp.gds_message.lookup("MSG_ID", sMsgId, sColumn);
		if( this.gfn_isNull(sMsg) ){
			sMsg = "확인";
		}
	}
	
	
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfn_convertMessage(sMsg, aArgument);
	
	if( this.gfn_isNull(sPopId) ){
		sPopId = sMsgId;
	}

	var sMsgUrl ="";
	switch(sMsgType) {
		case "A":
			sMsgUrl = "COMM::cmmAlert.xfdl";
			break;
		case "C":
			sMsgUrl = "COMM::cmmConfirm.xfdl";
			if(this.gfn_isNull(sCallback)){
				trace("callback함수를 지정하지 않았습니다");
			}
			break;
	}
	
	var oArg = {paramContents:sMsg};
	var oOption = {titlebar:"false"};	
	
	this.gfn_openPopup(sPopId,sMsgUrl,oArg,sCallback,oOption);
}

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfn_convertMessage = function(msg, values) 
{
    if(!values) {
		return msg;
	} else {
		return msg.replace(/&(\d+)/g, function() { return values[arguments[1]-1]; });
	}
};

/**
 * @class 메세지 치환 후 완성된 메시지 리턴
 * @param {String} sMsgId - 메세지ID	
 * @param {Array}  aArgument - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfn_getMessage = function(sMsgId, aArgument) 
{
    var oApp =  nexacro.getApplication();
	if(oApp.gds_message.findRow("MSG_CD", sMsgId) < 0){
		return false;
	}
	var sColumn  = "MSG_CTS";
	var sMsg = oApp.gds_message.lookup("MSG_CD", sMsgId, sColumn);

	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfn_convertMessage(sMsg, aArgument);
	
	return sMsg;
};

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} aArgument - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example
 * this.gfn_popMessage("CCMS000009", ["데이터"]);                       <= alert    // "&1을(를) 입력해 주세요" => 데이터을(를) 입력해 주세요"
 * this.gfn_popMessage("CCMS000046");                                   <= alert    // "사유를 입력해 주세요."  => 사유를 입력해 주세요."
 * this.gfn_popMessage("ERRR000168", ["데이터"], "id", "fn_Callback");  <= confirm  // "&1를 출력하시겠습니까?" => 데이터를 출력하시겠습니까?"
 * this.gfn_popMessage("ERRS000278", null      , "id", "fn_Callback");  <= confirm  // "선택된 항목을 반려 하시겠습니까?" => 선택된 항목을 반려 하시겠습니까?"
 */
pForm.gfn_popMessage = function (sMsgId, aArgument, sPopId, sCallback)
{
	var sMsg = pForm.gfn_getMessage(sMsgId, aArgument) || sMsgId;
	if(sPopId) {
	    var bRtn = pForm.confirm(sMsg, "확인");
		if(sCallback) {
			this.lookupFunc(sCallback).call(sPopId, bRtn);
		}
	} else {
		pForm.alert(sMsg, "안내");
	}
};
