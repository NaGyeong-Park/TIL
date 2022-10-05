//Generic

// 이것처럼 계속 추가하면 힘드니까....
// function getSize(arr: number[]|string[]|boolean[] | ...): number {
function getSize<T>(arr: T[]): number {
  return arr.length;
}

getSize<number | string>([1, 2, 3]);
getSize<string>(["1", "2", "3"]);

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<object> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = { name: "s21", price: 1000, option: "goof" };

interface UserTest {
  name: string;
  age: number;
}
interface Car {
  name: boolean;
  color: string;
}
interface Book {
  price: number;
}
const user: UserTest = { name: "a", age: 10 };
const car: Car = { name: true, color: "red" };
const book: Book = { price: 3000 };

// name은 항상 string
function showName<T extends { name: string }>(data: T): string {
  return data.name;
}
showName(user);
// showName(car); 에러
// showName(book); 에러
