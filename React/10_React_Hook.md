![](10_React_Hook.assets/image.png)

이제 막 React를 배우기 시작한 나같은 아가 개발자들은 React Hook에 대해 많이 들어봤지만 정확히 무엇인지 모를 것이다. Hook은 공식문서에 한국어로 친절하게 서술되어있다. 오늘은 이를 정리하며 개념을 잡는 시간을 잡아보도록 하겠다 :)!

## You already know about 'State Hook'
```react
import React, { useState } from 'react';

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
버튼을 클릭하면 값이 증가하는, React를 공부한다면 많이 작성해봤을 예제 코드이다. 여기서 `useState`가 바로 Hook이다! 
위 예제에서 `useState` 는 Array를 제공하는데, 첫번째는 Data, 두번째는 Modify Function을 준다. 이 Modify Function을 이용해서 state 값을 바꿀 경우 **component도 동시에 리렌더링된다!**

여기서 Modify Function을 이용해서 state 값을 바꾸는 방법은 두가지가 있는데,
- 직접 값 입력하기 : 이전 state를 이용해서 현재 state를 바꿔주는 것
  - `setCounter(counter + 1); `
- 함수를 전달하기 : 함수형태 : 함수가 뭘 return하던지 이것이 새 state를 반환한다!
  - `setCounter((current) => current+1)`
  - React가 확실히 현재 값이라는 것을 보장하고 있어!
  - 예상치 못한 업데이트가 어디선가 일어났어도 혼동을 주는 것을 방지
  

# 그래서 Hook이 뭐라구요?
Hook은 Function component에서 React state와 생명주기(Lifecycle features)을 **연동(hook into)** 할 수 있게 해주는 **함수**이다.
Hook은 class 안에서는 동작하지 않는다. 대신 함수형으로 React를 사용할 수 있게 해준다. 두 스타일을 비교하고 싶다면 [React class vs function style - 3.2. 함수에서 state 사용법 hook
 : 생활코딩](https://youtu.be/R6GPIWG7O9s)을 참고하면 된다. hook이 등장하면서 함수 스타일로 클래스 스타일의 기능성에 버금가는 component를 만들 수 있게되었다.

 React는 `useState`같은 내장 Hook을 몇 가지 제공하고 또한 사용자 정의 Hook도 만들 수 있다! 일단 내장 Hook들인 Effect Hook과 State Hook을 소개하고, Hook 규칙을 숙지하고 나만의 Hook을 만들어보겠다!

## Effect Hook
React component 안에서 Data를 가져오거나(get) 구독하고(subscribe), DOM을 직접 조작하는 작업의 모든 동작을 **side effects(effects)**라고 한다. 왜냐면 이런 동작들은 다른 component에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이기 때문이다!

`useEffect`는 function component 내에서 이런 side effect를 수행할 수 있게 해준다. React class의 `componentDidMount`,` componentDidUpdate`, `componentWillUnmount`와 같은 목적이지만 하나의 API로 통합 된것이 `useEffect`이다. 비교하는 자료가 궁금하다면 [Using the Effect Hook
](https://ko.reactjs.org/docs/hooks-effect.html)

Hook을 사용하면 구독을 추가하고 제거하는 로직과 같이 서로 관련있는 코드들을 한군데에 모아서 작성할 수 있다.

### Effect Hook 예시 : DOM 업데이트 후 문서의 타이틀을 바꾸는 component
```react
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷합니다
  useEffect(() => {
    // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
React는 첫 렌더링 포함 매 렌더링 이후에 effects를 실행한다. `useEffect`를 사용하면 Dom을 바꾼 이후에 effect 함수를 실행 할 것이다. Effect는 component 안에 있어서 props와 state에 접근이 가능하다.

### Effect Hook 예시 : 친구의 접속 상태를 구독하는 effect, 구독 해지시 effect 해제

```react
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
위 예시에서 component가 unmount될 때 React가 `ChatAPI`에서 구독을 해지 할 것이다. 또한 리렌더링이 일어나 effect를 재실행하기 전에도 구독을 해지한다.

# Hook


참고자료 : [React 공식 문서](https://ko.reactjs.org/docs/hooks-overview.html)