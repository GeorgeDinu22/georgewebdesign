export function initScrollAnimations() {
  const startObserver = () => {
    const elements = document.querySelectorAll(".animate");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add("show");
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.5
      }
    );

    elements.forEach((el) => observer.observe(el));
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(startObserver);
  } else {
    setTimeout(startObserver, 400);
  }
}