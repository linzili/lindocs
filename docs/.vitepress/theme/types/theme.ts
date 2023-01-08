import { DefaultTheme } from 'vitepress/theme';

declare module 'vitepress/theme' {
  namespace DefaultTheme{
    interface Config {
      recommend: {
        mpwx:string
      }
    }
  }
}
