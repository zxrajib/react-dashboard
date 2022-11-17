import "../styles/globals.css"
import type { AppProps } from "next/app"
import { CacheProvider } from "@emotion/react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import createCache from "@emotion/cache"
import { blueGrey, pink, purple } from "@mui/material/colors"
import withAuth from "../components/layouts/withAuth"
import { SnackbarProvider } from "notistack"
import { CssBaseline } from "@mui/material"

const emotionCache = createCache({ key: "css", prepend: true })

type ComponentWithLayoutProps = AppProps & {
  Component: AppProps["Component"] & {
    PageLayouts?: React.ComponentType
  }
}
function MyApp({ Component, pageProps }: ComponentWithLayoutProps) {
  const Layout = Component.PageLayouts || withAuth

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[900],
      },
      secondary: {
        main: blueGrey["A200"],
      },
      warning: {
        main: pink[900],
      },
    },
  })

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
