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


   
