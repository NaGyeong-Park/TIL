// let user: object;

// user = {
//   name: "xx",
//   age: 26,
// };

// err: object 형식에 name이 없습니다
// console.log(user.name);

// # 1
type Score = "A" | "B" | "C" | "D" | "F";

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthDate: number;
  // 1?: string;
  // 2?: string;
  // 3?: string;
  // 위처럼 하면 귀찮으니까
  [grade: number]: Score; // grade는 의미 없음. 아무거나 적어도 됨
}
let user: User = {
  name: "xx",
  age: 26,
  birthDate: 2000,
  1: "A",
  2: "B",
};
user.age = 10;
// 그냥 추가하면 User 형식에 gender가 없다고 나옴 : gender?로 optional 하게 만들어주기
user.gender = "male";
// readonly를 추가해줬기 때문에 값 수정 불가
// user.birthDate = 3000

// #2
interface Add {
  (num1: number, num2: number): number;
}
const add: Add = function (x, y) {
  return x + y;
};
// 에러
// add(10,20,30)
// add(10,'20')

// #3
interface IsAdult {
  (age: number): boolean;
}
const ab: IsAdult = (age) => {
  return age > 19;
};

ab(30); //true

// #4 implements, extends

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {
  door: number;
  stop(): void;
}

class Bmw implements Car {
  color;
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}
const series3 = new Bmw("green");
console.log(series3);
series3.start(); // go...

interface Car1 {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}
interface ToyCar extends Car1, Toy {
  price: number;
}
