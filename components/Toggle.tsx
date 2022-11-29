import { HTMLAttributes } from "react";

const Toggle = ({
  label,
  defaultChecked,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (check: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div {...props}>
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          defaultChecked={defaultChecked}
          onChange={props.onChange}
          checked={props.checked}
        />
        <div
          className="min-w-[44px] h-6 relative bg-gray-200 rounded-full
         peer peer-focus:ring-4 peer-focus:ring-blue-300
          peer-checked:after:translate-x-full peer-checked:after:border-white
           after:content-[''] after:absolute after:top-0.5 after:left-[2px]
            after:bg-white after:border-gray-300 after:border
             after:rounded-full after:h-5 after:w-5 after:transition-all
              dark:border-gray-600 peer-checked:bg-secondary"
        ></div>
        <span
          className="ml-3 text-sm font-medium
         text-gray-400"
        >
          {label}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
