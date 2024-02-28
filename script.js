const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");

menuToggle.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
