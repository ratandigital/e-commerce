import React from 'react'
import Slider from './Slider'
import Service from './Service'
import CollectionBanner from './CollectionBanner'
import PopularCategory from './PopularCategory'
import ProductTab from './ProductTab'
import ParallaxBanner from './ParallaxBanner'
import Testtimonial from './Testtimonial'
import Blog from './Blog'

export default function Body() {
  return (
    <>
           <div id="page-content" className="mb-0">
<Slider></Slider>
<Service/>
<CollectionBanner/>
<PopularCategory/>
<ProductTab/>
<ParallaxBanner/>
<Testtimonial/>
<Blog/>

           </div>
    </>
  )
}
