import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectScreen from "./components/NoProjectScreen";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectList, setProjectList] = useState({
    selectedProjectID: undefined,
    projects: [],
  });

  const selectProjectHandler = (id) => {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  };

  const cancelAddProjectHandler = () => {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  };

  const projectListHandler = () => {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  const addProjectHandler = (projectData) => {
    setProjectList((prevState) => {
      const projectList = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, projectList],
      };
    });
  };

  const selectedProject = projectList.projects.find(
    (project) => project.id === projectList.selectedProjectID
  );
  let content = <SelectedProject project={selectedProject}></SelectedProject>;

  if (projectList.selectedProjectID === null) {
    content = (
      <NewProject
        onNewProject={addProjectHandler}
        onCancel={cancelAddProjectHandler}
      />
    );
  } else if (projectList.selectedProjectID === undefined) {
    content = <NoProjectScreen onNewProject={projectListHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectList.projects}
        onNewProject={projectListHandler}
        onProjectSelected={selectProjectHandler}
      />
      {content}
    </main>
  );
}

export default App;
