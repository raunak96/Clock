const setClockHands = () => {
	const currentTime = new Date();
	const hrs = currentTime.getHours();
	const mins = currentTime.getMinutes();
	const secs = currentTime.getSeconds();

	/* Digital CLock */
	const ampm = hrs % 12 > 0 ? "pm" : "am";
	digitaltime.innerText = `${hrs < 10 ? `0${hrs}` : hrs} : ${
		mins < 10 ? `0${mins}` : mins
	} ${ampm}`;
	/* Analog Clock */
	const secondsRatio = secs / 60;
	const minutesRatio = (secondsRatio + mins) / 60;
	const hoursRatio = (minutesRatio + hrs) / 12;

	// html ids are automatically assigned vars in modern browsers
	setRotation(hourhand, hoursRatio);
	setRotation(minutehand, minutesRatio);
	setRotation(secondhand, secondsRatio);
};

const setRotation = (element, rotationRatio) => {
	// this how css variables are referred in js
	element.style.setProperty("--rotation", rotationRatio * 360);
};

setInterval(setClockHands, 1000);

setClockHands();
