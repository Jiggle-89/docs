// This default export is required in a new `pages/_app.js` file.
import '../components/ckeditor.css' // ckeditor css styles
import { Analytics } from "@vercel/analytics/react"

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}