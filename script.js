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
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

const progressBar = document.getElementById("myProgressBar");
const body = document.body;

let progress = 0;
const interval = setInterval(() => {
  progress += 5;
  progressBar.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval);
    progressBar.classList.add("loaded");
    body.classList.add("loaded");
  }
}, 100);

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const categoryToFilter = button.dataset.category;
    categories.forEach(category => {
      if (categoryToFilter === "all" || category.id === categoryToFilter) {
        category.style.display = "block";
      } else {
        category.style.display = "none";
      }
    });
  });
});
