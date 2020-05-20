$(document).ready(function() {

	$("#form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваши данные для связи отправлены.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});