import { gameKey } from './productList.js';
import { securityKey } from './productList.js';


/* LIST AND GRID VIEW DATA CONNECTION */

for(i = 4; i < securityKey.length; ++i)
{
$("#N"+i).text(securityKey[i].name)
$("#T"+i).text(securityKey[i].code)
$("#P"+i).html("<span>&#8369;</span> " + securityKey[i].price)
$("#shopImg"+i).attr("src",securityKey[i].img)


}
for(i = 0; i < gameKey.length; ++i)
{
$("#N"+i).text(gameKey[i].name)
$("#T"+i).text(gameKey[i].code)
$("#P"+i).html("<span>&#8369;</span> " + gameKey[i].price)
$("#shopImg"+i).attr("src",gameKey[i].img)


}

/* ADD TO CART BUTTON FUNCTION */
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

  $(".buyButton1").click(function(){myCart(1)})
  $(".buyButton2").click(function(){myCart(2)})
  $(".buyButton3").click(function(){myCart(3)})
  $(".buyButton4").click(function(){myCart(4)})
  $(".buyButton5").click(function(){myCart(5)})
  $(".buyButton6").click(function(){myCart(6)})
  $(".buyButton7").click(function(){myCart(7)})
  $(".buyButton8").click(function(){myCart(8)})




  function gototab(reload)
   {
    window.location.hash = '#myList';
    window.location.reload(true);
   }