/**
*
*  setSessionStorage
*
**/
var SessionStorage = {
	
	// public method for setSessionStorage
	setSessionStorage : function (OrdMstKey,StorageKey) {
		var encodeData = [];
		if(OrdMstKey != ""){
			encodeData.push("OrdMstKey|"+OrdMstKey);
		}
		$("form[data-use-autosave=true] input, textarea, select").each(function(idx){
			if($(this).attr("type") != "hidden" && $(this).attr("name") != undefined){
				if($(this).attr("type") == "text" || $(this).attr("type") == "textarea"){
					if($(this).attr("name") && $(this).val() != ""){
			    		encodeData.push($(this).attr("name")+"|"+$(this).val());
			    	}
				}else if($(this).attr("type") == "checkbox" || $(this).attr("type") == "radio"){
					if($(this).attr("name") && ($(this).val() != "" && $(this).attr("checked"))){
			    		encodeData.push($(this).attr("name")+"|"+$(this).val());
			    	}
				}else{
	        		if($(this).attr("name") && $(this).val() != ""){
	        			encodeData.push($(this).attr("name")+"|"+$(this).val());
			    	}
	        	}
			}
	    });
		if(encodeData.length > 0){
			$.ajax
			({
				async : false,
				type : "POST",
				data : {"StorageStr" : encodeData , "StorageType": "E"},
				//url : frontDomain+"/pc/Storage/StorageAjax.do",
				url : "/pc/Storage/StorageAjax.do",
				success : function (data) 
				{ 
					if(data.StorageResult == "Y"){
						window.sessionStorage.setItem(StorageKey, JSON.stringify(data.StorageStrArray));
					}else{
						alert("데이터 임시 저장 실패!!");
					}
				},
				error : function (err)
				{
					alert("오류가 발생하였습니다.\n[" + err.status + "]");
					window.jquery || console.log('오류가 발생하였습니다: ' + err.status);
				}
			});
	   
		}
	},
	
	// public method for getSessionStorage
	getSessionStorage : function (OrdMstKey,StorageKey) {
		var receiveData = JSON.parse(window.sessionStorage.getItem(StorageKey));
		
		if(receiveData){
			var oldData = "";
			var useCoupon = false;
            if(receiveData.length > 0){
            	$.ajax
                ({
                    async : false,
                    type : "POST",
                    data : {"StorageStr" : receiveData , "StorageType": "D"},
                    //url : frontDomain+"/pc/Storage/StorageAjax.do",
                    url : "/pc/Storage/StorageAjax.do",
                    success : function (data) 
                    { 
                        if(data.StorageResult == "Y"){
                        	if(data.StorageStrArray.indexOf("OrdMstKey|"+OrdMstKey) > -1){
                        		if(confirm("기존 사용 하시던 데이터를 사용 하시겠습니까?")){
		                        	for(var i=0; i<data.StorageStrArray.length; i++)
		                            {
		                        		oldData = data.StorageStrArray[i];
		                        		oldData = oldData.split("|");
		                                if(oldData[0] == "dupCoupon"){
		                                	useCoupon = true;
		                                }
		                                $("form[data-use-autosave=true] input, textarea, select").each(function() {
		                                	if($(this).attr("name") == oldData[0]){
		                                		if($(this).attr("type") == "text" || $(this).attr("type") == "textarea"){
		                                			$(this).val(oldData[1]);
			                                	}else if($(this).attr("type") == "checkbox"){
			                                		$("input[name='"+oldData[0]+"']").val(oldData[1]).attr('checked', true); 
			                                	}else if($(this).attr("type") == "radio"){
			                                		$("input:radio[name='"+oldData[0]+"']:radio[value="+oldData[1]+"]").attr('checked', true); 
			                                	}else{
			                                		$(this).val(oldData[1]);
			                                	}
		                                    }
		                                });
		                            }
		                        	$("form[data-use-autosave=true]").find('#toUseMileage').trigger('blur');//포인트 사용
		                        	if(useCoupon){
		                        		$("form[data-use-autosave=true]").find('.dupCouponLabel').trigger('click');//쿠폰사용
		                        		prdCpnDiscountAjax();//쿠폰 사용
		                        	}
		                        	changePayWay($(':radio[name="radioPayment"]:checked').val());//결제수단 버튼
		                        	controlPaymentInfo();//결제수단
                        		}
                        	}
                        }else{
                            alert("데이터 불러오기 실패!!");
                        }
                    },
                    error : function (err)
                    {
                        alert("오류가 발생하였습니다.\n[" + err.status + "]");
                        window.jquery || console.log('오류가 발생하였습니다: ' + err.status);
                    }
                });
            }
			
	    }
	}
 
};