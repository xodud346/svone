(function(){try{var a={pluginName:"magicjs",isLoadedComplete:!1};G_KUPlugin.magicjs=a;a.isRequiredCheck=function(d){return a.isLoadedComplete};var e=function(a,c){var e=document.getElementsByTagName("head")[0],b=document.createElement("script");b.type="text/javascript";b.onload=function(){c(!0)};b.onerror=function(){c(!1)};b.src=a;e.appendChild(b)};a.onInit=function(){var d=KUPLOADTOP.G_CURRKUPLOADER._config.webPath.plugin+"magicjs/js"+(KUPLOADTOP.RAONKUPLOAD.isRelease?"":"_dev")+"/config.js",d=d+
("?t="+KUPLOADTOP.RAONKUPLOAD.util.getTimeStamp());e(d,function(c){if(0==c)a.isLoadError=!0,a.isLoadedComplete=!0;else{if(c=G_KUPlugin.magicjs.options.extraModules)for(var d=c.length,b=0;b<d;b++)window[c[b].name]=c[b].object;var f=G_KUPlugin.magicjs.options.extraJsModules;f.push(KUPLOADTOP.G_CURRKUPLOADER._config.webPath.plugin+"magicjs/js/upload.js");var l=f.length,g=0,h=f[0]+"?t="+KUPLOADTOP.RAONKUPLOAD.util.getTimeStamp(),k=function(){g++;g>=l?a.isLoadedComplete=!0:(h=f[g]+"?t="+KUPLOADTOP.RAONKUPLOAD.util.getTimeStamp(),
e(h,k))};e(h,k)}})};a.onInit();a.onLoaded=function(){}}catch(m){}})();
