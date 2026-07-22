import styles from '@/Components/RecordingMethod/Recording.Module.css'


export const RecordingMethod = () => {
  return (
   <>
    
      <form>
        <div className={styles.mainForm}>
        <input type='text' placeholder='Title' className={'title'} />
        <input type='url' placeholder= 'Link (URL)' className={'title'} />
        <input type='text' placeholder='Description' className={'title'} />
        <input type='text' placeholder='Title' className={'title'} />
        
        </div>
      </form>
      
   </>
  )
}

export default RecordingMethod