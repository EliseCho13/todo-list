import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, removeFromList, addToList, notify } from '../actions';
import TodoItem from '../components/TodoItem'
import TodoStatus from '../components/TodoStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TodoList() {
  window.addEventListener("load", startup);
  const state = useSelector(state => state.itemReducer);
  const { items } = state
  const dispatch = useDispatch();
  const [checkedItems, setCheckedItems] = useState(items.map((el) => el.id))
  let listLength = items.length;

  const handleCheckChange = (checked, id) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
    }
    else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckedItems(items.map((el) => el.id))
    }
    else {
      setCheckedItems([]);
    }
  };

  const handleDelete = (itemId) => {
    setCheckedItems(checkedItems.filter((el) => el !== itemId))
    dispatch(removeFromList(itemId));
  }
  const handleEdit = (itemId) => {
    setCheckedItems(checkedItems.filter((el) => el !== itemId))
    dispatch(edit(itemId));
  }

  const getTotal = () => {
    let idArr = items.map((el) => el.id)
    let total = {
      left: 0,
      done: 0,
    }
    for (let i = 0; i < idArr.length; i++) {
      if (checkedItems.indexOf(idArr[i]) > -1) {
        total.done = total.done + 1
      }
    }
    total.left = idArr.length - total.done;
    return total
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const textInput = event.target['text'];
    const dateInput = event.target['date'];
    const timeInput = event.target['time'];
    const memoInput = event.target['memo'];
    //console.log(`${textInput.value}의 일은 ${dateInput.value}의 ${timeInput.value}까지이며, 추가사항은 ${memoInput.value}입니다.`);
    dispatch(notify(`ToDo List에 ${textInput.value}이(가) 추가되었습니다.`))
    //console.log(`num is ${listLength}`);
    listLength++;
    dispatch(addToList(listLength, textInput.value, dateInput.value, timeInput.value, memoInput.value));
  }
  

  function startup() {
    document.getElementById("todo-add-form").addEventListener("submit", handleAdd);
  }
  const total = getTotal()

  return (
    <div id="todo-list-container">
      <div id="todo-list-body">
        <div id="todo-add-body">
          <div id="todo-add-container">
          <div className="todo-mini-title">
          To Do 추가하기
          </div>
            <form id="todo-add-form">
              <label htmlFor="todo-add text">무슨 일을 하실 건가요?</label>
              <input id="todo-add text" type="text" name="text"/>
              <label htmlFor="todo-add date">언제까지 끝내셔야 하는 일인가요?</label>
              <input id="todo-add date" type="date" name="date"/>
              <input id="todo-add time" type="time" name="time"/>
              <label htmlFor="todo-add additional">추가할 내용이 있다면 적어 주세요.</label>
              <input id="todo-add additional" type="text" name="memo"/>
              <div id="button-form">
                <button id="todo-add submit" type="submit" name="submit">제출</button>
                <button id="todo-add reset" type="reset" name="reset">초기화</button>
              </div>
            </form>
          </div>
        </div>
    <hr /><hr />
        <div id="todo-list-shown">
          <div className="todo-mini-title">To Do List</div>
          <span id="todo-select-all">
          <input
            type="checkbox"
            checked={
              checkedItems.length === items.length ? true : false
            }
            onChange={(e) => handleAllCheck(e.target.checked)} >
          </input>
          <label >전체선택</label>
          </span>
          <div id="todolist-container">
            {!items.length ? (
              <div id="todo-none-text">
                오늘의 할 일이 아직 없습니다. 오늘의 할 일을 추가해 주세요!
              </div>
            ) : (
                <div id="todo-item-list">
                {items.map((item, idx) => {
                  return <TodoItem
                    key={idx}
                    handleCheckChange={handleCheckChange}
                    handleDelete={handleDelete}
                    item={item}
                    checkedItems={checkedItems}
                    handleEdit={handleEdit}
                  />
                })}
              </div>
            )}
          <TodoStatus left={total.left} done={total.done} />
        </div>
        </div>
      </div >
    </div>
  )
}
