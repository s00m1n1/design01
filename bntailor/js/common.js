$(document).ready(function(){
    /*
        브라우저를 스크롤 하면 header에 fixed 클래스 추가
        $(window).scrollTop() -- 브라우저 스크롤값
        $(window).scroll() - 브라우저가 스크롤 될때마다 실행

        1. 브라우저가 스크롤이 되면 header에 fixed 클래스를 추가  
        2. 브라우저가 다시 상단에 올라가면 header에 fixed 클래스를 삭제
    */

    let scrolling; //로딩됐을때 단 한번 실행
    scrollChk();

    $(window).scroll(function(){ //스크롤 할때마다 실행
        scrollChk();
    });

    function scrollChk(){
        scrolling = $(window).scrollTop();
        // console.log(scrolling, '스크롤될때마다');

        if(scrolling > 0){ //스크롤 중
            $('.header').addClass('fixed');
        }else{ //맨위로 이동
            $('.header').removeClass('fixed');
        }
    }
    /*
    모바일 메뉴 열기
    .header .gnb .gnb_open을 클릭
    1. 자기 자신한테 mobile_open 클래스 추가/삭제
    2. .header .gnb .gnb_open strong의 글자 메뉴열기 -> 메뉴닫기 변경

    메뉴 open 상태인지 close 상태인지 구분
    close 시 > mobile_open addClass, "메뉴닫기" (문구변경)
    open 시 > mobile_open removeClass, "메뉴열기" (문구변경)

    mobile_open class > X > close 상태
    mobile_open class > O > open 상태
    */
   let gnbStu // 메뉴 열림 닫힘 저장 변수
   $('.header .gnb .gnb_open').on('click',function(){
        gnbStu = $('.header .gnb').hasClass('mobile_open');
        if(gnbStu == true){
            $('.header .gnb').removeClass('mobile_open')
            $('.header .gnb .gnb_open strong').text("메뉴열기");
        }else{
            $('.header .gnb').addClass('mobile_open')
            $('.header .gnb .gnb_open strong').text("메뉴닫기");
        }
   });
});