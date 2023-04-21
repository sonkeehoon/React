![image](https://user-images.githubusercontent.com/81700507/230723635-3ea5e026-4844-4282-bdd2-7be7228bd19a.png)

# React 자습 공간
React를 공부하면서 따로 정리해 놓는 공간
- 참고 자료 : https://www.youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7 (생활코딩 React)
<hr><br>

## `1강` : 수업 소개
- React를 만드는 방법은 Class,function 두가지 방법이 있다
- 최근에는 function을 이용해서 React를 만드는 경우가 많아졌다
- 그래서 생활코딩의 이고잉님은 <ins>function</ins>을 이용해서 수업을 진행한다고 하셨다
- 만약 Class방식의 React를 공부하고 싶다면 : https://opentutorials.org/module/4058
<hr><br>

## `2강` : 실습환경구축
- react 홈페이지 접속 : https://ko.reactjs.org/
- 시작하기를 누르고 하단에 '온라인 플레이그라운드'의 Stackblitz
  - PC에 개발환경을 구축하다가 잘 안되면 너무 좌절하지 말고 Stackblitz를 활용해서 실습하자!
<br>

- PC에 직접 react 개발환경 구축하기
  - 우측 '새로운 React 앱 만들기' 클릭
  - '추천 툴체인'로 이동
  - Create React App 을 클릭
  - 한번 더 Create React App 클릭하면 github로 이동한다
  - github 오른쪽에서 create-react-app.dev 클릭
  - 아래쪽에 npx create-react-app my-app 라는 명령어를 실행해야 한다
    - 그런데 npx를 실행하려면 nodejs가 깔려있어야 한다
    - 나의 경우는 nodejs가 이미 깔려있어서 위 명령어를 바로 실행했다
      - nodejs 설치가 필요한 경우 : https://nodejs.org/ko (LTS버전 권장)
  - 설치후 vscode에서 react-app이라는 폴더를 열었다
  - 다음 명령어를 실행한다
    - <strong>npx create-react-app .</strong>
  - 설치가 완료되면 맨 하단에 Happy hacking! 이라는 문구가 출력된다
  - 여기서 npm start를 터미널에 입력하고 엔터를 누른다
    - npm start는 react 개발환경이 실행되면서 코딩을 할수있는 환경이 동작한다
  - 웹 브라우저가 뜨고 거기에 샘플 react app이 뜬다
    - react는 기본적으로 3000번 포트를 사용하는데 이미 사용중이라면 실행이 안될것이다
    - 실행이 안되고 포트번호를 바꿀것이라고 물어보는데 y를 누르면 자동으로 다른포트로 연결된다

<img src="https://user-images.githubusercontent.com/81700507/230902720-90ee22f1-deb2-47bd-aa7c-c788005661ac.png" width="250" height="250">
 이런식의 sample react 웹페이지를 띄웠으면 개발환경 구축은 성공이다!
<hr><br>

## `3강` : 소스코드 수정방법
1. 수정

- src폴더의 구성
  - index.js는 입구 파일을 의미
  - npm start로 app을 구동시키면 <ins>index.js</ins>를 가장먼저 찾고 적혀있는 대로 동작한다

![image](https://user-images.githubusercontent.com/81700507/232308419-fab57757-cb0b-47d0-a765-0e6e5e8458c3.png)
  - 중간에 \<App /> 부분은 ./App.js에서 불러온 코드를 실행시킨다
  
![image](https://user-images.githubusercontent.com/81700507/232305396-c8aba402-a786-400d-b791-9123013749a7.png)
  - 실제로 React App페이지에서 F12를 누르고 개발자도구로 들어가서 소스를 확인해봐도 같다
  - 정리하면 index.js는 react의 입구고 여러가지 전역적인 설정들이 들어가있다
  - \<App /> 안에 App.js를 불러오기 때문에 App.js의 내용을 편집해서 UI를 만들어가면 된다
  - 기본적으로 React의 내용들은 가운데정렬이 되어있는데 이는 css때문이다. 어떤 css파일일까?
  
![image](https://user-images.githubusercontent.com/81700507/232305800-9add68cb-c30e-4019-b695-0b5e13ed4eea.png)
  - 바로 현재 폴더의 App.css의 영향을 받는다
  - 우리가 보고있는 페이지의 디자인을 수정하려면 App.css의 내용을 수정하면 됨!
  - 그런데 index.js에도 index.css를 불러온다 이것은 뭘까?
  
![image](https://user-images.githubusercontent.com/81700507/232306480-a1bec6de-0835-41cd-809e-8a31c2caf1e1.png)
  - index.css또한 화면에 뜨는 페이지에 영향을준다
  - 이고잉 강사님은 index.css을 비워서 기본적으로 샘플 앱에서 사용하는 css를 초기화 시켜서 깔끔한 상태로 시작하셨고 나도 따라했다
<br>

2. 배포
- 기존에 터미널에서 실행중이던 App을 꺼보자(Ctrl+C)
- 그리고 npm run build 를 실행한다
  - 여기서 build는 '배포판을 만드는 과정'을 의미
  - 이 명령을 실행하면 build라는 폴더가 생성된다
  - build안의 index.html을 열어보면 공백이 하나도 없다
    - 배포할때는 파일의 용량을 최대한 줄이기 위해서 공백을 다 없앰
  - 이 결과물을 실행해보자
    - npx serve -s build 실행
    - build폴더 밑에 index.html을 서비스하는 웹서버를 실행하겠다는 뜻
    - 처음 실행하면 serve패키지를 설치하라고 물어보는데 그냥 y를 입력해서 설치하면 된다
    - 다음과 같은 그림이 뜨면 성공
    
![image](https://user-images.githubusercontent.com/81700507/232307784-89dad5fa-4e04-4057-9284-328a55278f53.png)   
<hr><br>

## `4강` : 컴포넌트만들기
- 4강은 작성중에 내용이 날라가 버려서(..) 생략하려고 한다
- 컴포넌트 만드는건 함수를 선언하는것 처럼 쉽기 때문에 그때그때 찾아보면 될것같다

![image](https://user-images.githubusercontent.com/81700507/233679337-55844467-b61b-4202-8271-79c85f487154.png)

<hr><br>





   
