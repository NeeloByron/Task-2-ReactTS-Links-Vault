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
  editItem: (id: number) => void;
};



export const Table: React.FC<TableProps> = ({ items, deleteItem, editItem }) => {
  return (
    <>
      <table className={styles.mainTable}>
        <thead>
         <tr>
           <th className={styles.row}>Title</th>
           <th className={styles.row}>Link (URL)</th>
           <th className={styles.row}>Description</th>
           <th className={styles.row}>Optional Tags</th>
           <th className={styles.row}>Delete/Edit</th>
         </tr>
         </thead>
            <tbody>
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
                <Button btnText="Edit" style={{ background: '#2563eb', color: '#fff'}} onClick={() => item.id && editItem(item.id)} />
                <Button btnText='Delete' style={{ backgroundColor: '#dc2626', color: '#fff'}} onClick={() => item.id && deleteItem(item.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </>
  )
}

export default Table