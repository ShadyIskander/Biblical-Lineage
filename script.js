
// --- Data Section ---

const adamToNoah = [
    { id: 'adam', name: 'Adam', parents: [], children: ['cain', 'abel', 'seth'], spouses: ['eve'], gender: 'male', title: 'First Man', description: 'Created in image of God', references: ['Gen 1:27 (Image)', 'Gen 2:7 (Creation)', 'Gen 3:6 (Fall)', 'Gen 5:1-5 (Genealogy)', '1 Chron 1:1', 'Luke 3:38', 'Rom 5:12 (Sin)', '1 Cor 15:22 (In Adam all die)'] },
    { id: 'eve', name: 'Eve', parents: [], children: ['cain', 'abel', 'seth'], spouses: ['adam'], gender: 'female', title: 'First Woman', description: 'Helper and mother of all', references: ['Gen 2:18-22 (Creation)', 'Gen 3:1-13 (Temptation)', 'Gen 3:20 (Mother of all living)', '2 Cor 11:3 (Deceived)'] },
    { id: 'cain', name: 'Cain', parents: ['adam', 'eve'], children: ['enoch_cain'], gender: 'male', description: 'First murderer, built city', references: ['Gen 4:1-16 (Birth and murder)', 'Gen 4:17 (City)', '1 John 3:12', 'Heb 11:4 (Comparison to Abel)'] },
    { id: 'abel', name: 'Abel', parents: ['adam', 'eve'], children: [], gender: 'male', title: 'First Martyr', description: 'Shepherd, martyr', references: ['Gen 4:2-8 (First sacrifice)', 'Gen 4:10 (Blood cries)', 'Heb 11:4 (Faith)', 'Heb 12:24 (Blood speaks)'] },
    { id: 'seth', name: 'Seth', parents: ['adam', 'eve'], children: ['enos'], gender: 'male', title: 'Ancestor of Noah', description: 'Third son, line of Christ', references: ['Gen 4:25 (Born)', 'Gen 5:3-8 (Genealogy)', '1 Chron 1:1', 'Luke 3:38', 'Gen 4:26 (Men called on God)'] },
    { id: 'enoch_cain', name: 'Enoch', parents: ['cain'], children: ['irad'], gender: 'male', references: ['Gen 4:17'] },
    { id: 'irad', name: 'Irad', parents: ['enoch_cain'], children: ['mehujael'], gender: 'male', references: ['Gen 4:18'] },
    { id: 'mehujael', name: 'Mehujael', parents: ['irad'], children: ['methusael'], gender: 'male', references: ['Gen 4:18'] },
    { id: 'methusael', name: 'Methusael', parents: ['mehujael'], children: ['lamech_cain'], gender: 'male', references: ['Gen 4:18'] },
    { id: 'lamech_cain', name: 'Lamech', parents: ['methusael'], children: ['jabal', 'jubal', 'tubal_cain', 'naamah'], spouses: ['adah', 'zillah'], gender: 'male', references: ['Gen 4:18-24'] },
    { id: 'adah', name: 'Adah', parents: [], children: ['jabal', 'jubal'], spouses: ['lamech_cain'], gender: 'female', references: ['Gen 4:19'] },
    { id: 'zillah', name: 'Zillah', parents: [], children: ['tubal_cain', 'naamah'], spouses: ['lamech_cain'], gender: 'female', references: ['Gen 4:19'] },
    { id: 'jabal', name: 'Jabal', parents: ['lamech_cain', 'adah'], children: [], gender: 'male', description: 'Father of those who dwell in tents', references: ['Gen 4:20'] },
    { id: 'jubal', name: 'Jubal', parents: ['lamech_cain', 'adah'], children: [], gender: 'male', description: 'Father of harp and lyre players', references: ['Gen 4:21'] },
    { id: 'tubal_cain', name: 'Tubal-cain', parents: ['lamech_cain', 'zillah'], children: [], gender: 'male', description: 'Forger of bronze and iron instruments', references: ['Gen 4:22'] },
    { id: 'naamah', name: 'Naamah', parents: ['lamech_cain', 'zillah'], children: [], gender: 'female', references: ['Gen 4:22'] },
    { id: 'enos', name: 'Enos', parents: ['seth'], children: ['cainan'], gender: 'male', references: ['Gen 5:6', '1 Chron 1:1', 'Luke 3:38'] },
    { id: 'cainan', name: 'Cainan', parents: ['enos'], children: ['mahalaleel'], gender: 'male', references: ['Gen 5:9'] },
    { id: 'mahalaleel', name: 'Mahalaleel', parents: ['cainan'], children: ['jared'], gender: 'male', references: ['Gen 5:12'] },
    { id: 'jared', name: 'Jared', parents: ['mahalaleel'], children: ['enoch_seth'], gender: 'male', references: ['Gen 5:15'] },
    { id: 'enoch_seth', name: 'Enoch', parents: ['jared'], children: ['methuselah'], gender: 'male', description: 'Walked with God', references: ['Gen 5:18', '1 Chron 1:3', 'Luke 3:37', 'Heb 11:5'] },
    { id: 'methuselah', name: 'Methuselah', parents: ['enoch_seth'], children: ['lamech_seth'], gender: 'male', description: 'Oldest man (969 years)', references: ['Gen 5:21'] },
    { id: 'lamech_seth', name: 'Lamech', parents: ['methuselah'], children: ['noah'], gender: 'male', references: ['Gen 5:25'] },
    { id: 'noah', name: 'Noah', parents: ['lamech_seth'], children: ['shem', 'ham', 'japheth'], gender: 'male', title: 'Preacher of Righteousness', description: 'Built the Ark, saved family', references: ['Gen 5:29 (Birth)', 'Gen 6:8-9 (Favor, righteous)', 'Gen 6-9 (Ark and Flood)', 'Heb 11:7 (Faith)', '1 Peter 3:20 (Saved through water)', '2 Peter 2:5 (Preacher)'] },
    { id: 'shem', name: 'Shem', parents: ['noah'], children: ['elam', 'asshur', 'arpachshad', 'lud', 'aram'], gender: 'male', title: 'Semitic Line', description: 'Ancestor of Hebrews', references: ['Gen 10:21-31', 'Gen 11:10 (Genealogy)', '1 Chron 1:17', 'Luke 3:36'] },
    { id: 'ham', name: 'Ham', parents: ['noah'], children: ['cush', 'mizraim', 'phut', 'canaan'], gender: 'male', description: 'Father of African and Canaanite peoples', references: ['Gen 9:22 (Nakedness)', 'Gen 10:6-20'] },
    { id: 'japheth', name: 'Japheth', parents: ['noah'], children: ['gomer', 'magog', 'madai', 'javan', 'tubal', 'meshech', 'tiras'], gender: 'male', description: 'Ancestor of European and Asian peoples', references: ['Gen 10:2-5'] },
];

const patriarchs = [
    { id: 'arpachshad', name: 'Arpachshad', parents: ['shem'], children: ['shelah'], gender: 'male', references: ['Gen 11:10'] },
    { id: 'shelah', name: 'Shelah', parents: ['arpachshad'], children: ['eber'], gender: 'male', references: ['Gen 11:12'] },
    { id: 'eber', name: 'Eber', parents: ['shelah'], children: ['peleg', 'joktan'], gender: 'male', description: 'Namesake of Hebrews', references: ['Gen 11:14'] },
    { id: 'peleg', name: 'Peleg', parents: ['eber'], children: ['reu'], gender: 'male', description: 'Earth was divided', references: ['Gen 11:16'] },
    { id: 'reu', name: 'Reu', parents: ['peleg'], children: ['serug'], gender: 'male', references: ['Gen 11:18'] },
    { id: 'serug', name: 'Serug', parents: ['reu'], children: ['nahor_gp'], gender: 'male', references: ['Gen 11:20'] },
    { id: 'nahor_gp', name: 'Nahor', parents: ['serug'], children: ['terah'], gender: 'male', references: ['Gen 11:22'] },
    { id: 'terah', name: 'Terah', parents: ['nahor_gp'], children: ['abraham', 'nahor_brother', 'haran'], gender: 'male', references: ['Gen 11:24'] },
    { id: 'abraham', name: 'Abraham', parents: ['terah'], children: ['ishmael', 'isaac', 'zimran', 'jokshan', 'medan', 'midian', 'ishbak', 'shuah'], spouses: ['sarah', 'hagar', 'keturah'], gender: 'male', title: 'Father of the Faithful', description: 'Founder of Israel, tested faith', references: ['Gen 12:1-3 (Call)', 'Gen 15:6 (Believed)', 'Gen 17:4-7 (Covenant)', 'Gen 21:1-7 (Isaac born)', 'Gen 22 (Tested)', 'Matt 1:2', 'Rom 4:3', 'Heb 11:8-12'] },
    { id: 'sarah', name: 'Sarah', parents: [], children: ['isaac'], spouses: ['abraham'], gender: 'female', title: 'Mother of Isaac', description: 'Wife of Abraham', references: ['Gen 12:11-13', 'Gen 17:15-19', 'Gen 21:1-7', 'Heb 11:11'] },
    { id: 'hagar', name: 'Hagar', parents: [], children: ['ishmael'], spouses: ['abraham'], gender: 'female', description: 'Egyptian maidservant', references: ['Gen 16'] },
    { id: 'keturah', name: 'Keturah', parents: [], children: ['zimran', 'jokshan', 'medan', 'midian', 'ishbak', 'shuah'], spouses: ['abraham'], gender: 'female', references: ['Gen 25:1'] },
    { id: 'ishmael', name: 'Ishmael', parents: ['abraham', 'hagar'], children: ['nebaioth', 'kedar', 'adbeel', 'mibsam', 'mishma', 'dumah', 'massa', 'hadad', 'tema', 'jetur', 'naphish', 'kedemah'], gender: 'male', description: 'Father of 12 princes', references: ['Gen 16', 'Gen 25:12-16', '1 Chron 1:29'] },
    { id: 'nebaioth', name: 'Nebaioth', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:13', '1 Chron 1:29'] },
    { id: 'kedar', name: 'Kedar', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:13', '1 Chron 1:29'] },
    { id: 'adbeel', name: 'Adbeel', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:13', '1 Chron 1:29'] },
    { id: 'mibsam', name: 'Mibsam', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:13', '1 Chron 1:29'] },
    { id: 'mishma', name: 'Mishma', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:14', '1 Chron 1:30'] },
    { id: 'dumah', name: 'Dumah', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:14', '1 Chron 1:30'] },
    { id: 'massa', name: 'Massa', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:14', '1 Chron 1:30'] },
    { id: 'hadad', name: 'Hadad', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:15', '1 Chron 1:30'] },
    { id: 'tema', name: 'Tema', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:15', '1 Chron 1:30'] },
    { id: 'jetur', name: 'Jetur', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:15', '1 Chron 1:31'] },
    { id: 'naphish', name: 'Naphish', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:15', '1 Chron 1:31'] },
    { id: 'kedemah', name: 'Kedemah', parents: ['ishmael'], children: [], gender: 'male', references: ['Gen 25:15', '1 Chron 1:31'] },
    { id: 'zimran', name: 'Zimran', parents: ['abraham', 'keturah'], children: [], gender: 'male', references: ['Gen 25:2', '1 Chron 1:32'] },
    { id: 'jokshan', name: 'Jokshan', parents: ['abraham', 'keturah'], children: ['sheba', 'dedan'], gender: 'male', references: ['Gen 25:2-3', '1 Chron 1:32'] },
    { id: 'sheba', name: 'Sheba', parents: ['jokshan'], children: [], gender: 'male', references: ['Gen 25:3', '1 Chron 1:32'] },
    { id: 'dedan', name: 'Dedan', parents: ['jokshan'], children: [], gender: 'male', references: ['Gen 25:3', '1 Chron 1:32'] },
    { id: 'medan', name: 'Medan', parents: ['abraham', 'keturah'], children: [], gender: 'male', references: ['Gen 25:2', '1 Chron 1:32'] },
    { id: 'midian', name: 'Midian', parents: ['abraham', 'keturah'], children: ['ephah', 'epher', 'hanoch_midian', 'abida', 'eldaah'], gender: 'male', description: 'Father of Midianites', references: ['Gen 25:2-4', '1 Chron 1:32-33'] },
    { id: 'ephah', name: 'Ephah', parents: ['midian'], children: [], gender: 'male', references: ['Gen 25:4', '1 Chron 1:33'] },
    { id: 'epher', name: 'Epher', parents: ['midian'], children: [], gender: 'male', references: ['Gen 25:4', '1 Chron 1:33'] },
    { id: 'hanoch_midian', name: 'Hanoch', parents: ['midian'], children: [], gender: 'male', references: ['Gen 25:4', '1 Chron 1:33'] },
    { id: 'abida', name: 'Abida', parents: ['midian'], children: [], gender: 'male', references: ['Gen 25:4', '1 Chron 1:33'] },
    { id: 'eldaah', name: 'Eldaah', parents: ['midian'], children: [], gender: 'male', references: ['Gen 25:4', '1 Chron 1:33'] },
    { id: 'ishbak', name: 'Ishbak', parents: ['abraham', 'keturah'], children: [], gender: 'male', references: ['Gen 25:2', '1 Chron 1:32'] },
    { id: 'shuah', name: 'Shuah', parents: ['abraham', 'keturah'], children: [], gender: 'male', references: ['Gen 25:2', '1 Chron 1:32'] },
    { id: 'haran', name: 'Haran', parents: ['terah'], children: ['lot', 'milcah', 'iscah'], gender: 'male', references: ['Gen 11:27'] },
    { id: 'iscah', name: 'Iscah', parents: ['haran'], children: [], gender: 'female', references: ['Gen 11:29'] },
    { id: 'nahor_brother', name: 'Nahor', parents: ['terah'], children: ['uz', 'buz', 'kemuel', 'kesed', 'hazo', 'pildash', 'jidlaph', 'bethuel', 'tebah', 'gaham', 'tahash', 'maacah_nahor'], spouses: ['milcah', 'reumah'], gender: 'male', references: ['Gen 11:27', 'Gen 22:20-24'] },
    { id: 'milcah', name: 'Milcah', parents: ['haran'], children: ['uz', 'buz', 'kemuel', 'kesed', 'hazo', 'pildash', 'jidlaph', 'bethuel'], spouses: ['nahor_brother'], gender: 'female', references: ['Gen 11:29', 'Gen 22:20'] },
    { id: 'reumah', name: 'Reumah', parents: [], children: ['tebah', 'gaham', 'tahash', 'maacah_nahor'], spouses: ['nahor_brother'], gender: 'female', description: 'Concubine of Nahor', references: ['Gen 22:24'] },
    { id: 'uz', name: 'Uz', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:21'] },
    { id: 'buz', name: 'Buz', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:21'] },
    { id: 'kemuel', name: 'Kemuel', parents: ['nahor_brother', 'milcah'], children: ['aram'], gender: 'male', references: ['Gen 22:21'] },
    { id: 'aram', name: 'Aram', parents: ['kemuel'], children: [], gender: 'male', references: ['Gen 22:21'] },
    { id: 'kesed', name: 'Kesed', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:22'] },
    { id: 'hazo', name: 'Hazo', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:22'] },
    { id: 'pildash', name: 'Pildash', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:22'] },
    { id: 'jidlaph', name: 'Jidlaph', parents: ['nahor_brother', 'milcah'], children: [], gender: 'male', references: ['Gen 22:22'] },
    { id: 'tebah', name: 'Tebah', parents: ['nahor_brother', 'reumah'], children: [], gender: 'male', references: ['Gen 22:24'] },
    { id: 'gaham', name: 'Gaham', parents: ['nahor_brother', 'reumah'], children: [], gender: 'male', references: ['Gen 22:24'] },
    { id: 'tahash', name: 'Tahash', parents: ['nahor_brother', 'reumah'], children: [], gender: 'male', references: ['Gen 22:24'] },
    { id: 'maacah_nahor', name: 'Maacah', parents: ['nahor_brother', 'reumah'], children: [], gender: 'female', references: ['Gen 22:24'] },
    { id: 'lot', name: 'Lot', parents: ['haran'], children: ['lot_daughter_1', 'lot_daughter_2', 'moab', 'ben_ammi'], spouses: ['lot_wife', 'lot_daughter_1', 'lot_daughter_2'], gender: 'male', references: ['Gen 11-19'] },
    { id: 'lot_wife', name: 'Lot\'s Wife', parents: [], children: ['lot_daughter_1', 'lot_daughter_2'], spouses: ['lot'], gender: 'female', description: 'Turned to pillar of salt', references: ['Gen 19:26'] },
    { id: 'lot_daughter_1', name: 'Firstborn Daughter', parents: ['lot', 'lot_wife'], children: ['moab'], spouses: ['lot'], gender: 'female', references: ['Gen 19'] },
    { id: 'lot_daughter_2', name: 'Younger Daughter', parents: ['lot', 'lot_wife'], children: ['ben_ammi'], spouses: ['lot'], gender: 'female', references: ['Gen 19'] },
    { id: 'moab', name: 'Moab', parents: ['lot', 'lot_daughter_1'], children: ['zippor', 'eglon', 'mesha', 'ruth'], gender: 'male', description: 'Father of Moabites', references: ['Gen 19:37'] },
    { id: 'ben_ammi', name: 'Ben-Ammi', parents: ['lot', 'lot_daughter_2'], children: ['nahash', 'naamah_ammonite'], gender: 'male', description: 'Father of Ammonites', references: ['Gen 19:38'] },

    // Moabite Descendants
    { id: 'zippor', name: 'Zippor', parents: ['moab'], children: ['balak'], gender: 'male', references: ['Num 22:4'] },
    { id: 'balak', name: 'Balak', parents: ['zippor'], children: [], gender: 'male', title: 'King of Moab', references: ['Num 22-24'] },
    { id: 'eglon', name: 'Eglon', parents: ['moab'], children: [], gender: 'male', title: 'King of Moab', references: ['Judges 3'] },
    { id: 'mesha', name: 'Mesha', parents: ['moab'], children: [], gender: 'male', title: 'King of Moab', references: ['2 Kings 3'] },

    // Ammonite Descendants
    { id: 'nahash', name: 'Nahash', parents: ['ben_ammi'], children: ['hanun', 'shobi'], gender: 'male', title: 'King of Ammon', references: ['1 Sam 11', '2 Sam 10'] },
    { id: 'hanun', name: 'Hanun', parents: ['nahash'], children: [], gender: 'male', title: 'King of Ammon', references: ['2 Sam 10'] },
    { id: 'shobi', name: 'Shobi', parents: ['nahash'], children: [], gender: 'male', references: ['2 Sam 17:27'] },
    { id: 'isaac', name: 'Isaac', parents: ['abraham', 'sarah'], children: ['esau', 'jacob'], spouses: ['rebekah'], gender: 'male', title: 'Son of Promise', description: 'Child of covenant, blessed Jacob', references: ['Gen 21:1-8', 'Gen 22 (Binding)', 'Gen 25:19-26 (Esau/Jacob)', 'Gen 26', 'Gen 27 (Blessing)', 'Matt 1:2', 'Heb 11:17'] },
    { id: 'rebekah', name: 'Rebekah', parents: ['bethuel'], children: ['esau', 'jacob'], spouses: ['isaac'], gender: 'female', references: ['Gen 24'] },
    { id: 'bethuel', name: 'Bethuel', parents: ['nahor_brother', 'milcah'], children: ['rebekah', 'laban'], gender: 'male', references: ['Gen 22:23'] },
    { id: 'laban', name: 'Laban', parents: ['bethuel'], children: ['leah', 'rachel'], gender: 'male', references: ['Gen 24-31'] },
    { id: 'esau', name: 'Esau', parents: ['isaac', 'rebekah'], children: ['eliphaz', 'reuel', 'jeush', 'jalam', 'korah_esau'], spouses: ['adah_esau', 'basemath', 'oholibamah'], gender: 'male', description: 'Edom', references: ['Gen 25-36', '1 Chron 1:35'] },
    { id: 'adah_esau', name: 'Adah', parents: ['elon_hittite'], children: ['eliphaz'], spouses: ['esau'], gender: 'female', description: 'Daughter of Elon the Hittite', references: ['Gen 36:2'] },
    { id: 'elon_hittite', name: 'Elon', parents: [], children: ['adah_esau'], gender: 'male', description: 'Hittite', references: ['Gen 36:2'] },
    { id: 'basemath', name: 'Basemath', parents: ['ishmael'], children: ['reuel'], spouses: ['esau'], gender: 'female', description: 'Daughter of Ishmael', references: ['Gen 36:3'] },
    { id: 'oholibamah', name: 'Oholibamah', parents: ['anah'], children: ['jeush', 'jalam', 'korah_esau'], spouses: ['esau'], gender: 'female', description: 'Daughter of Anah', references: ['Gen 36:2'] },
    { id: 'anah', name: 'Anah', parents: ['zibeon'], children: ['oholibamah'], gender: 'male', references: ['Gen 36:2'] },
    { id: 'zibeon', name: 'Zibeon', parents: [], children: ['anah'], gender: 'male', description: 'Hivite', references: ['Gen 36:2'] },
    { id: 'eliphaz', name: 'Eliphaz', parents: ['esau', 'adah_esau'], children: ['teman', 'omar', 'zepho', 'gatam', 'kenaz', 'amalek'], spouses: ['timna'], gender: 'male', references: ['Gen 36:4', '1 Chron 1:35-36'] },
    { id: 'timna', name: 'Timna', parents: [], children: ['amalek'], spouses: ['eliphaz'], gender: 'female', description: 'Concubine of Eliphaz', references: ['Gen 36:12'] },
    { id: 'teman', name: 'Teman', parents: ['eliphaz'], children: [], gender: 'male', references: ['Gen 36:11', '1 Chron 1:36'] },
    { id: 'omar', name: 'Omar', parents: ['eliphaz'], children: [], gender: 'male', references: ['Gen 36:11', '1 Chron 1:36'] },
    { id: 'zepho', name: 'Zepho', parents: ['eliphaz'], children: [], gender: 'male', references: ['Gen 36:11', '1 Chron 1:36'] },
    { id: 'gatam', name: 'Gatam', parents: ['eliphaz'], children: [], gender: 'male', references: ['Gen 36:11', '1 Chron 1:36'] },
    { id: 'kenaz', name: 'Kenaz', parents: ['eliphaz'], children: [], gender: 'male', references: ['Gen 36:11', '1 Chron 1:36'] },
    { id: 'amalek', name: 'Amalek', parents: ['eliphaz', 'timna'], children: [], gender: 'male', description: 'Father of Amalekites', references: ['Gen 36:12', '1 Chron 1:36'] },
    { id: 'reuel', name: 'Reuel', parents: ['esau', 'basemath'], children: ['nahath', 'zerah_reuel', 'shammah', 'mizzah'], gender: 'male', references: ['Gen 36:4', '1 Chron 1:35'] },
    { id: 'nahath', name: 'Nahath', parents: ['reuel'], children: [], gender: 'male', references: ['Gen 36:13', '1 Chron 1:37'] },
    { id: 'zerah_reuel', name: 'Zerah', parents: ['reuel'], children: [], gender: 'male', references: ['Gen 36:13', '1 Chron 1:37'] },
    { id: 'shammah', name: 'Shammah', parents: ['reuel'], children: [], gender: 'male', references: ['Gen 36:13', '1 Chron 1:37'] },
    { id: 'mizzah', name: 'Mizzah', parents: ['reuel'], children: [], gender: 'male', references: ['Gen 36:13', '1 Chron 1:37'] },
    { id: 'jeush', name: 'Jeush', parents: ['esau', 'oholibamah'], children: [], gender: 'male', references: ['Gen 36:5', '1 Chron 1:35'] },
    { id: 'jalam', name: 'Jalam', parents: ['esau', 'oholibamah'], children: [], gender: 'male', references: ['Gen 36:5', '1 Chron 1:35'] },
    { id: 'korah_esau', name: 'Korah', parents: ['esau', 'oholibamah'], children: [], gender: 'male', references: ['Gen 36:5', '1 Chron 1:35'] },
    { id: 'jacob', name: 'Jacob', parents: ['isaac', 'rebekah'], children: ['reuben', 'simeon', 'levi', 'judah', 'issachar', 'zebulun', 'dinah', 'joseph', 'benjamin', 'dan', 'naphtali', 'gad', 'asher'], spouses: ['leah', 'rachel', 'bilhah', 'zilpah'], gender: 'male', title: 'Israel (God strives)', description: 'Father of 12 tribes, struggled with God', references: ['Gen 27:1-40 (Blessing)', 'Gen 28:10-22 (Ladder)', 'Gen 29-30 (Marriages)', 'Gen 32:22-32 (Wrestling/Renamed)', 'Gen 35:10 (Israel)', 'Gen 37-50 (Joseph)', 'Matt 1:2', 'Luke 3:34', 'Rom 9:13'] },
    { id: 'leah', name: 'Leah', parents: ['laban'], children: ['reuben', 'simeon', 'levi', 'judah', 'issachar', 'zebulun', 'dinah'], spouses: ['jacob'], gender: 'female', references: ['Gen 29'] },
    { id: 'rachel', name: 'Rachel', parents: ['laban'], children: ['joseph', 'benjamin'], spouses: ['jacob'], gender: 'female', references: ['Gen 29'] },
    { id: 'bilhah', name: 'Bilhah', parents: [], children: ['dan', 'naphtali'], spouses: ['jacob'], gender: 'female', references: ['Gen 30'] },
    { id: 'zilpah', name: 'Zilpah', parents: [], children: ['gad', 'asher'], spouses: ['jacob'], gender: 'female', references: ['Gen 30'] },
    { id: 'reuben', name: 'Reuben', parents: ['jacob', 'leah'], children: ['hanoch', 'pallu', 'hezron', 'carmi'], gender: 'male', references: ['Gen 29:32', 'Gen 46:9'] },
    { id: 'simeon', name: 'Simeon', parents: ['jacob', 'leah'], children: ['jemuel', 'jamin', 'ohad', 'jachin', 'zohar', 'shaul'], gender: 'male', references: ['Gen 29:33', 'Gen 46:10'] },
    { id: 'levi', name: 'Levi', parents: ['jacob', 'leah'], children: ['gershon', 'kohath', 'merari'], gender: 'male', references: ['Gen 29:34', 'Gen 46:11'] },
    { id: 'judah', name: 'Judah', parents: ['jacob', 'leah'], children: ['er', 'onan', 'shelah_judah', 'perez', 'zerah'], spouses: ['shua_daughter', 'tamar'], gender: 'male', title: 'Founder of Tribe of Judah', description: 'Leadership, line of David and Christ', references: ['Gen 29:35', 'Gen 37:26-27 (Sold Joseph)', 'Gen 38 (Tamar)', 'Gen 49:8-12 (Shiloh)', '1 Chron 2', 'Matt 1:2-3'] },
    { id: 'issachar', name: 'Issachar', parents: ['jacob', 'leah'], children: ['tola', 'puvah', 'job', 'shimron'], gender: 'male', references: ['Gen 30:18', 'Gen 46:13'] },
    { id: 'zebulun', name: 'Zebulun', parents: ['jacob', 'leah'], children: ['sered', 'elon', 'jahleel'], gender: 'male', references: ['Gen 30:20', 'Gen 46:14'] },
    { id: 'dinah', name: 'Dinah', parents: ['jacob', 'leah'], children: [], gender: 'female', references: ['Gen 30:21', 'Gen 34'] },
    { id: 'joseph', name: 'Joseph', parents: ['jacob', 'rachel'], children: ['manasseh', 'ephraim'], spouses: ['asenath'], gender: 'male', title: 'Savior of Egypt', description: 'Dreamer, sold into slavery, exalted in Egypt', references: ['Gen 37 (Dreams/sold)', 'Gen 39 (Potiphar)', 'Gen 40-41 (Pharaoh\'s dreams)', 'Gen 45 (Revealed)', 'Gen 50', 'Heb 11:22', 'Acts 7:9-16'] },
    { id: 'benjamin', name: 'Benjamin', parents: ['jacob', 'rachel'], children: ['bela', 'becher', 'ashbel', 'gera', 'naaman', 'ehi', 'rosh', 'muppim', 'huppim', 'ard'], gender: 'male', references: ['Gen 35:18', 'Gen 46:21'] },
    { id: 'dan', name: 'Dan', parents: ['jacob', 'bilhah'], children: ['hushim'], gender: 'male', references: ['Gen 30:6', 'Gen 46:23'] },
    { id: 'naphtali', name: 'Naphtali', parents: ['jacob', 'bilhah'], children: ['jahzeel', 'guni', 'jezer', 'shillem'], gender: 'male', references: ['Gen 30:8', 'Gen 46:24'] },
    { id: 'gad', name: 'Gad', parents: ['jacob', 'zilpah'], children: ['ziphion', 'haggi', 'shuni', 'ezbon', 'eri', 'arodi', 'areli'], gender: 'male', references: ['Gen 30:11', 'Gen 46:16'] },
    { id: 'asher', name: 'Asher', parents: ['jacob', 'zilpah'], children: ['imnah', 'ishvah', 'ishvi', 'beriah', 'serah'], gender: 'male', references: ['Gen 30:13', 'Gen 46:17'] },
    { id: 'asenath', name: 'Asenath', parents: [], children: ['manasseh', 'ephraim'], spouses: ['joseph'], gender: 'female', references: ['Gen 41:45'] },


    // Missing Link: Judah -> Boaz
    { id: 'er', name: 'Er', parents: ['judah', 'shua_daughter'], children: [], spouses: ['tamar'], gender: 'male', description: 'Firstborn of Judah, struck down by the Lord', references: ['Gen 38:3-7', '1 Chron 2:3'] },
    { id: 'onan', name: 'Onan', parents: ['judah', 'shua_daughter'], children: [], spouses: ['tamar'], gender: 'male', description: 'Second son of Judah, struck down by the Lord', references: ['Gen 38:4-10', '1 Chron 2:3'] },
    { id: 'shelah_judah', name: 'Shelah', parents: ['judah', 'shua_daughter'], children: [], gender: 'male', description: 'Third son of Judah', references: ['Gen 38:5', '1 Chron 2:3'] },
    { id: 'shua_daughter', name: 'Daughter of Shua', parents: [], children: ['er', 'onan', 'shelah_judah'], spouses: ['judah'], gender: 'female', description: 'Canaanite wife of Judah', references: ['Gen 38:2', '1 Chron 2:3'] },
    { id: 'perez', name: 'Perez', parents: ['judah', 'tamar'], children: ['hezron'], gender: 'male', references: ['Ruth 4:18', '1 Chron 2:4', 'Matt 1:3', 'Luke 3:33'] },
    { id: 'zerah', name: 'Zerah', parents: ['judah', 'tamar'], children: [], gender: 'male', references: ['Gen 38:30', '1 Chron 2:4', 'Matt 1:3'] },
    { id: 'tamar', name: 'Tamar', parents: [], children: ['perez', 'zerah'], spouses: ['judah', 'er', 'onan'], gender: 'female', references: ['Gen 38', 'Matt 1:3'] },
    { id: 'hezron', name: 'Hezron', parents: ['perez'], children: ['ram'], gender: 'male', references: ['Ruth 4:18', '1 Chron 2:5', 'Matt 1:3', 'Luke 3:33'] },
    { id: 'ram', name: 'Ram', parents: ['hezron'], children: ['amminadab'], gender: 'male', references: ['Ruth 4:19', '1 Chron 2:9', 'Matt 1:3', 'Luke 3:33'] },
    { id: 'amminadab', name: 'Amminadab', parents: ['ram'], children: ['nahshon'], gender: 'male', references: ['Ruth 4:19', '1 Chron 2:10', 'Matt 1:4', 'Luke 3:33'] },
    { id: 'nahshon', name: 'Nahshon', parents: ['amminadab'], children: ['salmon'], gender: 'male', title: 'Leader of Judah', references: ['Num 1:7', 'Ruth 4:20', 'Matt 1:4', 'Luke 3:32'] },
    { id: 'salmon', name: 'Salmon', parents: ['nahshon'], children: ['boaz'], spouses: ['rahab'], gender: 'male', references: ['Ruth 4:21', 'Matt 1:5', 'Luke 3:32'] },
    { id: 'rahab', name: 'Rahab', parents: [], children: ['boaz'], spouses: ['salmon'], gender: 'female', description: 'Rahab the Harlot', references: ['Josh 2', 'Matt 1:5'] },
];

const kings = [
    { id: 'samuel', name: 'Samuel', parents: ['elkanah', 'hannah'], children: ['joel', 'abijah'], gender: 'male', description: 'Prophet and Judge', references: ['1 Sam 1'] },
    { id: 'elkanah', name: 'Elkanah', parents: [], children: [], spouses: ['hannah', 'peninnah'], gender: 'male', references: ['1 Sam 1'] },
    { id: 'hannah', name: 'Hannah', parents: [], children: ['samuel'], spouses: ['elkanah'], gender: 'female', references: ['1 Sam 1'] },
    { id: 'kish', name: 'Kish', parents: [], children: ['saul'], gender: 'male', references: ['1 Sam 9'] },
    { id: 'saul', name: 'Saul', parents: ['kish'], children: ['jonathan', 'ishvi', 'malchishua', 'abinadab_saul', 'ish_bosheth', 'michal', 'merab'], gender: 'male', title: 'First King of Israel', references: ['1 Sam 9-31', '1 Chron 8:33'] },
    { id: 'ishvi', name: 'Ishvi', parents: ['saul'], children: [], gender: 'male', references: ['1 Sam 14:49'] },
    { id: 'malchishua', name: 'Malchishua', parents: ['saul'], children: [], gender: 'male', description: 'Killed with Saul', references: ['1 Sam 14:49', '1 Sam 31:2'] },
    { id: 'abinadab_saul', name: 'Abinadab', parents: ['saul'], children: [], gender: 'male', description: 'Killed with Saul', references: ['1 Sam 31:2', '1 Chron 8:33'] },
    { id: 'ish_bosheth', name: 'Ish-bosheth', parents: ['saul'], children: [], gender: 'male', description: 'Also called Esh-baal', references: ['2 Sam 2-4', '1 Chron 8:33'] },
    { id: 'merab', name: 'Merab', parents: ['saul'], children: [], spouses: ['adriel'], gender: 'female', description: 'Eldest daughter of Saul', references: ['1 Sam 14:49', '1 Sam 18:17'] },
    { id: 'adriel', name: 'Adriel', parents: [], children: [], spouses: ['merab'], gender: 'male', description: 'Meholathite', references: ['1 Sam 18:19'] },
    { id: 'jonathan', name: 'Jonathan', parents: ['saul'], children: ['mephibosheth'], gender: 'male', description: 'David\'s friend', references: ['1 Sam 13-31'] },
    { id: 'michal', name: 'Michal', parents: ['saul'], spouses: ['david'], children: [], gender: 'female', references: ['1 Sam 18'] },
    { id: 'jesse', name: 'Jesse', parents: ['obed'], children: ['eliab', 'abinadab', 'shimea', 'nethanel', 'raddai', 'ozem', 'david'], gender: 'male', references: ['Ruth 4:22', '1 Chron 2:13-15'] },
    { id: 'eliab', name: 'Eliab', parents: ['jesse'], children: [], gender: 'male', description: 'Eldest son of Jesse', references: ['1 Sam 16:6', '1 Chron 2:13'] },
    { id: 'abinadab', name: 'Abinadab', parents: ['jesse'], children: [], gender: 'male', description: 'Second son of Jesse', references: ['1 Sam 16:8', '1 Chron 2:13'] },
    { id: 'shimea', name: 'Shimea', parents: ['jesse'], children: [], gender: 'male', description: 'Third son of Jesse, also called Shammah', references: ['1 Sam 16:9', '1 Chron 2:13'] },
    { id: 'nethanel', name: 'Nethanel', parents: ['jesse'], children: [], gender: 'male', description: 'Fourth son of Jesse', references: ['1 Chron 2:14'] },
    { id: 'raddai', name: 'Raddai', parents: ['jesse'], children: [], gender: 'male', description: 'Fifth son of Jesse', references: ['1 Chron 2:14'] },
    { id: 'ozem', name: 'Ozem', parents: ['jesse'], children: [], gender: 'male', description: 'Sixth son of Jesse', references: ['1 Chron 2:15'] },
    { id: 'obed', name: 'Obed', parents: ['boaz', 'ruth'], children: ['jesse'], gender: 'male', references: ['Ruth 4:21'] },
    { id: 'boaz', name: 'Boaz', parents: ['salmon', 'rahab'], children: ['obed'], spouses: ['ruth'], gender: 'male', references: ['Ruth 4'] },
    { id: 'ruth', name: 'Ruth', parents: ['moab'], children: ['obed'], spouses: ['boaz'], gender: 'female', description: 'Moabite Ruth', references: ['Ruth'] },
    { id: 'david', name: 'David', parents: ['jesse'], children: ['amnon', 'daniel_chileab', 'absalom', 'adonijah', 'shephatiah', 'ithream', 'shimea_david', 'shobab', 'nathan', 'solomon', 'ibhar', 'elishua', 'eliphelet_1', 'nogah', 'nepheg', 'japhia', 'elishama', 'eliada', 'eliphelet_2', 'tamar_david'], spouses: ['ahinoam', 'abigail', 'maacah', 'haggith', 'abital', 'eglah', 'bathsheba', 'michal'], gender: 'male', title: 'King of Israel', description: 'Man after God\'s heart, warrior, psalmist', references: ['1 Sam 16:1-13 (Anointed)', '1 Sam 17 (Goliath)', '1 Sam 27-30', '2 Sam 2-5 (King)', '2 Sam 6 (Ark)', '2 Sam 7 (Covenant)', '2 Sam 11-12 (Bathsheba)', 'Psalm 23', '2 Sam 23 (Final words)', 'Matt 1:6', 'Luke 3:31', 'Acts 13:22 (Heart)'] },
    { id: 'amnon', name: 'Amnon', parents: ['david', 'ahinoam'], children: [], gender: 'male', description: 'Firstborn of David', references: ['2 Sam 3:2', '1 Chron 3:1'] },
    { id: 'ahinoam', name: 'Ahinoam', parents: [], children: ['amnon'], spouses: ['david'], gender: 'female', description: 'Jezreelitess', references: ['2 Sam 3:2', '1 Chron 3:1'] },
    { id: 'daniel_chileab', name: 'Daniel', parents: ['david', 'abigail'], children: [], gender: 'male', description: 'Second son, also called Chileab', references: ['2 Sam 3:3', '1 Chron 3:1'] },
    { id: 'absalom', name: 'Absalom', parents: ['david', 'maacah'], children: ['tamar_absalom'], gender: 'male', description: 'Rebelled against David', references: ['2 Sam 3:3', '1 Chron 3:2'] },
    { id: 'maacah', name: 'Maacah', parents: ['talmai'], children: ['absalom'], spouses: ['david', 'rehoboam'], gender: 'female', description: 'Daughter of Talmai king of Geshur', references: ['2 Sam 3:3', '1 Chron 3:2'] },
    { id: 'talmai', name: 'Talmai', parents: [], children: ['maacah'], gender: 'male', title: 'King of Geshur', references: ['2 Sam 3:3'] },
    { id: 'tamar_absalom', name: 'Tamar', parents: ['absalom'], children: [], gender: 'female', references: ['2 Sam 14:27'] },
    { id: 'adonijah', name: 'Adonijah', parents: ['david', 'haggith'], children: [], gender: 'male', description: 'Tried to become king', references: ['2 Sam 3:4', '1 Kings 1', '1 Chron 3:2'] },
    { id: 'haggith', name: 'Haggith', parents: [], children: ['adonijah'], spouses: ['david'], gender: 'female', references: ['2 Sam 3:4', '1 Chron 3:2'] },
    { id: 'shephatiah', name: 'Shephatiah', parents: ['david', 'abital'], children: [], gender: 'male', description: 'Fifth son of David', references: ['2 Sam 3:4', '1 Chron 3:3'] },
    { id: 'abital', name: 'Abital', parents: [], children: ['shephatiah'], spouses: ['david'], gender: 'female', references: ['2 Sam 3:4', '1 Chron 3:3'] },
    { id: 'ithream', name: 'Ithream', parents: ['david', 'eglah'], children: [], gender: 'male', description: 'Sixth son of David', references: ['2 Sam 3:5', '1 Chron 3:3'] },
    { id: 'eglah', name: 'Eglah', parents: [], children: ['ithream'], spouses: ['david'], gender: 'female', references: ['2 Sam 3:5', '1 Chron 3:3'] },
    { id: 'shimea_david', name: 'Shimea', parents: ['david', 'bathsheba'], children: [], gender: 'male', description: 'Son of David by Bathsheba', references: ['1 Chron 3:5'] },
    { id: 'shobab', name: 'Shobab', parents: ['david', 'bathsheba'], children: [], gender: 'male', description: 'Son of David by Bathsheba', references: ['1 Chron 3:5'] },
    { id: 'ibhar', name: 'Ibhar', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:6'] },
    { id: 'elishua', name: 'Elishua', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:6'] },
    { id: 'eliphelet_1', name: 'Eliphelet', parents: ['david'], children: [], gender: 'male', description: 'First Eliphelet', references: ['1 Chron 3:6'] },
    { id: 'nogah', name: 'Nogah', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:7'] },
    { id: 'nepheg', name: 'Nepheg', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:7'] },
    { id: 'japhia', name: 'Japhia', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:7'] },
    { id: 'elishama', name: 'Elishama', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:8'] },
    { id: 'eliada', name: 'Eliada', parents: ['david'], children: [], gender: 'male', references: ['1 Chron 3:8'] },
    { id: 'eliphelet_2', name: 'Eliphelet', parents: ['david'], children: [], gender: 'male', description: 'Second Eliphelet', references: ['1 Chron 3:8'] },
    { id: 'tamar_david', name: 'Tamar', parents: ['david'], children: [], gender: 'female', description: 'Daughter of David', references: ['2 Sam 13', '1 Chron 3:9'] },
    { id: 'abigail', name: 'Abigail', parents: ['jesse'], children: ['amasa'], spouses: ['jether', 'david'], gender: 'female', description: 'Sister of David', references: ['1 Chron 2:16-17', '2 Sam 17:25'] },
    { id: 'jether', name: 'Jether', parents: [], children: ['amasa'], spouses: ['abigail'], gender: 'male', description: 'Ishmaelite', references: ['1 Chron 2:17'] },
    { id: 'amasa', name: 'Amasa', parents: ['jether', 'abigail'], children: [], gender: 'male', description: 'Commander of army', references: ['2 Sam 17:25', '1 Chron 2:17'] },
    { id: 'bathsheba', name: 'Bathsheba', parents: [], children: ['solomon', 'shimea_david', 'shobab', 'nathan'], spouses: ['david', 'uriah'], gender: 'female', references: ['2 Sam 11', '1 Chron 3:5', 'Matt 1:6'] },
    { id: 'uriah', name: 'Uriah', parents: [], children: [], spouses: ['bathsheba'], gender: 'male', description: 'The Hittite', references: ['2 Sam 11', 'Matt 1:6'] },
    { id: 'solomon', name: 'Solomon', parents: ['david', 'bathsheba'], children: ['rehoboam'], spouses: ['naamah_ammonite'], gender: 'male', title: 'King and Sage of Israel', description: 'Wisdom, wealth, temple builder', references: ['1 Kings 1:11-39 (Anointed)', '1 Kings 3:4-15 (Wisdom prayer)', '1 Kings 4 (Wealth)', '1 Kings 5-8 (Temple)', 'Proverbs 1:1', 'Ecclesiastes 1:1', 'Song of Songs 1:1', 'Matt 1:6', '1 Chron 28-2 Chron 9'] },
    { id: 'naamah_ammonite', name: 'Naamah', parents: ['ben_ammi'], children: ['rehoboam'], spouses: ['solomon'], gender: 'female', description: 'Ammonite', references: ['1 Kings 14:21', '2 Chron 12:13'] },
    { id: 'rehoboam', name: 'Rehoboam', parents: ['solomon', 'naamah_ammonite'], children: ['abijam'], spouses: ['maacah'], gender: 'male', title: 'King of Judah', references: ['1 Kings 14', '2 Chron 10-12', 'Matt 1:7'] },
    { id: 'maacah', name: 'Maacah', parents: ['absolom'], children: ['abijam'], spouses: ['rehoboam'], gender: 'female', references: ['1 Kings 15:2', '2 Chron 11:20'] },
    { id: 'abijam', name: 'Abijam', parents: ['rehoboam', 'maacah'], children: ['asa'], gender: 'male', title: 'King of Judah', references: ['1 Kings 15', '2 Chron 13', 'Matt 1:7'] },
    { id: 'asa', name: 'Asa', parents: ['abijam'], children: ['jehoshaphat'], spouses: ['azubah'], gender: 'male', title: 'King of Judah', references: ['1 Kings 15', '2 Chron 14-16', 'Matt 1:7'] },
    { id: 'azubah', name: 'Azubah', parents: [], children: ['jehoshaphat'], spouses: ['asa'], gender: 'female', references: ['1 Kings 22:42'] },
    { id: 'jehoshaphat', name: 'Jehoshaphat', parents: ['asa', 'azubah'], children: ['jehoram'], gender: 'male', title: 'King of Judah', references: ['1 Kings 22', '2 Chron 17-20', 'Matt 1:8'] },
    { id: 'jehoram', name: 'Jehoram', parents: ['jehoshaphat'], children: ['ahaziah'], spouses: ['athaliah'], gender: 'male', title: 'King of Judah', references: ['2 Kings 8', '2 Chron 21', 'Matt 1:8'] },
    { id: 'athaliah', name: 'Athaliah', parents: ['ahab', 'jezebel'], children: ['ahaziah'], spouses: ['jehoram'], gender: 'female', title: 'Queen of Judah', references: ['2 Kings 11', '2 Chron 22'] },
    { id: 'ahaziah', name: 'Ahaziah', parents: ['jehoram', 'athaliah'], children: ['joash'], spouses: ['zibiah'], gender: 'male', title: 'King of Judah', references: ['2 Kings 8', '2 Chron 22'] },
    { id: 'zibiah', name: 'Zibiah', parents: [], children: ['joash'], spouses: ['ahaziah'], gender: 'female', description: 'Beersheba', references: ['2 Kings 12:1'] },
    { id: 'joash', name: 'Joash', parents: ['ahaziah', 'zibiah'], children: ['amaziah'], spouses: ['jehoaddan'], gender: 'male', title: 'King of Judah', references: ['2 Kings 11'] },
    { id: 'jehoaddan', name: 'Jehoaddan', parents: [], children: ['amaziah'], spouses: ['joash'], gender: 'female', description: 'Jerusalem', references: ['2 Kings 14:2'] },
    { id: 'amaziah', name: 'Amaziah', parents: ['joash', 'jehoaddan'], children: ['uzziah'], spouses: ['jecoliah'], gender: 'male', title: 'King of Judah', references: ['2 Kings 14'] },
    { id: 'jecoliah', name: 'Jecoliah', parents: [], children: ['uzziah'], spouses: ['amaziah'], gender: 'female', description: 'Jerusalem', references: ['2 Kings 15:2'] },
    { id: 'uzziah', name: 'Uzziah', parents: ['amaziah', 'jecoliah'], children: ['jotham'], spouses: ['jerusha'], gender: 'male', title: 'King of Judah', references: ['2 Kings 15'] },
    { id: 'jerusha', name: 'Jerusha', parents: ['zadok_priest'], children: ['jotham'], spouses: ['uzziah'], gender: 'female', references: ['2 Kings 15:33'] },
    { id: 'zadok_priest', name: 'Zadok', parents: [], children: ['jerusha'], gender: 'male', description: 'Priest?', references: ['2 Kings 15:33'] },
    { id: 'jotham', name: 'Jotham', parents: ['uzziah', 'jerusha'], children: ['ahaz'], gender: 'male', title: 'King of Judah', references: ['2 Kings 15'] },
    { id: 'ahaz', name: 'Ahaz', parents: ['jotham'], children: ['hezekiah'], spouses: ['abi'], gender: 'male', title: 'King of Judah', references: ['2 Kings 16'] },
    { id: 'abi', name: 'Abi', parents: ['zechariah_abi'], children: ['hezekiah'], spouses: ['ahaz'], gender: 'female', references: ['2 Kings 18:2'] },
    { id: 'zechariah_abi', name: 'Zechariah', parents: [], children: ['abi'], gender: 'male', references: ['2 Kings 18:2'] },
    { id: 'hezekiah', name: 'Hezekiah', parents: ['ahaz', 'abi'], children: ['manasseh'], spouses: ['hephzibah'], gender: 'male', title: 'King of Judah', references: ['2 Kings 18'] },
    { id: 'hephzibah', name: 'Hephzibah', parents: [], children: ['manasseh'], spouses: ['hezekiah'], gender: 'female', references: ['2 Kings 21:1'] },
    { id: 'manasseh', name: 'Manasseh', parents: ['hezekiah', 'hephzibah'], children: ['amon'], spouses: ['meshullemeth'], gender: 'male', title: 'King of Judah', references: ['2 Kings 21'] },
    { id: 'meshullemeth', name: 'Meshullemeth', parents: ['haruz'], children: ['amon'], spouses: ['manasseh'], gender: 'female', references: ['2 Kings 21:19'] },
    { id: 'haruz', name: 'Haruz', parents: [], children: ['meshullemeth'], gender: 'male', description: 'Jotbah', references: ['2 Kings 21:19'] },
    { id: 'amon', name: 'Amon', parents: ['manasseh', 'meshullemeth'], children: ['josiah'], spouses: ['jedidah'], gender: 'male', title: 'King of Judah', references: ['2 Kings 21'] },
    { id: 'jedidah', name: 'Jedidah', parents: ['adaiah'], children: ['josiah'], spouses: ['amon'], gender: 'female', references: ['2 Kings 22:1'] },
    { id: 'adaiah', name: 'Adaiah', parents: [], children: ['jedidah'], gender: 'male', description: 'Bozkath', references: ['2 Kings 22:1'] },
    { id: 'josiah', name: 'Josiah', parents: ['amon', 'jedidah'], children: ['jehoiakim', 'jehoahaz', 'zedekiah'], spouses: ['zebidah', 'hamutal'], gender: 'male', title: 'King of Judah', references: ['2 Kings 22'] },
    { id: 'zebidah', name: 'Zebidah', parents: ['pedaiah'], children: ['jehoiakim'], spouses: ['josiah'], gender: 'female', references: ['2 Kings 23:36'] },
    { id: 'hamutal', name: 'Hamutal', parents: ['jeremiah_libnah'], children: ['jehoahaz', 'zedekiah'], spouses: ['josiah'], gender: 'female', references: ['2 Kings 23:31', '2 Kings 24:18'] },
    { id: 'jeremiah_libnah', name: 'Jeremiah', parents: [], children: ['hamutal'], gender: 'male', description: 'Libnah', references: ['2 Kings 23:31'] },
    { id: 'pedaiah', name: 'Pedaiah', parents: [], children: ['zebidah'], gender: 'male', description: 'Rumah', references: ['2 Kings 23:36'] },
    { id: 'jehoahaz', name: 'Jehoahaz', parents: ['josiah', 'hamutal'], children: [], gender: 'male', title: 'King of Judah', references: ['2 Kings 23'] },
    { id: 'zedekiah', name: 'Zedekiah', parents: ['josiah', 'hamutal'], children: [], gender: 'male', title: 'King of Judah', references: ['2 Kings 24'] },
    { id: 'jehoiakim', name: 'Jehoiakim', parents: ['josiah', 'zebidah'], children: ['jehoiachin'], spouses: ['nehushta'], gender: 'male', title: 'King of Judah', references: ['2 Kings 23'] },
    { id: 'nehushta', name: 'Nehushta', parents: ['elnathan'], children: ['jehoiachin'], spouses: ['jehoiakim'], gender: 'female', references: ['2 Kings 24:8'] },
    { id: 'elnathan', name: 'Elnathan', parents: [], children: ['nehushta'], gender: 'male', description: 'Jerusalem', references: ['2 Kings 24:8'] },
    { id: 'jehoiachin', name: 'Jehoiachin', parents: ['jehoiakim', 'nehushta'], children: ['shealtiel'], gender: 'male', title: 'King of Judah', references: ['2 Kings 24'] },
    { id: 'shealtiel', name: 'Shealtiel', parents: ['jehoiachin'], children: ['zerubbabel'], gender: 'male', references: ['Matt 1:12'] },
    { id: 'zerubbabel', name: 'Zerubbabel', parents: ['shealtiel'], children: ['abiud'], gender: 'male', description: 'Governor after Exile', references: ['Matt 1:12', 'Haggai 1'] },
    { id: 'omri', name: 'Omri', parents: [], children: ['ahab'], gender: 'male', title: 'King of Israel', references: ['1 Kings 16'] },
    { id: 'ahab', name: 'Ahab', parents: ['omri'], children: ['ahaziah_israel', 'joram', 'athaliah'], spouses: ['jezebel'], gender: 'male', title: 'King of Israel', references: ['1 Kings 16-22'] },
    { id: 'jezebel', name: 'Jezebel', parents: [], children: ['ahaziah_israel', 'joram', 'athaliah'], spouses: ['ahab'], gender: 'female', description: 'Wicked Queen', references: ['1 Kings 16'] },
];

const dataMap = {};
// Combine all datasets (assuming global variables from loaded scripts or copy/paste strategy)
// To be safe and simple in a single file approach without modules, we will assume standard arrays.
// However, since we are using multiple script tags, the arrays from data_expansion.js (if declared with const/let at top level) might not be accessible if they are not attached to window or if script.js is module.
// Let's just assume we need to manually copy the content or use 'var' in data_expansion.js.
// BETTER: Just append the data to the map here.

// Combine all datasets
const fullList = [
    ...adamToNoah,
    ...patriarchs,
    ...kings
];

// Add expansion data if available
if (typeof postExileToJesus !== 'undefined') fullList.push(...postExileToJesus);
if (typeof additionalKingsAndProphets !== 'undefined') fullList.push(...additionalKingsAndProphets);
if (typeof missingBiblicalFigures !== 'undefined') fullList.push(...missingBiblicalFigures);
if (typeof chroniclesAdditions !== 'undefined') fullList.push(...chroniclesAdditions);
if (typeof tableOfNations !== 'undefined') fullList.push(...tableOfNations);
if (typeof prophets !== 'undefined') fullList.push(...prophets);
if (typeof tribesAndJudges !== 'undefined') fullList.push(...tribesAndJudges);
if (typeof lukeAncestry !== 'undefined') fullList.push(...lukeAncestry);

fullList.forEach(p => {
    // If ID exists, we warn or overwrite? Overwrite is safer for "correction"
    dataMap[p.id] = p;
});

// --- Data Integrity: Back-fill Children ---
// Ensure that if B says A is parent, A says B is child.
Object.values(dataMap).forEach(child => {
    if (child.parents && child.parents.length > 0) {
        child.parents.forEach(parentId => {
            const parent = dataMap[parentId];
            if (parent) {
                if (!parent.children) parent.children = [];
                if (!parent.children.includes(child.id)) {
                    parent.children.push(child.id);
                }
            }
        });
    }
});

// --- Logic Section ---

const rootId = 'ROOT';

// Build Hierarchy function force-connecting orphans
function buildHierarchy() {
    // 1. Identify all nodes that are children of someone
    const childIds = new Set();
    Object.values(dataMap).forEach(p => {
        if (p.children) {
            p.children.forEach(c => childIds.add(c));
        }
    });

    // 2. Identify potential roots (nodes with no parents in the dataset or not listed as anyone's child)
    // Note: p.parents might exist but point to IDs not in dataMap?
    // Safer: Nodes that are NOT in childIds set.
    const orphanIds = Object.keys(dataMap).filter(id => !childIds.has(id));

    // 3. Create Super Root
    const rootNode = {
        name: "Biblical Lines", // Meta Root
        attributes: { title: "Genealogy Root", description: "Select a lineage" },
        id: 'ROOT',
        children: []
    };

    // 4. Recursive builder with Visited Check to prevent duplicates
    const visited = new Set();

    function buildRecursive(id) {
        if (visited.has(id)) return null; // Already placed in the tree
        visited.add(id);

        const data = dataMap[id];
        if (!data) return null;

        const node = {
            name: data.name,
            attributes: {
                title: data.title,
                category: data.category,
                gender: data.gender,
                description: data.description,
                references: data.references,
                spouses: data.spouses ? data.spouses.map(sid => dataMap[sid]?.name || sid) : []
            },
            id: data.id,
            children: []
        };

        if (data.children && data.children.length > 0) {
            node.children = data.children.map(childId => buildRecursive(childId)).filter(n => n !== null);
        }

        return node;
    }

    // We process orphans.
    // Order matters for which parent "claims" a child first in complex intermarriages.
    // Usually standard ordering of the dataMap keys or orphanIds array is fine, 
    // but explicit priority (Abrahamic line first) naturally happens if Adam is processed early.

    // Sort orphans to ensure Adam/main lines come first if needed? 
    // 'Adam' is usually an orphan (no parents in DB).
    // 'ROOT' children will be built.

    // Order matters for chronological feel.
    // Define explicit order for known independent roots (Progenitors).
    const rootOrder = {
        'adam': 1,
        'nebat': 100, // Jeroboam's father
        'ahijah_father': 101, // Baasha's father
        'omri': 102,
        'nimshi': 103, // Jehu's grandfather/ancestor
        'gadi': 104, // Menahem's father
        'jabesh': 105, // Shallum's father
        'remaliah': 106, // Pekah's father
        'elah_father': 107, // Hoshea's father
        // Add others as needed, default to 999
    };

    orphanIds.sort((a, b) => {
        const orderA = rootOrder[a] || 999;
        const orderB = rootOrder[b] || 999;
        return orderA - orderB;
    });

    rootNode.children = orphanIds.map(id => buildRecursive(id)).filter(n => n !== null);

    return rootNode;
}

// Global D3 selection
let rootNode;
let svg;
let g;
let tree;
let zoom;

function initTree() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    zoom = d3.zoom().on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

    svg = d3.select("#tree-container").append("svg")
        .attr("width", width)
        .attr("height", height)
        .call(zoom)
        .on("dblclick.zoom", null) // Disable double click zoom
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + 50 + ")");

    g = svg;

    const hierarchyData = buildHierarchy();
    rootNode = d3.hierarchy(hierarchyData, d => d.children);

    // Expand All: We DO NOT collapse.
    // Everything starts expanded.

    // Set node size for Vertical layout
    // Increase spacing significantly for clarity
    tree = d3.tree().nodeSize([60, 150]);

    update(rootNode);

    // Initial: Zoom to Adam so the user starts at the beginning
    // Find Adam and zoom to him
    setTimeout(() => {
        const adamNode = rootNode.descendants().find(d => d.data.id === 'adam');
        if (adamNode) {
            const scale = 1.2;
            const x = -adamNode.x * scale + width / 2;
            const y = -adamNode.y * scale + height / 3; // position Adam slightly above center
            const transform = d3.zoomIdentity.translate(x, y).scale(scale);
            d3.select("svg").transition().duration(1000).call(zoom.transform, transform);
        }
    }, 100);
}

function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

function update(source) {
    const treeData = tree(rootNode);

    // Compute the new tree layout.
    const nodes = treeData.descendants();
    const links = treeData.links();

    // Update the nodes...
    const node = g.selectAll('g.node')
        .data(nodes, d => d.data.id || d.id);

    // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", d => `translate(${source.x0 || source.x},${source.y0 || source.y})`)
        .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node')
        .attr('r', 10)
        .style("fill", d => d._children ? "#d4af37" : "#fff")
        .style("stroke", d => getNodeColor(d));

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", d => d.children || d._children ? "-1.5em" : "1.8em")
        .attr("x", 0)
        .attr("text-anchor", "middle")
        .text(d => d.data.name)
        .style("font-weight", d => d.data.attributes.title ? "bold" : "normal")
        .style("font-size", d => d.data.id === 'ROOT' ? "14px" : "10px") // Bigger root font
        .style("fill-opacity", 1);

    // UPDATE
    const nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(750)
        .attr("transform", d => `translate(${d.x},${d.y})`);

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
        .attr('r', d => d.data.id === 'ROOT' ? 15 : 10) // Bigger root
        .style("fill", d => d._children ? "#d4af37" : "#fff")
        .attr('cursor', 'pointer');

    // Remove any exiting nodes
    const nodeExit = node.exit().transition()
        .duration(750)
        .attr("transform", d => `translate(${source.x},${source.y})`)
        .remove();

    nodeExit.select('circle')
        .attr('r', 1e-6);

    nodeExit.select('text')
        .style('fill-opacity', 1e-6);

    // Update the links...
    const link = g.selectAll('path.link')
        .data(links, d => d.target.id);

    // Enter any new links at the parent's previous position.
    const linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', d => {
            const o = { x: source.x0 || source.x, y: source.y0 || source.y }
            return verticalDiagonal(o, o)
        });

    // UPDATE
    const linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(750)
        .attr('d', d => verticalDiagonal(d.source, d.target));

    // Remove any exiting links
    const linkExit = link.exit().transition()
        .duration(750)
        .attr('d', d => {
            const o = { x: source.x, y: source.y }
            return verticalDiagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(d => {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Vertical Curved path generator
function verticalDiagonal(s, d) {
    return `M ${s.x} ${s.y}
            C ${s.x} ${(s.y + d.y) / 2},
              ${d.x} ${(s.y + d.y) / 2},
              ${d.x} ${d.y}`;
}

// Toggle children on click
function click(event, d) {
    // Prevent event bubbling if needed, though D3 handles it.

    // Only toggle if there are children to toggle
    if (d.children || d._children) {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        update(d);
        // Optionally center the node after toggle?
        // centerNode(d);
    }

    if (d.data.id !== 'ROOT') showInfo(d.data);

    d3.selectAll("circle").style("stroke-width", "2px").style("stroke", d => getNodeColor(d));
    d3.select(event.currentTarget).select("circle").style("stroke", "#d4af37").style("stroke-width", "4px");
}

function showInfo(data) {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('sidebar-content');

    // Populate content
    let spouseHtml = data.attributes.spouses.length ? `<p><strong>Spouse(s):</strong> ${data.attributes.spouses.join(', ')}</p>` : '';
    let refHtml = data.attributes.references ? `<p class="refs"><strong>Refs:</strong> ${data.attributes.references.join(', ')}</p>` : '';

    content.innerHTML = `
        <h2>${data.name}</h2>
        ${data.attributes.title ? `<h4>${data.attributes.title}</h4>` : ''}
        <hr/>
        <p><strong>Gender:</strong> ${data.attributes.gender}</p>
        ${data.attributes.description ? `<p class="desc">"${data.attributes.description}"</p>` : ''}
        ${spouseHtml}
        ${refHtml}
        <button class="trace-btn" onclick="traceLineage('${data.id}')">Trace to Adam</button>
    `;

    sidebar.classList.add('visible');
}

function traceLineage(id) {
    // 1. Reset previous trace
    d3.selectAll('.trace-link').remove();
    d3.selectAll('.link').style('opacity', 0.3); // Dim others
    d3.selectAll('circle').style('opacity', 0.3);

    // 2. Find path to ROOT
    const targetNode = rootNode.descendants().find(d => d.data.id === id);
    if (!targetNode) return;

    // Traverse up
    let path = [];
    let current = targetNode;
    while (current) {
        path.push(current);
        current = current.parent;
    }
    // Path is [Node, Parent, Grandparent ... Root]

    // 3. Highlight Nodes and Draw "Red and Blue" Lines
    // We want to draw lines between path[i] and path[i+1]
    const traceLayer = g.select(".trace-layer").empty() ? g.append("g").attr("class", "trace-layer") : g.select(".trace-layer");
    traceLayer.raise(); // Ensure on top

    // Restore opacity for path nodes
    path.forEach(d => {
        d3.selectAll(".node").filter(n => n.data.id === d.data.id)
            .select("circle")
            .style("opacity", 1)
            .style("fill", "#fff")
            .style("stroke", "#d4af37");

        d3.selectAll(".node").filter(n => n.data.id === d.data.id)
            .select("text")
            .style("opacity", 1);
    });

    for (let i = 0; i < path.length - 1; i++) {
        const source = path[i + 1]; // Parent
        const target = path[i];   // Child

        // Draw Red Line (Thick background)
        traceLayer.append('path')
            .attr('class', 'trace-link')
            .attr('d', verticalDiagonal(source, target))
            .style('fill', 'none')
            .style('stroke', 'red')
            .style('stroke-width', '6px')
            .style('stroke-linecap', 'round')
            .style('opacity', 0.8);

        // Draw Blue Line (Thin foreground or Dashed)
        traceLayer.append('path')
            .attr('class', 'trace-link')
            .attr('d', verticalDiagonal(source, target))
            .style('fill', 'none')
            .style('stroke', 'blue')
            .style('stroke-width', '2px')
            .style('stroke-dasharray', '5,5') // Dashed effect
            .style('opacity', 1);
    }

    // 4. Animation: Camera goes up slowly showing the route
    // We strictly follow the path from Start (id) to End (Adam)
    // We can chain transitions.

    // Stop any current zoom events
    svg.interrupt();

    let stepDuration = 1500; // ms per step (slow)
    if (path.length > 10) stepDuration = 1000; // Speed up if long path
    if (path.length > 20) stepDuration = 800;

    function transitionToStep(index) {
        if (index >= path.length) {
            // Finished
            return;
        }

        const d = path[index];
        const scale = 1.5;
        const x = -d.x * scale + window.innerWidth / 2;
        const y = -d.y * scale + window.innerHeight / 2;
        const transform = d3.zoomIdentity.translate(x, y).scale(scale);

        d3.select("svg").transition()
            .duration(stepDuration)
            .ease(d3.easeLinear) // Linear for smooth continuous feel if we chain well, or easeCubic for point-to-point
            .call(zoom.transform, transform)
            .on("end", () => transitionToStep(index + 1));
    }

    // Start animation
    transitionToStep(0);
    closeSidebar();
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('visible');
}

// Search Functionality
function handleSearch(query) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (query.length < 2) {
        resultsContainer.style.display = 'none';
        return;
    }

    const results = Object.values(dataMap).filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

    if (results.length > 0) {
        resultsContainer.style.display = 'block';
        results.forEach(p => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `<strong>${p.name}</strong><br><span style="font-size:0.8em;color:#666">${p.title || p.description || ''}</span>`;
            div.onclick = () => zoomTo(p.id);
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.style.display = 'none';
    }
}


function expandPathToNode(targetId) {
    // 1. Find the path from ROOT to this node in the D3 hierarchy
    // rootNode is the D3 hierarchy root
    // descendants() gives flat list, but we need to traverse down and expand.

    // Helper to search in D3 node (which might be collapsed in _children)
    // We need to trace where the node is.
    // The issue: descendants() only returns visible nodes or we have to traverse _children too.
    // Actually, `rootNode.descendants()` DOES include collapsed nodes if we traverse `_children`? No, D3 `descendants()` works on `children` by default.
    // We can write a custom finder.

    let path = [];

    function findNodeAndPath(currentNode, targetId) {
        if (currentNode.data.id === targetId) {
            return [currentNode];
        }

        let children = currentNode.children || currentNode._children || [];
        for (let child of children) {
            let res = findNodeAndPath(child, targetId);
            if (res) {
                res.unshift(currentNode);
                return res;
            }
        }
        return null;
    }

    return findNodeAndPath(rootNode, targetId);
}

function zoomTo(id) {
    const path = expandPathToNode(id);

    if (!path) {
        alert("Node not found in standard hierarchy.");
        return;
    }

    // Expand all nodes in path
    path.forEach(node => {
        if (node._children) {
            node.children = node._children;
            node._children = null;
        }
    });

    update(rootNode);

    // Now find the node again to get its new coordinates after update
    // Note: update() triggers transitions, coordinates might settle later.
    // For immediate zoom, we might need to pre-calculate or wait.
    // Let's rely on finding it in the now-expanded tree.

    const targetNode = rootNode.descendants().find(d => d.data.id === id);
    if (!targetNode) return; // Should exist now

    const scale = 1.5;
    const x = -targetNode.x * scale + window.innerWidth / 2;
    const y = -targetNode.y * scale + window.innerHeight / 2;

    const transform = d3.zoomIdentity.translate(x, y).scale(scale);
    d3.select("svg").transition().duration(750).call(zoom.transform, transform);

    if (targetNode.data.id !== 'ROOT') showInfo(targetNode.data);

    document.getElementById('search-results').style.display = 'none';
    document.getElementById('search-input').value = '';

    // Highlight
    d3.selectAll("circle").style("stroke-width", "2px").style("stroke", d => getNodeColor(d));
    // We need to select the specific node element. We can assign ID to groups.
    // Ideally we bind data ID to DOM ID but for now visual feedback via selection:
    // We'll rely on the update function's click handler styling or just manually finding:
    // But since we don't have DOM ref easily without a select loop:
    g.selectAll(".node").filter(d => d.data.id === id).select("circle")
        .style("stroke", "#d4af37").style("stroke-width", "4px");
}


// ... (End of file helper functions)

function getNodeColor(d) {
    if (d.data.id === 'ROOT') return '#000';
    const cat = d.data.attributes.category || '';
    const title = d.data.attributes.title || '';

    if (cat.includes('King') || title.includes('King') || title.includes('Queen')) return '#d4af37'; // Gold
    if (cat.includes('Judge')) return '#8b4513'; // SaddleBrown
    if (cat.includes('Prophet') || title.includes('Prophet')) return '#800080'; // Purple
    if (cat.includes('Priest') || title.includes('Priest')) return '#0000ff'; // Blue
    if (cat.includes('Tribe')) return '#228b22'; // ForestGreen

    return d.data.attributes.gender === 'male' ? "#1e40af" : "#be185d";
}

let activeFilter = null; // Single filter for simplicity, or Set for multi

function toggleFilter(category) {
    if (activeFilter === category) {
        activeFilter = null; // Clear
    } else {
        activeFilter = category;
    }
    applyFilter();
    updateLegendUI();
}

function applyFilter() {
    d3.selectAll(".node").transition().duration(500).style("opacity", d => {
        if (!activeFilter) return 1;
        const cat = d.data.attributes.category || '';
        const title = d.data.attributes.title || '';
        const match = (activeFilter === 'King/Queen' && (cat.includes('King') || title.includes('King') || title.includes('Queen'))) ||
            (activeFilter === 'Judge' && cat.includes('Judge')) ||
            (activeFilter === 'Prophet' && (cat.includes('Prophet') || title.includes('Prophet'))) ||
            (activeFilter === 'Priest' && (cat.includes('Priest') || title.includes('Priest'))) ||
            (activeFilter === 'Tribe' && cat.includes('Tribe')) ||
            (activeFilter === 'Male' && d.data.attributes.gender === 'male') ||
            (activeFilter === 'Female' && d.data.attributes.gender === 'female');
        return match ? 1 : 0.1;
    });

    d3.selectAll(".link").transition().duration(500).style("opacity", d => {
        if (!activeFilter) return 0.4;
        // Check if both source and target match? Or just target?
        // Let's filter links if target is visible.
        const targetNode = d.target;
        const cat = targetNode.data.attributes.category || '';
        const title = targetNode.data.attributes.title || '';
        const match = (activeFilter === 'King/Queen' && (cat.includes('King') || title.includes('King') || title.includes('Queen'))) ||
            (activeFilter === 'Judge' && cat.includes('Judge')) ||
            (activeFilter === 'Prophet' && (cat.includes('Prophet') || title.includes('Prophet'))) ||
            (activeFilter === 'Priest' && (cat.includes('Priest') || title.includes('Priest'))) ||
            (activeFilter === 'Tribe' && cat.includes('Tribe')) ||
            (activeFilter === 'Male' && targetNode.data.attributes.gender === 'male') ||
            (activeFilter === 'Female' && targetNode.data.attributes.gender === 'female');
        return match ? 0.4 : 0.05;
    });
}

function updateLegendUI() {
    d3.selectAll(".legend-item").classed("dimmed", d => activeFilter && d.label !== activeFilter);
    d3.selectAll(".legend-item").style("font-weight", d => activeFilter === d.label ? "bold" : "normal");
}

function createLegend() {
    const legendData = [
        { label: 'King/Queen', color: '#d4af37' },
        { label: 'Judge', color: '#8b4513' },
        { label: 'Prophet', color: '#800080' },
        { label: 'Priest', color: '#0000ff' },
        { label: 'Tribe', color: '#228b22' },
        { label: 'Male', color: '#1e40af' },
        { label: 'Female', color: '#be185d' }
    ];

    const legend = d3.select("#app").append("div")
        .attr("id", "legend")
        .style("position", "absolute")
        // CSS handles position now
        .style("background", "rgba(255,255,255,0.9)")
        .style("padding", "10px")
        .style("border-radius", "8px")
        .style("font-size", "12px");

    legend.append("h4").text("Filter by Category").style("margin", "0 0 8px 0").style("font-size", "0.9em");

    const item = legend.selectAll(".legend-item")
        .data(legendData)
        .enter().append("div")
        .attr("class", "legend-item")
        .style("display", "flex")
        .style("align-items", "center")
        .style("margin-bottom", "4px")
        .on("click", (e, d) => toggleFilter(d.label));

    item.append("div")
        .style("width", "12px")
        .style("height", "12px")
        .style("border-radius", "50%")
        .style("background-color", d => d.color)
        .style("margin-right", "8px")
        .style("border", "1px solid #ccc");

    item.append("span").text(d => d.label);
}

// Zoom Controls
function handleZoom(type) {
    if (!svg || !zoom) return;
    const transition = d3.select("svg").transition().duration(500);

    // Get current transform
    // Note: This matches D3 v7 zoom
    const transform = d3.zoomTransform(d3.select("svg").node());

    if (type === 'in') {
        zoom.scaleBy(transition, 1.3);
    } else if (type === 'out') {
        zoom.scaleBy(transition, 1 / 1.3);
    } else if (type === 'reset') {
        // Reset to Adam (Start)
        const width = window.innerWidth;
        const widthHalf = width / 2;
        const heightHalf = window.innerHeight / 2; // Not used for Adam top-align usually but good for center

        const adamNode = rootNode.descendants().find(d => d.data.id === 'adam');
        let transform = d3.zoomIdentity.translate(widthHalf, 50).scale(1); // Default fallback

        if (adamNode) {
            const scale = 1.2;
            const x = -adamNode.x * scale + widthHalf;
            const y = -adamNode.y * scale + 100; // Position at top
            transform = d3.zoomIdentity.translate(x, y).scale(scale);
        }

        zoom.transform(transition, transform);

        // Clear Trace
        d3.selectAll('.trace-link').remove();
        applyFilter(); // Restore visibility
    }
}

// Initialize on load
window.addEventListener('load', () => {
    initTree();
    createLegend();
});
