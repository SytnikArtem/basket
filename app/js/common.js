$(document).ready(function() {
  $('.delivery-tab').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).hasClass('delivery-tab_js')) {
      var index = $(this).index();
      console.log(index);
      $('.location').find('.location-item').removeClass('active');
      $('.location').find('.location-item').eq(index).addClass('active');
    }
  });
  $('.delivery-tab_self').click(function () {
    console.log('xxx11');
    if($(window).width() < 992) {
      bodyFreezeScroll();
    }
  });
  $('.location-form-add').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.location-form-textarea').toggleClass('active');
    if($(this).hasClass('active')) {
      $(this).text('Удалить комментарий')
    }
    else {
      $(this).text('Добавить комментарий')
    }
  });
  $('.location-pin-tab').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.location-change-item').removeClass('active');
    $('.location-change-item').eq(index).addClass('active')
  });
  $('.list-item').click(function () {
    if($(window).width() > 991) {
      $('.location-item').removeClass('active');
      $('.location-item').eq(4).addClass('active')
    }
  });
  $('.list-btn').click(function () {
    if($(window).width() < 992) {
      $('.location-item').removeClass('active');
      $('.location-item').eq(4).addClass('active');
      bodyUnfreezeScroll()
    }
  });
  $('.location-end-btn').click(function (e) {
    e.preventDefault();
    $('.location-item').removeClass('active');
    $('.location-item').eq(1).addClass('active')
  });
  $('.order-btn').click(function () {
    $('.success, .goods_success').addClass('active');
    $('.order, .goods, .basket-line').addClass('hide');
    $('.total-row').removeClass('hide')
  });
  function checkHeight() {
    var $window = $(window);
    var $box = $('body');
    var $container = $box.find('.basket-scroll');
    var $progressBar = $box.find('.basket-line-progress');
    var $maxValue = $container.offset().top + $container.height() - $window.height();

    $window.on('scroll', function () {
      var $currentValue = $window.scrollTop();
      var $widthProgress = ($currentValue * 100) / $maxValue + '%';
      $progressBar.css('width', $widthProgress);

    });
  }
  checkHeight();


  $('.mobile-btn_goods').click(function(){
    $('.order').addClass('active');
    $('.goods, .mobile-first').addClass('hide');
    $('.header-basket').addClass('active');
    $('.mobile-items').addClass('active');
    $('.step-third').removeClass('active');
  });
  $('.location-pin-setting').click(function(){
    $(this).toggleClass('active');
    $(this).parent().find('.location-row-list').toggleClass('active');
  });
  $('.location-row-arrow').click(function () {
    $('.location-item_fixed').removeClass('active');
    $('.location').find('.location-item').eq(0).addClass('active');
    $('.delivery-tab_js').eq(0).addClass('active').siblings().removeClass('active');
  });
  $('.mobile-btn_next').click(function(){
    $('.order').removeClass('active');
    $('.goods-mobile, .mobile-second').addClass('active');
    $('.total-row').removeClass('hide');
    var stepNumber = $('.header-basket-number_current').text();
    $('.header-basket-number_current').text(+stepNumber + 1);
    $('.step-second').removeClass('active');
    $('.step-third').addClass('active');
  });
  $('.mobile-btn_confirm').click(function () {
    $('.success, .location-item_last').addClass('active');
    $('.mobile-btn_confirm').addClass('hide');
    $('.basket-line').addClass('hide');
  });
  $('.step-second').click(function () {
      $('.goods, .mobile-first').removeClass('hide');
      $('.order').removeClass('active');
      $('.header-basket').removeClass('active');
      $('.mobile-items').removeClass('active');
  });
  $('.step-third').click(function () {
    $('.order').addClass('active');
    $('.goods-mobile, .mobile-second').removeClass('active');
    $('.total-row').addClass('hide');
    var stepNumber = $('.header-basket-number_current').text();
    $('.header-basket-number_current').text(+stepNumber - 1);
    $('.step-second').addClass('active');
    $('.step-third').removeClass('active');
  });
  var $body = $(window.document.body);
  function bodyFreezeScroll() {
    var bodyWidth = $body.innerWidth();
    $body.css('overflow', 'hidden');
    $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
  }

  function bodyUnfreezeScroll() {
    var bodyWidth = $body.innerWidth();
    $body.css('marginRight', '0')
    $body.css('overflow', 'auto');
  }
});
