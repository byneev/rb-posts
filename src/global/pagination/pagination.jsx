import ActionButton from '../action-buttons'
import cl from './pagination.module.css'
import gl from '../button.module.css'

export const Pagination = ({ currentPage, pages, changePage }) => {
  return (
    <div className={cl.pagination_wrapper}>
      {pages.map((page) => <ActionButton key={page} onClick={() => changePage(page)} css={page === currentPage ? [gl.button, gl.button__active].join(' ') : gl.button} >{page}</ActionButton>)}
    </div>
  )
}