import React from 'react'
import styles from '@/Components/Table/Table.module.css'
import Button from '../Inputs/Button'

interface LinkItem {
  id?: number;
  Title: string;
  URL: string;
  Description: string;
  OptionalTag: string;
}

type TableProps = {
  items: LinkItem[];
  deleteItem: (id: number) => void;
  onEditClick: (item: LinkItem) => void;
};



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
            <tbody className={'tableBody'}>
          {/* Loop */}
          {items.map((item) => (
            <tr key={item.id}>
              <td className={styles.customtd}>{item.Title}</td>
              <td className={styles.customtd}>
                <a href={item.URL} >
                  {item.URL}
                </a>
              </td>
              <td className={styles.customtd}>{item.Description}</td>
              <td className={styles.customtd}>{item.OptionalTag}</td>
              <td className={styles.customtd}>

              <div className={'editAndDelete'}>
                <Button btnText="Edit" style={{ background: 'rgba(255, 255, 255, 0.1)', 
                                                 color: '#0b2136', 
                                                 width: '30px', 
                                                 height: '30px',
                                                 border: '1px solid #E1DACB',
                                                 borderRadius: '6px',
                                                 cursor: 'pointer', 
                                                 fontSize: '14px'}}
                                                 onClick={() => onEditClick(item)} />    
                <Button btnText='Delete' style={{ backgroundColor: '#FFFFFF', 
                                                   color: '#9b1405',
                                                   width: '50px',
                                                   height: '30px',
                                                   border: '1px solid #E1DACB',
                                                   cursor: 'pointer',
                                                   borderRadius: '6px',
                                                   fontSize: '14px'}}
                                                 onClick={() => item.id && window.confirm('Are you sure?') && deleteItem(item.id)} />
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