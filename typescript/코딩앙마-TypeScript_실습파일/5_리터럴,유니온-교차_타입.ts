//Literal Types
const userName1 = "Bob"; // 변하지 않는 값이기에 "Bob"
let userName2 = "Tom"; // 언제든 다른 값을 가지고있어 string으로 정의됨

// userName2 = 3; 에러
// userName2: string|number = "Tom" 으로 정의해줘야 함

// userName1처럼 정해진 string 값을 가진 것을 문자열 Literal이라고 한다.

type Job = "police" | "developer" | "teacher";

interface User5 {
  name: string;
  job: Job;
}

interface HighSchoolStudent {
  name: number | string;
  // job: "students" 에러
  job: "police";
}

// 유니온 타입
interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

interface Car {
  name: "car";
  color: string;
  start(): void;
}
interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  // gift.start() 에러
  // 식별가능한 유니온 타입
  if (gift.name === "car") {
    gift.start(); // 마우스 올리면 gift 타입이 Car
  } else {
    gift.call(); // 마우스 올리면 gift 타입이 Mobile
  }
}

// #3
// 교차타입 intersection type
// 여러 타입을 합쳐서 사용
interface Car3 {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}
const toyCar: Toy & Car3 = {
  name: "타요",
  start() {},
  color: "red",
  price: 1000,
};
