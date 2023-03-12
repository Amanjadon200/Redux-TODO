export const addToDo = (todo) => {
    return {
        type: "ADD_TODO",
        payLoad:{
            todo:todo,
            id:new Date().toISOString()
        }
    }
}
export const deleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}
export const removeToDo = () => {
    return {
        type: "REMOVE_TODO"
    }
}