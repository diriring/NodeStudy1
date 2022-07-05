console.log(this); //global이 아니다

function a() {
    console.log(this === global);
}

a();