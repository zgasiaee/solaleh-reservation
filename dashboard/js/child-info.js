$(function () {

  function toEnglishNumeral(str){
     return  str.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  }


  var date = new Date()
  var year = toEnglishNumeral(date.toLocaleDateString('fa-IR').split('/')[0])
  var month = [ 'فروردین' , 'اردیبهشت' , 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند']

  for (var index = 1; index <= 31 ; index++) {
    $('.day').append('<span class="option number">' + index + '</span>')
  }

  month.map( item =>  $('.month').append('<span class="option">' + item + '</span>'))


  for (var index = year - 13 ; index <= year  ; index++) {
    $('#year').append('<span class="option number">' + index + '</span>')
  }


  $('.show-select').click(function () {
    var item = $(this).parent().find('.non-parent-select')
    item.slideToggle(500)

    $('.option').click(function () {
      var option = $(this).parent().parent().parent().find('.place-holder')
      option.text($(this).html())
      option.css('color' , '#7a92af')
      item.slideUp(500)
    })

  })

  $('.input , .textarea').click(function () {
    var select = $(this).parent()
    $('.select-box-container').not(select).css('border', '2px solid #d7dbec')
    $(select).css('border', '2px solid #00baba')

    $('.non-parent-select').slideUp(500)
  })


})
