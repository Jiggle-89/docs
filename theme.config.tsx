import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>תקינה וארגון</span>,
  project: {
    icon: null
  },
  chat: {
    link: 'https://discord.com',
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
