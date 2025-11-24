



//counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);  // Correct method is getElementById (singular)
    let current = start;
    let range = end - start;
    let increment = end > start ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range)*5);

    // Initialize starting value in the element
    obj.textContent = current;

    let timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  // Call the counter function for multiple elements
  counter("counter1", 0, 1287, 3000);
  counter("counter2", 100, 570, 7500);
  counter("counter3", 0, 144, 3000);
  counter("counter4", 0, 1441, 30000);
});





//active navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
}


//nav hide


let navBar = document.querySelectorAll('.nav-link');          
let navCollapse = document.querySelector('.navbar-collapse.collapse');  

navBar.forEach(function(a) {
  a.addEventListener("click", function() {
    navCollapse.classList.remove("show");
  });
});
