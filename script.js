
let count = 0;
function push() {
    
      let button = document.getElementById("button");
      let countDisplay = document.getElementById("push");
      button.addEventListener("click",function() {   
         count++;
         countDisplay.innerHTML = count;
      });


    }

    var cards = [document.getElementById("1"), document.getElementById("2")]
    
