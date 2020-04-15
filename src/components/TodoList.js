import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

function TodoList(props) {
    const{todos,onToggle}=props;

    return (
        <div>
        {
            todos.map((todo,index)=>{
                return(
                <TodoItem 
                index={index}
                name={todo.title}
                key={todo.id}
                completed={todo.completed}
                onChange={onToggle}
                todo={todo}
                />
            )
            })
        }            
        </div>
    )
}

TodoList.propTypes={
todos:PropTypes.array.isRequired,
onToggle:PropTypes.func.isRequired,

}

export default TodoList;