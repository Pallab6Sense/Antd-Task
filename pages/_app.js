import Lay_out from '@/components/Lay_out'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return(
    <Lay_out>
      <Component {...pageProps} />
    </Lay_out>
  ) 
}
