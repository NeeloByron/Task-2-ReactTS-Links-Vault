import React from "react"

interface Record {
    Title: string;
    Link: string;
    Description: string;
    Optional: string;
}
const mockRecords: Record[] = [
    { Title: "Book",Link: "https://example.com", Description: "My favorite", Optional: "Love"   }
]
export const Table: React.FC = () => {
  return (
    <>
      <div className={'tablePage'}>
        <div className={'tableContainer'}>
          {/*Header*/}
           <div className={'tableHeaderCard'}>
             <h1 className={'tableTile'}>Browser Link Vault</h1>
             <p className={'tableSubtitle'}>Manage your links</p>
           </div>
          
          {/*Search and add button*/}
           <div className={'tableActionCard'}>
             <div className={'actionFlexContainer'}>
                <div className={'searchInput'}>
                    <input type={'search'} placeholder={'Search Title, URL etc....'} className={'searchIcon'} size={20} />
                </div>

                {/*the add button*/}
                 <button className={'addBtn'}>
                    <span>Add new</span>
                 </button>
             </div>
           </div>

          {/*Links table*/}
          {/* <div className={'tableCard'}>
            <div className={'tableScrollContainer'}>
                <table className={'LinksTable'}>
                    <thead className={'tableHeader'}>
                        <tr>
                            <th className='tableHeaderRow1'>Title</th>
                            <th className='tableHeaderRow2'>Link (URL)</th>
                            <th className='tableHeaderRow3'>Description</th>
                            <th className='tableHeaderRow4'>Optional Tags</th>
                        </tr>
                    </thead>
                        <tbody className={'tableBody'}>
                        {mockRecords.length === 0?  (
                            <tr className={'tableEmptyRow'}>
                                <td colSpan={4}>No record found</td>
                            </tr>
                        ) : (
                            mockRecords.map((linkRecord)) => (
                               <tr key={linkRecord.id} className={'table-data-row'}>
                                <td className={'table-data-cell'}>{linkRecord.Title}</td>
                                <td className={'table-data-cell'}>{linkRecord.Link}</td>
                                <td className={'table-data-cell'}>{linkRecord.Description}</td>
                                <td className={'table-data-cell'}>{linkRecord.Optional}</td>
                              </tr>
                            ))
                          )} 
                        
                    </tbody>
                </table> 
            </div>
           </div>*/}
        </div>
      </div>

    </>
  )
}

export default Table