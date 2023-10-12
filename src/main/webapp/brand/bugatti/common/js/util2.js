$.com = $.com || {}
$.cateImg = $.cateImg || ['cate5312_002_138.jpg', 'cate5313_002_139.jpg', 'cate5314_002_140.jpg', 'cate5315_002_141.jpg', 'cate5317_002_142.jpg', 'cate5316_002_143.jpg'];
$.bugatti = $.bugatti || {
	url: function(){
		/*
			$.com.url / 현제 url
			$.com.url_sp / 파라미터
		*/
		$.com.url = document.location.href;
		$.com.url_sp = $.com.url.split('?');
		
		if($.com.url_sp == undefined) return false;
		
		//category_sub.html
		if($.com.url_sp[0].indexOf('category_sub.html') != -1){
			if($.com.url_sp[1] == undefined){
				//주방가전 카테(주방가전)
				$.bugatti.pr('cate_pg', '', $.cateImg);
			}else{				
				//상품별 카테(전기포트 vera, 핸드믹서...)
				$.com.ct_num = $.com.url_sp[1].replace('ct_num=', '');	
				$.bugatti.pr_ajax($.com.ct_num);
			}
		}
		//category_main.html
		else if($.com.url_sp[0].indexOf('category_main.html') != -1){
			//상품상세
			if($.com.url_sp[1] == undefined){
				alert('잘못된 경로로 접속하였습니다.');
				location.href = './category_sub.html';
			}else{
				var url_sp = $.com.url_sp[1].split('&');
				$.com.ct_num = url_sp[0].replace('ct_num=', '');
				$.com.prd_cd = url_sp[1].replace('prd_cd=', '');
				$.bugatti.pr_ajax($.com.ct_num, $.com.prd_cd);
			}
		}
	},//url: function(){
	pr: function(_ct_num, _prd_cd, _db_ct_num, _opt_html){
		/* console.log(_ct_num);
		console.log(_prd_cd);
		console.log(_db_ct_num);
		console.log(_opt_html);*/
		/*
			category_sub.html	/ 그냥 카테
			category_sub.html?ct_num=5312		/ 대카테
			category_main.html?ct_num=5312&prd_cd=1092514		/ 카테별 상품
		*/
		if(_db_ct_num.length == 0){
			alert('잘못된 경로로 접속하였습니다.');
			location.href = $.com.url_sp[0];
			return false;
		};

		//gnb + lnb
		$.gnb = $.gnb || $('.gnb'),
		$.gnb.pr = $.gnb.find('section:eq(1)');
		$.each($.gnb.pr.find('li a'), function(i){
			if(_ct_num == 'cate_pg') return false;
				
			var _this = $(this),
				_ck = _this.attr('href').indexOf(_ct_num);
			
			if(_ck != -1){
				$.gnb.pr.num = i;
				_this.parent().addClass('on').siblings().removeClass('on');
				return false;
			}
		});
		
		$.cateListHtml = '',//pc
		$.cateListHtml_m = '',//mobile
		$.lnb_tx = $('#content_main #Lnb p .black');

		if($.com.url_sp[0].indexOf('category_sub.html') != -1){
			if(_ct_num == 'cate_pg'){
				//그냥 카테
				$.lnb_tx.prev().remove();//lnb tx

				$.each(_db_ct_num, function(i){
					var _this_db = _db_ct_num[i],
						_a = $.gnb.pr.find('li:eq('+i+') a'),
						_tx = _a.text(),
						_link = _a.attr('href');

					$.cateListHtml += '<li>';
					$.cateListHtml += '	<a href="'+_link+'">';
					$.cateListHtml += '		<img src="http://www.etland.co.kr/etlandbo/product/brandsite/'+$.cateImg[i]+'" alt="'+_tx+'" />';
					$.cateListHtml += '	</a>';
					$.cateListHtml += '</li>';
				});
			}else{
				//종류별 카테
				$.lnb_tx.text(_db_ct_num[0].ct_name);//lnb tx

				$.each(_db_ct_num, function(i){
					var _this_db = _db_ct_num[i];
					if(_this_db.prd_img == undefined) return false;

					$.cateListHtml += '<li>';
					$.cateListHtml += '	<a href="./category_main.html?ct_num='+_this_db.ct_num+'&prd_cd='+_this_db.prd_cd+'">';
					$.cateListHtml += '		<i><img src="./images/sub_over.png" ></i>';
					$.cateListHtml += '		<img src="'+_this_db.prd_img._each_num[0]+'" alt="'+_this_db.prd_ti+'" class="img_pr" />';
					$.cateListHtml += '	</a>';
					$.cateListHtml += '</li>';

					if(i == 0){
						$.cateListHtml += '<li>';
						$.cateListHtml += '	<a href="javascript:void(0)">';
						$.cateListHtml += '		<img src="http://www.etland.co.kr/etlandbo/product/brandsite/'+$.cateImg[$.gnb.pr.num]+'" alt="'+_this_db.prd_ti+'" />';
						$.cateListHtml += '	</a>';
						$.cateListHtml += '</li>';
					}
				});
			}
		}else if($.com.url_sp[0].indexOf('category_main.html') != -1){
			//상품 상세
			$.lnb_tx.text(_db_ct_num[0].ct_name);//lnb tx
			var _db_this = _db_ct_num[0],
				_db_prd_img = _db_this.prd_img._each_num,
				_each_num = 10;
			
			//이미지
			$.each(_db_prd_img, function(i){
				var _this_src = _db_prd_img[i];
					
				$.cateListHtml += '<li>';
				$.cateListHtml += '	<a href="javascript:Showgroup(\'dt'+(_each_num+i)+'\',\'dt_zoom_group\');">';
				$.cateListHtml += '		<i>';
				$.cateListHtml += '			<img src="./images/view.png" alt="확대보기" />';
				$.cateListHtml += '		</i>';
				$.cateListHtml += '		<img src="'+_this_src+'" alt="" id="dt'+(_each_num+i)+'" class="img_pr" />';				
				$.cateListHtml += '	</a>';
				$.cateListHtml += '</li>';

				$.cateListHtml_m += '<li>';
				$.cateListHtml_m += '	<a href="javascript:ShowgroupM(\'dtlm'+(i+1)+'\',\'dt_zoom_group2\');">';
				$.cateListHtml_m += '		<i><img src="http://image.etland.co.kr/etland/images/bugatti/dt_zoom.png" alt="확대보기" /></i>';
				$.cateListHtml_m += '		<img src="'+_this_src+'" alt="" id="dtlm'+(i+1)+'" class="img_pr" />';				
				$.cateListHtml_m += '	</a>';
				$.cateListHtml_m += '</li>';
			});
			
			var _title = $('.detail .a_title'),
				_info = $('.dt_tab .dt_Wbox'),
				_info2 = $('.dt_tab1 .dt_Wbox');
			
			//제목, 서브제목
			_title.children('h1').html(_db_this.prd_ti+'<span>'+((_db_this.prd_color).replace(/[(가-힣ㄱ-ㅎㅏ-ㅣ)]/gi, ''))+'</span>');
			_title.children('p').text(_db_this.prd_tx);
			_info.find('.dt_price strong').text(String(_db_this.prd_price).number_format());//가격
			_info2.find('.dt_price span').html('<img src="http://image.etland.co.kr/etland/images/bugatti/dt_won.png">'+String(_db_this.prd_price).number_format());//가격
			
			$.each(_info.find('.dt_notice .dt_txt'), function(i){
				var _this = $(this),
					_html = '';

				switch(i){
				  case 0 : _this = _this.children('div:last-child');//상품명
							_html = _db_this.prd_ti;
							break;
				  case 1 : _this = _this.children('div:last-child');//상품코드
							_html = _db_this.prd_cd;
							break;
				  case 2 : _this = _this.find('#prd_color');//상품색상
							_html = _opt_html;
							break;
				  case 3 : _this = _this.children('div:last-child');//디자이너
							_html = _db_this.prd_designer;
							break;
				  case 4 : _this = _this.children('div:last-child');//무게
							_html = _db_this.prd_weight;
							break;
				  case 5 : _this = _this.children('div:last-child');//사이즈
							_html = _db_this.prd_size;
							break;
				}
				_this.html(_html);
			});
			$.each(_info.find('.dt_notice > div .dt_txt'), function(i){
				var _this = $(this),
					_html = '';

				switch(i){
				  case 0 : _this = _this.children('div:last-child');//상품명
							_html = _db_this.prd_ti;
							break;
				  case 1 : _this = _this.children('div:last-child');//상품코드
							_html = _db_this.prd_cd;
							break;
				  case 2 : _this = _this.find('#prd_color');//상품색상
							_html = _opt_html;
							break;
				  case 3 : _this = _this.children('div:last-child');//디자이너
							_html = _db_this.prd_designer;
							break;
				  case 4 : _this = _this.children('div:last-child');//무게
							_html = _db_this.prd_weight;
							break;
				  case 5 : _this = _this.children('div:last-child');//사이즈
							_html = _db_this.prd_size;
							break;
				}
				_this.html(_html);
			});
			//select
			var _opt_select = $('#prd_color');
			_opt_select.find('option[value='+_prd_cd+']').attr('selected', true);
			_opt_select.on('change', function(){
				var url_ct_num = $.com.url_sp[1].split('&'),
					url_ct_num = url_ct_num[0];

				location.href = $.com.url_sp[0]+'?'+url_ct_num+'&prd_cd='+$(this).val();
				return false;
			});

			//제품특징
			_info.find('.dt_gBox ul li').html(_db_this.prd_character);
			_info2.find('.dt_gBox ul li').html(_db_this.prd_character);

			//구매하기
			_info.find('.btn_buy').attr('onclick', 'window.open(\'http://casabugatti.etland.co.kr/etland/servlet/fs.EtlandServlet_FS?tc=c.cmd.FSC_renew_shop_cmd&gb=CS_DTAL&PRD_CD='+_db_this.prd_cd+'\')');
			_info2.find('.dt_buy_btn .btn_buy').attr('href', 'http://casabugatti.etland.co.kr/etland/servlet/fs.EtlandServlet_FS?tc=c.cmd.FSC_renew_shop_cmd&gb=CS_DTAL&PRD_CD='+_db_this.prd_cd);
		}
		$('#cate_list').html($.cateListHtml);
		if($.cateListHtml_m != ''){
			$('#rolling_group1').html($.cateListHtml_m);
			f_detail();//detail 모바일관련 script
		}
	},//pr: function(){
	store: function(){
		$.storeList = $('#inner'),
		$.storeMap = $('#map'),
		$.storeHtml = function(_st_add_f){
			var _list_html = '';
			$.each($.bugatti.store_db, function(i){
				var db_this = $.bugatti.store_db[i],
					db_st_add_f = db_this.st_add_f,
					_st_tx = '',
					_ico_class = '';
				
				if(_st_add_f == db_st_add_f){
					_list_html += '<li>';
					_list_html += '	<div class="st_div" onclick="javascript:$.storeCodeLatLng(\''+db_this.st_lat+', '+db_this.st_lng+'\',\''+db_this.st_name+'\', \''+db_this.st_add_l+'\', true)">';
					_list_html += '		<div class="st_store">';
					_list_html += '			<div>';				
					_list_html += '				<span><strong>'+db_this.st_name+'</strong></span>';
					_list_html += '				<span class="tel">'+db_this.st_tell+'</span>';
					_list_html += '			</div>';
					_list_html += '			<div>'+db_this.st_add_l+'</div>';
					_list_html += '		</div>';
					_list_html += '	</div>';
					_list_html += '</li>';
				}
			});
			return _list_html;
		};
		$.storeList.html($.storeHtml(10)).find('li > div').on('click', function(){
			$(this).parent().addClass('on').siblings().removeClass('on');
		});
		$.storeList.find('li:eq(0)').addClass('on');

		var geocoder, map, marker, ck_one = false;
		var infowindow = new google.maps.InfoWindow();
		function initialize(){
		  geocoder = new google.maps.Geocoder();
		  var latlng = new google.maps.LatLng(37.564894, 126.981752);
		  var mapOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: 'roadmap',
			scrollwheel: false
		  }
		  map = new google.maps.Map(document.getElementById('map'), mapOptions);
		  if(!ck_one){
			ck_one = true;
			$.storeCodeLatLng('37.565262, 126.981305','롯데백화점 / 본점', '서울시 용산구 한강로3가 16-9');
		  }
		}
		
		$.storeCodeLatLng = function(val, ti_tx, add_l, click_ck){
			var input = val,
				latlngStr = input.split(',', 2),
				lat = parseFloat(latlngStr[0]),
				lng = parseFloat(latlngStr[1]);	
			
			var f_marker = function(latlng){
				if(marker != undefined) marker.setMap(null);
				geocoder.geocode({'latLng': latlng}, function(results, status){
					if(status == google.maps.GeocoderStatus.OK){
						if(results[1]){
							map.setZoom(15);
							marker = new google.maps.Marker({
								position: latlng,
								map: map
							});
							var latLng = marker.getPosition(); // returns LatLng object
							map.setCenter(latLng);

							infowindow.setContent("<strong>"+ti_tx+"</strong><br>"+results[1].formatted_address);
							infowindow.open(map, marker);
						}else{
							console.log('No results found');
						}
					
					}else{
						console.log('Geocoder failed due to: ' + status);
					}
				});//geocoder.geocode({'latLng': latlng}, function(results, status){
			};

			if(isNaN(lng) || isNaN(lat)){
				//좌표 이상할때
				$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+add_l+'&sensor=false', null, function (data) {
					var p = data.results[0].geometry.location;
					latlng = new google.maps.LatLng(p.lat, p.lng);
					f_marker(latlng);
				});			
			}else{
				//좌표 멀쩡할때
				latlng = new google.maps.LatLng(lat, lng);
				f_marker(latlng);
			}			
		}//$.storeCodeLatLng = function(val, ti_tx, add_l){
		google.maps.event.addDomListener(window, 'load', initialize);
	},//store: function(){
	faq: function(_ck_tx){
		$.faq = $('#faq_list_d'),
		$.faqHtml = '',
		$.faqHtmlF = function(i, _this_faq){
			$.faqHtml += '<li>';
			$.faqHtml += '	<a href="javascript:QNAshow(\''+i+'\');"><span id="chk'+i+'">'+_this_faq.ti+'</span></a>';
			$.faqHtml += '	<div id="'+i+'" style="display:none;">';
			$.faqHtml += '		<p>';
			$.faqHtml += '			<img src="http://image.etland.co.kr/etland/images/bugatti/faq_a.png" alt="" />';
			$.faqHtml += _this_faq.tx;
			$.faqHtml += '		</p>';
			$.faqHtml += '	</div>';
			$.faqHtml += '</li>';
		};
		if(_ck_tx == 'search') $.faqSh_tx = $('#SearchWord').val();

		$.each($.bugatti.faq_db, function(i){
			var _this_faq = $.bugatti.faq_db[i];
			if(_ck_tx == 'search' && _this_faq.ti.indexOf($.faqSh_tx) != -1 || _this_faq.tx.indexOf($.faqSh_tx) != -1){
				$.faqHtmlF(i, _this_faq);
				$('.faq_list_wrap .faq_board ul li:eq(0)').addClass('on').siblings().removeClass('on');
				$.faqNav.swipeTo(0);
			}else if(_ck_tx == '전체'){
				$.faqHtmlF(i, _this_faq);
			}else if(_ck_tx == _this_faq.type){
				$.faqHtmlF(i, _this_faq);
			}
		});
		
		$.faq.html($.faqHtml);
		$('.faq_list_wrap .faq_board ul li a').off('click').on('click', function(){
			var _this = $(this),
				_idx = _this.parent().index(),
				_tx = _this.text();
			_this.parent().addClass('on').siblings().removeClass('on');
			$.bugatti.faq(_tx);
		});
		return false;
	},//faq: function(){
	pr_ajax: function(_ct_num, _prd_cd){
		if(_ct_num == undefined) return false;
		$.ajax({ 
			type:'GET'
			,url:'./common/js/pr_db'
			,dataType:'text'
			,success: function(json){
				if(typeof json != 'undefined' && json != null && json != ''){
					// 리턴된 text -> json Object 변환
					var data = $.trim(json);//$.trim : 리턴된 문자열 앞 뒤 공백제거
					data =  $.parseJSON(data);
					/*$.bugatti.pr_db = data;// 상품 데이터
				
					if(_ct_num != undefined){
						var _db_ct_num=[],
							_opt_html = '';//색상옵션 html
					
						if(_prd_cd != undefined){
							$.each($.bugatti.pr_db, function(i){
								var _this_db = $.bugatti.pr_db[i];
								
								if(_this_db.ct_num == _ct_num){
									_opt_html += '<option value="'+_this_db.prd_cd+'" >'+_this_db.prd_color+'</option>';
									if(_this_db.prd_cd == _prd_cd){
										_db_ct_num.push(_this_db);
									}
								}
							});
						}else{
							$.each($.bugatti.pr_db, function(i){
								var _this_db = $.bugatti.pr_db[i];
								if(_this_db.ct_num == _ct_num){
									_db_ct_num.push(_this_db);
								}
							});
						}						
						$.bugatti.pr(_ct_num, _prd_cd, _db_ct_num, _opt_html);
					}//if(_ct_num != undefined){*/
					

					$.bugatti.pr_db = data;// 상품 데이터
					$.bugatti.pr_db2 = [];

					var _db_all = [];
						_db_each = [],
						_chk_prd_cd = '',
						_each_num = 0;
						
					$.each($.bugatti.pr_db, function(i){					
						var _this = $.bugatti.pr_db[i];

						if(_chk_prd_cd != _this.prd_cd){
							_chk_prd_cd = _this.prd_cd;
							
							$.bugatti.pr_db2.push(_this);

							if(_db_each.length > 0){
								_db_all.push({_each_num : _db_each});
								_db_each = [];
								_each_num++;
							}										
						}
						_db_each.push(_this.prd_img[0]);
					});

					$.each($.bugatti.pr_db2, function(i){
						$.bugatti.pr_db2[i].prd_img = _db_all[i]; 
					});
					$.bugatti.pr_db = $.bugatti.pr_db2;
					
					if(_ct_num != undefined){
						var _db_ct_num=[],
							_opt_html = '';//색상옵션 html
					
						if(_prd_cd != undefined){
							$.each($.bugatti.pr_db, function(i){
								var _this_db = $.bugatti.pr_db[i];
								
								if(_this_db.ct_num == _ct_num){
									_opt_html += '<option value="'+_this_db.prd_cd+'" >'+_this_db.prd_color+'</option>';
									if(_this_db.prd_cd == _prd_cd){
										_db_ct_num.push(_this_db);
									}
								}
							});
						}else{
							$.each($.bugatti.pr_db, function(i){
								var _this_db = $.bugatti.pr_db[i];
								if(_this_db.ct_num == _ct_num){
									_db_ct_num.push(_this_db);
								}
							});
						}						
						$.bugatti.pr(_ct_num, _prd_cd, _db_ct_num, _opt_html);
					}//if(_ct_num != undefined){



				}//if(typeof json != 'undefined' && json != null && json != ''){
			}
			,error: function() {
				console.log('ajax error');
			}
		});
	},//pr_ajax: function(_ct_num, _prd_cd){
	st_ajax: function(){
		$.ajax({ 
			type:'GET'
			,url:'./common/js/st_db'
			,dataType:'text'
			,success: function(json){
				if(typeof json != 'undefined' && json != null && json != ''){
					// 리턴된 text -> json Object 변환
					var data = $.trim(json);//$.trim : 리턴된 문자열 앞 뒤 공백제거
					data =  $.parseJSON(data);
					
					$.bugatti.store_db = data;// 상품리스트 데이터
					$.bugatti.store();
				}
			}
			,error: function() {
				console.log('ajax error');
			}
		});
	},//st_ajax: function(){
	faq_ajax: function(){
		$.ajax({ 
			type:'GET'
			,url:'./common/js/faq_db'
			,dataType:'text'
			,success: function(json){
				if(typeof json != 'undefined' && json != null && json != ''){
					// 리턴된 text -> json Object 변환
					var data = $.trim(json);//$.trim : 리턴된 문자열 앞 뒤 공백제거
					data =  $.parseJSON(data);
					
					$.bugatti.faq_db = data;// 상품리스트 데이터
					$.bugatti.faq('전체');
				}
			}
			,error: function() {
				console.log('ajax error');
			}
		});
	}//faq_ajax: function(){
};//$.bugatti = $.bugatti || {
String.prototype.number_format = function() { return this.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'); };

$(function(){
	$.bugatti.url();
});
	

