import  RecordingMethod  from '@/Components/RecordingMethod/RecordingMethod'
import { Table } from '@/Components/Table/Table'
import bookmarkIcon from '@/assets/bookmark.png'
import { useEffect, useState } from 'react';

interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

export const LinkVaultApp = () => {
    const [items, setItems] = useState<LinkItem[]>([]);

    {/* saving data*/}
     useEffect(() => {
      localStorage.setItem ("items", JSON.stringify(items))
     }, [items]);

     {/*load data from the local storage*/}
      useEffect(() => {
      const rawData = localStorage.getItem("items");
      if (rawData) {
        const storedItems = JSON.parse(rawData);
        setItems(storedItems);
       }
      }, []);

     {/*Add the data*/}
    const addItem = (item: LinkItem) => {
      setItems([...items, { id: Date.now(), ...item }]);
    };

    {/* Delete */}
    const deleteItem = (id: number) => {
      const updateItems = items.filter((items)=> items.id !== id);
      setItems(updateItems);
    };

  return (
       <>
         <div className={'main'}>
           <img src={bookmarkIcon} alt='BookMarkicon' style={{ width: '67px', height: '76px' }} />
           <h1> Bookmark Link Vault</h1>
         </div>

         <RecordingMethod addItem={addItem} />
         <Table items={items} deleteItem={deleteItem}/>
       </>
  ); 
};

export default LinkVaultApp;