const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play

async function selectMediaStream() {
	try {
		let mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadeddata = () => {
			videoElement.play;
		};
	} catch (err) {
		console.log('Whoops! error here: ', err);
	}
}

button.addEventListener('click', async () => {
	// Disable Button
	button.disabled = true;
	// Start Picture in Picture
	await videoElement.requestPictureInPicture();
	// Reset Button
	button.disabled = false;
});

// On Load
selectMediaStream();
