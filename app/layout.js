
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '../public/assets/css/plugins.css'
import '../public/assets/css/style-min.css'
import '../public/assets/css/responsive.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Shop',
  description: 'Biggest online trusted shop',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
                 
            
            
      <body className={inter.className}  >{children}
      {/* <Script 
        type="text/javascript" 
        id="hs-script-loader" 
        async 
        defer 
        src="../assets/js/main.js"
       />
        <Script 
        type="text/javascript" 
        id="hs-script-loader" 
        async 
        defer 
        src="../assets/js/newsl.js"
       />
        <Script 
        type="text/javascript" 
        id="hs-script-loader" 
        async 
        defer 
        src="../assets/js/plugins.js"
       /> */}
      <Script src="../assets/js/plugins.js" ></Script>
            <Script src="../assets/js/newsl.js" ></Script>
            <Script src="../assets/js/main.js" ></Script>
      
      </body>
    </html>
  )
}
