
import AddCard from '@/Component/AddCard'
import Footer from '@/Component/Footer'
import MainHeader from '@/Component/MainHeader'
import Marquee from '@/Component/Marquee'
import PageTite from '@/Component/PageTite'
import RelatedProduct from '@/Component/RelatedProduct'
import ScroolTop from '@/Component/ScroolTop'
import TopHeader from '@/Component/TopHeader'
import React from 'react'

export default function page() {
  return (
    <>
  <Marquee/>
  <TopHeader/>
  <MainHeader/>
  <PageTite/>
<AddCard/>
<RelatedProduct/>
<Footer/>
<ScroolTop/>

    </>
  )
}
