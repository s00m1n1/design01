$(document).ready(function(){
    //모든 html요소가 로딩된 이후에 jquery를 실행
    
    //visual영역의 높이를 브라우저의 높이와 동일하게 설정
    //브라우저가 리사이즈 될때마다 높이를 다시 설정
    //visual의 문구는 높이 위아래의 가운데에 배치
    let winH = $(window).height();

    //visual의 높이를 window의 높이로 설정
    $('.visual .cnt_h').height(winH); 

    console.log('window의 높이' + winH);
    
    //브라우저가 리사이즈될 때 마다 실행
    $(window).resize(function(){
        winH = $(window).height();
        $('.visual .cnt_h').height(winH);
        console.log('window의 높이' + winH);
    });

});//document.ready 종료