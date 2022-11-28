import React from "react";

type TableHead = {
  value: string;
  render?: (value: string) => JSX.Element;
};

type TableBody = Array<
  Array<{
    key: string;
    value: any;
    render?: (value: any, parents: any[]) => JSX.Element;
  }>
>;

type Props = {
  rootStyle?: string;
  head: Array<TableHead>;
  body: TableBody;
};

const Table = (props: Props) => {
  return (
    <div className={`overflow-x-auto relative ${props.rootStyle}`}>
      <table className="w-full text-sm text-left font-bold text-gray-700">
        <thead className="text-[10px] uppercase text-gray-400 uppercase dark:text-gray-400">
          <tr>
            {props.head?.map((h, idx) => (
              <th
                key={idx}
                scope="col"
                className={`py-3 px-6 pl-1
               ${idx == 0 ? "pl-1" : ""}`}
              >
                {h.render ? h.render(h.value) : h.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.body?.map((tds, idx) => (
            <tr
              key={idx}
              className="bg-white border-solid border-gray-100 border-t"
            >
              {tds.map((data, idx) => (
                <td key={idx} className={`py-2 px-6 pl-2`}>
                  {data.render ? data.render(data.value, tds) : data.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
