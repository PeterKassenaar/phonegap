// Camera.js - foto's maken met Camera Plugin
document.addEventListener("deviceready", deviceReady);

function deviceReady() {
	// 1. Klik op knop aanhaken
	document.getElementById('btnGetPhoto')
		.addEventListener('click', takePicture);

	// 2. opties voor de camera instellen
	var photoOptions = {
		quality         : 25,
		destinationType : Camera.DestinationType.DATA_URL
	};

	// 3. Foto daadwerkelijk maken.
	function takePicture() {
		navigator.camera.getPicture(photoSuccess, photoError, photoOptions)
	}

	//4.  Functie voor Success : foto is correct gemaakt
	function photoSuccess(photoData) {
		document.getElementById('imgPhoto').src = "data:image/jpeg;base64," + photoData;
	}

	// 5. Functie voor error: foto is om een of andere reden niet correct
	function photoError(err) {
		alert('FOUT! : ' + err)
	}

}
