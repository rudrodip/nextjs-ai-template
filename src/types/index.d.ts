export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  keywords: string[]
  authors?: {name: string, url: string}[]
  creator?: {name: string, url: string}
  links: {
    twitter: string
    github: string
  }
}