const express = require('express'); //아까 설치한 라이브러리 첨부
const app = express(); // 라이브러리 이용 객체 생성

app.listen(8080, function(){
    console.log('listening on 8080')
}); //.listen 컴퓨터에 서버 열수있다. listen(서버띄울 포트번호, 띄운후 실행할 코드)

// /food로 방문을 하면, pet관련된 안내문을 띄워준다
// Ctrl + C 하면 서버 종료
// 서버 on off 자동화 명령어 : npm install -g nodemon // yarn add global nodemon
// 실행 명령여 : nodemon server.js
// 실행 명령 해도 restarting due to cahges...stuck 현상이면 old version 설치 명령어 : npm install nodemon@2.0.7 -g
// nodemon 무한 restarting 에러면... supervisor 사용하자..

// 설치 명령어 : npm install supervisor -g 
// package.json script에 "start": "supervisor server.js"


app.get('/foods', function(request, response){
    response.send('이국적인 음식을 주문 할 수 있는 페이지 입니다.')
});

app.get('/sports', function(request, response){
    response.send('여러 브랜드로 구성된 스포츠 용품 온라인 샵입니다.')
});

//html 불러오기 선언
app.get('/', function(request, response){
    response.sendfile(__dirname+'/index.html')
});

//이미지 불러오기 선언
app.use(express.static('assets'))