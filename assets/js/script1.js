document.getElementById('goku').addEventListener('click', function() {
    if (this.style.border === '2px solid red') {
      this.style.border = '';
    } else {
      this.style.border = '2px solid red';
    }
  });
  