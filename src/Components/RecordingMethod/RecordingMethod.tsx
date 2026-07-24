import Button from '@/Components/Inputs/Button'
import { useEffect, useState } from 'react'


interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

interface RecordingMethodProps {
  addItem: (item: LinkItem) => void;
  editItem: (id: number, updateFields: Partial<LinkItem>) => void;
  open: boolean;
  editingItem: LinkItem | null;
  onClose: () => void;
}

function RecordingMethod ({ addItem, editItem, open, editingItem, onClose }: RecordingMethodProps) {

   const [Title, setTitle] = useState("")
   const [URL, setUrl] = useState("")
   const [Description, setDescription] = useState("")
   const [OptionalTag, setOptionaltag] = useState("")
     
    useEffect(() => {
      if (open && editingItem) {
        setTitle(editingItem.Title);
        setUrl(editingItem.URL);
        setDescription(editingItem.Description);
        setOptionaltag(editingItem.OptionalTag);
      } 
        else {
          setTitle('');
          setUrl('');
          setDescription('');
          setOptionaltag('');
        }
      }, [open, editingItem]);
      
    if (!open) return null;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    const itemData = {
      Title: Title.trim(),
      URL: URL.trim(),
      Description: Description.trim(),
      OptionalTag: OptionalTag.trim()
    };

    if (editingItem && editingItem.id) {
      editItem(editingItem.id, itemData);
    }
    else {
      addItem(itemData);
    }
      onClose();
   };

  return (
   <>
      <div className='modalOverlay' onClick={onClose}>
        <form className={'formCard'} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <div className={'formGroup'}>
             <label htmlFor="Title : ">Title</label>
             <input type='text' placeholder='Provide Title' className={'title'} value={Title} onChange={(e) => setTitle(e.target.value)} />
         </div>

         <div className={'formGroup'}>
           <label htmlFor="URL : ">URL</label>
           <input type='text' placeholder= 'Provide a Link (URL)' className={'title'} value={URL} onChange={(e) => setUrl(e.target.value)} />
         </div>

         <div className={'formGroup'}>
          <label htmlFor="Description : ">Description</label>
          <input type='text' placeholder='Provide a Description' className={'title'} value={Description} onChange={(e) => setDescription(e.target.value)} />
         </div>

         <div className={'formGroup'}>
          <label htmlFor="OptionalTag : ">Optional Tag</label>
          <input type='text' placeholder='Optional Tags' className={'title'} value={OptionalTag} onChange={(e) => setOptionaltag(e.target.value)} />
         </div> 
     
          <div className={'btnGroup'}>
            <Button type="submit" btnText={editingItem ? "Save changes" : "Save"} style={{ backgroundColor: '#2563eb', color: '#fff', border:'none', borderRadius:'8px', cursor: 'pointer' }} />
            <button type="button" style={{ backgroundColor: '#e5e7eb', color: '#111827', border:'none', borderRadius:'8px', cursor: 'pointer' }} onClick={onClose}>Close</button>
          </div>
      </form>
      </div>
   </>
  )
}

export default RecordingMethod