let age: number = 30;
let isAdult: boolean = true;
let a1: number[] = [1, 2, 3, 4, 5];
let a2: Array<number> = [1, 2, 3, 4, 5];
let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// 튜플 (Tuple)
let b1: [string, number];
b1 = ["z", 1];
// b = [1, "z"]; // 에러

// void, never
function sayHello(): void {
  console.log("Hello");
}
function showError(): never {
  throw new Error();
}
function infLoop(): never {
  while (true) {
    // do something...
  }
}

// enum
enum Os {
  // 인덱스 값 지정 안하면 자동으로 0 할당됨
  Window = 3,
  Ios,
  Android,
}
// 특정 값만 사용하고 싶을 때, 값들이 공통되어있을 때 사용하자
let myOs: Os;
myOs = Os.Window;

// null, undefinde
let a: null = null;
let b: undefined = undefined;
