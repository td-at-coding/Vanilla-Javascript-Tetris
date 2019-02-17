import {setCoords, combine} from './arena.js';
import {pieces} from './pieces.js';
export default class Piece{
  constructor(screen, pos= [2,0]){

    this.pos= pos;
    this.pos[0]= Math.floor(screen.cols/2)-1;
    this.origin = [this.pos[0],0];
    let rand =Math.round(Math.random()*pieces.length-1);

    this.piece = pieces[(rand < 0)? 0 : rand];
    // console.log(rand);
    this.shape =  this.piece.shape;
    this.xlimit = this.piece.xlimit;
    this.ylimit = this.piece.ylimit;

    //console.log(this.shape);
  }
  combineArena(arena){
    //console.log(this.shape);
    return setCoords(arena, combine(this.shape, this.pos));
  }
}
