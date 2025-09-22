import React from 'react'
import './TodoItem.css'

const TodoItem = ({item, date}) => {
  return (
    <div>
       <div className="container text-center">
        <div className="row">
          <div className="col-6">
            {item}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
