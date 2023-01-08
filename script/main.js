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
let ran1 = chooser()
  $(".a1").attr("src",ran1.img)
  $(".myPrice_1").html("<span>&#8369;</span>: "+ran1.price)
let ran2 = chooser()
  $(".a2").attr("src",ran2.img)
  $(".myPrice_2").html("<span>&#8369;</span>: "+ran2.price)
let ran3 = chooser()
  $(".a3").attr("src",ran3.img)
  $(".myPrice_3").html("<span>&#8369;</span>: "+ran3.price)
let ran4 = chooser()
  $(".a4").attr("src",ran4.img)
  $(".myPrice_4").html("<span>&#8369;</span>: "+ran4.price)
/* ROW 2 */
let chooser2 = randomNoRepeats(productKey.slice(6,12 )); 

let ran5 = chooser2()
  document.querySelector(".a5").src = ran5.img;
  $(".myPrice_5").html("<span>&#8369;</span> "+ran5.price)
let ran6 = chooser2()
  $(".a6").attr("src",ran6.img)
  $(".myPrice_6").html("<span>&#8369;</span> "+ran6.price)
let ran7 = chooser2()
  $(".a7").attr("src",ran7.img)
  $(".myPrice_7").html("<span>&#8369;</span> "+ran7.price)
let ran8 = chooser2()
  $(".a8").attr("src",ran8.img)
  $(".myPrice_8").html("<span>&#8369;</span> "+ran8.price)





