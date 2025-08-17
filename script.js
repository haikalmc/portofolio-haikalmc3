// Script bisa dikembangkan, misalnya interaksi tombol, animasi, dll.
console.log("Website portofolio berhasil dimuat!");

//lampu
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

const timeline = document.getElementById("timeline");
window.addEventListener("scroll", () => {
  const top = timeline.getBoundingClientRect().top;
  if (top < window.innerHeight - 100) {
    timeline.classList.add("show");
  }
});

const hour = new Date().getHours();
if (hour >= 18 || hour <= 6) toggleDarkMode();

  let isRevealed = false;

  function toggleNumber() {
    const waNumber = document.getElementById('wa-number');
    const eyeIcon = document.getElementById('eye-icon');

    // Mulai fade out
    waNumber.classList.add('fade-out');

    // Setelah fade out selesai (300ms), ganti teks dan fade in lagi
    setTimeout(() => {
      if (isRevealed) {
        waNumber.innerText = '08********';
        eyeIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/visible--v1.png';
      } else {
        waNumber.innerText = '0857-6763-4002'; // ← Ganti ini dengan nomor asli kamu
        eyeIcon.src = 'https://img.icons8.com/ios-glyphs/30/000000/invisible--v1.png';
      }

      // Fade in
      waNumber.classList.remove('fade-out');
      isRevealed = !isRevealed;
    }, 300);
  }

 let counter = localStorage.getItem('visitCount') || 0;
  counter++;
  localStorage.setItem('visitCount', counter);
  document.getElementById('counter').innerText = counter;


  function toggleForm() {
    const form = document.getElementById("testimoniForm");
    form.style.display = (form.style.display === "none") ? "block" : "none";
  }

  document.getElementById("testimoniForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    const baru = document.createElement("div");
    baru.className = "quote";
    baru.innerHTML = `"${pesan}" <br>— ${nama}`;

    document.getElementById("testimoniBaru").prepend(baru);

    // Reset form
    this.reset();
    this.style.display = "none";
  });

const toggle = document.getElementById('onlineToggle');
const statusText = document.getElementById('onlineStatus');

// Load dari localStorage
if (localStorage.getItem('isOnline') === 'true') {
  toggle.checked = true;
  statusText.textContent = '🟢 Aku sedang online!';
}

// Ubah saat diklik
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    statusText.textContent = '🟢 Aku sedang online!';
    localStorage.setItem('isOnline', 'true');
  } else {
    statusText.textContent = '🔴 Lagi offline... jangan ganggu 😴';
    localStorage.setItem('isOnline', 'false');
  }
});

/// Saat halaman dimuat, tampilkan domisili yang tersimpan
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('domisili');
  if (saved) {
    document.getElementById('domisili-text').textContent = saved;
  }
});

function ubahDomisili() {
  const lokasi = prompt("Masukkan kota domisili kamu:");
  if (lokasi && lokasi.trim() !== "") {
    localStorage.setItem('domisili', lokasi.trim());
    document.getElementById('domisili-text').textContent = lokasi.trim();
    // Tambahan animasi (opsional)
    document.getElementById('domisili-text').style.opacity = 0;
    setTimeout(() => {
      document.getElementById('domisili-text').style.opacity = 1;
    }, 200);
  }
}

