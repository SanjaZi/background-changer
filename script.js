const container = document.getElementById('container');
const picturecenter = document.querySelectorAll(".picturecenter");
const leftarrow = document.getElementById("left-arrow");
const rightarrow = document.getElementById("right-arrow");
let numofpictures = picturecenter.length-1;
let counter = 0;

function leftarrowfn(){
    if (counter == 0) {
        counter = numofpictures;

      } else {
        counter--;
      }
}

function rightarrowfn(){
    if (counter == numofpictures) {
        counter = 0;
    } else {
        counter++;
    }
}

function changepictures() {
        
    for (let index = 0; index <  picturecenter.length; index++) {
        picturecenter[index].classList.add("hidden");      
    }

     picturecenter[counter].classList.remove("hidden");
     container.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),' + picturecenter[counter].style.backgroundImage;
    }


  leftarrow.addEventListener("click", () => {
   
        leftarrowfn();
      changepictures();
  });
  
   
 rightarrow.addEventListener("click", () => {

     rightarrowfn();
    changepictures();
    })
    

    document.onkeydown = checkKey;    
    function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        leftarrowfn();
        changepictures();
    }
    else if (e.keyCode == '39') {
        rightarrowfn();
        changepictures();
    }

}