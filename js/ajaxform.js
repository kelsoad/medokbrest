$( document ).ready(function() {
    //validate name

    $("#btn").click(
		function(){
			var name = $('#exampleFormControlInput1').val();
			if (!name.match(/^\d{11,12}$/))
                {
                    $('#result_form').html('Введите телефон в формате 375292200595 или 80162301125<br>или свяжитесь с пчеловодом по телефону: <b><a href="tel:+375292200595">+375 (29) 220-05-95</a></b>');
	                return false;
                }
            else{
                    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form1.php');
              	    return false; 
                }
		
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, 
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	$('#result_form').html('Заявка успешно отправлена');
        	$('#ajax_form')[0].reset();
    		setTimeout(function(){$('#result_form').html('');},5000);
    	},
    	error: function(response) {
            $('#result_form').html('Ошибка. Данные не отправлены. Свяжитесь с пчеловодом по телефону: <ahref="tel:+375292200595">+375 (29) 220-05-95</a>');
            $('#ajax_form')[0].reset();
    	}
    });
}

