# C 기초

![](https://cphinf.pstatic.net/mooc/20200608_293/1591590786465biqfW_PNG/mceclip1.png)

`#include stdio.h`는 "stdio.h"라는 파일을 찾아서 "printf"함수에 접근할 수 있도록 한다.

![](https://cphinf.pstatic.net/mooc/20200608_142/1591590807328O5ndC_PNG/mceclip2.png)

`int main(void)`는 스크래치의 `초록색 깃발을 클릭했을 때`와 같다. 즉, 시작하다의 의미이다.



![](https://cphinf.pstatic.net/mooc/20200608_176/1591591032244GQg28_PNG/mceclip3.png)

`printf`는 python의 `print`와 같지만 좀더 포멧화된 형식이다.

그리고 파이썬과 다르게 들여쓰기가 `printf` 다음에 되지 않으므로 "\n"을 작성하여 들여쓰기를 할 수 있다.

그리고 꼭 문장을 끝낼 때 `;`을 붙여야 한다.



c의 확장자는 `.c`이다! word처럼 자동적으로 붙여주지는 않아서 C의 경우엔 직접 .c를 붙여줘야한다.



## 컴파일러

![](https://cphinf.pstatic.net/mooc/20200608_25/1591593011509xRkDi_PNG/mceclip4.png)

우리가 직접 작성한 코드는 __소스코드__라고 부른다. 이를 2진수로 작성된 __머신코드__로 변환해야 컴퓨터가 이해가 가능하다. 이것을 컴파일러라는 프로그램이 대신 수행해준다. 번역기라고 보면 된다.



터미널창의 명령어 프롬프트에서 `$`기호 옆에 우리가 원하는 명령어를 입력하면 된다. (ls, mkdir, rm, ... ls는 list mkdir은 make directory, rm은 remove였다는 것을 오늘 깨달았다....)

`clang hello.c`를 입력하면 clang이라는 컴파일러로 "hello.c" 코드를 컴파일하라는 의미이다. 그 결과 a.out이 생성된다. 

`./a.out` 을 입력하면 현재 디렉토리에 있는 a.out이라는 프로그램을 실행하게 해준다.



# 문자열

