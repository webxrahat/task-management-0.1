import React, { useState } from "react";
import SearchTesk from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "I want to learn",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showTaskModal, setshowTaskModal] = useState(false);
  const [getUpdate, setGetUpdate] = useState(null);

  const handleAddTask = (getTasks, isAdd) => {
    // console.log("Data Save", getTasks);
    if (isAdd) {
      setTasks([...tasks, getTasks]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === getTasks.id) {
            return getTasks;
          }
          return task;
        })
      );
    }
    setshowTaskModal(false);
  };

  const handleEdit = (updateTask) => {
    // console.log("click", updateTask);
    setGetUpdate(updateTask);
    setshowTaskModal(true);
  };

  return (
    <section className="mb-20 text-white flex justify-center" id="tasks">
      <div className="container">
        <SearchTesk />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTask={() => setshowTaskModal(true)} />
          {showTaskModal && (
            <AddTaskModal
              setshowTaskModal={setshowTaskModal}
              onSave={handleAddTask}
              getUpdate={getUpdate}
            />
          )}

          <TaskList tasks={tasks} handleEdit={handleEdit} />
        </div>
      </div>
    </section>
  );
}
