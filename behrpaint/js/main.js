$(document).ready(function(){
    let winW = $(window).width ()
    let docW = $(document).width ()

    console.log(winW)
    console.log(docW)
    
    $('header').addClass('fixed')
    $('header').removeClass('fixed')

    // TOP버튼을 클릭했을때 상단으로 스크롤
    $('aside button').on('click', function(){
        console.log('클릭')
        // $(window).scrollTop(100)
        $('html,body').animate({
            scrollTop : 0
        },500)
    })
    // header에
    // 조건 1 - 스크롤 값이 0보다 크면 header에 fixed class 추가
    // 조건 2 - 스크롤 값이 0이면 header에 fixed class 삭제
    /*로딩했을 때 맨처음*/ 
    let scrolling = $(window).scrollTop() 
    console.log(scrolling)

    /*스크롤 할 때마다 실행*/ 
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 500){
            $('header').addClass('fixed')    
        }else{
            $('header').removeClass('fixed')    
        }
    })
})

