import {productKey} from './productList.js'


/* RANDOM PRODUCTS DISPLAY ON CARDS */

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

 

/* ROW 1 */
let chooser = randomNoRepeats(productKey.slice(0,6));
document.querySelector(".a1").src = chooser().img;
document.querySelector(".a2").src = chooser().img;
document.querySelector(".a3").src = chooser().img;
document.querySelector(".a4").src = chooser().img;
/* ROW 2 */
let chooser2 = randomNoRepeats(productKey.slice(6,12 )); 
document.querySelector(".a5").src = chooser2().img;
document.querySelector(".a6").src = chooser2().img;
document.querySelector(".a7").src = chooser2().img;
document.querySelector(".a8").src = chooser2().img;


console.log(productKey[0].name)
console.log(chooser().img)
/* END */