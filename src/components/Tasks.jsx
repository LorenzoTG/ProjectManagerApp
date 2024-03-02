import NewTask from "./Newtask";

export default function Tasks({ tasks, onAdd }) {
  return (
    <section>
      <h2 className="text-2xl text-stone-700 font-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-600 my-4">
          This projkect does not have tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-500">
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
