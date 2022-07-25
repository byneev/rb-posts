import Post from './post'
import cl from './posts-list.module.css'

export default function PostList({ posts, removePost }) {
  return <div className={cl.posts_list}>
    {posts.map((post) => <Post removePost={() => removePost(post.id)} key={post.id} post={post} />)}
  </div>
}