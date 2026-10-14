import { PlayerProfile } from '../types';

export const PLAYERS: PlayerProfile[] = [
  {
    id: 'sachin-tendulkar',
    name: 'Sachin Tendulkar',
    fullName: 'Sachin Ramesh Tendulkar',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm off break / leg break',
    careerSpan: '1989–2013',
    bio: 'Revered globally as the "Master Blaster," Sachin Tendulkar carried the aspirations of Indian cricket for 24 years. Armed with classical technique, immaculate balance, and supreme mental fortitude, he remains the only batter in international history to record 100 centuries.',
    majorAchievements: [
      'ICC Cricket World Cup Champion (2011)',
      '100 International Centuries (51 Test, 49 ODI)',
      'First male batter to score an ODI double-century (200* vs South Africa, 2010)',
      'Bharat Ratna awardee (India’s highest civilian honour, 2014)'
    ],
    verifiedRecords: [
      'Highest run-scorer in Test cricket history (15,921 runs)',
      'Highest run-scorer in ODI cricket history (18,426 runs)',
      'Most Test matches played in international history (200 Tests)',
      'Most international appearances in cricket history (664 matches)'
    ],
    testMatches: 200,
    testRuns: 15921,
    testWickets: 46,
    odiMatches: 463,
    odiRuns: 18426,
    odiWickets: 154,
    internationalCenturies: 100,
    imageFallbackGradient: 'from-blue-700 via-indigo-800 to-slate-900',
    relatedBlogSlug: 'sachin-tendulkar'
  },
  {
    id: 'virat-kohli',
    name: 'Virat Kohli',
    fullName: 'Virat Kohli',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm medium',
    careerSpan: '2008–Present',
    bio: 'The defining batter of the modern era, Virat Kohli combined ferocious competitive spirit with athletic discipline to transform fitness in Indian cricket. Known as the ultimate chase master in limited-overs formats, he has amassed 50 ODI hundreds.',
    majorAchievements: [
      'ICC Men’s Cricket World Cup Champion (2011)',
      'ICC Men’s T20 World Cup Champion (2024)',
      'ICC Champions Trophy Winner (2013)',
      'World record 50 One Day International centuries'
    ],
    verifiedRecords: [
      'Most centuries in One Day International history (50 ODI 100s)',
      'Most runs in a single ODI World Cup tournament (765 runs in 2023)',
      'Fastest player to reach 8,000, 9,000, 10,000, 11,000, 12,000, and 13,000 ODI runs',
      'Most Player of the Series awards in ICC T20 World Cups (2014, 2016)'
    ],
    testMatches: 118,
    testRuns: 9040,
    odiMatches: 295,
    odiRuns: 13906,
    t20iMatches: 125,
    t20iRuns: 4188,
    internationalCenturies: 80,
    iplRuns: 8000,
    imageFallbackGradient: 'from-amber-600 via-red-800 to-slate-900',
    relatedBlogSlug: 'virat-kohli'
  },
  {
    id: 'ms-dhoni',
    name: 'MS Dhoni',
    fullName: 'Mahendra Singh Dhoni',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Wicketkeeper-Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm medium (occasional)',
    careerSpan: '2004–2019',
    bio: 'Renowned as "Captain Cool," MS Dhoni led Indian cricket to historic heights through icy composure and astute tactical instincts. Emerging from Ranchi, he revolutionized white-ball finishing, pioneered the helicopter shot, and recorded lightning-fast stumpings.',
    majorAchievements: [
      'Only captain to win all 3 major white-ball ICC trophies (T20 WC 2007, CWC 2011, Champions Trophy 2013)',
      'Five-time IPL Champion as captain of Chennai Super Kings (2010, 2011, 2018, 2021, 2023)',
      'Padma Bhushan and Major Dhyan Chand Khel Ratna awardee'
    ],
    verifiedRecords: [
      'Most stumpings in international cricket history (195 stumpings)',
      'Third most dismissals by a wicketkeeper across all international cricket (829 dismissals)',
      'Highest score by a wicketkeeper in ODI cricket (183* vs Sri Lanka, 2005)',
      'Most international matches captained in world cricket (332 matches)'
    ],
    testMatches: 90,
    testRuns: 4876,
    odiMatches: 350,
    odiRuns: 10773,
    t20iMatches: 98,
    t20iRuns: 1617,
    internationalCenturies: 16,
    iplRuns: 5243,
    imageFallbackGradient: 'from-yellow-600 via-amber-700 to-slate-900',
    relatedBlogSlug: 'ms-dhoni'
  },
  {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    fullName: 'Rohit Gurunath Sharma',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm off break',
    careerSpan: '2007–Present',
    bio: 'Known as the "Hitman," Rohit Sharma is celebrated for his effortless pull shot, supreme timing, and record-breaking run production. As captain, he led India to victory in the 2024 ICC Men’s T20 World Cup and Mumbai Indians to 5 IPL titles.',
    majorAchievements: [
      'ICC Men’s T20 World Cup Champion as Captain (2024) & Player (2007)',
      'Five-time IPL Champion as captain of Mumbai Indians (2013, 2015, 2017, 2019, 2020)',
      'Three double-centuries in One Day Internationals (only player in history)'
    ],
    verifiedRecords: [
      'Highest individual score in ODI history (264 vs Sri Lanka, Kolkata 2014)',
      'Most international sixes across all formats in cricket history (620+ sixes)',
      'Most centuries in a single Cricket World Cup edition (5 centuries in 2019)',
      'Most hundreds in Men’s T20 International history (5 centuries)'
    ],
    testMatches: 64,
    testRuns: 4278,
    odiMatches: 265,
    odiRuns: 10866,
    t20iMatches: 159,
    t20iRuns: 4231,
    internationalCenturies: 48,
    iplRuns: 6628,
    imageFallbackGradient: 'from-blue-600 via-cyan-800 to-slate-900',
    relatedBlogSlug: 'cricket-records'
  },
  {
    id: 'jasprit-bumrah',
    name: 'Jasprit Bumrah',
    fullName: 'Jasprit Jasbirsingh Bumrah',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Fast Bowler',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm fast',
    careerSpan: '2016–Present',
    bio: 'Armed with an unorthodox hyper-extended straight-arm action and searing yorkers, Jasprit Bumrah is universally acknowledged as one of the most lethal all-format fast bowlers of the 21st century.',
    majorAchievements: [
      'ICC Men’s T20 World Cup Champion & Player of the Tournament (2024)',
      'ICC Men’s No. 1 ranked Test and ODI Bowler',
      'Test hat-trick vs West Indies in Kingston, Jamaica (2019)'
    ],
    verifiedRecords: [
      'Fastest Indian pacer to 100 and 150 Test wickets',
      'Economy rate under 4.2 in the 2024 T20 World Cup, winning Player of the Tournament',
      'Five-wicket hauls in Australia, England, South Africa, and West Indies'
    ],
    testMatches: 40,
    testWickets: 175,
    odiMatches: 89,
    odiWickets: 149,
    t20iMatches: 70,
    t20iWickets: 89,
    iplWickets: 165,
    imageFallbackGradient: 'from-emerald-700 via-teal-800 to-slate-900',
    relatedBlogSlug: 'fast-vs-spin-bowling'
  },
  {
    id: 'kapil-dev',
    name: 'Kapil Dev',
    fullName: 'Kapil Dev Ramlal Nikhanj',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'All-Rounder',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm fast-medium',
    careerSpan: '1978–1994',
    bio: 'The Haryana Hurricane who transformed Indian cricket’s mentality. At 24, he captained India to their historic maiden 1983 Cricket World Cup triumph at Lord’s, retiring as the world record holder for most Test wickets (434).',
    majorAchievements: [
      'Captain of India’s 1983 ICC Cricket World Cup Winning Team',
      'Wisden Indian Cricketer of the Century (2002)',
      'ICC Cricket Hall of Fame Inductee'
    ],
    verifiedRecords: [
      'Only player in cricket history to record 4,000+ Test runs and 400+ Test wickets',
      'Iconic 175* vs Zimbabwe at Tunbridge Wells in 1983 from 17/5',
      'Held world record for most Test wickets (434 wickets) from 1994 to 1998'
    ],
    testMatches: 131,
    testRuns: 5248,
    testWickets: 434,
    odiMatches: 225,
    odiRuns: 3783,
    odiWickets: 253,
    internationalCenturies: 9,
    imageFallbackGradient: 'from-amber-700 via-stone-800 to-slate-900',
    relatedBlogSlug: 'icc-cricket-world-cup'
  },
  {
    id: 'rahul-dravid',
    name: 'Rahul Dravid',
    fullName: 'Rahul Sharad Dravid',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm off break',
    careerSpan: '1996–2012',
    bio: 'Revered as "The Wall," Rahul Dravid was the embodiment of defensive grit, technical perfection, and selflessness. As head coach, he steered India to the 2024 ICC Men’s T20 World Cup title.',
    majorAchievements: [
      'Head Coach of India’s 2024 ICC Men’s T20 World Cup Champions',
      'ICC Player of the Year & Test Player of the Year (2004)',
      'Led India to historic Test series wins in England (2007) and West Indies (2006)'
    ],
    verifiedRecords: [
      'Faced the most balls in Test cricket history (31,258 balls)',
      'Spent the most minutes at the crease in Test cricket history (44,152 minutes)',
      'Most catches by a non-wicketkeeper in Test cricket history (210 catches)'
    ],
    testMatches: 164,
    testRuns: 13288,
    odiMatches: 344,
    odiRuns: 10889,
    internationalCenturies: 48,
    imageFallbackGradient: 'from-blue-800 via-slate-800 to-slate-900',
    relatedBlogSlug: 'batting-techniques'
  },
  {
    id: 'sourav-ganguly',
    name: 'Sourav Ganguly',
    fullName: 'Sourav Chandidas Ganguly',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Right-arm medium',
    careerSpan: '1992–2008',
    bio: 'The "God of the Off-Side" and visionary captain who injected aggressive swagger and foreign-tour self-belief into Indian cricket at the turn of the millennium.',
    majorAchievements: [
      'Captained India to the 2003 ICC Cricket World Cup Final',
      'Joint Winner of ICC Champions Trophy (2002)',
      'Test series victory against Steve Waugh’s Australia in the historic 2001 series'
    ],
    verifiedRecords: [
      'Scored a historic 131 on Test debut at Lord’s (1996)',
      '183 vs Sri Lanka in 1999 World Cup at Taunton (second highest World Cup score at the time)',
      'Over 11,000 runs in One Day Internationals'
    ],
    testMatches: 113,
    testRuns: 7212,
    odiMatches: 311,
    odiRuns: 11363,
    odiWickets: 100,
    internationalCenturies: 38,
    imageFallbackGradient: 'from-sky-700 via-blue-900 to-slate-900',
    relatedBlogSlug: 'history-of-cricket'
  },
  {
    id: 'sunil-gavaskar',
    name: 'Sunil Gavaskar',
    fullName: 'Sunil Manohar Gavaskar',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm medium',
    careerSpan: '1971–1987',
    bio: 'The original "Little Master" who stood fearless against the most hostile fast bowling batteries in cricket history without wearing a protective helmet, opening batting for 16 legendary years.',
    majorAchievements: [
      'First batter in cricket history to cross 10,000 runs in Test matches (1987)',
      'Member of India’s 1983 World Cup Championship Winning Team',
      'Held world record for most Test centuries (34 hundreds) for nearly two decades'
    ],
    verifiedRecords: [
      'Scored 774 runs in his debut Test series against West Indies in the Caribbean (1971)',
      'First player to reach 34 Test centuries',
      'Carried his bat through an entire completed Test innings three times'
    ],
    testMatches: 125,
    testRuns: 10122,
    odiMatches: 108,
    odiRuns: 3092,
    internationalCenturies: 35,
    imageFallbackGradient: 'from-amber-800 via-stone-800 to-slate-900',
    relatedBlogSlug: 'history-of-cricket'
  },
  {
    id: 'hardik-pandya',
    name: 'Hardik Pandya',
    fullName: 'Hardik Himanshu Pandya',
    country: 'India',
    countryFlag: '🇮🇳',
    role: 'All-Rounder',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm fast-medium',
    careerSpan: '2016–Present',
    bio: 'An explosive dynamic all-rounder capable of clocking 140 km/h with the ball and clearing boundary fences at will. He defended 16 runs in the final over of the 2024 ICC T20 World Cup final.',
    majorAchievements: [
      'ICC Men’s T20 World Cup Champion & Vice-Captain (2024)',
      'IPL Champion captain with Gujarat Titans (2022 debut season)',
      'Four-time IPL Champion with Mumbai Indians (2015, 2017, 2019, 2020)'
    ],
    verifiedRecords: [
      'Bowled the historic final over of the 2024 T20 World Cup Final against South Africa in Barbados',
      'First Indian player to score 30+ runs and take 3+ wickets in a single T20I match multiple times'
    ],
    odiMatches: 86,
    odiRuns: 1769,
    odiWickets: 84,
    t20iMatches: 104,
    t20iRuns: 1641,
    t20iWickets: 86,
    iplRuns: 2525,
    iplWickets: 64,
    imageFallbackGradient: 'from-blue-700 via-indigo-900 to-slate-900',
    relatedBlogSlug: 'ipl-explained'
  },
  {
    id: 'donald-bradman',
    name: 'Sir Donald Bradman',
    fullName: 'Sir Donald George Bradman',
    country: 'Australia',
    countryFlag: '🇦🇺',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm leg break (rare)',
    careerSpan: '1928–1948',
    bio: 'Universally recognized as the greatest batter in the history of cricket. Known simply as "The Don," his Test batting average of 99.94 is widely cited by statisticians as the greatest athletic feat in all international sports.',
    majorAchievements: [
      'Knighted for services to cricket (1949)',
      'Captained the famous undefeated 1948 Australian touring side known as "The Invincibles"',
      'Wisden Leading Cricketer in the World'
    ],
    verifiedRecords: [
      'Highest career Test batting average in history: 99.94 runs per innings',
      'Most double-centuries in Test cricket history (12 double-hundreds)',
      'Scored 309 runs in a single day of a Test match (vs England at Headingley, 1930)',
      'Fastest player to reach 2,000, 3,000, 4,000, 5,000, and 6,000 Test runs'
    ],
    testMatches: 52,
    testRuns: 6996,
    internationalCenturies: 29,
    imageFallbackGradient: 'from-emerald-800 via-green-950 to-slate-900',
    relatedBlogSlug: 'cricket-records'
  },
  {
    id: 'vivian-richards',
    name: 'Sir Vivian Richards',
    fullName: 'Sir Isaac Vivian Alexander Richards',
    country: 'West Indies',
    countryFlag: '🏝️',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm off break',
    careerSpan: '1974–1991',
    bio: 'The swaggering king of cricket who dismantled hostile bowling with contemptuous disdain, chewing gum and never wearing a helmet. He formed the backbone of the all-conquering West Indies dynasty.',
    majorAchievements: [
      'Two-time ICC Cricket World Cup Champion (1975, 1979)',
      'Scored 138* in the 1979 World Cup Final at Lord’s',
      'Knighted by Antigua & Barbuda for services to cricket'
    ],
    verifiedRecords: [
      'Held the record for fastest Test century (56 balls vs England, 1986) for 30 years',
      'Scored 1,710 Test runs in a single calendar year (1976), an enduring record for three decades',
      'Career Test batting average over 50 with a strike rate exceeding 86'
    ],
    testMatches: 121,
    testRuns: 8540,
    testWickets: 32,
    odiMatches: 187,
    odiRuns: 6721,
    odiWickets: 118,
    internationalCenturies: 35,
    imageFallbackGradient: 'from-rose-900 via-red-950 to-slate-900',
    relatedBlogSlug: 'icc-cricket-world-cup'
  },
  {
    id: 'shane-warne',
    name: 'Shane Warne',
    fullName: 'Shane Keith Warne',
    country: 'Australia',
    countryFlag: '🇦🇺',
    role: 'Spin Bowler',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm leg break / googly',
    careerSpan: '1992–2007',
    bio: 'The charismatic blonde wizard who single-handedly revived the dying art of leg spin. Bowled Mike Gatting with the "Ball of the Century" at Old Trafford in 1993 and went on to claim 708 Test wickets.',
    majorAchievements: [
      'ICC Cricket World Cup Champion & Player of the Final (1999)',
      'Named one of the Five Wisden Cricketers of the 20th Century',
      'Inaugural IPL Champion as captain-coach of Rajasthan Royals (2008)'
    ],
    verifiedRecords: [
      '708 Test wickets in 145 matches (second highest in Test history)',
      'Over 1,000 international wickets (708 Test, 293 ODI)',
      'Delivered the "Ball of the Century" to Mike Gatting, pitching outside leg and hitting off stump'
    ],
    testMatches: 145,
    testWickets: 708,
    odiMatches: 194,
    odiWickets: 293,
    iplWickets: 57,
    imageFallbackGradient: 'from-amber-700 via-yellow-950 to-slate-900',
    relatedBlogSlug: 'fast-vs-spin-bowling'
  },
  {
    id: 'muttiah-muralitharan',
    name: 'Muttiah Muralitharan',
    fullName: 'Muttiah Muralitharan',
    country: 'Sri Lanka',
    countryFlag: '🇱🇰',
    role: 'Spin Bowler',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm off break / doosra',
    careerSpan: '1992–2011',
    bio: 'The highest wicket-taker in the history of international cricket. Generating venomous off-spin with his flexible wrist, he claimed 800 Test wickets and 534 ODI wickets across a legendary Sri Lankan career.',
    majorAchievements: [
      'ICC Cricket World Cup Champion (1996)',
      'Two-time ICC Cricket World Cup Finalist (2007, 2011)',
      'Inducted into ICC Cricket Hall of Fame (2017)'
    ],
    verifiedRecords: [
      'Most wickets in Test cricket history: 800 wickets',
      'Most wickets in ODI cricket history: 534 wickets',
      'Most 5-wicket hauls in Test cricket: 67 five-fors',
      'Most 10-wicket match hauls in Test cricket: 22 ten-wicket matches'
    ],
    testMatches: 133,
    testWickets: 800,
    odiMatches: 350,
    odiWickets: 534,
    t20iMatches: 12,
    t20iWickets: 13,
    imageFallbackGradient: 'from-blue-800 via-sky-950 to-slate-900',
    relatedBlogSlug: 'cricket-records'
  },
  {
    id: 'ab-de-villiers',
    name: 'AB de Villiers',
    fullName: 'Abraham Benjamin de Villiers',
    country: 'South Africa',
    countryFlag: '🇿🇦',
    role: 'Batter',
    battingStyle: 'Right-hand bat',
    bowlingStyle: 'Right-arm medium (occasional)',
    careerSpan: '2004–2018',
    bio: 'Celebrated as "Mr. 360," AB de Villiers transformed modern batting through extraordinary 360-degree innovation, sweeps, ramps, and jaw-dropping white-ball destruction, complemented by classical Test defense.',
    majorAchievements: [
      'Three-time ICC ODI Player of the Year (2010, 2014, 2015)',
      'Fastest 50, 100, and 150 in One Day International history',
      'Beloved icon for Royal Challengers Bengaluru alongside Virat Kohli'
    ],
    verifiedRecords: [
      'Fastest century in ODI history: 100 off 31 balls vs West Indies (Johannesburg, 2015)',
      'Fastest half-century in ODI history: 50 off 16 balls',
      'Fastest 150 in ODI history: 150 off 64 balls vs West Indies (Sydney, 2015)'
    ],
    testMatches: 114,
    testRuns: 8765,
    odiMatches: 228,
    odiRuns: 9577,
    t20iMatches: 78,
    t20iRuns: 1672,
    internationalCenturies: 47,
    iplRuns: 5162,
    imageFallbackGradient: 'from-emerald-700 via-teal-900 to-slate-900',
    relatedBlogSlug: 'cricket-records'
  },
  {
    id: 'brian-lara',
    name: 'Brian Lara',
    fullName: 'Brian Charles Lara',
    country: 'West Indies',
    countryFlag: '🏝️',
    role: 'Batter',
    battingStyle: 'Left-hand bat',
    bowlingStyle: 'Right-arm leg break (occasional)',
    careerSpan: '1990–2007',
    bio: 'The "Prince of Port of Spain," Lara played with high backlift, extravagant flourish, and an insatiable appetite for monumental scores. He is the only cricketer in history to compile both 400 in Tests and 501 in first-class cricket.',
    majorAchievements: [
      'ICC Champions Trophy Champion as Captain (2004)',
      'Only batter to hold the record for highest Test score twice (375 in 1994, 400* in 2004)',
      'Inducted into ICC Cricket Hall of Fame'
    ],
    verifiedRecords: [
      'Highest individual score in Test history: 400 not out vs England (Antigua, 2004)',
      'Highest individual score in first-class cricket: 501 not out for Warwickshire (1994)',
      'Most runs scored in a single over of a Test match (28 runs off Robin Peterson, 2003)'
    ],
    testMatches: 131,
    testRuns: 11953,
    odiMatches: 299,
    odiRuns: 10405,
    internationalCenturies: 53,
    imageFallbackGradient: 'from-rose-800 via-stone-900 to-slate-900',
    relatedBlogSlug: 'cricket-records'
  }
];
