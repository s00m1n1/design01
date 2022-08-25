//언제 :스크롤을 내렸을때
//누구를  :header : $('header)
//어떻게 fixed 클래스 추가 addClass() - 클래스추가하는 명령
// 다시 위로 올라갓을 때 fixed 삭제해야함
// $(window).scollTop();-얼만큼 스크롤 되어쓴지 계산해주는 값
// 스크롤값을 계산해서-콘솔을 이용해서 계산함
// 스크롤을 200보다 많이하면 fixed를 추가하고 200이하면 fixed를 삭제
//let 변수 선언

let scrolling = $(window).scrollTop()

$(window).scroll(function(){
    scrolling = $(window).scrollTop()
    // console.log(scrolling)

    if(scrolling > 0){
        $('header').addClass('fixed')
    }
    else{
        $('header').removeClass('fixed')
    }
});