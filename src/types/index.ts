export type BlogCategory =
  | 'Cricket History'
  | 'Cricket Rules and Basics'
  | 'Cricket Formats'
  | 'Legendary Players'
  | 'International Cricket'
  | 'IPL and T20 Leagues'
  | 'Records and Statistics'
  | 'Cricket Training and Skills'
  | 'Cricket Technology and Analysis';

export interface BlogSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  quote?: { text: string; author?: string };
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  coverImage: string;
  imageAlt: string;
  featured?: boolean;
  sections: BlogSection[];
  keyTakeaways: string[];
  verifiedSources?: string[];
  relatedSlugs: string[];
}

export interface PlayerProfile {
  id: string;
  name: string;
  fullName: string;
  country: string;
  countryFlag: string;
  role: 'Batter' | 'Fast Bowler' | 'Spin Bowler' | 'All-Rounder' | 'Wicketkeeper-Batter';
  battingStyle: string;
  bowlingStyle?: string;
  careerSpan: string;
  bio: string;
  majorAchievements: string[];
  verifiedRecords: string[];
  testMatches?: number;
  testRuns?: number;
  testWickets?: number;
  odiMatches?: number;
  odiRuns?: number;
  odiWickets?: number;
  t20iMatches?: number;
  t20iRuns?: number;
  t20iWickets?: number;
  iplRuns?: number;
  iplWickets?: number;
  internationalCenturies?: number;
  imageFallbackGradient: string;
  relatedBlogSlug?: string;
}

export interface Tournament {
  id: string;
  name: string;
  shortName: string;
  organizer: string;
  format: 'Test' | 'ODI' | 'T20' | 'Multi-format';
  firstEdition: number;
  frequency: string;
  participatingTeams: string;
  trophyDescription: string;
  overview: string;
  competitionStructure: string;
  historicalSignificance: string;
  recentChampions: {
    year: number;
    winner: string;
    runnerUp: string;
    host: string;
  }[];
  notableMilestones: string[];
  relatedBlogSlug?: string;
}

export interface CricketRecord {
  id: string;
  title: string;
  holder: string;
  country: string;
  category: 'Batting' | 'Bowling' | 'Wicketkeeping' | 'Team' | 'Tournament';
  format: 'Test' | 'ODI' | 'T20I' | 'IPL' | 'All Formats';
  figure: string;
  achievement: string;
  dateOrSpan: string;
  verifiedSource: string;
  lastVerifiedDate: string;
}
