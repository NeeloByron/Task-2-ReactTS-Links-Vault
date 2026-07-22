import Button from '@/Components/Inputs/Button'




export const RecordingMethod = () => {
  return (
   <>
    
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mainForm'>
        <input type='text' placeholder='Title' className={'title'} />
        <input type='url' placeholder= 'Link (URL)' className={'title'} />
        <input type='text' placeholder='Description' className={'title'} />
        <input type='text' placeholder='Title' className={'title'} />
        <Button btnText='Save link' onClick={() => {console.log('Saved!')}} />
        </div>
      </form>
      
   </>
  )
}

export default RecordingMethod