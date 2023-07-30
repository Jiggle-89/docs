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
  feedback: { // keep null to hide feedback button
    content: null
  },
  editLink: { // keep null to hide the edit this page button
    text: null
  },
  i18n: [
    { locale: 'he', text: 'עברית', direction: 'rtl' },
  ],
  search: {
    placeholder: 'חפש...',
  },
  gitTimestamp: null //keep null to hide last updated
}

export default config
