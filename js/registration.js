window.addEventListener('load', function () {
  function toPersianNumeral(en) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '٠١٢٣٤٥٦٧٨٩'.slice(+t, +t + 1)
    })
  }

  let elements = document.getElementsByClassName('number')
  for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = toPersianNumeral(elements[i].innerHTML)
  }

  $('.choose-parent').click(function () {
    if ($(this).attr('id') === 'mother') {
      $(this).addClass('active')
      $('#father').removeClass('active')
    } else {
      $(this).addClass('active')
      $('#mother').removeClass('active')
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $('#hide').css('height', '97vh')
      $('#hide .levels').css('height', '90vh')
    } else {
      $('#hide').css('height', '88vh')
      $('#hide .levels').css('height', '81vh')
    }
  })

  $('.show-select').click(function () {
    var item = $(this).parent().find('.non-parent-select')
    var address = $(this).parent().parent().find('.non-address')
    var parent = $(this).parent().parent().find('.non-parent-address')
    item.slideToggle(500)

    $('.option').click(function () {
      var option = $(this).parent().parent().parent().find('.place-holder')
      option.text($(this).html())
      item.slideUp(500)
      if ( $(this).html() === 'پدربزرگ'  || $(this).html() === 'مادربزرگ') {
        address.slideDown(500)
        parent.slideUp(500)
      }
      if ( $(this).html() === 'پدر'  || $(this).html() === 'مادر') {
        parent.slideDown(500)
        address.slideUp(500)
      }
    })

  })

  $('.column-choose-group .radio').click(function () {
    var select = $(this).parent().parent().parent().parent().find('.select-box-container')
    var address = $(this).parent().parent().parent().parent().find('.non-address')
    var religion = $(this).parent().parent().parent().parent().find('.religion')
    var language = $(this).parent().parent().parent().parent().find('.language')
    var parent = $(this).parent().parent().parent().parent().find('.non-parent-address')

    if ($(this).val() === 'بله') {
      select.slideDown(500)
      address.slideUp(500)
    } else if ($(this).val() === 'خیر') {
      select.slideUp(500)
      address.slideDown(500)
      parent.slideUp(500)
    }
    
    if($(this).val() === 'سایر'){
      religion.slideDown(500)
    }else {
      religion.slideUp(500)
    }

    if($(this).val() === 'سایر'){
      language.slideDown(500)
    }

  })

  $('.select-choose-group .radio').click(function () {
    var choice = $(this).val()
    if (choice === 'بله') {
      choice = 'yes'
    } else if (choice === 'خیر') {
      choice = 'no'
    }

    $('.query-level').click(function () {
      $(this).children('a').attr('href', `answerQuestion.html?answer=${choice}`)
    })
  })

  $('.show').click(function () {
    var item = $(this).parent().find('.level-group')
    item.slideToggle(700)
    $('.src').toggleClass('blur')
  })

  $('.menue').click(function () {
    var item = $(this).parent().parent().parent().find('.column')
    item.slideToggle(700)
    $('.src-group-container').toggleClass('blur')

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

  if ($('.question-box-container').attr('id') === 'parent-assesment') {
    paigination($('#parent-assesment .page'))
  }

  var url = $(location).attr('href')

  if (url.includes('?answer=yes')) {
    $('#yes-page').css('display', 'block')
    paigination($('#yes-page .page'))
  } else if (url.includes('?answer=no')) {
    $('#no-page').css('display', 'block')
    paigination($('#no-page .page'))
  }

  let slider = document.getElementsByClassName('range')[0]
  let min = slider.min
  let max = slider.max
  let value = slider.value
  let number = document.getElementsByClassName('number')
  slider.style.background = `linear-gradient(to right, #00baba 0%, #00baba ${
    ((value - min) / (max - min)) * 100
  }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`

  slider.oninput = function () {
    this.style.background = `linear-gradient(to right, #00baba 0%, #00baba ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 ${
      ((this.value - this.min) / (this.max - this.min)) * 100
    }%, #DEE2E6 100%)`
    var value = ((this.value - this.min) / (this.max - this.min)) * 10

    for (i = 0; i < number.length; i++) {
      if (i === value) {
        number[i].style.color = '#00baba'
      } else {
        number[i].style.color = '#7a92af'
      }
    }
  }
})
