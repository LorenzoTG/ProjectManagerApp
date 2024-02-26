import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { labelText, textArea, ...props },
  ref
) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600";

  return (
    <p className="my-4 gap-1 flex flex-col">
      <label className="text-sm uppercase font-bold text-stone-500">
        {labelText}
      </label>
      {textArea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props}></input>
      )}
    </p>
  );
});

export default Input;
