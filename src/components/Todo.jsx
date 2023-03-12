import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../redux/actions";
const Todo = () => {
  const [toDoData, setToDoData] = useState("");
  const state = useSelector((state) => {
    return state;
  });
  console.log(state, "1");
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col m-auto mt-10">
      <h3 className="text-white">Add your list here</h3>
      <div className="flex flex-col items-center">
      <div className="flex items-center w-64">
        <input
          className="p-2 border-2 h-10 w-60 outline-none"
          placeholder="enter your todo"
          onChange={(e) => {
            setToDoData(e.target.value);
          }}
          value={toDoData}
        />
        <AiOutlinePlus
          className="text-white cursor-pointer min-w-4"
          onClick={() => {
            dispatch(addToDo(toDoData));
          }}
        />
      </div>
      <div className="mt-5 w-60">
        {state.reducer.map((todo) => {
          if (todo.id !== "") {
            return (
              <div className="min-w-full  flex justify-between bg-white mt-2 items-center p-2">
                {todo.data}
                <AiOutlineMinus
                  className="cursor-pointer min-w-4"
                  onClick={() => {
                    dispatch(deleteToDo(todo.id));
                  }}
                />
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>
      </div>
    </div>
  );
};

export default Todo;
