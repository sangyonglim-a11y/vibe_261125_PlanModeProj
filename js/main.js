/**
 * 커피챗 구글 폼 URL — 여기만 바꾸면 모든 CTA에 반영됩니다.
 * 예: "https://forms.gle/xxxxxxxx"
 * 비워 두면 #coffeechat 앵커로 동작합니다.
 */
const COFFEECHAT_URL = "https://forms.gle/NUop5RaC8kJzx8fY8";

function bindCoffeeChatLinks() {
  const links = document.querySelectorAll(".js-coffeechat");
  const href = COFFEECHAT_URL.trim() || "#coffeechat";
  const isExternal = /^https?:\/\//i.test(href);

  links.forEach((link) => {
    link.setAttribute("href", href);
    if (isExternal) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    } else {
      link.removeAttribute("target");
      link.removeAttribute("rel");
    }
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  bindCoffeeChatLinks();
  initReveal();
});
