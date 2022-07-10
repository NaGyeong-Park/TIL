import React, { useEffect, useState } from "react";

function Index() {
  return (
    <div>
      {/* localStorage로 구현말고 redux를 활용 할 것임 */}
      <h1>Hi, {localStorage.getItem("user_name")}</h1>
      이곳은 Index 입니다.
    </div>
  );
}
export default Index;
