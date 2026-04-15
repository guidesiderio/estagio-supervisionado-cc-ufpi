// ─── DARK MODE TOGGLE ───────────────────────────
const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  function updateThemeLabel() {
    const isDark = document.documentElement.classList.contains("dark");
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Ativar modo claro" : "Ativar modo escuro"
    );
  }
  updateThemeLabel();

  themeToggle.addEventListener("click", function () {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabel();
  });
}

// ─── FAQ ACCORDION ─────────────────────────────────
(function () {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item, index) {
    const btn = item.querySelector(".faq-pergunta");
    const panel = item.querySelector(".faq-resposta");
    if (!btn || !panel) return;

    // Set up aria attributes
    const panelId = "faq-panel-" + index;
    panel.id = panelId;
    btn.setAttribute("aria-controls", panelId);
    panel.setAttribute("aria-hidden", "true");

    btn.addEventListener("click", function () {
      const isOpen = item.classList.contains("aberto");

      // Close all open items
      faqItems.forEach(function (el) {
        el.classList.remove("aberto");
        var elBtn = el.querySelector(".faq-pergunta");
        var elPanel = el.querySelector(".faq-resposta");
        if (elBtn) elBtn.setAttribute("aria-expanded", "false");
        if (elPanel) elPanel.setAttribute("aria-hidden", "true");
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add("aberto");
        btn.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
      }
    });
  });
})();

// ─── HAMBURGER ───────────────────────────────
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMobile.classList.toggle("open");
    this.setAttribute("aria-expanded", String(isOpen));
    this.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  });

  navMobile.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu de navegação");
    });
  });

  // Close mobile nav when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navMobile.classList.contains("open") &&
      !navMobile.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu de navegação");
    }
  });
}

// ─── FADE IN ON SCROLL ───────────────────────
const fadeEls = document.querySelectorAll(".fade-in");
const fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach(function (el) {
  fadeObserver.observe(el);
});

// ─── ACTIVE NAV SECTION TRACKING ────────────
(function () {
  const sections = document.querySelectorAll("main section[id]");
  const desktopNav = document.querySelector("header .header-inner nav");
  const mobileNav = document.getElementById("navMobile");

  if (!sections.length || !desktopNav) return;

  function setActive(id) {
    var allLinks = [].concat(
      Array.from(desktopNav.querySelectorAll("a")),
      mobileNav ? Array.from(mobileNav.querySelectorAll("a")) : []
    );
    allLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });
})();

// ─── BACK TO TOP ────────────────────────────
var backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  var scrollTicking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (!scrollTicking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 600) {
            backToTop.classList.add("visible");
          } else {
            backToTop.classList.remove("visible");
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    },
    { passive: true }
  );

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
