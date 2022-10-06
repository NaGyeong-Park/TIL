// keyof

interface User5 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}
// user 인터페이스의 key값들을 유니온 형태로 받아올 수 있다
type UserKey = keyof User5; // ===  'id  | 'name' | 'age' | 'gender'

const uk: UserKey = "id"; // or name, age, gender

// Partial<T>
// 모든 프로퍼티들이 선택

// interface User5 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }
// 위와 아래가 같음
let admin: Partial<User5> = {
  id: 1,
  name: "Bob",
};

// Required<T>
// 모든 프로퍼티들이 필수
let admin2: Required<User5> = {
  //... 다 입력해줘야지 에러 사라짐
  id: 1,
  name: "hi",
  age: 12,
  gender: "f",
};

// Readonly<T>

let admin3: Readonly<User5> = {
  id: 1,
  name: "bob",
  age: 12,
  gender: "f",
};
// admin3.name = "hio"; 읽기전용, 에러

// Record<K,T>

type Grage = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D";

// const score: Record<"1" | "2" | "3" ...> = {
//   1: "A",
//   2: "C",
//   3: "B",
//   4: "D",
// };

// grage를 key로, score를 타입으로
const score: Record<Grage, Score> = {
  1: "A",
  2: "C",
  3: "B",
  4: "D",
};

interface User6 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User6) {
  const result: Record<keyof User6, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

// Pick<T,K>
const admin4: Pick<User6, "id" | "name"> = {
  id: 0,
  name: "hi",
};
// Omit<T,K>
const admin5: Omit<User6, "id" | "name"> = {
  age: 10,
};

//Exclude<T1,T2>
// Omit은 프로퍼티들 제거, Exclude는 타입을 제거
// T1이 가진 타입 들 중 T2가 가진 타입을 제외

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // boolean만 남게된다

// NonNullable<Type>
//Null과 Undefined 제외
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; // string과 void만 남음
