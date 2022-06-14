type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
  //generic = placeholder

  // (arr: number[]):void
  // (arr: boolean[]):void
  // (arr: string[]):void
};

const superPrint: SuperPrint = (arr) => arr[0];

superPrint([1, 2, 3, 4]);
superPrint([true, false, false]);
superPrint(["hi", "bye"]);
