import type { EnvConfig } from '@/types'

export const env: EnvConfig = {
  appTitle: import.meta.env.VITE_APP_TITLE || 'Privasii Landing Page',
  appDescription: import.meta.env.VITE_APP_DESCRIPTION || 'Your remote career starts here',
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.privasii.com',
  twitterUrl: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/privasii',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/privasii',
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/privasii',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contact@privasii.com',
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || '+1-555-0123',
  nodeEnv: import.meta.env.VITE_NODE_ENV || 'development',
}

export const isDevelopment = env.nodeEnv === 'development'
export const isProduction = env.nodeEnv === 'production'