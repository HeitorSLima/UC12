document.querySelector('input[type="range"]').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--hue', e.target.value);
  });