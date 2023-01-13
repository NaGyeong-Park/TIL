const fin = (a) => {
  return a;
};
let str = "";
const curry = (f) => {
  return function (a) {
    console.log(a);
    if (typeof a === "string") return curry(fin);
    else return str + a;
  };
};

const curryFun = curry(fin);

console.log(curryFun("hi")("hi"));
