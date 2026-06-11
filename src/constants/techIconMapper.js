import {
  SiPhp, SiLaravel, SiCodeigniter, SiWordpress, SiElementor,
  SiReact, SiPython, SiDjango, SiJavascript, SiTypescript,
  SiTailwindcss, SiHtml5, SiCss, SiMysql, SiPostgresql,
  SiGithub, SiDocker, SiPostman, SiUbuntu, SiJquery,
  SiNodedotjs, SiBootstrap, SiMui
} from 'react-icons/si'
import { FaCode, FaDatabase, FaServer, FaJava } from 'react-icons/fa6'

const normalize = (tag) => tag.toLowerCase().trim()

export const getTagIcon = (tag) => {
  const t = normalize(tag)

  if (t.includes('php')) return SiPhp
  if (t.includes('laravel')) return SiLaravel
  if (t.includes('codeigniter')) return SiCodeigniter
  if (t.includes('elementor')) return SiElementor
  if (t.includes('wordpress')) return SiWordpress
  if (t.includes('react')) return SiReact
  if (t.includes('python')) return SiPython
  if (t.includes('django')) return SiDjango
  if (t.includes('java') && !t.includes('javascript')) return FaJava
  if (t.includes('javascript') || t.includes('vanilla js') || t.includes('ajax') || t === 'js') return SiJavascript
  if (t.includes('typescript') || t === 'ts') return SiTypescript
  if (t.includes('tailwind')) return SiTailwindcss
  if (t.includes('bootstrap') || t.includes('custom css')) return SiBootstrap
  if (t.includes('css')) return SiCss
  if (t.includes('html')) return SiHtml5
  if (t.includes('mysql')) return SiMysql
  if (t.includes('postgresql') || t.includes('postgres') || (t.includes('sql') && !t.includes('mysql'))) return SiPostgresql
  if (t.includes('linux') || t.includes('ubuntu') || t.includes('server')) return SiUbuntu
  if (t.includes('postman')) return SiPostman
  if (t.includes('apigee')) return FaServer
  if (t.includes('github') || t.includes('git')) return SiGithub
  if (t.includes('docker')) return SiDocker
  if (t.includes('node')) return SiNodedotjs
  if (t.includes('jquery') || t.includes('jquery')) return SiJquery
  if (t.includes('mui') || t.includes('material')) return SiMui

  return FaCode
}
