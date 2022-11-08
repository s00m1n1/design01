$(document).ready(function(){
    let fixLnb = $('.lnb');
    let fixHeader = $('.header');
    let lnbTop;
    let headerH;
    let lnbScroll;

    lnbFix();
    $(window).scroll(function(){
        lnbFix();
    });
    $(window).resize(function(){
        lnbFix();
    });
    function lnbFix(){
        lnbTop = fixLnb.offset().top;
        headerH = fixHeader.height();
        lnbScroll = $(window).scrollTop();
        if(lnbScroll >= lnbTop-headerH){
            fixLnb.css('position', 'fixed');
            fixLnb.css('top', headerH+'px');
        }else{
            fixLnb.css('position', 'relative');
            fixLnb.css('top','auto');
        }
    }
});