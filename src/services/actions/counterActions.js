import { DECREMENT, INCREMENT, RESET } from "../constant/counterConstants"
//2. actions --> increment, decrement, reset
export const incrementCounter = () => {
    return {
        type: INCREMENT,
        
    }
};

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
};

export const resetCounter = () => {
    return {
        type : RESET
    }
}