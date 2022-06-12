let a: number = 1;
let b: string = "hello";
let c: boolean = true;
let d: number[] = [1, 2];
let e: boolean[] = [true, false];

const readOnlyNum: readonly number[] = [1, 2, 3];
// readOnlyNum.push(1) 읽기전용이기때문에 추가가 안됨
readOnlyNum.map((item, idx) => {
  console.log("filter,map은 배열을 바꾸는게아니라 가능함");
});
