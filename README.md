![image](https://user-images.githubusercontent.com/81700507/230723635-3ea5e026-4844-4282-bdd2-7be7228bd19a.png)

# React기초
React를 공부하면서 따로 정리해 놓는 공간
- 참고 자료 : https://www.youtube.com/playlist?list=PLuHgQVnccGMCOGstdDZvH41x0Vtvwyxu7 (생활코딩 React)
- 선수 과목 : javascript
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
  - <strong>우리가 보고있는 페이지의 디자인을 수정하려면 App.css의 내용을 수정하면 됨!</strong>
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
- 4강은 작성중에 <ins>내용이 날라가 버려서(..)</ins> 생략하려고 한다
- 컴포넌트 만드는건 함수를 선언하는것 처럼 쉽기 때문에 그때그때 찾아보면 될것같다

![image](https://user-images.githubusercontent.com/81700507/233679337-55844467-b61b-4202-8271-79c85f487154.png)

<hr><br>
## `5강` : props
여기 두종류의 태그가 있다

![image](https://user-images.githubusercontent.com/81700507/233768404-f7a90704-d4ca-487c-bc69-62035fd31795.png)
- 위쪽(초록색 글씨)은 4강에서 만든 컴포넌트들이고
- 아래쪽은 HTML태그이다
  - HTML 태그는 src, width 같은 '속성'을 갖고있다.
  - 이쯤되면 내가 정의한 컴포넌트에도 '속성'을 부여하고 싶은 욕심이 생긴다
- React에서 이러한 '속성'들은 '<ins>prop</ins>'라고 부른다
- Header, Native, Article 컴포넌트에도 prop을 적용해보자

![image](https://user-images.githubusercontent.com/81700507/233768886-0a2d8206-ad67-4bc0-a3a6-d4d87e25f410.png)
- Article 컴포넌트 선언부를 다음과 같이 수정했다
- 여기서 props.title은 Article태그에 설정된 title 속성값을 가져오고
- 마찬가지로 props.body는 Article태그에 설정된 body 값을 가져온다
- 그리고 Article을 사용하는 부분은 이렇게 바꿔준다

![image](https://user-images.githubusercontent.com/81700507/233769038-723dcac9-d262-46f1-8d20-6632aa7afa2d.png)
- Article 내에서 props.title을 하면 "Welcome"이라는 문자열을 불러오고
- props.body를 하면 "Hello, WEB"라는 문자열을 불러온다
- 불러올때 주의할점은 { }로 감싸줘야 한다는 점
  - ex) {props.body}
- 동일한 원리로 Header도 수정하면 된다 (설명 생략)
- 그런데 Nav는 수정하는 방법이 조금 다르다
  - 우선 App()안에 topics라는 상수를 선언하고 값을 넣는다
  
  ![image](https://user-images.githubusercontent.com/81700507/233769594-ec1e1c99-2e5e-4652-afa2-bce3daa65a86.png)
  - 그리고 아래 Nav 사용 부분은 이렇게 변경한다
  
  ![image](https://user-images.githubusercontent.com/81700507/233769700-887b8d2f-3b35-4d7c-aa9f-96b4c1cc1cbf.png)
  - 마지막으로 Nav 안쪽은 이렇게 바꿔서 topics를 받자

  ![image](https://user-images.githubusercontent.com/81700507/233770112-8fae94b4-5603-4a0a-b483-8025189bbb04.png)
  - for문을 통해서 props.topics라는 객체에 인덱스로 접근한다
  - 각 요소들을 변수t에 담고 t의 속성들을 href와 태그안의 내용에서 꺼낸다
  - key={t.id}는 설명이 길어질수 있어서 간단하게만 설명하셨다
    - React에서 자동으로 생성하는 태그들은 React가 이 태그들을 추적할 근거값으로 key를 준다(각각 고유해야함)
    - React의 정확한 동작과 성능을 높이기 위해 key값을 주는것 이라고 이해하고 pass하자

어떤값을 주냐에 따라 다르게 동작하는 똑똑한 컴포넌트를 props 덕분에 만들수 있었다

<hr><br>

## `6강` : 이벤트

![image](https://user-images.githubusercontent.com/81700507/233770620-690014e7-5a9e-4963-a263-8a9e12449e91.png)
- 우리가 만든 컴포넌트에는 아직 이벤트 기능은 없다
  - 여기서 이벤트는 클릭했을때 알림창을 띄워주는 등의 이벤트를 의미
- 컴포넌트에 이벤트를 넣는법을 배워보자
- App()의 Header 부분에 알림창 띄우는 이벤트를 넣기위해 이렇게 수정했다

![image](https://user-images.githubusercontent.com/81700507/233771163-8d6d0c4e-a4ed-496c-9539-77de860978f6.png)
- Header태그에 showAlert(임의의 이름)이라는 함수가 담긴 prop을 준다
- Header 안에서는 이것을 props.showAlert();로 호출한다

![image](https://user-images.githubusercontent.com/81700507/233771479-039c3398-649f-4776-9936-63d87786a8ae.png)
- Header 안에서 함수를 호출할때는 기존 HTML에서 썼던 onClick="showAlert();" 이런 방식은 못쓴다
- onClick={function(event){ }}이런 구조로 컴포넌트의 함수형 prop을 받아줘야 함
- Header 태그를 클릭해보면 다음과 같은 알림이 뜬다

![image](https://user-images.githubusercontent.com/81700507/233772008-89f2f8de-4a37-4dc5-b857-d0e00f5f25a7.png)
- 컴포넌트에 이벤트 삽입 완료!
- Tip
  - function 키워드 대신 이렇게 써도됨
  
  ![image](https://user-images.githubusercontent.com/81700507/233772128-6c833e10-6b6b-46fb-aebd-aa5b51a26c75.png)

- Nav태그도 id값을 인자로 준다는점 외에는 동일하다

![image](https://user-images.githubusercontent.com/81700507/233772649-0f7f051a-aa35-421a-9f85-3ef02dd6fd9a.png)
- Nav내부 처리

![image](https://user-images.githubusercontent.com/81700507/233772751-407846cb-1fde-4820-8acc-053fb2a1923c.png)
- id 값을 받기위해 id={t.id}
- 현재 이벤트를 호출한 a태그(나자신)의 id값을 불러오려면 event.target.id

  ![image](https://user-images.githubusercontent.com/81700507/233772815-23987311-902b-4ca4-aa01-178644eef9ab.png)
- html을 클릭하면 1, css는 2, javascript는 3이라는 알림창을 띄운다

<hr><br>

## `7강` : state
- state는 prop과 비교되는 (헷갈리는) 개념이다
  ![image](https://user-images.githubusercontent.com/81700507/233967382-d80f54b5-65d7-43ba-8ef2-2930862ea3dd.png)


- prop과 state의 공통점 : 이 값이 변경되면 새로운 return값을 만들어서 UI를 바꿔준다
- prop과 state의 차이점
- prop
  - 컴포넌트를 사용하는 외부자를 위한 데이터
- state
  - 컴포넌트를 만드는 내부자를 위한 데이터

- state 사용하기
  - 우선 위쪽에 useState를 import 해줘야한다
  
    ![image](https://user-images.githubusercontent.com/81700507/233971127-7fa74c93-8731-4b7b-a860-38c247240978.png)
  - App 내부에서 useState를 호출하기 하고 변수들에 담는다
  
  ![image](https://user-images.githubusercontent.com/81700507/233972155-6bbc48e9-fc28-4b5f-912f-ebf3f38ec229.png)
  - A와 B는 같은의미다. 한줄로 축약할수 있는 B방식을 잘 기억해 두자
  - 여기서 mode는 상태를 나타내는 변수, setMode는 mode의 값을 바꿔주는 함수를 의미한다
  - 그리고 아래 return값은 이렇게 바꿔준다
    
    ![image](https://user-images.githubusercontent.com/81700507/233977390-3bd32d2e-3bf8-4c32-827a-da6a902f099f.png)
    - setMode가 호출되면 App 컴포넌트가 재실행 된다
    - 재실행후 바뀐 값을 새로운 mode변수에 집어넣고 실행한다
  - Read가 아닌 각각의 요소에 맞는 title과 body가 나오게끔 만들어보자
  - 두개의 변수 id, setId를 추가한다
  
    ![image](https://user-images.githubusercontent.com/81700507/233981844-0ef6b08b-898d-4118-8cd4-61bb399a2b2f.png)
  - 변수에 현재 클릭한 topic의 title과 body를 읽어와야 한다
  - 반복문으로 0번부터 topics를 검사하고 현재 선택한 topic과 일치하면 title, body에 할당
  
    ![image](https://user-images.githubusercontent.com/81700507/233996004-d503fc0f-48be-48c3-8b31-f49d3f0b7912.png)
  - content 변수에 Article을 할당
  
    ![image](https://user-images.githubusercontent.com/81700507/233996142-b6b28038-4d49-4a24-9ddb-1174e02a01b4.png)
  - Nav 컴포넌트에서 setId state를 호출한다
  
    ![image](https://user-images.githubusercontent.com/81700507/233998949-481923dc-d461-41a2-9a1c-1b87b080cd4e.png)
  - 마지막으로 Nav 함수 내에서 Number로 형변환 해주면 끝
  
  ![image](https://user-images.githubusercontent.com/81700507/234004587-d2f66b34-5df1-411e-84aa-2ec3f57436b9.png)

<hr><br>

## `8강` : Create
![image](https://github.com/sonkeehoon/React/assets/81700507/4d477381-295c-4ea0-a3f7-349df47a536f)
- 어플리케이션의 4대 기능인 CRUD
- Read는 앞에서 구현을 해봤고, 이제는 <ins>Create</ins>기능을 구현해 보려고한다

![image](https://github.com/sonkeehoon/React/assets/81700507/d96d150d-8a8c-4cbe-a4d8-a7c5a5120507)
- 3번항목 아래 4번항목을 추가하는 기능이 <ins>Create</ins>이다

- 우선 Create라는 링크를 추가해보자
- app.js에서 app()함수의 return값을 수정하자

![image](https://github.com/sonkeehoon/React/assets/81700507/fd2f1bea-33e2-4549-9ac3-6feb155edda7)

![image](https://github.com/sonkeehoon/React/assets/81700507/c0ec1f8d-bafb-4486-950b-c5850e32e9ac)
- 웹페이지에 Create라는 링크가 추가됐다
- 클릭시 발생하는 이벤트도 만들어주자

![image](https://github.com/sonkeehoon/React/assets/81700507/aea6da98-9536-4d1f-a27d-ffa660722e1b)
- 이제 App() 내부의 if문에 mode가 CREATE인 경우를 추가해주자

![image](https://github.com/sonkeehoon/React/assets/81700507/70671569-2666-4297-8232-33016e74396d)
- 여기서 content에 Create라는 별도의 컴포넌트를 넣으려고 한다.
- 그러기 위해선 Create라는 컴포넌트를 먼저 선언해보자

![image](https://github.com/sonkeehoon/React/assets/81700507/5c576d4d-55bb-4269-80fb-2b8e37729a05)
- 다음과 같은 폼이 생성된다

![image](https://github.com/sonkeehoon/React/assets/81700507/816910bf-83ab-4318-900e-fcb932e26327)
- 이제 mode값이 Create인 경우에 발생하는 이벤트 onCreate를 정의해보자
- form 태그에 onSubmit 이벤트를 만들려고한다 (submit버튼 클릭시 발생하는 이벤트)
- 그런데 이 이벤트가 발생하면 페이지가 reload 되버린다(기본 기능)
- 이걸 막기 위해서 또다시 event.preventDefault()도 추가해줘야 한다

![image](https://github.com/sonkeehoon/React/assets/81700507/6577600d-1048-404e-a501-5c24061234ab)
- 그 다음 입력한 title과 body가 topics에 추가되게 하자
- 강의 내용이 상당히 복잡해서 우선은 코드랑 결과만 올려놓으려고 한다

![image](https://github.com/sonkeehoon/React/assets/81700507/e59a923b-8d71-4729-a92c-a6c5c4f7a934)
- 최종적으로 이렇게 바꾸면 된다고 한다

<hr><br>

## `9강` : Update
- 이번엔 Update를 구현해보자
![image](https://github.com/sonkeehoon/React/assets/81700507/d4f4c6d7-2552-4905-b637-9af083d17bd6)
- Update는 Create와 Read의 hybrid해서 만든다
- 우선 Create링크 아래 Update링크를 만들기 위해

![image](https://github.com/sonkeehoon/React/assets/81700507/6c838c19-fe23-4941-9846-10f72f0227ff)
- 두 링크를 각각 li태그로 묶고 전체를 ul(순서 없는 태그)로 묶었다

![image](https://github.com/sonkeehoon/React/assets/81700507/ffd0c695-771a-4e77-9ab7-1bde004cf7ff)
- 다음과 같은 결과를 얻었다
- 그런데 Update는 첫페이지(내용 선택을 안한 상태)에서는 보일 필요가 없다
- mode 값이 'READ'일때만 보이게 하면 될것같다
- Update를 상세 페이지 안에서만 보이게 해보자

![image](https://github.com/sonkeehoon/React/assets/81700507/0c1e5a12-d42f-4e5c-a14d-109a52a694ca)
- 아까 만든 update가 포함된 li태그 한줄을 cut+copy(ctrl+x)하자

![image](https://github.com/sonkeehoon/React/assets/81700507/3cea98c3-475c-4155-81b5-9f03fdd5521f)
- contextControl이라는 지역변수를 하나 만들고 mode가 READ인 부분으로 가서

![image](https://github.com/sonkeehoon/React/assets/81700507/dc3f3c08-5775-4cfe-864c-f46587fae1e6)
- contextControl 변수에 아까 복사해둔 li태그를 집어넣자

![image](https://github.com/sonkeehoon/React/assets/81700507/491f4217-44ac-42e6-b629-6c5fc095ccbc)
- 다시 ul태그 안에 아까 만든 변수를 집어넣자

![image](https://github.com/sonkeehoon/React/assets/81700507/b3ee8c14-8333-4049-8330-d13060cf3092)
- 첫페이지에서 Update가 사라졌고
- 상단에 html, css, javascript를 눌렀을때만 Update가 나타난다

![image](https://github.com/sonkeehoon/React/assets/81700507/06fd5fc6-4904-4421-ae47-bd80f677ad37)
- 아까 수정한 contextControl을 이렇게 수정하자
  - href에 id값을 추가했다
  - onClick이벤트를 추가했다

<hr><br>

## `10강` : Delete & 수업을 마치며
- 마지막으로 Delete를 구현하고 마무리를 지어보자
![image](https://github.com/sonkeehoon/React/assets/81700507/51cac821-a398-4934-88eb-9dda7149a12b)
![image](https://github.com/sonkeehoon/React/assets/81700507/c44e2066-a610-4089-b610-c84674808df4)
- 기존의 Update 밑에 삭제기능을 하는 Delete 버튼을 만들어보자
  - Create와 Update는 클릭시에 어떤 페이지로 이동하는 링크였다
  - 하지만 Delete는 누르자마자 삭제시켜 버릴것이기 때문에 <ins>링크가 아닌 버튼</ins>으로 만들것이다

- Delete버튼도 어떤 topic을 클릭했을때만 보여야 하기 때문에 Update와 마찬가지로 ContextControl 변수에 집어넣자
![image](https://github.com/sonkeehoon/React/assets/81700507/97d05d83-5874-4481-bd15-052f3f1b2c91)
- 주황색 부분이 새로 추가된 부분이고 주황색이 아닌 부분은 원래 있던 Update 기능이다
- 맨아래<>와 맨위의 </>
  - 아마 react에서 변수안에 같은 \<li> 태그를 2개이상 집어넣을때 하나로 묶어주는 그런 도구인것 같다
  - <>와 </>없이 그냥 두개의 \<li>태그만 넣으면 에러가 난다 (2개 이상일때는 꼭 해줘야함)
- 주황색 부분
  - 기존에 Topics에 있던 topic들의 id값에 for문을 돌린다
  - 현재 선택중인 id값과 다르면 그 topic값은 newTopics라는 변수에 추가한다
  - 이렇게하면 현재 선택된 topic을 제외한 나머지 topic들이 그대로 newTopics에 들어가기 때문에 Delete된다고 볼수있다
  
- Delete는 성공했고 그 다음 초기화면(mode값이'WELCOME')으로 이동시키면 마무리된다

![image](https://github.com/sonkeehoon/React/assets/81700507/3f1781a9-b44d-4f7e-98e4-7ce9d6565585)

`마무리 2023-07-04`
- 여기까지 기본적인 CRUD를 react로 구현해봤다
- Update기능은 양도 많고 이해못하고 넘어간 부분이 좀 있어서 아쉬웠다
- react를 더 공부하고 싶다면 이 링크로 가보자 https://seomal.com/map/1/220





 

  

  

































<hr><br>





   
