// Adresse de base du site, déduite de l'emplacement de script.js
const BASE = new URL(".", document.currentScript.src).href;

async function loadPartial(selector, url) {
  const target = document.querySelector(selector);
  if (!target) return;
  const response = await fetch(BASE + url);
  const html = await response.text();
  // Les liens "/..." du partial deviennent relatifs à la base du site
  target.outerHTML = html.replaceAll('href="/', `href="${BASE}`).replaceAll('src="/', `src="${BASE}`);
}

function initMenu() {
  const button = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  const main = document.querySelector("main");
  let timer;

  if (!button || !menu || !main) return;

  function setMenu(open) {
    clearTimeout(timer);
    button.setAttribute("aria-expanded", open);
    button.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");

    // "instant" évite que le scroll-behavior: smooth du CSS anime ce retour en haut
    window.scrollTo({ top: 0, behavior: "instant" });

    if (open) {
      menu.classList.add("open");
      // quand le panneau est en place, le contenu se range dessous
      timer = setTimeout(() => {
        main.style.paddingTop = menu.offsetHeight + "px";
      }, 500);
    } else {
      main.style.paddingTop = "";
      menu.classList.remove("open");
    }
  }

  button.addEventListener("click", () => {
    setMenu(!menu.classList.contains("open"));
  });

  // Clic sur un lien : fermeture instantanée du menu, puis défilement vers la section
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const url = new URL(link.href);
      const normalize = (path) => path.replace(/index\.html$/, "");
      const samePage = normalize(url.pathname) === normalize(location.pathname);

      // Lien vers une autre page (ex : /#about depuis la page Job Board) :
      // on laisse le navigateur naviguer normalement
      if (!samePage) return;

      e.preventDefault();
      const target = url.hash ? document.querySelector(url.hash) : null;

      menu.classList.add("no-anim");
      setMenu(false);
      void menu.offsetWidth; // force le navigateur à appliquer l'état fermé sans transition

      // on réactive les animations une fois le menu fermé
      setTimeout(() => menu.classList.remove("no-anim"), 50);

      target?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

async function init() {
  await Promise.all([
    loadPartial("#site-header", "partials/header.html"),
    loadPartial("#site-footer", "partials/footer.html"),
  ]);
  initMenu();
}

init();

document.addEventListener("click", (e) => {
  const link = e.target.closest('header a[href*="#"]');
  if (!link) return;

  const url = new URL(link.href);
  const normalize = (path) => path.replace(/index\.html$/, "");

  // Autre page : on laisse le navigateur naviguer normalement
  if (normalize(url.pathname) !== normalize(location.pathname)) return;

  const target = document.querySelector(url.hash);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
});
