import {drawTetrisLayer,drawForeground} from './layer.js';
export default class Screen {
  constructor(width=600, height=600, side= 30, cols = 20,  rows = 20) {
    this.width= width;
    this.height = height;
    this.side =side
    this.cols =cols
    this.rows =rows
  }
  setSize(buffers){
    buffers.forEach(buffer=>{
      buffer.width = this.width;
      buffer.height = this.height;
    });
    let [canvas, buffer] = buffers;
    this.bg = canvas.getContext('2d');
    this.fg = buffer.getContext('2d');
    this.canvas = canvas;
    this.buffer = buffer;
  }
  drawlayer(piece, arena){
    drawForeground(piece, arena, this.fg, this.side)
  }
  drawOntop(){
    drawTetrisLayer(this.bg, this.rows, this.cols,
                    this.side);
    this.bg.drawImage(this.buffer,0,0,this.height, this.width);
  }
}
