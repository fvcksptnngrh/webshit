// Semua link sementara pakai '#' agar mudah kamu ganti ke rute internal.
export const footerSections = [
  {
    id: 'cust',
    title: 'Layanan Pelanggan',
    links: [
      { label: 'Pertanyaan Umum', to: '#' },
      { label: 'Cara Belanja', to: '#' },
      { label: 'A-Poin', to: '#' },
      { label: 'Gratis Ongkir', to: '#' },
      { label: 'Beli Voucher', to: '#' }
    ]
  },
  {
    id: 'explore',
    title: 'Jelajahi Alfagift',
    links: [
      { label: 'Tentang Alfagift', to: '#' },
      { label: 'Syarat & Ketentuan', to: '#' },
      { label: 'Kebijakan Privasi', to: '#' },
      { label: 'Karir', to: '#' },
      { label: 'Blog', to: '#' }
    ]
  }
]

// Logo metode pembayaran (nama file sesuai di /static)
export const paymentLogos = [
  { alt: 'COD', src: '/COD.png' },
  { alt: 'BCA', src: '/BCA.png' },
  { alt: 'Mandiri', src: '/Mandiri.png' },
  { alt: 'Kartu Kredit', src: '/Credit_Card.png' }
]

// (Opsional) logo layanan pengiriman – ganti sesuai file kamu (placeholder)
export const shippingLogos = [
  { alt: 'Kurir Alfamart', src: '/layanan-Pengiriman.webp' } // edit / hapus jika belum ada
]

// Ikon sosial (file di /static). Pastikan nama file sesuai.
export const socialLinks = [
  { label: 'Facebook', src: '/Facebook.png', to: '#' },
  { label: 'Twitter', src: '/Twitter.png', to: '#' },
  { label: 'Instagram', src: '/Instagram.png', to: '#' }
]

// Badge store (ganti nama file sesuai yang kamu punya)
export const storeBadges = [
  { alt: 'Google Play', src: '/play-store-btn.png', to: '#' },
  { alt: 'App Store', src: '/app-store-btn.png', to: '#' }
]

// Info pengaduan konsumen
export const complaintInfo = {
  company: 'PT. Sumber Alfaria Trijaya, Tbk',
  emailLabel: 'Email',
  email: 'alfacare@sat.co.id',
  callCenterLabel: 'Call Center',
  callCenter: '1500-959',
  ministryLine1: 'Direktorat Jenderal Perlindungan Konsumen',
  ministryLine2: 'dan Tertib Niaga Kementerian Perdagangan',
  ministryLine3: 'Republik Indonesia',
  whatsapp: 'Whatsapp Ditjen PKTN: 0853 1111 1010'
}

// Hubungi kami (ikon bisa pakai gambar atau biarkan teks)
export const contactInfo = {
  email: 'alfacare@sat.co.id',
  phone: '1500-959'
}