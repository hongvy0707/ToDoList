import React from "react";
import Todo from "./Todo";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

export default function TodoList({ todoList, onCheckBtnClick }) {
  console.log(todoList)
  return (
    <><VerticalTimeline>

      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick} />
      ))}
    </VerticalTimeline>
    </>
  );
}
