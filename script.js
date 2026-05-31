// ========================
// LANGUAGE DATA
// ========================

const letters = {
  fr: {
    title: "À Notre Chère Zietta",

    text: `

Ma chère Zietta,

Il y a quatre ans,
une lumière a commencé à briller.

Peut-être que personne ne savait
jusqu'où cette lumière irait.

Mais aujourd'hui,
elle illumine encore le cœur
de tant d'Elice.

Merci pour chaque sourire.

Merci pour chaque stream.

Merci pour chaque souvenir.

Merci pour chaque Hatto.

Quatre années se sont écoulées,
mais ta lumière continue
de briller davantage.

Merci pour tout.

Joyeux 4ème anniversaire de début.

Avec amour,

Elice ❤️
`,
  },

  en: {
    title: "To Our Dearest Zietta",

    text: `

My Dear Zietta,

Four years ago,
a light began to shine.

Perhaps nobody knew
how far that light would reach.

Yet today,
it still brightens the hearts
of countless Elice.

Thank you for every smile.

Thank you for every stream.

Thank you for every memory.

Thank you for every Hatto.

Four years have passed,
but your light continues
to shine brighter.

Thank you for everything.

Happy 4th Anniversary Debut.

With Love,

Elice ❤️
`,
  },

  id: {
    title: "Untuk Zietta Tercinta",

    text: `

Zietta yang kami sayangi,

Empat tahun lalu,
sebuah cahaya mulai bersinar.

Mungkin saat itu
belum ada yang tahu
sejauh apa cahaya itu
akan menjangkau.

Namun hari ini,
cahaya itu masih menerangi
hati begitu banyak Elice.

Terima kasih
untuk setiap senyuman.

Terima kasih
untuk setiap stream.

Terima kasih
untuk setiap kenangan.

Terima kasih
untuk setiap Hatto.

Empat tahun telah berlalu,
namun sinarmu terus bersinar
lebih terang dari sebelumnya.

Selamat 4th Anniversary Debut.

Semoga kebahagiaan,
kesehatan,
dan impian indah
selalu menyertaimu.

Dengan penuh kasih,

Elice ❤️
`,
  },
};

// ========================
// ELEMENTS
// ========================

const envelope = document.getElementById("envelope");

const typed = document.getElementById("typed-text");

const bgm = document.getElementById("bgm");

const letterTitle = document.getElementById("letter-title");

// ========================
// STATE
// ========================

let started = false;
let currentLanguage = "fr";
let typingTimeout;
let i = 0;

// ========================
// LOADING SCREEN
// ========================

window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";

    startCountdown();
  }, 5000);
};

// ========================
// COUNTDOWN
// ========================

function startCountdown() {
  const countdownScreen = document.getElementById("countdown-screen");

  const countdown = document.getElementById("countdown");

  let count = 3;

  countdown.innerText = count;

  const timer = setInterval(() => {
    count--;

    if (count <= 0) {
      clearInterval(timer);

      countdownScreen.style.display = "none";

      document.getElementById("main-content").style.display = "block";

      return;
    }

    countdown.innerText = count;
  }, 1000);
}

// ========================
// OPEN ENVELOPE
// ========================

envelope.addEventListener("click", () => {
  if (started) return;

  started = true;

  envelope.classList.add("open");

  bgm.play();

  startTyping();
});

// ========================
// TYPING EFFECT
// ========================

function startTyping() {
  clearTimeout(typingTimeout);

  typed.innerHTML = "";

  i = 0;

  const text = letters[currentLanguage].text;

  letterTitle.innerText = letters[currentLanguage].title;

  function type() {
    if (i < text.length) {
      typed.innerHTML += text.charAt(i);

      i++;

      typingTimeout = setTimeout(type, 25);
    }
  }

  type();
}

// ========================
// LANGUAGE SWITCH
// ========================

function changeLanguage(lang) {
  currentLanguage = lang;

  if (started) {
    startTyping();
  }
}

// ========================
// SAKURA EFFECT
// ========================

function createSakura() {
  const sakura = document.createElement("div");

  sakura.innerHTML = "🌸";

  sakura.style.position = "fixed";

  sakura.style.top = "-20px";

  sakura.style.left = Math.random() * 100 + "vw";

  sakura.style.fontSize = 20 + Math.random() * 15 + "px";

  sakura.style.pointerEvents = "none";

  sakura.style.zIndex = "999";

  document.body.appendChild(sakura);

  let y = -20;

  const drift = Math.random() * 2 - 1;

  const fall = setInterval(() => {
    y += 2;

    sakura.style.top = y + "px";

    sakura.style.left = parseFloat(sakura.style.left) + drift + "px";

    if (y > window.innerHeight) {
      clearInterval(fall);

      sakura.remove();
    }
  }, 30);
}

setInterval(createSakura, 350);

// ========================
// STAR EFFECT
// ========================

const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");

  star.style.position = "absolute";

  star.style.width = "2px";
  star.style.height = "2px";

  star.style.background = "white";

  star.style.borderRadius = "50%";

  star.style.top = Math.random() * 100 + "%";

  star.style.left = Math.random() * 100 + "%";

  star.style.opacity = Math.random();

  star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;

  stars.appendChild(star);
}

const style = document.createElement("style");

style.innerHTML = `

@keyframes twinkle{

0%{
opacity:.2;
}

50%{
opacity:1;
}

100%{
opacity:.2;
}

}

`;

document.head.appendChild(style);

// ========================
// FINAL BUTTON
// ========================

document.getElementById("finalBtn").addEventListener("click", () => {
  alert(
    `❤️ Hatto ❤️

No matter how many years pass,

Elice will always
be here for you.

Happy 4th Anniversary,
Zietta.`,
  );
});
