import { Tournament } from '../types';

export const TOURNAMENTS: Tournament[] = [
  {
    id: 'icc-mens-cricket-world-cup',
    name: 'ICC Men’s Cricket World Cup',
    shortName: 'ODI World Cup',
    organizer: 'International Cricket Council (ICC)',
    format: 'ODI',
    firstEdition: 1975,
    frequency: 'Every 4 years',
    participatingTeams: '10 to 14 National Teams (Qualifiers + Full Members)',
    trophyDescription: 'Iconic 11-kilogram silver and gilt trophy featuring three silver columns shaped as stumps and bails holding a golden globe.',
    overview: 'The flagship event of international cricket calendar. Contested in the 50-over format, the World Cup determines the ultimate world champion of One Day cricket and commands global television audiences exceeding one billion people.',
    competitionStructure: 'Typically features a comprehensive round-robin group phase followed by high-stakes single-elimination semi-finals and a grand final.',
    historicalSignificance: 'From the West Indies’ opening dominance at Lord’s in 1975 to India’s transformational 1983 victory, Australia’s six-title supremacy, and England’s boundary countback triumph in 2019, the tournament defines cricket history.',
    recentChampions: [
      { year: 2023, winner: 'Australia', runnerUp: 'India', host: 'India' },
      { year: 2019, winner: 'England', runnerUp: 'New Zealand', host: 'England & Wales' },
      { year: 2015, winner: 'Australia', runnerUp: 'New Zealand', host: 'Australia & New Zealand' },
      { year: 2011, winner: 'India', runnerUp: 'Sri Lanka', host: 'India, Sri Lanka & Bangladesh' },
      { year: 2007, winner: 'Australia', runnerUp: 'Sri Lanka', host: 'West Indies' }
    ],
    notableMilestones: [
      'Clive Lloyd lifts inaugural Prudential Cup at Lord’s in 1975',
      'Kapil Dev’s India shocks West Indies at Lord’s in 1983',
      'Australia wins three consecutive editions undefeated (1999, 2003, 2007)',
      'MS Dhoni hits winning six at Wankhede in 2011',
      'Lord’s 2019 final ends in tie and Super Over tie'
    ],
    relatedBlogSlug: 'icc-cricket-world-cup'
  },
  {
    id: 'icc-mens-t20-world-cup',
    name: 'ICC Men’s T20 World Cup',
    shortName: 'T20 World Cup',
    organizer: 'International Cricket Council (ICC)',
    format: 'T20',
    firstEdition: 2007,
    frequency: 'Every 2 years',
    participatingTeams: '20 National Teams (Expanded in 2024)',
    trophyDescription: 'Modern brushed silver trophy with dynamic aerodynamic swooshes symbolizing the high speed of 20-over cricket.',
    overview: 'The fastest-growing tournament in world sports, the Men’s T20 World Cup brings together established cricket superpowers alongside burgeoning associate nations in a three-week festival of boundary hitting and death-bowling drama.',
    competitionStructure: 'Initial group stages (four groups of five), advancing to Super 8 round-robin pools, knockout semi-finals, and the final.',
    historicalSignificance: 'The 2007 inaugural edition catalyzed the launch of the IPL and the modern franchise revolution. The 2024 tournament in the USA and West Indies expanded global reach, crowned by India’s unbeaten campaign.',
    recentChampions: [
      { year: 2024, winner: 'India', runnerUp: 'South Africa', host: 'USA & West Indies' },
      { year: 2022, winner: 'England', runnerUp: 'Pakistan', host: 'Australia' },
      { year: 2021, winner: 'Australia', runnerUp: 'New Zealand', host: 'UAE & Oman' },
      { year: 2016, winner: 'West Indies', runnerUp: 'England', host: 'India' },
      { year: 2014, winner: 'Sri Lanka', runnerUp: 'India', host: 'Bangladesh' }
    ],
    notableMilestones: [
      'Yuvraj Singh hits 6 sixes in an over off Stuart Broad (2007)',
      'Carlos Brathwaite hits four consecutive sixes in final over (2016)',
      'India wins 2024 edition undefeated under Rohit Sharma’s captaincy'
    ],
    relatedBlogSlug: 'test-odi-t20-formats'
  },
  {
    id: 'indian-premier-league',
    name: 'Indian Premier League',
    shortName: 'IPL',
    organizer: 'Board of Control for Cricket in India (BCCI)',
    format: 'T20',
    firstEdition: 2008,
    frequency: 'Annual (March – May)',
    participatingTeams: '10 City-Based Franchises',
    trophyDescription: 'Prestigious golden trophy engraved with the Sanskrit motto: "Yatra Pratibha Avsara Prapnotihi" (Where talent meets opportunity).',
    overview: 'The most lucrative, watched, and commercially formidable cricket league on earth. Combining top international stars, elite Indian national cricketers, and breakout domestic youth, the IPL defines contemporary sports entertainment.',
    competitionStructure: '14-game league stage followed by the Page playoff system (Qualifier 1, Eliminator, Qualifier 2, and Final).',
    historicalSignificance: 'Revolutionized player compensation, athlete fitness, broadcast rights valuation, analytical data models, and global sports fan culture since its explosive launch in 2008.',
    recentChampions: [
      { year: 2024, winner: 'Kolkata Knight Riders', runnerUp: 'Sunrisers Hyderabad', host: 'India' },
      { year: 2023, winner: 'Chennai Super Kings', runnerUp: 'Gujarat Titans', host: 'India' },
      { year: 2022, winner: 'Gujarat Titans', runnerUp: 'Rajasthan Royals', host: 'India' },
      { year: 2021, winner: 'Chennai Super Kings', runnerUp: 'Kolkata Knight Riders', host: 'India & UAE' },
      { year: 2020, winner: 'Mumbai Indians', runnerUp: 'Delhi Capitals', host: 'UAE' }
    ],
    notableMilestones: [
      'Brendon McCullum blazes 158* on opening night in Bengaluru (2008)',
      'Mumbai Indians and Chennai Super Kings capture 5 titles apiece',
      'Introduction of the Impact Player tactical substitution rule in 2023'
    ],
    relatedBlogSlug: 'ipl-explained'
  },
  {
    id: 'icc-world-test-championship',
    name: 'ICC World Test Championship',
    shortName: 'WTC',
    organizer: 'International Cricket Council (ICC)',
    format: 'Test',
    firstEdition: 2019,
    frequency: '2-Year League Cycle',
    participatingTeams: 'Top 9 Ranked Test Nations',
    trophyDescription: 'Prestigious silver WTC Mace, awarded to the team triumphing in the standalone five-day final at Lord’s or The Oval.',
    overview: 'Inaugurated to give context and consequence to bilateral Test cricket series. Teams contest home and away multi-match series over a two-year cycle, earning points percentages to qualify for a one-off neutral final.',
    competitionStructure: 'Nine teams play six series each (three home, three away). The top two in the Points Table Percentage (PCT) contest the Final.',
    historicalSignificance: 'Restored vital context to red-ball cricket, creating intense drama where every wicket and over rate penalty influences qualifications for the ICC Mace.',
    recentChampions: [
      { year: 2023, winner: 'Australia', runnerUp: 'India', host: 'The Oval, London' },
      { year: 2021, winner: 'New Zealand', runnerUp: 'India', host: 'Southampton' }
    ],
    notableMilestones: [
      'New Zealand wins inaugural 2021 WTC Mace under Kane Williamson in Southampton',
      'Australia completes grand slam of all ICC men’s trophies by winning 2023 WTC Final'
    ],
    relatedBlogSlug: 'test-odi-t20-formats'
  },
  {
    id: 'the-ashes',
    name: 'The Ashes',
    shortName: 'The Ashes',
    organizer: 'Cricket Australia & ECB',
    format: 'Test',
    firstEdition: 1882,
    frequency: 'Every 2 years (alternating England & Australia)',
    participatingTeams: 'England vs Australia',
    trophyDescription: 'Tiny terracotta urn reputed to contain the ashes of a cricket bail, kept permanently at the MCC Museum at Lord’s.',
    overview: 'The oldest and most fiercely celebrated rivalry in international team sports. Contested as a five-match Test series between England and Australia, embodying 140+ years of sporting tradition.',
    competitionStructure: 'Five-Test bilateral series with 5-day matches across premier venues in Australia or England.',
    historicalSignificance: 'Originated from the 1882 mock obituary declaring the death of English cricket. Given rise to Bodyline (1932/33), Botham’s Ashes (1981), and the greatest Test series in history in 2005.',
    recentChampions: [
      { year: 2023, winner: 'Australia (Retained 2–2)', runnerUp: 'England', host: 'England' },
      { year: 2021, winner: 'Australia (Won 4–0)', runnerUp: 'England', host: 'Australia' },
      { year: 2019, winner: 'Australia (Retained 2–2)', runnerUp: 'England', host: 'England' }
    ],
    notableMilestones: [
      'The 1932/33 Bodyline series shakes Anglo-Australian diplomatic ties',
      'The thrilling 2005 Ashes series decided by 2 runs at Edgbaston'
    ],
    relatedBlogSlug: 'history-of-cricket'
  },
  {
    id: 'icc-womens-cricket-world-cup',
    name: 'ICC Women’s Cricket World Cup',
    shortName: 'Women’s World Cup',
    organizer: 'International Cricket Council (ICC)',
    format: 'ODI',
    firstEdition: 1973,
    frequency: 'Every 4 years',
    participatingTeams: '8 to 10 National Teams',
    trophyDescription: 'Silver trophy engraved with the world map and ornate cricket seam detailing.',
    overview: 'Remarkably held two years before the inaugural men’s tournament, the Women’s World Cup represents the apex of women’s international 50-over cricket, driving professionalism and viewership worldwide.',
    competitionStructure: 'Group round-robin followed by semi-finals and final.',
    historicalSignificance: 'Australia has dominated with seven championship titles, alongside triumphs by England and New Zealand, paving the way for modern franchise leagues like the Women’s Premier League (WPL).',
    recentChampions: [
      { year: 2022, winner: 'Australia', runnerUp: 'England', host: 'New Zealand' },
      { year: 2017, winner: 'England', runnerUp: 'India', host: 'England' },
      { year: 2013, winner: 'Australia', runnerUp: 'West Indies', host: 'India' }
    ],
    notableMilestones: [
      'Inaugural 1973 tournament staged before the first men’s World Cup',
      'Sold-out 2017 final at Lord’s sparks massive global surge in women’s cricket'
    ],
    relatedBlogSlug: 'icc-cricket-world-cup'
  }
];
