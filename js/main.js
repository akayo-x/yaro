"use strict";
$(function() {
    /*$("#region").change(function() {
        if ($("#region").val() == 1)
        {
            $("#pay_4").parent().show();
            $("#pay_3").parent().show();
        } else
        {
            $("#pay_4").parent().hide();
            $("#pay_3").parent().hide();
            $("#pay_1").prop("checked", true);
        }
    });*/

    $("#pay_4").parent().hide();
    $("#pay_3").parent().hide();
    $("#pay_1").prop("checked", true);

    if (location.hash) {
		setTimeout(function() {
			window.scrollTo(0, 0);
		}, 1);
	}


/*	alert(window.location.hash);
	var s = $(this), o = s.index();
    s.addClass("active").siblings().removeClass("active"), $(".tabs__item").eq(o).addClass("active").siblings().removeClass("active")*/
        

    function e() {
        $(".nav__toggle").toggleClass("on"), $(".nav__list").toggleClass("active")
    }
    function s(e, s) {
        var o = $(".js-goods[data-name=" + e + "]");
        var oi = $(".order__item[data-name=" + e + "]");
        
        $(o).each(function(e, o) {
            var a =+ $(o).data("count"), t =+ $(o).data("price"), i = $(o).find(".js-goods-odometer"), n = $(o).find(".js-goods-total"), d = wNumb({
                decimals: 0,
                thousand: " "
            });
            s ? a < 99 && ($(o).addClass("on"), i.html(++a), $(o).data("count", a), n.html(d.to( + a*+t))) : a > 1 ? (i.html(--a), $(o).data("count", a), n.html(d.to( + a*+t))) : ($(o).hasClass("order__modals_item") || $(o).removeClass("on"), i.html(0), $(oi).hide(), $(o).data("count", 0), n.html(0));
        })
    }
    function o(e) {
        var s = localStorage.getItem(e);
        if (null !== s&&!(s.length < 3))
            return JSON.parse(s)
    }
    function a() {
        t(), localStorage.setItem("goods", JSON.stringify(u)), u.length > 0 ? (i(), $(".nav__basket").addClass("show")) : (l(), $(".nav__basket").removeClass("show"))
    }
    function t() {
        u = [], $(".goods__item.on").each(function() {
            var e = {}, s = $(this), o = s.data("count"), a = s.data("name"), t = s.data("price"), c = s.css("--main-color"),title=s.children(".goods__title").text(), pic =  s.data("pic"), pic2x =  s.data("pic2x"), box =  s.data("box"), box2x =  s.data("box2x"), description =  s.data("description");
            o > 0 && (e.name = a, e.count = o, e.price = t, e.color = c,e.title = title, e.pic = pic,e.pic2x = pic2x, e.box = box,e.box2x = box2x, e.description = description, u.push(e))
        })
    }
    function i() {
        var e = 0, s = 0, discount = $("#discount").val()?$("#discount").val():0,del_limit = 1800, del_sum = 500;;
        u.forEach(function(o) {
            var a = o.count, t = o.price;
            e += a * t, s += a
        });
        e*=(1-discount);
        e=e<del_limit?e+del_sum:e;
        var o = wNumb({
            decimals: 0,
            thousand: " "
        });
        s > 0 && ($(".nav__basket_full span").html(o.to(e)), $(".nav__basket_count").html(s)), l()
    }
    function n() {
        $(".modals__item.show").removeClass("show"), setTimeout(function() {
            $(".modals").removeClass("show"), $(".catalog").css("padding-right", "").removeClass("overflow-hidden"),$(".blog").css("padding-right", "").removeClass("overflow-hidden"), $(".header").css("padding-right", "")
        }, 200), setTimeout(function() {
            $(".modals__item").addClass("d-none")
        }, 410)
    }
    function d() {
        $(".order__modals_item.show").removeClass("show"),
         setTimeout(function() { $(".order__modals").removeClass("show"), $(".confirm").css("padding-right", "").removeClass("overflow-hidden"), $(".header").css("padding-right", "")}, 200),  
         setTimeout(function() {  $(".order__modals_item").addClass("d-none")}, 410)
    }
    function r() {
        var  o = "", a = "", t = 0, i = 0, n = wNumb({
            decimals: 0,
            thousand: " "
        }),delivery = "", del_limit = 1800, del_sum = 500; // Доставка
                
        u.forEach(function(d) {
            var r = d.count, l = d.name, cl = d.color, c =+ l.slice(5), p = d.pic, p2x = d.pic2x, b = d.box, b2x = d.box2x, m = d.title, _ = d.price, u = n.to( + _*+r), des = d.description == "" ? "<div>Большая коробка <br><small>20 штук</small>" : d.description;
           // console.log(d);
            o += '<div class="order__item js-goods" data-name="' + l + '" data-price="' + _ + '" data-count="' + r + '" data-pic="'+ p+'" data-pic2x="' + p2x +'" data-box="'+ b+'" data-box2x="' + b2x +'"><div class="order__item_img"><img src="'+p+'" srcset="'+ p2x +' 2x" alt=""  /></div><div class="order__item_title">' + m + '</div><div class="order__item_action"><span class="order__minus minus js-goods-minus"></span><span class="order__plus plus js-goods-plus"></span></div><div class="order__item_count"><span class="js-goods-odometer">' + r + '</span> коробки </div><div class="order__item_price"><div class="order__item_info" data-tooltops="'+ des.replace(/<\/?[^>]+>/g,'') + ' "></div>                        х '+_+' руб.</div><div class="order__item_total"><span class="js-goods-total">' + u + '</span> руб.</div>                    <div class="order__item_edit">Редактировать</div>                </div>',
            a += '<div class="order__modals_item d-none" id="' + l + '"  style="--main-color: ' + cl + ';">                    <div class="goods__item js-goods on" data-name="' + l + '" data-price="' + _ + '" data-count="' + r + '" data-pic="'+ p +'" data-pic2x="'+ p2x +'" data-box="'+ b +'" data-box2x="'+ b2x +'"><div class="goods__title">' + m + '</div><div class="goods__right"><div class="goods__counter"><div class="goods__counter_img"><img src="'+ b +'" alt="item_small" srcset="'+ b2x +' 2x"></div><div class="goods__counter_val">× <span class="js-goods-odometer">' + r + '</span></div></div><div class="goods__img"><img src="' + p + '" alt="'+ m +'" ></div></div><div class="goods__footer"><div class="goods__actions"><span class="goods__minus minus js-goods-minus"></span><span class="goods__plus plus js-goods-plus"></span></div><div class="goods__info">' + des + '</div><div class="goods__price"><b>'+_+' руб</b><span></span></div></div> </div></div><div class="order__modals_save">Сохранить</div></div>',
            t += r, i+=+_*+r
        });
        delivery=i<del_limit?'<div class="order__delivery_item">Доставка<b>'+del_sum+' руб.</b></div>':"";
        i=i<del_limit?i+del_sum:i;
        var d = '<div class="order__total"><div class="order__total_item">Упаковок <b class="js-order-box">' + t + '</b></div>                <div class="order__total_item" style="display: none">Батончиков <b class="js-order-count">' + 20 * t + '</b></div><div class="js-order-delivery">'+delivery+'</div><div class="js-order-discount"></div><div class="order__total_item">Итого <b class="js-order-price">' + n.to(i) + ' руб.</b></div></div>';
        o = d + o, u.length > 4 && (o += d), $(".order__list").html(o), $(".order__modals").html(a)
    }
    function l() {
        var e = 0, s = 0,discount = $("#discount").val(), del_limit=1800, del_sum=500;
        u.forEach(function(o) {
            var a = o.count, t = o.price;
            e += a, s+=+t*+a
        });
        s*=(1-discount);
        var o = wNumb({
            decimals: 0,
            thousand: " "
        });
        var discountText = discount > 0 ? "Скидка <b>"+(100*discount).toFixed()+"%</b>":"";
        if (discount > 0) {// Если есть скидка, то выбираем то, что цель достигли
            ym(40922079,'reachGoal','order_promo_pressed'); 
        }
        var delivery=s && s <del_limit?'<div class="order__delivery_item">Доставка<b>'+del_sum+' руб.</b></div>':"";
 		s=s && s<del_limit?s+del_sum:s;
        $(".js-order-box").html(e), $(".js-order-count").html(20 * e), $(".js-order-price").html(o.to(s)+" руб."), $(".js-order-discount").html(discountText), $(".js-order-delivery").html(delivery)
    }
    function c(e) {
        if ($(".modals.show").length) {
            var s = $(".modals__item").length, o = $(".modals__item.show"), a = o.index(), t = e?++a:--a;
            t === s && (t = 0), o.removeClass("show"), setTimeout(function() {
                o.addClass("d-none")
            }, 410), $(".modals__item").eq(t).removeClass("d-none"), setTimeout(function() {
                $(".modals__item").eq(t).addClass("show")
            }, 10)
        }
    }
    var m = function() {
        (window.pageYOffset || document.documentElement.scrollTop) > 50 ? $("body").addClass("scroll") : $("body").removeClass("scroll")
    };
    if (m(), window.onscroll = function() {
        m()
    }, $(document).width() > 1023 ? ($(".nav__toggle").hover(function() {
        e()
    }, function() {}), $(".nav__list").hover(function() {}, function() {
        e()
    })) : $(".nav__toggle").on("click", function() {
        e()
    }), $("body").hasClass("main"))
        if ($(document).width() > 1023)
            $("[data-main-color]").hover(function() {
                var e = $(this).data("main-color");
                $("body").css("--main-color", e)
            }, function() {
                $("body").attr("style", "")
            });
        else {
            var _ = $(".product__item");
            $(window).scroll(function() {
                var e = $(this).scrollTop(), s = $(".product__item:eq(0)");
                _.each(function() {
                    $(this).offset().top - 200 < e && (s = $(this));
                    var o = s.data("main-color");
                    $("body").css("--main-color", o)
                })
            })
        }
    $("body").on("click", ".js-goods-plus", function() {
    	if ($(this).parents(".js-goods").data("price") > 0)
	        s($(this).parents(".js-goods").data("name"), !0), a()
	    else
	    	alert("Выбранный вами товар купить временно нельзя. Приносим свои извинения.");
    }), $("body").on("click", ".js-goods-minus", function() {
        s($(this).parents(".js-goods").data("name"), !1), a()
    });
    if ( /tab\_[0-9]/.test(document.location.hash)){		
           var id = document.location.hash;
       	   var ss = $(id), oo = ss.index();
       		$(".tabs__link").eq(oo).addClass("active").siblings().removeClass("active"),ss.addClass("active").siblings().removeClass("active"),
			$(".contacts__content").children().eq(oo).addClass("active").siblings().removeClass("active")
    	}
    
    var u = [];
    o("goods") && function(e) {
        e.forEach(function(e) {
            var s = $(".js-goods[data-name=" + e.name + "]");
            s.addClass("on"), s.data("count", e.count), s.find(".js-goods-odometer").html(e.count);
            var o = wNumb({
                decimals: 0,
                thousand: " "
            });
            s.find(".js-goods-total").html(o.to(e.count * e.price)), s.data("price", e.price)
        }), $(".nav__basket").addClass("show"), u = e, i(), $(".confirm").hasClass("confirm") && r()
    }(o("goods")), 
    $(".catalog .goods__more, .catalog .goods__right").on("click", function(e) {
        e.preventDefault();
        var s = "#" + $(this).parents(".goods__item").data("name"), o = window.innerWidth - document.documentElement.clientWidth;
        $(".catalog").css("padding-right", o).addClass("overflow-hidden"), $(".header").css("padding-right", o), $(".modals").addClass("show"), $(s).removeClass("d-none"), setTimeout(function() {
            $(s).addClass("show")
        }, 200)
    }),$(".blog__list .blog__item_more").on("click", function(e) {
        e.preventDefault();
        var s = "#" + $(this).parents(".blog__item").data("name"), o = window.innerWidth - document.documentElement.clientWidth;
        $(".blog").css("padding-right", o).addClass("overflow-hidden"), $(".header").css("padding-right", o), $(".modals").addClass("show"), $(s).removeClass("d-none"), setTimeout(function() {
            $(s).addClass("show")
        }, 200)
    }),
     $(".modals__mix_more").on("click", function(e) {
        e.preventDefault();
        var s = $(this), o = s.parents(".modals__item"), a = s.attr("href");
        o.removeClass("show"), setTimeout(function() {
            o.addClass("d-none")
        }, 410), $(a).removeClass("d-none"), setTimeout(function() {
            $(a).addClass("show")
        }, 10)
    }), $(".modals__close").on("click", function(e) {
        e.preventDefault(), n()
    }), $(".tabs__link").click(function(e) {
        e.preventDefault();
        var s = $(this), o = s.index();
        s.addClass("active").siblings().removeClass("active"), $(".tabs__item").eq(o).addClass("active").siblings().removeClass("active")
    }), $(".tabs__view_link-list").click(function(e) {
        e.preventDefault(), $(this).addClass("active").siblings().removeClass("active"), $(".tabs__content").removeClass("tabs__content-grid")
    }), $(".tabs__view_link-grid").click(function(e) {
        e.preventDefault(), $(this).addClass("active").siblings().removeClass("active"), $(".tabs__content").addClass("tabs__content-grid")
    }), 
    $(".iselect").select2(), 
    $('.iselect').on("select2:select", function(e) { 
   		$("#tab_"+e.params.data.id).addClass("active").siblings().removeClass("active");

	}),
	$(".contacts__nav_link").click(function(e) {
        e.preventDefault();
        var s = $(this), o = s.index();
        s.addClass("active").siblings().removeClass("active"), $(".contacts__content").children().eq(o).addClass("active").siblings().removeClass("active")
    }), $(".order__item_edit").on("click", function(e) {
        e.preventDefault();
        var s = "#" + $(this).parents(".order__item").data("name"),
         o = window.innerWidth - document.documentElement.clientWidth;
        $(".confirm").css("padding-right", o).addClass("overflow-hidden"), 
        $(".header").css("padding-right", o), 
        $(".order__modals").addClass("show"), 
        $(s).removeClass("d-none"), 
        setTimeout(function() {
            $(s).addClass("show")
        }, 200)
    }), $("body").on("click", ".order__modals_save", function(e) {
        e.preventDefault(), d();  
    }), jQuery.validator.addMethod("phoneRU", function(e, s) {
        return this.optional(s) || /^((8)+([0-9]){10})$/.test(e.replace(/\s+/g, ""))
    }, jQuery.validator.messages.phoneRU || "Please specify a valid phone number"), $(".order__form").validate({
        rules: {
            promo: {
                required: !1,
                minlength: 4
            },
            tel: {
                required: !0,
                phoneRU: !0
            },
            username: {
                required: !0,
                minlength: 2
            },
            email: {
                required: !0,
                email: !0
            },
            address: {
                required: !0,
                minlength: 2
            },
            comment: {
                required: !1
            },
            pay: "required",
            region: {
                required: !0
            },
            agree: "required"
        },
        messages: {
            promo: {
                minlength: "Недействительный код"
            },
            tel: {
                required: "Введите телефон в формате 8 495 9204842",
                phoneRU: "Введите телефон в формате 8 495 9204842"
            },
            username: {
                required: "Введите Имя Фамилия",
                minlength: "Введите ваше имя и фамилию корректно"
            },
            email: "Введите email",
            address: {
                required: "Введите адрес доставки",
                minlength: "Адрес доставки введен неправильно"
            },
            pay: "Требуется выбрать способ оплаты",
            region: "Укажите ваш регион",
            agree: "Требуется принять согласие"
        },
        errorElement: "span",
        submitHandler: function() {
    	 var cart = '';
          u.forEach(function(o) {
           //alert(o.name.match(/\d+/)); 
           cart+='&b['+o.name.match(/\d+/)+']='+o.count;
        });
        var form = AjaxData("order__form");

			
		$.ajax({
			url: "/inc/order.php",
			dataType: "json",
			data: "ajax=1&action=do-order" + form + cart,
			// обработка успешного выполнения запроса
			success: function(data) {
                ym(40922079,'reachGoal','order_created');
                if (data.res) {
					$("#order__form")[0].reset();
					u = [],localStorage.setItem("goods", JSON.stringify(u)), u.length > 0 ? (i(), $(".nav__basket").addClass("show")) : (l(), $(".nav__basket").removeClass("show")),$(".order__list").html("");
//alert('location='+data.location);
					if (data.location !='' )
						location=data.location;
					else
						alert("Ваш заказ отправлен. Номер заказа №" + data.order + ". Наш менеджер вам перезвонит.");

					//clearCard();
				} else {
					alert(data.message);
				}
			}
		});
		
		
  		}
    }),$(".contact__form").validate({
        rules: {
            tel: {
                required: !0,
                phoneRU: !0
            },
            username: {
                required: !0,
                minlength: 2
            },
            email: {
                required: !0,
                email: !0
            },
            comment: {
                required: !1
            },
            agree:  "required"
        },
        messages: {
            tel: {
                required: "Введите телефон ",
                phoneRU: "Телефон введен не верно"
            },
            username: {
                required: "Введите имя",
                minlength: "Имя введено не верно"
            },
            email: "Введите email",
            agree: "Требуется принять согласие"
        },
        errorElement: "span",
        submitHandler: function() {        		
        		sendMessage(),
        		e.preventDefault(), $(this).addClass("d-none"), $(".contact__form_send").removeClass("d-none");
        		return false;	
        			//e.preventDefault(), $(this).addClass("d-none"), $(".contact__form_send").removeClass("d-none")
        }

    }), 
    $("#tel").change(function() {
   	if ($("#tel").val()){
		var time=Math.random();
		$.ajax({
			url: "/inc/order.php",
			dataType: "json",
			cache: false,
			data: "ajax=1&action=check-discount&tel="+$("#tel").val()+"&total="+$("#price").val()+"&promo="+$("#promo").val()+"&time="+time,
			// обработка успешного выполнения запроса
			success: function(data) {
				if (data.res) {
						$("#discount").val(data.discount);
						$("#discount_type").val(data.discount_type);
						i();	
				}
			}
		});
	} 	
	}),
	$("#promo").change(function() {	
   	if ($("#promo").val()){
		var time=Math.random();
		$.ajax({
			url: "/inc/order.php",
			dataType: "json",
			cache: false,
			data: "ajax=1&action=check-discount&tel="+$("#tel").val()+"&total="+$("#price").val()+"&promo="+$("#promo").val()+"&time="+time,
			// обработка успешного выполнения запроса
			success: function(data) {
				if (data.res) {
						$("#discount").val(data.discount);
						$("#discount_type").val(data.discount_type);
						i();	
				}
			}
		});
	}else {
						$("#discount").val(0);
						$("#discount_type").val(0);
						l();	

	}
	}),
    $("#history").fullpage({
        anchors: ["history-1", "history-2", "history-3", "history-4", "footer"],
        sectionsColor: ["#FCDB6F", "#D4DA25", "#18CE85", "#F5708D", "#fff"],
        verticalCentered: !1,
        navigation: !0,
        navigationPosition: "left",
        scrollOverflow: !0,
        responsive: 1024,
        onLeave: function(e, s) {
            0 === s.index || 4 === s.index ? $("#fp-nav").removeClass("show") : $("#fp-nav").addClass("show")
        }
    }), $(".history__next .more").click(function(e) {
        e.preventDefault(), fullpage_api.moveSectionDown()
    }), window.addEventListener("keydown", function(e) {
        if (!e.defaultPrevented) {
            switch (e.key) {
            case"Left":
            case"ArrowLeft":
                c(0);
                break;
            case"Right":
            case"ArrowRight":
                c(1);
                break;
            case"Escape":
                n();
                break;
            default:
                return 
            }
            e.preventDefault()
        }
    }, !0), $(".contact__btn").click(function(e) {
        e.preventDefault();
        var s = window.innerWidth - document.documentElement.clientWidth;
        $(".contact").css("padding-right", s).addClass("overflow-hidden"), $(".header").css("padding-right", s), $(".contact__modal").addClass("show")
    }), $(".contact__modal_close").click(function(e) {
        e.preventDefault(), $(".contact").css("padding-right", "").removeClass("overflow-hidden"), $(".header").css("padding-right", ""), $(".contact__modal").removeClass("show")
    }), $(".contact__form_submit").click(function(e) {
    
     })
});

function AjaxData(id){
	var form_data = "";	
	if(id){
		var Elements = $("#" + id + " * ");
		for(var i=0; i<Elements.length; i++){
			var name = $(Elements[i]).attr("name");
			var value = $(Elements[i]).val();
			if((Elements[i].tagName=="INPUT" || Elements[i].tagName=="TEXTAREA" || Elements[i].tagName=="SELECT") && name!="" && value!=""){
				
				var type = $(Elements[i]).attr("type");
				if(Elements[i].tagName=="INPUT" && (type=="radio" || type=="checkbox")){
					if ($(Elements[i]).is(":checked"))
						form_data = form_data+"&"+ name +"="+ value;
					continue;
				}
				form_data = form_data+"&"+ name +"="+ value;
			}
		}
		//alert(form_data);
	}
	return form_data;
};

new Swiper('.popup__slider', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' <small>/ ' + '<span class="' + totalClass + '"></span></small>';
        }
      },
    });

$('.vegan__item').click(function() {
    $('.vegan__popup').fadeToggle().addClass('vegan__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.vegan__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });

  $('.old__item').click(function() {
    $('.old-school__popup').fadeToggle().addClass('old-school__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.old-school__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.coco__item').click(function() {
    $('.coco__popup').fadeToggle().addClass('coco__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.coco__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.old-orig__item').click(function() {
    $('.old__popup').fadeToggle().addClass('old__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.old__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.bar__item').click(function() {
    $('.bar__popup').fadeToggle().addClass('bar__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.bar__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.nutty__item').click(function() {
    $('.nutty__popup').fadeToggle().addClass('nutty__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.nutty__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.caramel__item').click(function() {
    $('.caramel__popup').fadeToggle().addClass('caramel__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.caramel__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.crush__item').click(function() {
    $('.crush__popup').fadeToggle().addClass('crush__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.crush__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });
  $('.amarat__item').click(function() {
    $('.amarat__popup').fadeToggle().addClass('amarat__popup-active');
});
$(document).on('mouseup', function(e){
    let s = $('.amarat__popup-active');
    if(!s.is(e.target) && s.has(e.target).length === 0) {
      s.fadeOut();
    }
  });