import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from './../../services/actions/counterActions';

const Counter = () => {

    const count = useSelector(state => state.count);
    // console.log(count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incrementCounter());
    };
    const handleDecrement = () => {
        dispatch(decrementCounter())
    };
    const handleReset = () => {
        dispatch(resetCounter())
    };
    return (
        <div className="mx-auto max-w-5xl p-10">
            <h3 className="text-3xl "> count : {count}</h3>
            <div className="space-x-5 my-10">
                <button onClick={handleIncrement} className="btn bg-green-500" > increment</button >
                <button onClick={handleDecrement} className="btn bg-red-500" > decrement</button >
                <button onClick={handleReset} className="btn bg-yellow-600" > reset</ button>
            </div>

        </div >
    );
};

export default Counter;

//1. state --> count : 0
//2. actions --> increment, decrement, reset
//3. reduces --> increment ---> count => count + 1
//       --> decrement ---> count => count - 1
//       --> reset ---> count => 0
//4. store -->
// 5. providing store in react
// 6 using store 