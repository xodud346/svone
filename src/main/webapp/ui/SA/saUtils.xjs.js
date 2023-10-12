//XJS=saUtils.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***********************************************************/
        /* 프 로 그 램 : saUtils
        /* 작 성 일 자 : 2022/07/19
        /* 작  성   자 : 이민호
        /* 설       명 : 데이터 복사(alert 메시지 너무 길어 복사가 안 되서, 메시지 띄우면서 복사 처리)
        /***********************************************************/
        this.fn_textCopy = function(copyText) {
        	var t = document.createElement("textarea");
        	document.body.appendChild(t);
        	t.value = copyText;
        	t.select();
        	document.execCommand('copy');
        	document.body.removeChild(t);
        }

        /***********************************************************/
        /* 프 로 그 램 : saUtils
        /* 작 성 일 자 : 2022/07/20
        /* 작  성   자 : 이민호
        /* 설       명 : 이미지 노출
        /***********************************************************/
        this.fn_imgView = function(imgObj, nexaObj, docRegId, docRegSeq) {
        	var svcUrl = nexacro.getEnvironment().services["svcUrl"].url
        	imgObj.set_image(svcUrl + "/co/image.do?docRegId=" + docRegId + "&docRegSeq=" + docRegSeq);
        	//imgObj.set_image("/co/image.do?docRegId=" + docRegId + "&docRegSeq=" + docRegSeq);

        	var nLeft = nexaObj.left;
        	var nTop = nexacro.toNumber(nexaObj.top) + nexacro.toNumber(nexaObj.height);

        	imgObj.set_top(nTop);
        	imgObj.set_left(nLeft);
        	imgObj.set_visible(true);
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
