if(sessionStorage.getItem("login")==null) {
    if(document.getElementById("logoutSection")) document.getElementById("logoutSection").style.display="none";
    if(document.getElementById("loginSection")) document.getElementById("loginSection").style.display="block";
    if(document.getElementById("registrationSection")) document.getElementById("registrationSection").style.display="block";
} else {
    let login = sessionStorage.getItem("login");
    if(document.getElementById("login")) document.getElementById("login").innerHTML = "<h1>Welcome, "+login+"!</h1>";
    if(document.getElementById("logoutSection")) document.getElementById("logoutSection").style.display="block";
    if(document.getElementById("loginSection")) document.getElementById("loginSection").style.display="none";
    if(document.getElementById("registrationSection")) document.getElementById("registrationSection").style.display="none";
}

simulatedLogin=(username)=>{
    if(username=="") return alert("Please enter your username/email!");
    sessionStorage.setItem("login", username);
    alert("Welcome, "+username+"!");
    location.reload();
}

simulatedLogout=()=>{
    let username = sessionStorage.getItem("login");
    let response = confirm("Hi, "+username+"! You are about to logout.");
    if(!response) return;
    sessionStorage.removeItem("login");
    alert("Goodby, "+username+"!");
    location.reload();
}