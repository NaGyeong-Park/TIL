# Delete

`<>` : 그냥 복수의 태그들을 묶는 용도로 실제로 html에서 까보면 안나온다!

Delete는 update 밑에 버튼을 만들어서 

현재 id값과 같지 않은 topics들을 newTopics들에 넣어 

setTopics로 Topic의 상태를 newTopics로 바꾸어주었다. => 현재 id를 가진 Topic이 Delete

그리고 setMode로 Welcome 페이지로 가게 만들었다.

```js
contextControl = <>
    <li><a href={"/update/"+id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE')
    }}>Update</a></li>
    <li><input type="button" value="Delete" onClick={()=>{
      const newTopics = []
      for(let i=0; i < topics.length; i++){
        if(topics[i].id !== id) {
          newTopics.push(topics[i])
      }
    }
    setTopics(newTopics)
    setMode('WELCOME')
    }} /></li>
    </>
```





# 프로젝트 완성본

```js
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
function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return <article>
  <h2>UPDATE</h2>
  <form onSubmit={event =>{
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUpdate(title, body);
  }}>
    <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
      setTitle(event.target.value);
    }}/></p>
    <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
      setBody(event.target.value);
    }} /></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}
function App() {
  const [mode,setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'js is ...'}
  ])
  let content = null;
  let contextControl = null;
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
    contextControl = <>
    <li><a href={"/update/"+id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE')
    }}>Update</a></li>
    <li><input type="button" value="Delete" onClick={()=>{
      const newTopics = []
      for(let i=0; i < topics.length; i++){
        if(topics[i].id !== id) {
          newTopics.push(topics[i])
      }
    }
    setTopics(newTopics)
    setMode('WELCOME')
    }} /></li>
    </>
  } else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body)=>{
      //topics에 추가해야겠다! => 일단 topics를 state로 승격해야겠다.
      //앗 id관리 어떻게하지...? nextId State를 만들어야겠다
    const newTopic = {id:nextId,title:_title, body:_body}
    const newTopics = [...topics]
    newTopics.push(newTopic);
    setTopics(newTopics);
    setMode('READ')
    setId(nextId)
    setNextId(nextId+1)
    }}></Create>
  } else if(mode == 'UPDATE') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) =>{
      const updatedTopic = {id: id, title: title, body: body}
      const newTopic = [...topics]
      for(let i = 0; i < topics.length; i++){
        if(newTopic[i].id === id) {
          newTopic[i] = updatedTopic
          break;
        }
      }
      setTopics(newTopic);
      setMode('READ')
    }}></Update>
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
      <ul>
        <li><a href="/create" onClick={event =>{
          event.preventDefault(); //URL이 안바뀌게 바꿨다!
          setMode('CREATE') // Mode 값을 CREATE로 바꿔 App이 다시 실행
        }}>Create</a></li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
```

