type TestTypeAlias = {
	name: string;
	age?: number;
	profession: string;
	address: string;
};
// Using Type Alias
const typeOneUse: TestTypeAlias = {
	name: "Rased",
	age: 27,
	profession: "Software Developer",
	address: "Badda, Dhaka",
};
const typeTwoUse: TestTypeAlias = {
	name: "Rahul",
	profession: "Web Designer",
	address: "Barishal",
};

type booleanTypeAlias = boolean;
const IsJobPermanent: booleanTypeAlias = false;

type salaryTypeAlias = number;
const salary: salaryTypeAlias = 20000;

// Multi layer Function
type operationTypeAlias = (x: number, y: number) => number;
const multiLayerFunction = (
	num1: number, // 10
	num2: number, // 20
	operation: operationTypeAlias // (x, y) => x + y) (10, 20) => 10+20
) => {
	return operation(num1, num2);
};

multiLayerFunction(20, 30, (x, y) => x + y);
multiLayerFunction(20, 30, (x, y) => x - y);
multiLayerFunction(20, 30, (x, y) => x / y);
multiLayerFunction(20, 30, (x, y) => x * y);
