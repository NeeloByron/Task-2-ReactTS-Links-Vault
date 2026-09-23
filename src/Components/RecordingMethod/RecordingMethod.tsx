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

// Describe what the parent gives this form. 
interface RecordingMethodProps {
  // function for updating a link
  addItem: (item: LinkItem) => void;
  // updating a link
  editItem: (id: number, updateFields: Partial<LinkItem>) => void;
  open: boolean;
  editingItem: LinkItem | null;
  onClose: () => void;
}
 
// Recieve the props from the parent
function RecordingMethod ({ addItem, editItem, open, editingItem, onClose }: RecordingMethodProps) {
  // remember what the user types into each input
   const [Title, setTitle] = useState("")
   const [URL, setUrl] = useState("")
   const [Description, setDescription] = useState("")
   const [OptionalTag, setOptionaltag] = useState("")
   const [error, setError] = useState("");

   // Prepare the inputs when the form or selected link changes
    useEffect(() => {
      // clear the previous error
      setError("");
      
      if (open && editingItem) {
        // Editing: fill the inputs with the saved details
        setTitle(editingItem.Title);
        setUrl(editingItem.URL);
        setDescription(editingItem.Description);
        setOptionaltag(editingItem.OptionalTag);
      } 
        else {
          // Adding or closing
          setTitle('');
          setUrl('');
          setDescription('');
          setOptionaltag('');
        }
      }, [open, editingItem]);
      
      // Display nothing when the form is closed
    if (!open) return null;

    // run when the user submits the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Collect the details and remove spaces at the ends
    const itemData = {
      Title: Title.trim(),
      URL: URL.trim(),
      Description: Description.trim(),
      OptionalTag: OptionalTag.trim()
    };

    // stop saving if a required field is empty
    if (!itemData.Title || !itemData.URL || !itemData.Description) {
      setError("Please enter Title, URL and description.");
      return;
    }

    // clear the error when the required details are filled in
    setError("");

    if (editingItem) {
      // An existing link needs an ID to be updated
      if (editingItem.id === undefined) return;

      // Update the selected link
      editItem(editingItem.id, itemData);
    } else {
      // Save a new link
      addItem(itemData);
    }
    // Close the form after adding or updating
    onClose();
  };

  return (
   <>
      {/* clicking outside the form closes it */}
      <div className='modalOverlay' onClick={onClose}>
        <form className={'formCard'} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
          <div className="cardInner">
            <span className="punchRow"><span></span><span></span><span></span><span></span></span>

            <div className="cardHead">
              {/* Change the heading to match the action */}
              <h2>{editingItem ? "Edit link" : "Add link"}</h2>
              {/* Show the last three characters of the ID */}
              {editingItem?.id && <span className="index-no">№ {String(editingItem.id).slice(-3)}</span>}
            </div>
             
             {/* Title input */}
            <div className={'formGroup'}>
               <label htmlFor="Title">Title</label>
               <input id="Title" type='text' placeholder='Provide Title' value={Title} onChange={(e) => setTitle(e.target.value)} />
           </div>

             {/* Website address input */}
           <div className={'formGroup'}>
             <label htmlFor="URL">URL</label>
             <input id="URL" type='text' placeholder='Provide a Link (URL)' value={URL} onChange={(e) => setUrl(e.target.value)} />
           </div>
  
           {/* Description input */}
           <div className={'formGroup'}>
            <label htmlFor="Description">Description</label>
            <input id="Description" type='text' placeholder='Provide a Description' value={Description} onChange={(e) => setDescription(e.target.value)} />
           </div>
            
             {/* Optional tags input */}
           <div className={'formGroup'}>
            <label htmlFor="OptionalTag">Optional Tag</label>
            <input id="OptionalTag" type='text' placeholder='Optional Tags' value={OptionalTag} onChange={(e) => setOptionaltag(e.target.value)} />
           </div>
            
            {/* Show the message only when an error exists */}
             {error && ( <p role="alert" style={{ color: "#9b1405" }}> {error} </p> )}

            <div className={'btnGroup'}>
              {/* Close without submitting */}
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