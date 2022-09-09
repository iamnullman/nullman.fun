import React from 'react'
import Navbar from '../components/Global/Navbar'
import '../styles/globals.css'
import Aos from 'aos';
import Footer from '../components/Global/Footer';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme_] = React.useState('dark');
  const setTheme = (theme) => {
    setTheme_(theme);
    localStorage.setItem('theme', theme);
  }
  React.useEffect(() => {
    Aos.init();
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme_(theme);
    }
  }, []);
  return <>
  <div data-theme={theme} className="min-h-screen">
    <main className="overflow-y-hidden md:overflow-y-visible min-h-[calc(100vh-14px)] max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-1 lg:w-[800px] mx-auto transition-all duration-300">
    <Navbar setTheme={setTheme} theme={theme}/>
   <Component {...pageProps} theme={theme}/>
   <Footer/>
  </main>
  </div>

  </>
}

export default MyApp
