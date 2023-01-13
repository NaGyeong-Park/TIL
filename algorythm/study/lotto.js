const ids = [1, 2, 1, 3, 1, 2, 1];
const days = ["월", "목", "월", "수", "일", "화", "금"];
const daysName = ["월", "화", "수", "목", "금", "토", "일"];

const solution = (ids, days) => {
  const checkObj = {};
  ids.forEach((id, i) => {
    if (!checkObj[id]) {
      checkObj[id] = [0, 0, 0, 0, 0, 0, 0];
    }
    checkObj[id][daysName.indexOf(days[i])] = 1;
  });

  const returnList = [];
  for (let key in checkObj) {
    const result = getVailableUserNumber(checkObj, key);
    result ? returnList.push(Number(result)) : null;
  }
  return returnList;
};

const getVailableUserNumber = (obj, key) => {
  const sumUserJoinCnt = obj[key].reduce((a, b) => a + b, 0);
  return sumUserJoinCnt > 2 ? key : false;
};

console.log(solution(ids, days));
