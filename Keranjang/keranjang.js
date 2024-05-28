
//PRODUK 1
// Fungsi untuk mengupdate total harga setiap jenis barang
function updateTotal() {
    var totalHargaSemuaProduk = 0;
    var barangElements = document.querySelectorAll('.list-group-item-1');
    barangElements.forEach(function(barangElement) {
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-1').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity1').value);
        var totalPerProduk = hargaPerBarang * quantity;
        totalHargaSemuaProduk += totalPerProduk;
        barangElement.querySelector('.totalHargaPerProduk').textContent = totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    });
    document.getElementById('totalHargaSemuaProduk').textContent = totalHargaSemuaProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// Event listener untuk mengupdate total saat input quantity berubah
var quantityInputs = document.querySelectorAll('.quantity1');
quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        updateTotal();
    });
});

// Event listener untuk tombol hitung total harga
document.getElementById('hitung').addEventListener('click', function() {
    updateTotal();
});

// Fungsi untuk menampilkan total harga per produk saat tombol "Harga per produk" diklik
var hapusButtons = document.querySelectorAll('.hapus-1');
hapusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var barangElement = this.closest('.list-group-item-1');
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-1').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity1').value);
        var totalPerProduk = hargaPerBarang * quantity;
        alert("Total harga produk " + barangElement.querySelector('.barang-1').dataset.name + " adalah: " + totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
    });
});






//PRODUK 2
// Fungsi untuk mengupdate total harga setiap jenis barang
function updateTotal() {
    var totalHargaSemuaProduk = 0;
    var barangElements = document.querySelectorAll('.list-group-item-2');
    barangElements.forEach(function(barangElement) {
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-2').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity2').value);
        var totalPerProduk = hargaPerBarang * quantity;
        totalHargaSemuaProduk += totalPerProduk;
        barangElement.querySelector('.totalHargaPerProduk').textContent = totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    });
    document.getElementById('totalHargaSemuaProduk').textContent = totalHargaSemuaProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// Event listener untuk mengupdate total saat input quantity berubah
var quantityInputs = document.querySelectorAll('.quantity2');
quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        updateTotal();
    });
});

// Event listener untuk tombol hitung total harga
document.getElementById('hitung').addEventListener('click', function() {
    updateTotal();
});

// Fungsi untuk menampilkan total harga per produk saat tombol "Harga per produk" diklik
var hapusButtons = document.querySelectorAll('.hapus-2');
hapusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var barangElement = this.closest('.list-group-item-2');
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-2').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity2').value);
        var totalPerProduk = hargaPerBarang * quantity;
        alert("Total harga produk " + barangElement.querySelector('.barang-2').dataset.name + " adalah: " + totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
    });
});

//PRODUK 3
// Fungsi untuk mengupdate total harga setiap jenis barang
function updateTotal() {
    var totalHargaSemuaProduk = 0;
    var barangElements = document.querySelectorAll('.list-group-item-3');
    barangElements.forEach(function(barangElement) {
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-3').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity3').value);
        var totalPerProduk = hargaPerBarang * quantity;
        totalHargaSemuaProduk += totalPerProduk;
        barangElement.querySelector('.totalHargaPerProduk').textContent = totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    });
    document.getElementById('totalHargaSemuaProduk').textContent = totalHargaSemuaProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// Event listener untuk mengupdate total saat input quantity berubah
var quantityInputs = document.querySelectorAll('.quantity3');
quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        updateTotal();
    });
});

// Event listener untuk tombol hitung total harga
document.getElementById('hitung').addEventListener('click', function() {
    updateTotal();
});

// Fungsi untuk menampilkan total harga per produk saat tombol "Harga per produk" diklik
var hapusButtons = document.querySelectorAll('.hapus-3');
hapusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var barangElement = this.closest('.list-group-item-3');
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-3').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity3').value);
        var totalPerProduk = hargaPerBarang * quantity;
        alert("Total harga produk " + barangElement.querySelector('.barang-3').dataset.name + " adalah: " + totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
    });
});

//PRODUK 4
// Fungsi untuk mengupdate total harga setiap jenis barang
function updateTotal() {
    var totalHargaSemuaProduk = 0;
    var barangElements = document.querySelectorAll('.list-group-item-4');
    barangElements.forEach(function(barangElement) {
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-4').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity4').value);
        var totalPerProduk = hargaPerBarang * quantity;
        totalHargaSemuaProduk += totalPerProduk;
        barangElement.querySelector('.totalHargaPerProduk').textContent = totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    });
    document.getElementById('totalHargaSemuaProduk').textContent = totalHargaSemuaProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}

// Event listener untuk mengupdate total saat input quantity berubah
var quantityInputs = document.querySelectorAll('.quantity4');
quantityInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        updateTotal();
    });
});

// Event listener untuk tombol hitung total harga
document.getElementById('hitung').addEventListener('click', function() {
    updateTotal();
});

// Fungsi untuk menampilkan total harga per produk saat tombol "Harga per produk" diklik
var hapusButtons = document.querySelectorAll('.hapus-4');
hapusButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var barangElement = this.closest('.list-group-item-4');
        var hargaPerBarang = parseFloat(barangElement.querySelector('.text-website-4').dataset.price);
        var quantity = parseInt(barangElement.querySelector('.quantity4').value);
        var totalPerProduk = hargaPerBarang * quantity;
        alert("Total harga produk " + barangElement.querySelector('.barang-4').dataset.name + " adalah: " + totalPerProduk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }));
    });
});

  //INI PEMBATAS
  //menghitung total harga barang
  function calculateTotal() {
    // Mendapatkan elemen-elemen produk dari HTML
    var produk1 = document.querySelector('.list-group-item-1');
    var produk2 = document.querySelector('.list-group-item-2');
    var produk3 = document.querySelector('.list-group-item-3');
    var produk4 = document.querySelector('.list-group-item-4');

    // Mendapatkan nama, harga, dan kuantitas produk dari atribut data
    var namaProduk1 = produk1.querySelector('.barang-1').getAttribute('data-name');
    var hargaProduk1 = parseFloat(produk1.querySelector('.text-website-1').getAttribute('data-price'));
    var quantityProduk1 = parseInt(produk1.querySelector('.quantity1').value);

    var namaProduk2 = produk2.querySelector('.barang-2').getAttribute('data-name');
    var hargaProduk2 = parseFloat(produk2.querySelector('.text-website-2').getAttribute('data-price'));
    var quantityProduk2 = parseInt(produk2.querySelector('.quantity2').value);

    var namaProduk3 = produk3.querySelector('.barang-3').getAttribute('data-name');
    var hargaProduk3 = parseFloat(produk3.querySelector('.text-website-3').getAttribute('data-price'));
    var quantityProduk3 = parseInt(produk3.querySelector('.quantity3').value);

    var namaProduk4 = produk4.querySelector('.barang-4').getAttribute('data-name');
    var hargaProduk4 = parseFloat(produk4.querySelector('.text-website-4').getAttribute('data-price'));
    var quantityProduk4 = parseInt(produk4.querySelector('.quantity4').value);

    // Memastikan kuantitas minimal 1
    quantityProduk1 = Math.max(quantityProduk1, 1);
    quantityProduk2 = Math.max(quantityProduk2, 1);
    quantityProduk3 = Math.max(quantityProduk3, 1);
    quantityProduk4 = Math.max(quantityProduk4, 1);

    // Menghitung total harga untuk masing-masing produk
    var totalHargaProduk1 = hargaProduk1 * quantityProduk1;
    var totalHargaProduk2 = hargaProduk2 * quantityProduk2;
    var totalHargaProduk3 = hargaProduk3 * quantityProduk3;
    var totalHargaProduk4 = hargaProduk4 * quantityProduk4;

    // Menghitung total keseluruhan
    var totalHarga = totalHargaProduk1 + totalHargaProduk2 + totalHargaProduk3 + totalHargaProduk4;

    // Menampilkan hasil di dalam paragraf HTML
    var resultParagraph = document.getElementById("result");
    resultParagraph.innerHTML = "Total harga untuk " + quantityProduk1 + " " + namaProduk1 + " adalah " + totalHargaProduk1 + " dan total harga untuk " + quantityProduk2 + " " + namaProduk2 + " adalah " + totalHargaProduk2 
    + " dan total harga untuk " + quantityProduk3 + " " + namaProduk3 + " adalah " + totalHargaProduk3 
    + " dan total harga untuk " + quantityProduk4 + " " + namaProduk4 + " adalah " + totalHargaProduk4 +
    ". Total keseluruhan adalah " + totalHarga + ".";

    // Menampilkan hasil total harga di dalam elemen dengan id totalHarga
    var totalHargaElement = document.getElementById("totalHarga");
    totalHargaElement.innerHTML = "Total Harga: Rp" + totalHarga;

        // Membuat pesan WhatsApp
        var message = "Pesanan Anda:\n" + 
        namaProduk1 + " (x" + quantityProduk1 + ")\n" +
        namaProduk2 + " (x" + quantityProduk2 + ")\n" +
        namaProduk3 + " (x" + quantityProduk3 + ")\n" +
        namaProduk4 + " (x" + quantityProduk4 + ")\n" +
        "Total Harga: Rp" + totalHarga;

// Membuat URL untuk WhatsApp
var adminPhoneNumber = "6285788322061"; // Nomor WhatsApp admin
var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);

// Buka jendela WhatsApp
window.open(whatsappURL);

// Tampilkan tombol "Kembali"
document.getElementById("backButton").style.display = "block";
}
