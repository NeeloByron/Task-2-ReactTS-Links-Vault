

export const RecordingMethod = () => {
  return (
   <>
     <div className='recordOverly'>
        <div className='recordContainer'>
           
           <div className='recordHeader'>
            <h2 className='Model-title'>Add New</h2>
            
           </div>

      <div className='RecordBody'>
        <div className='formContainer'>
            <label className='formLabel'>Title</label> 
            <input type={'text'} className={'formInput'} placeholder={'Enter Title'} />

            <label className='formLabel'>Link (URL)</label> 
            <input type={'text'} className={'formInput'} placeholder={'Enter or paste your URL'} />

            <label className='formLabel'>Description</label> 
            <input type={'text'} className={'formInput'} placeholder={'Enter your description'} />

            <label className='formLabel'>Optional Tags</label> 
            <input type={'text'} className={'formInput'} placeholder={'Enter tags'} />
        </div>
      
       </div>
      </div>
     
     </div>
   </>
  )
}

export default RecordingMethod