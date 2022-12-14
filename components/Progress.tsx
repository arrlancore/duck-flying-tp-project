import React from "react";

const Progress = ({ pct }: { pct: number }) => {
  return (
    <div className={`w-full my-2 bg-gray-200 rounded-full h-1.5 mb-4`}>
      <div
        className={`bg-secondary h-1.5 rounded-full dark:bg-secondary`}
        style={{ width: pct + "%" }}
      ></div>
    </div>
  );
};

export default Progress;
