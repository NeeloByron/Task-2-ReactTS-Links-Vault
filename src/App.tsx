import InputText  from '@/Components/InputText';
import bookMarkImage from '@/assets/bookmark.png'
import type { ChangeEvent } from 'react';

function App() {
  return (
    <>
        <div className='Nav'>
            <div className='NavCard'>
              <h2 className='Name'>Browser Links Vault</h2>
            </div>

            <div className='NavCard'>
             <img src={bookMarkImage} alt='bookMark' />
            </div>
        </div>


    </>
  )
}

export default App
