const fs = require('fs');

const data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());

//동기 방식 : 언제나 순서대로 하나의 작업이 끝날 때까지 다른 작업은 시작하지도 않음
//서버가 실행된 이후에는 동기 방식은 권장되지 않는다