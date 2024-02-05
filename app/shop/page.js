import Footer from '@/Component/Footer'
import MainHeader from '@/Component/MainHeader'
import Marquee from '@/Component/Marquee'
import PageTite from '@/Component/PageTite'
import TopHeader from '@/Component/TopHeader'
import Masonry from '@/Component/masonry/Masonry'
import React from 'react'

export default function page() {
  return (
<>
<Marquee/>
<TopHeader/>
<MainHeader/>

<Masonry/>
<Footer/>
</>


  )
}
