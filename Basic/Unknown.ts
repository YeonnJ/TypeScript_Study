let keyword: unknown;

//변수의 타입을 미리 알지못할때 사용

if (keyword === "number") {
  let result = keyword + 1;
}

if (keyword === "string") {
  let result = keyword.toUpperCase();
}
