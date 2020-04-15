import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './Add.css'

function useInputValue(defaultValue = '',) {
    const [value,setValue]=useState(defaultValue)

    return{
        bind:{
            value:value,
            onChange:event => setValue(event.target.value)
        },
        clear:()=>setValue(''),
        value:()=>value
    }
}

function Add (props) {
    const input = useInputValue('');

    const {todoAdd} = props;


    let AddTodo=(event)=>{ 

    event.preventDefault();  
    
    if(input.value().trim()){
        todoAdd(input.value());
        input.clear();
    }

   }
   
        
        return (
        <form onSubmit={AddTodo}>
            <input {...input.bind} placeholder="enter name"/>
            <button type='submit' className='btn btn-danger'>Add Todo</button>
        </form> 
        )
    
}

Add.propTypes={
    todoAdd:PropTypes.func.isRequired
}
export default Add;