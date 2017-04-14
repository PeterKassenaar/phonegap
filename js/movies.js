document.addEventListener("deviceready", deviceReady);

function deviceReady() {
	$(document).ready(function () {
		// Plain JavaScript
		// document.getElementById('btnSearch').addEventListener('click', searchMovies)

		// 1. Button klik afvangen: Hetzelfde, maar dan in jQuery
		$('#btnSearch').on('click', searchMovies);

		function searchMovies() {
			// 2. Inhoud van het zoekveld ophalen
			var moviename = $('#txtMovie').val(); // Tekst uit het tekstvak op de pagina.
			var movieUrl  = 'http://www.omdbapi.com/?s='; // URL van de movie database

			// 3. Connectie met de database leggen
			$.ajax({
				url     : movieUrl + moviename,
				success : movieSuccess,
				error   : movieError
			});

			// 5. Succes verwerken
			function movieSuccess(movieData) {
				// 5a. checken of movies goed zijn teruggegeven
				console.log(movieData);
				$('#listMovies').empty();
				//  5b. In een lus over alle movies heen lopen en
				// de movie resultaten binden aan de lijst.
				// Hiervoor gebruik ik een JavaScript .forEach() lus
				movieData.Search.forEach(function (movie) {
					// 5c. Maak een nieuw list item voor de lijst
					// Verwerk hierin een <li>, een <img> en de variabelen
					var newListItem = '<li class="list-group-item">'+ movie.Title;
					newListItem +='<img src="' + movie.Poster + '" class="moviePoster"></li>';

					// 5d. Toevoegen aan de lijst in de User Interface
					$('#listMovies').append(newListItem)
				})
			}


			// 5b. Error verwerken
			function movieError(){
				alert('FOUT! Er is helaas iets foutgegaan')
			}


		}

	})
}
