import React from 'react'

function Columns({children , header}) {
  return (
    <div className=' flex  w-[250px] flex-col gap-6'>
      <h1 className='text-xl'>{header}</h1>
      <div className='bg-white flex flex-col gap-2 '>
      {children}
      </div>
      
    </div>
  )
}

export default Columns