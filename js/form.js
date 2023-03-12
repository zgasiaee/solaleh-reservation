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
  
    $('.notification').click(function () {
      var item = $(this).parent().parent().parent().find('.non-parent-register')
      item.slideToggle(500)
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
  
    $('.print').click(function(){
  
      var printWindow = window.open( $(this).attr('id') , 'Print', 'left=200, top=200, width=950, height=500, toolbar=0, resizable=0');
      printWindow.addEventListener('load', function(){
          printWindow.print();
      }, true);
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