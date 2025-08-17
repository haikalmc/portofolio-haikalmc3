// --- Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyDuGMOOMeSB5d_gCI9ucYodaXBaPQ2kgdw",
  authDomain: "portofolio-haikalmc3.firebaseapp.com",
  databaseURL: "https://portofolio-haikalmc3-default-rtdb.firebaseio.com", // penting buat Realtime DB
  projectId: "portofolio-haikalmc3",
  storageBucket: "portofolio-haikalmc3.firebasestorage.app",
  messagingSenderId: "889359136238",
  appId: "1:889359136238:web:7b417fd0299e60bbdb0aff",
  measurementId: "G-TKMJXMRK7D"
};

// --- Inisialisasi Firebase ---
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- Fungsi kirim testimoni ---
function kirimTestimoni() {
  const data = {
    nama: "Pengunjung",
    pesan: "Website keren banget! 😍",
    waktu: new Date().toLocaleString()
  };

  db.ref("testimoni").push(data)
    .then(() => {
      alert("Testimoni terkirim!");
    })
    .catch(err => {
      console.error("Gagal:", err);
      alert("Gagal mengirim testimoni!");
    });
}




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

function ambilTestimoni() {
  db.ref("testimoni").on("value", snapshot => {
    const container = document.getElementById("listTestimoni");
    container.innerHTML = "";
    snapshot.forEach(child => {
      const item = child.val();
      const div = document.createElement("div");
      div.innerHTML = `<p><b>${item.nama}</b>: ${item.pesan} <br><small>${item.waktu}</small></p>`;
      container.appendChild(div);
    });
  });
}

// panggil saat halaman load
window.onload = ambilTestimoni;




