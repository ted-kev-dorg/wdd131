const buttons = document.querySelectorAll('.accordion-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        btn.classList.toggle('active');

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          document.querySelectorAll('.accordion-panel').forEach(p => p.style.maxHeight = null);
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });