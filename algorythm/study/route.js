function parse(route, path) {
  const routeList = route.split("/");
  const path = path.split("/");
  return {
    matches: false,
  };
}

function solution(route, path) {
  var result = parse(route, path);
  return JSON.stringify(result);
}

const input = [
  [
    ["/about", "/about"],
    ["/service/[id]", "service/1"],
    ["/service/[id]", "/services"],
    [["/about", "/"]],
    ["service/[serviceId]", "/services"],
  ],
];
