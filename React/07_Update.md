# 수정 기능 구현



a태그 - update 추가 

READ 모드 일때만 update 태그가 보이게 하고싶은데...?

```js
// App.js
function App() {
    ...
    let contextControl = null;
	  ...
    else if(mode === 'READ'){
        ...
    contextControl = <li><a href="/update">Update</a></li>
  }
    ...
  return (
      ...
        {contextControl}
      ...
```



Create일 때와 비슷하기 때문에 function도 비슷하게 갈겁니다~

```js
function Update(props){
  return <article>
  <h2>UPDATE</h2>
  <form onSubmit={event =>{
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUreate(title, body);
  }}>
    <p><input type="text" name="title" placeholder="title" value={props.title} /></p>
    <p><textarea name="body" placeholder="body" value={props.body} /></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}
```

```js
else if(mode == 'UPDATE') {
    let title, body = null;
    for(let i = 0; i < topics.length; i++){
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title, body) =>{
      
    }}></Update>
```

일단 이렇게 작성해줬는데, 작성할 때 value값을 수정할 수 없다? 왜지?

React에서 props 데이터는 사용자가 component에게 전달한 명령!

input태그에 입력하는건 입력하는거고 props.title은 여전히 html인거지 ㅠ

해야하는건.... 저 prop을 __state__(내부자가 사용하는 데이터)로 바꿔야해!

```js
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
```

function에 이 코드를 추가해줬지만 마찬가지... 우리는 title state을 바꾸고 있는게 아니다

그래서 사용하는게 onChange : html에서는 마우스포인트가 바깥으로 벗어났을 때 바뀌는거면 React에서는 값을 입력할 때마다 이벤트가 호출된다.

```js
<p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
      console.log(event.target.value);
      setTitle(event.target.value);
    }}/></p>
```

event.target.value를 찍어봤을때 입력한 마지막 알파벳만 출력된다.

그래서! 입력 할 때마다 title 상태를 바꿔주면 된다.





그럼 나머지 코드를 완성해보자

```js
...
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
  ...
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
    contextControl = <li><a href={"/update/"+id} onClick={event => {
      event.preventDefault();
      setMode('UPDATE')
    }}>Update</a></li>
  } else if(mode === 'CREATE'){
   ...
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
      ...
        {contextControl}
      </ul>
    </div>
  );
}

export default App;

```

