import Button from '@/Components/Inputs/Button'
import { useState } from 'react'

function RecordingMethod ({addItem}) {

   const [Title, setTitle] = useState("")
   const [URL, setUrl] = useState("")
   const [Description, setDescription] = useState("")
   const [OptionalTag, setOptionaltag] = useState("")

   const handleSubmit = (e) => {
    e.preventDefault(); 
   

   if (!Title.trim() || !URL.trim()) {
    alert('Please fill out both the Title and URL fields.');
    return;
   }

   const newRecord = {
    title: Title.trim(),
    url: URL.trim(),
    description: Description.trim(),
    OptionalTag: OptionalTag.trim()
   };

   if (addItem) {
    addItem(newRecord);
   }
   else {
    console.log('Saved data:', newRecord)
   }

   setTitle("");
   setUrl("");
   setDescription("");
   setOptionaltag("");
   };

  return (
   <>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className='mainForm'>
        <input type='text' placeholder='Title' className={'title'} value={Title} onChange={(e) => setTitle(e.target.value)} />
        <input type='url' placeholder= 'Link (URL)' className={'title'} value={URL} onChange={(e) => setUrl(e.target.value)} />
        <input type='text' placeholder='Description' className={'title'} value={Description} onChange={(e) => setDescription(e.target.value)} />
        <input type='text' placeholder='OptionalTag' className={'title'} value={OptionalTag} onChange={(e) => setOptionaltag(e.target.value)} />
         <Button type='submit' btnText='Save link' />
        </div>
      </form>
      
   </>
  )
}

export default RecordingMethod