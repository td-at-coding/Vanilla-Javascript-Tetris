export function checkPiece(tetris){
  let combined = tetris.shape.map((row, i)=> row.map((col, j)=> [i+tetris.pos[0], j+tetris.pos[1]]));
  return function(row, col, value){
    let res =false;
    combined.forEach((x,i)=>{ x.forEach((y,j)=>{
      if(y[0]==row && y[1]==col && value !=0){
        if(tetris.shape[i][j]!=0)
        res = true
      }
    })});
    return res;
  }
}

export function checkSettings(arena, callback){
  let res = false;
  arena.forEach((row, i) =>
   row.forEach((col, j) =>{
     //console.log(callback(i, j, col))
     if(callback(i, j, col)){
       res = true;
     }
   })
  )
  return res;
}

export function checkArena(arena){
  const values = [...arena[0].keys()].fill(0);
  arena.forEach((row, i) =>{
   row.forEach((col, j) =>{
     if(col) values[j]++;
   })
 })
 //console.log(values);
 let temp = arena;
 arena.forEach((row, i) =>{
  row.forEach((col, j) =>{
    if(values[j] == row.length){
      temp[i].splice(j, 1);
      temp[i].splice(0, 0, 0);
    }
    })
  })
return temp;
 //myFish.splice(2, 1); // remove 1 item at 2-index
}
