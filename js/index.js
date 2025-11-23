$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:5,
    responsive:{
            0:{ items:1 },
            576:{ items:2 },
            768:{ items:3 },
            992:{ items:4 },
            1200:{ items:5 }
        }
  });
});
let sidebar = document.querySelector(".sidebar");
let sidebar_btn = document.querySelector(".sidebar-btn");
let scroll_up = document.querySelector(".scroll-up");
if(sidebar_btn){

  sidebar_btn.addEventListener('click' , (e)=>{
    sidebar.classList.remove('d-none');
    
    console.log(e.target);
  });
}
if(sidebar){
    sidebar.addEventListener( 'click', (e)=>{
      if(e.target == e.currentTarget){sidebar.classList.add("d-none")}
        
    })
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scroll_up.classList.add("show");
  } else {
    scroll_up.classList.remove("show");
  }
});
scroll_up.addEventListener("click" , () =>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// time calculation
const endTime = new Date("Dec 31, 2025 23:59:59");

setInterval(() => {
  const now = new Date().getTime();
  let diff = endTime - now;
  if(diff < 0) diff = 0;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById("days2").innerHTML = days.toString().padStart(2,'0');
  document.getElementById("hours2").innerHTML = hours.toString().padStart(2,'0');
  document.getElementById("minutes2").innerHTML = minutes.toString().padStart(2,'0');
  document.getElementById("seconds2").innerHTML = seconds.toString().padStart(2,'0');

  document.getElementById("hours1").innerHTML = hours.toString().padStart(2,'0');
  document.getElementById("minutes1").innerHTML = minutes.toString().padStart(2,'0');
  document.getElementById("seconds1").innerHTML = seconds.toString().padStart(2,'0');

}, 1000);
