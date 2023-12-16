import MyComponent from "../public/stay_standalone"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyComponent />
      <Component {...pageProps} />
    </>
  )

}