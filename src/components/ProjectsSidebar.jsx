import Button from "./Button";

export default function ProjectsSidebar({
  onNewProject,
  projects,
  onProjectSelected,
  selectedProjectID,
}) {
  return (
    <aside className="text-stone-50 px-8 py-16 bg-stone-900 rounded-r-xl w-1/3 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectID) {
            cssClasses += " bg-stone-600 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button onClick={onProjectSelected} className={cssClasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
