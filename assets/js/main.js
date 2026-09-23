/* 李飞飞 · 个人主页交互脚本 */
(function () {
  "use strict";

  /* ---------- 年份 ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- 导航：滚动后加阴影 ---------- */
  var header = document.getElementById("site-header");
  function onScrollHeader() {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- 移动端菜单 ---------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.querySelector(".nav-links");
  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
    toggle.classList.toggle("active");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.classList.remove("active");
    }
  });

  /* ---------- 返回顶部 ---------- */
  var backTop = document.getElementById("back-top");
  window.addEventListener("scroll", function () {
    backTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  backTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 入场动画 ---------- */
  var revealEls = document.querySelectorAll(".card, .timeline-item, .hero-inner");
  if ("IntersectionObserver" in window) {
    revealEls.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Hero 打字效果 ---------- */
  var greeting = document.getElementById("hero-greeting");
  var sentences = ["Hi, I'm a bioinformatician  👋", "你好，我是生物信息工程师李飞飞"];
  var si = 0, ci = 0, deleting = false;
  function type() {
    var cur = sentences[si];
    greeting.textContent = cur.slice(0, ci);
    if (!deleting) {
      if (ci < cur.length) { ci++; setTimeout(type, 90); }
      else { deleting = true; setTimeout(type, 2600); }
    } else {
      if (ci > 0) { ci--; setTimeout(type, 35); }
      else { deleting = false; si = (si + 1) % sentences.length; setTimeout(type, 500); }
    }
  }
  type();
})();