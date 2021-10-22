import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Todo({ todo, onCheckBtnClick }) {
 
const textLine = {
  
}
  return (
    <>
    <VerticalTimelineElement
    
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#303e49', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date={todo.deadline.split("00")[0]}
    iconStyle={{ background: '#303e49', color: '#fff' }}
     icon={<CheckCircleOutlineIcon style={{cursor:"pointer"}} onClick={()=>{onCheckBtnClick(todo.id)}} />}
  >
   {todo.isCompleted && ( <p style={{textDecoration:"line-through"}}> {todo.name} </p>)
   }
 
  {todo.isCompleted == false &&(<p>{todo.name}</p>)}
    
    
     
    
    
  </VerticalTimelineElement>

    </>
  );
}
