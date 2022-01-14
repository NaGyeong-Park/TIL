# what it 'git'?

### 분산 버전 관리 시스템

- 코드의 히스토리(버전)을 관리하는 도구
- 개발되어온 과정 파악 가능
- 이전 버전과의 변경 사항 비교 및 분석



## git / github / gitlab

**git** : version 1, 2, 3 / 분산 버전 관리 시스템(프로그램)

**github** : git 기반 저장소(저장하는 장소), 마쏘꺼 => 마쏘 데이터베이스 들어감

**gitlab** : 서버 자체를 만들 수 있다.



## CLI와 GUI, 명령 프롬프트, powershell 그리고 git  Bash

**CLI : Command-line Interface, 명령어 활용하는 환경 <-> GUI : 그래픽을 보면서 컴퓨터에게 명령**

__명령 프롬프트__ : Unix/Linux 명령어 사용 못함 

__powershell__ : 일부 Unix / Linux 명령어 사용 가능



#### 간단한 Unix / Linux 명령어

ls : 현재 위치의 폴더, 파일 목록 보기

cd <path> : 현재 위치 이동하기 / cd.. : 상위 폴더로 이동

clr(=clear) : 화면 지우기

mkdir <name> : 폴더 생성하기

touch <name> : 파일 생성하기 

rm <name>  : 파일 지우기

rm -r <name> : 폴더 지우기

rm -rf <name> : 보호를 받든 암튼 지워



## Git 생성과 Commit

**Repository**  : 특정 디렉토리를 버전 관리하는 저장소

`git init` 명령어로 로컬 저장소 생성

.git 디렉토리에 버전 관리에 필요한 모든 것이 들어있음(.붙어있음 폴더가 숨어있다!)

`git status` : git 상태



__Commit__ = 특정 버전으로 남긴다, 3가지 영역 바탕으로 동작 

- Working Directory : 작업중인 실제 디렉토리 : untracked(git으로부터 추적x) `git add`하면
- Staging Area : 커밋으로 남기고 싶은, 특정 버전으로 관리하고 싶은 파일이 잠시 있는 곳 : tracked 이 상태에서 `git commit` 하면 (`-m`메세지 남기기)
- Repository : 커밋들이 저장되는 곳 : tracked 

*`git add .` : 추적 되지 않은 모든 파일과 추적한 파일 중 수정 된 파일 모두 Staging Area에 올림

. : 현재위치 / .. : 뒤로 위치



`git diff` : 커밋 간에 차이를 확인한다

`git log` : 커밋했던 기록

`git clone <주소>` : 다른 사람이 작업한 것을 가져올 수 있다.

`git push` & `git pull` + `origin master` : master에 있는 변경사항을 origin에 push/pull 할거야

_(main), (master)_ : branch 이름

___git commit만 해서 나갈때___   :q 나가는 것 / :wq 저장하고 나가는 것



## Git remote와 가지 연결하기

`git remote add origin <주소>` : remote repo의 주소인데 앞으로 origin이라고 부를거야~

보통 remote repo의 이름을 origin이라고 부름

`git push -u origin master` : master branch은 로컬에 있는데 remote에 master의 존재를 알려줌

__-u__ : remote repo 등록한 다음에만 쓴다. set upstream



## push 전에는 pull이 있다

협업 중 conflict 일어날 수 있다 : 자연스러운 상황 (ex) 둘다 첫 줄을 동시에 수정했다)

- 깃이 >>> <<< 이런 충돌 기호를 만들어준다.
- 개발자가 이를 보고 정상적인 작업의 상태로 직접 수정한다. > add > commit > push





# TIL : Today I Learned

#### 오늘 배운 내용을 정리해요!

- __매일__내가 배운 것을 __마크다운__으로 정리해서 문서화하는 것
- 신입 개발자에게 요구되는 가장 큰 능력, ___꾸준히 학습 가능?___
- Github 관리의 가장 첫 걸음, 제일 중요한 __장기프로젝트__
- 1일 1커밋 해보즈아!!





# 22-01-14 : Git 복습

- Repository : 커밋이저장되는 곳

`git init` : 로컬 repository 생성

- .git 이라는 폴더가 생성되고, git이 관리

`git status` : 현재 repository에 git이 어떤 상태인가 체크

README.md : 내 repository에 대한 설명서 같은 역할을 하는 파일

`git add`

- Staging Area로 올리는 역할
- git에게 추적하는 파일을 선언

`git remote <origin> <주소>` 

`git push -u <origin> <master>` 



public : 볼 수 있고, 다운(clone) 받을 수 있고, push는 나만

private : X. X. O



repo안에 repo를 만드는 구조를 하면 안된다.

`git push (origin main)` 

