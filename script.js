const root = document.documentElement;
const cursor = document.querySelector(".cursor");
const cursorTrail = document.querySelector(".cursor--trail");
const gauge = document.querySelector(".gauge");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = mouseX;
let trailY = mouseY;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setMouse(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  root.style.setProperty("--mx", mouseX + "px");
  root.style.setProperty("--my", mouseY + "px");
  if (cursor) {
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  }
}

function animateTrail() {
  if (cursorTrail) {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    cursorTrail.style.left = trailX + "px";
    cursorTrail.style.top = trailY + "px";
  }
  if (!reduceMotion) {
    requestAnimationFrame(animateTrail);
  }
}

if (!reduceMotion) {
  window.addEventListener("mousemove", setMouse);
  animateTrail();
}

if (gauge) {
  const updateNeedle = (x, y) => {
    const rect = gauge.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI) + 90;
    gauge.style.setProperty("--needle-angle", angle.toFixed(2) + "deg");
  };

  if (!reduceMotion) {
    window.addEventListener("pointermove", (event) => {
      updateNeedle(event.clientX, event.clientY);
    });

    window.addEventListener(
      "touchmove",
      (event) => {
        if (event.touches && event.touches[0]) {
          updateNeedle(event.touches[0].clientX, event.touches[0].clientY);
        }
      },
      { passive: true }
    );
  } else {
    gauge.style.setProperty("--needle-angle", "0deg");
  }
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const tiltItems = document.querySelectorAll(".tilt");
const tiltMax = 8;

if (!reduceMotion) {
  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -tiltMax;
      const ry = ((x / rect.width) - 0.5) * tiltMax;
      item.style.setProperty("--rx", rx.toFixed(2) + "deg");
      item.style.setProperty("--ry", ry.toFixed(2) + "deg");
    });

    item.addEventListener("mouseleave", () => {
      item.style.setProperty("--rx", "0deg");
      item.style.setProperty("--ry", "0deg");
    });
  });
}

