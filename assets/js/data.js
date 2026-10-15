/* ===== GhoulNet — data.js =====
   Edit file ini untuk mengganti paket, harga, nomor WhatsApp, dan wilayah.
   PENTING: harga bertanda "contoh" hanya ilustrasi — sesuaikan dengan harga resmi. */

const SITE = {
  wa: '6281234567890',               // ganti dengan nomor WhatsApp resmi (format 62...)
  email: 'home_care@ghoulnetnetworks.com',
  hotline: '1500933',
  address: 'MidPlaza 2, 8th Floor, Jl. Jendral Sudirman Kav 10-11, Jakarta 10220 – Indonesia',

  /* Video background hero.
     - youtube: ID video YouTube (bagian setelah "v=" pada link). Kosongkan jika tidak dipakai.
     - mp4: nama file video lokal (mis. 'trailer.mp4'), diutamakan jika diisi.
     Saat ini berisi trailer Tokyo Ghoul: Jail (satu-satunya ID trailer yang saya temukan).
     Ganti dengan ID trailer anime/film resmi yang Anda inginkan. */
  heroVideo: { youtube: '5BWzvWmav_I', mp4: 'trailer.mp4' }
};

const PACKAGES = [
  {
    id: 'ion-bebas', brand: 'ion', name: 'ION Bebas Internet', tag: 'Tanpa batas kuota', accent: '#2c64ff',
    desc: 'Internet sepuasnya untuk streaming, game, dan kerja dari rumah tanpa takut kuota habis.',
    perks: ['Tanpa batas kuota (unlimited)', 'Modem WiFi disediakan', 'Instalasi oleh teknisi resmi'],
    plans: [
      { mbps: 60,  price: 199000 },
      { mbps: 100, price: 249000, pop: true },
      { mbps: 150, price: 299000 }
    ]
  },
  {
    id: 'ion-jabar', brand: 'ion', name: 'ION Jawa Barat', tag: 'Promo Jawa Barat', accent: '#e0172b',
    desc: 'Pilihan kecepatan paling lengkap dari 20 sampai 500 Mbps, khusus wilayah Jawa Barat.',
    perks: ['Tanpa batas kuota', 'Cocok untuk keluarga', 'Gratis biaya pasang untuk promo tertentu'],
    plans: [
      { mbps: 20,  price: 169000 },
      { mbps: 35,  price: 199000 },
      { mbps: 45,  price: 229000 },
      { mbps: 100, price: 309000, pop: true },
      { mbps: 200, price: 429000 },
      { mbps: 300, price: 589000 },
      { mbps: 500, price: 1109000 }
    ]
  },
  {
    id: 'satu-fiber', brand: 'satu', name: 'Satu Fiber', tag: 'Internet + kuota seluler', accent: '#ff8a1f',
    desc: 'Satu paket untuk internet di rumah dan di mana saja, sudah termasuk kuota seluler.',
    perks: ['Fiber optik stabil', 'Bonus kuota seluler 25 GB', 'Satu tagihan untuk semua'],
    plans: [
      { mbps: 50,  price: 334000, pop: true, extra: '+ 25 GB kuota seluler' },
      { mbps: 100, price: 450000, extra: '+ 50 GB kuota seluler' }
    ]
  },
  {
    id: 'wifi-rumah', brand: 'satu', name: 'WiFi Rumah', tag: '#NgebutSepuasnya', accent: '#62c6ff',
    desc: 'Tiga pilihan paket untuk Value, Smart, dan Family — pilih yang sesuai isi rumah Anda.',
    perks: ['Kecepatan simetris stabil', 'Cocok untuk 3–8 perangkat', 'Dukungan teknisi 24 jam'],
    plans: [
      { mbps: 30,  price: 254190, extra: 'Value' },
      { mbps: 50,  price: 271950, pop: true, extra: 'Smart' },
      { mbps: 100, price: 409590, extra: 'Family' }
    ]
  }
];

/* Wilayah layanan (berdasarkan daftar saluran di desain referensi) */
const COVERAGE = {
  'Sumatera Utara': { kab: ['Asahan','Batu Bara','Labuhanbatu','Labuhanbatu Selatan','Labuhanbatu Utara','Serdang Bedagai','Deli Serdang'], kota: ['Tanjungbalai','Binjai','Medan'] },
  'Sumatera Barat': { kab: ['Lima Puluh Kota','Padang Pariaman'], kota: ['Bukittinggi','Padang Panjang','Pariaman','Payakumbuh','Padang'] },
  'Sumatera Selatan': { kab: ['Musi Banyuasin','Banyuasin','Ogan Komering Ilir'], kota: ['Palembang'] },
  'Bangka Belitung': { kab: ['Bangka','Bangka Barat'], kota: ['Pangkal Pinang'] },
  'Bengkulu': { kab: [], kota: ['Bengkulu'] },
  'Jambi': { kab: ['Muaro Jambi','Tanjung Jabung Barat'], kota: ['Jambi'] },
  'Kepulauan Riau': { kab: [], kota: ['Batam'] },
  'Riau': { kab: ['Indragiri Hilir','Indragiri Hulu','Kampar','Pelalawan','Rokan Hilir','Siak','Bengkalis'], kota: ['Dumai','Pekanbaru'] },
  'Lampung': { kab: ['Lampung Selatan','Lampung Tengah','Lampung Timur','Mesuji','Pesawaran','Tulang Bawang'], kota: ['Bandar Lampung','Metro'] },
  'DKI Jakarta': { kab: [], kota: ['Jakarta Barat','Jakarta Pusat','Jakarta Selatan','Jakarta Timur','Jakarta Utara'] },
  'Banten': { kab: ['Lebak','Pandeglang','Serang','Tangerang'], kota: ['Cilegon','Serang','Tangerang','Tangerang Selatan'] },
  'DI Yogyakarta': { kab: ['Bantul','Gunungkidul','Kulon Progo','Sleman'], kota: ['Yogyakarta'] },
  'Jawa Barat': {
    kab: ['Bandung','Bandung Barat','Bekasi','Bogor','Cianjur','Cirebon','Garut','Indramayu','Karawang','Kuningan','Majalengka','Purwakarta','Subang','Sukabumi','Sumedang','Tasikmalaya'],
    kota: ['Bandung','Banjar','Bekasi','Bogor','Cimahi','Cirebon','Depok','Sukabumi','Tasikmalaya']
  },
  'Jawa Tengah': {
    kab: ['Banjarnegara','Banyumas','Batang','Blora','Brebes','Cilacap','Grobogan','Jepara','Karanganyar','Kebumen','Kendal','Klaten','Kudus','Magelang','Pati','Pekalongan','Pemalang','Purbalingga','Purworejo','Rembang','Semarang','Sragen','Sukoharjo','Tegal','Temanggung','Wonosobo'],
    kota: ['Magelang','Pekalongan','Salatiga','Semarang','Surakarta','Tegal']
  },
  'Jawa Timur': {
    kab: ['Banyuwangi','Blitar','Bojonegoro','Bondowoso','Gresik','Jember','Jombang','Kediri','Lamongan','Lumajang','Madiun','Magetan','Malang','Mojokerto','Nganjuk','Ngawi','Pacitan','Pasuruan','Ponorogo','Probolinggo','Sidoarjo','Situbondo','Trenggalek','Tuban','Tulungagung'],
    kota: ['Batu','Blitar','Kediri','Madiun','Malang','Mojokerto','Pasuruan','Probolinggo','Surabaya']
  },
  'Bali': { kab: ['Badung','Bangli','Buleleng','Gianyar','Jembrana','Karangasem','Klungkung','Tabanan'], kota: ['Denpasar'] },
  'Kalimantan Barat': { kab: ['Kubu Raya','Mempawah','Sambas'], kota: ['Pontianak','Singkawang'] },
  'Kalimantan Selatan': { kab: ['Banjarbaru','Tanah Bumbu','Tanah Laut'], kota: ['Banjarmasin'] },
  'Kalimantan Tengah': { kab: ['Kapuas','Pulang Pisau'], kota: ['Palangkaraya'] },
  'Kalimantan Timur': { kab: [], kota: ['Balikpapan','Samarinda'] },
  'Sulawesi Selatan': { kab: ['Gowa'], kota: ['Makassar'] },
  'Sulawesi Utara': { kab: ['Minahasa Utara'], kota: ['Bitung','Manado'] },
  'Nusa Tenggara Barat': { kab: [], kota: ['Mataram'] },
  'Nusa Tenggara Timur': { kab: ['Manggarai Barat'], kota: ['Kupang'] }
};
