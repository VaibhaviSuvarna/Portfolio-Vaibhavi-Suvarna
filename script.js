// Scroll reveal
(function () {
  var nodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window)) {
    nodes.forEach(function (n) {
      n.classList.add("is-visible");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  nodes.forEach(function (n) {
    io.observe(n);
  });
})();

// Smooth scroll for nav links (fallback for browsers without CSS smooth scroll)
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (ev) {
    var target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    ev.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Project image slideshow
var projectSliders = document.querySelectorAll(".project-slider");
projectSliders.forEach(function (slider) {
  var slides = Array.prototype.slice.call(slider.querySelectorAll("img"));
  if (slides.length < 2) return;

  var currentIndex = 0;
  window.setInterval(function () {
    slides[currentIndex].classList.remove("is-active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("is-active");
  }, 2500);
});
