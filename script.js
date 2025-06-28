document.querySelector('.search').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    alert('Search: ' + e.target.value);
  }
});
