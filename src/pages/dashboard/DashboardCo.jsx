import React from 'react'

function Dashboard() {
  return (
    <div className='w-full m-4 flex gap-5 flex-col'>
<div className='flex gap-5'>
      <div className='w-80 h-36 bg-white rounded-2xl px-5 flex justify-between items-center'>
        <div>
        <h3 className='text-xl'>سفارشات امروز</h3>
        <span className='text-4xl font-bold'>45</span>
        </div>
        
        <i class='bx bx-cart-download text-[3.5rem] text-purple-800' ></i>
      </div>

      <div className='w-80 h-36 bg-white rounded-2xl px-5 flex justify-between items-center'>
        <div>
        <h3 className='text-xl'>درآمد امروز</h3>
        <span className='text-4xl font-bold'>5,500,000</span>
        </div>
        <i class='bx bxs-dollar-circle text-[4rem] text-purple-800'></i>
      </div>
</div>
<div className='w-80 h-36 bg-white rounded-2xl px-5 flex justify-between items-center'>
        <div className='flex flex-col'>
        <h3 className='text-xl'>درآمد ماهانه</h3>
        <span className='text-4xl font-bold'>15M</span>
        <span className='text-xl text-green-500 font-bold'>12%+ <i class='bx bx-up-arrow-alt' ></i></span>
        
        </div>
        <i class='bx bxs-doughnut-chart text-purple-600 text-7xl'></i>
      </div>
    </div>
  )
}

export default Dashboard;
