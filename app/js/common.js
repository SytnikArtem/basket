$(document).ready(function() {
  $('.delivery-tab').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).hasClass('delivery-tab_js')) {
      console.log('ss')
      var index = $(this).index();
      $('.location-item').removeClass('active');
      $('.location-item').eq(index).addClass('active')
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
    $('.location-item').removeClass('active');
    $('.location-item').eq(2).addClass('active')
  });
  $('.location-end-btn').click(function (e) {
    e.preventDefault();
    $('.location-item').removeClass('active');
    $('.location-item').eq(1).addClass('active')
  })
});
