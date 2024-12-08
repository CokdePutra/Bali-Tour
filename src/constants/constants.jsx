export const CardAllActivities = [
  {
    title: "Uluwatu Temple and Kecak Fire Dance",
    price: "450.000",
    image: "./images/kecak_dance.jpg",
    desc: "Get whisked away on this evening tour of Uluwatu. Prepare yourself for jaw-dropping sunset views on the cliffs. At 70 meters above sea level, Uluwatu Temple is a must-see for history and architecture lovers. Learn about the how the site is considered one of the six key temples in Bali and a spiritual pillar of the island. Your local guide will teach you about its historical and religious significance. Wander the grounds and snap photos of the temple’s scenic surroundings. Before leaving the sacred temple site, head to the open-air amphitheater to catch the Kecak and Fire Dance. The well-loved cultural performance revolves around traditional Balinese song, dance, and storytelling accompanied by a choir. Watch talented performers with the majestic sunset as the backdrop. ",
    include: [
      "Transportation by private car",
      "Fuel",
      "Air Conditoned Vehicle",
      "Hotel pick up and drop off ",
      "Not include : Entrance ticket ",
      "5 Hours Trip",
    ],
    choosedTour: [], // Array to store selected tours
    popular: true,
    id: 1,
  },
  {
    title: "Ubud, Tegallang Rice Terrace & Photos",
    price: "550.000",
    image: "./images/ubud.webp",
    desc: "Whether you're a passionate photographer or just someone who loves nature and adventure, be captivated by the breathtaking beauty of Bali's Tegallalang Rice Terrace. Discover every corner of the rice terraces and allow your guide to assist you with snapping photos in front of this breathtaking backdrop.\n\nLearn about the famous Subak irrigation system, dating back to the 9th century, which embodies the Tri Hita Karana life philosophy. Be escorted to the jungle swing and get the best views of the rice terrace from up above. Don’t forget to take a photo at the iconic (I Love Bali) sign. \n\n Make the most of your experience by purchasing incredible add-ons, such as lunch at a local restaurant and Luwak coffee tasting.",
    include: [
      "Transportation by private car",
      "Fuel",
      "Air Conditioned vehicle",
      "Hotel pick up and drop off",
      "Not include : Entrance ticket ",
      "6 Hours Trip",
    ],
    choosedTour: [], // Array to store selected tours
    popular: true,
    id: 2,
  },
  {
    title: "Bali Private Day Tour by Car with Choices of Destinations ",
    price: "800.000",
    image: "./images/watersport.webp",
    desc: "Enjoy a hassle-free trip to Bali with private car rental service with a driver. Travel in comfort and without the hassle of navigating the roads of Bali. Be picked up at your hotel at the agreed time and dropped back at your hotel after your trip. \n\n Your driver will patiently wait for you at every stop and take you anywhere you want to go. If you love having freedom of choice and having fun at your own pace, then there is no better way to discover Bali. \n\n Set your own itinerary and explore Bali your way on a private 10 hour tour of Bali with driver has experienced in their fields. The guest could arrange tour and where he or she wants, and please create your own tour !! All submitted to the guest desire. We here to serve not just around.",
    include: [
      "Transportation by private car",
      "Fuel",
      "Air Conditioned vehicle",
      "Hotel pick up and drop off",
      "Bottled mineral water",
      "Not include : Entrance ticket ",
      "6 Hours Trip",
    ],
    choosedTour: [
      {
        title: "Northern part of Bali",
        activities: [
          "Handara Gate",
          "Ulundanu Temple",
          "Bloom Garden",
          "Alas Kedaton",
          "Jatiluwih Rice field",
          "Tanah Lot Temple Sunset",
        ],
      },
      {
        title: "Middle part of Bali (Ubud Tour)",
        activities: [
          "Tegalalang Rice Terrace",
          "Tegenungan Waterfall",
          "Bali Swing",
          "Monkey forest",
          "Tirta Empul",
          "Ubud Palace",
          "Ubud art market",
          "Kantolampo waterfall",
          "Quadbike ATV",
          "Rafting",
          "Jungle Swing",
        ],
      },
    ], // Array to store selected tours
    popular: true,
    id: 3,
  },
  {
    title: "Bali Sunset Uluwatu Temple, Kecak Dance & Jimbaran Bay ",
    price: "450.000",
    image: "./images/jimbaran_sunset.webp",
    desc: "Experience the best sundown spot in Bali on a visit to Uluwatu Temple, a Balinese temple to the sea gods with a commanding view of the Indian Ocean. Part of a series of temples built to protect the island from evil spirits, today its cliffside location is home to a family of friendly monkeys. \n\n Once night falls and you have seen the colors of the sunset, experience one of the island's most famous cultural performances at a 'kecak' fire dance. Watch the locals act out a scene from the Ramayana with a mesmerizing trance chant, exciting performances of fire dances, and intricate costumes. \n\n Then, get the option to enjoy dinner at a seafood restaurant serving delicious barbecue food in Jimbaran Bay. Sink your feet in the sand as you dine and relax at the end of an unforgettable day!",
    include: [
      "Hotel pick up and drop off",
      "Air Conditioned Vehicle",
      "Fuel ",
      "Bottled mineral water",
      "5 Hours Trip",
    ],
    choosedTour: [], // Array to store selected tours
    popular: true,
    id: 4,
  },
  {
    title: "Bali Full Day Instagram Highlight Trip",
    price: "800.000",
    image: "./images/hero_image1.png",
    desc: "Make your Instagram followers envious as you explore Bali on a customizable day trip to its most recognizable hotspots.",
    include: [
      "Hotel pick up and drop off",
      "Air Conditioned Vehicle",
      "Fuel ",
      "Bottled mineral water",
      "Not include : Entrance ticket ",
      "10 Hours Trip",
    ],
    choosedTour: [], // Array to store selected tours
    popular: true,
    id: 5,
  },
];

export const HeroImage = {
  Home: "./images/hero_image.jpg",
  PickupTransfer: "./images/airport-terminal.jpg",
  Activities: "./images/beach_club.jpg",
  Contact: "./images/NJ_BubbleGum_22.jpg",
};

export const ServiceDetail = [
  // Airport
  {
    name: "Airport Transfer - Seminyak",
    price: "300.000",
    id: "0",
  },
  {
    name: "Airport Transfer - Umalas",
    price: "350.000",
    id: "1",
  },
  {
    name: "Airport Transfer - Kerobokan",
    price: "350.000",
    id: "2",
  },
  {
    name: "Airport Transfer - Canggu",
    price: "350.000",
    id: "3",
  },
  {
    name: "Airport Transfer - Uluwatu",
    price: "400.000",
    id: "4",
  },
  {
    name: "Airport Transfer - Ubud",
    price: "500.000",
    id: "5",
  },
  {
    name: "Airport Transfer - Tabanan",
    price: "500.000",
    id: "6",
  },
  // Sanur
  {
    name: "Sanur - Seminyak",
    price: "350.000",
    id: "7",
  },
  {
    name: "Sanur - Umalas",
    price: "400.000",
    id: "8",
  },
  {
    name: "Sanur - Kerobokan",
    price: "400.000",
    id: "9",
  },
  {
    name: "Sanur - Canggu",
    price: "400.000",
    id: "10",
  },
  {
    name: "Sanur - NusaDua",
    price: "450.000",
    id: "11",
  },
  {
    name: "Sanur - Uluwatu",
    price: "450.000",
    id: "12",
  },
  {
    name: "Sanur - Ubud",
    price: "400.000",
    id: "13",
  },
  // Padang Bai
  {
    name: "Padang Bai - Seminyak",
    price: "600.000",
    id: "14",
  },
  {
    name: "Padang Bai - Umalas",
    price: "700.000",
    id: "15",
  },
  {
    name: "Padang Bai - Kerobokan",
    price: "700.000",
    id: "16",
  },
  {
    name: "Padang Bai - Canggu",
    price: "700.000",
    id: "17",
  },
  {
    name: "Padang Bai - NusaDua",
    price: "750.000",
    id: "18",
  },
  {
    name: "Padang Bai - Uluwatu",
    price: "750.000",
    id: "19",
  },
  {
    name: "Padang Bai - Ubud",
    price: "600.000",
    id: "20",
  },
  // Uluwatu
  {
    name: "Uluwatu - Seminyak",
    price: "400.000",
    id: "21",
  },
  {
    name: "Uluwatu - Umalas",
    price: "450.000",
    id: "22",
  },
  {
    name: "Uluwatu - Kerobokan",
    price: "450.000",
    id: "23",
  },
  {
    name: "Uluwatu - Canggu",
    price: "450.000",
    id: "24",
  },
  {
    name: "Uluwatu - NusaDua",
    price: "500.000",
    id: "25",
  },
  {
    name: "Uluwatu - Ubud",
    price: "600.000",
    id: "26",
  },
];
