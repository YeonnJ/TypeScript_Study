type Age = number;
type Player = {
  name: string;
  age?: Age;
};

//Type Alias, Optional Type

const yj: Player = {
  name: "yeonjae",
};

const mj: Player = {
  name: "minjae",
  age: 28,
};

//function 콜론&타입 형태 동일
function playerMaker(name: string): Player {
  return {
    name,
  };
}

//화살표함수
const playerMakerFun = (name: string): Player => ({ name });

const yeonJae = playerMaker("yeonJae");
yeonJae.age = 28;
