import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav() {

  const state = useSelector(state => state.itemReducer);

  return (
    <div id="nav-body">
      <span id="title">
        <span id="name">ToDoList</span>
      </span>
      <div id="menu">
        <Link to="/">오늘의 할 일</Link>
        <Link to="/mypage">
          마이페이지
        </Link>
      </div>
    </div>
  );
}

export default Nav;
