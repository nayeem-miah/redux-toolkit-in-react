import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todoConstants";

const initialState = {
    isLoading: false,
    todos: [],
    isError: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                isLoading : false,
                todos: action.payload,
                isError: null
            }
        case GET_TODOS_FAILED:
            return {
                isLoading: false,
                todos : [],
                isError : action.payload
                
            }
        default:
            return state;
    };
};

export default todoReducer;