import React from 'react'
import ProductManage from './productmanage'
import BrandsM from './brandsM'
import CcolorsM from './ColorsM'
import Takhfifha from './Takhfifha'
import RolesM from './RolesM'
import Baskets from './Baskets'
import Users from '../Users'
import {Routes,Route} from 'react-router-dom'
import Permission from './Permission'


function MainContents() {
  return (
    <>
 <Routes>
    <Route path='/products' element={<ProductManage/>}></Route>
    <Route path='/brands' element={<BrandsM/>}></Route>
    <Route path='/colors' element={<CcolorsM/>}></Route>
    <Route path='/takhfifha' element={<Takhfifha/>}></Route>
    <Route path='/roles' element={<RolesM/>}></Route>
    <Route path='/baskets' element={<Baskets/>}></Route>
    <Route path='/users' element={<Users/>}></Route>
    <Route path='/permisions' element={<Permission/>}></Route>

     
 </Routes>

    </>
  )
}

export default MainContents;
