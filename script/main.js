/*   PRODUCT LIST     */
var productKey = [
    {
        name: "Windows 7",
        code: "p1",
        price: "1500",
        img: "../img/product/p1.png"
    },
    {
        name: "Windows 8.1",
        code: "p2",
        price: "1500",
        img: "../img/product/p2.jpg"
    },
    {
        name: "MS Office 2021",
        code: "p3",
        price: "500",
        img: "../img/product/p3.png"
    },
    {
        name: "SQL Server",
        code: "p4",
        price: "500",
        img: "../img/product/p4.svg"
    },
];

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

let chooser = randomNoRepeats(productKey);  


document.querySelector(".a1").src = chooser().img;
document.querySelector(".a2").src = chooser().img;
document.querySelector(".a3").src = chooser().img;
document.querySelector(".a4").src = chooser().img;



console.log(chooser().img)
/* END */