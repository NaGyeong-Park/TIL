## JS의 Sort, 너 좀 이상한데?

### Javascript sort함수의 이상한 정렬

![img](https://auspicious-family-64e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb853a38c-95db-4e6f-ac84-ab70506269ac%2FUntitled.png?table=block&id=67b1a419-9611-4b93-a639-48b4d1c7fa27&spaceId=a27bcbe2-51f3-4b3b-979c-6c34c5202b61&width=1010&userId=&cache=v2)

오늘 과제를 진행하면서, python을 사용할 때와 마찬가지로 sort 함수를 이용해 배열을 정리하려는데 무언가 이상함을 느낄 수 있었다… 이거 내가 생각하는 정렬이 아니잖아?

### JS sort의 기본 정렬방법

[Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

javascript의 sort함수 매개변수로 정렬 순서를 정의하는 함수를 생략하면

원소들을 문자열로 만들고 → UTF-16 코드 유닛 값을 기준으로 순서를 정렬한다. 문자열 정렬에는 적합하겠지만, 숫자 정렬에는 부적합한 것이다!

### CompareFunction이 주어진다면?

`compareFunction` 이 주어진다면 compare 함수 반환 값에 따라서 정렬된다.

```jsx
function compare(a, b) {
  if (a가 b보다 작다) {
		// a를 b보다 낮은 색인으로, 즉 a가 먼저온다
    return -1;
  }
  if (a가 b보다 크다) {
		// a를 b보다 높은 색인으로, 즉 b가 먼저온다
    return 1;
  }
  // a와 b가 같다
	// 그대로
  return 0;
}
```

그래서 a-b를 기준으로 봤을 때, a-b가 음수면 바꾸지않고, 양수면 인덱스 위치를 바꿔 정렬을 하는 것이다!

```jsx
function compareNumbers(a, b) {
  return a - b;
}
```