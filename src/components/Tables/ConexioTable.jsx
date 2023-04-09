export default ({tableOption = {}, tableData}) => {
  return (
    <table className='w-full text-sm'>
      <thead>
        <tr>
          {
            tableData.columns && tableData.columns.map((column, key) => {
              return (
                <th key={key} className={`px-5 py-2 bg-[#313131] text-white font-normal text-${column.align}`}>
                  {column.header}
                </th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          tableData.rows && tableData.rows.map((row, key) => {
            return (
              <tr key={key} className='text-white text-center hover:brightness-125'>
                {
                  row.map((item, i) => {
                    return <td key={i} className={`px-5 py-2 bg-[#262626] text-${tableData.columns[i].align}`}>{item}</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
      {
        tableOption.footer ? <tfoot></tfoot> : <></>
      }
    </table>
  )
}