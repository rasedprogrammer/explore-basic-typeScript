type NoobDeveloper = {
	name: string;
};
type JuniorDeveloper = NoobDeveloper & {
	expertise: string;
	exprience: number;
};
const newDeveloper: JuniorDeveloper = {
	name: "Rased",
	expertise: "Full-Stack Developer",
	exprience: 2,
};

enum Level {
	junior = "junior",
	mid = "mid",
	senior = "senior",
}

type NextLevelDeveloper = JuniorDeveloper & {
	leadershipExprience: number;
	level: Level;
};

const exprienceDeveloper: NextLevelDeveloper = {
	name: "Rased",
	expertise: "Full-Stack Developer",
	exprience: 2,
	leadershipExprience: 4,
	level: Level.senior,
};

// type JuniorDeveloper = NoobDeveloper & {
// 	expertise: string;
// 	exprience: number;
// };

// type JuniorDeveloper = {
// 	name: string;
// 	expertise: string;
// 	exprience: number;
// };
