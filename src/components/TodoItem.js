import React,{useContext} from 'react'
import PropTypes from 'prop-types';
import Context from '../contex';
import './TodoItem.css';

function TodoItem(props){

    const {Delete} = useContext(Context);

    const{index,name,onChange,completed,todo}=props;

    const classes=[];
    if(completed){
        classes.push('done')
    }

       
       return (
        <div className='container-fluid'>
            <h1> 
             <div className='col-md-1'><input checked={completed} onChange={()=>onChange(todo.id)} type="checkbox"/>
             {index+1}.</div>
             <div className='col-md-10 t'><span  onClick={()=>onChange(todo.id)} className={classes.join(' ')}>{name}</span></div>
             <div className='col-md-1 i'><i onClick={()=>Delete(todo.id)} className="fas fa-trash-alt"/></div></h1>
            <hr/>
            
        </div>
    )
}

TodoItem.propTypes={
    name:PropTypes.string,
    onChange:PropTypes.func.isRequired,

}

TodoItem.defaultProps={
    name:'noname'
}

export default TodoItem;