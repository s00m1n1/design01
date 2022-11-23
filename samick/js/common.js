$(document).ready(function(){
    let winW = $(window).width()
    let pcMobile 

    if(winW > 860){
        pcMobile = 'pc'
        console.log(pcMobile);
    }else{
        pcMobile = 'mobile'
    }

    $(window).resize(function(){
        winW = $(window).width()
        if(winW > 860){
            pcMobile = 'pc'
        }else{
            pcMobile = 'mobile'
        }
    })

    $('.header .gnb .gnb_wrap>ul>li').on('mouseenter focuin',function(){
        if(pcMobile == 'pc'){
            $('.header').addClass('menu_open')
            // $('.header .gnb .gnb_wrap>ul>li>ul').slideDown()
        }
    })
    $('.header').on('mouseleave',function(){
        $('.header').removeClass('menu_open')
        // $('.header .gnb .gnb_wrap>ul>li>ul').slideUp()
    })
    $('.header .gnb .gnb_wrap>ul>li:last-child>ul>li:last-child>a').on('focusout', function(){
        $('.header').removeClass('menu_open')
        // $('.header .gnb .gnb_wrap>ul>li>ul').slideUp()
    })

    
    $('.header .gnb button.gnb_open').on('click', function(){
        if(pcMobile == 'mobile'){
            $('.header').addClass('mobile_open');
        }
    });
    $('.header .gnb button.gnb_close').on('click', function(){
        $('.header').removeClass('mobile_open');
    });
    
    let sub_menu_status
    $('.header .gnb .gnb_wrap>ul>li>a').on('click', function(e){
        if(pcMobile == 'mobile'){
            sub_menu_status =  $(this).parents('li').hasClass('sub_open')
            if( sub_menu_status == true ){
                e.preventDefault(); 
                $(this).next().slideUp()
                $(this).parents('li').removeClass('sub_open');
            }else{
                e.preventDefault(); 
                $(this).next().slideDown()
                $(this).parents('li').addClass('sub_open');
            }
        }
    }); 


    const swiper = new Swiper('.popup', { /* 팝업을 감싼는 요소의 class명 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'bullets',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.btn_prev',  
        },

    });

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

    $('.colect ul li').on('click', function(){
        $('.colect ul li').removeClass('active');
        $(this).addClass('active');
    });
    

    let colect_h = $('.colect ul li .detail').height() + $('.colect ul li').height()
    $('.colect').height(colect_h)
    $(window).resize(function(){
        colect_h = $('.colect ul li .detail').height() + $('.colect ul li').height()
        $('.colect').height(colect_h)
    })


})