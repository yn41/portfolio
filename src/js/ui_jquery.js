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