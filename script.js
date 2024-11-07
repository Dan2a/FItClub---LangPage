document.addEventListener('DOMContentLoaded', () => {
  const descricaoAulas = document.querySelector('.descricao-aulas');
  const scrollElements = document.querySelectorAll('.animate-on-scroll');

  const onScroll = () => {
    // Verifica se a seção descricao-aulas está visível
    const topPos = descricaoAulas.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (topPos < windowHeight) {
      descricaoAulas.classList.add('animate');
    }

    // Verifica se outros elementos com .animate-on-scroll estão visíveis
    scrollElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll();
});
