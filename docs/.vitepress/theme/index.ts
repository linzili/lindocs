import { inBrowser } from 'vitepress'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import { setSymbolStyle, replaceSymbol } from './plugins/symbol'
import { siteIds, registerAnalytics, trackPageview } from './plugins/baidutongji'
import LinLayout from './components/LinLayout.vue'
const theme: Theme = {
  ...DefaultTheme,
  Layout: LinLayout,
  enhanceApp({ router }) {
    if (inBrowser) {
      setSymbolStyle()
      registerAnalytics(siteIds)

      window.addEventListener('hashchange', () => {
        const { href: url } = window.location
        trackPageview(siteIds, url)
      })

      router.onAfterRouteChanged = (to) => {
        replaceSymbol()
        trackPageview(siteIds, to)
      }
    }
  }
}

export default theme
