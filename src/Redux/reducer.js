const initialState = {

    tasks: [
        {id: 1, status: 'progress', name: 'Text todo1'},
        {id: 2, status: 'todo', name: 'Text todo2'},
        {id: 3, status: 'review', name: 'Text todo3'},
        {id: 4, status: 'done', name: 'Text todo4'},
    ],
    columns: [
        {id: 1, status: 'todo', priority: 'Text todo1', title: 'Todo'},
        {id: 2, status: 'progress', priority: 'Text todo2', title: 'Progress'},
        {id: 3, status: 'review', priority: 'Text todo3', title: 'Review'},
        {id: 4, status: 'done', priority: 'Text todo4', title: 'Done'},
    ],
};
const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {
        case 'deleteTask':
            const newState = {...state, tasks:state.tasks.filter(el=>el.id !== action.payload)};
            return newState
        case 'addTask':
            return {...state, tasks:[...state.tasks, {id:Math.random(), name: action.payload, status: 'todo'}]}

        case 'saveTitleTask':
            const { title, id } = action.payload
            if(!title || ! id) return state
            return {...state, tasks: state.tasks.map(task => {
                
                if(task.id === id) {
                    task.status = title
                }
                return task;
            })}

        case 'moveLeft':
            return {...state, tasks: state.tasks.map(task => {
                
                if(task.id === action.payload) {
                    const newStatus = state.columns.findIndex((el) => (el.status === task.status)) + 1
                    task.status = newStatus < state.columns.length ? state.columns[newStatus].status : task.status;
                }
                return task;
            })}
            case 'moveRight':
                return {...state, tasks: state.tasks.map(task => {
                    
                    if(task.id === action.payload) {
                        const newStatus = state.columns.findIndex((el) => (el.status === task.status)) - 1
                        task.status = newStatus >=  0 ? state.columns[newStatus].status : task.status;
                    }
                    return task;
                })}

        default:
            return state
    }
}
export default kanbanControlPanel;