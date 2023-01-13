function solution(html) {
  const newArr = html
    .trim()
    .split("<")
    .filter((elem) => {
      return elem !== "";
    });
  console.log(newArr);
  const stack = [];
  newArr.map((elem) => {
    if (elem !== "") {
      if (elem[elem.length - 2] === "/") {
      } else if (elem[0] !== "/") {
        stack.push(elem.slice(0, -1));
      } else {
        stack[stack.length - 1] === elem.slice(1, -1) ? stack.pop() : null;
      }
    }
  });

  answer = stack.length === 0 ? true : false;
  return answer;
}

solution("  <div></div>");
solution("<div>");
solution("<img/>");
