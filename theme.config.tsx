import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import webIcon from './components/smartphone.png'

const config: DocsThemeConfig = {
  logo: <span>תקינה וארגון</span>,
  chat: {
    link: 'https://toarpquiz.web.app',
    icon: (
      <img src={webIcon.src} alt="landIcon" height="30px" width="30px"/>
    )
  },
  footer: {
    text: (
      <span>תקינה וארגון</span>
    ),
  },
  toc: {
    title: 'תוכן עניינים'
  },
  feedback: { // keep null to hide feedback button
    content: null
  },
  editLink: { // keep null to hide the edit this page button
    text: null
  },
  //! deprecated for now
  //! i18n: [
  //!   { locale: 'he', text: 'עברית'},
  //! ],
  search: {
    placeholder: 'חפש...',
  },
  direction: 'rtl',
  gitTimestamp: null // keep null to hide last updated
}

export default config
