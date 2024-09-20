import Link from "next/link";

async function getPostData(id) {
  console.log("posts/[id]/page.jsx", id);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch post #${id}`);
  }
  return res.json();
}

export default async function Post({ params }) {
  const post = await getPostData(params.id);

  return (
    <>
      <div className="Post">
        {post ? (
          <>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </>
        ) : (
          "Loading..."
        )}
      </div>
      <Link href="/posts">All Posts</Link>
      <Link href={`/posts/${Number(params.id) - 1}`}>Previous Post</Link>
      <Link href={`/posts/${Number(params.id) + 1}`}>Next Post</Link>
      {/* // ++ Try adding Next Post and Previous Post links */}
      
    </>
  );
}
