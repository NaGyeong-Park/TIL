새로운 글을 작성하는 어플리케이션을 만들거다!



실제 URL이 아닌, mode를 바꿔주어 create에 해당하는 UI가 나타나게 할거임!

```js
//App.js
import './App.css';
import {useState} from 'react';
function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read" + t.di} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a></li>);
  }
  return <nav>
    <ol>
      {lis}
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
  const [mode,setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content =  <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content =  <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE'){
    content = <Create></Create>
  }
  return (
    <div className="App">
      <Header title="REACT" onChangeMode={() => {
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ')
        setId(_id);
      }}></Nav>
      {content}
      <a href="/create" onClick={event =>{
        event.preventDefault(); //URL이 안바뀌게 바꿨다!
        setMode('CREATE') // Mode 값을 CREATE로 바꿔 App이 다시 실행
      }}>Create</a>
    </div>
  );
}

export default App;
```

{content} 밑에 A태그를 추가하여 CREATE를 만들어주었다.

CREATE를 if문에 작성해도 되지만 꽤 복잡하기때문에 component로 따로 빼서 써주겠다.



생성작업을 이용하고 있는 이용자가 후속작업을 할 수 있는 인터페이스를 제공하고 싶어!

`onCreate{()=>{}}`

form태그는 submit 누르면 페이지가 새로고침되어버려 ㅠㅠ prevent해줘야겠다!

` <form onSubmit={event =>{event.preventDefault();}}>`

title값과 body 값 가져와야지! event.target은 누구? 나! form 태그!

그럼 title값은 어떻게 가져와? `event.target.title.value` title은 __태그__

```js
...
      const title = event.target.title.value;
      const body = event.target.body.value;
```



넘겨줘야지 > props!

props로 onCreate함수를 불러와 첫번째 파라미터는 title, 두번째 파라미터는 body를 넘겨준다.

```js
function Create(props){
  return <article>
    <h2>CREATE</h2>
    <form onSubmit={event =>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"/></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function App() {
    ...
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ])
  let content = null;
  if(mode === 'WELCOME'){
    content =  <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content =  <Article title={title} body={body}></Article>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      //topics에 추가해야겠다! => 일단 topics를 state로 승격해야겠다.
      //앗 id관리 어떻게하지...? nextId State를 만들어야겠다
    const newTopic = {id:nextId,title:_title, body:_body}
    setTopics(topics)
    }}></Create>
  }
  return (
      ...
      <a href="/create" onClick={event =>{
        event.preventDefault(); //URL이 안바뀌게 바꿨다!
        setMode('CREATE') // Mode 값을 CREATE로 바꿔 App이 다시 실행
      }}>Create</a>
    </div>
  );
}
```

이렇게까지 해줬는데도 안바뀐다고...? 오ㅐ? __[JavaScript Immutability](https://www.youtube.com/playlist?list=PLuHgQVnccGMBxNK38TqfBWk-QpEI7UkY8)__ 를 참고!

간단히는 

상태를 만들 때 상태의 데이터 타입이 PRIMITIVE, 원시 데이터 타입이다.(string, number, boolean, ...)

그런데 내가 상태로 만드려는 데이터가 범객체, Object 라면...?(object, array)

처리 방법이 달라져야해 ㅠㅠ __데이터를 복제해야해!__ 

`newValue = {...value} => newValue 변경 => setValue(newValue) `

`newValue = [...value] => newValue 변경 => setValue(newValue) `

이렇게하고나서 기존 값과 비교하고 다르면 비로소 component가 다시 실행된다!

```js
...
 else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      //topics에 추가해야겠다! => 일단 topics를 state로 승격해야겠다.
      //앗 id관리 어떻게하지...? nextId State를 만들어야겠다
    const newTopic = {id:nextId,title:_title, body:_body}
    const newTopics = [...topics]
    newTopics.push(newTopic);
    setTopics(newTopics);
    }}></Create>
  }
...
```



```js
const [value, setValue] = useSate([1]);
value.push(2); // 오리지널 데이터를 바꾸었다
setValue(value); //오리지널 데이터를 입력해줬다. 오리지널과 새로들어온 데이터가 같네? 렌더링 안해
//따.라.서 복제해서 바꿔준다

const [value, setValue] = usestate(1);
setvalue(2); //오리지널 데이터랑 다르네~ 오키 변경
```



암튼 그니까

```js
...

    const newTopic = {id:nextId,title:_title, body:_body}
    const newTopics = [...topics]
    newTopics.push(newTopic);
    setTopics(newTopics);
    setMode('READ')
    setId(nextId)
    setNextId(nextId+1)
    }}></Create>
...
```

이게 상태가 주는 세련된 효과다!