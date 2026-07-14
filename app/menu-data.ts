export type MenuItem = {
  number?: string;
  name: string;
  price: string;
  detail?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "entrees-froides",
    title: "Entrées froides",
    items: [
      { number: "1", name: "Salade de choux", price: "7 DT", detail: "Choux vert, carotte râpée" },
      { number: "2", name: "Salade d’algues wakame", price: "10 DT", detail: "Algues wakame, carotte râpée" },
      { number: "3", name: "Salade saumon tataki", price: "27 DT", detail: "Laitue, concombre, avocat, carotte, roquette, ananas, vermicelles, noix de cajou, saumon mi-cuit" },
      { number: "4", name: "Salade asiatique", price: "24 DT", detail: "Laitue, concombre, avocat, carotte, roquette, ananas, vermicelles, noix de cajou" },
      { number: "5", name: "Salade de poulpe", price: "27 DT", detail: "Laitue, concombre, oignon, carotte, ail, citron, coriandre, poulpe" }
    ]
  },
  {
    id: "spring-roll",
    title: "Spring roll",
    items: [
      { number: "6", name: "Light salmon", price: "11 DT", detail: "Une galette de riz, saumon, avocat, surimi, massago, crème de fromage" },
      { number: "7", name: "Light shrimp", price: "11 DT", detail: "Une galette de riz, crevette, ananas, menthe, massago" },
      { number: "8", name: "Mango sticky rice - 2P", price: "14 DT", detail: "Galette de riz, sticky rice, mangue, menthe, lait de coco" }
    ]
  },
  {
    id: "entrees-chaudes",
    title: "Entrées chaudes",
    items: [
      { number: "9", name: "Soupe miso", price: "8 DT" },
      { number: "10", name: "Soupe miso crevettes", price: "11 DT" },
      { number: "11", name: "Soupe miso poisson blanc", price: "11 DT" },
      { number: "12", name: "Riz vinaigré", price: "6 DT" },
      { number: "13", name: "Nems végétarien - 2 pièces", price: "9 DT" },
      { number: "14", name: "Nems poulet - 2 pièces", price: "10 DT" },
      { number: "15", name: "Nems crevettes - 2 pièces", price: "11 DT" }
    ]
  },
  {
    id: "nigiri",
    title: "Nigiri",
    note: "2 pièces",
    items: [
      { number: "16", name: "Saumon", price: "9 DT" },
      { number: "17", name: "Thon", price: "8,5 DT" },
      { number: "18", name: "Crevettes", price: "9 DT" },
      { number: "19", name: "Saumon avocat", price: "10 DT" },
      { number: "20", name: "Poulpe", price: "10 DT" },
      { number: "21", name: "Anguille", price: "9 DT" }
    ]
  },
  {
    id: "sashimi",
    title: "Sashimi",
    note: "3 pièces",
    items: [
      { number: "22", name: "Saumon", price: "15 DT" },
      { number: "23", name: "Saumon tataki", price: "15 DT" },
      { number: "24", name: "Thon", price: "13 DT" },
      { number: "25", name: "Thon tataki", price: "13 DT" },
      { number: "26", name: "Fresh mix - 12P", price: "48 DT" }
    ]
  },
  {
    id: "chirashi",
    title: "Chirashi",
    items: [
      { number: "27", name: "Saumon", price: "39 DT" },
      { number: "28", name: "Saumon-avocat", price: "40 DT" },
      { number: "29", name: "Thon", price: "35 DT" },
      { number: "30", name: "Thon avocat", price: "37 DT" },
      { number: "31", name: "Tsunami chirashi", price: "42 DT", detail: "Saumon, crevettes, thon, poulpe, tamago, avocat" }
    ]
  },
  {
    id: "gunkan",
    title: "Gunkan",
    items: [
      { number: "32", name: "Gunkan saumon épicé", price: "12 DT" },
      { number: "33", name: "Gunkan thon épicé", price: "11 DT" },
      { number: "34", name: "Gunkan crevettes", price: "12 DT" },
      { number: "35", name: "Gunkan poulpe citronnée", price: "12 DT" },
      { number: "36", name: "Gunkan surimi de crabe", price: "10 DT" },
      { number: "37", name: "Gunkan massago", price: "15 DT" }
    ]
  },
  {
    id: "hosomaki",
    title: "Hosomaki",
    note: "6 pièces",
    items: [
      { number: "38", name: "Saumon", price: "12 DT" },
      { number: "39", name: "Saumon fromage", price: "13 DT" },
      { number: "40", name: "Saumon avocat", price: "13 DT" },
      { number: "41", name: "Thon épicé", price: "12 DT" },
      { number: "42", name: "Crevettes", price: "12 DT" },
      { number: "43", name: "Crevettes concombre", price: "13 DT" },
      { number: "44", name: "Concombre fromage", price: "9 DT" },
      { number: "45", name: "Avocat fromage", price: "11 DT" },
      { number: "46", name: "Anguille", price: "12 DT" }
    ]
  },
  {
    id: "futomaki",
    title: "Futomaki",
    note: "5 pièces",
    items: [
      { number: "47", name: "Sunny salmon", price: "16 DT", detail: "Saumon, avocat, concombre, tamago, tempura, mayo épicée" },
      { number: "48", name: "Sunset tuna", price: "16 DT", detail: "Thon rouge, avocat, carotte, tempura, mayo épicée" },
      { number: "49", name: "Big crab", price: "16 DT", detail: "Crabe tempura, avocat, concombre, tamago, tempura, mayo épicée" },
      { number: "50", name: "Big shrimp", price: "16 DT", detail: "Crevettes, avocat, concombre, tempura, mayo épicée" },
      { number: "51", name: "Tropical", price: "16 DT", detail: "Crevettes, surimi de crabe, ananas, crème de fromage" },
      { number: "52", name: "Paradise", price: "16 DT", detail: "Saumon, avocat, concombre, fruit de saison, miel" },
      { number: "53", name: "Green garden", price: "13 DT", detail: "Laitue, concombre, avocat, carotte, roquette, ananas" }
    ]
  },
  {
    id: "california-rolls",
    title: "California rolls",
    note: "4 pièces",
    items: [
      { number: "54", name: "Fresh salmon", price: "13 DT", detail: "Saumon, avocat, concombre, sésame noir et blanc" },
      { number: "55", name: "Spicy salmon", price: "13 DT", detail: "Saumon, avocat, mayo épicée, shishimi" },
      { number: "56", name: "Spicy tuna", price: "12 DT", detail: "Thon rouge, avocat, mayo épicée, shishimi" },
      { number: "57", name: "Green salmon", price: "13 DT", detail: "Saumon, avocat, crème de fromage, aneth" },
      { number: "58", name: "Green smoked salmon", price: "14 DT", detail: "Saumon fumé, crème de fromage, fruits, aneth" },
      { number: "59", name: "Spicy shrimp", price: "12 DT", detail: "Crevettes, avocat, concombre, mayo épicée, shishimi" },
      { number: "60", name: "Shrimp tempura", price: "13 DT", detail: "Crevettes, tempura, avocat, shishimi" },
      { number: "61", name: "Spicy crab", price: "12 DT", detail: "Surimi épicée, tamago, concombre, shishimi" },
      { number: "62", name: "Crab tempura", price: "12 DT", detail: "Crabe tempura, concombre, crème de fromage, sésame" },
      { number: "63", name: "Vegetarian roll", price: "11 DT", detail: "Laitue, concombre, avocat, roquette, carotte, aneth" },
      { number: "64", name: "Crispy spicy salmon", price: "13 DT", detail: "Saumon, avocat, mayo épicée, oignons frit" },
      { number: "65", name: "Sweet crispy", price: "14 DT", detail: "Saumon cuit, roquette, miel, ananas ou mangue, oignons frit" }
    ]
  },
  {
    id: "crunchy-rolls",
    title: "Crunchy rolls",
    items: [
      { number: "66", name: "Crunchy hosomaki saumon", price: "15 DT" },
      { number: "67", name: "Crunchy hosomaki crevettes", price: "13 DT" },
      { number: "68", name: "Crunchy hosomaki hot crabe", price: "12 DT" },
      { number: "69", name: "Crunchy saumon", price: "13 DT", detail: "Saumon, surimi, crème de fromage" },
      { number: "70", name: "Crunchy shrimp", price: "13 DT", detail: "Crevette, surimi, crème de fromage" },
      { number: "71", name: "Crunchy chicken", price: "12 DT", detail: "Poulet tempura, crème de fromage" },
      { number: "72", name: "Crunchy ananas", price: "12 DT", detail: "Ananas, fromage" },
      { number: "73", name: "Crunchy avocat", price: "12 DT", detail: "Avocat, fromage" }
    ]
  },
  {
    id: "futomaki-crunchy",
    title: "Futomaki crunchy",
    note: "6 pièces",
    items: [
      { number: "74", name: "Dragon eye", price: "15 DT", detail: "Saumon cuit, crevette, mayo épicée, tempura" },
      { number: "75", name: "Galaxy roll", price: "15 DT", detail: "Crevettes, ananas, crème de fromage, tempura" }
    ]
  },
  {
    id: "croquesushi",
    title: "Croquesushi",
    items: [
      { number: "76", name: "Croque saumon", price: "20 DT", detail: "Saumon, fromage, avocat" },
      { number: "77", name: "Croque crevettes", price: "20 DT", detail: "Tartare de crevettes, fromage, avocat" }
    ]
  },
  {
    id: "philadelphia-roll",
    title: "Philadelphia roll",
    note: "6 pièces",
    items: [
      { number: "78", name: "Saumon, avocat, crème de fromage", price: "33 DT" },
      { number: "79", name: "Saumon, roquette, crème de fromage", price: "33 DT" },
      { number: "80", name: "Thon crevettes", price: "34 DT", detail: "Crème de fromage, algues wakame, massago" },
      { number: "81", name: "Saumon crevettes", price: "34 DT", detail: "Crème de fromage, roquette, massago" }
    ]
  },
  {
    id: "rouleaux-du-chef",
    title: "Rouleaux du chef",
    note: "8 pièces",
    items: [
      { number: "82", name: "Wave roll", price: "36 DT", detail: "Saumon, avocat, tempura, mayo épicée, recouvert de massago" },
      { number: "83", name: "Green dragon", price: "34 DT", detail: "Crevettes tempura, crème de fromage, concombre, recouvert d’avocat et massago" },
      { number: "84", name: "Storm roll", price: "34 DT", detail: "Tartare de crevette, aneth, miel, mangue, crème de fromage, recouvert d’avocat" },
      { number: "85", name: "Red dragon", price: "34 DT", detail: "Crevette tempura, avocat, carotte, mayo épicée, recouvert de thon rouge" },
      { number: "86", name: "Hot dragon", price: "34 DT", detail: "Crevettes, avocat, concombre, mayo épicée, recouvert de saumon braisé et avocat" },
      { number: "87", name: "Snow shrimp", price: "36 DT", detail: "Crevette tempura, avocat, mayo épicée, recouvert de tartare de crevette" },
      { number: "88", name: "Shake yaki", price: "36 DT", detail: "Saumon tempura, avocat, concombre, mayo épicée, recouvert de saumon" },
      { number: "89", name: "Snow crab", price: "34 DT", detail: "Crabe tempura, crème de fromage, avocat, recouvert de surimi de crabe et massago" },
      { number: "90", name: "Tsunami roll", price: "36 DT", detail: "Saumon, avocat, mangue, crème de fromage, recouvert de saumon et menthe" },
      { number: "91", name: "Crazy roll", price: "34 DT", detail: "Crevette, avocat, saumon cuit épicé, crazy sauce" },
      { number: "92", name: "Rainbow roll", price: "36 DT", detail: "Saumon, surimi épicée, tempura, recouvert de saumon, thon, avocat" },
      { number: "93", name: "Anaconda roll", price: "34 DT", detail: "Saumon, avocat, surimi de crabe, recouvert d’anguille" },
      { number: "94", name: "Coco roll", price: "36 DT", detail: "Saumon tempura, crème de fromage, mangue, recouvert de noix de coco et fruit" },
      { number: "95", name: "Fashion roll", price: "36 DT", detail: "Crevette tempura, avocat, crème de fromage, recouvert de saumon et avocat" },
      { number: "96", name: "Octopus roll", price: "36 DT", detail: "Crevette tempura, concombre, carotte, recouvert de poulpe et massago" }
    ]
  },
  {
    id: "box",
    title: "Box",
    items: [
      { name: "Tsunami mixed box - 14 pièces", price: "40 DT", detail: "6 Hosomaki, 4 California, 4 Crunchy" },
      { name: "Tsunami mixed box - 26 pièces", price: "73 DT", detail: "2 Nigiri, 3 Hosomaki, 8 California, 5 Futomaki, 8 Crunchy" },
      { name: "Tsunami mixed box - 38 pièces", price: "105 DT", detail: "4 Nigiri, 9 Hosomaki, 12 California, 5 Futomaki, 8 Crunchy" },
      { name: "Tsunami mixed box - 52 pièces", price: "140 DT", detail: "6 Nigiri, 12 Hosomaki, 12 California, 10 Futomaki, 12 Crunchy" },
      { name: "Tsunami mixed box - 66 pièces", price: "180 DT", detail: "6 Nigiri, 18 Hosomaki, 16 California, 10 Futomaki, 16 Crunchy" },
      { name: "Tsunami mixed box - 80 pièces", price: "215 DT", detail: "8 Nigiri, 18 Hosomaki, 20 California, 15 Futomaki, 19 Crunchy" },
      { name: "Tsunami chef mix - 100 pièces", price: "270 DT", detail: "12 Nigiri, 12 Hosomaki, 16 California, 16 Rouleaux du chef, 20 Futomaki, 24 Crunchy" },
      { name: "Tsunami salmon box - 14 pièces", price: "44 DT", detail: "4 Nigiri, 4 California, 6 Hosomaki" },
      { name: "Tsunami salmon box - 26 pièces", price: "80 DT", detail: "4 Nigiri, 9 Hosomaki, 8 California, 5 Futomaki" },
      { name: "Tsunami crunchy box - 14 pièces", price: "40 DT", detail: "6 Hosomaki, 8 California" },
      { name: "Tsunami crunchy box - 26 pièces", price: "73 DT", detail: "6 Hosomaki, 8 California, 12 Futomaki" },
      { name: "Tsunami vegetarian box - 14 pièces", price: "35 DT", detail: "6 Hosomaki, 4 California, 4 Crunchy" },
      { name: "Tsunami vegetarian box - 24 pièces", price: "65 DT", detail: "3 Hosomaki, 5 Futomaki, 8 California, 8 Crunchy" },
      { name: "Assortiment nigiri - 16 pièces", price: "60 DT", detail: "4 Nigiri crevettes, 4 Nigiri saumon, 4 Nigiri thon, 4 Nigiri saumon avocat" }
    ]
  },
  {
    id: "yakitori",
    title: "Yakitori",
    note: "2 brochettes servies avec du riz",
    items: [
      { number: "97", name: "Poulet fromage pané", price: "21 DT" },
      { number: "98", name: "Poulet grillé", price: "17 DT" },
      { number: "99", name: "Poulet tsukune", price: "19 DT", detail: "Boulettes asiatique" },
      { number: "100", name: "Bœuf fromage pané", price: "22 DT" },
      { number: "101", name: "Bœuf fromage grillé", price: "22 DT" },
      { number: "102", name: "Saumon pané", price: "22 DT" },
      { number: "103", name: "Saumon grillé", price: "24 DT" },
      { number: "104", name: "Thon grillé", price: "20 DT" },
      { number: "105", name: "Crevettes pané", price: "24 DT" },
      { number: "106", name: "Crevettes grillé", price: "23 DT" }
    ]
  },
  {
    id: "yakisoba-noodles",
    title: "Yakisoba noodles",
    items: [
      { number: "107", name: "Nouilles au saumon", price: "34 DT" },
      { number: "108", name: "Nouilles aux crevettes", price: "34 DT" },
      { number: "109", name: "Nouilles au bœuf", price: "32 DT" },
      { number: "110", name: "Nouilles au poulet", price: "30 DT" },
      { number: "111", name: "Nouilles végétariennes", price: "28 DT" },
      { number: "112", name: "Nouilles saumon-crevettes", price: "38 DT" }
    ]
  },
  {
    id: "plats-chauds",
    title: "Plats chauds",
    items: [
      { number: "113", name: "Crevette & légumes tempura", price: "33 DT", detail: "Crevettes tempura, courgette, carotte, oignon et poivron" },
      { number: "114", name: "Teriyaki salmon", price: "36 DT", detail: "Saumon teriyaki, légumes sautées, riz" },
      { number: "115", name: "Teriyaki shrimp", price: "36 DT", detail: "Crevettes teriyaki, poireau, brocoli, riz" },
      { number: "116", name: "Teriyaki chicken", price: "32 DT", detail: "Poulet teriyaki, poireau, légumes sautées, riz" }
    ]
  },
  {
    id: "gyoza",
    title: "Gyoza",
    note: "4 pièces",
    items: [
      { number: "117", name: "Poulet", price: "14 DT" },
      { number: "118", name: "Crevettes", price: "16 DT" },
      { number: "119", name: "Vegetarien", price: "12 DT" },
      { number: "120", name: "Viande hachée", price: "15 DT" }
    ]
  },
  {
    id: "wok-lovers",
    title: "Wok lovers",
    items: [
      { number: "121", name: "Crispy fried chicken", price: "28 DT", detail: "Blanc de poulet crispy, légumes sautées, riz, sauce thai" },
      { number: "122", name: "Chicken fried rice", price: "26 DT", detail: "Blanc de poulet, légumes sautées, œuf, sauce thai" },
      { number: "123", name: "Beef sakini", price: "30 DT", detail: "Rump steak mariné, riz cantonais, œuf, légumes sautées, sauce citronnée" },
      { number: "124", name: "Shrimp fried rice", price: "30 DT", detail: "Crevettes, riz, légumes sautées, sauce thai" }
    ]
  },
  {
    id: "poke-bowl",
    title: "Poke bowl",
    items: [
      { number: "125", name: "Poke saumon avocat", price: "36 DT", detail: "Riz, saumon en cube, avocat, concombre, carotte, haricot rouge, salade de choux, ananas, oignon frit, gingembre marinée, tsunami sauce" },
      { number: "126", name: "Poke shrimp tempura", price: "36 DT", detail: "Riz, crevette, tempura, avocat, ananas, concombre, carotte, haricot rouge, salade de choux, oignon frit, tsunami sauce" },
      { number: "127", name: "Poke Thai", price: "36 DT", detail: "Riz, poulet grillé, concombre, carotte, haricot rouge, menthe, ananas, noix de cajou, tsunami sauce" },
      { number: "128", name: "Tsunami poke", price: "40 DT", detail: "Riz, saumon, thon, crevette, avocat, concombre, carotte, haricot rouge, salade de choux, gingembre marinée, tsunami sauce" },
      { number: "129", name: "Poke vermicelle saumon", price: "37 DT", detail: "Vermicelle, salade choux, saumon, avocat, haricot rouge, concombre, carotte, ananas" }
    ]
  },
  {
    id: "supplements",
    title: "Suppléments",
    items: [
      { name: "Soja salée", price: "2 DT" },
      { name: "Soja sucrée", price: "2 DT" },
      { name: "Sweet chili", price: "3 DT" },
      { name: "Mayo épicée", price: "2 DT" },
      { name: "Sriracha", price: "3 DT" },
      { name: "Yakitori sauce", price: "2 DT" },
      { name: "Gingembre", price: "3 DT" },
      { name: "Wasabi", price: "2 DT" },
      { name: "Tsunami sauce", price: "4 DT" },
      { name: "Shrimp sauce", price: "4 DT" },
      { name: "Teriyaki sauce", price: "4 DT" },
      { name: "Yin Yang sauce", price: "4 DT" }
    ]
  },
  {
    id: "boissons",
    title: "Boissons",
    items: [
      { name: "Eau 0,5 L", price: "2,5 DT" },
      { name: "Eau 1L", price: "4 DT" },
      { name: "Soda", price: "4 DT" },
      { name: "Eau gazéifié 1L", price: "4 DT" },
      { name: "Boissons énergétiques", price: "10 DT" },
      { name: "Lipton Ice Tea", price: "10 DT" },
      { name: "Nespresso", price: "5 DT" }
    ]
  }
];
