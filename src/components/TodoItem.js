import React from 'react'

export default function TodoItem({
  item,
  checkedItems,
  handleCheckChange,
  handleDelete,
  handleEdit
}) {
  return (
    <li className="todo-list-body">
      <input
        type="checkbox"
        className="todo-checkbox"
        onChange={(e) => {
          handleCheckChange(e.target.checked, item.id)
        }}
        checked={checkedItems.includes(item.id) ? true : false} >
      </input>
      <div className="todo-info">
        <div className="todo-content" data-testid={`cart-${item.name}`}>{item.name}</div>
        <div className="todo-upto date">{item.date}</div>
        <div className="todo-upto time">{item.time}까지</div>
      </div>
      <div className='todo-buttons'>
        <button className="todo-button delete" onClick={() => { handleDelete(item.id) }}>삭제</button>
        <button className="todo-button edit" onClick={() => { handleEdit(item.id, item.name, item.date, item.time, item.memo) }}>수정</button>
      </div>
    </li >
  )
}
