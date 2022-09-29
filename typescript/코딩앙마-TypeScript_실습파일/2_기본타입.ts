let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3, 4, 5];
let a2: Array<number> = [1, 2, 3, 4, 5];
let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// 튜플 (Tuple)
let b: [string, number];
b = ["z", 1];
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
  Window,
  Ios,
  Android,
}
