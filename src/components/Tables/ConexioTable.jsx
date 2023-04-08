export default (tableOption = {}, tableData) => {
  return (
    <table className='w-full'>
      <thead>
        <tr>
          {
            tableData.columns && tableData.columns.map((column, key) => {
              console.log(column);
              return (
                <th key={key}>
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
              <tr key={key}>
                {
                  row.map((item, i) => {
                    <td key={i}>{item}</td>
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