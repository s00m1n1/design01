$(document).ready(function(){
    // html요소가 모두 다 로됭된 이후에 이벤트를 주기 때문

    /*
    메뉴에 마우스 오버 시 headerd에 menu_open class 추가 (pc 버전)
    */
   //맨 처음에 로딩됬을 때 한번만 실행
   let winW;
   let pcMobile;
   deviceChk(); 
   //브라우저 리사이즈 될때마다 실행
   $(window).resize(function(){
    deviceChk();
   })
   function deviceChk(){
    winW = $(window).width();

    if(winW > 640){
        pcMobile = 'pc'
        console.log(pcMobile);
       }
       else{
        pcMobile = 'mobile'
        console.log(pcMobile);
       }
   }
/*
이벤트는 pc와 모바일 상관없이 준다
단 실행을 pc일때만 실행하게 한다
on(이벤트핸들러)으로주는 이벤트는 moussenter이벤트가 발생할때마다 실행됨
*/ 
    $('.header .gnb > ul > li').on('mouseenter focusin',function(){
        if(pcMobile == 'pc')(
            $('.header').addClass('menu_open')
    )
    })
   $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
    })
   $('.header .gnb > ul > li:last-child > ul > li:last-child > a').on('focusout',function(){
        $('.header').removeClass('menu_open')
    })

/*.header .gnb .gnb_open - click - .header addClass 'menu_mobile' (메뉴열기)
  .header .gnb .gnb_close - click - .header removeClass 'menu_mobile' (메뉴닫기)
  -> only mobile activity (pc - hide)
  -> .header에 'menu_mobile'스타일 적용상태에서 pc로 전환시도 고려*/
    $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_mobile')
    })
    $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_mobile')
    })

/*.header .gnb > ul > li - click - .header .gnb > ul > li addClass 'sub_class'
  -> only mobile activity 
  -> if when open - close (remove)
  -> if when close - open (add)
  -> 여러메뉴 동시 오픈 가능 (직접 닫아야함)
  -> pc에서는 1차메뉴 클릭 - 첫번째 하위 메뉴 이동 
     모바일은 이동 하면 안되고 2차메뉴가 열려야함*/
    $('.header .gnb > ul > li').on('click', function(e){
        if( pcMobile == 'mobile'){
            e.preventDefault(); /*해당 요소를 클릭했을 때 기본적으로 발생하는 이벤트를 취소 - href로 페이지 이동 취소 */
        /* 1차메뉴를 클릭했을때 a href로 페이지가 이동하는 현상을 막기 */
            $(this).toggleClass('sub_open');
        }
    });
})