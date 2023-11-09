# 한시간 만에 끝나는 React.js 입문 @개발자의품격

1. react 준비
terminal > new terminal 에서 npm init react-app my-app 을 입력하여 react를 시작하기 위한 기본 구조 파일들 설치를 해줍니다.

- node_modules
react 프로젝트를 개발하기 위해 기본적으로 필요한 자바스크립트 라이브러리(모듈)이 설치 된 것

- public
react로 개발한 모든 개발은 index.html 하나로 구동합니다.
index.html과 정적파일들(favicon 등)이 있습니다.

- src
이 폴더에서 react 개발을 합니다.

- package.json
전체 프로젝트에 대한 정보를 담고 있습니다.

dependencies : 앱을 구동할 때 반드시 필요한 모듈. 각각의 모듈의 모듈은 package-lock.json 에 포함되어 있다.
scripts : 명령어
eslintConfig : 코드가 올바르게 작성되고 있는지 체크해준다.
browserslist : 지원하는 브라우저

2. react 시작
terminal에서 cd my-app 현재 파일로 이동 후 npm start 입력해줍니다.
프로젝트가 정상적으로 설치되었다면, localhost:3000 으로 확인할 수 있습니다.

npm start되면 index.js가 제일 먼저 실행됩니다.
index.html에 bundle.js가 추가되고 여기에 react에서 개발한 것들이 들어갑니다.

3. routing 처리
리액트는 싱글페이지 어플리케이션입니다.
실제로 index.html 파일 하나인데, 메뉴를 클릭할 때마다 화면 전체가 바뀌는 것이 아니라 root를 통해 필요한 부분만 렌더링하여 빠릅니다.
메뉴를 클릭할 때마다 원하는 컴포넌트를 맵핑시켜 보여주는 것을 라우팅 처리를 한다고 합니다.

라우팅 처리 시 필요한 모듈 설치
terminal을 새로 열어서 npm install react-router-dom@6 를 입력해줍니다.
