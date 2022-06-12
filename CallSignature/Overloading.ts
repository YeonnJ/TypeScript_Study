//오버로딩은 함수가 서로다른 여러개의 call signatures를 가지고 있을때 발생시킴

type OverLoading = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const overLoading: OverLoading = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//example
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

//example : 옵션이 있는경우 = c
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
