export interface EnvConfig {
  appTitle: string
  appDescription: string
  apiUrl: string
  twitterUrl: string
  linkedinUrl: string
  githubUrl: string
  contactEmail: string
  phoneNumber: string
  nodeEnv: string
}

export interface Statistic {
  value: string
  label: string
}

export interface NavigationItem {
  name: string
  href: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryCTA: string
  secondaryCTA: string
}