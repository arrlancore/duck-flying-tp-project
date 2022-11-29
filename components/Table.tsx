import React from "react";
import { ValueOf } from "../src/types";

export type THead = {
  key: string;
  title: string;
  render?: (title: string) => JSX.Element;
};
export type TRow<T> = T;
export type TRender<T> = {
  [k: string]: (v: ValueOf<T>, row: T) => JSX.Element;
};

type Props2<T> = {
  heads: THead[];
  rows: TRow<T>[];
  renderers: TRender<T>;
  rootStyle?: string;
};

function getHeadKeys<T>(heads: THead[]) {
  return heads.map((head) => head.key as keyof T);
}

export function Table<T>(props: Props2<T>) {
  const keys = getHeadKeys(props.heads);

  return (
    <div
      className={`overflow-x-auto min-w-[320px] relative ${props.rootStyle}`}
    >
      <table className="w-full text-sm text-left font-bold text-gray-700">
        <thead className="text-[10px] uppercase text-gray-400 uppercase dark:text-gray-400">
          <tr>
            {props.heads?.map((h, idx) => (
              <th
                key={idx}
                scope="col"
                className={`py-3 px-6
               ${idx == 0 ? "pl-1" : ""}`}
              >
                {h.render ? h.render(h.title) : h.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows?.map((obj, idx) => (
            <tr
              key={idx}
              className="bg-white border-solid border-gray-100 border-t"
            >
              {keys.map((key, idx) => (
                <td
                  key={`${key}-${idx}`}
                  className={`py-2 px-6 ${idx == 0 ? "pl-2" : ""}`}
                >
                  {props.renderers[key]
                    ? props.renderers[key](obj[key], obj)
                    : obj[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
