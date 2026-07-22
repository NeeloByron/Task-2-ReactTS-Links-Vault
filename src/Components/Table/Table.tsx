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

interface TableProps {
  items: LinkItem[];
}

export const Table: React.FC<TableProps> = ({items}) => {
  return (
    <>
      <table className={styles.mainTable}>
        <tr>
          <th className={styles.row}>Title</th>
          <th className={styles.row}>Link (URL)</th>
          <th className={styles.row}>Description</th>
          <th className={styles.row}>Optional Tags</th>
         </tr>

          <tr>
          <td className={styles.customtd}>Favorite Music Video</td>
          <td className={styles.customtd}>www.example.com</td>
          <td className={styles.customtd}>I love this video</td>
          <td className={styles.customtd}>Music</td>
          <td className={styles.customtd}>
           <Button btnText='Edit' />
           <Button btnText='Delete' />
    </td>
  </tr>
      </table>
  
    </>
  )
}

export default Table