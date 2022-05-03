import { AppProps } from 'next/app'
import '../styles/index.scss';
import Nav from '../components/nav';
import {navLinks} from '../lib/constants';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Nav navItems={navLinks} />
        <Component {...pageProps} />
    </>
  )
        
}
