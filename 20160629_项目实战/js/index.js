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

//->JS控制SECTION区域的高度
$(function () {
    //->通过jQuery的css方法获取的结果是加上单位的,我们计算的话需要把单位去除掉
    change();
    function change() {
        var $section = $(".section");
        var curH = $(window).outerHeight() - $(".header").outerHeight() - parseFloat($section.css("marginTop")) - parseFloat($section.css("marginBottom"));
        $section.css({
            height: curH
        });
    }

    $(window).on("resize", change);
});
