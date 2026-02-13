
const tribesAndJudges = [
    // --- The 12 Tribes (Census Data: Gen 46, Num 26, 1 Chron) ---
    // Note: Some patriarchs (Reuben, Simeon, etc.) are already in script.js. 
    // We add their descendants here.

    // Reuben
    { id: 'hanoch', name: 'Hanoch', parents: ['reuben'], children: [], gender: 'male', category: 'Tribe of Reuben', references: ['Gen 46:9'] },
    { id: 'pallu', name: 'Pallu', parents: ['reuben'], children: ['eliab_pallu'], gender: 'male', category: 'Tribe of Reuben', references: ['Gen 46:9'] },
    // Hezron and Carmi already in script.js (check conflicts? script.js has them as children of Reuben)
    { id: 'eliab_pallu', name: 'Eliab', parents: ['pallu'], children: ['nemuel_eliab', 'dathan', 'abiram'], gender: 'male', category: 'Tribe of Reuben', references: ['Num 26:8'] },
    { id: 'nemuel_eliab', name: 'Nemuel', parents: ['eliab_pallu'], children: [], gender: 'male', category: 'Tribe of Reuben', references: ['Num 26:9'] },
    { id: 'dathan', name: 'Dathan', parents: ['eliab_pallu'], children: [], gender: 'male', description: 'Rebelled against Moses', category: 'Tribe of Reuben', references: ['Num 26:9'] },
    { id: 'abiram', name: 'Abiram', parents: ['eliab_pallu'], children: [], gender: 'male', description: 'Rebelled against Moses', category: 'Tribe of Reuben', references: ['Num 26:9'] },

    // Simeon
    // Jemuel, Jamin, Ohad, Jachin, Zohar, Shaul in script.js
    { id: 'shallum_simeon', name: 'Shallum', parents: ['shaul'], children: ['mibsam'], gender: 'male', category: 'Tribe of Simeon', references: ['1 Chron 4:25'] },
    { id: 'mibsam', name: 'Mibsam', parents: ['shallum_simeon'], children: ['mishma'], gender: 'male', category: 'Tribe of Simeon', references: ['1 Chron 4:25'] },
    { id: 'mishma', name: 'Mishma', parents: ['mibsam'], children: ['hammuel'], gender: 'male', category: 'Tribe of Simeon', references: ['1 Chron 4:25'] },
    { id: 'hammuel', name: 'Hammuel', parents: ['mishma'], children: ['zaccur'], gender: 'male', category: 'Tribe of Simeon', references: ['1 Chron 4:26'] },
    { id: 'zaccur', name: 'Zaccur', parents: ['hammuel'], children: ['shimei_simeon'], gender: 'male', category: 'Tribe of Simeon', references: ['1 Chron 4:26'] },
    { id: 'shimei_simeon', name: 'Shimei', parents: ['zaccur'], children: [], gender: 'male', description: 'Had 16 sons', category: 'Tribe of Simeon', references: ['1 Chron 4:27'] },

    // Levi (Gershon, Kohath, Merari in script.js)
    // Gershonites
    { id: 'libni', name: 'Libni', parents: ['gershon'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:17'] },
    { id: 'shimei_levi', name: 'Shimei', parents: ['gershon'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:17'] },

    // Kohathites (Amram, Izhar, Hebron, Uzziel)
    { id: 'izhar', name: 'Izhar', parents: ['kohath'], children: ['korah', 'nepheg', 'zichri'], gender: 'male', category: 'Levite', references: ['Ex 6:21'] },
    { id: 'hebron', name: 'Hebron', parents: ['kohath'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:18'] },
    { id: 'uzziel', name: 'Uzziel', parents: ['kohath'], children: ['mishael', 'elzaphan', 'sithri'], gender: 'male', category: 'Levite', references: ['Ex 6:22'] },

    { id: 'korah', name: 'Korah', parents: ['izhar'], children: ['assir', 'elkanah_korah', 'abiasaph'], gender: 'male', description: 'Rebel leader', category: 'Levite', references: ['Ex 6:21'] },
    { id: 'nepheg', name: 'Nepheg', parents: ['izhar'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:21'] },
    { id: 'zichri', name: 'Zichri', parents: ['izhar'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:21'] },

    { id: 'mishael', name: 'Mishael', parents: ['uzziel'], children: [], gender: 'male', category: 'Levite', references: ['Lev 10:4'] },
    { id: 'elzaphan', name: 'Elzaphan', parents: ['uzziel'], children: [], gender: 'male', category: 'Levite', references: ['Lev 10:4'] },
    { id: 'sithri', name: 'Sithri', parents: ['uzziel'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:22'] },

    // Merarites
    { id: 'mahli', name: 'Mahli', parents: ['merari'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:19'] },
    { id: 'mushi', name: 'Mushi', parents: ['merari'], children: [], gender: 'male', category: 'Levite', references: ['Ex 6:19'] },

    // Judah (Clan expansion)
    // Caleb (spy) parents: Jephunneh (Kenizzite). Linked in data_expansion.js
    // Caleb son of Hezron (1 Chron 2:9, 18) - Distinct from Spy? or merged? Often distinct.
    { id: 'caleb_hezron', name: 'Caleb (Chelubai)', parents: ['hezron'], children: ['hur'], spouses: ['azubah_caleb', 'jerioth', 'ephrath'], gender: 'male', category: 'Tribe of Judah', references: ['1 Chron 2:9,18'] },
    { id: 'azubah_caleb', name: 'Azubah', parents: [], children: [], spouses: ['caleb_hezron'], gender: 'female', category: 'Tribe of Judah', references: ['1 Chron 2:18'] },
    { id: 'ephrath', name: 'Ephrath', parents: [], children: ['hur'], spouses: ['caleb_hezron'], gender: 'female', category: 'Tribe of Judah', references: ['1 Chron 2:19'] },
    { id: 'hur', name: 'Hur', parents: ['caleb_hezron', 'ephrath'], children: ['uri'], gender: 'male', category: 'Tribe of Judah', references: ['1 Chron 2:19'] },
    { id: 'uri', name: 'Uri', parents: ['hur'], children: ['bezaleel'], gender: 'male', category: 'Tribe of Judah', references: ['1 Chron 2:20'] },
    { id: 'bezaleel', name: 'Bezaleel', parents: ['uri'], children: [], gender: 'male', description: 'Tabernacle Artisan', category: 'Tribe of Judah', references: ['Ex 31:2'] },

    // Issachar
    { id: 'tola', name: 'Tola', parents: ['issachar'], children: ['uzzi'], gender: 'male', category: 'Tribe of Issachar', references: ['Gen 46:13', '1 Chron 7:1'] },
    { id: 'puvah', name: 'Puvah', parents: ['issachar'], children: [], gender: 'male', category: 'Tribe of Issachar', references: ['Gen 46:13'] },
    { id: 'job', name: 'Job (Jashub)', parents: ['issachar'], children: [], gender: 'male', category: 'Tribe of Issachar', references: ['Gen 46:13'] },
    { id: 'shimron', name: 'Shimron', parents: ['issachar'], children: [], gender: 'male', category: 'Tribe of Issachar', references: ['Gen 46:13'] },
    { id: 'uzzi', name: 'Uzzi', parents: ['tola'], children: ['izrahiah'], gender: 'male', category: 'Tribe of Issachar', references: ['1 Chron 7:2'] },
    { id: 'izrahiah', name: 'Izrahiah', parents: ['uzzi'], children: ['michael', 'obadiah_iss', 'joel_iss', 'ishiah'], gender: 'male', category: 'Tribe of Issachar', references: ['1 Chron 7:3'] },

    // Zebulun
    { id: 'sered', name: 'Sered', parents: ['zebulun'], children: [], gender: 'male', category: 'Tribe of Zebulun', references: ['Gen 46:14'] },
    { id: 'elon', name: 'Elon', parents: ['zebulun'], children: [], gender: 'male', category: 'Tribe of Zebulun', references: ['Gen 46:14'] },
    { id: 'jahleel', name: 'Jahleel', parents: ['zebulun'], children: [], gender: 'male', category: 'Tribe of Zebulun', references: ['Gen 46:14'] },

    // Gad
    { id: 'ziphion', name: 'Ziphion', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'haggi', name: 'Haggi', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'shuni', name: 'Shuni', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'ezbon', name: 'Ezbon', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'eri', name: 'Eri', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'arodi', name: 'Arodi', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },
    { id: 'areli', name: 'Areli', parents: ['gad'], children: [], gender: 'male', category: 'Tribe of Gad', references: ['Gen 46:16'] },

    // Asher
    { id: 'imnah', name: 'Imnah', parents: ['asher'], children: [], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'ishvah', name: 'Ishvah', parents: ['asher'], children: [], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'ishvi', name: 'Ishvi', parents: ['asher'], children: [], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'beriah', name: 'Beriah', parents: ['asher'], children: ['heber', 'malchiel'], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'serah', name: 'Serah', parents: ['asher'], children: [], gender: 'female', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'heber', name: 'Heber', parents: ['beriah'], children: [], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },
    { id: 'malchiel', name: 'Malchiel', parents: ['beriah'], children: [], gender: 'male', category: 'Tribe of Asher', references: ['Gen 46:17'] },

    // Joseph (Manasseh)
    { id: 'manasseh', name: 'Manasseh', parents: ['joseph', 'asenath'], children: ['machir', 'jair_manasseh'], gender: 'male', category: 'Tribe of Manasseh', references: ['Gen 41:51'] },
    { id: 'machir', name: 'Machir', parents: ['manasseh'], children: ['gilead'], gender: 'male', category: 'Tribe of Manasseh', references: ['Num 26:29'] },
    { id: 'gilead', name: 'Gilead', parents: ['machir'], children: ['jeezer', 'helek', 'asriel', 'shechem_manasseh', 'shemida', 'hepher'], gender: 'male', category: 'Tribe of Manasseh', references: ['Num 26:30'] },
    { id: 'zelophehad', name: 'Zelophehad', parents: ['hepher'], children: ['mahlah', 'noa', 'hoglah', 'milcah_zel', 'tirzah'], gender: 'male', description: 'No sons, 5 daughters', category: 'Tribe of Manasseh', references: ['Num 27:1'] },
    { id: 'mahlah', name: 'Mahlah', parents: ['zelophehad'], children: [], gender: 'female', category: 'Tribe of Manasseh', references: ['Num 27:1'] },
    { id: 'noa', name: 'Noa', parents: ['zelophehad'], children: [], gender: 'female', category: 'Tribe of Manasseh', references: ['Num 27:1'] },
    { id: 'hoglah', name: 'Hoglah', parents: ['zelophehad'], children: [], gender: 'female', category: 'Tribe of Manasseh', references: ['Num 27:1'] },
    { id: 'milcah_zel', name: 'Milcah', parents: ['zelophehad'], children: [], gender: 'female', category: 'Tribe of Manasseh', references: ['Num 27:1'] },
    { id: 'tirzah', name: 'Tirzah', parents: ['zelophehad'], children: [], gender: 'female', category: 'Tribe of Manasseh', references: ['Num 27:1'] },

    // Joseph (Ephraim)
    { id: 'ephraim', name: 'Ephraim', parents: ['joseph', 'asenath'], children: ['shuthelah', 'becher', 'tahan'], gender: 'male', category: 'Tribe of Ephraim', references: ['Gen 41:52'] },
    { id: 'shuthelah', name: 'Shuthelah', parents: ['ephraim'], children: [], gender: 'male', category: 'Tribe of Ephraim', references: ['Num 26:35'] },
    { id: 'becher', name: 'Becher', parents: ['ephraim'], children: [], gender: 'male', category: 'Tribe of Ephraim', references: ['Num 26:35'] },
    { id: 'tahan', name: 'Tahan', parents: ['ephraim'], children: [], gender: 'male', category: 'Tribe of Ephraim', references: ['Num 26:35'] },
    // Joshua's line: Ephraim -> Beriah -> Rephah -> Resheph -> Telah -> Tahan -> Ladan -> Ammihud -> Elishama -> Nun -> Joshua
    { id: 'nun', name: 'Nun', parents: ['elishama_eph'], children: ['joshua'], gender: 'male', category: 'Tribe of Ephraim', references: ['1 Chron 7:27'] },
    { id: 'joshua', name: 'Joshua', parents: ['nun'], children: [], gender: 'male', category: 'Judge', title: 'Leader of Israel', references: ['Josh 1'] },
    { id: 'elishama_eph', name: 'Elishama', parents: ['ammihud_eph'], children: ['nun'], gender: 'male', category: 'Tribe of Ephraim', references: ['1 Chron 7:26'] },
    { id: 'ammihud_eph', name: 'Ammihud', parents: ['ladan'], children: ['elishama_eph'], gender: 'male', category: 'Tribe of Ephraim', references: ['1 Chron 7:26'] },

    // Benjamin
    { id: 'bela', name: 'Bela', parents: ['benjamin'], children: ['ard', 'naaman'], gender: 'male', category: 'Tribe of Benjamin', references: ['Gen 46:21'] },
    { id: 'ashbel', name: 'Ashbel', parents: ['benjamin'], children: [], gender: 'male', category: 'Tribe of Benjamin', references: ['Gen 46:21'] },
    { id: 'gera', name: 'Gera', parents: ['benjamin'], children: [], gender: 'male', category: 'Tribe of Benjamin', references: ['Gen 46:21'] },
    // Ehud (Judge) son of Gera
    { id: 'ehud', name: 'Ehud', parents: ['gera'], children: [], gender: 'male', category: 'Judge', description: 'Left-handed Judge', references: ['Judges 3:15'] },

    // Dan
    { id: 'hushim', name: 'Hushim', parents: ['dan'], children: [], gender: 'male', category: 'Tribe of Dan', references: ['Gen 46:23'] },
    // Samson (Danite)
    { id: 'samson', name: 'Samson', parents: ['manoah', 'manoah_wife'], children: [], gender: 'male', category: 'Judge', description: 'Strongest Man', references: ['Judges 13-16'] },
    { id: 'manoah', name: 'Manoah', parents: [], children: ['samson'], spouses: ['manoah_wife'], gender: 'male', category: 'Tribe of Dan', references: ['Judges 13:2'] },
    { id: 'manoah_wife', name: 'Unnamed Wife', parents: [], children: ['samson'], spouses: ['manoah'], gender: 'female', category: 'Tribe of Dan', references: ['Judges 13'] },

    // Naphtali
    { id: 'jahzeel', name: 'Jahzeel', parents: ['naphtali'], children: [], gender: 'male', category: 'Tribe of Naphtali', references: ['Gen 46:24'] },
    { id: 'guni', name: 'Guni', parents: ['naphtali'], children: [], gender: 'male', category: 'Tribe of Naphtali', references: ['Gen 46:24'] },
    { id: 'jezer', name: 'Jezer', parents: ['naphtali'], children: [], gender: 'male', category: 'Tribe of Naphtali', references: ['Gen 46:24'] },
    { id: 'shillem', name: 'Shillem', parents: ['naphtali'], children: [], gender: 'male', category: 'Tribe of Naphtali', references: ['Gen 46:24'] },

    // --- The Judges (Missing ones) ---
    { id: 'othniel', name: 'Othniel', parents: ['kenaz'], children: [], spouses: ['achsah'], gender: 'male', category: 'Judge', references: ['Judges 3:9'] },
    { id: 'kenaz', name: 'Kenaz', parents: [], children: ['othniel'], gender: 'male', description: 'Brother of Caleb', category: 'Tribe of Judah', references: ['Judges 1:13'] },
    { id: 'achsah', name: 'Achsah', parents: ['caleb'], children: [], spouses: ['othniel'], gender: 'female', category: 'Tribe of Judah', references: ['Judges 1:13'] }, // Caleb already in script.js (Spy or Hezron son? Spy is Jephunneh son)
    // Link Othniel to Caleb Spy

    { id: 'shamgar', name: 'Shamgar', parents: ['anath'], children: [], gender: 'male', category: 'Judge', references: ['Judges 3:31'] },
    { id: 'anath', name: 'Anath', parents: [], children: ['shamgar'], gender: 'male', references: ['Judges 3:31'] },

    { id: 'deborah', name: 'Deborah', parents: [], children: [], spouses: ['lapidoth'], gender: 'female', category: 'Judge', title: 'Prophetess', references: ['Judges 4:4'] },
    { id: 'lapidoth', name: 'Lapidoth', parents: [], children: [], spouses: ['deborah'], gender: 'male', references: ['Judges 4:4'] },
    { id: 'barak', name: 'Barak', parents: ['abinoam'], children: [], gender: 'male', category: 'General', references: ['Judges 4:6'] },
    { id: 'abinoam', name: 'Abinoam', parents: [], children: ['barak'], gender: 'male', category: 'Tribe of Naphtali', references: ['Judges 4:6'] },

    { id: 'gideon', name: 'Gideon', parents: ['joash_abiezrite'], children: ['abimelech_judge', 'jotham_gideon'], gender: 'male', category: 'Judge', references: ['Judges 6'] },
    { id: 'joash_abiezrite', name: 'Joash', parents: [], children: ['gideon'], gender: 'male', description: 'Abiezrite', category: 'Tribe of Manasseh', references: ['Judges 6:11'] },
    { id: 'abimelech_judge', name: 'Abimelech', parents: ['gideon'], children: [], gender: 'male', category: 'Judge', description: 'Usurper', references: ['Judges 9'] },
    { id: 'jotham_gideon', name: 'Jotham', parents: ['gideon'], children: [], gender: 'male', description: 'Parable of Trees', references: ['Judges 9'] },

    { id: 'tola_judge', name: 'Tola', parents: ['puah'], children: [], gender: 'male', category: 'Judge', references: ['Judges 10:1'] },
    { id: 'puah', name: 'Puah', parents: ['dodo'], children: ['tola_judge'], gender: 'male', references: ['Judges 10:1'] },
    { id: 'dodo', name: 'Dodo', parents: [], children: ['puah'], gender: 'male', references: ['Judges 10:1'] },

    { id: 'jair_judge', name: 'Jair', parents: [], children: [], gender: 'male', category: 'Judge', description: 'Gileadite', references: ['Judges 10:3'] },

    { id: 'jephthah', name: 'Jephthah', parents: ['gilead_father_jephthah'], children: ['jephthah_daughter'], gender: 'male', category: 'Judge', references: ['Judges 11'] },
    { id: 'gilead_father_jephthah', name: 'Gilead', parents: [], children: ['jephthah'], gender: 'male', references: ['Judges 11:1'] }, // Likely the region/clan personified or namesake
    { id: 'jephthah_daughter', name: 'Jephthah\'s Daughter', parents: ['jephthah'], children: [], gender: 'female', references: ['Judges 11:34'] },

    { id: 'ibzan', name: 'Ibzan', parents: [], children: [], gender: 'male', category: 'Judge', description: 'Bethlehemite', references: ['Judges 12:8'] },
    { id: 'elon_judge', name: 'Elon', parents: [], children: [], gender: 'male', category: 'Judge', description: 'Zebulunite', references: ['Judges 12:11'] },
    { id: 'abdon', name: 'Abdon', parents: ['hillel'], children: [], gender: 'male', category: 'Judge', references: ['Judges 12:13'] },
    { id: 'hillel', name: 'Hillel', parents: [], children: ['abdon'], gender: 'male', description: 'Pirathonite', references: ['Judges 12:13'] },

    // Royal Officials & High Priests Extensions
    { id: 'zadok_hp', name: 'Zadok', parents: ['ahitub'], children: ['ahimaaz'], gender: 'male', category: 'High Priest', references: ['2 Sam 8:17', '1 Chron 6'] },
    { id: 'ahitub', name: 'Ahitub', parents: ['amariah'], children: ['zadok_hp'], gender: 'male', category: 'Priest', references: ['1 Chron 6:7'] },
    { id: 'amariah', name: 'Amariah', parents: ['meraioth'], children: ['ahitub'], gender: 'male', category: 'Priest', references: ['1 Chron 6:7'] },
    { id: 'meraioth', name: 'Meraioth', parents: ['zarahiah'], children: ['amariah'], gender: 'male', category: 'Priest', references: ['1 Chron 6:6'] },
    { id: 'zarahiah', name: 'Zerahiah', parents: ['uzzi_priest'], children: ['meraioth'], gender: 'male', category: 'Priest', references: ['1 Chron 6:6'] },
    { id: 'uzzi_priest', name: 'Uzzi', parents: ['bukki'], children: ['zarahiah'], gender: 'male', category: 'Priest', references: ['1 Chron 6:5'] },
    { id: 'bukki', name: 'Bukki', parents: ['abishua'], children: ['uzzi_priest'], gender: 'male', category: 'Priest', references: ['1 Chron 6:5'] },
    // Abishua is son of Phinehas (in script.js)

    { id: 'ahimaaz', name: 'Ahimaaz', parents: ['zadok_hp'], children: ['azariah'], gender: 'male', category: 'High Priest', references: ['1 Chron 6:9'] },
    { id: 'azariah', name: 'Azariah', parents: ['ahimaaz'], children: ['johanan'], gender: 'male', category: 'High Priest', references: ['1 Chron 6:9'] },

    // Sons of Zeruiah (David's Sister/Kin)
    { id: 'zeruiah', name: 'Zeruiah', parents: ['jesse'], children: ['joab', 'abishai', 'asahel'], gender: 'female', category: 'Royal Family', references: ['1 Chron 2:16'] },
    { id: 'joab', name: 'Joab', parents: ['zeruiah'], children: [], gender: 'male', category: 'General', description: 'Commander of Army', references: ['2 Sam 2'] },
    { id: 'abishai', name: 'Abishai', parents: ['zeruiah'], children: [], gender: 'male', category: 'General', references: ['2 Sam 2'] },
    { id: 'asahel', name: 'Asahel', parents: ['zeruiah'], children: [], gender: 'male', category: 'General', references: ['2 Sam 2'] },
];
