import Footer from '@/Component/Footer'
import MainHeader from '@/Component/MainHeader'
import Marquee from '@/Component/Marquee'
import PageTite from '@/Component/PageTite'
import TopHeader from '@/Component/TopHeader'
import Masonry from '@/Component/masonry/Masonry'
import MainContant from '@/Component/product-details/MainContant'
import React from 'react'
import PageHeader from './PageHeader'
import ProDetailsPage from '../product-details copy/ProDetailsPage'
import ScroolTop from '@/Component/ScroolTop'
import MiniCard from '@/Component/MiniCard'
import QuickShop from '@/Component/QuickShop'
import AddToCard from '@/Component/AddToCard'
import QuickViewModal from '@/Component/QuickViewModal'
import SizeChart from '@/Component/SizeChart'
import ShippingModal from '@/Component/ShippingModal'
import ProductEnqury from '@/Component/ProductEnqury'
import VideoModel from '@/Component/VideoModel'
import StikyCard from '@/Component/StikyCard'
import Extra from '@/Component/Extra'
import RelatedProduct from '@/Component/RelatedProduct'
import ZoomProductModel from '@/Component/ZoomProductModel'
import Practice from '@/Component/Practice'
import RecentView from '@/Component/RecentView'

export default function page() {
  
  return (
<>
<Marquee/>
<TopHeader/>
<MainHeader/>
<ProDetailsPage/>
<RelatedProduct/>
<RecentView/>
<Footer/>
<ScroolTop/>
<MiniCard/>
<QuickShop/>
<AddToCard/>
<QuickViewModal/>

<SizeChart/>
<ShippingModal/>
<ProductEnqury/>
<VideoModel/>
<ZoomProductModel/>
<StikyCard/>
<Extra/>
<Practice/>
</>


  )
}
