const game = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    backgroundColor: 0xf010f0,
});

document.getElementById("game").append(game.view);
loadAssets([
    { name: "back", url: "./assets/traffic.jpg" },
    { name: "front", url: "./assets/sign1.jpg" },
], start);
//------------------------------
const pBar = document.getElementById("bar");
const pText = document.getElementById("progress");
function preload(e) {
    if(true){
        pBar.style.width = e.progress * 2 + "%";
        pText.innerText = e.progress + "%";
    }
    if (e.progress === 100) {
        console.log("hide loader");
        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);
    }
    console.log(e.progress);
}

function loadAssets(list, onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
}
//----------------------------------
let space = 250;
let space1 =40;
let x = 115;
let y = 140;
let x1 = 115;

let y1 = 140;
let arr = [];

let used = [];
function start(loader, resources) {
    console.log('params ', arguments);
    for (var i = 0; i < 3; i++) {
        for(var j=0;j<4;j++){

            let n = randomNum();
            used.push(n);
            const back = PIXI.Sprite.from(resources['back'].texture);
        back.scale.set(0.2);
            back.x = space;
            back.y=space1;
            game.stage.addChild(back);
            const smily = new PIXI.Texture(resources['front'].texture
            , new PIXI.Rectangle(arr[n][0],arr[n][1],arr[n][2],arr[n][3])
        );
        const front = PIXI.Sprite.from(smily);
        front.width = 200;
        front.height = 198;
        front.x = space;
        front.y=space1;
        game.stage.addChild(front);
        space+=400
       
       }
       space=250
       space1+=300;
    }

}
function randomNum() {
    var test=0;
    newNum = Math.floor(Math.random() * 12);
    while(test<used.length)
    if(newNum!=used[test])
        test++;
    else{
        newNum = Math.floor(Math.random() * 12);
        test=0
    }
    if(test==used.length){
        return newNum;
    }
}

// let arr1=[];
// arr1.length=8;
let x2 = 0;
// let x3=0;
for (var ji = 0; ji < 3; ji++) {
    for(var jl=0;jl<2;jl++){
            for(o=0;o<2;o++){
                arr[x2] = [jl*115, ji*140, 115, 140];
                x2++;
            }
           
    }
    // x2 = x2 + 63;
    }
// random1(arr);
//  function random1(arr){
//     var test=0;
//     newNum = Math.floor(Math.random() * 16);
//     while(test<arr1.length)
//     if(newNum!=used[test])
//         test++;
//     else{
//         newNum = Math.floor(Math.random() * 16);
//         test=0
//     }
//     if(test==used.length){
//         arr1.push(newNum)
//     }
// }

console.log(arr);

console.log(used)