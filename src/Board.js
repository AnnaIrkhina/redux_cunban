import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';

function Board(props) {
    const tasks = props.tasks.tasks

    console.log('props', props)
    const[title, setTitle] = useState('')
    const addClick = ()=>{
        props.addTask(title);
            setTitle('');
    }
    return (
        <div className="App">
            {tasks.map(el => <li key={el.id}>
                {el.name}
                <button onClick={() => props.deleteTask(el.id)}>Delete</button>
            </li>)}
            <input value={title} onChange={e=>setTitle(e.target.value)} /><button onClick={addClick}>Add</button>

        </div>

    );
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({type: 'deleteTask', payload: taskId}),//send object to reducer action
    addTask:(title)=> dispatch({type:'addTask', payload:title})
})

const mapStateToProps = (state) => ({
    tasks: state

})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
