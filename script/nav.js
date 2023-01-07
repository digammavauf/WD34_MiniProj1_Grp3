fetch("../sub/nav.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#myNav");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})



fetch("../sub/footer.html")
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#myFooter");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

          
              
/* document.querySelector(".mySearch").addEventListener("mouseover",function(){
    document.write("<form class="d-flex">");
    document.write("<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">");
    document.write("<button class="btn btn-outline-success" type="submit">Search</button>");
    document.write("</form>")
})
      */