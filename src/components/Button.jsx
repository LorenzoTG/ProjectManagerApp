export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-stone-700 rounded-md text-stone-400 text-sm md:text-base hover:text-stone-100 hover:bg-stone-600"
    >
      {children}
    </button>
  );
}
