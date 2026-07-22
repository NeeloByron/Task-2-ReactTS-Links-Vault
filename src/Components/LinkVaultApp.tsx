import { RecordingMethod } from '@/Components/RecordingMethod/RecordingMethod'
import { Table } from '@/Components/Table/Table'
import bookmarkIcon from '@/assets/bookmark.png'
import { useState } from 'react';

export const LinkVaultApp = () => {
    const [items, setItems] = useState ([]);

    const addItem = (item) => {
      setItems([...items, { id: Date.now(), ...item}] );
};

  return (
       <>
         <div className={'main'}>
           <img src={bookmarkIcon} alt='BookMarkicon' style={{ width: '67px', height: '76px' }} />
           <h1> BookMark Link Vault</h1>
         </div>

         <RecordingMethod addItem={addItem} />
         <Table items={items}/>
       </>
  );
};

export default LinkVaultApp;