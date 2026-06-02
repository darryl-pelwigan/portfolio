import apiIcon from '../assets/api.svg'
import apigeeIcon from '../assets/apigee.svg'
import cssIcon from '../assets/css-3.svg'
import djangoIcon from '../assets/django.svg'
import githubIcon from '../assets/github.svg'
import htmlIcon from '../assets/html-5.svg'
import jsIcon from '../assets/javascript.svg'
import jqueryIcon from '../assets/jquery.svg'
import laravelIcon from '../assets/laravel.svg'
import mysqlIcon from '../assets/mysq.svg'
import phpIcon from '../assets/php.svg'
import postgresqlIcon from '../assets/postgresql.svg'
import postmanIcon from '../assets/postman.svg'
import pythonIcon from '../assets/python.svg'
import reactIcon from '../assets/react.svg'
import tailwindIcon from '../assets/tailwindcss.svg'
import ubuntuIcon from '../assets/ubuntu.svg'
import wordpressIcon from '../assets/wordpress.svg'

const normalizeTag = (tag) => tag.toLowerCase().trim()

export const getTagIcon = (tag) => {
  const norm = normalizeTag(tag)

  if (norm.includes('php')) return phpIcon
  if (norm.includes('laravel')) return laravelIcon
  if (norm.includes('codeigniter')) return phpIcon
  if (norm.includes('wordpress')) return wordpressIcon
  if (norm.includes('elementor')) return wordpressIcon
  if (norm.includes('react')) return reactIcon
  if (norm.includes('python')) return pythonIcon
  if (norm.includes('django')) return djangoIcon
  if (norm.includes('javascript') || norm === 'js') return jsIcon
  if (norm.includes('typescript') || norm === 'ts') return jsIcon
  if (norm.includes('tailwind')) return tailwindIcon
  if (norm.includes('bootstrap')) return htmlIcon
  if (norm.includes('css')) return cssIcon
  if (norm.includes('html')) return htmlIcon
  if (norm.includes('mysql')) return mysqlIcon
  if (norm.includes('postgresql') || norm.includes('sql')) return postgresqlIcon
  if (norm.includes('linux') || norm.includes('ubuntu') || norm.includes('server')) return ubuntuIcon
  if (norm.includes('postman')) return postmanIcon
  if (norm.includes('apigee')) return apigeeIcon
  if (norm.includes('api')) return apiIcon
  if (norm.includes('Github') || norm.includes('github')) return githubIcon

  return apiIcon
}

export const getTechIcon = getTagIcon
