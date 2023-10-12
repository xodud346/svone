//nav ck
function nav_ck(){
	$("nav a").each(function(i){
		if(this_pg.indexOf("product") > -1){
			//product
			this_pg_tx = this_pg.split("_");
			$("nav a:eq(1)").addClass("on");
			$("nav ol a").each(function(){
				if( $(this).find("a").text().indexOf( this_pg_tx[1] ) > -1 ) $(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
			});
		}else if($(this).text().indexOf(this_pg) > -1){
			//나머지
			$(this).addClass("on");
			return false;
		}
	});
}