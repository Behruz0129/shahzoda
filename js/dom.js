const anim = document.querySelector('.main header');

window.addEventListener("scroll",  function(){
    anim.classList.toggle('anim', window.scrollY > 0);
})

const hamburger = document.querySelector(".hamburger");
const cont = document.querySelector(".cont");

hamburger.addEventListener("click", function(e) {
    cont.classList.toggle("full");
})
	