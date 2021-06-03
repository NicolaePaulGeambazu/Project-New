import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
