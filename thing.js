
let g = 0
let r = 0
let  y = 0
let  p = 0



const runTest = () => {
const test1 = p + 2*g > y + r + g;
const test2 = 2*r + 2*g === p + r;
const test3 = r + p > 2*g + y;
const test4 = y + g === 2*g + r;

if (test1 && test2 && test3 && test4){
  console.log("WINNER", {g,r,y,p})
  return false;
} else {
  console.log('fail', {g,r,y,p})
 return true;


}
}

while (runTest()){
 
  g++;
  if (g > 50){
    g = 0;
    r++;
  }
    if (r > 50){
    r = 0;
    y++;
  }
      if (y > 50){
    y = 0;
    p++;
  }
  if (p > 50){
    return;
  }
}






module.exports = runTest();