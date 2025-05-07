import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count => count + 1)
    }
    const handleDecrement = () => {
        setCount(count => count - 1)
    }
    const handleReset = () => {
        setCount(0)
    }
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