import Button from '@/Components/Inputs/Button'
import { useEffect, useState } from 'react'

// LinkItem describes what a link should contain
interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

// RecordingMethodProps describes what a Prop should contain 
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
          <div className="cardInner">
            <span className="punchRow"><span></span><span></span><span></span><span></span></span>

            <div className="cardHead">
              <h2>{editingItem ? "Edit link" : "Add link"}</h2>
              {editingItem?.id && <span className="index-no">№ {String(editingItem.id).slice(-3)}</span>}
            </div>

            <div className={'formGroup'}>
               <label htmlFor="Title">Title</label>
               <input id="Title" type='text' placeholder='Provide Title' value={Title} onChange={(e) => setTitle(e.target.value)} />
           </div>

           <div className={'formGroup'}>
             <label htmlFor="URL">URL</label>
             <input id="URL" type='text' placeholder='Provide a Link (URL)' value={URL} onChange={(e) => setUrl(e.target.value)} />
           </div>

           <div className={'formGroup'}>
            <label htmlFor="Description">Description</label>
            <input id="Description" type='text' placeholder='Provide a Description' value={Description} onChange={(e) => setDescription(e.target.value)} />
           </div>

           <div className={'formGroup'}>
            <label htmlFor="OptionalTag">Optional Tag</label>
            <input id="OptionalTag" type='text' placeholder='Optional Tags' value={OptionalTag} onChange={(e) => setOptionaltag(e.target.value)} />
           </div>

            <div className={'btnGroup'}>
              <button type="button" style={{ background: 'none', border: '1.5px solid #CBC2AC', color: '#6C7A89', padding: '9px 16px', borderRadius: '7px', fontWeight: 600, fontSize: '13.5px', cursor: 'pointer' }} onClick={onClose}>Cancel</button>
              <Button type="submit" btnText={editingItem ? "Save changes" : "Save link"} style={{ background: '#34425A', color: '#fff', border: 'none', borderRadius: '7px', padding: '9px 18px', fontWeight: 600, fontSize: '13.5px', cursor: 'pointer' }} />
            </div>
          </div>

      </form>
      </div>
   </>
  )
}

export default RecordingMethod