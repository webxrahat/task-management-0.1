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

  return (
    <section className="mb-20 text-white flex justify-center" id="tasks">
      <div className="container">
        <SearchTesk />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction handleAddTask={() => setshowTaskModal(true)} />
          {showTaskModal && (
            <AddTaskModal setshowTaskModal={setshowTaskModal} />
          )}

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
