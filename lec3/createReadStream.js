const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });

const data = []; //빈 배열을 생성한뒤 조각조각 나눠져서 오는 data (chunk)를 받아 넣어준다
readStream.on('data', (chunk) => {
    data.push(chunk); 
    console.log('data: ', chunk, chunk.length);
});
readStream.on('end', () => {
    console.log('end: ', Buffer.concat(data).toString());
})
readStream.on('error', (err) => {
    console.log('error: ', err);
});

//스트림 방식은 버퍼 방식보다 메모리가 적게 든다