const initialState = {

    tasks: [
        {id: 1, status: 'progress', name: 'Text todo1'},
        {id: 2, status: 'todo', name: 'Text todo2'},
        {id: 3, status: 'review', name: 'Text todo3'},
        {id: 4, status: 'done', name: 'Text todo4'},
    ],
    columns: [
        {id: 1, status: 'progress', priority: 'Text todo1'},
        {id: 2, status: 'todo', priority: 'Text todo2'},
        {id: 3, status: 'review', priority: 'Text todo3'},
        {id: 4, status: 'done', priority: 'Text todo4'},
    ],
};
const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {
        case 'deleteTask':
            const newState = {...state, tasks:state.tasks.filter(el=>el.id !== action.payload)};
            return newState;
        case 'addTask':
            return {...state, tasks:[...state.tasks, {id:Math.random, name: action.payload, status: 'progress'}]}
        default:
            return state
    }
}
export default kanbanControlPanel;