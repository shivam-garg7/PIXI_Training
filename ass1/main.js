// import { resources } from "../day3/js/loader.mjs";
let resources;
// const texture=new PIXI.Texture(resources);
const game = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    backgroundColor: 0xf001f0,
});
document.getElementById("game").append(game.view);
// const image=new PIXI.Sprite.from(resources[back].texture);
// game.stage.addChild(image);


loadAssets(
    [
            { name: "image2", url: "./assets/image2.jpg" },
            { name: "image3", url: "./assets/image3.jpg" },
            { name: "image4", url: "./assets/image4.jpg" },
            { name: "image5", url: "./assets/image5.jpg" },
            { name: "image6", url: "./assets/imag6.jpg" },
            { name: "image7", url: "./assets/image7.jpg" },
            { name: "image8", url: "./assets/image8.jpg" },
            { name: "image9", url: "./assets/image9.jpg" },
        ],
start);
//------------------------------
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
function preload(e) {
    if (true) {
        console.log
            pBar.style.width = e.progress*2 + "%";
            pText.innerText= e.progress + "%";
    }
     if (e.progress === 100) {
        console.log("hide loader");
         pText.innerText = e.progress + "%";
        pBar.style.width = e.progress *2 + "%";
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 2000);
    }
    console.log(e.progress);
}
function loadAssets(list,onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
function start(loader,resources) {
    const image2 = PIXI.Sprite.from(resources['image2'].texture);
    image2.scale.set(0.256);
    game.stage.addChild(image2);
    const image5 = PIXI.Sprite.from(resources['image5'].texture);
    image5.scale.set(1);
    image5.y=40
    image5.x=1600
    game.stage.addChild(image5);
    const image6 = PIXI.Sprite.from(resources['image6'].texture);
    image6.scale.set(1);
    image6.x=1300
    image6.y=805
    game.stage.addChild(image6);
    const image8 = PIXI.Sprite.from(resources['image8'].texture);
    image8.scale.set(0.67);
    image8.y=750
    image8.x=20
    game.stage.addChild(image8);
    const image9 = PIXI.Sprite.from(resources['image9'].texture);
    image9.scale.set(1);
    image9.y=40
    image9.x=10
    game.stage.addChild(image9);
    const image4 = PIXI.Sprite.from(resources['image4'].texture);
    image4.scale.set(0.7);
    image4.x=20;
    image4.y=800;
    game.stage.addChild(image4);
}

