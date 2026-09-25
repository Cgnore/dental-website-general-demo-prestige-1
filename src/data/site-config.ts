export const siteConfig = {
  // Clinic Info
  clinicName: "DentLux Ağız ve Diş Sağlığı",
  clinicShortName: "DentLux",
  tagline: "Gülüşünüzü Tasarlıyoruz",
  description:
    "İstanbul'un kalbinde, son teknoloji ile donatılmış kliniğimizde uzman kadromuzla gülüşünüzü yeniden tasarlıyoruz.",

  // Doctor Info
  doctor: {
    name: "Dr. Elif Yılmaz",
    title: "Diş Hekimi | Estetik Diş Uzmanı",
    bio: "15 yılı aşkın deneyimiyle, estetik diş hekimliği ve implantoloji alanında uzmanlaşmış olan Dr. Elif Yılmaz, binlerce hastanın gülüşünü yeniden tasarlamıştır. İstanbul Üniversitesi Diş Hekimliği Fakültesi mezunu olup, uluslararası kongrelerde konuşmacı olarak yer almaktadır.",
    image: "/images/doctor-placeholder.jpg",
    experience: 15,
    patientsCount: 5000,
    treatmentsCount: 12000,
    rating: 4.9,
  },

  // Contact Info
  contact: {
    phone: "+90 212 555 0123",
    email: "info@dentlux.com",
    address:
      "Nişantaşı, Abdi İpekçi Cad. No:42/A, 34367 Şişli/İstanbul",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1!2d28.9!3d41.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAzJzAwLjAiTiAyOMKwNTQnMDAuMCJF!5e0!3m2!1sen!2str!4v1",
  },

  // Working Hours
  workingHours: [
    { day: "Pazartesi", hours: "09:00 - 19:00" },
    { day: "Salı", hours: "09:00 - 19:00" },
    { day: "Çarşamba", hours: "09:00 - 19:00" },
    { day: "Perşembe", hours: "09:00 - 19:00" },
    { day: "Cuma", hours: "09:00 - 19:00" },
    { day: "Cumartesi", hours: "10:00 - 16:00" },
    { day: "Pazar", hours: "Kapalı" },
  ],

  // Services
  services: [
    {
      id: "implant",
      title: "İmplant Tedavisi",
      description:
        "Eksik dişleriniz için en doğal ve dayanıklı çözüm. Titanyum implantlarla kalıcı gülüşler yaratıyoruz.",
      icon: "Crosshair",
      features: [
        "Titanyum İmplant",
        "3D Planlama",
        "Ağrısız Uygulama",
        "Ömür Boyu Garanti",
      ],
    },
    {
      id: "estetik",
      title: "Estetik Diş Hekimliği",
      description:
        "Hollywood Smile, veneer, bonding ve diş beyazlatma ile hayalinizdeki gülüşe kavuşun.",
      icon: "Sparkles",
      features: [
        "Hollywood Smile",
        "Porselen Veneer",
        "Diş Beyazlatma",
        "Gülüş Tasarımı",
      ],
    },
    {
      id: "ortodonti",
      title: "Ortodonti",
      description:
        "Şeffaf plak ve modern braket sistemleri ile dişlerinizi ideal konuma getiriyoruz.",
      icon: "AlignCenter",
      features: [
        "Şeffaf Plak",
        "Metal Braket",
        "Seramik Braket",
        "Hızlı Tedavi",
      ],
    },
    {
      id: "cerrahi",
      title: "Ağız ve Çene Cerrahisi",
      description:
        "Gömülü diş çekimi, çene cerrahisi ve sinüs lifting operasyonlarında uzman ekibimiz.",
      icon: "ShieldPlus",
      features: [
        "Gömülü Diş Çekimi",
        "Çene Cerrahisi",
        "Sinüs Lifting",
        "Kemik Grefti",
      ],
    },
    {
      id: "pedodonti",
      title: "Çocuk Diş Hekimliği",
      description:
        "Çocuklarınızın diş sağlığını korumak için özel tasarlanmış, eğlenceli ve korkusuz tedavi ortamı.",
      icon: "Heart",
      features: [
        "Koruyucu Tedavi",
        "Fissür Örtücü",
        "Flor Uygulaması",
        "Eğlenceli Ortam",
      ],
    },
    {
      id: "endodonti",
      title: "Kanal Tedavisi",
      description:
        "Mikroskop altında hassas kanal tedavisi ile dişlerinizi kurtarıyoruz.",
      icon: "Microscope",
      features: [
        "Mikroskobik Tedavi",
        "Tek Seansta",
        "Ağrısız İşlem",
        "Başarı Garantisi",
      ],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Ayşe K.",
      treatment: "İmplant Tedavisi",
      text: "Dr. Elif Yılmaz'a implant tedavim için başvurdum. Sonuç muhteşem! Hiç ağrı hissetmedim ve dişlerim tamamen doğal görünüyor. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Mehmet B.",
      treatment: "Hollywood Smile",
      text: "Yıllardır gülmekten kaçınıyordum. DentLux'te Hollywood Smile yaptırdıktan sonra hayatım değişti. Profesyonel kadro ve muhteşem sonuç!",
      rating: 5,
    },
    {
      name: "Zeynep T.",
      treatment: "Ortodonti",
      text: "Şeffaf plak tedavisiyle 8 ayda dişlerim düzeldi. Kimse fark etmeden tedavi oldum. Harika bir deneyimdi.",
      rating: 5,
    },
    {
      name: "Can A.",
      treatment: "Estetik Diş Hekimliği",
      text: "Veneer uygulamasıyla dişlerim kusursuz görünüyor. Dr. Elif Hanım çok ilgili ve profesyonel. Sonuçtan çok memnunum.",
      rating: 5,
    },
    {
      name: "Fatma S.",
      treatment: "Kanal Tedavisi",
      text: "Kanal tedavisinden çok korkuyordum ama hiçbir şey hissetmedim. Modern ekipmanlar ve uzman doktor sayesinde rahat bir tedavi geçirdim.",
      rating: 4,
    },
  ],

  // Social Media
  social: {
    instagram: "https://instagram.com/dentlux",
    facebook: "https://facebook.com/dentlux",
    youtube: "https://youtube.com/dentlux",
    whatsapp: "https://wa.me/902125550123",
  },

  // Navigation
  navItems: [
    { label: "Ana Sayfa", href: "#hero" },
    { label: "Hakkımızda", href: "#about" },
    { label: "Hizmetler", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Yorumlar", href: "#testimonials" },
    { label: "İletişim", href: "#contact" },
  ],

  // Gallery images (Unsplash dental/medical stock)
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      alt: "Modern diş kliniği iç mekan",
      category: "Klinik",
    },
    {
      src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      alt: "Diş tedavi ekipmanları",
      category: "Teknoloji",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      alt: "Diş muayenesi",
      category: "Tedavi",
    },
    {
      src: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&q=80",
      alt: "Diş hekimi muayene",
      category: "Tedavi",
    },
    {
      src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      alt: "Steril tedavi odası",
      category: "Klinik",
    },
    {
      src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
      alt: "Dental teknoloji",
      category: "Teknoloji",
    },
  ],

  // Theme colors
  theme: {
    primary: "#0A1628",
    secondary: "#C9A96E",
    accent: "#1A3A5C",
    background: "#FFFFFF",
    surface: "#F8F9FA",
    text: "#1A1A1A",
    textLight: "#6B7280",
  },
};

export type SiteConfig = typeof siteConfig;
