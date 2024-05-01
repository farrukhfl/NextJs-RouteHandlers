import POST from "../Components/Post";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
}
const Posts = async () => {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => {
        return (
          <POST
            id={post.id}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </>
  );
};

export default Posts;
