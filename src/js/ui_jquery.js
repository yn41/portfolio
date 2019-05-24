document.createElement("article");
document.createElement("section");
document.createElement("aside");
document.createElement("nav");
document.createElement("header");
document.createElement("footer");

function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName != "Microsoft Internet Explorer"){
        return;
    }
    else {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    $("html").addClass("ie"+rv);
}
getInternetExplorerVersion();

function fnOpenPop(num) {
    $(".pop_wrap").attr("data-trg", $(window).scrollTop()).fadeIn(100);
    $(".pop").each(function(i){
        if($(this).attr("data-idx") == num){
            $(this).fadeIn(100,  function(){
                $("html, body").css({"position":"fixed","overflow":"hidden","width":"100%","height":"100%"}).bind('touchmove');
            });
            return;
        }
    });
}
$(function(){
    $(".btn_close").click(function(){
        $("html, body").css({"position":"","overflow":"","width":"","height":""}).unbind('touchmove').scrollTop($(".pop_wrap").attr("data-trg"));
        $(".pop").fadeOut(100, function(){
            $(".pop_wrap").fadeOut(100).attr("data-trg", "0");
        });
    });
    $("body").click(function(e){
        var pop = $(".pop_wrap");
        if(pop.is(e.target)){
            $("html, body").css({"position":"","overflow":"","width":"","height":""}).unbind('touchmove').scrollTop($(".pop_wrap").attr("data-trg"));$(".pop").fadeOut(100, function(){
                $(".pop_wrap").fadeOut(100).attr("data-trg", "0");
            });
        }
    });
});
