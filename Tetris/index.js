import {drawForeground} from './layer.js';
import Piece from './Piece.js';
import Screen from './Screen.js';
import {checkPiece, checkSettings, checkArena} from './collision.js';
const canvas = document.getElementById('canvas');
const buffer = document.createElement('canvas');
const screen = new Screen();

let square = new Piece(screen);
screen.setSize([canvas, buffer]);

let arena =Array(screen.cols).fill([]).map(row => row = Array(screen.rows).fill(0));

//let arena = Array(screen.cols).fill([]).map(row => row = Array(screen.rows).fill(0));

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let blocked = false;
function update(time =0){
  const deltaTime = time-lastTime;
  //console.log(deltaTime);
  lastTime = time;
  //console.log(square)
  dropCounter += deltaTime;
  screen.fg.clearRect(0,0,screen.width,screen.height);
  screen.bg.clearRect(0,0,screen.width,screen.height);
  screen.drawlayer(square, arena);

  if(square.pos[1]<screen.rows - square.ylimit && ! blocked){
    if(dropCounter > dropInterval){
      square.pos[1]++;
      dropCounter = 0;
      if(checkSettings(arena, checkPiece(square))){
        square.pos[1]--;
        blocked = true;
        arena =checkArena(arena);
      }
    }
  } else {
    newPiece();
    blocked = false;
    if(checkSettings(arena, checkPiece(square))){
      arena = Array(screen.cols).fill([]).map(row => row = Array(screen.rows).fill(0));
    }
    arena =checkArena(arena);
  }
  //console.log(square.pos[1]);
  screen.drawOntop();
  dropInterval-= 0.01;
  requestAnimationFrame(update);
}

update();
function newPiece(){
  arena =square.combineArena(arena);
  square = new Piece(screen);
}

function newGame(){
  let {pos, origin} =square;
  console.log(pos, origin);
  if(pos[0] == origin[0] && pos[1] == origin[1] && checkSettings(arena, checkPiece(square))){
    arena =Array(screen.cols).fill([]).map(row => row = Array(screen.rows).fill(0));
    dropInterval = 1000
    console.log('hi');
  }
}

window.addEventListener('keypress', (e) =>{
  //console.log(e);
  let {code} = e;
  if(code === 'KeyS'){
    newGame();
    square.pos[1]++;
    dropCounter = 0;
    if(checkSettings(arena, checkPiece(square))){

      square.pos[1]--;

      newPiece();

      arena =checkArena(arena);
      //update();
    }
  }
  else if(code === 'KeyD'){
    square.pos[0]++;
    if(checkSettings(arena, checkPiece(square)) || square.pos[0] > screen.cols - square.xlimit){
      square.pos[0]--;
      arena =checkArena(arena);
    }
  }
  else if(code === 'KeyA'){
    square.pos[0]--;
    if(checkSettings(arena, checkPiece(square)) || square.pos[0] < 0){
      square.pos[0]++;
      arena =checkArena(arena);
    }
  }
});
