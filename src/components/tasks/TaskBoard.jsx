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

  const [tasks, setTasks] = useState([]);
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

  const handleClose = () => {
    setshowTaskModal(false);
    setGetUpdate(null);
  };
  const handleDelete = (deleteTask) => {
    // console.log("click");
    const remove = tasks.filter((task) => task.id !== deleteTask.id);
    return setTasks(remove);

    // console.log("delete", remove);
  };

  const handleAllDelete = () => {
    setTasks([...tasks]);
  };

  const handleFavoriteOrNot = (favoriteId) => {
    // console.log("click", favoriteId);
    const taskIndex = tasks.findIndex((task) => task.id === favoriteId);
    const newtasks = [...tasks];
    newtasks[taskIndex].isFavorite = !newtasks[taskIndex].isFavorite;
    setTasks(newtasks);
  };

  const onSearchText = (value) => {
    const searchvalue = tasks.filter((task) =>
      task.title?.toLowerCase().includes(value.toLowerCase())
    );

    setTasks([...searchvalue]);
    console.log("value", searchvalue);
  };

  return (
    <section className="mb-20 text-white flex justify-center" id="tasks">
      <div className="container">
        <SearchTesk onSearchText={onSearchText} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            handleAddTask={() => setshowTaskModal(true)}
            handleAllDelete={handleAllDelete}
          />
          {showTaskModal && (
            <AddTaskModal
              setshowTaskModal={setshowTaskModal}
              onSave={handleAddTask}
              getUpdate={getUpdate}
              handleClose={handleClose}
            />
          )}
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleFavoriteOrNot={handleFavoriteOrNot}
            />
          ) : (
            <p>No Task Found</p>
          )}
        </div>
      </div>
    </section>
  );
}
