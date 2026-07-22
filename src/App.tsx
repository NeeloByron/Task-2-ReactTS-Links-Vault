import bookMarkImage from '@/assets/bookmark.png'



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
    
    </>
  )
}

export default App
