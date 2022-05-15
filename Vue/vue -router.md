![image-20220510142944950](C:/Users/July/AppData/Roaming/Typora/typora-user-images/image-20220510142944950.png)

 같은 레벨간 데이터를 전달할 때는

 event를 발생시켜 하위 컴포넌트를 상위 컴포넌트로 올리고

 props를 써서 상위에서 하위로 받아야한다.



# vue -router

SPA에서 각 주소별로 렌더링할 컴포넌트를 작성할 수 있게 한다.

#: 해싱 = > 브라우저 히스토리 API => `mode: 'history'` : URL도 해싱을 사용하지 않는 URL, 뒤로가기 앞으로 가기 가능

vue create 프로젝트 이름

component naming convention 

1. 대문자로 시작, 파스칼 케이스
2. 한 단어가 아닌 두단어 이상을 사용 : 한단어만 쓰면 html 기본 태그인지 아닌지 헷갈려함 ㅠ