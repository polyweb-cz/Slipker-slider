$(document).ready(function () {
    var slipkerLi = $(".slipker_wraper li");

    $(".prew").click(function () {
        coun = slipkerLi.length;
        acti = slipkerLi.index($(".active"));
        prew = acti - 1;
        if (prew < 0) {
            prew = coun - 1;
        }
        slipkerLi.eq(acti).children('img').css('left', 0).css('right', 'initial');
        slipkerLi.eq(prew).children('img').css('left', 0).css('right', 'initial');
        slipkerLi.eq(acti).toggleClass('active');
        slipkerLi.eq(prew).toggleClass('active');
    });

    $(".next").click(function () {
        coun = slipkerLi.length;
        acti = slipkerLi.index($(".active"));
        next = acti + 1;
        if (next >= coun) {
            next = 0;
        }
        slipkerLi.eq(acti).children('img').css('right', 0).css('left', 'initial');
        slipkerLi.eq(next).children('img').css('right', 0).css('left', 'initial');
        slipkerLi.eq(acti).css('text-align', 'right');
        slipkerLi.eq(acti).toggleClass('active');
        slipkerLi.eq(next).toggleClass('active');
    });
});