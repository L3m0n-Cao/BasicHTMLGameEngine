//Mouse Events
let mouse = {
    x: undefined,
    y: undefined,
    isDown: false
};
let keyboard = {
  currentKey: undefined,
  prevKey: undefined,
  keyIsDown: false,
  w: false,
  a: false,
  s: false,
  d: false
};
/*check what keys are down
  check what keys go up
  do something*/

addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
addEventListener('mousedown', (e) => {
  mouse.isDown = true;
});
addEventListener('mouseup', (e) => {
  mouse.isDown = false;
});
addEventListener('keydown', (e) => {
  keyboard.isDown = true;
  keyboard.keyIsDown = keyboard.currentKey;
  keyboard.currentKey = e.key;
});


addEventListener('keydown', (e) => {
  keyboard.prevKey = keyboard.currentKey;
  keyboard.currentKey = e.key;
  keyboard.keyIsDown = true;
});
addEventListener('keyup', (e) => {
  keyboard.currentKey = undefined;
  keyboard.keyIsDown = false;
});
