
import Marquee from '../Component/Marquee'
import TopHeader from '../Component/TopHeader'
import Body from '../Component/Body'
import MainHeader from '../Component/MainHeader'
import Footer from '../Component/Footer'
import StikyMenu from '@/Component/StikyMenu'
import MiniCard from '@/Component/MiniCard'
import QuickShop from '@/Component/QuickShop'
import QuickViewModal from '@/Component/QuickViewModal'
import AddToCard from '@/Component/AddToCard'
import PromotionPopup from '@/Component/PromotionPopup'
import NewslatterModel from '@/Component/NewslatterModel'
import ScroolTop from '@/Component/ScroolTop'
import Script from 'next/script'


export default function Home() {

  return (
   <>
     {/* <Script 
        type="text/javascript" 
        id="hs-script-loader" 
        async 
        defer 
        src="../assets/js/plugins.js"
       /> */}
<Marquee/>
<TopHeader/>
<MainHeader/>
<Body/>
<Footer/>
<StikyMenu/>
<ScroolTop/>
<MiniCard/>
<QuickShop/>
<AddToCard/>
<QuickViewModal/>
<PromotionPopup/>
<NewslatterModel/>
</>

  )
}
