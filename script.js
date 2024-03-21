const searchInput = document.getElementById('searchInput');
const categories = document.querySelectorAll('.category');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  categories.forEach(category => {
    const links = category.querySelectorAll('ul li a');
    let categoryVisible = false;

    links.forEach(link => {
      const text = link.textContent.toLowerCase();
      const linkParent = link.parentElement;

      if (text.includes(searchTerm)) {
        linkParent.style.display = 'block';
        categoryVisible = true;
      } else {
        linkParent.style.display = 'none';
      }
    });

    if (searchTerm === '' || categoryVisible) {
      category.style.display = 'block';
    } else {
      category.style.display = 'none';
    }
  });
    function goBack() {
     window.location.href = "#";
    }
});
