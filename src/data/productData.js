export const productData = [
  {
    id: "p1",
    title: "Royal Calacatta Marble Tile",
    category: "Tiles",
    image: "/assets/Images/w1.jpeg",
    img: "/assets/Images/w1.jpeg",
    description: "Premium glossy finish with rich gold veins, perfect for luxury bathrooms and feature walls.",
    specs: ["Size: 300x600mm", "Finish: Glossy", "Thickness: 9mm"]
  },
  {
    id: "p2",
    title: "Digital Onyx Gold Vitrified",
    category: "Tiles",
    image: "/assets/Images/d1.jpg",
    img: "/assets/Images/d1.jpg",
    description: "Stunning digital print with high glaze vitreous layer capturing deep onyx dimensions.",
    specs: ["Size: 800x1600mm", "Finish: High Glaze", "Vitrified"]
  },
  {
    id: "p3",
    title: "Aura Gold Concealed Mixer",
    category: "Faucets",
    image: "/assets/Images/f1.jpg",
    img: "/assets/Images/f1.jpg",
    description: "Concealed basin mixer with smooth water flow, robust brass interior, and mirror gold finish.",
    specs: ["Solid Brass", "Gold Plated", "10 Yr Warranty"]
  },
  {
    id: "p4",
    title: "Rose Gold Swan Neck Tap",
    category: "Faucets",
    image: "/assets/Images/f4.jpg",
    img: "/assets/Images/f4.jpg",
    description: "High arched elegant swan design, ideal for luxury kitchen workspaces and signature suites.",
    specs: ["360° Swivel", "Rose Gold", "Ceramic Cartridge"]
  },
  {
    id: "p5",
    title: "Celestial Rain Shower System",
    category: "Shower",
    image: "/assets/Images/s1.jpeg",
    img: "/assets/Images/s1.jpeg",
    description: "Ultra-slim stainless steel overhead rain shower with silicone easy-clean nozzles.",
    specs: ["Size: 400x400mm", "SUS304 Steel", "Waterfall Flow"]
  },
  {
    id: "p6",
    title: "Digital Smart Shower Column",
    category: "Shower",
    image: "/assets/Images/s6.jpg",
    img: "/assets/Images/s6.jpg",
    description: "All-in-one shower panel with integrated shelf, LED temperature display, and illumination.",
    specs: ["Hydro-Powered LED", "Integrated Storage", "Easy Install"]
  },
  {
    id: "p7",
    title: "Monolith Wall-Hung WC",
    category: "Sanitaryware",
    image: "/assets/Images/s7.jpg",
    img: "/assets/Images/s7.jpg",
    description: "Rimless wall-mounted toilet with ultra-quiet tornado flushing and antibacterial glaze.",
    specs: ["Rimless Design", "Dual Flush 3/6L", "Soft-Close Seat"]
  },
  {
    id: "p8",
    title: "Executive One-Piece Water Closet",
    category: "Sanitaryware",
    image: "/assets/Images/s9.jpg",
    img: "/assets/Images/s9.jpg",
    description: "Seamless single piece water closet with siphonic jet flush and ergonomic height engineering.",
    specs: ["One-Piece Closet", "Siphonic Jet", "UF Seat Cover"]
  },
  {
    id: "p9",
    title: "CPVC Hot & Cold Water Pipes",
    category: "PVC Pipes",
    image: "/assets/Images/p1.jpg",
    img: "/assets/Images/p1.jpg",
    description: "High pressure CPVC piping system tested up to 93°C, immune to corrosion and chemical scaling.",
    specs: ["IS 15778 Certified", "Temp: Up to 93°C", "Lead Free"]
  },
  {
    id: "p10",
    title: "SWR Drainage & Soil Pipes",
    category: "PVC Pipes",
    image: "/assets/Images/p6.jpg",
    img: "/assets/Images/p6.jpg",
    description: "Ring-fit Rubber Ring soil, waste and rainwater drainage pipes ensuring leak-free discharge.",
    specs: ["IS 4985 Certified", "Leak-Proof Ring Fit", "High Flow Rate"]
  }
];

export const productsOverviewData = {
  heroTitlePart1: "Premium",
  heroTitlePart2: "Products",
  heroSubtitle: "Discover our exclusive collection of Tiles, Faucets, Showers, Sanitaryware, and PVC Pipes.",
  categories: [
    { id: "tiles", title: "Wall & Floor Tiles", img: "/assets/Images/d3.jpg", desc: "Elegant tile collections for homes and commercial spaces." },
    { id: "vitrified", title: "Vitrified Tiles", img: "/assets/Images/d6.jpg", desc: "Premium quality vitrified and digital tile solutions." },
    { id: "faucets", title: "Designer Faucets", img: "/assets/Images/f4.jpg", desc: "Luxury faucets engineered for style and durability." },
    { id: "shower", title: "Modern Showers", img: "/assets/Images/s6.jpg", desc: "Innovative shower systems with premium finishes." },
    { id: "sanitaryware", title: "Sanitaryware", img: "/assets/Images/s9.jpg", desc: "Stylish bathroom solutions designed for modern living." },
    { id: "pvc-pipes", title: "PVC Pipes", img: "/assets/Images/p6.jpg", desc: "Reliable piping systems for residential and industrial use." }
  ],
  showcaseRows: [
    {
      id: 1,
      titlePart1: "Luxury Tile",
      titlePart2: "Collection",
      desc: "Explore elegant wall and floor tiles crafted with premium finishes, modern textures and timeless beauty.",
      img: "/assets/Images/d5.jpg",
      link: "/tiles",
      buttonText: "Explore Tiles",
      reverse: false
    },
    {
      id: 2,
      titlePart1: "Modern Bathroom",
      titlePart2: "Solutions",
      desc: "Transform bathrooms with stylish faucets, showers and sanitaryware built for luxury and performance.",
      img: "/assets/Images/s3.jpg",
      link: "/shower",
      buttonText: "Explore Showers",
      reverse: true
    }
  ],
  stats: [
    { target: 20, label: "Years Experience" },
    { target: 500, label: "Projects" },
    { target: 100, label: "Product Range" },
    { target: 98, label: "Client Satisfaction %" }
  ],
  whyUs: [
    { title: "Premium Quality", desc: "Top quality materials and trusted brands.", icon: "fas fa-award" },
    { title: "Trusted Products", desc: "Reliable solutions backed by experience.", icon: "fas fa-shield-alt" },
    { title: "Wide Collection", desc: "Extensive range of tiles and sanitaryware.", icon: "fas fa-layer-group" },
    { title: "Expert Guidance", desc: "Professional support for every project.", icon: "fas fa-users" }
  ]
};

export default productData;
