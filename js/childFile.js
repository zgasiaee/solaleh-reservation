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

  let status = document.getElementsByClassName('status')
  let circle = document.getElementsByClassName('circle')
  for (i = 0; i < status.length; i++) {
    if (status[i].innerHTML.includes('رد شده است')) {
      status[i].style.color = '#e92626'
      circle[i].style.background =
        'linear-gradient(to bottom, #e42525, #721313 124%)'
    } else if (status[i].innerHTML.includes('قبول شده است')) {
      status[i].style.color = '#03e055'
      circle[i].style.background =
        'linear-gradient(to bottom, #03e055, #02702b 123%)'
    } else if (status[i].innerHTML.includes('در حال بررسی')) {
      status[i].style.color = '#25b3e8'
      circle[i].style.background =
        'linear-gradient(to bottom, #27b9f0, #145d78 127%)'
    }
  }

  $('.filter-select').click(function () {
    var item = $(this).parent().find('.non-parent-select')
    item.slideToggle(500)

    $('.filter').click(function () {
      var split = $(this).html().split(' ')
      var text = split.slice(2, split.length).join(' ')
      var itemText = $(this).parent().parent().parent().find('.text')
      itemText.text(text)
      item.slideUp(500)
    })
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

  $('.mobile-table-group .mobile-table-header').click(function () {
    var item = $(this).parent().find('.mobile-table')
    $('.mobile-table').not(item).slideUp(1000)
    item.slideToggle(1000)

    var svg = $(this).find('.select')
    var src = svg.attr('src')
    var newsrc =
      src === 'img/select-option.svg'
        ? 'img/arrow-up.svg'
        : 'img/select-option.svg'
    $('.select').not(svg).attr('src', 'img/select-option.svg')
    svg.attr('src', newsrc)

    $(this).toggleClass('active')
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

  $('.dots').click(function () {
    var item = $(this).find('.non-parent-dots')
    $('.non-parent-dots').not(item).slideUp(500)
    item.slideToggle(500)
  })

  $('.textarea').click(function(event){
    event.stopPropagation()
  })

  $('.modal-btn').click(function (event) {
    var id = $(this).attr('class').split(' ')[1].split('-')[1]
    var modal = $(this).parent().parent().parent().find('.modal')[id]
    var close = $(this).parent().parent().parent().find('.close')[id]
    var cancel = $(this).parent().parent().parent().find('.white-button')[id]
    var submit = $(this).parent().parent().parent().find('.red-button')[id]

    modal.style.display = 'block'
    event.stopPropagation()

    close.onclick = function () {
      modal.style.display = 'none'
    }
    cancel.onclick = function () {
      modal.style.display = 'none'
    }
    submit.onclick = function () {
      modal.style.display = 'none'
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
  })

  $('.registration-level-show').click(function (event) {
    var level = $(this).parent().find('.non-parent-registration-level')
    level.slideToggle(500)
    event.stopPropagation()

    $('.registration-level').click(function (event) {
      var text = $(this).parent().parent().parent().find('.selected-level')
      text.text($(this).html())
      level.slideUp(500)
      event.stopPropagation()
    })
  })

  $('.registration-status-show').click(function (event) {
    var status = $(this).parent().find('.non-parent-registration-status')
    status.slideToggle(500)
    event.stopPropagation()

    $('.registration-status').click(function (event) {
      var text = $(this).parent().parent().parent().find('.selected-status')
      text.text($(this).html())
      status.slideUp(500)
      event.stopPropagation()

      if ($(this).html().includes('رد شده است')) {
        text.css('color', '#e92626')
      } else if ($(this).html().includes('قبول شده است')) {
        text.css('color', '#03e055')
      } else if ($(this).html().includes('در حال بررسی')) {
        text.css('color', '#25b3e8')
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



})
