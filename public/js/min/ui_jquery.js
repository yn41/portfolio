function getInternetExplorerVersion(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e)&&(t=parseFloat(RegExp.$1)),$("html").addClass("ie"+t)}}function fnOpenPop(e){$(".pop_wrap").attr("data-trg",$(window).scrollTop()).fadeIn(100),$(".pop").each(function(t){$(this).attr("data-idx")!=e||$(this).fadeIn(100,function(){$("html, body").css({position:"fixed",overflow:"hidden",width:"100%",height:"100%"}).bind("touchmove")})})}document.createElement("article"),document.createElement("section"),document.createElement("aside"),document.createElement("nav"),document.createElement("header"),document.createElement("footer"),getInternetExplorerVersion(),$(function(){$(".btn_close").click(function(){$("html, body").css({position:"",overflow:"",width:"",height:""}).unbind("touchmove").scrollTop($(".pop_wrap").attr("data-trg")),$(".pop").fadeOut(100,function(){$(".pop_wrap").fadeOut(100).attr("data-trg","0")})}),$("body").click(function(t){$(".pop_wrap").is(t.target)&&($("html, body").css({position:"",overflow:"",width:"",height:""}).unbind("touchmove").scrollTop($(".pop_wrap").attr("data-trg")),$(".pop").fadeOut(100,function(){$(".pop_wrap").fadeOut(100).attr("data-trg","0")}))})});