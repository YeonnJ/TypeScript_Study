// type SuperPrint = <T, V>(arr: T[], str: V) => T;
//generic = placeholder

// (arr: number[]):void
// (arr: boolean[]):void
// (arr: string[]):void

// const superPrint: SuperPrint = (arr) => arr[0];

function SuperPrint<T>(a: T[]) {
  return a[0];
}

SuperPrint([1, 2, 3, 4]);
SuperPrint([true, false, false]);
SuperPrint(["hi", "bye"]);

//example
type PlayerMe<E> = {
  name: string;
  extraInfo: E; //generic type 생략도가능
};

type FavFood = {
  favFood: string;
};

const YJ: PlayerMe<FavFood> = {
  name: "yj",
  extraInfo: {
    favFood: "apple",
  },
};

//example
type AA = Array<number>; //generic

let aa: AA = [1, 2, 3];
