 
 import {useSelector} from 'react-redux';
 import ToDoCard from './Card';
 
 
 function ListeToDo(){
const todos = useSelector(state=>state.todoReducers.todos)

    return(
    <div>
{
    todos.map(todo => <ToDoCard key={todo.id} todo={todo}/>)
    
}

    </div>)
 }
 export default ListeToDo;
