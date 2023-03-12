window.addEventListener('load', function () {
  function toPersianNumeral(en) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '٠١٢٣٤٥٦٧٨٩'.slice(+t, +t + 1)
    })
  }

  let numbers = document.getElementsByClassName('number')
  for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = toPersianNumeral(numbers[i].innerHTML)
  }

  $('.menue').click(function () {
    var item = $(this).parent().parent().parent().find('.column')
    item.slideToggle(700)
    $('.src-group-container').toggleClass('blur')
    $('.mobile-info-row').toggleClass('blur')

    $(window).scroll(function () {
      if ($(window).scrollTop() > 30) {
        $('.column').css('height', '100vh')
        $('.column').css('margin-top', '0')
        $('.column .navbar').css('height', '75vh')
        $('.column .info-group').css('height', '29vh')
        $('.column .info-group .profile-container').css('margin-top', '1.5em')
      } else {
        $('.column').css('height', '90vh')
        $('.column').css('margin-top', '3.7em')
        $('.column .navbar').css('height', '68vh')
        $('.column .info-group').css('height', '26vh')
      }
    })
  })

  $('.notification').click(function () {
    var item = $(this).parent().parent().parent().find('.non-parent-register')
    item.slideToggle(500)
  })

  $('.edit-link').click(function (){
    $('.src-group').css('display' , 'none')
    $('.edit-page').css('display' , 'block')
     if($(window).width() < 768){
        $('.column').slideUp('500')
     }
  })

  $('.edit').click(function (){
    $('.answer').prop('disabled', false)
     $('.answer').css('border' , '1px solid #d7dbec')
  })

  $('.password-icon').click(function () {
    var type =  $('#show-password').get(0).type
    
    if(type === 'password'){
     $('#show-password').get(0).type = 'text' 
    }else{
     $('#show-password').get(0).type = 'password' 
    }

  })

  $('.open-item .line').click(function () {
    var item = $(this).parent().find('.pish-1')
    $('.pish-1').not(item).slideUp(1000)
    item.slideToggle(1000)

    var svg = $(this).find('.show-svg')
    var src = svg.attr('src')
    var newsrc = src === 'img/minus.svg' ? 'img/plus.svg' : 'img/minus.svg'
    $('.show-svg').not(svg).attr('src', 'img/plus.svg')
    svg.attr('src', newsrc)
  })

  $('.score-group , .button-group').submit(function (event) {
    event.preventDefault()
    var message = $(this).attr('data-message')
    var type = $(this).attr('data-type')
    var title = $(this).attr('data-title')
    var src = type === 'success' ? '../img/success.png' : '../img/error.png'
    var clas = type === 'success' ? 'success' : 'error'

    $('#modal').css('display', 'block')
    $('.modal-header img').attr('src', src)
    $('.modal-header img').attr('class', clas)
    $('.modal-body').html(message)
    $('.modal-title').html(title)
    type === 'success'
      ? $('.modal-title').css({
        'color' : '#4caf50' ,
        'text-shadow' : '1px 1px #4caf50'
      })
      : $('.modal-title').css({
        'color' : '#f44336' ,
        'text-shadow' : '1px 1px #f44336'
      })

    $('.ok-button').click(function () {
      $('#modal').css('display', 'none')
    })
  })
  
})
