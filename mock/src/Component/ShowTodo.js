import React from "react";

function ShowTodo(props) {
  return (
    <div className="Show_container">
      <div className="row_my_2">
        <div className="col-6">
          <p>{props.task}</p>
        </div>
        <div className="col_6">
          <button
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowTodo;
