
interface RecordTableProps {

}
export const Table: React.FC<RecordTableProps> = () => {
  return (
    <>
      <div className={'tablePage'}>
        <div className={'tableContainer'}>
          {/*Header*/}
           <div className={'tableHeaderCard'}>
             <h1 className={'tableTile'}>Browser Link Vault</h1>
             <p className={'tableSubtitle'}>Manage your links</p>
           </div>

        </div>
      </div>

    </>
  )
}

export default Table