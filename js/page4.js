document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
	$('#searchMovie').on('click', function () {
		// 1. Stel de variabelen in
		var movieUrl = 'http://www.omdbapi.com/?s=';
		var movieTitle = $('#movieTitle').val();
		 // alert('ga mijn movie zoeken: ' +  movieTitle);
		// 2. Ga de AJAX-opdracht uitvoeren naar de database
		// zie voor informatie: http://api.jquery.com/jQuery.ajax/
		$.ajax({
			url: movieUrl + movieTitle,
			success: movieSuccess,
			error: movieError
		});

		function movieSuccess(movieData) {
			// TEST: schrijf movieData naar de console
				console.log(movieData);
			// Maak een nieuwe HTMLString met de namen en afbeeldingen van de movies
			var htmlString = '';
			movieData.Search.forEach(function (movie) {
				htmlString+='<li class="list-group-item">' +
					'<a href="page5.html?id='+ movie.imdbID +'">'+
					'<img src="'+ movie.Poster  +'" class="img-responsive" />' +
					'<h3>'+movie.Title+'</h3></a></li>'
			});
			$('#movieResult').html(htmlString)
		}
		
		function movieError(jqXhr, textStatus, errorThrown) {
				alert('FOUT:' + textStatus);
		}
	})
}
