import Input from "./Input";

export default function NewProject({ onNewProject }) {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex gap-4 justify-end items-center my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            CANCEL
          </button>
        </li>
        <li>
          <button
            onClick={onNewProject}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            SAVE
          </button>
        </li>
      </menu>
      <section>
        <Input labelText="Title" textArea={false} type="text" />
        <Input labelText="Description" textArea={true} />
        <Input labelText="Date" textArea={false} type="date" />
      </section>
    </div>
  );
}
