// text effects

var typed = new Typed(".auto-type", {
    strings: ["Software Developer", "Fronted Developer", "Freelancer"],
    typeSpeed: 120,
    backSpeed: 120,
    loop: true
  });
  

  //preloader

  const loader = document.querySelector(".loader");
  window.onload = function(){
    setTimeout(function(){
      loader.style.opacity = "0";
      setTimeout(function(){
      loader.style.display = "none";
    }, 800);
  },2000);
}
