var modal = document.getElementById("contact");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("#navbar ul");
  const navLinks = document.querySelectorAll("#navbar ul");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-links");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards 0.1s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();
