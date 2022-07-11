## **gist clone 받기**

### **gist**

gist는 코드 조각이나 메모, 문서 등을 공유할 수 있도록 도와주는 부가 서비스이다. 이때 pubilc gist는 공개적으로 누구나 접근 및 검색이 가능하고, secret gists는 비공개라서 검색이 불가능하고 링크를 아는 경우에만 접근이 가능하다. 챌린지내내 gist를 사용할 것으로 예상되므로 사용법을 간략히 정리하겠다.

### **1. gist 홈에서 +를 눌러 secret gist를 생성해준다. 이때 secret으로 생성한다.**

![img](https://auspicious-family-64e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9aab7017-25db-4b32-bd48-96c3b7c7241e%2FUntitled.png?table=block&id=e325f07a-db1e-4ee0-9c15-62acb73298a9&spaceId=a27bcbe2-51f3-4b3b-979c-6c34c5202b61&width=2000&userId=&cache=v2)

![img](https://auspicious-family-64e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe20ccce8-2a87-49eb-a680-a428c68ac0d7%2FUntitled.png?table=block&id=53d4be59-c769-4dd9-8862-2b74d52829ae&spaceId=a27bcbe2-51f3-4b3b-979c-6c34c5202b61&width=2000&userId=&cache=v2)

![img](https://auspicious-family-64e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1cba4178-829a-48ec-9cce-4ee8738d189a%2FUntitled.png?table=block&id=2a4c77ce-ff1f-4128-b835-f49d79f3f83a&spaceId=a27bcbe2-51f3-4b3b-979c-6c34c5202b61&width=2000&userId=&cache=v2)Secret gist는 이렇게 옆에 Secret이라고 뜬다.

### **2. gist 저장소 주소를 local로 clone하기**

생성한 gist에 들어가 저장소 주소를 HTTPS로 복사해준다.

![img](https://auspicious-family-64e.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff8281714-215b-4518-a448-cb59e87683ee%2FUntitled.png?table=block&id=42751b42-12bf-4c33-a3bf-c8409180540e&spaceId=a27bcbe2-51f3-4b3b-979c-6c34c5202b61&width=2000&userId=&cache=v2)

이후 이 주소를 `https://[사용자이름]:[Personal access Token]@gist.github.com/고유코드.git`로 설정해서 terminal창에서 clone받아준다.이제 터미널 창에서 `git clone https://[사용자이름]:[Personal access Token]@gist.`

`github.com/고유코드.git [선택사항 : local의 폴더이름지정]`를 입력해서 내 local에 clone을 받아주면 된다.