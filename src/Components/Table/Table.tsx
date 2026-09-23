import React from 'react'
import styles from '@/Components/Table/Table.module.css'
import Button from '../Inputs/Button'

// Link - Describe the information
interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

// Describe what the parent must give this table
type TableProps = {
  items: LinkItem[];
  deleteItem: (id: number) => void;
  onEditClick: (item: LinkItem) => void;
};

// Receive the links and functions from the parent 
export const Table: React.FC<TableProps> = ({ items, deleteItem, onEditClick }) => {
  return (
    <>
      <table className={styles.mainTable}>
        <thead className={'tableHeader'}>
         <tr>
           <th className={styles.row}>Title</th>
           <th className={styles.row}>Link (URL)</th>
           <th className={styles.row}>Description</th>
           <th className={styles.row}>Optional Tags</th>
           <th className={styles.row}>Delete/Edit</th>
         </tr>
         </thead>
           {/* the saved links */}
            <tbody className={'tableBody'}>
          {/* Create one row for each link */}
          {items.map((item) => (
            <tr key={item.id}>
              {/* shows clickable website address/URL */}
              <td className={styles.customtd}>{item.Title}</td>
              <td className={styles.customtd}>
                <a href={item.URL} >
                  {item.URL}
                </a>
              </td>
              {/* Shows the description */}
              <td className={styles.customtd}>{item.Description}</td>
              {/* Shows the tags */}
              <td className={styles.customtd}>{item.OptionalTag}</td>
              {/* Shows the actuib button */}
              <td className={styles.customtd}>

              {/* Show the action buttons */}
              <div className={'editAndDelete'}>

                {/* Sends link to the edit function */}
                <Button btnText="Edit" style={{ background: 'rgba(255, 255, 255, 0.1)', 
                                                 color: '#0b2136', 
                                                 width: '30px', 
                                                 height: '30px',
                                                 border: '1px solid #E1DACB',
                                                 borderRadius: '6px',
                                                 cursor: 'pointer', 
                                                 fontSize: '14px'}}
                                                 onClick={() => onEditClick(item)} />    
                 {/* Ask before deleting this link */}
                <Button btnText='Delete' style={{ backgroundColor: '#FFFFFF', 
                                                   color: '#9b1405',
                                                   width: '50px',
                                                   height: '30px',
                                                   border: '1px solid #E1DACB',
                                                   cursor: 'pointer',
                                                   borderRadius: '6px',
                                                   fontSize: '14px'}}
                                                 onClick={() => {
                                                  // stop if  this link has no ID
                                                  if (item.id === undefined) { 
                                                    return
                                                  }
                                                  // Ask the user for permission 
                                                  const confirmed = window.confirm('Are you sure?');
                                                  // Delete only when they click Yes
                                                  if (confirmed) {
                                                    deleteItem(item.id);
                                                   }
                                              }} />
                      </div>
                   </td>
               </tr>
             ))}
          </tbody>
      </table>
    </>
  )
}

export default Table