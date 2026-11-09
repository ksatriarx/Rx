// ============================================
// Rx! — Data Film (Updated with Video)
// ============================================

const MOVIES = [
  {
    "id": 1,
    "title": "Bayangan Terakhir",
    "genre": "Thriller",
    "year": 2024,
    "rating": 8.5,
    "duration": "1j 52m",
    "img": "noir detective silhouette rainy city night dramatic lighting thriller movie poster cinematic",
    "synopsis": "Seorang detektif insomnia mengejar pelaku pembunuhan yang selalu selangkah di depan — dan mulai meragukan apakah dirinya sendiri bagian dari kejahatan itu.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 2,
    "title": "Langit Senja",
    "genre": "Drama",
    "year": 2023,
    "rating": 7.8,
    "duration": "1j 41m",
    "img": "two friends golden hour sunset dramatic orange sky emotional cinematic drama movie poster",
    "synopsis": "Dua sahabat masa kecil bertemu kembali di kota tua, mempertanyakan pilihan hidup yang memisahkan mereka sepuluh tahun lalu.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 3,
    "title": "Operasi Fajar",
    "genre": "Action",
    "year": 2024,
    "rating": 8.1,
    "duration": "2j 03m",
    "img": "elite tactical soldier dawn operation rescue mission explosion action movie poster cinematic",
    "synopsis": "Tim elit penyelamat sandera harus membobol gedung 40 lantai dalam 90 menit sebelum bom terakhir meledak.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 4,
    "title": "Rumah di Ujung Jalan",
    "genre": "Horror",
    "year": 2023,
    "rating": 7.2,
    "duration": "1j 36m",
    "img": "creepy old abandoned house end of dark street foggy night horror movie poster atmospheric",
    "synopsis": "Keluarga pindah ke rumah warisan yang menyimpan kebiasaan aneh: setiap pukul 3 pagi, pintu depan terbuka sendiri.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 5,
    "title": "Cinta dalam Kode",
    "genre": "Romance",
    "year": 2024,
    "rating": 8.0,
    "duration": "1j 48m",
    "img": "female programmer neon screen holographic AI face romance cyberpunk couple cinematic movie poster",
    "synopsis": "Seorang programmer menciptakan AI yang jatuh cinta padanya — dan kini harus memilih antara manusia dan ciptaannya.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 6,
    "title": "Nusantara Rising",
    "genre": "Adventure",
    "year": 2024,
    "rating": 8.7,
    "duration": "2j 12m",
    "img": "ancient lost temple borneo jungle expedition adventurers torch adventure movie poster cinematic",
    "synopsis": "Ekspedisi lima remaja menembus hutan Kalimantan untuk menemukan kota yang hilang dari peta abad ke-14.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 7,
    "title": "Hujan Bulan Juni",
    "genre": "Drama",
    "year": 2022,
    "rating": 7.9,
    "duration": "1j 44m",
    "img": "romantic rain june love letter vintage indonesian couple dramatic sky drama movie poster cinematic",
    "synopsis": "Sepucuk surat yang tertunda 20 tahun menyatukan kembali dua orang yang dulu saling mencintai namun tak pernah berterus terang.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 8,
    "title": "The Last Signal",
    "genre": "Sci-Fi",
    "year": 2024,
    "rating": 8.3,
    "duration": "1j 58m",
    "img": "astronaut space station looking at earth last signal vast darkness sci-fi movie poster cinematic",
    "synopsis": "Stasiun luar angkasa menerima sinyal terakhir dari Bumi yang sudah tak lagi mengirim kabar. Apa yang mereka temukan lebih buruk dari keheningan.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 9,
    "title": "Jejak di Salju",
    "genre": "Mystery",
    "year": 2023,
    "rating": 7.5,
    "duration": "1j 39m",
    "img": "footprints in snow frozen lake mysterious mountain fog winter mystery movie poster cinematic",
    "synopsis": "Di desa pegunungan, seorang pendaki hilang tanpa jejak — kecuali sepasang tapak kaki yang berhenti di tengah danau beku.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 10,
    "title": "Komedi Malam",
    "genre": "Comedy",
    "year": 2024,
    "rating": 7.0,
    "duration": "1j 32m",
    "img": "friends hanging out midnight coffee shop warm lights laughing comedy movie poster cinematic",
    "synopsis": "Tiga sahabat membuka warung kopi 24 jam dan menghadapi pelanggan paling absurd di kota — setiap malam.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 11,
    "title": "Perang Bintang Nusantara",
    "genre": "Sci-Fi",
    "year": 2025,
    "rating": 8.9,
    "duration": "2j 18m",
    "img": "epic space battle starships alien invasion above tropical archipelago islands sci-fi movie poster cinematic",
    "synopsis": "Tahun 2150, armada penjajah menemukan bahwa kepulauan terpencil di Bumi menyimpan teknologi leluhur yang bisa membalikkan perang.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  },
  {
    "id": 12,
    "title": "Sunyi",
    "genre": "Horror",
    "year": 2024,
    "rating": 7.6,
    "duration": "1j 45m",
    "img": "dark empty hospital corridor night nurse silhouette ghostly horror movie poster atmospheric cinematic",
    "synopsis": "Seorang perawat malam di rumah sakit tua mulai mendengar bisikan dari ruang yang seharusnya kosong.",
    "video": "https://www.youtube.com/embed/5qap5aO4i9A"
  }
];
