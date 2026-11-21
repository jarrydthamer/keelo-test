const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menu = document.getElementById("site-menu");
const menuToggle = document.querySelector(".keelo-menu-toggle");

if (menu && menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.showModal();
    menuToggle.setAttribute("aria-expanded", "true");
  });
  menu.addEventListener("close", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.focus({ preventScroll: true });
  });
  menu.addEventListener("click", (event) => {
    if (event.target === menu || event.target.closest("nav a")) menu.close();
  });
}

const tickerToggle = document.querySelector(".ticker-toggle");
if (tickerToggle) {
  tickerToggle.addEventListener("click", () => {
    const paused = tickerToggle.parentElement.classList.toggle("is-paused");
    tickerToggle.setAttribute("aria-label", paused ? "Resume ticker" : "Pause ticker");
    tickerToggle.textContent = paused ? "▶" : "Ⅱ";
  });
}
