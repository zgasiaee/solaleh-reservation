
$(function () {

  var value = 0

  $('.question-secion  .question-section-row').css('display', 'none')

  for ($x = 0; $x <= 5; $x++) {
    $('.question-secion  .question-section-row').eq($x).css('display', 'flex')
  }

  function select($i) {
    $('[name="select_question_' + $i + '"]').click(function () {
      $('[name="select_question_' + $i + '"]')
        .parent()
        .css('border-color', '#231942')
        .children('img')
        .remove()
      $(this)
        .parent()
        .css('border-color', '#fff')
        .append('<img src="/icon/Tick.svg">')
      $(this).parent().parent().parent().attr('data-ok', 'ok')
    })
  }

  for ($index = 0; $index <= 97; $index++) {
    select($index)
  }

  next_questions(1)

  function next_questions($a) {
    if ($a < 18) {
      $('#next_question').click(function () {
        if ($a === 16) {
          $('#next_question').remove()
          $('#level_question').prepend(
            '<button id="next_question"><figure><img src="/icon/Arrow-pointing-right.svg" alt="this is no image"></figure><p>ارسال</p></button>',
          )
          $('#next_question').click(function () {
            $('form').attr('action', 'http://127.0.0.1:8000/parent-assessment')
          })
        }

        if (
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1))
            .attr('data-ok') === 'ok' &&
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1) + 1)
            .attr('data-ok') === 'ok' &&
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1) + 2)
            .attr('data-ok') === 'ok' &&
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1) + 3)
            .attr('data-ok') === 'ok' &&
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1) + 4)
            .attr('data-ok') === 'ok' &&
          $('.question-secion  .question-section-row')
            .eq(6 * ($a - 1) + 5)
            .attr('data-ok') === 'ok'
        ) {
          $('.alert').text('')
          $('.question-secion  .question-section-row').css('display', 'none')

          for ($x = 6 * $a; $x < 6 * ($a + 1); $x++) {
            $('.question-secion  .question-section-row')
              .eq($x)
              .css('display', 'flex')
          }
          previous_questions($a)
          $a = $a + 1
          $('#question-bar > div').css('width', ($a + 1) * 50.73 + 'px')
          $('.question-number').text('سوال' + (6 * ($a - 1) + 1) + ' از 97')
          if ($a === 17) {
            $('#question-bar > div').css('width', '100%')
          }
          value = value + 6
          $('.progress-parent').val(value)
          $('html, body').animate({ scrollTop: 0 }, 'slow')
        } else {
          if ($a < 17) {
            $('.alert').text(
              'به سوالات ' +
                (6 * ($a - 1) + 1) +
                ' تا ' +
                6 * $a +
                ' به صورت کامل پاسخ دهید',
            )
          }
        }
      })
    }
  }

  function previous_questions($a) {
    if ($a > 0) {
      $('#previous_question').click(function () {
        if ($a < 16) {
          $('#next_question').remove()
          $('#level_question').prepend(
            '<a id="next_question">\n' +
              '                <figure>\n' +
              '                    <img src="/icon/Arrow-pointing-right.svg" alt="this is no image">\n' +
              '                </figure>\n' +
              '                <p>سوالات بعدی</p>\n' +
              '            </a>',
          )
        }
        $('.question-secion  .question-section-row').css('display', 'none')
        $('.alert').text('')
        for ($x = 6 * ($a - 1); $x < 6 * $a; $x++) {
          $('.question-secion  .question-section-row')
            .eq($x)
            .css('display', 'flex')
        }
       
        next_questions($a)
        $a = $a - 1
        $('#question-bar > div').css('width', ($a + 1) * 53.55 + 'px')
        $('.question-number').text('سوال' + (6 * $a + 1) + ' از 97')
        
      })
    }
  }

  $('#refusal_respond').click(function () {
    $('form').attr('action', 'http://127.0.0.1:8000/child-assessment-form')
  })

  $('#previous_question').click(function(){
    value = value - 6
    $('.progress-parent').val(value)
    $('html, body').animate({ scrollTop: 0 }, 'slow')
  })


  if($(window).width() < 992){
    for ($x = 0; $x <= 97; $x++) {
        $('.question-number-active').eq($x).text('سوال ' + ($x+1)  + ' از 97')
      }

    $('#next_question p').text('بعدی')
    $('#previous_question p').text('قبلی')

    $('textarea').attr("placeholder", "توضیحات ....");
  }

})
