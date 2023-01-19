import React, {useState} from 'react';
import './App.css';
import Item from './Item.js'
import {connect} from 'react-redux';

function Board(props) {
    const tasks = props.state.tasks
    const columns = props.state.columns

    const[title, setTitle] = useState('')
    const addClick = ()=>{
        props.addTask(title)
            setTitle('')
    }
    return (
        <div className="App">
            <div class='container'>
                <h1>Canban board</h1>
                <input value={title} onChange={e=>setTitle(e.target.value)} /><button onClick={addClick}>Add</button>
            </div>
            <div class="container text-center">
                <div class="row">
                    {
                        columns.map(column => 
                            <div class="coll">
                                <h2>{column.title}</h2>
                                <ul>
                                {
                                    tasks.filter(el => el.status === column.status).map( filteredEl => 
                                        <Item element = {filteredEl}/>
                                    )
                                }
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTask:(title)=> dispatch({type:'addTask', payload:title})
})

const mapStateToProps = (state) => ({
    state

})
export default connect(mapStateToProps, mapDispatchToProps)(Board);
