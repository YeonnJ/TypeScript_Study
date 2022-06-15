type Fruit = string;
type Friends = Array<string>;
type Team = "tomato" | "blue" | "green";

interface Play {
  userId: string;
  team: Team;
}

// type Play = {
//     userId: string,
//     team:Team,
// }

//interface는 오직 객체에서만 사용이가능
//타입스크립트에게 오브젝트를 알리는용도
const banana: Fruit = "favorite";
const playerYJ: Play = {
  userId: "yj",
  team: "blue", //위에서 정한대로만 사용가능
};
