import React from 'react'
import Itemsidebar from './Itemsidebar';

const Sidebar=()=> {
  return (
    <div className='sidebox w-[100px] h-[100vh] bg-slate-800 flex flex-col justify-start items-center '>

      <img src="/images/logo-light.png" alt="" className='logoImg w-20 px-3 mt-5'/>
      <div className='w-52 h-[1px] bg-slate-600 my-3'></div>
      <div className='imgAvatar w-12 h-12 bg-slate-300 rounded-full overflow-hidden'>
        <img src="/images/profileavatar.png" alt="" />
      </div>
        {/* menu */}
        <div className='w-full'>
            <ul className='font-bold px-6 [&>*]:py-2 my-6 [&>*]:flex [&>*]:gap-3 [&>*]:items-center text-slate-400'>

               <Itemsidebar title='داشبورد' icon='fa fa-dashboard' routOf='/'/>
               <Itemsidebar title='مدیریت محصول' icon='bx bxs-package' routOf='/products'/>  
               <Itemsidebar title='مدیریت برندها' icon='bx bxs-donate-heart' routOf='/brands'/>    
               <Itemsidebar title='مدیریت رنگ ها' icon='bx bx-palette' routOf='/colors'/>
               <Itemsidebar title='مدیریت تخفیف ها' icon='bx bxs-bong' routOf='/takhfifha'/>
               <Itemsidebar title='مدیریت سبدها' icon='bx bx-basket' routOf='/baskets'/>
               <Itemsidebar title='مشاهده کاربران ' icon='bx bxs-user-account' routOf='/users'/>
               <Itemsidebar title='نقش ها ' icon='bx bxs-face-mask' routOf='/roles'/>
               <Itemsidebar title='مجوزها' icon='bx bx-credit-card-front' routOf='/permisions'/>


            </ul>
        </div>
    </div>
  )
}

export default Sidebar;
