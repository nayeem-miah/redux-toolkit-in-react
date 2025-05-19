import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingPosts } from './postsSlice';

const PostView = () => {
    const { isLoading, posts, isError } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchingPosts());
    }, [dispatch]);

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4 text-center">All Posts</h2>

            {isLoading && <p className="text-center text-blue-500">Loading...</p>}
            {isError && <p className="text-center text-red-500">Error: {isError}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {posts && posts.map(post => (
                    <div key={post.id} className="border  rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600">{post.title}</h3>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostView;
