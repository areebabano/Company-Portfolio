// Toggle sidebar function
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebar.style.transform === 'translateX(0px)') {
      sidebar.style.transform = 'translateX(100%)'; // Hide sidebar off-screen
  } else {
      sidebar.style.transform = 'translateX(0px)'; // Show sidebar
  }
}

// Event listener for the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleSidebar);

// Optional: Close button functionality
document.querySelector('.close-btn').addEventListener('click', toggleSidebar);


