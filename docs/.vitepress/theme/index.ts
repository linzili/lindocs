import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import LinLayout from './components/LinLayout.vue'
const theme: Theme = {
  ...DefaultTheme,
  Layout: LinLayout
}

export default theme
