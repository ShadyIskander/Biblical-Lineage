
const postExileToJesus = [
    // Matthew 1 Line
    { id: 'abiud', name: 'Abiud', parents: ['zerubbabel'], children: ['eliakim'], gender: 'male', references: ['Matt 1:13'] },
    { id: 'eliakim', name: 'Eliakim', parents: ['abiud'], children: ['azor'], gender: 'male', references: ['Matt 1:13'] },
    { id: 'azor', name: 'Azor', parents: ['eliakim'], children: ['zadok_matt'], gender: 'male', references: ['Matt 1:13'] }, // Renamed to avoid confusion with priest Zadok
    { id: 'zadok_matt', name: 'Zadok', parents: ['azor'], children: ['akim'], gender: 'male', references: ['Matt 1:14'] },
    { id: 'akim', name: 'Akim', parents: ['zadok_matt'], children: ['eliud'], gender: 'male', references: ['Matt 1:14'] },
    { id: 'eliud', name: 'Eliud', parents: ['akim'], children: ['eleazar_matt'], gender: 'male', references: ['Matt 1:15'] },
    { id: 'eleazar_matt', name: 'Eleazar', parents: ['eliud'], children: ['matthan'], gender: 'male', references: ['Matt 1:15'] },
    { id: 'matthan', name: 'Matthan', parents: ['eleazar_matt'], children: ['jacob_father_joseph'], gender: 'male', references: ['Matt 1:15'] },
    { id: 'jacob_father_joseph', name: 'Jacob', parents: ['matthan'], children: ['joseph_husband_mary'], gender: 'male', references: ['Matt 1:16'] },

    // Holy Family
    { id: 'joseph_husband_mary', name: 'Joseph', parents: ['jacob_father_joseph'], children: ['jesus'], spouses: ['mary'], gender: 'male', description: 'Husband of Mary', references: ['Matt 1:16', 'Luke 3:23'] },
    { id: 'mary', name: 'Mary', parents: ['heli'], children: ['jesus', 'james_just', 'joses', 'judas', 'simon'], spouses: ['joseph_husband_mary'], gender: 'female', description: 'Mother of Jesus', references: ['Matt 1', 'Luke 1'] },
    { id: 'jesus', name: 'Jesus', parents: ['mary', 'joseph_husband_mary'], children: [], gender: 'male', title: 'The Messiah', description: 'Son of God', references: ['Matt 1', 'Luke 3'] },

    // Brothers of Jesus
    { id: 'james_just', name: 'James', parents: ['mary', 'joseph_husband_mary'], children: [], gender: 'male', description: 'Brother of Jesus', references: ['Matt 13:55'] },
    { id: 'joses', name: 'Joses', parents: ['mary', 'joseph_husband_mary'], children: [], gender: 'male', references: ['Matt 13:55'] },
    { id: 'judas', name: 'Judas', parents: ['mary', 'joseph_husband_mary'], children: [], gender: 'male', references: ['Matt 13:55'] },
    { id: 'simon', name: 'Simon', parents: ['mary', 'joseph_husband_mary'], children: [], gender: 'male', references: ['Matt 13:55'] },

    // Luke 3 Genealogy (Mary's line - Heli)
    { id: 'heli', name: 'Heli', parents: ['matthat'], children: ['mary'], gender: 'male', references: ['Luke 3:23'] },
    { id: 'matthat', name: 'Matthat', parents: ['levi_luke'], children: ['heli'], gender: 'male', references: ['Luke 3:24'] },
    { id: 'levi_luke', name: 'Levi', parents: ['melchi'], children: ['matthat'], gender: 'male', references: ['Luke 3:24'] },
    { id: 'melchi', name: 'Melchi', parents: ['jannai'], children: ['levi_luke'], gender: 'male', references: ['Luke 3:24'] },
    { id: 'jannai', name: 'Jannai', parents: ['joseph_luke'], children: ['melchi'], gender: 'male', references: ['Luke 3:24'] },
    { id: 'joseph_luke', name: 'Joseph', parents: ['mattathias_luke'], children: ['jannai'], gender: 'male', references: ['Luke 3:24'] },
    { id: 'mattathias_luke', name: 'Mattathias', parents: ['amos'], children: ['joseph_luke'], gender: 'male', references: ['Luke 3:25'] },
    { id: 'amos', name: 'Amos', parents: ['nahum'], children: ['mattathias_luke'], gender: 'male', references: ['Luke 3:25'] },
    { id: 'nahum', name: 'Nahum', parents: ['esli'], children: ['amos'], gender: 'male', references: ['Luke 3:25'] },
    { id: 'esli', name: 'Esli', parents: ['naggai'], children: ['nahum'], gender: 'male', references: ['Luke 3:25'] },
    { id: 'naggai', name: 'Naggai', parents: ['maath'], children: ['esli'], gender: 'male', references: ['Luke 3:25'] },
    { id: 'maath', name: 'Maath', parents: ['mattathias_2'], children: ['naggai'], gender: 'male', references: ['Luke 3:26'] },
    { id: 'mattathias_2', name: 'Mattathias', parents: ['semein'], children: ['maath'], gender: 'male', references: ['Luke 3:26'] },
    { id: 'semein', name: 'Semein', parents: ['josech'], children: ['mattathias_2'], gender: 'male', references: ['Luke 3:26'] },
    { id: 'josech', name: 'Josech', parents: ['joda'], children: ['semein'], gender: 'male', references: ['Luke 3:26'] },
    { id: 'joda', name: 'Joda', parents: ['joanan'], children: ['josech'], gender: 'male', references: ['Luke 3:26'] },
    { id: 'joanan', name: 'Joanan', parents: ['rhesa'], children: ['joda'], gender: 'male', references: ['Luke 3:27'] },
    { id: 'rhesa', name: 'Rhesa', parents: ['zerubbabel'], children: ['joanan'], gender: 'male', references: ['Luke 3:27'] },
];

const additionalKingsAndProphets = [
    // High Priests (Aaron to Zadok)
    { id: 'aaron', name: 'Aaron', parents: ['amram', 'jochebed'], children: ['nadab', 'abihu', 'eleazar', 'ithamar'], gender: 'male', title: 'High Priest', references: ['Ex 6:20'] },
    { id: 'moses', name: 'Moses', parents: ['amram', 'jochebed'], children: ['gershom', 'eliezer'], spouses: ['zipporah'], gender: 'male', title: 'Lawgiver', references: ['Ex 2-40', 'Ex 6:20'] },
    { id: 'zipporah', name: 'Zipporah', parents: ['jethro'], children: ['gershom', 'eliezer'], spouses: ['moses'], gender: 'female', description: 'Daughter of Jethro', references: ['Ex 2:21', 'Ex 18:2'] },
    { id: 'jethro', name: 'Jethro', parents: [], children: ['zipporah'], gender: 'male', description: 'Priest of Midian, also called Reuel', references: ['Ex 2:18', 'Ex 3:1', 'Ex 18:1'] },
    { id: 'gershom', name: 'Gershom', parents: ['moses', 'zipporah'], children: [], gender: 'male', description: 'Firstborn of Moses', references: ['Ex 2:22', 'Ex 18:3'] },
    { id: 'eliezer', name: 'Eliezer', parents: ['moses', 'zipporah'], children: [], gender: 'male', description: 'Second son of Moses', references: ['Ex 18:4', '1 Chron 23:15'] },
    { id: 'miriam', name: 'Miriam', parents: ['amram', 'jochebed'], children: [], gender: 'female', title: 'Prophetess', references: ['Ex 15:20'] },
    { id: 'amram', name: 'Amram', parents: ['kohath'], children: ['aaron', 'moses', 'miriam'], spouses: ['jochebed'], gender: 'male', references: ['Ex 6:18'] },
    { id: 'jochebed', name: 'Jochebed', parents: ['levi'], children: ['aaron', 'moses', 'miriam'], spouses: ['amram'], gender: 'female', references: ['Ex 6:20'] },
    { id: 'kohath', name: 'Kohath', parents: ['levi'], children: ['amram', 'izhar', 'hebron', 'uzziel'], gender: 'male', references: ['Gen 46:11'] },
    { id: 'nadab', name: 'Nadab', parents: ['aaron'], children: [], gender: 'male', references: ['Ex 6:23'] },
    { id: 'abihu', name: 'Abihu', parents: ['aaron'], children: [], gender: 'male', references: ['Ex 6:23'] },
    { id: 'eleazar', name: 'Eleazar', parents: ['aaron'], children: ['phinehas'], gender: 'male', title: 'High Priest', references: ['Ex 6:23'] },
    { id: 'ithamar', name: 'Ithamar', parents: ['aaron'], children: [], gender: 'male', references: ['Ex 6:23'] },
    { id: 'phinehas', name: 'Phinehas', parents: ['eleazar'], children: ['abishua'], gender: 'male', references: ['Ex 6:25'] },

    // Samuel's Line expanded
    { id: 'joel', name: 'Joel', parents: ['samuel'], children: [], gender: 'male', references: ['1 Sam 8:2'] },
    { id: 'abijah_judge', name: 'Abijah', parents: ['samuel'], children: [], gender: 'male', references: ['1 Sam 8:2'] },

    // Kings of Israel (Northern Kingdom) - Complete List
    { id: 'jeroboam_i', name: 'Jeroboam I', parents: ['nebat', 'zeruah'], children: ['nadab_israel'], gender: 'male', title: 'King of Israel', references: ['1 Kings 11-14'] },
    { id: 'nebat', name: 'Nebat', parents: ['ephraim'], children: ['jeroboam_i'], spouses: ['zeruah'], gender: 'male', references: ['1 Kings 11:26'] },
    { id: 'zeruah', name: 'Zeruah', parents: [], children: ['jeroboam_i'], spouses: ['nebat'], gender: 'female', description: 'Widow', references: ['1 Kings 11:26'] },
    { id: 'nadab_israel', name: 'Nadab', parents: ['jeroboam_i'], children: [], gender: 'male', title: 'King of Israel', references: ['1 Kings 15'] },

    { id: 'baasha', name: 'Baasha', parents: ['ahijah_father'], children: ['elah'], gender: 'male', title: 'King of Israel', references: ['1 Kings 15-16'] },
    { id: 'ahijah_father', name: 'Ahijah', parents: ['issachar'], children: ['baasha'], gender: 'male', references: ['1 Kings 15:27'] },
    { id: 'elah', name: 'Elah', parents: ['baasha'], children: [], gender: 'male', title: 'King of Israel', references: ['1 Kings 16'] },

    { id: 'zimri', name: 'Zimri', parents: [], children: [], gender: 'male', title: 'King of Israel (7 days)', references: ['1 Kings 16'] },

    // Omri Dynasty (already have Omri, Ahab, Ahaziah, Joram/Jehoram)
    { id: 'ahaziah_israel', name: 'Ahaziah', parents: ['ahab', 'jezebel'], children: [], gender: 'male', title: 'King of Israel', references: ['1 Kings 22'] },
    { id: 'joram', name: 'Joram', parents: ['ahab', 'jezebel'], children: [], gender: 'male', title: 'King of Israel', references: ['2 Kings 1'] },

    { id: 'jehu', name: 'Jehu', parents: ['jehoshaphat_son_nimshi'], children: ['jehoahaz_israel'], gender: 'male', title: 'King of Israel', references: ['2 Kings 9-10'] },
    { id: 'jehoshaphat_son_nimshi', name: 'Jehoshaphat', parents: ['nimshi'], children: ['jehu'], gender: 'male', references: ['2 Kings 9:2'] },
    { id: 'nimshi', name: 'Nimshi', parents: [], children: ['jehoshaphat_son_nimshi'], gender: 'male', references: ['2 Kings 9:2'] },
    { id: 'jehoahaz_israel', name: 'Jehoahaz', parents: ['jehu'], children: ['joash_israel'], gender: 'male', title: 'King of Israel', references: ['2 Kings 13'] },
    { id: 'joash_israel', name: 'Joash', parents: ['jehoahaz_israel'], children: ['jeroboam_ii'], gender: 'male', title: 'King of Israel', references: ['2 Kings 13'] },
    { id: 'jeroboam_ii', name: 'Jeroboam II', parents: ['joash_israel'], children: ['zechariah_israel'], gender: 'male', title: 'King of Israel', references: ['2 Kings 14'] },
    { id: 'zechariah_israel', name: 'Zechariah', parents: ['jeroboam_ii'], children: [], gender: 'male', title: 'King of Israel', references: ['2 Kings 15'] },

    { id: 'shallum', name: 'Shallum', parents: ['jabesh'], children: [], gender: 'male', title: 'King of Israel', references: ['2 Kings 15'] },
    { id: 'jabesh', name: 'Jabesh', parents: [], children: ['shallum'], gender: 'male', references: ['2 Kings 15:10'] },

    { id: 'menahem', name: 'Menahem', parents: ['gadi'], children: ['pekahiah'], gender: 'male', title: 'King of Israel', references: ['2 Kings 15'] },
    { id: 'gadi', name: 'Gadi', parents: [], children: ['menahem'], gender: 'male', references: ['2 Kings 15:14'] },
    { id: 'pekahiah', name: 'Pekahiah', parents: ['menahem'], children: [], gender: 'male', title: 'King of Israel', references: ['2 Kings 15'] },

    { id: 'pekah', name: 'Pekah', parents: ['remaliah'], children: [], gender: 'male', title: 'King of Israel', references: ['2 Kings 15'] },
    { id: 'remaliah', name: 'Remaliah', parents: [], children: ['pekah'], gender: 'male', references: ['2 Kings 15:25'] },

    { id: 'hoshea', name: 'Hoshea', parents: ['elah_father'], children: [], gender: 'male', title: 'Last King of Israel', references: ['2 Kings 17'] },
    { id: 'elah_father', name: 'Elah', parents: [], children: ['hoshea'], gender: 'male', references: ['2 Kings 17:1'] },

    { id: 'caleb', name: 'Caleb', parents: ['jephunneh'], children: ['irukan'], gender: 'male', description: 'Spy of Israel', references: ['Num 13'] },
    { id: 'jephunneh', name: 'Jephunneh', parents: [], children: ['caleb'], gender: 'male', references: ['Num 13'] },
];

const lukeAncestry = [
    // Luke 3:31-27 (Reverse order from David)
    // David -> Nathan -> ... -> Neri -> Shealtiel

    { id: 'nathan', name: 'Nathan', parents: ['david', 'bathsheba'], children: ['mattatha'], gender: 'male', references: ['Luke 3:31', '1 Chron 3:5'] },
    { id: 'mattatha', name: 'Mattatha', parents: ['nathan'], children: ['menan'], gender: 'male', references: ['Luke 3:31'] },
    { id: 'menan', name: 'Menan', parents: ['mattatha'], children: ['melea'], gender: 'male', references: ['Luke 3:31'] },
    { id: 'melea', name: 'Melea', parents: ['menan'], children: ['eliakim_luke'], gender: 'male', references: ['Luke 3:31'] },
    { id: 'eliakim_luke', name: 'Eliakim', parents: ['melea'], children: ['jonan'], gender: 'male', references: ['Luke 3:30'] },
    { id: 'jonan', name: 'Jonan', parents: ['eliakim_luke'], children: ['joseph_son_jonan'], gender: 'male', references: ['Luke 3:30'] },
    { id: 'joseph_son_jonan', name: 'Joseph', parents: ['jonan'], children: ['juda_luke'], gender: 'male', references: ['Luke 3:30'] },
    { id: 'juda_luke', name: 'Juda', parents: ['joseph_son_jonan'], children: ['simeon_luke'], gender: 'male', references: ['Luke 3:30'] },
    { id: 'simeon_luke', name: 'Simeon', parents: ['juda_luke'], children: ['levi_son_simeon'], gender: 'male', references: ['Luke 3:30'] },
    { id: 'levi_son_simeon', name: 'Levi', parents: ['simeon_luke'], children: ['matthat_son_levi'], gender: 'male', references: ['Luke 3:29'] },
    { id: 'matthat_son_levi', name: 'Matthat', parents: ['levi_son_simeon'], children: ['jorim'], gender: 'male', references: ['Luke 3:29'] },
    { id: 'jorim', name: 'Jorim', parents: ['matthat_son_levi'], children: ['eliezer'], gender: 'male', references: ['Luke 3:29'] },
    { id: 'eliezer', name: 'Eliezer', parents: ['jorim'], children: ['jose_luke'], gender: 'male', references: ['Luke 3:29'] },
    { id: 'jose_luke', name: 'Jose', parents: ['eliezer'], children: ['er'], gender: 'male', references: ['Luke 3:29'] },
    { id: 'er', name: 'Er', parents: ['jose_luke'], children: ['elmodam'], gender: 'male', references: ['Luke 3:28'] },
    { id: 'elmodam', name: 'Elmodam', parents: ['er'], children: ['cosam'], gender: 'male', references: ['Luke 3:28'] },
    { id: 'cosam', name: 'Cosam', parents: ['elmodam'], children: ['addi'], gender: 'male', references: ['Luke 3:28'] },
    { id: 'addi', name: 'Addi', parents: ['cosam'], children: ['melchi_father_neri'], gender: 'male', references: ['Luke 3:28'] },
    { id: 'melchi_father_neri', name: 'Melchi', parents: ['addi'], children: ['neri'], gender: 'male', references: ['Luke 3:28'] },
    { id: 'neri', name: 'Neri', parents: ['melchi_father_neri'], children: ['shealtiel'], gender: 'male', references: ['Luke 3:27'] }
];

const chroniclesAdditions = [
    // 1 Chronicles 1-9 adds massive lists. We include key merge points.
    // David's mighty men, etc might be too wide, focusing on lineage.
];

const missingBiblicalFigures = [
    // --- Job (Patriarch, biblical figure) ---
    { id: 'job_figure', name: 'Job', parents: [], children: [], gender: 'male', title: 'Patriarch', description: 'Man of faith and patience', references: ['Job 1:1', 'James 5:11'] },
    
    // --- Foreign Kings & Rulers ---
    { id: 'pharaoh_exodus', name: 'Pharaoh', parents: [], children: [], gender: 'male', title: 'King of Egypt', description: 'During the Exodus', references: ['Ex 5-14'] },
    { id: 'pharaoh_joseph', name: 'Pharaoh (Joseph\'s Era)', parents: [], children: [], gender: 'male', title: 'King of Egypt', references: ['Gen 41:1-57', 'Gen 41:14', 'Gen 45:16'] },
    { id: 'pharaoh_shishak', name: 'Shishak', parents: [], children: [], gender: 'male', title: 'Pharaoh of Egypt', description: 'Invaded Judah', references: ['1 Kings 14:25-28', '2 Chron 12'] },
    { id: 'sennacherib', name: 'Sennacherib', parents: [], children: ['esarhaddon'], gender: 'male', title: 'King of Assyria', references: ['2 Kings 18-19', 'Isa 36-37'] },
    { id: 'esarhaddon', name: 'Esarhaddon', parents: ['sennacherib'], children: [], gender: 'male', title: 'King of Assyria', references: ['2 Kings 19:37', 'Isa 37:38'] },
    { id: 'nebuchadnezzar_ii', name: 'Nebuchadnezzar II', parents: [], children: ['belshazzar'], gender: 'male', title: 'King of Babylon', references: ['2 Kings 25', 'Dan 1'] },
    { id: 'belshazzar', name: 'Belshazzar', parents: ['nebuchadnezzar_ii'], children: [], gender: 'male', title: 'King of Babylon', references: ['Dan 5'] },
    { id: 'cyrus_great', name: 'Cyrus', parents: [], children: [], gender: 'male', title: 'King of Persia', references: ['Ezra 1', 'Isa 44:28'] },
    { id: 'darius_i', name: 'Darius I', parents: [], children: [], gender: 'male', title: 'King of Persia', references: ['Ezra 6', 'Dan 6'] },
    { id: 'ahasuerus', name: 'Ahasuerus', parents: [], children: [], gender: 'male', title: 'King of Persia', references: ['Esther 1'] },
    
    // --- Giants & Warriors ---
    { id: 'goliath', name: 'Goliath', parents: [], children: [], gender: 'male', title: 'Giant of Gath', references: ['1 Sam 17', '1 Chron 20:5'] },
    { id: 'og_bashan', name: 'Og', parents: [], children: [], gender: 'male', title: 'King of Bashan', references: ['Deut 3:11', 'Josh 2:10', 'Josh 12:4'] },
    { id: 'sihon_amorite', name: 'Sihon', parents: [], children: [], gender: 'male', title: 'King of Amorites', references: ['Deut 1:4', 'Josh 12:2'] },
    
    // --- Religious Leaders (NEW) ---
    { id: 'melchizedek', name: 'Melchizedek', parents: [], children: [], gender: 'male', title: 'King and Priest', references: ['Gen 14:18-20', 'Psalm 110:4', 'Heb 5:6-10'] },
    { id: 'eli_priest', name: 'Eli', parents: [], children: ['hophni', 'phinehas_eli'], gender: 'male', title: 'High Priest', references: ['1 Sam 1-4', '1 Sam 2:12-36', '1 Sam 3:11-18'] },
    { id: 'hophni', name: 'Hophni', parents: ['eli'], children: [], gender: 'male', references: ['1 Sam 1:3', '1 Sam 4:11'] },
    { id: 'phinehas_eli', name: 'Phinehas', parents: ['eli'], children: [], gender: 'male', references: ['1 Sam 1:3', '1 Sam 4:4'] },
    { id: 'abiathar', name: 'Abiathar', parents: ['ahimelech'], children: [], gender: 'male', title: 'High Priest', references: ['1 Sam 22:20', '1 Kings 1:7', '1 Kings 2:26'] },
    { id: 'ahimelech', name: 'Ahimelech', parents: [], children: ['abiathar'], gender: 'male', title: 'Priest', references: ['1 Sam 21:1-8', '1 Sam 22:9-18'] },
    
    // --- Other Figures ---
    { id: 'potiphar', name: 'Potiphar', parents: [], children: [], gender: 'male', title: 'Egyptian Official', references: ['Gen 37:36', 'Gen 39:1-6'] },
    { id: 'naomi', name: 'Naomi', parents: [], children: [], gender: 'female', references: ['Ruth 1-4', 'Ruth 4:17'] },
    
    // --- John Baptist's Family ---
    { id: 'john_baptist_ot', name: 'John the Baptist', parents: ['zechariah_john', 'elizabeth_john'], children: [], gender: 'male', title: 'Forerunner', references: ['Matt 3', 'Luke 1:5-80'] },
    { id: 'zechariah_john', name: 'Zechariah (Priest)', parents: [], children: ['john_baptist_ot'], gender: 'male', title: 'Priest', references: ['Luke 1:5-25'] },
    { id: 'elizabeth_john', name: 'Elizabeth', parents: [], children: ['john_baptist_ot'], gender: 'female', references: ['Luke 1:5-13'] }
];
