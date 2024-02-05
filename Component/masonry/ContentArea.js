import React from 'react'
import ToolBar from './ToolBar'
import ProductList from './ProductList'
import SideBar from './SideBar'

export default function ContentArea() {
  return (
    <>
    {/*Main Content*/}
    <div className="container">
      <div className="row">
        {/*Products*/}
        <div className="col-12 col-sm-12 col-md-12 col-lg-9 main-col">
       <ToolBar/>
     
     <ProductList/>
        </div>
        {/*End Products*/}
       <SideBar/>
      </div>
    </div>
    {/*End Main Content*/}
  </>
  
  )
}
