
    const neonBox = document.getElementById('neonBox');
    const toggleBtn = document.getElementById('toggleBtn');

    let isVisible = true;

    toggleBtn.addEventListener('click', () => {
      isVisible = !isVisible;
      neonBox.classList.toggle('hidden');
      toggleBtn.classList.toggle('hidden-btn');
      toggleBtn.textContent = isVisible ? 'Hide' : 'Show';
    });
  
