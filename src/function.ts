function add(num1: number = 10, num2: number): number {
	return num1 + num2;
}

// add(30)

// Destructuring
const myFriends = ["chandler", "joye", "ross"];
const newFriends = ["monica", "rachel", "pheobe"];
myFriends.push(...newFriends);
// console.log(myFriends);

const myFriendInformation = {
	fullName: "Md Rased",
	hisAge: 27,
};
const [bestFriend] = myFriends;
const { fullName: string, hisAge } = myFriendInformation;

console.log(string);

const arrayFun = (num1: number, num2: number): number => num1 + num2;

// Showing Correct Map Function
const numberArray = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numbers = numberArray.map((num: number) => num * num);

// Showing Error Map Function
const numberArray2 = [1, 3, 5, 6, 7, "8", 9, 10, 11, 12, 13, 14, 15];
// const numbers2 = numberArray2.map((num: number) => num * num);

// Object Function Declare
const objectFunction: {
	name: string;
	amount: number;
	addAmount(amt: number): number;
} = {
	name: "Rased",
	amount: 72590,
	addAmount(amt: number) {
		return this.amount + amt;
	},
};

// Object Function Declare
// const objectFunction2: {
// 	name: string;
// 	amount: number;
// 	addAmount(amt: number): number;
// } = {
// 	name: "Rased",
// 	amount: 72590,
// 	addAmount(amt: number) {
// 		return `My New Amount ${this.amount + amt}`;
// 	},
// };

// Object Function Declare
const objectFunction3: {
	name: string;
	amount: number;
	addAmount(amt: number): void;
} = {
	name: "Rased",
	amount: 72590,
	addAmount(amt: number) {
		// console.log(this.amount + amt);
	},
};

// Rest Operater
const greetFriends = (...friends: string[]): void =>
	friends.forEach((friend: string) => {
		// console.log(`Hi ${friend}`);
	});

greetFriends("Rased", "Rahul", "Rafiq", "Yanur");
