import InputText  from '@/Components/Inputs/InputText';
import bookMarkImage from '@/assets/bookmark.png'
import type { ChangeEvent, ChangeEventHandler } from 'react';


function App() {
  (e: ChangeEventHandler<HTMLInputElement | HTMLAreaElement>) => {
  console.log('Input changed:', e.target.value);
}
}
  return (
    <>
     <div className='mainContainer'>
          {/*Navigation Bar*/}
         <div className='Nav'>
             <div className='NavCard'>
               <h2 className='Name'>Browser Links Vault</h2>
             </div>

             <div className='NavCard'>
              <img src={bookMarkImage} alt='bookMark' />
             </div>
         </div>

         {/*main body wrapper*/}
         <div className='bodyWrapper'>
           {/*Searrch Bar*/}
           <div className='fromWrapper'>
              <form>
                <InputText type='url' onChange={handleChange} />
                <button type='submit'>Submit</button>

              </form>
           </div>
         </div>

    </div>
    </>
  )
}

export default App
