// Pequenas animações de entrada, sem atrapalhar quem prefere movimento reduzido.
(() => {
  const elements = document.querySelectorAll(
    '.category, .about-card, .visit-card'
  );

  if (!('IntersectionObserver' in window)) return;

  elements.forEach((element) => element.classList.add('js-reveal'));

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
})();
