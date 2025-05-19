// Cities data organized by province
const citiesByProvince = {
    cavite: [
        "Bacoor",
        "Cavite City",
        "Dasmariñas",
        "General Trias",
        "Imus",
        "Naic",
        "Tagaytay",
        "Tanza",
        "Trece Martires"
    ],
    laguna: [
        "Biñan",
        "Calamba",
        "San Pablo",
        "Santa Rosa",
        "Los Baños",
        "San Pedro",
        "Cabuyao",
        "Sta. Cruz"
    ],
    batangas: [
        "Batangas City",
        "Lipa",
        "Santo Tomas",
        "Tanauan",
        "Nasugbu",
        "Bauan",
        "Lemery"
    ],
    rizal: [
        "Antipolo",
        "Cainta",
        "Taytay",
        "Rodriguez",
        "San Mateo",
        "Angono",
        "Binangonan"
    ],
    metro_manila: [
        "Manila",
        "Quezon City",
        "Makati",
        "Taguig",
        "Pasig",
        "Parañaque",
        "Las Piñas",
        "Muntinlupa",
        "Mandaluyong",
        "Marikina",
        "Pasay",
        "San Juan",
        "Valenzuela",
        "Caloocan",
        "Malabon",
        "Navotas",
        "Pateros"
    ]
};

// Barangays data organized by city
const barangaysByCity = {
    // Naic, Cavite barangays
    naic: [
        "Bagong Pook",
        "Bancaan",
        "Bayan",
        "Bucana Malaki",
        "Bucana Sasahan",
        "Calubcob",
        "Capt. C. Nazareno (Poblacion)",
        "Gomez-Zamora (Poblacion)",
        "Ibayo Estacion",
        "Ibayo Silangan",
        "Kanluran",
        "Labac",
        "Latoria",
        "Mabolo",
        "Makina",
        "Malainen Bago",
        "Malainen Luma",
        "Molino",
        "Munting Mapino",
        "Palangue",
        "Sabang",
        "San Roque",
        "Santulan",
        "Timalan Balsahan",
        "Timalan Concepcion",
        "Timalan Parada",
        "Visita"
    ],
    // Imus, Cavite barangays
    imus: [
        "Alapan 1-A",
        "Alapan 1-B",
        "Alapan 1-C",
        "Alapan 2-A",
        "Alapan 2-B",
        "Anabu 1-A",
        "Anabu 1-B",
        "Anabu 1-C",
        "Anabu 1-D",
        "Anabu 1-E",
        "Anabu 1-F",
        "Anabu 1-G",
        "Anabu 2-A",
        "Anabu 2-B",
        "Anabu 2-C",
        "Anabu 2-D",
        "Anabu 2-E",
        "Anabu 2-F",
        "Bayan Luma I",
        "Bayan Luma II",
        "Bayan Luma III",
        "Bayan Luma IV",
        "Bayan Luma V",
        "Bayan Luma VI",
        "Bayan Luma VII",
        "Bayan Luma VIII",
        "Bayan Luma IX",
        "Bucandala I",
        "Bucandala II",
        "Bucandala III",
        "Bucandala IV",
        "Bucandala V"
    ],
    // Bacoor, Cavite barangays
    bacoor: [
        "Alima",
        "Aniban I",
        "Aniban II",
        "Aniban III",
        "Aniban IV",
        "Aniban V",
        "Banalo",
        "Bayanan",
        "Daang Bukid",
        "Digman",
        "Dulong Bayan",
        "Habay I",
        "Habay II",
        "Kaingin",
        "Ligas I",
        "Ligas II",
        "Ligas III",
        "Mabolo I",
        "Mabolo II",
        "Mabolo III",
        "Maliksi I",
        "Maliksi II",
        "Maliksi III",
        "Molino I",
        "Molino II",
        "Molino III",
        "Molino IV",
        "Molino V",
        "Molino VI",
        "Molino VII",
        "Niog I",
        "Niog II",
        "Niog III",
        "P.F. Espiritu I (Panapaan)",
        "P.F. Espiritu II",
        "P.F. Espiritu III",
        "P.F. Espiritu IV",
        "P.F. Espiritu V",
        "P.F. Espiritu VI",
        "P.F. Espiritu VII",
        "P.F. Espiritu VIII",
        "Queens Row Central",
        "Queens Row East",
        "Queens Row West",
        "Real I",
        "Real II",
        "Salinas I",
        "Salinas II",
        "Salinas III",
        "Salinas IV",
        "San Nicolas I",
        "San Nicolas II",
        "San Nicolas III",
        "Sineguelasan",
        "Talaba I",
        "Talaba II",
        "Talaba III",
        "Talaba IV",
        "Talaba V",
        "Talaba VI",
        "Talaba VII",
        "Zapote I",
        "Zapote II",
        "Zapote III",
        "Zapote IV",
        "Zapote V"
    ],

    // Cavite City
    cavite_city: [
        "Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4", "Barangay 5",
        "Barangay 6", "Barangay 7", "Barangay 8", "Barangay 9", "Barangay 10",
        "Barangay 11", "Barangay 12", "Barangay 13", "Barangay 14", "Barangay 15",
        "San Antonio", "San Roque", "Santa Cruz", "Caridad", "San Jose"
    ],

    // Dasmariñas
    dasmariñas: [
        "Burol Main", "Burol I", "Burol II", "Burol III", 
        "Datu Esmael", "Emmanuel Bergado I", "Emmanuel Bergado II",
        "Fatima I", "Fatima II", "Fatima III", "Langkaan I", "Langkaan II",
        "Paliparan I", "Paliparan II", "Paliparan III", "Sabang",
        "Salawag", "Salitran I", "Salitran II", "Salitran III",
        "Salitran IV", "San Agustin I", "San Agustin II", "San Agustin III",
        "San Andres I", "San Andres II", "San Esteban", "San Jose",
        "San Luis I", "San Luis II", "San Simon", "Santa Cristina I",
        "Santa Cristina II", "Victoria Reyes", "Zone I", "Zone I-A",
        "Zone II", "Zone III", "Zone IV"
    ],

    // General Trias
    general_trias: [
        "Alingaro", "Arnaldo", "Bacao I", "Bacao II", "Bagumbayan",
        "Biclatan", "Buenavista I", "Buenavista II", "Buenavista III",
        "Corregidor", "Dulong Bayan", "Governor Ferrer", "Javalera",
        "Manggahan", "Navarro", "Panungyanan", "Pasong Camachile I",
        "Pasong Camachile II", "Pasong Kawayan I", "Pasong Kawayan II",
        "Pinagtipunan", "Prinza", "Progressive", "San Francisco",
        "San Juan I", "San Juan II", "Santa Clara", "Santiago",
        "Tapia", "Tejero"
    ],

    // Tagaytay
    tagaytay: [
        "Asisan", "Bagong Tubig", "Calabuso", "Dapdap East", "Dapdap West",
        "Francisco", "Guinhawa North", "Guinhawa South", "Iruhin Central",
        "Iruhin East", "Iruhin West", "Kaybagal Central", "Kaybagal East",
        "Kaybagal North", "Kaybagal South", "Mag-Asawang Ilat", "Maharlika East",
        "Maharlika West", "Maitim 2nd Central", "Maitim 2nd East", "Maitim 2nd West",
        "Mendez Crossing East", "Mendez Crossing West", "Neogan", "Patutong Malaki North",
        "Patutong Malaki South", "San Jose", "Silang Junction North",
        "Silang Junction South", "Sungay East", "Sungay West", "Tolentino East",
        "Tolentino West", "Zambal"
    ],

    // Tanza
    tanza: [
        "Amaya I", "Amaya II", "Amaya III", "Amaya IV", "Amaya V",
        "Amaya VI", "Amaya VII", "Bagtas", "Biga", "Bunga",
        "Calibuyo", "Capipisa", "Daang Amaya I", "Daang Amaya II",
        "Daang Amaya III", "Halayhay", "Julugan I", "Julugan II",
        "Julugan III", "Julugan IV", "Julugan V", "Julugan VI",
        "Julugan VII", "Julugan VIII", "Mulawin", "Paradahan I",
        "Paradahan II", "Punta I", "Punta II", "Sahud Ulan",
        "Sanja Mayor", "Santol", "Tanza Poblacion I", "Tanza Poblacion II",
        "Tanza Poblacion III", "Tanza Poblacion IV", "Tres Cruses"
    ],

    // Trece Martires
    trece_martires: [
        "Aguado", "Cabezas", "Cabuco", "De Ocampo", "Hugo Perez",
        "Inocencio", "Lapidario", "Laqui", "Luciano", "Osorio",
        "Perez", "San Agustin", "Conchu"
    ],

    // Laguna Cities
    biñan: [
        "Biñan", "Bungahan", "Canlalay", "Casile", "De La Paz",
        "Ganado", "Langkiwa", "Loma", "Malaban", "Malamig",
        "Mampalasan", "Platero", "Poblacion", "San Antonio",
        "San Francisco", "San Jose", "San Vicente", "Santo Domingo",
        "Santo Niño", "Santo Tomas", "Soro-soro", "Timbao",
        "Tubigan", "Zapote"
    ],

    calamba: [
        "Bagong Kalsada", "Banadero", "Banlic", "Barandal", "Batino",
        "Burol", "Canlubang", "Halang", "Lecheria", "Lingga",
        "Looc", "Mabato", "Majada", "Makiling", "Mapagong",
        "Masili", "Mayapa", "Milagrosa", "Paciano Rizal", "Palingon",
        "Palo-Alto", "Pansol", "Parian", "Poblacion 1", "Poblacion 2",
        "Poblacion 3", "Poblacion 4", "Poblacion 5", "Poblacion 6",
        "Poblacion 7", "Prinza", "Punta", "Real", "Saimsim",
        "Sampiruhan", "San Cristobal", "San Jose", "San Juan",
        "Sirang Lupa", "Sucol", "Turbina", "Ulango", "Uwisan"
    ],

    // Metro Manila Cities
    manila: [
        "Binondo", "Ermita", "Intramuros", "Malate", "Paco",
        "Pandacan", "Port Area", "Quiapo", "Sampaloc", "San Andres",
        "San Miguel", "San Nicolas", "Santa Ana", "Santa Cruz",
        "Santa Mesa", "Tondo"
    ],

    quezon_city: [
        "Alicia", "Bagong Silangan", "Balingasa", "Batasan Hills",
        "Commonwealth", "Culiat", "Fairview", "Holy Spirit",
        "Horseshoe", "Immaculate Concepcion", "Kaligayahan",
        "Kamuning", "Katipunan", "Loyola Heights", "New Era",
        "Novaliches", "Pasong Tamo", "Project 6", "San Francisco del Monte",
        "Santa Lucia", "Santo Cristo", "Sauyo", "Tandang Sora",
        "Teachers Village", "UP Campus", "Valencia"
    ],

    makati: [
        "Bangkal", "Bel-Air", "Carmona", "Cembo", "Comembo",
        "Dasmariñas", "East Rembo", "Forbes Park", "Guadalupe Nuevo",
        "Guadalupe Viejo", "Kasilawan", "La Paz", "Magallanes",
        "Olympia", "Palanan", "Pembo", "Pinagkaisahan", "Pio del Pilar",
        "Pitogo", "Poblacion", "Post Proper Northside",
        "Post Proper Southside", "Rizal", "San Antonio",
        "San Isidro", "San Lorenzo", "Santa Cruz",
        "Singkamas", "South Cembo", "Tejeros",
        "Urdaneta", "Valenzuela", "West Rembo"
    ],

    // Taguig
    taguig: [
        "Bagumbayan", "Bambang", "Calzada", "Central Bicutan",
        "Central Signal Village", "Fort Bonifacio", "Hagonoy",
        "Ibayo-Tipas", "Katuparan", "Ligid-Tipas", "Lower Bicutan",
        "Maharlika Village", "Napindan", "New Lower Bicutan",
        "North Daang Hari", "North Signal Village", "Palingon",
        "Pinagsama", "San Miguel", "Santa Ana", "South Daang Hari",
        "South Signal Village", "Tanyag", "Tuktukan",
        "Upper Bicutan", "Ususan", "Wawa", "Western Bicutan"
    ],

    // Pasig
    pasig: [
        "Bagong Ilog", "Bagong Katipunan", "Bambang", "Buting",
        "Caniogan", "Dela Paz", "Kalawaan", "Kapasigan",
        "Kapitolyo", "Malinao", "Manggahan", "Maybunga",
        "Oranbo", "Palatiw", "Pinagbuhatan", "Pineda",
        "Rosario", "Sagad", "San Antonio", "San Joaquin",
        "San Jose", "San Miguel", "San Nicolas", "Santa Cruz",
        "Santa Lucia", "Santa Rosa", "Santo Tomas", "Santolan",
        "Sumilang", "Ugong"
    ],

    // Parañaque
    parañaque: [
        "Baclaran", "BF Homes", "Don Bosco", "Don Galo",
        "La Huerta", "Marcelo Green Village", "Merville",
        "Moonwalk", "San Antonio", "San Dionisio",
        "San Isidro", "San Martin de Porres", "Santo Niño",
        "Sun Valley", "Tambo", "Vitalez"
    ],

    // Las Piñas
    las_piñas: [
        "Almanza Dos", "Almanza Uno", "B.F. International Village",
        "Daniel Fajardo", "Elias Aldana", "Ilaya", "Manuyo Dos",
        "Manuyo Uno", "Pamplona Dos", "Pamplona Tres",
        "Pamplona Uno", "Pilar", "Pulang Lupa Dos",
        "Pulang Lupa Uno", "Talon Dos", "Talon Kuatro",
        "Talon Singko", "Talon Tres", "Talon Uno",
        "Zapote"
    ],

    // Muntinlupa
    muntinlupa: [
        "Alabang", "Bayanan", "Buli", "Cupang", "New Alabang Village",
        "Poblacion", "Putatan", "Sucat", "Tunasan"
    ],

    // Mandaluyong
    mandaluyong: [
        "Addition Hills", "Bagong Silang", "Barangka Drive",
        "Barangka Ibaba", "Barangka Ilaya", "Barangka Itaas",
        "Buayang Bato", "Burol", "Daang Bakal", "Hagdang Bato Itaas",
        "Hagdang Bato Libis", "Harapin Ang Bukas", "Highway Hills",
        "Hulo", "Mabini-J. Rizal", "Malamig", "Mauway",
        "Namayan", "New Zañiga", "Old Zañiga", "Pag-asa",
        "Plainview", "Pleasant Hills", "Poblacion",
        "San Jose", "Vergara", "Wack-Wack Greenhills"
    ],

    // Marikina
    marikina: [
        "Barangka", "Calumpang", "Concepcion Dos", "Concepcion Uno",
        "Fortune", "Industrial Valley", "Jesus De La Peña",
        "Malanday", "Marikina Heights", "Nangka", "Parang",
        "San Roque", "Santa Elena", "Santo Niño", "Tañong",
        "Tumana"
    ],

    // Pasay
    pasay: [
        "Barangay 1", "Barangay 2", "Barangay 3", "Barangay 4",
        "Barangay 5", "Barangay 6", "Barangay 7", "Barangay 8",
        "Barangay 9", "Barangay 10", "Barangay 11", "Barangay 12",
        "Barangay 13", "Barangay 14", "Barangay 15", "Barangay 16",
        "Barangay 17", "Barangay 18", "Barangay 19", "Barangay 20"
    ],

    // San Juan
    san_juan: [
        "Addition Hills", "Balong-Bato", "Batis", "Corazon de Jesus",
        "Ermitaño", "Greenhills", "Isabelita", "Kabayanan",
        "Little Baguio", "Maytunas", "Onse", "Pasadena",
        "Pedro Cruz", "Progreso", "Rivera", "Salapan",
        "San Perfecto", "Santa Lucia", "Tibagan", "West Crame"
    ],

    // Valenzuela
    valenzuela: [
        "Arkong Bato", "Balangkas", "Bignay", "Bisig",
        "Canumay East", "Canumay West", "Coloong", "Dalandanan",
        "Gen. T. de Leon", "Isla", "Karuhatan", "Lawang Bato",
        "Lingunan", "Mabolo", "Malanday", "Malinta",
        "Mapulang Lupa", "Marulas", "Maysan", "Palasan",
        "Parada", "Pariancillo Villa", "Paso de Blas", "Pasolo",
        "Poblacion", "Pulo", "Punturin", "Rincon",
        "Tagalag", "Ugong", "Viente Reales", "Wawang Pulo"
    ],

    // Caloocan
    caloocan: [
        "Bagong Barrio West", "Bagong Barrio East", "Grace Park West",
        "Grace Park East", "University Hills", "Sangandaan",
        "Balintawak", "Victory Heights", "Morning Breeze",
        "Bagong Silang", "Deparo", "Novaliches North",
        "Novaliches Proper", "Tala", "Camarin", "Kaybiga",
        "Llano", "Capitol District", "Malaria", "Maypajo"
    ],

    // Malabon
    malabon: [
        "Acacia", "Baritan", "Bayan-Bayanan", "Catmon",
        "Concepcion", "Dampalit", "Flores", "Hulong Duhat",
        "Ibaba", "Longos", "Maysilo", "Muzon",
        "Niugan", "Panghulo", "Potrero", "San Agustin",
        "Santolan", "Tañong", "Tinajeros", "Tonsuya"
    ],

    // Navotas
    navotas: [
        "Bagumbayan North", "Bagumbayan South", "Bangculasi",
        "Daanghari", "North Bay Boulevard North", "North Bay Boulevard South",
        "San Jose", "San Rafael Village", "San Roque",
        "Sipac-Almacen", "Tangos North", "Tangos South",
        "Tanza 1", "Tanza 2"
    ],

    // Pateros
    pateros: [
        "Aguho", "Magtanggol", "Martires del 96", "Poblacion",
        "San Pedro", "San Roque", "Santa Ana", "Santo Rosario-Kanluran",
        "Santo Rosario-Silangan", "Tabacalera"
    ],

    // Santa Rosa
    santa_rosa: [
        'Aplaya',
        'Balibago',
        'Caingin',
        'Dila',
        'Dita',
        'Don Jose',
        'Ibaba',
        'Labas',
        'Macabling',
        'Malitlit',
        'Malusak',
        'Market Area',
        'Pooc',
        'Pulong Santa Cruz',
        'Santo Domingo',
        'Sinalhan',
        'Tagapo'
    ]
};

// Postal codes data organized by barangay
const postalCodesByBarangay = {
    // Naic, Cavite barangays
    'bagong_pook': '4110',
    'bancaan': '4110',
    'bayan': '4110',
    'bucana_malaki': '4110',
    'bucana_sasahan': '4110',
    'calubcob': '4110',
    'capt_c_nazareno_(poblacion)': '4110',
    'gomez-zamora_(poblacion)': '4110',
    'ibayo_estacion': '4110',
    'ibayo_silangan': '4110',
    'kanluran': '4110',
    'labac': '4110',
    'latoria': '4110',
    'mabolo': '4110',
    'makina': '4110',
    'malainen_bago': '4110',
    'malainen_luma': '4110',
    'molino': '4110',
    'munting_mapino': '4110',
    'palangue': '4110',
    'sabang': '4110',
    'san_roque': '4110',
    'santulan': '4110',
    'timalan_balsahan': '4110',
    'timalan_concepcion': '4110',
    'timalan_parada': '4110',
    'visita': '4110',

    // Imus, Cavite barangays
    'alapan_1-a': '4103',
    'alapan_1-b': '4103',
    'alapan_1-c': '4103',
    'alapan_2-a': '4103',
    'alapan_2-b': '4103',
    'anabu_1-a': '4103',
    'anabu_1-b': '4103',
    'anabu_1-c': '4103',
    'anabu_1-d': '4103',
    'anabu_1-e': '4103',
    'anabu_1-f': '4103',
    'anabu_1-g': '4103',
    'anabu_2-a': '4103',
    'anabu_2-b': '4103',
    'anabu_2-c': '4103',
    'anabu_2-d': '4103',
    'anabu_2-e': '4103',
    'anabu_2-f': '4103',
    'bayan_luma_i': '4103',
    'bayan_luma_ii': '4103',
    'bayan_luma_iii': '4103',
    'bayan_luma_iv': '4103',
    'bayan_luma_v': '4103',
    'bayan_luma_vi': '4103',
    'bayan_luma_vii': '4103',
    'bayan_luma_viii': '4103',
    'bayan_luma_ix': '4103',
    'bucandala_i': '4103',
    'bucandala_ii': '4103',
    'bucandala_iii': '4103',
    'bucandala_iv': '4103',
    'bucandala_v': '4103',

    // Bacoor, Cavite barangays
    'alima': '4102',
    'aniban_i': '4102',
    'aniban_ii': '4102',
    'aniban_iii': '4102',
    'aniban_iv': '4102',
    'aniban_v': '4102',
    'banalo': '4102',
    'bayanan': '4102',
    'daang_bukid': '4102',
    'digman': '4102',
    'dulong_bayan': '4102',
    'habay_i': '4102',
    'habay_ii': '4102',
    'kaingin': '4102',
    'ligas_i': '4102',
    'ligas_ii': '4102',
    'ligas_iii': '4102',
    'mabolo_i': '4102',
    'mabolo_ii': '4102',
    'mabolo_iii': '4102',
    'maliksi_i': '4102',
    'maliksi_ii': '4102',
    'maliksi_iii': '4102',
    'molino_i': '4102',
    'molino_ii': '4102',
    'molino_iii': '4102',
    'molino_iv': '4102',
    'molino_v': '4102',
    'molino_vi': '4102',
    'molino_vii': '4102',
    'niog_i': '4102',
    'niog_ii': '4102',
    'niog_iii': '4102',
    'p.f._espiritu_i_(panapaan)': '4102',
    'p.f._espiritu_ii': '4102',
    'p.f._espiritu_iii': '4102',
    'p.f._espiritu_iv': '4102',
    'p.f._espiritu_v': '4102',
    'p.f._espiritu_vi': '4102',
    'p.f._espiritu_vii': '4102',
    'p.f._espiritu_viii': '4102',
    'queens_row_central': '4102',
    'queens_row_east': '4102',
    'queens_row_west': '4102',
    'real_i': '4102',
    'real_ii': '4102',
    'salinas_i': '4102',
    'salinas_ii': '4102',
    'salinas_iii': '4102',
    'salinas_iv': '4102',
    'san_nicolas_i': '4102',
    'san_nicolas_ii': '4102',
    'san_nicolas_iii': '4102',
    'sineguelasan': '4102',
    'talaba_i': '4102',
    'talaba_ii': '4102',
    'talaba_iii': '4102',
    'talaba_iv': '4102',
    'talaba_v': '4102',
    'talaba_vi': '4102',
    'talaba_vii': '4102',
    'zapote_i': '4102',
    'zapote_ii': '4102',
    'zapote_iii': '4102',
    'zapote_iv': '4102',
    'zapote_v': '4102',

    // Cavite City postal codes
    'barangay_1_cavite': '4100',
    'barangay_2_cavite': '4100',

    // Dasmariñas postal codes
    'burol_main': '4114',
    'burol_i': '4114',

    // General Trias postal codes
    // ... and so on for other barangays

    // Tanza postal codes
    'amaya_i': '4108',
    'amaya_ii': '4108',
    // ... more Tanza postal codes

    // Trece Martires postal codes
    'aguado': '4109',
    'cabezas': '4109',
    // ... more Trece Martires postal codes

    // Biñan postal codes
    'biñan': '4024',
    'bungahan': '4024',
    // ... more Biñan postal codes

    // Calamba postal codes
    'bagong_kalsada': '4027',
    'banadero': '4027',
    // ... more Calamba postal codes

    // Manila postal codes
    'binondo': '1006',
    'ermita': '1000',
    // ... more Manila postal codes

    // Quezon City postal codes
    'alicia': '1102',
    'bagong_silangan': '1119',
    // ... more Quezon City postal codes

    // Makati postal codes
    'bangkal': '1233',
    'bel_air': '1209',
    // ... more Makati postal codes

    // Taguig postal codes
    'bagumbayan': '1632',
    'bambang': '1630',
    // ... more Taguig postal codes

    // Pasig postal codes
    'bagong_ilog': '1600',
    'bagong_katipunan': '1600',
    // ... more Pasig postal codes

    // Parañaque postal codes
    'baclaran': '1700',
    'bf_homes': '1720',
    // ... more Parañaque postal codes

    // Las Piñas postal codes
    'almanza_dos': '1750',
    'almanza_uno': '1750',
    // ... more Las Piñas postal codes

    // Muntinlupa postal codes
    'alabang': '1780',
    'bayanan': '1781',
    // ... more Muntinlupa postal codes

    // Mandaluyong postal codes
    'addition_hills': '1550',
    'bagong_silang': '1550',
    // ... more Mandaluyong postal codes

    // Marikina postal codes
    'barangka': '1800',
    'calumpang': '1800',
    // ... more Marikina postal codes

    // Pasay postal codes
    'barangay_1_pasay': '1300',
    'barangay_2_pasay': '1300',
    // ... more Pasay postal codes

    // San Juan postal codes
    'addition_hills_sj': '1500',
    'balong_bato': '1500',
    // ... more San Juan postal codes

    // Valenzuela postal codes
    'arkong_bato': '1440',
    'balangkas': '1440',
    // ... more Valenzuela postal codes

    // Caloocan postal codes
    'bagong_barrio_west': '1400',
    'bagong_barrio_east': '1400',
    // ... more Caloocan postal codes

    // Malabon postal codes
    'acacia': '1470',
    'baritan': '1470',
    // ... more Malabon postal codes

    // Navotas postal codes
    'bagumbayan_north': '1485',
    'bagumbayan_south': '1485',
    // ... more Navotas postal codes

    // Pateros postal codes
    'aguho': '1620',
    'magtanggol': '1620',
    // ... more Pateros postal codes
};

// Function to populate cities based on selected province
function populateCities() {
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    const selectedProvince = provinceSelect.value;

    // Clear existing city options and barangay options
    citySelect.innerHTML = '<option value="">Select City...</option>';
    barangaySelect.innerHTML = '<option value="">Select Barangay...</option>';
    barangaySelect.disabled = true;

    // Disable city select if no province is selected
    if (!selectedProvince) {
        citySelect.disabled = true;
        return;
    }

    // Enable city select and populate options
    citySelect.disabled = false;
    const cities = citiesByProvince[selectedProvince];
    
    if (cities) {
        cities.sort().forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase().replace(/\s+/g, '_');
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Function to populate barangays based on selected city
function populateBarangays() {
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    const postalInput = document.getElementById('postal');
    const selectedCity = citySelect.value;

    // Clear existing barangay options and postal code
    barangaySelect.innerHTML = '<option value="">Select Barangay...</option>';
    postalInput.value = '';

    // Disable barangay select if no city is selected
    if (!selectedCity) {
        barangaySelect.disabled = true;
        return;
    }

    // Enable barangay select and populate options if barangays exist for the city
    const cityKey = selectedCity.toLowerCase().replace(/\s+/g, '_');
    const barangays = barangaysByCity[cityKey];
    
    if (barangays && barangays.length > 0) {
        barangaySelect.disabled = false;
        barangays.sort().forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay.toLowerCase().replace(/\s+/g, '_');
            option.textContent = barangay;
            barangaySelect.appendChild(option);
        });
    }
}

// Function to auto-fill postal code based on selected barangay
function autoFillPostalCode() {
    const barangaySelect = document.getElementById('barangay');
    const postalInput = document.getElementById('postal');
    const selectedBarangay = barangaySelect.value;

    // Enable postal input and set its value if a postal code exists for the selected barangay
    if (selectedBarangay && postalCodesByBarangay[selectedBarangay]) {
        postalInput.disabled = false;
        postalInput.value = postalCodesByBarangay[selectedBarangay];
    } else {
        postalInput.disabled = true;
        postalInput.value = '';
    }
}

// Function to update location summary
function updateLocationSummary() {
    const summaryContent = document.querySelector('.summary-content');
    const province = document.getElementById('province').value;
    const city = document.getElementById('city').value;
    const barangay = document.getElementById('barangay').value;
    const postal = document.getElementById('postal').value;
    const address = document.getElementById('address').value;

    let summary = '<div class="summary-section location-summary">';
    summary += '<h4>Location Details</h4>';
    
    if (province || city || barangay || postal || address) {
        if (province) {
            summary += `<p><strong>Province:</strong> ${province}</p>`;
        }
        if (city) {
            summary += `<p><strong>City:</strong> ${city}</p>`;
        }
        if (barangay) {
            summary += `<p><strong>Barangay:</strong> ${barangay}</p>`;
        }
        if (postal) {
            summary += `<p><strong>Postal Code:</strong> ${postal}</p>`;
        }
        if (address) {
            summary += `<p><strong>Address:</strong> ${address}</p>`;
        }
    } else {
        summary += '<p class="no-details">No location details provided yet.</p>';
    }
    
    summary += '</div>';

    // Keep unit details if they exist
    const unitSummary = document.querySelector('.unit-details-summary');
    if (unitSummary) {
        summary += unitSummary.outerHTML;
    }

    summaryContent.innerHTML = summary;
}

// Function to update unit details summary
function updateUnitDetailsSummary() {
    const summaryContent = document.querySelector('.summary-content');
    const hasUnit = document.querySelector('.toggle-buttons .toggle-btn.active')?.dataset.value;
    const airconType = document.getElementById('aircon-type').value;
    const brand = document.getElementById('brand').value;
    const subtype = document.getElementById('aircon-subtype').value;
    const unitCount = document.getElementById('unit-count').value;
    const coolingSize = document.getElementById('cooling-size').value;
    const coolingUnit = document.querySelector('.unit-toggle .toggle-btn.active')?.dataset.unit;
    const additionalRequest = document.getElementById('additional-request').value;

    let summary = '<div class="summary-section unit-details-summary">';
    summary += '<h4>Unit Details</h4>';
    
    if (hasUnit || airconType || brand || subtype || unitCount || (coolingSize && coolingUnit)) {
        if (hasUnit) {
            summary += `<p><strong>Has New Unit:</strong> ${hasUnit.toUpperCase()}</p>`;
        }
        if (airconType) {
            summary += `<p><strong>Aircon Type:</strong> ${airconType}</p>`;
        }
        if (brand) {
            summary += `<p><strong>Brand:</strong> ${brand}</p>`;
        }
        if (subtype) {
            summary += `<p><strong>Type:</strong> ${subtype}</p>`;
        }
        if (unitCount) {
            summary += `<p><strong>Number of Units:</strong> ${unitCount}</p>`;
        }
        if (coolingSize && coolingUnit) {
            summary += `<p><strong>Cooling Size:</strong> ${coolingSize} ${coolingUnit.toUpperCase()}</p>`;
        }
        if (additionalRequest) {
            summary += `<p><strong>Additional Request:</strong> ${additionalRequest}</p>`;
        }
    } else {
        summary += '<p class="no-details">No unit details provided yet.</p>';
    }
    
    summary += '</div>';

    // Keep location summary if it exists
    const locationSummary = document.querySelector('.location-summary');
    if (locationSummary) {
        summaryContent.innerHTML = locationSummary.outerHTML + summary;
    } else {
        summaryContent.innerHTML = summary;
    }
}

// Function to validate location form
function validateLocationForm() {
    console.log('Validating location form...'); // Debug log
    
    const province = document.getElementById('province');
    const city = document.getElementById('city');
    const barangay = document.getElementById('barangay');
    const postal = document.getElementById('postal');
    const address = document.getElementById('address');

    console.log('Form values:', { // Debug log
        province: province.value,
        city: city.value,
        barangay: barangay.value,
        postal: postal.value,
        address: address.value
    });

    if (!province.value) {
        alert('Please select a Province');
        province.focus();
        return false;
    }
    if (!city.value) {
        alert('Please select a City');
        city.focus();
        return false;
    }
    if (!barangay.value) {
        alert('Please select a Barangay');
        barangay.focus();
        return false;
    }
    if (!postal.value) {
        alert('Please wait for the Postal Code to be filled');
        return false;
    }
    if (!address.value.trim()) {
        alert('Please enter your detailed Address');
        address.focus();
        return false;
    }

    console.log('Validation passed!'); // Debug log
    return true;
}

// Function to handle step navigation
function navigateToStep(currentStep, nextStep) {
    console.log(`Navigating from ${currentStep} to ${nextStep}`); // Debug log

    // Hide all sections first
    document.querySelectorAll('.booking-form-container > div').forEach(div => {
        if (div.style.display !== 'none') {
            console.log('Hiding:', div.className); // Debug log
        }
        div.style.display = 'none';
    });

    // Show the target section
    const targetSection = document.querySelector(`.${nextStep}-form`);
    if (targetSection) {
        console.log('Showing:', nextStep + '-form'); // Debug log
        targetSection.style.display = 'block';
    } else {
        console.error('Target section not found:', nextStep + '-form'); // Debug log
    }

    // Update step indicators
    document.querySelectorAll('.booking-steps .step').forEach(step => {
        step.classList.remove('active');
    });
    const nextStepIndicator = document.querySelector(`.step[data-step="${nextStep}"]`);
    if (nextStepIndicator) {
        nextStepIndicator.classList.add('active');
    }

    // Show/hide back button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.style.display = nextStep === 'location' ? 'none' : 'block';
    }

    // Update the current step in the form
    const container = document.querySelector('.book-service-container');
    if (container) {
        container.dataset.currentStep = nextStep;
        console.log('Updated current step to:', nextStep); // Debug log
    }
}

// Function to handle toggle buttons
function handleToggleButtons(container) {
    const buttons = container.querySelectorAll('.toggle-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            updateUnitDetailsSummary();
        });
    });
}

// Function to handle number inputs
function handleNumberInput(container) {
    const input = container.querySelector('input[type="number"]');
    const minusBtn = container.querySelector('.minus');
    const plusBtn = container.querySelector('.plus');

    minusBtn.addEventListener('click', () => {
        const currentValue = parseFloat(input.value);
        if (currentValue > parseFloat(input.min)) {
            input.value = (currentValue - parseFloat(input.step)).toFixed(1);
            updateUnitDetailsSummary();
        }
    });

    plusBtn.addEventListener('click', () => {
        const currentValue = parseFloat(input.value);
        if (currentValue < parseFloat(input.max)) {
            input.value = (currentValue + parseFloat(input.step)).toFixed(1);
            updateUnitDetailsSummary();
        }
    });

    input.addEventListener('change', updateUnitDetailsSummary);
}

// Function to validate unit details form
function validateUnitDetailsForm() {
    const hasUnit = document.querySelector('.toggle-buttons .toggle-btn.active')?.dataset.value;
    const airconType = document.getElementById('aircon-type').value;
    const brand = document.getElementById('brand').value;
    const subtype = document.getElementById('aircon-subtype').value;
    const unitCount = document.getElementById('unit-count').value;
    const coolingSize = document.getElementById('cooling-size').value;

    if (!hasUnit) {
        alert('Please indicate if you have a new unit');
        return false;
    }
    if (!airconType) {
        alert('Please select an Aircon Type');
        document.getElementById('aircon-type').focus();
        return false;
    }
    if (!brand) {
        alert('Please select a Brand');
        document.getElementById('brand').focus();
        return false;
    }
    if (!subtype) {
        alert('Please select an Aircon Subtype');
        document.getElementById('aircon-subtype').focus();
        return false;
    }
    if (!unitCount || unitCount < 1) {
        alert('Please specify the number of units');
        document.getElementById('unit-count').focus();
        return false;
    }
    if (!coolingSize || coolingSize < 0.5) {
        alert('Please specify the cooling size');
        document.getElementById('cooling-size').focus();
        return false;
    }
    return true;
}

// Function to validate date and time form
function validateDateTimeForm() {
    const serviceType = document.getElementById('service-type').value;
    const serviceDate = document.getElementById('service-date').value;
    const serviceTime = document.getElementById('service-time').value;

    if (!serviceType) {
        alert('Please select a Service Type');
        document.getElementById('service-type').focus();
        return false;
    }
    if (!serviceDate) {
        alert('Please select a Service Date');
        document.getElementById('service-date').focus();
        return false;
    }
    if (!serviceTime) {
        alert('Please select a Preferred Time');
        document.getElementById('service-time').focus();
        return false;
    }
    return true;
}

// Function to update date and time summary
function updateDateTimeSummary() {
    const summaryContent = document.querySelector('.summary-content');
    const serviceType = document.getElementById('service-type').value;
    const serviceDate = document.getElementById('service-date').value;
    const serviceTime = document.getElementById('service-time').value;
    const technicianName = document.getElementById('technician-name').value;
    const comments = document.getElementById('service-comments').value;

    let summary = '<div class="summary-section date-time-summary">';
    summary += '<h4>Schedule Details</h4>';
    
    if (serviceType || serviceDate || serviceTime || technicianName || comments) {
        if (serviceType) {
            summary += `<p><strong>Service Type:</strong> ${serviceType}</p>`;
        }
        if (serviceDate) {
            const formattedDate = new Date(serviceDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            summary += `<p><strong>Service Date:</strong> ${formattedDate}</p>`;
        }
        if (serviceTime) {
            const timeRanges = {
                'morning': '8:00 AM - 12:00 PM',
                'afternoon': '1:00 PM - 5:00 PM'
            };
            summary += `<p><strong>Preferred Time:</strong> ${timeRanges[serviceTime]}</p>`;
        }
        if (technicianName) {
            summary += `<p><strong>Technician:</strong> ${technicianName}</p>`;
        }
        if (comments) {
            summary += `<p><strong>Comments:</strong> ${comments}</p>`;
        }
    } else {
        summary += '<p class="no-details">No schedule details provided yet.</p>';
    }
    
    summary += '</div>';

    // Keep location and unit details summaries if they exist
    const locationSummary = document.querySelector('.location-summary');
    const unitDetailsSummary = document.querySelector('.unit-details-summary');
    
    let finalSummary = '';
    if (locationSummary) {
        finalSummary += locationSummary.outerHTML;
    }
    if (unitDetailsSummary) {
        finalSummary += unitDetailsSummary.outerHTML;
    }
    finalSummary += summary;
    
    summaryContent.innerHTML = finalSummary;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    const postalInput = document.getElementById('postal');
    const addressInput = document.getElementById('address');

    // Add change event listeners for location form
    provinceSelect?.addEventListener('change', () => {
        populateCities();
        updateLocationSummary();
    });

    citySelect?.addEventListener('change', () => {
        populateBarangays();
        updateLocationSummary();
    });

    barangaySelect?.addEventListener('change', () => {
        autoFillPostalCode();
        updateLocationSummary();
    });

    postalInput?.addEventListener('input', updateLocationSummary);
    addressInput?.addEventListener('input', updateLocationSummary);

    // Initialize Unit Details form controls
    const unitDetailsForm = document.querySelector('.unit-details-form');
    if (unitDetailsForm) {
        // Initialize toggle buttons
        const toggleContainers = unitDetailsForm.querySelectorAll('.toggle-buttons, .unit-toggle');
        toggleContainers.forEach(handleToggleButtons);

        // Initialize number inputs
        const numberInputs = unitDetailsForm.querySelectorAll('.number-input');
        numberInputs.forEach(handleNumberInput);

        // Add change event listeners for selects and textarea
        const selects = unitDetailsForm.querySelectorAll('select');
        selects.forEach(select => {
            select.addEventListener('change', updateUnitDetailsSummary);
        });

        const textarea = unitDetailsForm.querySelector('textarea');
        textarea.addEventListener('input', updateUnitDetailsSummary);
    }

    // Initialize Date & Time form
    const dateInput = document.getElementById('service-date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }

    // Add event listeners for date and time form
    const serviceTypeSelect = document.getElementById('service-type');
    const serviceTimeSelect = document.getElementById('service-time');
    const technicianInput = document.getElementById('technician-name');
    const commentsTextarea = document.getElementById('service-comments');

    serviceTypeSelect?.addEventListener('change', updateDateTimeSummary);
    dateInput?.addEventListener('change', updateDateTimeSummary);
    serviceTimeSelect?.addEventListener('change', updateDateTimeSummary);
    technicianInput?.addEventListener('input', updateDateTimeSummary);
    commentsTextarea?.addEventListener('input', updateDateTimeSummary);

    // Add navigation button handlers
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.book-service-container').dataset.currentStep || 'location';
            
            if (currentStep === 'location') {
                if (validateLocationForm()) {
                    navigateToStep('location', 'unit-details');
                }
            } else if (currentStep === 'unit-details') {
                if (validateUnitDetailsForm()) {
                    navigateToStep('unit-details', 'date-time');
                }
            } else if (currentStep === 'date-time') {
                if (validateDateTimeForm()) {
                    navigateToStep('date-time', 'contact');
                }
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = this.closest('.book-service-container').dataset.currentStep;
            
            if (currentStep === 'unit-details') {
                navigateToStep('unit-details', 'location');
            } else if (currentStep === 'date-time') {
                navigateToStep('date-time', 'unit-details');
            } else if (currentStep === 'contact') {
                navigateToStep('contact', 'date-time');
            }
        });
    });

    // Initialize the form with the first step
    const bookingContainer = document.querySelector('.book-service-container');
    if (bookingContainer) {
        bookingContainer.dataset.currentStep = 'location';
        navigateToStep(null, 'location');
    }

    // Initialize summaries
    updateLocationSummary();
    updateUnitDetailsSummary();
    updateDateTimeSummary();
}); 