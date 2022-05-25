const images = [
    "1.jpeg","2.jpeg","3.jpeg"
];

//random으로 이미지 나타내기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// // html Element를 생성
// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`

// 배경 이미지 넣는 형식 url('img주소')
const bgImage = `url(img/${chosenImage})`

// body에 추가
document.body.style.backgroundImage = bgImage


