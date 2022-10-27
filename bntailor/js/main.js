$(document).ready(function(){
    const swiper = new Swiper('.visual .popup', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.btn_paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },

    }); //visual swiper
    //vusyal popup stop/play button
    //btn_stop button에 
    //play class 없음 > stop
    //play class 있음 > play
    //true > play O > playing > stop show / false > play X > stopping > play show
    $('.visual .popup .btn_stop').on('click', function(){
        let popStatus = $(this).hasClass('play'); 
        if(popStatus == true){
            swiper.autoplay.start();
            $(this).removeClass('play');
            $(this).text('일시정지');
        }else{
            swiper.autoplay.stop();
            $(this).addClass('play');
            $(this).text('재생');
        }
    });

    // fabric 이미지 스크롤 효과
    let scrolling;
    let moveTop;
    let obJname = $('.fabric .bg img')
    fabricScroll(); //로딩됬을 때 한번
    $(window).scroll(function(){ //스크롤 할때 마다 실행
        fabricScroll();
    });
    // scroll 값을 계산을 계산해서 fabric의 이미지를 움직일 함수
    function fabricScroll(){
    // 스크롤 값을 요소의 위치값으로 변경해서 스타일을 적용
    // 효과를 줄 요소가 화면의 하단에 등장하기 시작했을때부터
    // 스크롤 한값을 새로 계산해서 해당 요소에 줘야 해당 요소가 
    // 화면 어디에 배치되어 있든 자연스럽게 패럴럭스 효과를 줄 수 있음
        scrolling = $(window).scrollTop();
        console.log(scrolling);
        console.log(obJname.offset().top);
        moveTop = scrolling*0.15;
        // obJname.css('transform','translate(0, -'+moveTop+'px)');
    }

});