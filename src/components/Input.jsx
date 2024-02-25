export default function Input({ labelText, textArea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600";

  return (
    <p className="my-4 gap-1 flex flex-col">
      <label className="text-sm uppercase font-bold text-stone-500">
        {labelText}
      </label>
      {textArea ? (
        <textarea className={classes} {...props}></textarea>
      ) : (
        <input className={classes} {...props}></input>
      )}
    </p>
  );
}
