import {
  SiPhp, SiLaravel, SiCodeigniter, SiWordpress, SiElementor,
  SiReact, SiPython, SiDjango, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss, SiMysql, SiPostgresql,
  SiGithub, SiDocker, SiPostman, SiUbuntu, SiJquery,
  SiNodedotjs, SiBootstrap, SiMui
} from 'react-icons/si'
import { FaCode, FaServer, FaJava } from 'react-icons/fa6'

const normalize = (tag) => tag.toLowerCase().trim()

const TAG_MAP = [
  {
    match: t => t.includes('php'),
    icon: SiPhp,
    colorClass: 'text-violet-500 dark:text-violet-400'
  },
  {
    match: t => t.includes('laravel'),
    icon: SiLaravel,
    colorClass: 'text-red-500 dark:text-red-400'
  },
  {
    match: t => t.includes('codeigniter'),
    icon: SiCodeigniter,
    colorClass: 'text-orange-500 dark:text-orange-400'
  },
  {
    match: t => t.includes('elementor'),
    icon: SiElementor,
    colorClass: 'text-pink-600 dark:text-pink-400'
  },
  {
    match: t => t.includes('wordpress'),
    icon: SiWordpress,
    colorClass: 'text-sky-600 dark:text-sky-400'
  },
  {
    match: t => t.includes('react'),
    icon: SiReact,
    colorClass: 'text-cyan-500 dark:text-cyan-400'
  },
  {
    match: t => t.includes('python'),
    icon: SiPython,
    colorClass: 'text-yellow-500 dark:text-yellow-400'
  },
  {
    match: t => t.includes('django'),
    icon: SiDjango,
    colorClass: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    match: t => t.includes('java') && !t.includes('javascript'),
    icon: FaJava,
    colorClass: 'text-amber-600 dark:text-amber-500'
  },
  {
    match: t => t.includes('javascript') || t.includes('vanilla js') || t.includes('ajax') || t === 'js',
    icon: SiJavascript,
    colorClass: 'text-yellow-400 dark:text-yellow-300'
  },
  {
    match: t => t.includes('typescript') || t === 'ts',
    icon: SiTypescript,
    colorClass: 'text-blue-500 dark:text-blue-400'
  },
  {
    match: t => t.includes('tailwind'),
    icon: SiTailwindcss,
    colorClass: 'text-cyan-500 dark:text-cyan-400'
  },
  {
    match: t => t.includes('bootstrap') || t.includes('custom css'),
    icon: SiBootstrap,
    colorClass: 'text-purple-500 dark:text-purple-400'
  },
  {
    match: t => t.includes('css'),
    icon: SiCss,
    colorClass: 'text-blue-500 dark:text-blue-400'
  },
  {
    match: t => t.includes('html'),
    icon: SiHtml5,
    colorClass: 'text-orange-500 dark:text-orange-400'
  },
  {
    match: t => t.includes('mysql'),
    icon: SiMysql,
    colorClass: 'text-sky-600 dark:text-sky-500'
  },
  {
    match: t => t.includes('postgresql') || t.includes('postgres') || (t.includes('sql') && !t.includes('mysql')),
    icon: SiPostgresql,
    colorClass: 'text-indigo-500 dark:text-indigo-400'
  },
  {
    match: t => t.includes('linux') || t.includes('ubuntu') || t.includes('server'),
    icon: SiUbuntu,
    colorClass: 'text-orange-500 dark:text-orange-400'
  },
  {
    match: t => t.includes('postman'),
    icon: SiPostman,
    colorClass: 'text-orange-500 dark:text-orange-400'
  },
  {
    match: t => t.includes('apigee'),
    icon: FaServer,
    colorClass: 'text-zinc-500 dark:text-zinc-400'
  },
  {
    match: t => t.includes('github') || t.includes('git'),
    icon: SiGithub,
    colorClass: 'text-zinc-600 dark:text-zinc-300'
  },
  {
    match: t => t.includes('docker'),
    icon: SiDocker,
    colorClass: 'text-sky-500 dark:text-sky-400'
  },
  {
    match: t => t.includes('node'),
    icon: SiNodedotjs,
    colorClass: 'text-green-600 dark:text-green-400'
  },
  {
    match: t => t.includes('jquery'),
    icon: SiJquery,
    colorClass: 'text-sky-600 dark:text-sky-400'
  },
  {
    match: t => t.includes('mui') || t.includes('material'),
    icon: SiMui,
    colorClass: 'text-blue-500 dark:text-blue-400'
  },
]

const FALLBACK = { icon: FaCode, colorClass: 'text-zinc-500 dark:text-zinc-400' }

const resolve = (tag) => {
  const t = normalize(tag)
  return TAG_MAP.find(entry => entry.match(t)) ?? FALLBACK
}

export const getTagIcon = (tag) => resolve(tag).icon
export const getTagColorClass = (tag) => resolve(tag).colorClass
export const getTagMeta = (tag) => {
  const { icon, colorClass } = resolve(tag)
  return { icon, colorClass }
}
