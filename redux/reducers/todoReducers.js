import {DONE , DELETE , EDIT , ADD} from '../types/ToDoTypes ';

const initialeState={
    todos : [
{id:1, 
work:"redux",
done:false
},
{id:2, 
work:"route",
done:false
},
{id:3, 
work:"state",
done:false
},
{id:4, 
work:"props",
done:false
}
]
}
function todoReducers(state=initialeState,action){
  switch(action.type){
    case DONE:
        return{...state,todos:state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo)}
    case DELETE:
      return{...state,todos:state.todos.filter(todo=>todo.id!==action.payload)}
    case EDIT:
      return{...state,todos:state.todos.map(todo=>todo.id===action.payload.id ? {...todo,work:action.payload.work} : todo)}
    case ADD:
      return{...state,todos:[...state.todos,{id:Math.random(),done:false,work:action.payload}]}  
      default:
    return state
    }
}
export default todoReducers;
