import CounterView from "./features/counter/CounterView";
import PostView from "./features/posts/PostsView";

function App() {
    return (
        <div className="mx-auto flex justify-center items-center">
            <div>
                hello react redux
                <CounterView />
                <PostView />
            </div>
        </div>
    );
}

export default App;