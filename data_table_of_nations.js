
const tableOfNations = [
    // --- Japheth's Descendants (Gen 10:2-5) ---
    { id: 'gomer', name: 'Gomer', parents: ['japheth'], children: ['ashkenaz', 'riphath', 'togarmah'], gender: 'male', references: ['Gen 10:2'] },
    { id: 'magog', name: 'Magog', parents: ['japheth'], children: [], gender: 'male', references: ['Gen 10:2'] },
    { id: 'madai', name: 'Madai', parents: ['japheth'], children: [], gender: 'male', references: ['Gen 10:2'] },
    { id: 'javan', name: 'Javan', parents: ['japheth'], children: ['elishah', 'tarshish', 'kittim', 'dodanim'], gender: 'male', references: ['Gen 10:2'] },
    { id: 'tubal', name: 'Tubal', parents: ['japheth'], children: [], gender: 'male', references: ['Gen 10:2'] },
    { id: 'meshech', name: 'Meshech', parents: ['japheth'], children: [], gender: 'male', references: ['Gen 10:2'] },
    { id: 'tiras', name: 'Tiras', parents: ['japheth'], children: [], gender: 'male', references: ['Gen 10:2'] },

    { id: 'ashkenaz', name: 'Ashkenaz', parents: ['gomer'], children: [], gender: 'male', references: ['Gen 10:3'] },
    { id: 'riphath', name: 'Riphath', parents: ['gomer'], children: [], gender: 'male', references: ['Gen 10:3'] },
    { id: 'togarmah', name: 'Togarmah', parents: ['gomer'], children: [], gender: 'male', references: ['Gen 10:3'] },

    { id: 'elishah', name: 'Elishah', parents: ['javan'], children: [], gender: 'male', references: ['Gen 10:4'] },
    { id: 'tarshish', name: 'Tarshish', parents: ['javan'], children: [], gender: 'male', references: ['Gen 10:4'] },
    { id: 'kittim', name: 'Kittim', parents: ['javan'], children: [], gender: 'male', references: ['Gen 10:4'] },
    { id: 'dodanim', name: 'Dodanim', parents: ['javan'], children: [], gender: 'male', references: ['Gen 10:4'] },

    // --- Ham's Descendants (Gen 10:6-20) ---
    { id: 'cush', name: 'Cush', parents: ['ham'], children: ['seba', 'havilah', 'sabtah', 'raamah', 'sabteca', 'nimrod'], gender: 'male', references: ['Gen 10:6'] },
    { id: 'mizraim', name: 'Mizraim', parents: ['ham'], children: ['ludim', 'anamim', 'lehabim', 'naphtuhim', 'pathrusim', 'casluhim', 'caphtorim'], gender: 'male', description: 'Egypt', references: ['Gen 10:6'] },
    { id: 'phut', name: 'Phut', parents: ['ham'], children: [], gender: 'male', references: ['Gen 10:6'] },
    { id: 'canaan', name: 'Canaan', parents: ['ham'], children: ['sidon', 'heth', 'jeebusite', 'amorite', 'girgashite', 'hivite', 'arkite', 'sinite', 'arvadite', 'zemarite', 'hamathite'], gender: 'male', references: ['Gen 10:6'] },

    // Cush Lines
    { id: 'seba', name: 'Seba', parents: ['cush'], children: [], gender: 'male', references: ['Gen 10:7'] },
    { id: 'havilah', name: 'Havilah', parents: ['cush'], children: [], gender: 'male', references: ['Gen 10:7'] },
    { id: 'sabtah', name: 'Sabtah', parents: ['cush'], children: [], gender: 'male', references: ['Gen 10:7'] },
    { id: 'raamah', name: 'Raamah', parents: ['cush'], children: ['sheba_cush', 'dedan'], gender: 'male', references: ['Gen 10:7'] },
    { id: 'sabteca', name: 'Sabteca', parents: ['cush'], children: [], gender: 'male', references: ['Gen 10:7'] },
    { id: 'nimrod', name: 'Nimrod', parents: ['cush'], children: [], gender: 'male', description: 'Mighty hunter', references: ['Gen 10:8'] },

    { id: 'sheba_cush', name: 'Sheba', parents: ['raamah'], children: [], gender: 'male', references: ['Gen 10:7'] },
    { id: 'dedan', name: 'Dedan', parents: ['raamah'], children: [], gender: 'male', references: ['Gen 10:7'] },

    // Mizraim Lines (Clans/Peoples usually, but treated as sons in genealogy)
    { id: 'ludim', name: 'Ludim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:13'] },
    { id: 'anamim', name: 'Anamim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:13'] },
    { id: 'lehabim', name: 'Lehabim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:13'] },
    { id: 'naphtuhim', name: 'Naphtuhim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:13'] },
    { id: 'pathrusim', name: 'Pathrusim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:14'] },
    { id: 'casluhim', name: 'Casluhim', parents: ['mizraim'], children: ['philistines'], gender: 'male', references: ['Gen 10:14'] },
    { id: 'caphtorim', name: 'Caphtorim', parents: ['mizraim'], children: [], gender: 'male', references: ['Gen 10:14'] },
    { id: 'philistines', name: 'Philistines', parents: ['casluhim'], children: [], gender: 'male', description: 'People group', references: ['Gen 10:14'] },

    // Canaan Lines
    { id: 'sidon', name: 'Sidon', parents: ['canaan'], children: [], gender: 'male', description: 'Firstborn', references: ['Gen 10:15'] },
    { id: 'heth', name: 'Heth', parents: ['canaan'], children: [], gender: 'male', description: 'Hittites', references: ['Gen 10:15'] },
    { id: 'jeebusite', name: 'Jebusites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:16'] },
    { id: 'amorite', name: 'Amorites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:16'] },
    { id: 'girgashite', name: 'Girgashites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:16'] },
    { id: 'hivite', name: 'Hivites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:17'] },
    { id: 'arkite', name: 'Arkites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:17'] },
    { id: 'sinite', name: 'Sinites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:17'] },
    { id: 'arvadite', name: 'Arvadites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:18'] },
    { id: 'zemarite', name: 'Zemarites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:18'] },
    { id: 'hamathite', name: 'Hamathites', parents: ['canaan'], children: [], gender: 'male', references: ['Gen 10:18'] },

    // --- Shem's Other Descendants (Gen 10:21-31) ---
    // Arpachshad is in Patriarchs.
    { id: 'elam', name: 'Elam', parents: ['shem'], children: [], gender: 'male', references: ['Gen 10:22'] },
    { id: 'asshur', name: 'Asshur', parents: ['shem'], children: [], gender: 'male', references: ['Gen 10:22'] },
    { id: 'lud', name: 'Lud', parents: ['shem'], children: [], gender: 'male', references: ['Gen 10:22'] },
    { id: 'aram', name: 'Aram', parents: ['shem'], children: ['uz_aram', 'hul', 'gether', 'mash'], gender: 'male', references: ['Gen 10:22'] },

    { id: 'uz_aram', name: 'Uz', parents: ['aram'], children: [], gender: 'male', references: ['Gen 10:23'] },
    { id: 'hul', name: 'Hul', parents: ['aram'], children: [], gender: 'male', references: ['Gen 10:23'] },
    { id: 'gether', name: 'Gether', parents: ['aram'], children: [], gender: 'male', references: ['Gen 10:23'] },
    { id: 'mash', name: 'Mash', parents: ['aram'], children: [], gender: 'male', references: ['Gen 10:23'] },
];
