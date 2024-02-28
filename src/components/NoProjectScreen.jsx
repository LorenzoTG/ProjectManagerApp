import Button from "./Button";

export default function NewProjectScreen({ onNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src="logo.png"
        alt="Project logo"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-10">
        <Button onClick={onNewProject}>Create new Project</Button>
      </p>
    </div>
  );
}
