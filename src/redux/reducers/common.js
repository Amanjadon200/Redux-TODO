const list= [];
export const reducer=(state = list, action) => {
    switch (action.type) {

        case "ADD_TODO":
            return [ ...state,{id:action.payLoad.id,data:action.payLoad.todo}]
        case "DELETE_TODO":
            console.log(state)
            const newList=state.filter((todo)=>{console.log(todo);return todo.id!==action.id})
            return[...newList]

        default:
            return state
    }
}
