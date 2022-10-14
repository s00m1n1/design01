$(document).ready(function(){
    const swiper = new Swiper('.visual1', {

        loop: true, //무한반복
        effect: "fade", //fade 효과로 팝업 넘김 (지우면 좌우 슬라이드)
        
        autoplay: { //자동실행
            delay: 3000, //하나의 팝업이 머무는 시간
            disableOnInteraction: false,
        },

        // 팝업의 갯수 표시와 현재 팝업순서 
        pagination: {
          el: '.ctrl_paging',
          //clickable: true, //팝업 순서 표시 클릭
          type: "fraction", //숫자로 팝업 수 표시
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.ctrl_next',
          prevEl: '.ctrl_prev',
        },
    });
      
    $('.visual1 .ctrl_stop').on('click', function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
    });
    $('.visual1 .ctrl_play').on('click', function(){
        swiper.autoplay.start();  /* 재생 기능 */
    });
});