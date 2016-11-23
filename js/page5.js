document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
	// Ga details ophalen uit de querystring
	var positie = window.location.search.indexOf('=');
	var movieId = window.location.search.substring(positie+1);
	var movieUrl = 'http://www.omdbapi.com/?i=';

	$.ajax({
		url: movieUrl + movieId,
		success: movieSuccess,
		error: movieError
	});

	function movieSuccess(movieData) {
		$('#movieTitle').html(movieData.Title);
		$('#movieYear').html(movieData.Year);
		$('#movieActors').html(movieData.Actors);
		$('#moviePoster').attr('src', movieData.Poster);
		$('#moviePlot').html(movieData.Plot);
	}

	function movieError(jqXhr, textStatus, errorThrown) {
		alert('FOUT:' + textStatus);
	}
}
