import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'

const theme: Theme = {
  ...DefaultTheme
}

export default theme
