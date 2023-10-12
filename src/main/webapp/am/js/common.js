$.ajaxSetup ({
	// Disable caching of AJAX responses */
	cache: false
});

jQuery.fn.serializeObject = function() {
	var obj = null;
	try {
		if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
			var arr = this.serializeArray();
			if (arr) {
				obj = {};
				jQuery.each(arr, function() {
					obj[this.name] = this.value;
				});
			}//if ( arr ) {
		}
	} catch (e) {
		alert(e.message);
	} finally {
	}

	return obj;
};

/**
 * Debug Log
 */
if (!window.console) {
	var Console = function() {
		return {
			log: function(message) { },
			info: function(message) { },
			warn: function(message) { },
			error: function(message) { }
		};
	};
	console = Console();
}
/*
 * 메뉴 Link
 * */
function goMenuLink(menuCode, link){
	$("#selectMenuCode").val(menuCode);
	$("#frmMainLayout").attr("action", link).submit();
}
/*
 * 현재 메뉴 코드 조회
 * */
function getSelectMenuCode(){
	return $("#selectMenuCode").val();
}
/*
 * 전송시 공통 처리
 * */
function setSubmit(obj){
	var selectMenuCode = getSelectMenuCode();
	if (selectMenuCode == undefined || selectMenuCode == "undefined"){
		selectMenuCode = "001000000";
	}
	obj.find("input[name='selectMenuCode']").remove();
	obj.append("<input type='hidden' id='selectMenuCode' name='selectMenuCode' value='"+selectMenuCode+"' />");
	return false;
}

// 공통 Ready
$(document).ready(function(){
	$("form").on("submit", function(){
		setSubmit($(this));
	});

	//숫자만 입력
	$(".number").keyup(function(event){
		if (!(event.keyCode >=37 && event.keyCode<=40)) {
			var $this = $(this);
			$this.val($this.val().replace(/[^0-9]/g,''));
		}
	});

	//숫자만 입력
	$(".onlyNumber").keyup(function(event){
		if (!(event.keyCode >=37 && event.keyCode<=40)) {
			var $this = $(this);
			$this.val($this.val().replace(/[^0-9]/g,''));
		}
	});
});

/*
 * 날짜보기
 * strDate : 날짜(YYYYMMDD)
 * str : 구분자
 * */
function getDateView(strDate, str){
	strDate = strDate.replace(/\-/g, "");
	return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8);
}
/*
 * 날짜보기
 * strDate : 날짜(YYYYMMDD HHMMSS)
 * str : 날짜 구분자
 * str2 : 시간 구분자
 * */
function getDateTimeView(strDate, str, str2){
	strDate = strDate.replace(/\-/g, "");
	return strDate.substring(0, 4) + str + strDate.substring(4, 6) + str + strDate.substring(6, 8) + " " + strDate.substring(8, 10) + str2 + strDate.substring(10, 12) + str2 + strDate.substring(12, 14);
}

//날짜 셋팅 - 초기화
function fnDateReset(v_start_name, v_end_name){
	$("#"+v_start_name  ).val("");
	$("#"+v_end_name    ).val("");
}

// 날짜 셋팅 - 오늘, 일주일, 15일, 한달, 두달
function fnDateSet(v_start_name, v_end_name, s_year, s_month, s_day, e_year, e_month, e_day, seperator){
	$("#"+v_start_name  ).val(getCalculatedDate(s_year, s_month, s_day, seperator));
	$("#"+v_end_name    ).val(getCalculatedDate(e_year, e_month, e_day, seperator));
}
function getCalculatedDate(iYear, iMonth, iDay, seperator){
	//현재 날짜 객체를 얻어옴.
	var gdCurDate = new Date();

	//현재 날짜에 날짜 게산.
	gdCurDate.setYear ( gdCurDate.getFullYear() + iYear );
	gdCurDate.setMonth( gdCurDate.getMonth()    + iMonth);
	gdCurDate.setDate ( gdCurDate.getDate()     + iDay  );

	//실제 사용할 연, 월, 일 변수 받기.
	var giYear  = gdCurDate.getFullYear();
	var giMonth = gdCurDate.getMonth()+1;
	var giDay   = gdCurDate.getDate();

	//월, 일의 자릿수를 2자리로 맞춘다.
	giMonth = "0" + giMonth;
	giMonth = giMonth.substring(giMonth.length-2,giMonth.length);
	giDay   = "0" + giDay;
	giDay   = giDay.substring(giDay.length-2,giDay.length);

	//display 형태 맞추기.
	return giYear + seperator + giMonth + seperator +  giDay;
}

/**
 * 글자제한
 * onkeyup="getStrByte(this,'#byte', 200, 3);"
 *
 * focus 원치 않는 경우에만 noFocusYn 파라미터를 추가해준다.
 * (ex: 화면 초기 로딩시 textarea byte수 보여줘야 하는 경우)
 * getStrByte(this,'#byte', 200, 3, 'Y');
 */
function getStrByte(obj, tgt, size, korSize, noFocusYn) {
	var korByte = korSize != undefined && korSize != "" ? parseInt(korSize, 10) : 3; //한글 바이트 (기본값 3)

	var str = obj.value;
	var str_max = size;
	var p = 0;
	var bytes = 0;
	var len_num = 0;
	var str2 = "";

	if(str != ""){
		for(p=0; p<str.length; p++) {
			(str.charCodeAt(p) > 255) ? bytes+=korByte : bytes++; //한글은 korByte, 영문, 숫자, 공백은 1byte
			if(bytes <= str_max){
				len_num = p + 1;
			}else{
				alert(size + " byte를 초과 입력할수 없습니다.\n초과된 내용은 자동으로 삭제 됩니다.");
				str2 = str.substr(0, len_num);
				obj.value = str2;
				break;
			}
			$(tgt).text(bytes);
		}
	}else{
		$(tgt).text("0");
	}

	if(noFocusYn == undefined || noFocusYn != "Y"){
		obj.focus();
	}
}
/**
 * input [text] 글자수 제한 체크
 * @param {Element} obj 대상Element
 * @param {Integer} maxByte 최대길이(Byte)
 */
function checkByte(obj, maxByte){
	if(maxByte == undefined) maxByte = 40;
	const textVal = obj.value;
	const textLen = textVal.length;
	var textTmp = '';

	let totalByte = 0;

	for(let i = 0; i < textLen; i++){
		const eachChar = textVal.charAt(i);
		const uniChar = escape(eachChar);
		if(uniChar.length > 4){
			totalByte += 2;
		}else{
			totalByte += 1;
		}
		if(totalByte <= maxByte) {
			textTmp += eachChar;
		}
	}

	if(totalByte > maxByte){
		$(obj).val(textTmp);
	}else{
		$(obj).next("span.nowByte").html("(" + totalByte);
	}
}
var fCnt = 0;



/**
 * input [text] 글자수 제한 초과시 줄내림
 * @param {Element} obj 대상Element
 * @param {Integer} maxByte 최대길이(Byte)
 */
function addEnter(obj, maxByte) {
  

	var strValue = obj;
	var strLen = strValue.length;
	var totalByte = 0;
	var len = 0;
      var len1= 0;
	var oneChar = "";
	var str2 = "";
      var chkFirst=0;
      


      for (var i = 0; i < strLen; i++) {
		oneChar = strValue.charAt(i);
          
		if (escape(oneChar).length > 4) {
			totalByte += 2;
		} else {
			totalByte++;
		}

		// 입력한 문자 길이보다 넘치면 잘라내기 위해 저장
		if (totalByte <= maxByte) {
			len = i + 1;
		}else{
              if(chkFirst == 0)
              {
                  str2 = strValue.substr(len1,len-len1);
                  chkFirst = 1
              }else{
                  str2 = str2 +"\n"+strValue.substr(len1,len-len1);
              }
              
              len1 = len;
              len = i + 1;
              
              if (escape(oneChar).length > 4) {
                  totalByte = 2;
              } else {
                  totalByte = 1;
              }
          }
	}
      
      if (totalByte <= maxByte) {
        str2 = str2 +"\n"+strValue.substr(len1,len-len1);
      }
      return str2;
}

/**
 * fileUpload TAG 관련 function
 * @param {Element} obj 대상Element
 * @param {Integer} fileSizeLimit 파일최대Size
 * @param {Integer} fileCountLimit 파일최대수량
 */
function checkFileUpload(obj, fileSizeLimit, fileCountLimit){
	var $targetFrm = $(obj).closest('form');
	var fData = $(obj)[0].files;
	var fileView = $(obj).data('view');
	var fileType = $(obj).data('type');
	var targetFileCts = $(obj).data('targetFileCts');
	if(fileView == null && fileView == ''){
		$(obj).val("");
		return;
	}
	var oLen = $targetFrm.find("."+fileView+" ul li").length;
	var nLen = fData.length;
	if((oLen + nLen) > fileCountLimit){
		alert("첨부파일 수량이 초과되었습니다.");
		$(obj).val("");
		return false;
	}
	var sizeFlag = false;
	Array.from(fData).forEach(function(data, idx){
		if(data.size > (fileSizeLimit*1024*1024)){
			sizeFlag = true;
		}
	});
	if(sizeFlag){
		alert("첨부파일 용량이 초과되었습니다.");
		$(obj).val("");
		return false;
	}
	Array.from(fData).forEach(function(data, idx){
		var po = '';
		var fSize = (data.size / 1024).toFixed(2);
		var fId = 'file['+fCnt+']';
		po += '<li data-file-sn="">';
		po += '	<i class="icon-file"></i>';
		po += '	<span>'+data.name+'</span>';
		po += '	<input type="file" name="files" id="'+fId+'" class="hidden" />';
		po += '	<input type="hidden" name="fileSeq" value="" />';
		if (targetFileCts != null && targetFileCts != '') {
			po += '	<input type="hidden" name="targetFileCts" value="'+targetFileCts+'" />';
		}
		po += '	<input type="hidden" name="fileCdId" value="'+fileType+'" />';
		po += '	<span class="pull-right">'+fSize+'KB <a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a></span>';
		po += '</li>';
		$targetFrm.find("."+fileView+" ul").append(po);
		var dataTransfer = new DataTransfer();
		dataTransfer.items.add(data);
		document.getElementById(fId).files = dataTransfer.files;
		fCnt++;
	});
	$(obj).val("");
};

/**
 * fileUpload TAG 관련 function - Ajax호출을 통한 파일리스트 획득시 화면 그리기
 * @param {String} form 대상 Form ID
 * @param {String} view 대상 fileView
 * @param {ArrayList} data 저장된 상세 파일 리스트
 */
function filePrint(form, view, data) {
	var $targetFrm = $("#"+form);
	var fileView = view;
	var po = '';
	data.forEach(function(file, index){
		po += '<li data-file-seq="'+file.fileSeq+'">';
		po += '	<i class="icon-file"></i>';
		po += '	<span class="file-list-title">'+file.orignlFileNm;
		Object.keys(file).forEach(function(v){
			po += '	<input type="hidden" name="'+v+'" value="'+file[v]+'"/>';
		});
		po += '	</span>';
		po += '	<span class="pull-right">'+(file.fileSz / 1024).toFixed(2)+'KB ';
		po += '		<a href="javascript:void(0);" onclick="fileDelete(this);"><span class="warning">삭제</span></a>';
		po += '	</span>';
		po += '</li>';
	});
	$targetFrm.find("."+fileView+" ul").html(po);
}

/**
 * fileUpload TAG 관련 function - 파일삭제 Click 이벤트
 * @param {Element} obj 대상Element
 */
function fileDelete(obj){
	var $target = $(obj).closest('li');
	var $targetFrm = $(obj).closest('form');
	var $delFileSeq = $targetFrm.find('input[name=delFileSeq]');

	// 삭제대상 파일ID 등록
	var delFileSeq = $target.data('fileSeq');
	if(delFileSeq != null && delFileSeq != ''){
		var fileSeq = $delFileSeq.val();
		if(fileSeq != ''){
			fileSeq += ',';
		}
		fileSeq += delFileSeq;
		$delFileSeq.val(fileSeq);
	}
	// 파일리스트 삭제
	$target.remove();
};

/**
 * fileUpload TAG 관련 function - 파일다운로드 Click 이벤트
 * @param {Element} obj 대상Element
 */
function fileDownload(obj){
	var _this = $(obj);

	var form = $("<form>").attr({
		action : "/am/common/commonFileDownload.do",
		target : "_self",
		method : "post",
		enctype : "application/x-www-form-urlencoded; charset=utf-8",
	});
	var inputs = _this.find("input:hidden");
	for(var i=0; i<inputs.length; i++){
		$('<input>').attr({
			type : "hidden",
			name : $(inputs[i]).attr("name"),
			value : $(inputs[i]).val(),
		}).appendTo(form);
	}
	form.appendTo(document.body);
	form.submit();
	form.remove();
}

/**
 * 가격숫자만 입력가능체크 및 콤마
 * @param obj
 * @param fLen
 * @returns {Boolean}
 */
function addComma(obj,fLen)
{
	if(event.keyCode == 37 || event.keyCode == 39 )
	{
		return;
	}
	var fLen = fLen || 2;
	var strValue = obj.value.replace(/,|\s+/g,'');
	var strBeforeValue = (strValue.indexOf('.') != -1)? strValue.substring(0,strValue.indexOf('.')) :strValue ;
	var strAfterValue  = (strValue.indexOf('.') != -1)? strValue.substr(strValue.indexOf('.'),fLen+1) : '' ;
	if(isNaN(strValue))
	{
		alert('숫자만 입력가능합니다.');
		obj.value = "";
		return false;
	}
	var intLast =  strBeforeValue.length-1;
	var arrValue = new Array;
	var strComma = '';

	for(var i=intLast,j=0; i >= 0; i--,j++)
	{

		if( j !=0 && j%3 == 0)
		{
			strComma = ',';
		}
		else
		{
			strComma = '';
		}
		arrValue[arrValue.length] = strBeforeValue.charAt(i) + strComma  ;
	}
	obj.value=  arrValue.reverse().join('') +  strAfterValue;
}
/**
 * 콤마 만들기
 * @param x
 * @returns
 */
function setComma(x){
	var pattern = /(^[+-]?\d+)(\d{3})/;
	x += '';
	while (pattern.test(x)){
		x = x.replace(pattern, '$1' + ',' + '$2');
	}
	return x;
}
/**
 * 콤마제거
 * @param val
 * @returns
 */
function removeComma(val) {
	//console.log("val " + val);
	if (val == "" || val == undefined){
		val ="";

	}
	//self.focus();
	return val.split(",").join("");
}

//콤마제거후 숫자리턴
function getInt(val) {

	if (val == "" || val == undefined || val == null){
		val ="0";
	}
	return val.split(",").join("");
}


/**
 * 검색폼 초기화
 * @method searchClear
 * @param {String} formId 초기화 대상 form ID
 * @param {Object} defObj 기본값
 * @return void
 */
function searchClear(formId, defObj){


	$("#"+formId).find("input[type=text]").val("");
	$("#"+formId).find("select").find("option:eq(0)").prop("selected", true);
	$("#"+formId).find(":checkbox").prop("checked", false);

	var tmpRadioNm = "";
	$.each($("#"+formId).find(":radio"),function(idx,item){
		if(tmpRadioNm != $(item).attr("name")){
			$("#"+formId).find("input[name=" + $(item).attr("name") + "]:eq(0)").prop("checked", true);
		}
		tmpRadioNm = $(item).attr("name");
	});

	// 기본값 셋업
	if (defObj != undefined && defObj != null && typeof defObj === "object") {
		console.log(defObj);
		$.each($("#"+formId).find("input[type=text], select, :radio"), function(idx, item) {
			$.each(Object.keys(defObj), function(i,v) {
				if ($(item).attr("name") == v) {
					if (item.type == "text") {
						$("#"+formId).find('input[name="'+v+'"]').val(defObj[v]);
					} else if (item.type == "select-one") {
						$("#"+formId).find('select[name="'+v+'"]').val(defObj[v]).prop("selected", true);
					} else if (item.type == "radio") {
						$("#"+formId).find('input[name="'+v+'"][value="'+defObj[v]+'"]').prop("checked", true);
					}
				}
			});
		});
	}
}

/**
 * jquery 함수
 */
(function($) {
	$.fn.extend(jQuery, {
		/**
		 * check 박스 전체 선택 해제
		 * 사용법 : $.checkBoxSelect("allSelect", "select") 전체선택 클래스, 선택 클래스
		 */
		checkBoxSelect : function(allSelect, select){
			//전체선택  이벤트 호출
			$(document).on("click", "."+allSelect, function (){
				$.checkBoxAllSelect(allSelect, select);
			});

			//개별선택 이벤트 호출
			$(document).on("click", "."+select, function (){
				$.checkBoxUnitSelect(allSelect, select);
			});

			//로딩
			if($("."+allSelect).is(":checked")){
				$.checkBoxAllSelect(allSelect, select);
			}else{
				$.checkBoxUnitSelect(allSelect, select);
			}
		},

		//전체 선택
		checkBoxAllSelect : function(allSelect, select){
			var totalCount = $("."+select).length;
			if( totalCount <= 0 ){
				$("."+allSelect).prop("checked", false);
				return;
			}
			if($("."+allSelect).is(":checked")){
				$("."+select).prop("checked", true);
			}else{
				$("."+select).prop("checked", false);
			}
		},

		//개별 선택
		checkBoxUnitSelect : function(allSelect, select){
			var checkdLength = $("."+select + ":checked").length;
			var totalCount = $("."+select).length;

			//선택된 checkbox 확인
			if(checkdLength > 0 && checkdLength == totalCount){
				$("."+allSelect).prop("checked", true);
			}else{
				$("."+allSelect).prop("checked", false);
			}
		}
	});

	/**
	 * 상품 카테고리 Select box
	 * */
	getCategoryList = function(obj, upIdx, selectIdx, serverDomain, env)
	{
		var title = "1차 카테고리";
		if(obj.indexOf("2") > -1)
		{
			title = "2차 카테고리";
		}
		if(obj.indexOf("3") > -1)
		{
			title = "3차 카테고리";
		}
		if(obj.indexOf("4") > -1)
		{
			title = "4차 카테고리";
		}
		if(obj.indexOf("5") > -1)
		{
			title = "5차 카테고리";
		}

		if(env==null || env==' ') env='P';

		$.ajax({
			type    : "POST",
			url     : serverDomain + "/am/product/subCategoryProductAjax.do",
			data    :  { "PRD_CTG_IDX":upIdx, "PRD_CTG_ENV":env},
			dataType : "JSON",
			async   : false,
			success : function(data)
			{
				var selected = "";
				$("#"+obj).empty().append("<option value=''>"+title+"</option>");
				$.each(data.categoryList, function(i,item)
				{
					if (item.PRD_CTG_IDX == selectIdx)
					{
						selected = "selected";
					}
					else
					{
						selected = "";
					}
					$("#"+obj).append("<option value='"+item.PRD_CTG_IDX+"' "+selected+">"+item.PRD_CTG_NM+"</option>");
				});

			},
			error   : function(xhr,status,error)
			{
				alert("상품 카테고리 호출 중 에러가 발생하였습니다.");
				//alert("code:"+xhr.status);
			}
		});
	};

	/**
	 * 스펙 카테고리 Select box
	 * */
	getSpecList = function(obj, upIdx, selectIdx, serverDomain, env)
	{
		var title = "전체";
		if(obj.indexOf("2") > -1)
		{
			title = "1차 분류";
		}
		if(obj.indexOf("3") > -1)
		{
			title = "2차 분류";
		}
		if(obj.indexOf("4") > -1)
		{
			title = "3차 분류";
		}

		if(env==null || env==' ') env='P';

		$.ajax({
			type    : "POST",
			url     : serverDomain + "/am/product/subSpecManagementProductAjax.do",
			data    :  { "SPC_MST_IDX":upIdx, "SPC_MST_ENV":env},
			dataType : "JSON",
			async   : false,
			success : function(data)
			{
				var selected = "";
				$("#"+obj).empty().append("<option value=''>"+title+"</option>");
				$.each(data.categoryList, function(i,item)
				{
					if (item.SPC_MST_IDX == selectIdx)
					{
						selected = "selected";
					}
					else
					{
						selected = "";
					}
					$("#"+obj).append("<option value='"+item.SPC_MST_IDX+"' "+selected+">"+item.SPC_MST_NM+"</option>");
				});

			},
			error   : function(xhr,status,error)
			{
				alert("스펙 카테고리 호출 중 에러가 발생하였습니다.");
				//alert("code:"+xhr.status);
			}
		});
	};

	/**
	 * 품목 카테고리 Select box
	 * */
	getItemList = function(obj, upIdx, selectIdx, serverDomain, env,showType)
	{
		var title = "전체";
		if(obj.indexOf("2") > -1)
		{
			title = "1차 분류";
		}
		if(obj.indexOf("3") > -1)
		{
			title = "2차 분류";
		}
		if(obj.indexOf("4") > -1)
		{
			title = "3차 분류";
		}

		if(env==null || env==' ') env='P';
		if(showType==null || showType==' ' || showType ==undefined) showType='default';

		$.ajax({
			type    : "POST",
			url     : serverDomain + "/am/product/subItemManagementAjax.do",
			data    :  { "ITM_CTG_IDX":upIdx, "ITM_CTG_ENV":env},
			dataType : "JSON",
			async   : false,
			success : function(data)
			{
				if(obj.indexOf("2") > -1 && upIdx == "")
				{
					$("#applyItemCategoryList").html("<tr><td colspan=5>구분을 선택해주세요.</td></tr>");
				}

				if(obj == "applyItemCategoryList"){
					var itmHtml = "";
					var itmLen = data.categoryList.length;
					var cols = 0;
					if(showType == "checkbox"){
						var arrySelectIdx = selectIdx.replace("[","").replace("]","").split(",");
					}
					$.each(data.categoryList, function(i,item)
					{
						if(showType == "checkbox"){
							itmHtml = itmHtml + "<input type=\"checkbox\" name=\"searchErpMstNfis\" id=\"searchErpMstNfis_"+i+"\" value=\""+item.ITM_CTG_ERP_CD+"\" ";
							for(ii = 0; ii <arrySelectIdx.length; ii++){
								if($.trim(arrySelectIdx[ii]) == item.ITM_CTG_ERP_CD){
									itmHtml = itmHtml + "checked=true";
								}
							}
							itmHtml = itmHtml + "/> ";
							itmHtml = itmHtml + "<label for=\"searchErpMstNfis_"+i+"\" > "+ item.ITM_CTG_NM + "</label>";
						}else{
							if(i == 0 || i % 5 == 0){
								itmHtml = itmHtml + "<tr>";
							}

							if((i+ 1) == itmLen){
								cols = (5 - (itmLen % 5) + 1);
								itmHtml = itmHtml + "<td colspan="+cols+" class=\"left\" style=\"padding-left:25px;\">" + item.ITM_CTG_NM + "</td>";
							}else{
								itmHtml = itmHtml + "<td>" + item.ITM_CTG_NM + "</td>";
							}

							if((i + 1) % 5 == 0 || (i + 1) == itmLen) {
								itmHtml = itmHtml + "</tr>";
							}
						}
					});
					//기본TR삭제
					$("#itemCategoryNodata").remove();
					$("#applyItemCategoryList").html(itmHtml);
				}else{
				var selected = "";
					$("#"+obj).empty().append("<option value=''>"+title+"</option>");
					$.each(data.categoryList, function(i,item)
					{
						if (item.ITM_CTG_IDX == selectIdx)
						{
							selected = "selected";
						}
						else
						{
							selected = "";
						}
						$("#"+obj).append("<option value='"+item.ITM_CTG_IDX+"' "+selected+">"+item.ITM_CTG_NM+"</option>");
					});
			}

			},
			error   : function(xhr,status,error)
			{
				alert("품목 카테고리 호출 중 에러가 발생하였습니다.");
				//alert("code:"+xhr.status);
			}
		});
	};

	/**
	 * 상품구분 Select box
	 * */
	getGdsSctnList = function(obj, brandCd, selectCd, serverDomain)
	{
		var title = "전체";

		$.ajax({
			type    : "POST",
			url     : serverDomain + "/am/product/subGdsSctnProductAjax.do",
			data    :  { "BRAND_CD":brandCd },
			dataType : "JSON",
			async   : false,
			success : function(data)
			{
				var selected = "";
				$("#"+obj).empty().append("<option value=''>"+title+"</option>");
				$.each(data.gdsSctnList, function(i,item)
				{
					if (item.GDS_SCTN_CD == selectCd)
					{
						selected = "selected";
					}
					else
					{
						selected = "";
					}
					$("#"+obj).append("<option value='"+item.GDS_SCTN_CD+"' "+selected+">"+item.GDS_SCTN_NM+"</option>");
				});

			},
			error   : function(xhr,status,error)
			{
				alert("상품구분 호출 중 에러가 발생하였습니다.");
				//alert("code:"+xhr.status);
			}
		});
	};

	// 검색결과 없는 경우 colspan 처리
	var $td_no_result = $("td.td_no_result");
	$td_no_result.prop("colspan", $td_no_result.parents("table:first").find("tr:eq(0)").children().length);

})(jQuery);

//우편번호 팝업
function goSearchZipCodeAdmin(serverDomain, searchGubun)
{
	window.open(serverDomain + "/am/common/commonZipCodePopup.do?searchGubun="+searchGubun, "searchZipCodePopup", "width=600, height=700, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbars=yes");
}

var UTIL = function() {
	/**
	 * 오브젝트가 HTML 엘리먼트여부인지 판단합니다.
	 * @method UTIL.isElement
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isElement(O) {
		return !!(O && (O.nodeType == 1 || O.nodeType == 11));
	}

	/**
	 * 오브젝트가 Object인지 판단합니다.
	 * @method UTIL.isObject
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isObject(O) {
		return _toString.call(O) == "[object Object]";
	}

	/**
	 * 오브젝트가 Array인지 판단합니다.
	 * @method UTIL.isArray
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isArray(O) {
		return _toString.call(O) == "[object Array]";
	}

	/**
	 * 오브젝트가 Function인지 판단합니다.
	 * @method UTIL.isFunction
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isFunction(O) {
		return typeof O === "function";
	}

	/**
	 * 오브젝트가 String인지 판단합니다.
	 * @method UTIL.isString
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isString(O) {
		return _toString.call(O) == "[object String]";
	}

	/**
	 * 오브젝트가 Number인지 판단합니다.
	 * @method UTIL.isNumber
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isNumber(O) {
		return _toString.call(O) == "[object Number]";
	}

	/**
	 * 오브젝트가 NodeList인지 판단합니다.
	 * @method UTIL.isNodelist
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isNodelist(O) {
		return !!(_toString.call(O) == "[object NodeList]" || typeof O !== "undefined" && O && O[0] && O[0].nodeType == 1);
	}

	/**
	 * 오브젝트가 undefined인지 판단합니다.
	 * @method UTIL.isUndefined
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isUndefined(O) {
		return typeof O === "undefined";
	}

	/**
	 * 오브젝트가 undefined이거나 null이거나 빈값인지 판단합니다.
	 * @method UTIL.isEmpty
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isEmpty(O) {
		return typeof O === "undefined" || O === null || O === "";
	}

	/**
	 * 오브젝트가 undefined이거나 null이거나 빈값인지 판단합니다.
	 * @method UTIL.isNotEmpty
	 * @param {Object} O
	 * @returns {Boolean}
	 */
	function isNotEmpty(O) {
		return !isEmpty(O);
	}

	return {
		isElement: isElement,
		isObject: isObject,
		isArray: isArray,
		isFunction: isFunction,
		isString: isString,
		isNumber: isNumber,
		isNodelist: isNodelist,
		isUndefined: isUndefined,
		isEmpty: isEmpty,
		isNotEmpty: isNotEmpty
	};
}();


/**
 * 문자열 관련 Class
 * @method stringUtil
 */
var stringUtil = {
	/* 문자열확인 후 문자열 또는 기본값 리턴
	str:체크 문자열 def:기본값 */
	getString: function(str, def) {
		if (str != undefined && str && str != "" && str != "null") {
			return $.trim(str);
		} else {
			return $.trim(def);
		}
	},
	/* 정수형 확인 후 정수형 또는 기본값 리턴
	num:체크 정수형 / def:기본값 */
	getInt: function(num, def) {
		var val = parseInt(num, 10);

		if (isNaN(val)) {
			return def;
		} else {
			return val;
		}
	},
	/* 공백제거
	str: 공백 제거 할 문자열*/
	trim: function(str) {
		return $.trim(str);
	},
	/* Date
	 */
	getDateView: function(regdt) {

		var yyyy = regdt.substring(0, 4);
		var MM = regdt.substring(4, 6) - 1;
		var dd = regdt.substring(6, 8);
		var hh = regdt.substring(8, 10);
		var mm = regdt.substring(10, 12);
		var ss = regdt.substring(12, 14);

		var nowDate = new Date();
		var regDate = new Date(yyyy, MM, dd, hh, mm, ss);

		var ss = Math.floor(nowDate.getTime() - regDate.getTime()) / 1000;
		var mm = Math.floor(ss / 60);
		var hh = Math.floor(mm / 60);
		var day = Math.floor(hh / 24);

		var diff_hour = Math.floor(hh % 24);
		var diff_minute = Math.floor(mm % 60);
		var diff_second = Math.floor(ss % 60);

		//console.log( regdt + ' 계산 시간   : ' + day +  '일 ' + diff_hour  + ' 시간 ' + diff_minute + ' 분 ' + diff_second  + ' 초 ');
		var returnDate = "";
		if (day > 1 || diff_hour > 1) {
			returnDate = regDate.format("yyyy.MM.dd HH:mm");
		} else {
			returnDate = diff_minute + "분 전";
		}

		return returnDate;
	},
	/* Format Date
	 */
	formatDate: function(regdt, f) {
		//console.log(regdt)
		var yyyy = regdt.substring(0, 4);
		var yy = regdt.substring(2, 4);
		var MM = regdt.substring(4, 6);
		var dd = regdt.substring(6, 8);
		var hh = regdt.substring(8, 10);
		var mm = regdt.substring(10, 12);
		var ss = regdt.substring(12, 14);

		return f.replace(/(yyyy|yy|MM|dd|hh|mm|ss)/gi, function($1) {
			switch ($1) {
				case "yyyy":
					return yyyy;
				case "yy":
					return yy.zf(2);
				case "MM":
					return MM.zf(2);
				case "dd":
					return dd.zf(2);
				case "hh":
					return hh.zf(2);
				case "mm":
					return mm.zf(2);
				case "ss":
					return ss.zf(2);
				default:
					return $1;
			}
		});
	},
	/* set Comma */
	setComma: function(num) {
		var pattern = /(^[+-]?\d+)(\d{3})/;
		num += '';
		while (pattern.test(num)) {
			num = num.replace(pattern, '$1' + ',' + '$2');
		}
		return num;
	},
	/* remove Comma */
	removeComma: function(num) {
		return num.replace(/,/gi, "");
	}
};

/**
 * @method callAjax
 * @param {Object} http
 * @param {String} http.type
 * @param {String} http.url
 * @param {String} [http.contentType] request Content Type
 * @param {Object|String} http.data request Data
 * @param {String} [http.dataType] response Data Type
 * @param {Function} http.callback 성공시 Callback Function
 * @param {Function} [http.onError] Exception시 Callback Function
 * @param {Function} [http.always] 항시 처리 Callback Function
 * @param {Object} [http.options]
 * @param {Boolean} [http.options.nomask = false]
 * @param {String} [http.options.apiType]
 * @example
 * ```js
 *  // 기본 - 에러가 나면 알어서 처리 함.
 *  callAjax({
 *      type: "GET",
 *      url: "/api/v1/users",
 *      data : {},
 *      callback: function(response){
 *          // do something
 *      }
 *  });
 *
 *  // onError 지정
 *  callAjax({
 *      type: "GET",
 *      url: "/api/v1/users",
 *      data : {},
 *      callback: function(response){
 *          // do something
 *      },
 *      onError: function(err){
 *          // console.log(err);
 *      }
 *  });
 * ```
 */
var callAjax = function() {

	var queue = [];
	var defaultOption = {
		apiType: ""
	};

	return function(http) {
		var jqxhr, httpOpts, callback, onError, always;
		var options = $.extend(true, {}, defaultOption, http.options);
//		if (!options.nomask) mask.open(); // TODO Mask 열기
		$(".loadingWrap").show();

		httpOpts = {
			type: http.type || "POST",
			contentType: http.contentType || 'application/json; charset=UTF-8',
			dataType: http.dataType || "json"
		};

		if (http.enctype && http.enctype == "multipart/form-data") {
			httpOpts.processData = false;  // Important!
			httpOpts.contentType = false;
			httpOpts.cache = false;
		}

		if (http.single) {
			var keepGoing = true;
			queue.forEach(function(n) {
				if (n.k === http.type + "~" + http.url) {
					keepGoing = false;
				}
			});
			if (!keepGoing) return false;
		}

		queue.push({
			k: http.type + "~" + http.url
		});

		$.extend(http, httpOpts);

		callback = http.callback;
		always = http.always;
		onError = http.onError || options.onError;
		jqxhr = $.ajax(http);
		jqxhr.setRequestHeader("AJAX", true)
		.done(function(data, textStatus, jqXHR) {

			if (data.model) data = $.extend(true, {}, data, data.model);

			if (typeof data == "string") {
				arguments[0] = data = data == "" ? {} : JSON.parse(data);
			}

			if (data.redirect) {
				location.href = data.redirect;
				return;
			}

			if (data.error) {
				if (data.status == "-1") {
					console.warn(data);
					alert("시스템 에러가 발생하였습니다. 관리자에게 문의하세요.");
				} else {
					if (onError) onError.apply(this, [data, textStatus, jqXHR]); // onError
					else alert(data.error.message);
				}
			} else {
				var args = [].concat($.makeArray(arguments));
				if (callback) callback.apply(this, args); // callback
			}
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.warn("fail", jqXHR, textStatus, errorThrown);
			if (UTIL.isNotEmpty(errorThrown) && onError) {
				onError({
					message: errorThrown
				}); // callback
			}
		}).always(function(data, textStatus, jqXHR) {
			queue.pop();

			if (always) always.apply(this, [data, textStatus, jqXHR]); // always

			// 프로그레스바 & 마스크 처리를 한다면 여기서 닫기 처리
//			if (!options.nomask)
//				if (queue.length == 0) axAJAXMask.close(300);
			$(".loadingWrap").hide();
		});
	};
}();


/**
 * @method excelDownloadSvr 엑셀 다운로드 공통기능
 * @param {Object} obj
 * @param {String} [obj.url] URL
 * @param {String} [obj.target = "_self"] Target
 * @param {String} [obj.method = "post"] Method
 * @param {String} [obj.enctype]
 * @param {String} obj.queryId Mapper상의 Query ID
 * @param {String} obj.columnInfoFile 다운로드될 Excel의 양식 XML
 * @param {String} obj.fileName 다운로드될 File 명
 * @param {String} [obj.sheetName] 시트명
 * @param {Object} [obj.param] 다운로드시 적용될 조회조건
 * @param {String} [obj.printDownloader = "N"] 다운로드자 성명 표시여부
 * @param {String} [obj.sample = false] 샘플 파일 여부
 * @param {String} [obj.sampleWithData = false] 샘플 파일 데이터 포함 여부
 * @param {String} [obj.returnObjectType = "Object"]
 * @example
 * ```js
 *  excelDownloadSvr({
 *  	queryId: "Helper.selectHelperList",
 *  	columnInfoFile: "helperListExcel",
 *  	fileName: "고객도우미관리",
 *  	sheetName: "고객도우미관리",
 *  	sample: false,
 *  	sampleWithData: false,
 *  	param: {
 *  	}
 *  });
 *
 * ```
 */
function excelDownloadSvr(obj) {
	if (UTIL.isEmpty(obj.queryId)) {
		alert("queryId가 지정되지 않았습니다.");
		return;
	}
	if (UTIL.isEmpty(obj.columnInfoFile)) {
		alert("columnInfoFile가 지정되지 않았습니다.");
		return;
	}

	var _param = $.extend({}, obj.param, {
		queryId: obj.queryId,
		fileName: obj.fileName || "excel_name",
		columnInfoFile: obj.columnInfoFile,
		returnObjectType: obj.returnObjectType || "Object",
		printDownloader: obj.printDownloader || "N",
		sheetName: obj.sheetName || obj.fileName,
		useNumberField: obj.useNumberField || "N",
		sample: obj.sample || false,
		sampleWithData: obj.sampleWithData || false
	});

	obj = obj || {};
	obj.url = obj.url || "/excel/excelDownload.do";
	obj.target = obj.target || "_self";
	obj.method = obj.method || "post";
	obj.enctype = obj.enctype || "application/x-www-form-urlencoded; charset=utf-8";

	var form = $("<form>").attr({
		action : obj.url,
		target : obj.target,
		method : obj.method,
		enctype : obj.enctype,
	});

	for(var key in _param){
		$('<input>').attr({
			type : "hidden",
			name : key,
			value : _param[key],
		}).appendTo(form);
	}

	form.appendTo(document.body);
	form.submit();
	form.remove();
}

/*스마트 에디터 display:none 에서 show 로 바뀔때 height 값 0으로 되는 부분 수정하는 function
 *  textareaId 해당 textarea id
 * h 원하는 height 값
 * editorNum 해당 editor 번호(없는 경우 입력 안한다)
 * */
function showSmartEditor(textareaId, h, editorNum){
	//oEditors.getById['PRD_MST_DETAIL_DESC'].exec('CHANGE_EDITING_MODE', ['WYSIWYG']); //클릭 안되는 문제 해결

	//가로폭 조정
	$('#'+textareaId).next().contents().find("#smart_editor2").css("width","100%");
	$('#'+textareaId).next().contents().find(".se2_input_area").css("width","100%");

	//$('#PRD_MST_DETAIL_DESC').next().css("height",$('#PRD_MST_DETAIL_DESC').height() + 300);
	//$('#PRD_MST_DETAIL_DESC').next().contents().find("#se2_iframe").css("height",$('#PRD_MST_DETAIL_DESC').height() + 300);

	//세로폭 조정
	$('#'+textareaId).next().height($('#'+textareaId).height() + (h+50)); //height값 강제 지정

	var editor;
	if(editorNum == undefined){
		editor = eval("oEditors");
	}else{
		editor = eval("oEditors"+editorNum);
	}

	editor.getById[textareaId].exec('MSG_EDITING_AREA_RESIZE_STARTED', []);
	editor.getById[textareaId].exec('RESIZE_EDITING_AREA', [0, $('#'+textareaId).height()+h]);
	editor.getById[textareaId].exec('MSG_EDITING_AREA_RESIZE_ENDED', []);
}

/***************************************************
 **                        POPUP                  **
 ***************************************************/

// 회원정보 상세팝업
function goMemberViewPopup(serverDomain, memId) {
	popup(serverDomain+"/am/member/infoMemberPopup.do?MEM_MST_MEM_ID=" + memId, "1200", "700", "yes", "goMemberViewPopup");
}

// 주문정보 상세팝업
function goOrderViewPopup(serverDomain, ordMstCd) {
	popup(serverDomain+"/am/order/orderPopup.do?ORD_MST_CD="+ordMstCd, "1500", "700", "yes", "orderView");
}

/**
 * 멀티 텍스트 팝업
 * @param id
 *
 * @returns fnResultText(params)
 */
function multiTextPopup(id){
	var idVal = "";
	if("" != id) {
		idVal = $("#"+id).val();
	}
	popup("/am/com/popUp/multiTextPopup.do?id="+id+"&idVal=" + idVal, "450", "550", "yes", "textAreaPopup");
}

/**
 * 사업장 조회 팝업
 * @param form - FORM ID
 * @formData - BZPLC_ID, BZPLC_NM, BZPLC_NO, LIMIT_YN
 *
 * @returns fnResultBzplc(params)
 */
function bzplcPopup(form){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+form).attr({"action":"/am/dsp/popMng/bzplcPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}
/**
 * 단일 사업장 조회 팝업
 * @param form - FORM ID
 * @formData - BZPLC_ID, BZPLC_NM, LIMIT_YN
 *
 * @returns fnOneBzplcResult(inputArray)
 */
function fnOneBzplcResult(form){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+form).attr({"action":"/am/com/popUp/onebzplcPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

/**
 * 부서 검색 팝업 멀티
 * @param form - FORM ID
 * @formData - DEPT_ID, DEPT_NM, BZPLC_NO , OPR_UNT_ID
 * @returns fnResultBzplc(params)
 */
function deptPopup(form){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+form).attr({"action":"/am/com/popUp/deptPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

/**
 * 부서 검색 팝업 단일
 * @param form - FORM ID
 * @formData - DEPT_ID, DEPT_NM, BZPLC_NO , OPR_UNT_ID
 * @returns fnResultBzplc(params)
 */
function fnOneDeptPopup(form){
	popup('', "500", "700", "yes","_bzplcPopup");
	$('#'+form).attr({"action":"/am/com/popUp/oneDeptPopupForm.do", "target":"popup_bzplcPopup", "method":"post"}).submit();
}

/**
 * 단일 담당자 조회 팝업
 * @param form - FORM ID
 * @formData - EMP_NO, OPRTR_NM, ORG_CD , ORG_NM , JBNM
 *
 * @returns fnServiceResultCallback(inputArray)
 */
function fnServiceResult(form){
	popup('', "500", "700", "yes","_servicePopup");
	$('#'+form).attr({"action":"/am/com/popUp/servicePopupForm.do", "target":"popup_servicePopup", "method":"post"}).submit();
}

/**
 * 멀티 담당자 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData - EMP_NO, OPRTR_NM, ORG_CD , ORG_NM , JBNM
 *
 * @returns fnServiceResultMultiCallback(eleId, inputArray)
 */
function fnServiceResultMulti(form, eleId){
	popup('', "700", "700", "yes","_servicePopup");
	if (eleId) {
		$('#'+form).attr({"action":"/am/com/popUp/service2PopupForm.do?eleId="+eleId, "target":"popup_servicePopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/service2PopupForm.do", "target":"popup_servicePopup", "method":"post"}).submit();
	}
}

/**
 * 단일 운영단위 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData - OPR_UNT_ID, OPR_UNT_NM
 *
 * @returns fnOprUntSingleCallback(inputArray)
 */
function oprUntSinglePopup(form, eleId){
	popup('', "500", "700", "yes","_oprUntPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/operatePopupForm.do?eleId="+eleId, "target":"popup_oprUntPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/operatePopupForm.do", "target":"popup_oprUntPopup", "method":"post"}).submit();
	}
}

/**
 * 멀티 운영단위 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData - OPR_UNT_ID, OPR_UNT_NM
 *
 * @returns fnOprUntMultiCallback(eleId, inputArray)
 */
function oprUntMultiPopup(form, eleId){
	popup('', "500", "700", "yes","_oprUntPopup");
	if (eleId) {
		$('#'+form).attr({"action":"/am/com/popUp/operate2PopupForm.do?eleId="+eleId, "target":"popup_oprUntPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/operate2PopupForm.do", "target":"popup_oprUntPopup", "method":"post"}).submit();
	}
}


/**
 * 단일 처리자 조회 팝업
 * @param form - FORM ID
 * @formData - OPR_UNT_ID, OPR_UNT_NM
 *
 * @returns fnEmployeeSingleCallback(inputArray)
 */

function employeePopup(form){
	popup('', "500", "700", "yes","_employeePopup");
	$('#'+form).attr({"action":"/am/com/popUp/employeePopupForm.do", "target":"popup_employeePopup", "method":"post"}).submit();

}

/**
 * 멀티 회원 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData - MEM_ID, MEM_NM, LOGIN_ID
 *
 * @returns fnClientMultiCallback(eleId, inputArray)
 */

function clientMultiPopup(form, eleId){
	popup('', "600", "900", "yes","_clientMultiPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/client2PopupForm.do?eleId="+eleId, "target":"popup_clientMultiPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/client2PopupForm.do", "target":"popup_clientMultiPopup", "method":"post"}).submit();
	}
}

/**
 * 회원 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData - MEM_ID, MEM_NM, LOGIN_ID
 *
 * @returns fnResultClient(inputArray)
 */
function clientPopup(form){
	popup('', "600", "900", "yes","_clientPopup");
	$('#'+form).attr({"action":"/am/com/popUp/clientPopupForm.do", "target":"popup_clientPopup", "method":"post"}).submit();
}


/**
 * 단일 xx팀(서비스, 운영...) 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnCommonCodeMultiCallback(inputArray)
 */
function memOprtrOrgSinglePopup(form, eleId){
	popup('', "500", "700", "yes","_commonCodePopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/memOprtrOrgPopupForm.do?eleId="+eleId, "target":"popup_commonCodePopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/memOprtrOrgPopupForm.do?", "target":"popup_commonCodePopup", "method":"post"}).submit();
	}
}

/**
 * 멀티 공통코드 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnCommonCodeMultiCallback(inputArray)
 */
function commonCodeMultiPopup(form, eleId){
	popup('', "500", "700", "yes","_commonCodePopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/commonCode2PopupForm.do?eleId="+eleId, "target":"popup_commonCodePopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/commonCode2PopupForm.do", "target":"popup_commonCodePopup", "method":"post"}).submit();
	}
}

/**
 * 쿠폰 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultCoupon(params)
 */
function couponPopup(form){
	popup('', "700", "700", "yes","_couponPopup");
	$('#'+form).attr({"action":"/am/dsp/popMng/couponPopupForm.do", "target":"popup_couponPopup", "method":"post"}).submit();
}


/**
 * 상품 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnSetProduct(PRD_MST_CD)
 */
function planProductPopup(form){
	popup('', "1400", "700", "yes", "_productPopup");
	$('#'+form).attr({"action":"/am/prm/plnMng/planProductPopup.do", "target":"popup_productPopup", "method":"post"}).submit();
}

/***************************************************
 **              주문 관련 팝업                      **
 ***************************************************/
/**
 * 단일 플랜트 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnPlantResultCallback(eleId,params)
 */
function plantSinglePopup(form, eleId){
	popup('', "500", "600", "yes", "_plantPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/plantPopupForm.do?eleId="+eleId, "target":"popup_plantPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/plantPopupForm.do", "target":"popup_plantPopup", "method":"post"}).submit();
	}
}

/*
 ******************************************
 **********      상품 관련 팝업    *************
 *******************************************
 *******************************************
 */

/**
 * 상품 조회 팝업
 * @param form - FORM ID
 * @formData - searchCnt 선택할 상품 갯수, prdId 상품ID 검색 자동입력
 *
 * @returns fnSetProduct(params)
 */
function productPopup(form){
	popup('', "1400", "700", "yes", "_productPopup");
	$('#'+form).attr({"action":"/am/com/popUp/prd/productPopupForm.do", "target":"popup_productPopup", "method":"post"}).submit();
}

/**
 * 고시품목 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultNotice(params)
 */
function productNoticePopup(frm){
	popup('', "700", "500", "yes", "_notiPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/productNoticePopup.do", "target":"popup_notiPopup", "method":"post"}).submit();
}

/**
 * 속성 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultAttr(params)
 */
function attrPopup(frm){
	popup('', "700", "500", "yes", "_attrPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/attrPopupForm.do", "target":"popup_attrPopup", "method":"post"}).submit();
}

/*
 * S-MRO카테고리 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultSMroCategoryMapp(params)
 * 	params - prdClsCd, prdClsLvlNm
 */
function sMroCategoryPopup(frm){
	popup('', "700", "500", "yes", "_sMroCategoryPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/sMroCategoryPopupForm.do", "target":"popup_sMroCategoryPopup", "method":"post"}).submit();
}

/**
 * SSP카테고리 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultSspCategory(params)
 * 	params - prdClsCd, prdClsNm
 */
function sspCategoryPopup(frm){
	popup('', "700", "500", "yes", "_sspCategoryPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/sspCategoryPopupForm.do", "target":"popup_sspCategoryPopup", "method":"post"}).submit();
}

/**
 * SSP카테고리 조회 팝업 (공통팝업)
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnResultSspCateSingleCallback(eleId,obj)
 */
function sspCategorySinglePopup(frm,eleId){
	popup('', "500", "600", "yes", "_sspCategoryPopup");
	if(eleId){
		$('#'+frm).attr({"action":"/am/com/popUp/prd/sspCategory2PopupForm.do?eleId="+eleId, "target":"popup_sspCategoryPopup", "method":"post"}).submit();
	} else {
		$('#'+frm).attr({"action":"/am/com/popUp/prd/sspCategory2PopupForm.do", "target":"popup_sspCategoryPopup", "method":"post"}).submit();
	}
}

/**
 * 제조원 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnResultManufacturerMapp(obj)
 */
function manufacturerPopup(frm){
	popup('', "700", "500", "yes", "_manufacturerPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/prd/manufacturerPopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
}

/**
 * 제조원 조회 팝업 (공통팝업)
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnResultMnfrSingleCallback(eleId,obj)
 */
function manufacturerSinglePopup(frm,eleId){
	popup('', "500", "600", "yes", "_manufacturerPopup");
	if(eleId){
		$('#'+frm).attr({"action":"/am/com/popUp/prd/manufacturer2PopupForm.do?eleId="+eleId, "target":"popup_manufacturerPopup", "method":"post"}).submit();
	} else {
		$('#'+frm).attr({"action":"/am/com/popUp/prd/manufacturer2PopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
	}
}

/**
 * 원산지 조회 팝업 (공통팝업)
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnResultCtryCdSingleCallback(eleId,obj)
 */
function countryCodeSinglePopup(frm,eleId){
	popup('', "500", "600", "yes", "_manufacturerPopup");
	if(eleId){
		$('#'+frm).attr({"action":"/am/com/popUp/prd/countryCodePopupForm.do?eleId="+eleId, "target":"popup_manufacturerPopup", "method":"post"}).submit();
	} else {
		$('#'+frm).attr({"action":"/am/com/popUp/prd/countryCodePopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
	}
}

/**
 * 상품군 조회 팝업 (공통팝업)
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnResultPrdGroupSingleCallback(eleId,obj)
 */
function productGroupSinglePopup(frm,eleId){
	popup('', "500", "600", "yes", "_manufacturerPopup");
	if(eleId){
		$('#'+frm).attr({"action":"/am/com/popUp/prd/productGroupPopupForm.do?eleId="+eleId, "target":"popup_manufacturerPopup", "method":"post"}).submit();
	} else {
		$('#'+frm).attr({"action":"/am/com/popUp/prd/productGroupPopupForm.do", "target":"popup_manufacturerPopup", "method":"post"}).submit();
	}
}

/**
 * 요청자 조회 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnRequestResultCallback(params)
 */
function requestPopup(frm){
	popup('', "500", "700", "yes", "_requestPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/requestPopupForm.do", "target":"popup_requestPopup", "method":"post"}).submit();
}

/**
 * 주문단위 팝업
 * @param form - FORM ID
 * @formData -
 *
 * @returns fnRequestResultCallback(inputArray)
 */
function odrUntPopup(frm){
	popup('', "600", "700", "yes", "_odrUntPopup");
	$('#'+frm).attr({"action":"/am/com/popUp/odrUntPopupForm.do", "target":"popup_odrUntPopup", "method":"post"}).submit();
}

/**
 * SSP_BO_CN_29 상품 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnProductSingleCallback(eleId, data)
 */
function productSinglePopup(form, eleId){
	popup('', "700", "700", "yes", "_productPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/productSinglePopupForm.do?eleId="+eleId, "target":"popup_productPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/productSinglePopupForm.do", "target":"popup_productPopup", "method":"post"}).submit();
	}
}


/**
 * SSP_BO_OA_31 상품 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnProductMultiCallback(eleId, datas)
 */
function productMultiPopup(form, eleId){
	popup('', "700", "900", "yes", "_productPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/productMultiPopupForm.do?eleId="+eleId, "target":"popup_productPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/productMultiPopupForm.do", "target":"popup_productPopup", "method":"post"}).submit();
	}
}

/**
 * SSP_BO_OA_36 협력사 조회 팝업
 * @param form - FORM ID
 * @param eleId - Form에 있는 항목 중 key
 * @formData -
 *
 * @returns fnProductSingleCallback(eleId, data)
 */
function cprtcpSinglePopup(form, eleId){
	popup('', "700", "700", "yes", "_cprtcpPopup");
	if(eleId){
		$('#'+form).attr({"action":"/am/com/popUp/cprtcpSinglePopupForm.do?eleId="+eleId, "target":"popup_cprtcpPopup", "method":"post"}).submit();
	} else {
		$('#'+form).attr({"action":"/am/com/popUp/cprtcpSinglePopupForm.do", "target":"popup_cprtcpPopup", "method":"post"}).submit();
	}
}
