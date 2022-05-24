우리가 가지고 있는 태그들도 속성을 가지게 하고싶어...ㅂㄷㅂㄷ => __props__!



```js
import './App.css';
function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}
function Nav() {
  return <nav>  
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}
function Article() {
  return <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
}
function App() {
  return (
    <div className="App">
      <Header title="REACT">{props.title}</Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
```



### Header의 속성 바꿔보기

```js
function Header(props) {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}
```

props라고 안써도 되지만 남들 다~ 쓰니깐.

props를 console.log 찍어보면 Object => `{ }`안에 쓰면 표현식으로 취급해서 props의 title인 REACT가 출력된다!

```js
import './App.css';
function Header(props) {
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
function Nav() {
  return <nav>  
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}
function Article(props) {
  return <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
}
function App() {
  return (
    <div className="App">
      <Header title="REACT"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}
export default App;
```



### list들은? 

for문으로 해보자면...

```js
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={"/read" + t.di}>{t.title}</a></li>);
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
```

key값을 넣지 않으면 에러가 나는데,

자동으로 생성한 태그의 경우에는 태그들을 추적할 때 필요한 것이 있어야하는데 key라고 약속된 prop을 부여하므로서 React가 정확하게 동작하는데 협조해주는 것!