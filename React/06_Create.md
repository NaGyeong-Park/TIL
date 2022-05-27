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



생성작업을 이용하고 있는 이요자가