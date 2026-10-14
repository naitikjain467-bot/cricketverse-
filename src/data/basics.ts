export interface BasicsTopic {
  id: string;
  title: string;
  summary: string;
  details: string[];
  visualHint?: string;
  keyRule?: string;
}

export interface CricketTerm {
  term: string;
  definition: string;
  category: 'Bowling' | 'Batting' | 'Fielding' | 'General';
}

export const CRICKET_BASICS_TOPICS: BasicsTopic[] = [
  {
    id: 'objective',
    title: 'The Objective of Cricket',
    summary: 'Two teams of eleven players contest a match. One team bats to score as many runs as possible; the other team bowls and fields to dismiss batters and restrict the scoring.',
    details: [
      'Each match is divided into turns called "innings".',
      'The team that scores more runs at the conclusion of all innings wins the match.',
      'In limited-overs games (ODIs and T20s), each side bats for a single innings with a set number of overs.',
      'In traditional Test matches, each side has two innings over five days.'
    ],
    keyRule: 'The team with the higher aggregate run total wins the contest.'
  },
  {
    id: 'pitch-and-wickets',
    title: 'The Pitch, Creases, and Wickets',
    summary: 'The battle takes place on a central 22-yard strip called the pitch, flanked by wooden wickets.',
    details: [
      'The pitch measures exactly 22 yards (20.12 meters) from stump to stump.',
      'At each end stand three wooden stumps topped by two loose horizontal bails, forming the wicket.',
      'White chalk lines mark the creases: the Bowling Crease (in line with stumps) and the Popping Crease (4 feet in front of the stumps).',
      'A batter is safe from being stumped or run out whenever their bat or foot is grounded behind the popping crease.'
    ],
    visualHint: '22 Yards (66 Feet) · 3 Stumps · 2 Bails · 4 Feet Popping Crease Safe Zone'
  },
  {
    id: 'team-roles',
    title: 'Team Composition and Player Roles',
    summary: 'A standard eleven-player lineup consists of specialized roles working in unison.',
    details: [
      'Top-Order Batters (No. 1–3): Face the newest, fastest ball and aim to build the innings foundation.',
      'Middle-Order Batters (No. 4–7): Consolidate the score against spin and accelerate scoring.',
      'Wicketkeeper: The only fielder permitted to wear gloves and external pads, positioned directly behind the stumps.',
      'Fast Bowlers: Deliver balls up to 145–150 km/h using swing, seam, and bounce.',
      'Spin Bowlers: Impart rapid revolutions to turn the ball unpredictably off the pitch.',
      'All-Rounders: Skilled in both batting and bowling, providing vital team balance.'
    ]
  },
  {
    id: 'scoring-runs',
    title: 'How Runs Are Scored',
    summary: 'Batters accumulate runs by sprinting between the creases or hitting the ball across the boundary perimeter.',
    details: [
      'Running between the wickets: When the ball is in play, both batters sprint between popping creases (1, 2, or 3 runs).',
      'Four Runs: The ball reaches or bounces over the boundary rope after touching the turf.',
      'Six Runs: The ball flies cleanly over the boundary perimeter rope on the full without touching the ground.',
      'Extras: Penalty runs conceded by the bowling side, including Wides, No-Balls, Byes, and Leg-Byes.'
    ],
    keyRule: 'Four on the bounce, Six on the full!'
  },
  {
    id: 'overs-and-bowling',
    title: 'Overs and Legal Deliveries',
    summary: 'A bowler delivers six consecutive legal balls from one end of the pitch to complete an over.',
    details: [
      'After six legal deliveries, the over ends, fielders rotate ends, and a different bowler takes over from the other wicket.',
      'No bowler may bowl two consecutive overs from the same or alternating ends.',
      'Wide Ball: Delivered outside the batter’s normal reach; awards 1 penalty run and the delivery must be bowled again.',
      'No-Ball: Bowler oversteps the popping crease or bowls an illegal high full-toss; awards 1 run and gives the batter a Free Hit in white-ball cricket.'
    ]
  },
  {
    id: 'dismissals',
    title: 'The Ways of Getting Out (Dismissals)',
    summary: 'When a batter is dismissed, they leave the field and cannot bat again in that innings.',
    details: [
      'Bowled: The ball hits the stumps directly and dislodges the bails.',
      'Caught: A fielder catches the ball after it strikes the bat before touching the grass.',
      'Leg Before Wicket (LBW): The ball strikes the batter’s pad in line with the stumps when it would have hit the wicket.',
      'Run Out: A fielder breaks the stumps with the ball while the batters are running and outside their crease.',
      'Stumped: The wicketkeeper puts down the wicket while the striker is out of their ground having missed the delivery.'
    ]
  }
];

export const CRICKET_GLOSSARY: CricketTerm[] = [
  { term: 'Yorker', definition: 'A delivery pitched right at the batter’s toes or the base of the stumps, extremely difficult to score from.', category: 'Bowling' },
  { term: 'Googly', definition: 'A deceptive delivery by a leg-spinner that appears to spin away from a right-handed batter but actually turns inward.', category: 'Bowling' },
  { term: 'Doosra', definition: 'A delivery by an off-spin bowler that spins away from a right-handed batter rather than turning into them.', category: 'Bowling' },
  { term: 'Bouncer', definition: 'A short-pitched fast delivery that rears up aggressively toward the batter’s chest or helmet.', category: 'Bowling' },
  { term: 'Cover Drive', definition: 'An elegant front-foot batting stroke punched with an angled bat through the cover region on the off side.', category: 'Batting' },
  { term: 'Pull Shot', definition: 'A forceful cross-batted shot played off the back foot to a short delivery, hitting the ball to mid-wicket or square leg.', category: 'Batting' },
  { term: 'Reverse Sweep', definition: 'An innovative stroke where a batter switches their bat grip/stance to sweep the ball toward the third-man area.', category: 'Batting' },
  { term: 'Duck', definition: 'When a batter is dismissed without scoring a single run (a Golden Duck is out on the very first ball faced).', category: 'Batting' },
  { term: 'Maiden Over', definition: 'An over in which no runs (off the bat or as wides/no-balls) are conceded by the bowler.', category: 'Bowling' },
  { term: 'Silly Point / Short Leg', definition: 'Extremely close, dangerous fielding positions placed within meters of the batter to catch bat-pad deflections.', category: 'Fielding' },
  { term: 'Slip Cordon', definition: 'Fielders standing diagonally behind the wicketkeeper on the off side to catch outside edges off the bat.', category: 'Fielding' },
  { term: 'Powerplay', definition: 'Mandatory fielding restriction periods in limited-overs cricket where only 2 fielders may patrol the outfield.', category: 'General' },
  { term: 'Decision Review System (DRS)', definition: 'A technology-assisted officiating protocol where teams challenge on-field umpiring decisions using Hawkeye and UltraEdge.', category: 'General' },
  { term: 'Super Over', definition: 'A one-over eliminator played to resolve tied scores in limited-overs matches, with each side having 6 balls and 2 wickets.', category: 'General' },
  { term: 'Follow-On', definition: 'In Test cricket, when the side batting second trails by 200 or more runs, the opposing captain can order them to bat again immediately.', category: 'General' }
];
