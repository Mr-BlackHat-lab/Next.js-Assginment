import '@/Styles/globals.css';
import '@/Styles/navbar.css';
import '@/Styles/theme.css';

import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
