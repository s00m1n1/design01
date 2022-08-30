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
    headerFixded()//함수실행
    

    /*스크롤 할 때마다 실행*/ 
    $(window).scroll(function(){
        headerFixded()//함수실행
    })


    function headerFixded(){ //함수선언
        scrolling = $(window).scrollTop()
        if(scrolling > 500){
            $('header').addClass('fixed')    
        }else{
            $('header').removeClass('fixed')    
        }
    }

    /*header nav에 마우스를 올리면 header에 class추가 */

    $('header nav>ul').on('mouseenter focusin', function(){ /*nav ul에 오버했을때*/ 
        $('header').addClass('open')
    })
    $('header').on('mouseleave', function(){    /*nav block에서 벗어나면 사라져서 백그라운드 컬러부분 까지 다 잡아주기 위해header영역으로 바꿔줘야함*/ 
        $('header').removeClass('open')
    })
    $('header nav>ul>li:last-child>ul>li:last-child').on('focusout', function(){   
        $('header').removeClass('open')
    })
})

