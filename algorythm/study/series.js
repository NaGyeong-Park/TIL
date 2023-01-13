const solution = (string) => {
  const numberList = string.split("");
  let plusCnt = 0;
  let minusCnt = 0;
  let sameCnt = 0;
  numberList.forEach((number, i) => {
    if (i + 1 === numberList.length) return;
    const prevNum = Number(number);
    const nextNum = Number(numberList[i + 1]);
    plusCnt += checkSeriesNumbers(prevNum, nextNum) ? 1 : 0;
    minusCnt += checkSeriesNumbers(nextNum, prevNum) ? 1 : 0;
    sameCnt += checkSameNumbers(prevNum, nextNum) ? 1 : 0;
  });
  return plusCnt > 1 || minusCnt > 1 || sameCnt === 3 ? false : true;
};

const checkSeriesNumbers = (prevNum, nextNum) => {
  return prevNum + 1 === nextNum ? true : false;
};

const checkSameNumbers = (prevNum, nextNum) => {
  return prevNum === nextNum ? true : false;
};

const input = [
  "0000",
  "9876",
  "1234",
  "1230",
  "2987",
  "1890",
  "0129",
  "6108",
  "3246",
];

input.forEach((n, idx) => {
  console.log(solution(input[idx]));
});
