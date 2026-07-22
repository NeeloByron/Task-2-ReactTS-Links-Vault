import React from 'react'
import Button from '@/Components/Inputs/Button'

export const RecordingMethod = () => {
  return (
   <>
     <div className='recordOverly'>
        <div className='recordContainer'>
           
           <div className='recordHeader'>
            <h2 className='Model-title'>Add New</h2>
            <Button btnText={'Add'} />
           </div>

      <div className='RecordBody'>
        <div className='formContainer'>
            <label className='formLabel'>Title</label> 
            <input type={'Text'} className={'formInput'} placeholder={'Enter Title'} />

            <label className='formLabel'>Title</label> 
            <input type={'Text'} className={'formInput'} placeholder={'Enter Title'} />

            <label className='formLabel'>Title</label> 
            <input type={'Text'} className={'formInput'} placeholder={'Enter Title'} />

            <label className='formLabel'>Title</label> 
            <input type={'Text'} className={'formInput'} placeholder={'Enter Title'} />
        </div>
      
       </div>
      </div>
     
     </div>
   </>
  )
}
