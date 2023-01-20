import React, {useState} from 'react';
import './App.css';
import {connect} from 'react-redux';

function Item(props) {
    console.log('item', props);
    const { element } = props;
    const [sowMenu, setShowMenu] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(element.name);
    
    const editTask = () => {
        setEditMode(true)
    }

    const saveTitle = () => {
        setEditMode(false)
        props.saveTitleTask({ id: element.id, title })
    }

    return (
        <li key={element.id}>
            {
                !editMode?               
                <div class='item' onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                    <div onClick = {editTask}>
                        {element.name}
                    </div>
                </div>
                :
                <>
                    <input value={title} onChange = {e => setTitle(e.target.value)} />
                    <button onClick = {saveTitle}>Save</button>
                </>
            }
            {
                sowMenu && !editMode &&
                <div class="menu" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                    {element.status !== 'todo' && <button onClick={() => props.moveRight(element.id)}>Right</button>}
                    {element.status !== 'done' && <button onClick={() => props.moveLeft(element.id)}>Left</button>}
                    <button onClick = {editTask}>Edit</button>
                    <button onClick = {() => props.deleteTask(element.id)}>Delete</button>  
                </div>
            }
        </li>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteTask:(taskId)=> dispatch({type:'deleteTask', payload: taskId}),
    saveTitleTask:({id, title}) => dispatch({type: 'saveTitleTask', payload: {id, title}}),
    moveLeft:(taskId) => dispatch({type:'moveLeft', payload: taskId}),
    moveRight:(taskId) => dispatch({type:'moveRight', payload: taskId})
})

const mapStateToProps = (state) => ({state})
export default connect(mapStateToProps, mapDispatchToProps)(Item);
//export default Item;