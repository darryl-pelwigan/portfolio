import apiIcon from '../assets/api.svg'
import githubIcon from '../assets/github.svg'
import ubuntuIcon from '../assets/ubuntu.svg'

export const contactMethods = [
  {
    id: 1,
    icon: apiIcon,
    label: 'Email',
    value: 'hello@portfolio.dev',
    href: 'mailto:hello@portfolio.dev',
    type: 'link'
  },
  {
    id: 2,
    icon: ubuntuIcon,
    label: 'Contact Number',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    type: 'link'
  },
  {
    id: 3,
    icon: githubIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    type: 'external'
  },
  {
    id: 4,
    icon: apiIcon,
    label: 'Viber',
    value: '+1 (555) 123-4567',
    href: 'viber://chat?number=%2B15551234567',
    type: 'link'
  }
]
