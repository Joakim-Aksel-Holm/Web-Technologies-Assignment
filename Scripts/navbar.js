document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");

  if (navbarContainer) {
    fetch("/Pages/navbar.html")
      .then(response => response.text())
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(error => console.error("Error loading navbar:", error));
  }
});
