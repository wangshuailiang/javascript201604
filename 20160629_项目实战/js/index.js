//->头部导航下载区域的展开和收起
$(function () {
    $(".header .downLoad").on("mouseover", function () {
        $(this).children(".code,.iframeBg").css({
            height: 179
        });
    }).on("mouseout", function () {
        $(this).children(".code,.iframeBg").css({
            height: 0
        });
    });
});