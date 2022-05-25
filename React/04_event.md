`<input type="button" onclick="alert('hi')">` 리액트에서도 이렇게 하고싶어 ;^;



# Event

```js
//App.js
...
<Header title="REACT" onChangeMode={function() {
        alert('Header');
      }}></Header>
...
```

Header함수에 onClick이벤트를 준다

```js
function Header(props) {
  return <header>
    <h1><a href="/" onClick={function(event) {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
```

a 태그는 일반적인 HTML 태그가 아니야~! 유사 HTML이다.

Header을 클릭했을 때 페이지 Reload가 일어나지 않기 위해서는

onClick의 콜백함수로 들어가는 저 함수가 실행될 때 저 함수는 event 객체를 첫번째 파라미터로 받는다.

```js
onClick={function(event) {
      event.preventDefault();
```

`event.preventDefault();` 를 이용해 a 태그가 하는 일을 하지 않게하겠어!

```js
props.onChangeMode();
```

Header의 props로 전달된 onChangeMode가 가르키는 함수를 호출할거야! 



## Nav도~

```js
<Nav topics={topics} onChangeMode={(id) => {
    alert(id);
}}></Nav>
```

```js

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read" + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a></li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
```

event.target은 event를 유발시킨 태그, 즉 a태그!



