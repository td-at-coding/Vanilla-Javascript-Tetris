/*
  loop over elements within the grid with a callback
*/
export function setCoords(arena, callback){
  return arena.map((row, i) =>
   row.map((col, j) =>{
     //console.log(callback(i, j, col))
     return callback(i, j, col)
   })
  )
}
export function combine(tetris, coords){
  let combined = tetris.map((row, i)=> row.map((col, j)=> [i+coords[0], j+coords[1]]));
  //console.log(combined);
  return function coordscompare(row, col, value){
    let res = value;
    combined.forEach((x,i)=>{ x.forEach((y,j)=>{
      if(y[0]==row && y[1]==col){
        //console.log(combined[i][j][0], combined[i][j][1] ,  row, col, tetris[i][j], tetris);
        if(tetris[i][j]!= 0)
          res = tetris[i][j];
      }})})
    return res;
  }
}
