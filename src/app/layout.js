'use client'
import { useEffect } from 'react';
import Navbar from '@/components/modules/Navbar/Navbar'
import getTheme from '@/utils/getTheme';
import aos from '../../configs/aos';
import "./globals.css";

export default function RootLayout({ children }) {

  aos()

  useEffect(() => {
    const theme = getTheme()

    const setThemeInDom = () => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    }

    setThemeInDom()

    console.log('Theme => ', theme)
  }, [])

  return (
    <html lang="en">
      <body>
        <div className="dir cnplf" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="0">
          <div className="chip0 cbk2v cuk8q clv5h  cz8nf c9loe cum4w cwh80 transition-all duration-100 bg-slate-50 dark:bg-gray-900">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
