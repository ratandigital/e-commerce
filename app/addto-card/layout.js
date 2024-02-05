import Script from "next/script"
import '../../public/assets/css/vendor/photoswipe.min.css'

export const metadata = {
  title: 'Add To Card',
  description: 'Next Development Gegency',
  
}
export default function Shop({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}
   
      <Script src="../assets/js/plugins.js" ></Script>
  
            <Script src="../assets/js/main.js"></Script>
      </body>
      
    </>
  )
}
