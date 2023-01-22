let buy = document.getElementById("buy");
let cont = document.getElementById("cont");
let cot = document.getElementById("cot2");
let cont2 = document.getElementById("cont2");
let bt = document.getElementById("bt");


buy.addEventListener("click", (eo) => {
  cont.style.display = "block";
  eo.preventDefault() 
});

bt.addEventListener("click", (eo) => {
  cont.style.display = "none";
  cont2.style.display = "block";
  setTimeout(() => {  
    
    cont2.style.display = "none";
  }, 3000);
});
