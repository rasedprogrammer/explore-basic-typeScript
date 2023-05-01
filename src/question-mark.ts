// Ternary Operator
const age: number = 15;

// Normal way to condition rendering
if (age > 18) {
	// console.log(`If condition value Yes`);
} else {
	// console.log(`If condition value No`);
}
// Ternary way to condition rendering
const isAdult =
	age > 18 ? "Ternary condition value Yes" : "Ternary condition value No";
// console.log(isAdult);

// Nullish Coeslancing Operator
// Null & Undefined
// const authenticatedUser = null;
const authenticatedUser2 = "";
// const authenticatedUser = undefined;
const userName = authenticatedUser2 ?? "Guest1";
const userName2 = authenticatedUser2 ? authenticatedUser2 : "Guest2";
// console.log({ userName });
// console.log({ userName2 });

type Manush = {
	name: string;
	age: number;
	address: {
		city: "No city";
		road: "No road";
		home?: "";
	};
};

const manush1: Manush = {
	name: "Manush",
	age: 27,
	address: {
		city: "No city",
		road: "No road",
	},
};
const home = manush1?.address?.home ?? "No home";
console.log({ home });

function generateAdder(a: number): (b: number) => number {
	return function (b: number) {
		return a + b;
	};
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
