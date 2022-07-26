import { useState } from 'react'

function ModalPosts({ addNewPost }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const formSubmitHandle = (evt) => {
    evt.preventDefault()
    addNewPost({
      userId: 1,
      id: 999,
      title,
      body
    })
  }

  return (
    <form action="" onClick={formSubmitHandle}>
      <div>
        <label htmlFor="modal-post-title">Заголовок</label>
        <input type="text" id="modal-post-title" value={title} onChange={(evt) => setTitle(evt.target.value)} />
      </div>
      <div>
        <label htmlFor="modal-post-body">Сообщение</label>
        <input type="text" id='modal-post-body' value={body} onChange={(evt) => setBody(evt.target.value)} />
      </div>
      <button type='submit'>Отправить</button>
    </form>
  )
}

export default ModalPosts