const sectionsMenu = document.querySelector("#sections-menu");
const sectionsButton = document.querySelector(".sections-menu-button");

if (sectionsMenu && sectionsButton) {
  sectionsButton.addEventListener("click", () => {
    sectionsMenu.showModal();
    sectionsButton.setAttribute("aria-expanded", "true");
  });
  sectionsMenu.addEventListener("close", () => {
    sectionsButton.setAttribute("aria-expanded", "false");
    sectionsButton.focus({ preventScroll: true });
  });
  sectionsMenu.addEventListener("click", (event) => {
    if (event.target === sectionsMenu) sectionsMenu.close();
  });
}

const sectionsYear = document.querySelector("[data-keelo-year]");
if (sectionsYear) sectionsYear.textContent = new Date().getFullYear();
