// Ambil elemen-elemen dari DOM
const countdownElement = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Tanggal mulai: Hari ini
const startDate = new Date();

// Tanggal berakhir: Besok (24 jam dari sekarang)
const endDate = new Date();
// endDate.setDate(startDate.getDate() + 1); //Tambah 1 hari

function updateCountdown() {
  const currentDate = new Date();

  // Jika tanggal saat ini masih sebelum tanggal mulai
  if (currentDate < startDate) {
    countdownElement.innerHTML = '<strong>Countdown belum dimulai.</strong>';
    return;
  }

  // Jika tanggal saat ini melewati tanggal berakhir
  if (currentDate >= endDate) {
    countdownElement.innerHTML = '<strong>Countdown selesai!</strong>';
    return;
  }

  // Hitung selisih waktu antara tanggal saat ini dan tanggal berakhir
  const timeDifference = endDate - currentDate;

  // Konversi selisih waktu ke hari, jam, menit, dan detik
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Tampilkan hasilnya
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Perbarui countdown setiap 1 detik
setInterval(updateCountdown, 1000);

// Jalankan sekali di awal untuk menghindari delay tampilan
updateCountdown();
