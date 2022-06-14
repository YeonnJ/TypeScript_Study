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
type Player<E> = {
  name: string;
  extraInfo: E; //generic type 생략도가능
};

type FavFood = {
  favFood: string;
};

const YJ: Player<FavFood> = {
  name: "yj",
  extraInfo: {
    favFood: "apple",
  },
};

//example
type A = Array<number>; //generic

let a: A = [1, 2, 3];
