fetch("sub/nav.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#myNav");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})



fetch("sub/footer.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#myFooter");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})



fetch("sub/shopNav.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#shopNav");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

          
