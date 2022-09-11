import { Sprite, Texture, Rectangle, Text,Container,PIXI_SOUND } from "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/6.5.2/browser/pixi.mjs";
import { FRAMES, getCard, HEIGHT, shuffle, WIDTH } from "./card.mjs";
import { getTextureById } from "./loader.mjs";
// import * as PIXI from "../lib/pixi.js";
// import PIXI_SOUND from "pixi-sound";
let cards;
let firstChoice;
let secondChoice;
// let used=[];
export function startgame(game){
  // const{ stage1 }=game;
  const sound1 = PIXI.sound.Sound.from('assets/sound.mp3');
  sound1.play(); 
  const sprite1 = Sprite.from('assets/image.png');
  sprite1.width=innerWidth;
  sprite1.height=innerHeight; 
  game.stage.addChild(sprite1);
  const sprite = Sprite.from('assets/image4.png');
  sprite.x=576;
  sprite.y=557;
  sprite.scale.set(1)
  sprite.interactive = true;  
  sprite.buttonMode = true;

  game.stage.addChild(sprite);
  sprite.on("pointerup", () => {
    sprite.interactive=false;
    sprite.visible=false
    sprite1.visible=false
    start(game);
  });
}
export function start(app) {
  const { stage } = app;
  cards = drawCards(stage);
  stage.interactive = true;
  stage.on("pointerup", () => {
    if (cards.length == 0) {
      stage.removeChildren();
      start(app);
    } else if (firstChoice === undefined) {
      firstChoice = cards.filter((v) => v.isOpen())[0];
      console.log("firstChoice", firstChoice);
      console.log(cards.length)
      // console.log("secondChoice", secondChoice[0].id,secondChoice[1].id);
      // secondChoice;
      secondChoice[0];
      secondChoice[1];
    } else {
      stage.interactiveChildren = false;
      secondChoice = cards.filter((v) => v.isOpen());
      if (secondChoice[1] === undefined) {
        cards.forEach((c) => {
          c.reset();
        });
        firstChoice = undefined;
        secondChoice = undefined;
        stage.interactiveChildren = true;
      }
      if (secondChoice[0].id === secondChoice[1].id) {
        setTimeout(() => {
          stage.removeChild(secondChoice[0].view);
          stage.removeChild(secondChoice[1].view);
          cards = cards.filter((c) => !c.isOpen());
          if (cards.length === 0) {
            let finalMessage = new Text('You cleared all cards in ##:##\nClick To Continue.');
            finalMessage.anchor.set(0.5);
            finalMessage.x = app.screen.width / 2;
            finalMessage.y = app.screen.height / 2;
            stage.addChild(finalMessage);

          }
          firstChoice = undefined;
          secondChoice = undefined;
          stage.interactiveChildren = true;
        }, 1000);
      } else {
        setTimeout(() => {
          cards.forEach((c) => {
            c.reset();
          });
          firstChoice = undefined;
          secondChoice = undefined;
          stage.interactiveChildren = true;
        }, 500);
      }

    }
  });
}
function drawCards(stage) {
  let cardNum = 0;
  const cards = [];
  const offsetX = 10;
  const offsetXY = 10;
  const paddingX = 10;
  const paddingY = 10;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      for (let c = 0; c < 2; c++) {
        const card = getCard(cardNum, new Rectangle(...FRAMES[cardNum]));
        stage.addChild(card.view);
        stage.x = innerWidth / 4;
        stage.y = innerHeight / 6;
        cards.push(card);
      }

      cardNum++;
    }
  }
  // let cards1=shuffle(cards);
  // console.log(cards1);
  // for(let o=0;o<24;o++){
  // stage.addChild(cards1[o].view);
  // stage.x = innerWidth / 4;
  // stage.y = innerHeight / 6;
  // }
  // let cards1=[];
  // cards1=shuffle(card1);
  // for(let u=0;u<24;u++){
  //   stage.addChild(cards1[u].view);
  //       stage.x = innerWidth / 4;
  //       stage.y = innerHeight / 6;
  //       cards.push(cards1[u]);
  // }

  // for (let i = 0; i < 4; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     // for (let c = 0; c < 2; c++) {
  //       const card = getCard(cardNum, new Rectangle(...FRAMES[cardNum]));
  //       // console.log(FRAMES[cardNum]);
  //       stage.addChild(card.view);
  //       stage.x = innerWidth / 4;
  //       stage.y = innerHeight / 6;
  //       cards.push(card);
  //     // }

  //     cardNum1++;
  //   }
  // }

  
  // console.log(cards);
shuffle(cards);
  let count = 0;
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      let card = cards[count];
      card.view.x = c * (WIDTH + paddingX) + offsetX;
      card.view.y = r * (HEIGHT + paddingY) + offsetXY;
      count++;
    }
  }
  return cards;
}
// function randomNum() {
//   var test=0;
//   let newNum = Math.floor(Math.random() * 23);
//   while(test<used.length)
//   if(newNum!=used[test])
//       test++;
//   else{
//       newNum = Math.floor(Math.random() * 8);
//       test=0
//   }
//   if(test==used.length){
//       return newNum;
//   }
  
// }
