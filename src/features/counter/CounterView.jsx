import { useDispatch, useSelector } from "react-redux";
import { decrement, incraseBy5, increment, reset } from "./counterSlice";

function CounterView() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h3 className="text-2xl">count : {count} </h3>
            <div className="flex gap-3">
                <button className="btn bg-green-400" onClick={() => dispatch(increment())}>increment</button>
                <button className="btn bg-red-500" onClick={() => dispatch(decrement())}>decrement</button>
                <button className="btn bg-yellow-500" onClick={() => dispatch(reset())}>reset</button>
                <button className="btn bg-yellow-500" onClick={() => dispatch(incraseBy5(5))}>incraseBy5</button>
            </div>
        </div>
    );
}

export default CounterView;
