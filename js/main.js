import {productKey} from './productList.js';
import {gameKey} from './productList.js';
import {securityKey} from './productList.js';


/* RANDOM FEATURED PRODUCTS FUNCTION */

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


/* FEATURED PRODUCTS  */  

/* ROW 1 */
let chooser = randomNoRepeats(productKey.slice(0,12));
let ran1 = chooser()
  $(".a1").attr("src",ran1.img)
  $(".cardInfo1").html(ran1.info)
  $(".myPrice_1").html("<span>&#8369;</span> "+ran1.price)
let ran2 = chooser()
  $(".a2").attr("src",ran2.img)
  $(".cardInfo2").html(ran2.info)
  $(".myPrice_2").html("<span>&#8369;</span> "+ran2.price)
let ran3 = chooser()
  $(".a3").attr("src",ran3.img)
  $(".cardInfo3").html(ran3.info)
  $(".myPrice_3").html("<span>&#8369;</span> "+ran3.price)
let ran4 = chooser()
  $(".a4").attr("src",ran4.img)
  $(".cardInfo4").html(ran4.info)
  $(".myPrice_4").html("<span>&#8369;</span> "+ran4.price)

/* ROW 2 */

let ran5 = chooser()
  document.querySelector(".a5").src = ran5.img;
  $(".cardInfo5").html(ran5.info)
  $(".myPrice_5").html("<span>&#8369;</span> "+ran5.price)
let ran6 = chooser()
  $(".a6").attr("src",ran6.img)
  $(".cardInfo6").html(ran6.info)
  $(".myPrice_6").html("<span>&#8369;</span> "+ran6.price)
let ran7 = chooser()
  $(".a7").attr("src",ran7.img)
  $(".cardInfo7").html(ran7.info)
  $(".myPrice_7").html("<span>&#8369;</span> "+ran7.price)
let ran8 = chooser()
  $(".a8").attr("src",ran8.img)
  $(".cardInfo8").html(ran8.info)
  $(".myPrice_8").html("<span>&#8369;</span> "+ran8.price)

  /* ROW 3 SECURITY SECTION */

  let chooser3 = randomNoRepeats(securityKey.slice(0,6 )); 

  let ran13 = chooser3()
  document.querySelector(".a13").src = ran13.img;
  $(".cardInfo13").html(ran13.info)
  $(".myPrice_13").html("<span>&#8369;</span> "+ran13.price)
let ran14 = chooser3()
  $(".a14").attr("src",ran14.img)
  $(".cardInfo14").html(ran14.info)
  $(".myPrice_14").html("<span>&#8369;</span> "+ran14.price)
let ran15 = chooser3()
  $(".a15").attr("src",ran15.img)
  $(".cardInfo15").html(ran15.info)
  $(".myPrice_15").html("<span>&#8369;</span> "+ran15.price)
let ran16 = chooser3()
  $(".a16").attr("src",ran16.img)
  $(".cardInfo16").html(ran16.info)
  $(".myPrice_16").html("<span>&#8369;</span> "+ran16.price)

  /* ROW 4 GAME SECTION */

  let chooser2 = randomNoRepeats(gameKey.slice(0,5 )); 

  let ran9 = chooser2()
  document.querySelector(".a9").src = ran9.img;
  $(".cardInfo9").html(ran9.info)
  $(".myPrice_9").html("<span>&#8369;</span> "+ran9.price)
let ran10 = chooser2()
  $(".a10").attr("src",ran10.img)
  $(".cardInfo10").html(ran10.info)
  $(".myPrice_10").html("<span>&#8369;</span> "+ran10.price)
let ran11 = chooser2()
  $(".a11").attr("src",ran11.img)
  $(".cardInfo11").html(ran11.info)
  $(".myPrice_11").html("<span>&#8369;</span> "+ran11.price)
let ran12 = chooser2()
  $(".a12").attr("src",ran12.img)
  $(".cardInfo12").html(ran12.info)
  $(".myPrice_12").html("<span>&#8369;</span> "+ran12.price)

/* FEATURED PRDUCTS END */


/* CARD BUTTON ADD, REMOVE CART */

function myCart(num){
  let btext = $(".buyButton"+num).text()
   console.log(btext)
  if(btext == ' Add To Cart')
  {
      $(".buyButton"+num).text("Remove")
  }
  else{
      $(".buyButton"+num).html('<i class="bi bi-cart4"></i> Add To Cart')
}
}


$(".buyButton0").click(function(){myCart(0)})
$(".buyButton1").click(function(){myCart(1)})
$(".buyButton2").click(function(){myCart(2)})
$(".buyButton3").click(function(){myCart(3)})
$(".buyButton4").click(function(){myCart(4)})
$(".buyButton5").click(function(){myCart(5)})
$(".buyButton6").click(function(){myCart(6)})
$(".buyButton7").click(function(){myCart(7)})
$(".buyButton8").click(function(){myCart(8)})
$(".buyButton9").click(function(){myCart(9)})
$(".buyButton10").click(function(){myCart(10)})
$(".buyButton11").click(function(){myCart(11)})
$(".buyButton12").click(function(){myCart(12)})
$(".buyButton13").click(function(){myCart(13)})
$(".buyButton14").click(function(){myCart(14)})
$(".buyButton15").click(function(){myCart(15)})