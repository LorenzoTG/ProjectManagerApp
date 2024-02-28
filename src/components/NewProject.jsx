import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onNewProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const saveDataHandler = () => {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    if (
      projectTitle.trim() === "" ||
      projectDescription.trim() === "" ||
      projectDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onNewProject({
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex gap-4 justify-end items-center my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              CANCEL
            </button>
          </li>
          <li>
            <button
              onClick={saveDataHandler}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              SAVE
            </button>
          </li>
        </menu>
        <section>
          <Input ref={title} labelText="Title" textArea={false} type="text" />
          <Input ref={description} labelText="Description" textArea={true} />
          <Input
            ref={dueDate}
            labelText="Due date"
            textArea={false}
            type="date"
          />
        </section>
      </div>
    </>
  );
}
