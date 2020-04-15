import React from 'react';
import './Modal.css'

export default class Modal extends React.Component{
    state={
        isOpen:false
    }

    OpenModal=()=>{
        this.setState({
            isOpen:true
        })
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={this.OpenModal}>Open Modal</button>
                {this.state.isOpen? 
                <div className='modal'>
                        <div className='modal-body'>
                        <h1>Modal Title</h1>
                        <p>I am awesome modal</p>
                        <button onClick={()=>this.setState({isOpen:false})}>Close Modal</button>
                        </div>
                </div> : null}
            </React.Fragment>
        )
    }
}

