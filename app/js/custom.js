jQuery( document ).ready(function() {

    jQuery(".js-popup").fancybox({
        touch: false,
        // Try to focus on the first focusable element after opening
        autoFocus : false,

        // Put focus back to active element after closing
        backFocus : false,

        // Do not let user to focus on element outside modal content
        trapFocus : false,
    });
    $('.js-style').styler();
    jQuery('.slick-slider').slick({
        dots: true,
        draggable: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.compare-slider-top').slick({
        dots: false,
        draggable: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.compare-slider-bottom',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.compare-slider-bottom').slick({
        dots: false,
        draggable: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        asNavFor: '.compare-slider-top',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });





    jQuery('.main-banner-slider').slick({
        dots: false,
        arrows:false,
        draggable: false,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.item-slider').slick({
        dots: false,
        draggable: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                }
            },
            {
                breakpoint: 768,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.main-card-slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        draggable: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.card-slider-nav',
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                    dots: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.card-slider-nav').slick({
        dots: false,
        arrows: false,
        fade: false,
        draggable: true,
        focusOnSelect: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '0',
        slidesToScroll: 1,
        asNavFor: '.main-card-slider',
        responsive: [
            {
                breakpoint: 1200,
                settings: {

                }
            },
            {
                breakpoint: 768,
                settings: {

                }
            },
            {
                breakpoint: 480,
                settings: {

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.js-discount-slider').slick({
        dots: false,
        draggable: false,
        infinite: true,
        speed: 400,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });




    if ($(window).width() < 768) {
        jQuery('.news-grid').slick({
            dots: false,
            draggable: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
        });
    }



    jQuery(function($){
        $('.phone-mask-1').inputmask("999");
        $('.phone-mask-2').inputmask("9999999");
        $('.phone-mask').inputmask("+7 ( 999 ) 9999999");
    });

    $(document).ready(function () {
        $(".phone-input").on('input', function () {
            if ($(this).val().length == $(this).attr('maxlength')) {
                $(this).next().focus();
            }
        });
        $('.phone-input').keydown(function(e) {
            if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
                $(this).prev('input').focus();
            }
        });
    });



    jQuery('.js-brand-slider').slick({
        dots: false,
        draggable: false,
        infinite: true,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 1,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    variableWidth: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    variableWidth: true,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    jQuery('.burger-menu').click(function () {
    });
    jQuery('.anchor-link').bind("click", function(e){
        var anchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    new WOW().init();


    $( ".js-product-tool" ).click(function() {
       jQuery(this).toggleClass('active');
       return false;
    });



    $( ".js-open-quantity" ).click(function() {
        jQuery(this).hide();
       jQuery('.quantity-control').show();

       return false;
    });
    $( ".js-close-quantity" ).click(function() {
        jQuery('.quantity-control').hide();
        jQuery('.js-open-quantity').show();

        return false;
    });



    $( ".js-confirm-quantity" ).click(function() {
        jQuery('.quantity-control').hide();
       jQuery('.after-add').show();

       return false;
    });




    $( ".js-product-tool.compare" ).click(function() {
       jQuery('.compare-line').slideDown(200);
       return false;
    });
  $( ".js-call-search" ).click(function() {
      jQuery(this).toggleClass('active');
       jQuery('.mobile-search').slideToggle(200);
       return false;
    });



    $( ".js-compare-line-close" ).click(function() {
       jQuery('.compare-line').slideUp(200);
       return false;
    });

    $( ".js-basket-btn" ).click(function() {
       jQuery('.js-basket-modal-list').fadeToggle(150);
       return false;
    });


    $('.catalog-filter-item').each(function () {
        var $this = $(this);

        $this.find('.catalog-filter-item__title').click(function () {


            jQuery(this).toggleClass('active');
            $this.find('.catalog-filter-item__content').slideToggle(200);
            return false;
        });

    });


    $('.pre-footer .footer-nav__item').each(function () {
        var $this = $(this);

        $this.find('.footer-nav__title').click(function () {


            jQuery(this).toggleClass('active');
            $this.find('.pre-footer-content').slideToggle(200);
            return false;
        });

    });

    $('.compare-box-nav .next').click(function() {
        jQuery('.compare-slider-top').slick('slickNext');
    });

    $('.compare-box-nav .prev').click(function() {
        jQuery('.compare-slider-top').slick('slickPrev');
    });

    $( ".js-grid-type-1" ).click(function() {
        jQuery('.view-type a').not(this).removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.catalog-grid').addClass('full');
        return false;
    });
    $( ".js-grid-type-2" ).click(function() {
        jQuery('.view-type a').not(this).removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.catalog-grid').removeClass('full');
        return false;
    });



    $( ".open-category-choose" ).click(function() {

       jQuery('.choose-category').show();
        jQuery('.close-category').show();


       jQuery('.category-item-title__box').hide();
       jQuery('.catalog-filter-top__reset').hide();
       jQuery('.catalog-filter-top__title').hide();

    });
    $( ".close-category" ).click(function() {

        jQuery('.choose-category').hide();
        jQuery('.close-category').hide();


        jQuery('.category-item-title__box').show();
        jQuery('.catalog-filter-top__reset').show();
        jQuery('.catalog-filter-top__title').show();

    });


    $( ".catalog-filter-top__confirm" ).click(function() {

        jQuery('.mobile-filter').fadeOut(150);
        setTimeout(function(){
            jQuery('.overlay').fadeOut(200);
        }, 150);
    });


    $( ".overlay" ).click(function() {

        jQuery('.mobile-filter').fadeOut(150);
        setTimeout(function(){
            jQuery('.overlay').fadeOut(200);
        }, 150);
    });


    $( ".open-mobile-filter__btn" ).click(function() {

        jQuery('.overlay').fadeIn(150);
        setTimeout(function(){
            jQuery('.mobile-filter').fadeIn(150);
        }, 200);
    });


    $( ".burger-menu" ).click(function() {
        jQuery(this).addClass('active');
        jQuery('body').toggleClass('overflow');
        jQuery('.main-wrapper').toggleClass('active');
        jQuery('.mobile-menu').toggleClass('active');
    });

    $( ".mobile-menu-close" ).click(function() {
        jQuery('.burger-menu').removeClass('active');
        jQuery('body').toggleClass('overflow');
        jQuery('.main-wrapper').toggleClass('active');
        jQuery('.mobile-menu').toggleClass('active');
    });


    jQuery('.accessories-filter a').click(function(e) {
        jQuery('.accessories-filter a').not(this).removeClass('active');
        jQuery(this).addClass('active');
        e.preventDefault();
    });
    $(function () {
        $('#datepicker').datepicker($.extend({
            },

            $.datepicker.setDefaults( $.datepicker.regional[ "ru" ] )
        ));
    });
    $( ".open-personal-box a" ).click(function() {
       jQuery(this).toggleClass('active');
       jQuery('.open-personal-box-content').slideToggle(300);

       return false;
    });









// Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.product-line').removeClass('up').addClass('down');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.product-line').removeClass('down').addClass('up');
            }
        }

        lastScrollTop = st;
    }














});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".js-basket-modal-list,.js-basket-btn"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".js-basket-modal-list").fadeOut(150);
    }
});


jQuery('.js-tab-item').click(function(e) {
    var a = jQuery(this),
        parent = a.parents('.js-tabs-container'),
        nav = parent.children('.js-tabs-nav').children('li'),
        box = parent.children('.js-tabs-box').children('div');

    if (!a.hasClass('active')) {
        a.addClass('active')
            .siblings().removeClass('active');


        box.eq(a.index()).addClass('active')
            .siblings().removeClass('active');
    }


    e.preventDefault();
});












function pageWidget(pages) {
    var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    widgetWrap.prependTo("body");
    for (var i = 0; i < pages.length; i++) {
        $('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    }
    var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    widgetStilization.prependTo(".widget_wrap");
}

$(document).ready(function ($) {
    pageWidget([
        'index',
        'product-card',
        'compare',
        'popup-page',
        'basket',
        'basket-step2',
        'basket-step3',
        'basket-step4',
        'basket-step5',
        'about-us',
        'account-1',
        'account-2',
        'account-3',
        'account-4',
        'account-5',
        'contacts',
        'text-page1',
        'text-page2',

    ]);
});


$(document).ready(function(){

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('.js-choose-rating .rating-item').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('.rating-item').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('.rating-item').each(function(e){
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('.js-choose-rating .rating-item').on('click', function(){
        var onStar = parseInt($(this).data('value'), 0); // The star currently selected
        var stars = $(this).parent().children('.rating-item');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('active');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('active');
        }

    });


});