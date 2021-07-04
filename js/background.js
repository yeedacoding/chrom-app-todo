const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg"
];

const backgroundImg = document.querySelector("#background-img");
const chosenImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");
img.src = `img/${chosenImg}`;
document.body.appendChild(img);

//랜덤하게 생성된 이미지들을 background-img id에 class로 넣고 싶은데 안되넹..