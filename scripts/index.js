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

function checkIfTheApplicationIsDeployed() {
  const baseUrlGitHubPages =
    "https://adonesbalica.github.io/trabalho-portifolio-pessoal/";
  const baseUrl = window.location.pathname;
  const customUrl = "";

  if (baseUrl === baseUrlGitHubPages) {
    customUrl = baseUrlGitHubPages;
  }

  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    if (!link.getAttribute("href").split("/").pop() === "index.html") {
      `${customUrl}/${link.getAttribute("href").split("/").pop()}`;
    } else {
      `${customUrl}/pages/${link.getAttribute("href").split("/").pop()}`;
    }
  });
}

checkIfTheApplicationIsDeployed();
