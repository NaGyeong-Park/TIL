// 함수

function add1(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function isAdult1(num: number): boolean {
  return age > 19;
}

function hello1(name?: string) {
  return `hello, ${name || "world"}`;
}
function hello2(name: string = "world") {
  return `hello, ${name}`;
}
function hello3(name, age?: number) {
  // 선택적 매개변수는 필수 매개변수 앞에 올 수 없다.
  // function hello3(age:number | undefined, name) {
  //그렇게 하고싶다면 이렇게 number나 undefined를 받을 수 있게 해주고 명시적으로 undefined 전달
  // hello3(undefined, "sam")
  if (age !== undefined) {
    return `hello, ${name}. You are ${age} years old`;
  } else {
    return `hello, ${name}`;
  }
}
// name에 ?를 붙여주지 않으면 밑 코드 에러, optional parameter, 선택적 매개변수
const result1 = hello1();
const result2 = hello1("sam");
// const result3 = hello(123); 에러

// 타입을 배열 형태로 기입
function add2(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

// this
interface User1 {
  name: string;
}
const July: User1 = { name: "sam" };
function showName(this: User1, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}
const asdf = showName.bind(July); // bind를 이용해서 this를 sam 객체로 감지
asdf(30, "m");

//# 2
interface User2 {
  name: string;
  age: number;
}
// 함수 오버로드
// 전달받은 매개변수 갯수나 타입에 따라 다른 동작을 하게 함

function join(name: string, age: number): User2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

// 위 처럼 사용하면 join이 User2를 반환할지 string을 반환할지 몰라서 에러가 난다
// 함수 위에 명시해주자
// const sam: User2 = join("Sam", 30);
// const jane: string = join("Jane", "30");
