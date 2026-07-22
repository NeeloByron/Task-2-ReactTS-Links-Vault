import bookMarkImage from '@/assets/bookmark.png'
import { RecordingMethod } from '@/Components/RecordingMethod'



function App() {
  
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
         
         
      </div>
    <RecordingMethod />
    </>
  )
}

export default App
