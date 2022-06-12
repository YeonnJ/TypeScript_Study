//많이 사용되지는 않음
//함수가 절대로 return하지않을때 발생

//
function never(name: string | number) {
  //   throw new Error("X") => return이 아니라서 가능

  if (typeof name === "number") {
    console.log("name의 타입은 number");
  } else if (typeof name === "string") {
    console.log("name의 타입은 string");
  } else {
    console.log("name의 타입은 never");
  }
}
