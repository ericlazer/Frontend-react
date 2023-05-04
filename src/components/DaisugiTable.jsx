import { Default } from "react-awesome-spinners";

const Table = ({ tableOption = {}, tableData, isLoading }) => {
  return (
    <table className="w-full text-sm bg-[#262626]">
      <thead>
        <tr>
          {tableData.columns &&
            tableData.columns.map((column, key) => {
              return (
                <th
                  key={key}
                  className={`px-5 py-2 bg-[#313131] text-white font-normal text-${column.align}`}
                >
                  {column.header}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td
              colSpan={tableData.columns && tableData.columns.length}
              className="h-[calc(100vh-300px)] text-center"
            >
              <Default color="#a1a1a1" />
            </td>
          </tr>
        ) : (
          tableData.rows &&
          tableData.rows.map((row, key) => {
            return (
              <tr
                key={key}
                className="text-white text-center hover:brightness-125"
              >
                {row.map((item, i) => {
                  return (
                    <td
                      key={i}
                      className={`px-3 py-2 border border-[#313131] text-${
                        tableData.columns[i] && tableData.columns[i].align
                      }`}
                    >
                      {item}
                    </td>
                  );
                })}
              </tr>
            );
          })
        )}
      </tbody>
      {tableOption.footer ? <tfoot></tfoot> : <></>}
    </table>
  );
};

export default Table;
