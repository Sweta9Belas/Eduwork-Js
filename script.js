let nama = prompt("Masukkan nama anda:");
let angka = prompt("Masukkan nilai anda: ");

function konversi(nama, angka) {
  if (angka == null || angka == "") {
    alert("input kosong");
  } else if (angka >= 101) {
    alert("Rentan nilai dari 1-100. Masukkan nilai yang benar");
  } else if (100 <= angka || angka >= 90) {
    alert("Selamat anda mendapat nilai A");
  } else if (89 <= angka || angka >= 70) {
    alert("Nilai anda B");
  } else {
    alert("Nilai anda C");
  }
}

konversi(nama, angka);
alert;
