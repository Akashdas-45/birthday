
/* =========================================
   HAPPY BIRTHDAY GHUSUR 💗
   Complete Birthday Website JavaScript
   ========================================= */

// 1. PERSONAL DETAILS
const birthdayName = "GHUSUR";

const captions = [
  "A little piece of happiness 💗",
  "That beautiful smile ✨",
  "A memory to keep forever 🌷",
  "Just being you is special 🦋",
  "One of my favourite moments 💕",
  "A little sunshine in life ☀️",
  "Simply unforgettable 🌸",
  "A moment worth remembering 🎀",
  "Keep smiling, always 💖",
  "A picture full of memories 📸",
  "Your own kind of magic ✨",
  "A day to remember 🌙",
  "Forever a lovely memory 💌",
  "Happiness looks good on you 🌷",
  "One more reason to smile 🫶",
  "A beautiful little moment 🎀",
  "Many more memories to come 💗"
];

document.title = `Happy Birthday ${birthdayName}! ❤️`;

const nameElement = document.getElementById("name");

if (nameElement) {
  nameElement.textContent = birthdayName;
}

// 2. CREATE TWINKLING STARS
const starsContainer = document.getElementById("stars");

if (starsContainer) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.animationDuration =
      1 + Math.random() * 3 + "s";

    starsContainer.appendChild(star);
  }
}

// 3. LOAD ALL 17 PHOTOS WITH CAPTIONS
const gallery = document.getElementById("gallery");

if (gallery) {
  for (let i = 0; i <= 16; i++) {
    const card = document.createElement("article");
    card.className = "photo-card";

    const frame = document.createElement("div");
    frame.className = "photo-frame";

    const img = document.createElement("img");

    // Your existing image filenames
    img.src = `pic${i}.jpeg`;
    img.alt = captions[i];
    img.loading = i < 6 ? "eager" : "lazy";

    img.onerror = () => {
      card.remove();
    };

    const caption = document.createElement("p");
    caption.className = "photo-caption";
    caption.textContent = captions[i];

    const number = document.createElement("span");
    number.className = "photo-number";
    number.textContent =
      `MEMORY ${String(i + 1).padStart(2, "0")}`;

    frame.appendChild(img);
    card.appendChild(frame);
    card.appendChild(caption);
    card.appendChild(number);

    gallery.appendChild(card);
  }
}

// 4. MULTIPLE PAGE NAVIGATION
const pageIds = ["page2", "page3", "page4", "page5"];

function showPage(pageId) {
  pageIds.forEach(id => {
    const page = document.getElementById(id);

    if (page) {
      page.classList.toggle("hidden", id !== pageId);
    }
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 5. OPEN THE FIRST GIFT
const giftButton = document.getElementById("gift");
const hero = document.getElementById("hero");
const content = document.getElementById("content");

if (giftButton) {
  giftButton.addEventListener("click", () => {
    hero.classList.add("hidden");
    content.classList.remove("hidden");

    showPage("page2");
    celebrate();
  });
}

// 6. EACH TAP OPENS THE NEXT PAGE
document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => {
    const nextPage = button.dataset.next;

    showPage(nextPage);
    celebrate();
  });
});

// 7. CONFETTI ANIMATION
const canvas = document.getElementById("confetti");
const ctx = canvas ? canvas.getContext("2d") : null;

let particles = [];
let animationId = null;

function resizeCanvas() {
  if (!canvas || !ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function celebrate() {
  if (!canvas || !ctx) return;

  cancelAnimationFrame(animationId);

  const colors = [
    "#ff91c8",
    "#ffdf9f",
    "#bba2ff",
    "#ffffff",
    "#7cebd5"
  ];

  particles = Array.from({ length: 180 }, () => ({
    x: Math.random() * window.innerWidth,
    y: -Math.random() * window.innerHeight,
    size: Math.random() * 7 + 3,
    speed: Math.random() * 3 + 2,
    drift: (Math.random() - 0.5) * 3,
    rotation: Math.random() * 360,
    spin: (Math.random() - 0.5) * 8,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  function draw() {
    ctx.clearRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    particles = particles.filter(
      p => p.y < window.innerHeight + 20
    );

    particles.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rotation += p.spin;

      ctx.save();

      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);

      ctx.fillStyle = p.color;
      ctx.fillRect(
        -p.size / 2,
        -p.size / 2,
        p.size,
        p.size * 1.5
      );

      ctx.restore();
    });

    if (particles.length > 0) {
      animationId = requestAnimationFrame(draw);
    } else {
      ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
      );
    }
  }

  draw();
}

// 8. FINAL PAGE: CELEBRATE AGAIN
const celebrateButton = document.getElementById("celebrate");

if (celebrateButton) {
  celebrateButton.addEventListener("click", () => {
    celebrate();
  });
}

// 9. RESTART THE ENTIRE BIRTHDAY JOURNEY
const restartButton = document.getElementById("restart");

if (restartButton) {
  restartButton.addEventListener("click", () => {
    content.classList.add("hidden");
    hero.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
