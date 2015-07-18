$( document ).ready(function() {
		$( ".aboutme" ).css( "-webkit-animation-duration", "0.3s");

		$('.scrollTo').click( function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 650; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
});