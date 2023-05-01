const searchName = (value: string | null) => {
	if (value === null) {
		// console.log("There is nothing to search");
	} else {
		// console.log("Searching");
	}
};
searchName(null);
// Unknown type
// Kmh^-1 = ms^-1
const getMyCarSpeed = (speed: unknown) => {
	if (typeof speed === "number") {
		const convertedSpeed = (speed * 1000) / 3600;
		// console.log(`My Speed Is ${convertedSpeed}`);
	}
	if (typeof speed === "string") {
		const [value, unit] = speed.split(" ");
		const convertedSpeed = (parseFloat(value) * 1000) / 3600;
		// console.log(`My Speed2 Is ${convertedSpeed}`);
	} else {
		// console.log(`This is wrong type value.`);
	}
};
getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1");
getMyCarSpeed(true);

// Never Type
const throwError = (message: string): never => {
	throw new Error(message);
};
throwError("Error occurred");
