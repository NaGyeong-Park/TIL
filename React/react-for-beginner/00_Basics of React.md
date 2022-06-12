React는 Interactive한 앱을 만들 수 있다.

React JS는 어플리케이션이 아주 Interactive하게 만들어주는 라이브러리고, (element를 만들고, eventListener를 더함)

React-dom은 모든 React element를 html을 두는 역할을 한다.(React element를 HTML 태그로 바꿈)

| 바닐라 자바스크립트로 만들기<br />1.HTML을 먼저 만들고<br />2. JS에서 가져온다 <br /> | React 로 만들기<br />1. JS에서 만들고(시작)<br />2. HTML에 뿌려준다.(끝)<br /> |
| ------------------------------------------------------------ | ------------------------------------------------------------ |



## React vs Vanilla JS

index.html과 vanilla 비교

`React.createElement("태그 이름", {id, class, eventListener .. }(objects with props), content)`

위 index 파일에 작성된 코드는 어려운 React, 기본 React JS이긴 하나 실제 React 개발자들도 사용하지않는다.

vanila JS와 비교하기 위해서 작성했다. 하지만 직관적으로 봐도 Vanilla JS보다 어려운 React JS가 쉽지 않은가?

```js
const btn = React.createElement("button",{
    onClick: () => console.log("im clicked"),
    style: {backgroundColor: "tomato"}
  }, "Click me") 
```

보시다싶이, object에는 onClick같은 EventListener이 들어갈 수 있고, style같은 요소가 들어갈 수 있다.

여기서 중요한 것은 React는 SUPER 똑똑이라서 어떤 것이 html 태그에 들어가는지, 안들어가는지를 구분해 알아서 랜더링 해준다. elements를 까보자!

![image-20220621151352344](00_Basics%20of%20React.assets/image-20220621151352344.png)

짜잔! style만 태그에 넣어줬다. 똑쟁이 React!

&nbsp;

&nbsp;

## JSX

`React.createElement(.., ..., ...)` 를 대체할 것인데 이유는 개발자들에게 좀 더 편리한 도구를 사용하기 위해서이다.

그 편리한 것은 JSX이다.

JSX : JavaScript를 확장한 문법. React한 문법을 쓸 수 있는데, HTML에서 사용한 문법과 유사한 형태의 문법을 이용한다.

```js
// JSX
    const Button = (
      <button
        style={{ backgroundColor: "tomato" }}
        onClick={() => console.log("im clicked")}
      >
        Click me
      </button>
    );
// Basic React
    const btn = React.createElement(
      "button",
      {
        onClick: () => console.log("im clicked"),
        style: { backgroundColor: "tomato" },
      },
      "Click me"
    );
```

Babel이 JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔준다.

즉 JSX => Basic React로 바꿔준다!



Render해주려면, 일단 변수로 지정해줬던 Title과 Button을 함수로 만들어준다.

```js
const container = (
    <div>
	    <Title />
    	<Button />
    </div>
    );
```

_주의 : 대문자가 아니면 HTML은 기본 tag라고 생각한다 내가 만든 컴포넌트는 대문자로 시작해야한다!_
