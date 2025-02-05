import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts") //the fetch() method is used to make a request to the specified URL. The fetch() method returns a Promise. So, the return fetch("https://dummyjson.com/posts") returns the Promise returned by the fetch() call.
    .then((res) => res.json())
    .then((data) => {
      return data.posts; //the first return sends back the fetch Promise, and the second return sends back the posts once the fetch is completed and the data is parsed.
    });
};

export default PostList;
