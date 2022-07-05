// const value = require('./var');
// console.log(value);

//import { odd, even } from './var';
const { odd, even } = require('./var');

function checkoddOrEven(number) {
    if(number % 2) {
        return odd;
    }else {
        return even;
    }
}

module.exports = checkoddOrEven;
//module.exports는 파일에서 한 번만 쓸 수 있다.