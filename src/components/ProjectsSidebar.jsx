import Button from "./Button";

export default function ProjectsSidebar({ onNewProject }) {
  return (
    <aside className="text-stone-50 px-8 py-16 bg-stone-900 rounded-r-xl w-1/3 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onNewProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
