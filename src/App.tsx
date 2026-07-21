import InputText  from '@/Components/Inputs/InputText';
import bookMarkImage from '@/assets/bookmark.png'
import type { ChangeEvent, ChangeEventHandler } from 'react';


function App() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('Input value:', e.target.value);
  };
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
            
             <form className='formWrap'>
               <InputText type='Title' placeholder='Enter Title...' label='Title:' onChange={handleChange} />
               <InputText type="URL" placeholder='Enter URL link...'label="Link URL:" onChange={handleChange} />
               <InputText type="Description" placeholder='Enter Description'label="Description:" onChange={handleChange} />
               <InputText type="Tags" placeholder='Enter Optional tags...'label="Optional tags:" onChange={handleChange} />
               <button type='submit'>Submit</button>
               <btnText type='submit' />
              </form>

           </div>
         </div>

    </div>
    </>
  )
}

export default App
