$(function () {

  var alphabet = ["الف", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
  "ک", "گ", "ل", "م", "ن", "و", "ه", "ی", ]


  alphabet.map( item =>  $('.alphabet').append('<span class="option">' + item + '</span>'))

  $('.show-select').click(function () {
    var item = $(this).parent().find('.non-parent-select')
    var address = $(this).parent().parent().find('#other')
    var parent = $(this).parent().parent().find('#parent')
    item.slideToggle(500)

    $('.option').click(function () {
      var option = $(this).parent().parent().parent().find('.place-holder')
      option.text($(this).html())
      option.css('color' , '#7a92af')
      item.slideUp(500)
      if ( $(this).html() === 'سایر'  || $(this).html() === 'بهزیستی') {
        address.slideDown(500)
        parent.slideUp(500)
      }
      if ( $(this).html() === 'پدر'  || $(this).html() === 'مادر') {
        parent.slideDown(500)
        address.slideUp(500)
      }
    })

  })

  $('.input , .textarea').click(function () {
    var select = $(this).parent()
    $('.select-box-container').not(select).css('border', '2px solid #d7dbec')
    $(select).css('border', '2px solid #00baba')

    $('.non-parent-select').slideUp(500)
  })

  $('.column-choose-group .radio').click(function () {
    var select = $(this).parent().parent().parent().parent().find('.select-box-container')
    var address = $(this).parent().parent().parent().parent().find('.non-address')
    var religion = $(this).parent().parent().parent().parent().find('#religion')
    var language = $(this).parent().parent().parent().parent().find('#language')
    var national = $(this).parent().parent().parent().parent().find('#national')

    if ($(this).val() === 'بله') {
      select.slideDown(500)
    } else if ($(this).val() === 'خیر') {
      select.slideUp(500)
      address.slideUp(500)
    }
    
    if($(this).val() === 'سایر'){
      religion.slideDown(500)
    }else {
      religion.slideUp(500)
    }

    if($(this).val() === 'سایر'){
      language.slideDown(500)
    }

    if($(this).val() === 'غیر ایرانی'){
      national.slideDown(500)
    }else {
      national.slideUp(500)
    }

  })

  if ($(window).width() < 1200) {
    $('#level-1').text('کودک')
    $('#level-2').text('پیش دبستانی')
    $('#level-3').text('سرپرست')
  }

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

    paigination($('.page'))


})