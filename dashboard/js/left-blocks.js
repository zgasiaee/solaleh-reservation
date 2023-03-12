$(function () {
  $('.menubar').click(function () {
    $('#register-level-see').click(function () {
      $('.pre-registration').fadeOut('500')
    })
  })

  $('#register-level-see').click(function () {
    $('.parent-info').addClass('blur')
    $('.left-blocks').fadeToggle('500')
  })

  $('.left-blocks-close').click(function () {
    $('.parent-info').removeClass('blur')
    $('.left-blocks').fadeToggle('500')
  })

  if ($(window).width() < 768) {
    $('#previous-level-page p').text('قبلی')
    $('#next-level-page p').text('بعدی')
  }
})
