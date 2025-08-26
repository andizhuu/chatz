// Router sederhana
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  async function loadPage(page) {
    try {
      const response = await fetch(`${page}.html`);
      if (!response.ok) throw new Error("Halaman tidak ditemukan");
      const html = await response.text();
      content.innerHTML = html;
    } catch (err) {
      content.innerHTML = `<p style="color:red;">${err.message}</p>`;
    }
  }

  // Event klik menu
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("href").substring(1); // hapus tanda #
      loadPage(page);
    });
  });

  // Default buka home
  loadPage("home");
});
