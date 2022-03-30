// penampungan angka random oleh komputer
let kom = Math.floor(Math.random() * 3) + 1;
let skorSatu;

// menjelaskan peraturan permainan yang akan dilaksanakan
function peraturanGame() {
  alert(
    "Selamat datang di Game tebak angka versi Gde Nanda \nDalam permainan ini ada beberapa peraturan antara lain: \n-Permainan terdiri dari 2 pemain \n-Masukkan angka dari 1-3 \n-Yang menebak dengan tepat ialah pemenangnya \n***Selamat Bermain***"
  );
}

//input nama pemain
function persiapanGame() {
  if (pemainSatu == null || pemainSatu == "") {
    alert("Pemain 1 input tidak boleh kosong. Harap masukkan nama anda!!!");
  } else if (pemainDua == null || pemainDua == "") {
    alert("Pemain 2 input tidak boleh kosong. Harap masukkan nama anda!!!");
  } else {
    alert("Selamat bermain. \nSilahkan dipilih angka dari 1 - 3.");
  }
  return;
}

// input angka pemain
function validasiGame() {
  if (angkaSatu == null || angkaSatu == "" || angkaSatu >= 4 || angkaSatu == 0) {
    alert(pemainSatu + " input tidak boleh kosong atau huruf. Harap masukkan hanya angka saja");
  } else if (angkaDua == null || angkaDua == "" || angkaDua >= 4 || angkaDua == 0) {
    alert(pemainDua + " input tidak boleh kosong atau huruf. Harap masukkan hanya angka saja");
  }
  if (kom == angkaSatu && kom != angkaDua) {
    alert("Selamat " + pemainSatu + " menang");
  } else if (kom != angkaSatu && kom == angkaDua) {
    alert("Selamat " + pemainDua + " menang");
  } else {
    alert("Para pemain seri");
  }
  return;
}

// pemanggilan function
peraturanGame();

// proses masukkan nama pemain dan angka
let pemainSatu = prompt("Masukkan nama anda pemain 1:");
let pemainDua = prompt("Masukkan nama anda pemain 2:");
persiapanGame();

let angkaSatu = prompt("Masukkan angka anda pemain 1:");
let angkaDua = prompt("Masukkan angka anda pemain 2:");
validasiGame();
