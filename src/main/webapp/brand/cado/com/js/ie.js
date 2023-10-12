document.createElement('ng-include');
document.createElement('ng-pluralize');
document.createElement('ng-view');
// Optionally these for CSS
document.createElement('ng:include');
document.createElement('ng:pluralize');
document.createElement('ng:view');
if( Object.create === undefined ) {
	Object.create = function( o ) {
	    function F(){}
	    F.prototype = o;
	    return new F();
	};
}
if (!Array.prototype.indexOf) { // ie8에서 indexOf 함수를 사용할 수 있게 함 
     Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) { 
            "use strict"; 
            if (this == null) { 
                   throw new TypeError(); 
            } 
            var t = Object(this); 
            var len = t.length >>> 0; 
            if (len === 0) { 
                   return -1; 
            } 
            var n = 0; 
            if (arguments.length > 0) { 
                   n = Number(arguments[1]); 
                   if (n != n) {
                          n = 0; 
                      } else if (n != 0 && n != Infinity && n != -Infinity) { 
                          n = (n > 0 || -1) * Math.floor(Math.abs(n)); 
                   } 
            } 
            if (n >= len) { 
                   return -1; 
            } 
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); 
            for (; k < len; k++) { 
                   if (k in t && t[k] === searchElement) { 
                          return k; 
                   } 
            } 
            return -1; 
     };
}