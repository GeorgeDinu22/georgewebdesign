export function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  elements.forEach((el) => observer.observe(el));
}