$(document).ready(function(){
    let winW = $(window).width ()
    let docW = $(document).width ()

    console.log(winW)
    console.log(docW)
    
    // $('header').addClass('fixed')
    // $('header').removeClass('fixed')

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
    let scrolling 
    headerFixded()//함수실행
    

    /*스크롤 할 때마다 실행*/ 
    $(window).scroll(function(){
        headerFixded()//함수실행
    })


    function headerFixded(){ //함수선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')    
        }else{
            $('header').removeClass('fixed')    
        }
    }

    /*header nav에 마우스를 올리면 header에 class추가 */

    $('header nav > ul').on('mouseenter focusin', function(){ /*nav ul에 오버했을때*/ 
        $('header').addClass('open')
    })
    $('header').on('mouseleave', function(){    /*nav block에서 벗어나면 사라져서 백그라운드 컬러부분 까지 다 잡아주기 위해header영역으로 바꿔줘야함*/ 
        $('header').removeClass('open')
    })
    $('header nav > ul > li:last-child > ul > li:last-child').on('focusout', function(){   
        $('header').removeClass('open')
    })

    // .product .list .tit 고정 
    // -- 스크롤을 내리다가 화면에 product 콘텐츠가 보일때는 h2에 fixed 클래스를 추가
    // product 콘텐츠가 화면에 보이는 구간 
    // .product 페이지 상단에 도달했을때 : 콘텐츠 보일 시작점
    // offset().top == 해당콘텐츠가 브라우저 상단 위쪽에 닿을 정도의 스크롤값

    // -- 처음에 h2이 나타나기전 영역(다른 콘텐츠와 같이 스크롤 되어 따라올라옴)
    // h2 고정되는 영역(고정되어 옆에 콘텐츠만 스크롤됨)- fixed클래스추가
    // h2 고정된 이후 영역(다른콘텐츠를 따라서 싱행)- end 클래스 추가

    let fixObj = $('.product h2'); //고정요소
    let fixArea = $('.product'); //고정요소를 감싸는 영역
    let fixTop = 224; //css에서 fixed에 준 top값
    let fixBtm = 95; //css에서 end에 준 bottom값
    let fixStart;
    let fixEnd;
    let fixScroll = $(window).scrollTop();//브라우저 스크롤 값
    // console.log(fixStart, 'fixStart');
    // console.log(fixEnd, 'fixEnd');

    objFixed();

    $(window).scroll(function(){
        fixScroll = $(window).scrollTop();
        objFixed();
    });

    $(window).resize(function(){
        objFixed();
    });

    function objFixed(){
        // console.log(scrolling);
        fixStart = fixArea.offset().top - fixTop;
        fixEnd = fixArea.offset().top + fixArea.height() - fixObj.height() - fixBtm - fixTop;

        if(fixScroll < fixStart){ // 위에서 부터 tit이 고정되기 전
            fixObj.removeClass('fixed');
            fixObj.removeClass('end');
        }else if((fixScroll >= fixStart)&&(fixScroll < fixEnd)){ //tit이 고정될때
            fixObj.addClass('fixed');
            fixObj.removeClass('end');
        }else{ //고정된 이후
            fixObj.removeClass('fixed');
            fixObj.addClass('end');
        }
    }  



})

