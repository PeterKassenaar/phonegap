document.addEventListener("deviceready", deviceReady);

function deviceReady() {
	// Event listeners voor online/offline schakelen
	document.addEventListener("online", onOnline);
	document.addEventListener("offline", onOffline);

	/// Functie om de connectie te bepalen.
	function checkConnection() {
		var networkState = navigator.connection.type;

		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.CELL]     = 'Cell generic connection';
		states[Connection.NONE]     = 'No network connection';

		//alert('Connection type: ' + states[networkState]);
		document.getElementById('networkInfo').innerHTML = states[networkState];
	}

	checkConnection();

	// caLLbackfunctie indien Offline
	function onOffline() {
		document.getElementById('spanOnline').innerHTML = 'Offline';
		document.body.style.backgroundColor='red';
	}

	// caLLbackfunctie indien Online
	function onOnline() {
		document.getElementById('spanOnline').innerHTML = 'Online';
		document.body.style.backgroundColor='green';
	}

}
