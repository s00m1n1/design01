$(document).ready(function(){
    // 공지사항 보도 자료 탭 교체 
    // 탭 제목 - click - 해당 탭이 보임
    // 보이는 탭의 li에만 active addClass
    // 클릭대상 : .notice ul li 
    // 실행 : click li - active addClass = $(this)
    // -> 내가 클릭하지 않은 탭은 안보여야함 (클릭 하지 않은 li에 active removeClass)
    // -> 즉, 모든 li에 active 클래스 삭제 후 내가 클릭한 li에만 active를 다시 줌
    $('.notice ul li').on('click', function(){
        $('.notice ul li').removeClass('active');
        $(this).addClass('active');
    });
});