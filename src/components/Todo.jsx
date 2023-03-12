import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo,removeToDo } from "../redux/actions";
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
          className="p-2 h-10 w-60 outline-none"
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
      <div className="mt-5 w-60 mr-3">
        {state.reducer.map((todo) => {
          if (todo.data !== "") {
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
        {state.reducer.length>0 && <button className="bg-white py-1 px-2 mt-2" onClick={()=>{dispatch(removeToDo())}}>clear all todo's</button>}
      </div>
      </div>
    </div>
  );
};

export default Todo;
