export const addText =(value)=>{
    return{
        type:"ADD_TEXT",
        payload:value
    }
}

export const addTodo = (data) => {
    return{
        type: "ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo = (id) =>{
    return {
        type:"DELETE_TODO",
        id
    }
}

export const removeTodo = () =>{
    return {
        type:"REMOVE_TODO"

    }
}

export const editTodo = (id)=>{
    return{
        type:"EDIT_TODO",
        payload: id,
        
    }
        
}