import { productKey } from "./productList.js";


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


/* MICROSOFT.HTML PRODUCT LIST */

/* ROW 1,2 */
let chooser5 = randomNoRepeats(productKey.slice(0,7));
let ran_M1 = chooser5();

  $(".aM1").attr("src",ran_M1.img);
  $(".cardInfoM1").html(ran_M1.info);
  $(".myPrice_M1").html("<span>&#8369;</span> "+ran_M1.price);
let ran_M2 = chooser5();
  $(".aM2").attr("src",ran_M2.img);
  $(".cardInfoM2").html(ran_M2.info);
  $(".myPrice_M2").html("<span>&#8369;</span> "+ran_M2.price);
let ran_M3 = chooser5();
  $(".aM3").attr("src",ran_M3.img);
  $(".cardInfoM3").html(ran_M3.info);
  $(".myPrice_M3").html("<span>&#8369;</span> "+ran_M3.price);
let ran_M4 = chooser5();
  $(".aM4").attr("src",ran_M4.img);
  $(".cardInfoM4").html(ran_M4.info);
  $(".myPrice_M4").html("<span>&#8369;</span> "+ran_M4.price);
  let ran_M5 = chooser5();
  $(".aM5").attr("src",ran_M5.img);
  $(".cardInfoM5").html(ran_M5.info);
  $(".myPrice_M5").html("<span>&#8369;</span> "+ran_M5.price);
let ran_M6 = chooser5();
  $(".aM6").attr("src",ran_M6.img);
  $(".cardInfoM6").html(ran_M6.info);
  $(".myPrice_M6").html("<span>&#8369;</span> "+ran_M6.price);
let ran_M7 = chooser5();
  $(".aM7").attr("src",ran_M7.img);
  $(".cardInfoM7").html(ran_M7.info);
  $(".myPrice_M7").html("<span>&#8369;</span> "+ran_M7.price);
/* let ran_M8 = chooser5();
  $(".aM8").attr("src",ran_M8.img);
  $(".cardInfoM8").html(ran_M8.info);
  $(".myPrice_M8").html("<span>&#8369;</span> "+ran_M8.price); */


  function myCart(num){
    let btext = $(".buyButtonM"+num).text()
     console.log(btext)
    if(btext == ' Add To Cart')
    {
        $(".buyButtonM"+num).text("Remove")
    }
    else{
        $(".buyButtonM"+num).html('<i class="bi bi-cart4"></i> Add To Cart')
  }
  }


  $(".buyButtonM1").click(function(){myCart(1)})
  $(".buyButtonM2").click(function(){myCart(2)})
  $(".buyButtonM3").click(function(){myCart(3)})
  $(".buyButtonM4").click(function(){myCart(4)})
  $(".buyButtonM5").click(function(){myCart(5)})
  $(".buyButtonM6").click(function(){myCart(6)})
  $(".buyButtonM7").click(function(){myCart(7)})
  $(".buyButtonM8").click(function(){myCart(8)})