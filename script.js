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

// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
}

// Add an event listener to the button
scrollToTopBtn.addEventListener("click", scrollToTop);

// Show the button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) { // Show the button after scrolling down 300px
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// ... Your existing JavaScript ...

// Get the progress bar element
const progressBar = document.getElementById("myProgressBar");
const body = document.body;

// Simulate progress (replace with your actual progress logic)
let progress = 0;
const interval = setInterval(() => {
  progress += 5; // Increase progress by 5% each time
  progressBar.style.width = progress + "%";

  if (progress >= 100) {
    clearInterval(interval); // Stop the interval when progress is complete
    progressBar.classList.add("loaded"); // Add the "loaded" class to the progress bar
    body.classList.add("loaded"); // Add the "loaded" class to the body
  }
}, 100); // Update every 100 milliseconds

// ... Your existing JavaScript ...

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove("active"));

    // Add active class to the clicked button
    button.classList.add("active");

    // Filter categories based on the clicked button's data-category attribute
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
