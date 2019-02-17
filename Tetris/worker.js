console.log(self);
importScripts('collisions.js')
onmessage = e =>{
  let {data} = e;
  let {arena , square } = data;
  postMessage(checkSettings(arena, checkPiece(square)));
};
