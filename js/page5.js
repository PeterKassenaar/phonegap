document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
	// Ga details ophalen uit de querystring, om te zien welke ID is meegegeven
	var positie = window.location.search.indexOf('=');
	var movieId = window.location.search.substring(positie+1);
	var movieUrl = 'http://www.omdbapi.com/?i=';

	// AJAX call om gegevens op te halen voor huidige movie (op basis van ID)
	$.ajax({
		url: movieUrl + movieId,
		success: movieSuccess,
		error: movieError
	});

	// Success handler, wordt aangeroepen bij return uit de API van movie database
	function movieSuccess(movieData) {
		$('#movieTitle').html(movieData.Title);
		$('#movieYear').html(movieData.Year);
		$('#movieActors').html(movieData.Actors);
		$('#moviePoster').attr('src', movieData.Poster);
		$('#moviePlot').html(movieData.Plot);
	}

	// Error
	function movieError(jqXhr, textStatus, errorThrown) {
		alert('FOUT:' + textStatus);
	}
}
