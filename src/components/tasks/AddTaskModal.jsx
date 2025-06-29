import { useState } from "react";

export default function AddTaskModal({ setshowTaskModal, onSave, getUpdate }) {
  const [getTasks, setGetTasks] = useState(
    getUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isfavorite: false,
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(getUpdate, null));

  const handleChangeInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "tags") {
      value = value.split(",");

      console.log(value);
    }

    setGetTasks({
      ...getTasks,

      [name]: value,
    });
  };
  // console.log("getTasks", getTasks);

  return (
    <>
      <div
        onClick={() => setshowTaskModal(false)}
        className="bg-black absolute top-0 left-0 z-10 h-full w-full opacity-75"
      ></div>

      <htmlForm className="z-10 absolute top-1/12 left-1/3 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? " Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={getTasks.title}
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={getTasks.description}
              onChange={handleChangeInput}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={getTasks.tags}
                onChange={handleChangeInput}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={getTasks.priority}
                onChange={handleChangeInput}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-3 lg:mt-20">
          <button
            onClick={() => setshowTaskModal(false)}
            type="button"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => onSave(getTasks, isAdd)}
          >
            Add Task
          </button>
        </div>
      </htmlForm>
    </>
  );
}
