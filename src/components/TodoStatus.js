import React from 'react'

export default function TodoStatus({ done, left }) {
  return (
    <div id="status-container">
      <h4>To Do 현황</h4>
        {left===0 ? (
          <div className='congrats-message'>
            축하합니다! 오늘의 할 일을 <br/>모두 끝내셨습니다!
          </div>
        ):(
          <div id="status">
            오늘 끝낸 일 : <span className="status-content">{done} 개</span>
          <hr></hr>
          <div id="status-left">
            남은 일 : <span className="status-content">{left} 개</span>
          </div>
        </div>
        )}
      
    </div >
  )
}
