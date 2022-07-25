import ActionButton from '../../global/action-buttons'
import cl from './post.module.css'
import gl from '../../global/button.module.css'

export default function Post({ post, removePost }) {
  return (
    <div className={cl.post}>
      <div>
        <h3 className='post-header'>{post.id}. {post.title}</h3>
        <p className='post-body'>{post.body}</p>
      </div>
      <ActionButton onClick={removePost} css={gl.button} >Удалить</ActionButton>
    </div>
  )
}