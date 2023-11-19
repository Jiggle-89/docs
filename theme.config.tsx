import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import documentation from 'components/documentation.png'
import agatIcon from './components/agat.png'
import smartphone from './components/smartphone.png'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <>
    <img src={agatIcon.src} alt="landIcon" height="35px" width="35px"/>
    <span style={{marginRight: '5px', fontSize: '16px'}}>אוגדן תוא"ר ומשאבי כ"א</span>
  </>,
  chat: {
    link: 'https://toarpquiz.web.app',
    icon: (
      <img src={smartphone.src} height="30px" width="30px"/>
    )
  },
  footer: {
    text: (
      <div style={{display: 'flex',textAlign: 'center', justifyContent: 'center', height: '100%', width: '100%'}}>
        <p>פותח ע"י אסף שפר אג"ת/תוRP</p>
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
  ),
  toc: {
    title: 'תוכן עניינים',
    float: true,
  },
  feedback: { // keep null to hide feedback button
    content: null
  },
  editLink: { // making a custom edit link breaking nextra's git management
    // ! change to actual firebase app in the future
    component: () => (
      <a href="/" target="_blank" rel="noreferrer noopener">ערוך דף</a>
    ),
  },
  // docsRepositoryBase: 'https://github.com/Jiggle-89/docs/tree/main', // repo URL for the pages directory
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 2,
    autoCollapse: true
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