import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, {useState, useEffect} from 'react'
import { AppContext } from '../utils/context'
import Loading from "../components/loading"
import { lang as langs } from '../lang'

const App = ({ Component, pageProps }: AppProps) => {
  const [lang, setLang] = useState(langs.en);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const code = localStorage.getItem('code')

    if (code) {
      setLang(langs[code])
    }
    setLoading(false)
  }, [])

  const setLanguage = (e) => {
    setLang(langs[e])
    localStorage.setItem('code', e)
  }

  return(
    <AppContext.Provider value={{ lang, setLanguage }}>
      <Head>
        <title>
          NWS - Exemple utilisation Context API | {lang.name || "loading"}{" "}
        </title>
        <meta name='viewport' content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading ? <Loading /> : <Component {...pageProps} />}
    </AppContext.Provider>
  )
}

export default App
