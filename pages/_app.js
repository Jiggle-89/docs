// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export function EditPage() {
  return (
    <a style={{'position': 'absolute','left': '23.5%' ,'marginTop': '30px'}} href="/" target="_blank" rel="noreferrer noopener">ערוך דף</a>
  )
}