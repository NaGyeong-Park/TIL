MAP_WIDTH = 1024;
MAP_HEIGHT = 576;

const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
canvas.width = MAP_WIDTH;
canvas.height = MAP_HEIGHT;

c.fillRect(0, 0, MAP_WIDTH, MAP_HEIGHT);
const mapImg = new Image();
const playerImg = new Image();
mapImg.src = "./map.png";
playerImg.src = "./playerDown.png";
mapImg.onload = () => {
  c.drawImage(mapImg, -MAP_WIDTH / 2, -MAP_HEIGHT / 2);
  c.drawImage(
    playerImg,
    0,
    0,
    playerImg.width / 4,
    playerImg.height,
    canvas.width / 2 - playerImg.width / 4 / 2,
    canvas.height / 2 - playerImg.height / 2,
    playerImg.width / 4,
    playerImg.height
  );
};
