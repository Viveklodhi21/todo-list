
const initialData = {
// edit,
  list: [],
  text:"",
  
};

// const [list, setList] = useState([])

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return{...state,text:action.payload}
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [ ...state.list, {id: id, data: data,},]}

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "REMOVE_TODO":
      return {
        ...state,
        list: [],
      };

  //   case "EDIT_TODO":
  //    const editedTodo = state.list.filter((elem) => elem.id == action.id);

  // console.log (editedTodo)
  //   //    const myEditTodo = data
  //   // const editInput = {id: new Date().getTime().toString()}
  //   console.log("editing activated")
  //    return{
  //     ...state,
  //     state: editedTodo,    
      
      
      
  //     }
  case 'EDIT_TODO' :
    return{
          ...state,
          text:state.todo[action.payload]
    }


    default:
       return state
};
}
export default todoReducers;
