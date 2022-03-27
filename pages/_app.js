import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </>
    )
}

export default MyApp
