import { Login } from '@/components/login'
import '@/styles/globals.css'
import '@/styles/components.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Login>
        <Component {...pageProps} />
    </Login>
}
