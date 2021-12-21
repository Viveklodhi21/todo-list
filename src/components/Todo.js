import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  removeTodo,
  editTodo,
  addText,
} from "../actions/index";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(inputData);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your List Here!!! </figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="Add Items..."
              value={inputData}
              title="Add Items"
              onChange={(event) => setInputData(event.target.value)}
            />
            <button>
              <i
                // testId="buttonPlease"
                className="fa fa-plus add-btn"
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              >
             add
              </i>
            </button>
          </div>

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                    <button>
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Delete-Item"
                        onClick={() => dispatch(deleteTodo(elem.id))}
                      >
                        delete
                      </i>
                    </button>
                  </div>

                  <div
                    className="showItems far fa-trash-alt add-btn"
                    title="Edit-Item"
                  >
                    <button>
                     
                      <i
                        className="far fa-trash-alt add-btn"
                        title="Edit-Item"
                        value={edit}
                        onChange={() => {
                          setEdit(elem.id);
                        }}
                        onClick={() => dispatch(addText())}
                      >
                        Edit
                      </i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect104"
              data-sm-link-text="remove all"
              onClick={() => dispatch(removeTodo())}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
