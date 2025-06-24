function activeLink() {
  const links = document.querySelectorAll("nav a");
  const currentPageUrl = window.location.pathname;

  links.forEach((link) => link.classList.remove("active"));

  links.forEach((link) => {
    if (
      link.getAttribute("href").split("/").pop() ===
      currentPageUrl.split("/").pop()
    ) {
      link.classList.add("active");
    }
  });
}

activeLink();
