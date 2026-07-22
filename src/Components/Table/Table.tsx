import styles from '@/Components/Table/Table.module.css'

export const Table = () => {
  return (
    <>
      <table className={styles.mainTable}>
        <tr>
          <th className={styles.row}>Title</th>
          <th className={styles.row}>Link (URL)</th>
          <th className={styles.row}>Description</th>
          <th className={styles.row}>Optional Tags</th>
        </tr>
      </table>
  
    </>
  )
}

export default Table