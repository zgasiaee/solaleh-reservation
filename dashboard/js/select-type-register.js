$(function () {

    $('.register-box').click(function () { 
        if($('.register-box').hasClass('active')){
            $('.register-box').removeClass('active')
        }
        $(this).toggleClass('active')
    })
  

})

