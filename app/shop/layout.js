import Script from "next/script"
export const metadata = {
  title: 'Our shop',
  description: 'Next Development Gegency',
  
}
export default function Shop({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}
      <Script src="../assets/js/plugins.js" ></Script>
            <Script src="../assets/js/newsl.js"></Script>
            <Script src="../assets/js/main.js"></Script>
      </body>
      
    </>
  )
}
