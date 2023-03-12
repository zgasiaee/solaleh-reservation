$(function () {
  function toPersianNumeral(en) {
    return ('' + en).replace(/[0-9]/g, function (t) {
      return '٠١٢٣٤٥٦٧٨٩'.slice(+t, +t + 1)
    })
  }

  let numbers = document.getElementsByClassName('number')
  for (i = 0; i < numbers.length; i++) {
    numbers[i].innerHTML = toPersianNumeral(numbers[i].innerHTML)
  }

  $('.item').click(function () {
    var item = $(this).parent()
    if ($('#menu ul li').hasClass('active')) {
      $('#menu ul li').removeClass('active')
    }
    item.toggleClass('active')

    $('#menu img').each(function () {
      $(this).attr('src', $(this).attr('src').replace('-white', ''))
    })

    var img = $(this).parent().find('img')
    var src = img.attr('src')
    var split = src.split('-')[2].split('.')[0]
    var newSrc = src.replace(split, split + '-white')
    img.attr('src', newSrc)
  })

  $('.menubar').click(function () {
    if ($(window).width() < 768) {
      $('#parent-interview-rectangle').toggleClass('blur')
      $('#manager-interview-rectangle').toggleClass('blur')
      $('#child-interview-rectangle').toggleClass('blur')
      $('.pre-registration').fadeToggle('500')
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
      $('.pre-registration .right-blocks').css({
        height: '100vh',
        top: '0',
      })
    }
    if ($(window).scrollTop() > 30 && $(window).width() < 768) {
      $('#menu').css({
        height: '45vh',
        margin: '2em auto',
      })
    }
    if ($(window).width() < 768 && $(window).scrollTop() < 30) {
      $('.pre-registration .right-blocks').css({
        height: '87vh',
        top: '20%',
      })
      $('#menu').css({
        height: '30vh',
        margin: '1em auto',
      })
    }
  })

  var persianNumbers = [
      /۰/g,
      /۱/g,
      /۲/g,
      /۳/g,
      /۴/g,
      /۵/g,
      /۶/g,
      /۷/g,
      /۸/g,
      /۹/g,
    ],
    arabicNumbers = [
      /٠/g,
      /١/g,
      /٢/g,
      /٣/g,
      /٤/g,
      /٥/g,
      /٦/g,
      /٧/g,
      /٨/g,
      /٩/g,
    ],
    fixNumbers = function (str) {
      if (typeof str === 'string') {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i)
        }
      }
      return str
    }
   
  var width = fixNumbers($('#value').text().split(' ')[0])
  $('.color').css('width', width + '%')
})
