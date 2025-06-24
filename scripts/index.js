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

function contactEmail() {
  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailTo = "adonesbalica@gmail.com";
    const subject = encodeURIComponent("Contato via portfólio/site pessoal");
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    );

    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  });
}

contactEmail();
