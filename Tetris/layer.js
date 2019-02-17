export function drawTetrisLayer(ctx, rows, cols,side){
  // console.log(rows, cols, side);
  [...Array(rows).keys()].forEach( i =>{
    [...Array(cols).keys()].forEach( j =>{
      ctx.strokeRect(i*side, j * side, side,side);
    });
  });
}

export function drawForeground(piece, arena, ctx, side){
  piece.combineArena(arena).forEach((x,i)=>{ x.forEach((y,j)=>{
      if(y == 1){
        //console.log(ctx.fillStyle);
        ctx.fillStyle = 'red';
        ctx.fillRect(i*side, j * side, side,side);
        ctx.strokeRect(i*side, j * side, side,side);
      } else if(y == 2){
        //console.log(ctx.fillStyle);
        ctx.fillStyle = 'blue';
        ctx.fillRect(i*side, j * side, side,side);
        ctx.strokeRect(i*side, j * side, side,side);
      } else if(y == 3){
        //console.log(ctx.fillStyle);
        ctx.fillStyle = 'green';
        ctx.fillRect(i*side, j * side, side,side);
        ctx.strokeRect(i*side, j * side, side,side);
      }else if(y == 4){
        //console.log(ctx.fillStyle);
        ctx.fillStyle = 'yellow';
        ctx.fillRect(i*side, j * side, side,side);
        ctx.strokeRect(i*side, j * side, side,side);
      }
    })
  })
}
