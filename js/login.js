window.addEventListener('load', function () {

  $('.password-icon').click(function () {
     var type =  $('#show-password').get(0).type
     
     if(type === 'password'){
      $('#show-password').get(0).type = 'text' 
     }else{
      $('#show-password').get(0).type = 'password' 
     }

  });
  

})
