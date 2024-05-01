import POST from "@/app/Components/Post";

async function getPosts(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const data = await res.json();
    return data.data;
  }

async function postPage({params}) {
const post = await getPosts(params.id)
  return (
    <POST id={post.id}
    key={post.id}
    title={post.title}
    body={post.body} />
  )
}

export default postPage
