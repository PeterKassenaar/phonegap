document.addEventListener("deviceready", deviceReady);

function deviceReady() {
	document.getElementById('deviceModel').innerHTML = device.model;
	document.getElementById('devicePlatform').innerHTML = device.platform;
	document.getElementById('deviceVersion').innerHTML = device.version;
}
