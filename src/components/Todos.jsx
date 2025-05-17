import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from './../services/actions/todoActions';

function Todos() {
    const { isLoading, todos, isError } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodos)
    }, [])
    console.log(todos);
    return (

        <div>
            <h1 className="text-3xl text-green-600 text-center">todos App</h1>
            {
                isLoading && <p className="text-yellow-700 text-center">loading .............</p>
            }
            {
                todos && <div className=" gap-8 grid-cols-4 grid md:grid-cols-3">
                    {todos?.map(todo => (
                        <div className="border-amber-100 bg-gray-500 text-black p-4" key={todo.id}>
                            <h3>{todo?.title}</h3>
                            <p>{todo?.completed}</p>
                        </div>
                    ))}
                </div>
            }
            {
                isError && <p className="text-red-500 text-center">
                    somethings is wrongs !! {isError.message}
                </p>
            }
        </div>
    );
};

export default Todos;