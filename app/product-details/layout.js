import Script from "next/script"
import '../../public/assets/css/vendor/photoswipe.min.css'

export const metadata = {
  title: 'Product Details',
  description: 'Next Development Gegency',
  
}
export default function Shop({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}
   
        
      </body>
      
    </>
  )
}
