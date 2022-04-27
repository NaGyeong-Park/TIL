let name = 'july'
const age = 10
name = 'neo'
console.log(`${name}님의 나이는 ${age}입니다.`)

/* 1. 너무 자연스럽게 변수에 할당이 가능함
2. 변수에 들어갈 수 있다 = 다른 함수의 인자로 들어갈 수 있다
3. 다른 함수의 return 값이 될 수도 있다.*/

// 함수 선언식
function name(params){
  //do ~~
}
name(params)()

// 함수 표현식
// 정의한 함수를 별도의 변수에 할당하는 것
let name = function name2(params){
  // do ~
}
// 함수 표현식으로 쓸 땐 보통 name2를 안씀
let name = function (params){
  // do ~
}

let sayHi = function (name = 'noName'){
  console.log(`${name} 하이하이`)
}
sayHi()

// 여러개 넣었을 때
const twoArgs = function(arg1, arg2){
  return [arg1, arg2]
}
console.log(twoArgs(1,2,3,4,...))

// ... : Rest paramiter
// 파이썬 패킹 언패킹이랑 비슷
const twoArgs = function(arg1, ...arg2){
  return [arg1, arg2]
}
console.log(twoArgs(1,2))

// 다른 예시
// 여기서 ...은 spread operater
const twoArgs = function(arg1, arg2,arg3,arg4){
  return arg + arg2 + arg3 + arg4
}
const myArr = [1,2,3]
console.log(twoArgs(...myArr,4))

// 호이스팅 : 함수 선언식 O / 함수 표현식 X
consol.log(testFunc())

var testFunc = function(arg1, arg2,arg3,arg4){
  return arg + arg2 + arg3 + arg4
}

var testFunc
consol.log(testFunc())

testFunc = function(arg1, arg2,arg3,arg4){
  return arg + arg2 + arg3 + arg4
}


//Arrow Function 
// 일반적인 함수 표현식
const arrow1 = function (name){
   return `${name}님 안녕하세요?`
}
console.log(arrow1('aiden'))

// 이 함수를 Arrow Function으로 바꿔보겠다!
const arrow2 = (name) => {
  return `${name}님 안녕하세요?`
}
console.log(arrow2('july'))

// 이 함수를 더 Arrow Function으로 바꿔보겠다!
// 매개변수가 1개일 때 소괄호 없애기 가능
const arrow3 = name => {
  return `${name}님 안녕하세요?`
}
console.log(arrow3('haley'))

// 이 함수를 더 Arrow Function으로 바꿔보겠다!
// return 마저 생략해버리겠다
const arrow4 = name =>  `${name}님 안녕하세요?`
console.log(arrow4('jun'))


// 함수를 어디에서 호출 했는지가 중요한게 아니고,
// 함수를 어디에서 '선언' 했는지가 중요하다!
// Lexical Scope
const x = 1

function foo() {
  const x = 10
  bar()
}

function bar() {
  console.log(x);
}
foo()
bar()


// 문자열

const str = 'a santa at nasa'

str.includes('santa') //true
str.includes('asan') //False

str.split()
str.split('')
str.split(' ')

str.replace(' ','-')
str.replaceAll(' ','-')

// 공백 제거
str.trim()
str.trimStart()
str.trimEnd()


// 배열
const myArr= [1,2,3,4,5]

// -1 인덱스가 없다 => 에러는 안나고 Undefined
// 그래서 길이 구해서 1빼주면 마지막 요소
console.log(myArr.length);
console.log(myArr[myArr.length-1]);

// 원본 배열이 reverse 변경!
myArr.reverse

// 배열 뒷 부분
myArr.push(100)
console.log(myArr);
myArr.pop()
console.log(myArr);

// 배열 앞 부분
myArr.unshift(350)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(1)); // true or false
console.log(myArr.indexOf(1)); // 인덱스 값 return / 없는 값은 -1 return

console.log(myArr.join()); // ,로 연결된 문자열 1,2,3,4,5
console.log(myArr.join(-)); // -로 연결된 문자열 1-2-3-4-5

// 얕은 복사
const myArr2 = [...myArr]


//callback function
const fruit = ['딸기','수박','참외','복숭아']

// myArr = array.forEach(콜백함수);
// myArr.forEach(() => {})

fruit.forEach((elem, idx) =>{
  console.log(elem, idx);
})


// forEach
const images = [
  {height: 10, width: 30},
  {height: 20, width: 90},
  {height: 54, width: 32},
]

const areas = []

images.forEach((elem, idx) =>{
  // areas.push(elem['height']*elem['width'])
  areas.push(elem.height*elem.width) // <<< 추천형식
})
console.log(areas);


// map
// const myArr = [1,2,3,4,5]

// const newArr = myArr.map((elem,idx) => {
//   // do ~~
//   return ~~
// })
const myArr = [1,2,3,4,5]

const newArr = myArr.map((elem) => {
  return elem * 10
})
console.log(newArr);

// 응용
const images = [
  {height: 10, width: 30},
  {height: 20, width: 90},
  {height: 54, width: 32},
]

const heights = images.map((elem)=> {
  return elem.height
})
console.log(heights);



// filter

myArr = [1,2,3,4,5,6,7,8,9]
const newArr = myArr.filter((elem) => {
  return elem%2 // true가 되는 애들만 모아서 반환해줌
})
console.log(newArr);

// 예시
const numbers = [15,25,35,45,55,65,75,85,95]

const newNumbers = numbers.filter((elem) => {
  return elem > 50
})
console.log(newNumbers);

// 지금까지는 elem, idx, arr가 들어갔다

// reduce
// acc, element, index, array가 들어간다

const myArr = [1,2,3,4,5]
// myArr.reduce((acc, elem, idx, arr) => {
//   // do~~
//   // return
// }, acc 초기값 )
const rlt = myArr.reduce((acc, elem, idx, arr) => {
  return acc + (elem * 2)
}, 0)
console.log(rlt);


// find : 하나만 찾을거야 다 찾고싶으면 filter 쓰기
const myArr = [1,2,3,4,5]

const rlt = myArr.find((elem,idx,arr) => {
  return elem > 3
})
console.log(rlt)

// 예시
const avengers = [
  {name : 'Tony Stark', age:45},
  {name : 'Steve Rogers', age:32},
  {name : 'Thor', age:40},
]

const realAvenger = avengers.find((elem) => { // filter로 바꾸면 Thor도 나온다
  return elem.age > 39
})
console.log(realAvenger); // Tony


// some
// 하나라도 통과하면 참, 다 거짓이면 거짓
const myArr = [1,2,3,4,5]
const rlt = myArr.some((elem) => {
  return elem>0
})
console.log(rlt);


// every
// 모든게 통과하면 참, 하나라도 거짓이면 거짓
const myArr = [1,2,3,4,5]
const rlt = myArr.every((elem) => {
  return elem>0
})
console.log(rlt);



// / 객체

// JSON
const me = {
  firstName : 'July', // 속성
  lastName : 'Park',
  fullName : this.firstName + this.lastName, // NaN
  // 객체에서 바로쓰는 this는 window를 의미
  'korea age' : 30, // 띄어쓰기가 있으면 ''로 묶어줘야 한다.
  getFullName : function() { // 메소드
    return this.firstName + this.lastName
    // 어떠한 객체 안에있는 메소드에서 사용하는 this는 객체(me)를 의미
  }
}
console.log(me.firstName);
console.log(me['firstName']);
console.log(me.getFullName());


// ES6부터 어떻게 쓸까?
const books = ['asb1', 'asd2']
const magazines = ['asf3', 'afdsf4']

// 전
const bookStore_before = {
  books : books,
  magazines : magazines,
}
console.log(bookStore_before);

// 후 : 속성명 축약
const bookStore_after = {
  books,
   magazines,

   // 전
   greeting1 : function {
    console.log('hola');
  },
  // 후 : 메서드 명 축약
  greeting2() {
    console.log('hola');
  }
}
console.log(bookStore_after);
bookStore_after.greeting2()



// 구조 분해 할당

const me = {
  firstName : 'July',
  lastName : 'Park',
  age : 30,
}
// 이거 귀찮잖아!
const firstName =  me.firstName
const lasttName =  me.lastName
const age =  me.age

// 이렇게 줄여야지
const {firstName} =  me
const {lasttName} =  me
const {age} =  me

// 이것도 귀찮은데...
const {firstName, lastName, age} = me

// 응용!
function getUserInfo({firstName, age}) {
  console.log(`name : ${firstName}`);
  console.log(`age : ${age}`);
}
getUserInfo(me)

// Spread opreator
const obj = {b:2, c:3, d:4}
const newObj = {a:1, ...obj, e:5}
console.log(newObj)

// 참고 : 배열은 객체다!

// this 정리

// this : window
function getFullName(){
  return this.firstName + this.lastName
}

// this : me
const me = {
  firstName : 'july',
  lastName : 'kim',
  getFullName : getFullName,
}
// this : you
const you = {
  firstName : 'love',
  lastName : 'park',
  getFullName : getFullName,
}

me.getFullName() // julykim
you.getFullName() // lovepark
getFullName() // NaN

const myArr = [1,2,3,4,5, [6,7,8]]
console.log(_.sample(myArr));
console.log(_.sampleSize(myArr));
console.log(_.reverse(myArr)); // 원본도 변경 됨
const myRange = _.range(10)
console.log(myRange); // (s, e, step) 똑같다!
// 깊은 복사 test
const copyArr = _.cloneDeep(myArr)
// 원본 배열 변경
myArr[5][1] = 9999
console.log(myArr);
console.log(copyArr); // 참조type도 알아서 deepcopy를 해주는 메소드!