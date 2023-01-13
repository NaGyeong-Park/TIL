function solution(paths) {
  var answer = "";
  answer = paths.reduce((acc, pre) => {
    const lst =
      typeof acc === "array"
        ? acc.split("/").filter((elem) => {
            return elem !== "";
          })
        : [];
    const result = check(lst);
    console.log(result);
    return result ? acc.push(result) : acc;
  }, []);
  return answer;
}

const check = (arr) => {
  const newStr = arr.reduce((acc, pre) => {
    if (pre[0] !== ".") {
      return acc + "/" + pre;
    } else {
      if (pre === ".") {
        return acc;
      } else if (pre === "..") {
        const preDir = acc.split("/");
        preDir.pop();
        return preDir.join("/");
      } else {
        const preDir = acc.split("/");
        preDir.pop();
        preDir.pop();
        return preDir.join("/");
      }
    }
  }, "");
  return newStr ? newStr : false;
};

solution(["/foo", "bar", "baz/asdf", "q", ".."]);
