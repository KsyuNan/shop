// import Layout from '@/components/Layout'
import '../styles/globals.css'
import '../styles/Home.module.sass'

export default function App ({ Component, pageProps }) {
  return (
    // <Layout>
    <Component {...pageProps} />
  // </Layout>
  )
}
