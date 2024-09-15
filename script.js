let stranger = document.querySelector("h5");
let addfr = document.querySelector("#add");

let click = 0;
addfr.addEventListener("click", function(){
    if(click === 0){
        stranger.innerHTML = "Friends"
        stranger.style.color = "green"
         addfr.innerHTML = "Remove Friend"
         addfr.style.color = "black"
        click = 1
    }
    else{
      stranger.innerHTML = "Stranger"
      stranger.style.color = "red" 
      addfr.innerHTML = "Add Friend"
        addfr.style.color ="white" 
      click = 0
    }
})