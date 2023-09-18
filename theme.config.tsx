import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import documentation from 'components/documentation.png'
import agatIcon from './components/agat.png'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <>
    <img src={agatIcon.src} alt="landIcon" height="35px" width="35px"/>
    <span style={{marginRight: '5px', fontSize: '16px'}}>אוגדן תוא"ר ומשאבי כ"א</span>
  </>,
  // chat: {
  //   link: 'https://toarpquiz.web.app',
  //   icon: (
  //     <img src={webIcon.src} alt="landIcon" height="30px" width="30px"/>
  //   )
  // },
  footer: {
    text: (
      <div style={{textAlign: 'center', justifyContent: 'center'}}>
        <span>תקינה ארגון ומשאבי כ"א בצה"ל</span>
        <br />
        <small>פותח ע"י אסף שפר אג"ת/תוRP</small>
      </div>
    ),
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'בהיר',
        dark: 'כהה',
        system: 'מערכת'
      }
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={documentation.src} />
      <link rel="apple-touch-icon" href={documentation.src} />
    </>
    // insert favicon here in the future using <link rel="icon" href="agatIcon.src"> for example
  ),
  toc: {
    title: 'תוכן עניינים',
    float: true
  },
  feedback: { // keep null to hide feedback button
    content: null
  },
  editLink: { // keep null to hide the edit this page button
    text: null
  },
  docsRepositoryBase: 'https://github.com/Jiggle-89/docs/tree/main', // repo URL for the pages directory
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1
  },
  search: {
    placeholder: 'חפש...',
  },
  direction: 'rtl',

  // this SEO is used for the page title
  useNextSeoProps() {
    const {asPath} = useRouter()
    if (asPath != '/')
      return {
        titleTemplate: '%s - אוגדן',
      } 
    else 
      return {
        titleTemplate: '%s'
      }
  },
  gitTimestamp: null // keep null to hide last updated
}

export default config
