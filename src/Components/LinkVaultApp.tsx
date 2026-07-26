import  RecordingMethod  from '@/Components/RecordingMethod/RecordingMethod'
import { Table } from '@/Components/Table/Table';
import { useEffect, useState } from 'react';
import Button from './Inputs/Button';
import edgeLogo from '@/assets/add-information.svg'
import notFound from '@/assets/not-found.svg'
import bookMark from '@/assets/bookmark.png';

interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

export const LinkVaultApp = () => {
     const [items, setItems] = useState<LinkItem[]>(() => {
      const rawData = localStorage.getItem("items");
      if (rawData) {
        try {
          return JSON.parse(rawData);
        } catch {
          return [];
        }
      }
      return [];
    });
    
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<LinkItem | null>(null);

    {/* saving data*/}
     useEffect(() => {
      localStorage.setItem ("items", JSON.stringify(items))
     }, [items]);

  
     {/*Add the data*/}
    const addItem = (item: LinkItem) => {
      setItems([...items, { id: Date.now(), ...item }]);
    };

    {/* Delete */}
    const deleteItem = (id: number) => {
      const updateItems = items.filter((items)=> items.id !== id);
      setItems(updateItems);
    };

    const editItem = (id: number, updateFields: Partial<LinkItem>) => {
      const updateItems = items.map((item) => item.id === id ? {...item, ...updateFields } : item);
      setItems(updateItems);
    };

    const handleStartEdit = (item: LinkItem) => {
      setEditingItem(item);
      setIsModalOpen(true);
    };

    {/*data sequence*/}
    const filteredItems = items.filter((item) => {
      const search = searchTerm.toLowerCase();
      if (!search) return true;
      return (
        item.Title.toLowerCase().includes(search) ||
        item.URL.toLowerCase().includes(search) ||
        item.Description.toLowerCase().includes(search) ||
        item.OptionalTag.toLowerCase().includes(search) 
      );
    });

    {/*search input*/}
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    {/*clear*/}
    const clearSearch = () => {
      setSearchTerm("");
    };


  return (
         <>
           <div className={'main'}>
            <header className={'header'}>
               <div className={'title'}>
                {/* <img src={bookMark} className={'bookMarkIcon'} 
                    style={{width: '26px', 
                           height: '34px'}} /> */}
                 <h1>URL ARCHIVE</h1>
               </div>
            </header>

            <main className={'bodyContainer'}>

               <search className={'searchContainer'}>
                 <span className={'material-symbols-outlined search-icon'}></span>
                 <input type={'text'} className={'search-input'} 
                        placeholder={''} 
                        value={searchTerm} 
                        onChange={handleSearch} />

                 {searchTerm && (
                   <button onClick={clearSearch} className='clearBtn'>
                     ✕
                   </button>
                   )}
                 </search>

               <div className={'buttonSide'}>
                 <Button type='button' btnText='Add Link' onClick={() => { setEditingItem(null); setIsModalOpen(true);}} />
              </div>
              
            </main>

            <section className={'results'} aria-label='saved-Links'>
                <Table items={filteredItems} deleteItem={deleteItem} onEditClick={handleStartEdit} />
                 {filteredItems.length === 0 && items.length > 0 && (<div className={'icon-notFound'}><img src={notFound} 
                                        alt="Microsoft Edge HTML Document" onClick={clearSearch} /> 
                                        </div>)}
                {items.length === 0 && (<div className={'icon-container'}><img src={edgeLogo} 
                                        alt="Microsoft Edge HTML Document" onClick={() => { setEditingItem(null); setIsModalOpen(true);}} /> 
                                        </div>)}
               </section>  

                <RecordingMethod addItem={addItem} editItem={editItem} open={isModalOpen} editingItem={editingItem} 
                onClose={() => {
                  setIsModalOpen(false);
                  setEditingItem(null);}} /> {/*the recording method to place it*/}
          </div>
       </>
  ); 
};

export default LinkVaultApp;