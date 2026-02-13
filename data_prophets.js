
const prophets = [
    // --- Major Prophets ---
    { id: 'isaiah', name: 'Isaiah', parents: ['amoz'], children: ['shear_jashub', 'maher_shalal_hash_baz'], gender: 'male', title: 'Major Prophet', references: ['Isa 1:1'] },
    { id: 'amoz', name: 'Amoz', parents: [], children: ['isaiah'], gender: 'male', references: ['Isa 1:1'] },
    { id: 'shear_jashub', name: 'Shear-jashub', parents: ['isaiah'], children: [], gender: 'male', references: ['Isa 7:3'] },
    { id: 'maher_shalal_hash_baz', name: 'Maher-shalal-hash-baz', parents: ['isaiah'], children: [], gender: 'male', references: ['Isa 8:3'] },

    { id: 'jeremiah', name: 'Jeremiah', parents: ['hilkiah_priest'], children: [], gender: 'male', title: 'Major Prophet', description: 'Weeping Prophet', references: ['Jer 1:1'] },
    { id: 'hilkiah_priest', name: 'Hilkiah', parents: [], children: ['jeremiah'], gender: 'male', description: 'Priest at Anathoth', references: ['Jer 1:1'] },

    { id: 'ezekiel', name: 'Ezekiel', parents: ['buzi'], children: [], gender: 'male', title: 'Major Prophet', description: 'Priest', references: ['Ezek 1:3'] },
    { id: 'buzi', name: 'Buzi', parents: [], children: ['ezekiel'], gender: 'male', references: ['Ezek 1:3'] },

    { id: 'daniel', name: 'Daniel', parents: [], children: [], gender: 'male', title: 'Major Prophet', description: 'royal family of Judah', references: ['Dan 1:3'] },

    // --- Minor Prophets ---
    { id: 'hosea', name: 'Hosea', parents: ['beeri'], children: ['jezreel', 'lo_ruhamah', 'lo_ammi'], spouses: ['gomer_wife'], gender: 'male', title: 'Minor Prophet', references: ['Hos 1:1'] },
    { id: 'beeri', name: 'Beeri', parents: [], children: ['hosea'], gender: 'male', references: ['Hos 1:1'] },
    { id: 'gomer_wife', name: 'Gomer', parents: ['diblaim'], children: ['jezreel', 'lo_ruhamah', 'lo_ammi'], spouses: ['hosea'], gender: 'female', references: ['Hos 1:3'] },
    { id: 'diblaim', name: 'Diblaim', parents: [], children: ['gomer_wife'], gender: 'male', references: ['Hos 1:3'] },
    { id: 'jezreel', name: 'Jezreel', parents: ['hosea', 'gomer_wife'], children: [], gender: 'male', references: ['Hos 1:4'] },
    { id: 'lo_ruhamah', name: 'Lo-ruhamah', parents: ['hosea', 'gomer_wife'], children: [], gender: 'female', references: ['Hos 1:6'] },
    { id: 'lo_ammi', name: 'Lo-ammi', parents: ['hosea', 'gomer_wife'], children: [], gender: 'male', references: ['Hos 1:9'] },

    { id: 'joel_prophet', name: 'Joel', parents: ['pethuel'], children: [], gender: 'male', title: 'Minor Prophet', references: ['Joel 1:1'] },
    { id: 'pethuel', name: 'Pethuel', parents: [], children: ['joel_prophet'], gender: 'male', references: ['Joel 1:1'] },

    { id: 'amos_prophet', name: 'Amos', parents: [], children: [], gender: 'male', title: 'Minor Prophet', description: 'Shepherd of Tekoa', references: ['Amos 1:1'] },

    { id: 'obadiah', name: 'Obadiah', parents: [], children: [], gender: 'male', title: 'Minor Prophet', references: ['Obad 1:1'] },

    { id: 'jonah', name: 'Jonah', parents: ['amittai'], children: [], gender: 'male', title: 'Minor Prophet', references: ['Jonah 1:1'] },
    { id: 'amittai', name: 'Amittai', parents: [], children: ['jonah'], gender: 'male', references: ['Jonah 1:1'] },

    { id: 'micah', name: 'Micah', parents: [], children: [], gender: 'male', title: 'Minor Prophet', description: 'Moreshite', references: ['Mic 1:1'] },

    { id: 'nahum', name: 'Nahum', parents: [], children: [], gender: 'male', title: 'Minor Prophet', description: 'Elkoshite', references: ['Nah 1:1'] },

    { id: 'habakkuk', name: 'Habakkuk', parents: [], children: [], gender: 'male', title: 'Minor Prophet', references: ['Hab 1:1'] },

    { id: 'zephaniah', name: 'Zephaniah', parents: ['cushi'], children: [], gender: 'male', title: 'Minor Prophet', references: ['Zeph 1:1'] },
    { id: 'cushi', name: 'Cushi', parents: ['gedaliah_zeph'], children: ['zephaniah'], gender: 'male', references: ['Zeph 1:1'] },
    { id: 'gedaliah_zeph', name: 'Gedaliah', parents: ['amariah_zeph'], children: ['cushi'], gender: 'male', references: ['Zeph 1:1'] },
    { id: 'amariah_zeph', name: 'Amariah', parents: ['hezekiah'], children: ['gedaliah_zeph'], gender: 'male', references: ['Zeph 1:1'] },
    // Hezekiah (King) is already in kings array. This will automatically link Zephaniah to the main tree!

    { id: 'haggai', name: 'Haggai', parents: [], children: [], gender: 'male', title: 'Minor Prophet', references: ['Hag 1:1'] },

    { id: 'zechariah_prophet', name: 'Zechariah', parents: ['berechiah'], children: [], gender: 'male', title: 'Minor Prophet', references: ['Zech 1:1'] },
    { id: 'berechiah', name: 'Berechiah', parents: ['iddo'], children: ['zechariah_prophet'], gender: 'male', references: ['Zech 1:1'] },
    { id: 'iddo', name: 'Iddo', parents: [], children: ['berechiah'], gender: 'male', references: ['Zech 1:1'] },

    { id: 'malachi', name: 'Malachi', parents: [], children: [], gender: 'male', title: 'Minor Prophet', description: 'Last prophet of OT', references: ['Mal 1:1', 'Mal 4:5 (Elijah return)'] },

    // Elijah & Elisha
    { id: 'elijah', name: 'Elijah', parents: [], children: [], gender: 'male', title: 'Prophet', description: 'Tishbite of Gilead', references: ['1 Kings 17:1', '1 Kings 18 (Mount Carmel)', '1 Kings 19 (Horeb)', '2 Kings 2:11 (Chariot)', 'Mal 4:5', 'Matt 17:3 (Transfiguration)'] },
    { id: 'elisha', name: 'Elisha', parents: ['shaphat'], children: [], gender: 'male', title: 'Prophet', description: 'Northern Kingdom successor to Elijah', references: ['1 Kings 19:16-21', '2 Kings 2 (Mantle)', '2 Kings 3-13'] },
    { id: 'shaphat', name: 'Shaphat', parents: [], children: ['elisha'], gender: 'male', description: 'Father of Elisha', references: ['1 Kings 19:16'] },

    // Additional Prophets from OT
    { id: 'jonah_prophet', name: 'Jonah', parents: ['amittai'], children: [], gender: 'male', title: 'Minor Prophet', description: 'Preached to Nineveh', references: ['Jonah 1-4', '2 Kings 14:25', 'Matt 12:39-41 (Sign)'] },
    { id: 'balaam_prophet', name: 'Balaam', parents: [], children: [], gender: 'male', title: 'Prophet', description: 'Soothsayer from Mesopotamia', references: ['Num 22-24', '2 Peter 2:15 (Warnings)'] },
    
    // More comprehensive minor prophets
    { id: 'haggai_prophet', name: 'Haggai', parents: [], children: [], gender: 'male', title: 'Minor Prophet', description: 'Encouraged rebuilding temple', references: ['Hag 1:1 (520 BC)', 'Hag 1-2', 'Ezra 5:1'] }
];
