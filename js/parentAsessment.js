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

  if ($('.open-item .line').hasClass('off')) {
    $('.off .squre-svg').attr('src', 'img/squre-off.svg')
    $('.off .arrow-svg').attr('src', 'img/arrow-down-off.svg')
  }

  $('.open-item .line').click(function () {
    if (!$(this).hasClass('off')) {
      var item = $(this).parent().find('.hide-part')
      $('.hide-part').not(item).slideUp(1000)
      item.slideToggle(1000)

      var squreSvg = $(this).find('.squre-svg')
      var squreSrc = squreSvg.attr('src')
      var newSqureSrc =
        squreSrc === 'img/Square.svg' ? 'img/squre-grey.svg' : 'img/Square.svg'
      $('.squre-svg')
        .not(squreSvg)
        .not($('.open-item .off .squre-svg'))
        .attr('src', 'img/Square.svg')
      squreSvg.attr('src', newSqureSrc)

      var arrowSvg = $(this).find('.arrow-svg')
      var arrowSrc = arrowSvg.attr('src')
      var newArrowSrc =
        arrowSrc === 'img/arrow-down-green.svg'
          ? 'img/arrow-up.svg'
          : 'img/arrow-down-green.svg'
      $('.arrow-svg')
        .not(arrowSvg)
        .not($('.open-item .off .arrow-svg'))
        .attr('src', 'img/arrow-down-green.svg')
      arrowSvg.attr('src', newArrowSrc)

      var active = $(this).find('.text')
      var color = active.css('color')
      var newColor =
        color === 'rgb(0, 186, 186)' ? 'rgb(126, 132, 163)' : 'rgb(0, 186, 186)'
      $('.text')
        .not(active)
        .not($('.open-item .off .text'))
        .css('color', 'rgb(0, 186, 186)')
      active.css('color', newColor)
    }
  })

  $('.notification').click(function () {
    var item = $(this).parent().parent().parent().find('.non-parent-register')
    item.slideToggle(500)
  })

  $('.menue').click(function () {
    var item = $(this).parent().parent().parent().find('.column')
    item.slideToggle(700)
    $('.src-group').toggleClass('blur')
    $('.search-group').toggleClass('blur')

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

  $('.show-result').click(function () {
    var item = $(this).parent().find('.non-parent-result')
    if ($(this).parent().parent().attr('id') === 'hide') {
      $('.src-group').toggleClass('height')
    }
    item.slideToggle(500)

    $('.count').click(function () {
      var count = $(this).parent().parent().parent().find('.show-count')
      count.text($(this).html() + ' ' + 'در هر صفحه ')
      item.slideUp(500)
    })
  })

  $('.score-group ').submit(function (event) {
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
          color: '#4caf50',
          'text-shadow': '1px 1px #4caf50',
        })
      : $('.modal-title').css({
          color: '#f44336',
          'text-shadow': '1px 1px #f44336',
        })

    $('.ok-button').click(function () {
      $('#modal').css('display', 'none')
    })
  })

  function paigination(item) {
    var count = 1
    var rowsPerPage = 1
    var rowsCount = item.length
    var pageCount = Math.ceil(rowsCount / rowsPerPage)

    $('.next-btn').click(function (e) {
      e.preventDefault()
      if (count < pageCount) {
        count = count + 1
        displayRows(count)
      }
    })

    $('.prev-btn').click(function (e) {
      e.preventDefault()
      if (count > 1) {
        count = count - 1
        displayRows(count)
      }
    })

    displayRows(count)

    function displayRows(index) {
      var start = (index - 1) * rowsPerPage
      var end = start + rowsPerPage
      item.hide()
      item.slice(start, end).show()
    }
  }

  if ($('.question-item-container').attr('id') === 'parent-assesment') {
    paigination($('#parent-assesment .page'))
  }
})
