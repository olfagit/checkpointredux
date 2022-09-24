import React from 'react';
import Button from 'react-bootstrap/Button';
import {useDispatch} from 'react-redux';
import { done, del } from '../redux/actions/todoAction';
import Edit from './Edit';

function ToDoCard({todo}) {
 
  const dispatch=useDispatch()
  return (
    <div style = {{display:"flex" , justifyContent: "space-arround "}}>
        <p>{todo.work}</p>
        <Button variant="success" onClick={()=>dispatch(done(todo.id))}>Completed</Button>
      <Button variant="outline-secondary" onClick={()=>dispatch(del(todo.id))}>Delete</Button>
      <Edit todo={todo}/>
    </div>
  )
}
export default ToDoCard;