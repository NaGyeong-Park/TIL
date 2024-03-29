# 함수형 프로그래밍의 정의, 순수함수

`자바스크립트로 알아보는 함수형 프로그래밍 (ES5) 1강`

# 함수형 프로그래밍

부수효과를 미워하고 조합성을 강조하는 프로그래밍 패러다임

- 부수 효과 미워 ⇒ 순수함수 만들기
- 조합성 강조 ⇒ 모듈화 수준 높이기
- **모듈화** 수준이 높다 ⇒ 생산성을 높인다.

## 순수함수

- input값이 같으면 항상 ouput이 같다
- 함수가 받은 인자 외 외부 상태에 영향을 미치지 않음.
- return 값 외에는 외부와 소통 X
- **평가의 시점이 중요하지 않음**
  - 다양한 로직들을 만들 수 있다

## 예시

```jsx
// O 순수
// 부수효과 없음
// 항상 동일한 인자면 동일한 결과가 나옴
// => 순수함수
function add(a, b) {
  return a + b;
}
add(1, 2); // 3
add(1, 3); // 4

// X 순수
// 만약 c가 상수라면 순수함수지만
// 변수라면 순수함수가 아니다.
// c가 변경되기 전과 변경 된 후가 중요하기에 평가시점에 따라서 로직이 달라짐
var c = 10;
function add2(a, b) {
  return a + b + c;
}
add2(1, 3); // 14
c = 5;
add2(1, 3); // 9

// X 순수
// 부수효과를 일으키는 함수
// 외부 상태를 변경 | 인자를 직접 변경하는 함수
function add3(a, b) {
  c = b; // 외부 상태를 변경
  return a + b;
}
console.log(c); // 5
add3(1, 3);
console.log(c); // 3
```

```jsx
// X 순수
// 인자의 상태를 직접 변경하고있슴
var obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}
obj1.val; // 10
add4(obj1, 20);
obj1.val; // 30
```

함수형에서는 객체의 값을 변경할 수 없는건가…? **아니!** 조금 다른 방식으로 객체의 값을 변형해나감.

**원래 있던 값은 두고, 원하는 값이 반영된 새로운 객체를 반환함**

```jsx
// O 순수
// 외부상태 변경 X, 인자로 받은 것에 대해 직접 변경도 X
var obj1 = { val: 10 };
function add5(obj, b) {
  return { val: obj.val + b };
}
obj1.val; // 10
var obj2 = add5(obj1, 20);
obj1.val; // 10
obj2.val; // 30
```

## 일급함수

- 함수를 값으로 다룰 수 있음
- 함수를 변수에 담을 수 있음
- 함수가 함수를 인자로 받을 수 있다
- 다른 함수에 함수를 인자로 넘겨 다른 함수에서 인자로 받은 함수 실행 가능

```jsx
var f1 = function (a) {
  return a * a;
};
f1; // function(a) { return a * a; };

var f2 = add;
f2; // function add(a,b) { return a + b; };

// 함수 내부에서 함수를 평가한 다음에 리턴
function f3(f) {
  return f();
}
f3(function () {
  return 10;
}); // 10
```

**언제 평가해도 상관없는 순수를 많이 만들고 그 순수함수를 필요한 시점에서 평가를 하여 다양한 로직을 만들어가는 것이 순수함수의 특징**

## 예시 `add_maker`

**일급함수 + 클로저**

```jsx
// add_maker 함수가 종료되더라도 내부 함수에서 a를 참조하고 있기 때문에 내부 함수는 클로저
function add_maker(a) {
  // 이 함수도 순수함수
  // a의 상태를 직접 변경하지 않음
  // 항상 동일한 값을 가지고있는 a에 b를 더해 return
  return function (b) {
    return a + b;
  };
}
var add10 = add_maker(10);
add10(20); // 30
```

```jsx
function f4(f1, f2, f3) {
	return f3(f1() + f2());
}

f4(
	function() {return 2;), // 순수
	function() {return 1;),
	function(a) {return a * a;)
) // 9
```

함수형 프로그래밍을 하면 위 보이는 `f4`같은 형태로 코딩을 하게 됨.

순수함수를 만들고 조합하고 어떤 로직에서 평가를 하는지,..

비동기 시점이나 동시성이 필요한 시점에서 특정한 함수를 실행해야하는 시점까지 함수를 값으로 다루다가 원하는 시점에서 평가를 한다던지,

for문을 반복하며 필요한 부분에서 받아둔 함수를 여러번 실행한다던가가 함수형 프로그래밍
