## Understanding State

```js
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    let counter = 0;
    function countUp() {
      counter++;
    }
    const Container = () => (
      <div>
        <h3>Total clicks : {counter}</h3>
        <button onClick={countUp}>Click me</button>
      </div>
    );
    ReactDOM.render(<Container />, root);
  </script>
</html>

```

button을 눌러도 counter가 안바뀐다...? => __아니!__ console에 찍어보면 값이 증가되고 있음을 알 수있다

근데 왜...? : __Rendering을 한 번밖에 안하지 않는가?__

countUp, Container 모두 funtion이라 바로 실행되지 않고, ReactDOM.render이 페이지를 로드했을 때 랜더링 되는데 Container이 실행되었을 때는 counter은 0이다! 물론 EventListener에 의해 counter의 값이 증가되지만 __어느 곳에서도 UI를 새로고침을 하고있지 않다!__

```js
...
    function render() {
      ReactDOM.render(<Container />, root);
    }
    function countUp() {
      counter++;
      render();
    }
...
```

그래서 countUp을 호출할 때 다시 render되게 만들어주면 우리가 원하는 기능을 만들 수 있다.

vanilla JS에서는 h3, button, body가 계속 업데이트 된다. 하지만 React에선 __UI에서 바뀐 부분만__ 업데이트해준다. => 인터엑티브한 앱을 만들 수 있어...! 오직 바뀐 것만 생성된다구!!

#### 이거 값 바꿀 때마다 render 해줘야 하는데요 ㅠㅠ.... => 그래서 요렇게 안써요~



## setState part One

```js
const root = document.getElementById("root");
function App() {
    const data = React.useState(0);
    const [counter, modifier] = data;
    console.log(data);
    return (
        <div>
        <h3>Total clicks : {counter}</h3>
<button>Click me</button>
</div>
);
}
ReactDOM.render(<App />, root);
</script>
```

위 내용들은 생활코딩에서 배웠으니 합쳐서 블로그에 올리도록 하겠다.

