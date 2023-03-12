
$(function() {

	function toPersianNumeral(en) {
		return ('' + en).replace(/[0-9]/g, function (t) {
		  return '٠١٢٣٤٥٦٧٨٩'.slice(+t, +t + 1)
		})
	  }
	
	let elements = document.getElementsByClassName('number')
	  for (i = 0; i < elements.length; i++) {
		elements[i].innerHTML = toPersianNumeral(elements[i].innerHTML)
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() > 40) {
		  $('#hide').css('height', '97vh')
		  $('#hide .levels').css('height', '90vh')
		} else {
		  $('#hide').css('height', '88vh')
		  $('#hide .levels').css('height', '81vh')
		}
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

    var number = 1;
	const rowsPerPage = 6;
	const rowsCount = $('.table .item').length;
	const pageCount = Math.ceil(rowsCount / rowsPerPage); 

	displayRows(number);
	
	$('.next-btn').click(function(e) {
		e.preventDefault();
        if(number < pageCount){
            number = number + 1;
            displayRows(number);
        }
	});

    $('.prev-btn').click(function(e) {
		e.preventDefault();
        if(number > 1){
            number = number - 1;
            displayRows(number);
        }
	});
	
	function displayRows(index) {
		var start = (index - 1) * rowsPerPage;
		var end = start + rowsPerPage;
		$('.table .item').hide();
		$('.table .item').slice(start, end).show();
	}


});