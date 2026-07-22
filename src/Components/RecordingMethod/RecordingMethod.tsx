import Button from '@/Components/Inputs/Button'
import { useState } from 'react'

interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

interface RecordingMethodProps {
  addItem: (item: LinkItem) => void;
  open: boolean;
  onClose: () => void;
}

function RecordingMethod ({ addItem, open, onClose }: RecordingMethodProps) {

   const [Title, setTitle] = useState("")
   const [URL, setUrl] = useState("")
   const [Description, setDescription] = useState("")
   const [OptionalTag, setOptionaltag] = useState("")

    if (!open) return null;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    if (!Title.trim() || !URL.trim()) return;
    addItem({
         id: Date.now(),
         Title: Title.trim(),
         URL: URL.trim(),
         Description: Description.trim(),
         OptionalTag: OptionalTag.trim()
         });

       setTitle('');
       setUrl('');
       setDescription('');
       setOptionaltag('');
       onClose();
   };

  return (
   <>
      <div className='modalOverlay' onClick={onClose}>
        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <input type='text' placeholder='Title' className={'title'} value={Title} onChange={(e) => setTitle(e.target.value)} />
        <input type='text' placeholder= 'Link (URL)' className={'title'} value={URL} onChange={(e) => setUrl(e.target.value)} />
        <input type='text' placeholder='Description' className={'title'} value={Description} onChange={(e) => setDescription(e.target.value)} />
        <input type='text' placeholder='Optional Tags' className={'title'} value={OptionalTag} onChange={(e) => setOptionaltag(e.target.value)} />
         <Button type='submit' btnText='Save link' />
         {/*<button type='button' className='closeBtn' onClick={onClose}>x</button>*/}
      </form>
      </div>
   </>
  )
}

export default RecordingMethod