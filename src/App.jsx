import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectScreen from "./components/NoProjectScreen";

function App() {
  const [newProject, setNewProject] = useState(false);

  const newProjectHandler = () => {
    setNewProject((prevState) => {
      return !prevState;
    });
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onNewProject={newProjectHandler} />
      {newProject ? (
        <NewProject onNewProject={newProjectHandler} />
      ) : (
        <NoProjectScreen onNewProject={newProjectHandler} />
      )}
    </main>
  );
}

export default App;
