document.querySelectorAll('.add-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const countEl = btn.nextElementSibling;
    let count = parseInt(countEl.textContent);
    count += 1;
    countEl.textContent = count;

    // Animate the counter
    countEl.classList.add('animate');
    setTimeout(() => {
      countEl.classList.remove('animate');
    }, 300);
  });
});



    const items = document.querySelectorAll('.menu-item');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3
    });

    items.forEach(item => {
      observer.observe(item);
    });
