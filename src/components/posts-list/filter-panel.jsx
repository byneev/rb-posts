import ActionButton from '../../global/action-buttons'
import cl from './filter-panel.module.css'
import gl from '../../global/button.module.css'
import { memo } from 'react';

function FilterPanel({ changeSort, changeQuery, query, showModal }) {
  console.log('Filter panel rerender');
  return (
    <form action='#' className={cl.filter__wrapper}>
      <fieldset>
        <label style={{ marginRight: 10 }}>
          По-возрастанию
          <input onClick={changeSort} type='radio' name='sort' value='asc' />
        </label>
        <label>
          По-убыванию
          <input onClick={changeSort} type='radio' name='sort' value='desc' />
        </label>
      </fieldset>
      <ActionButton onClick={showModal} css={gl.button}>
        Добавить пост
      </ActionButton>
      <fieldset>
        <label>
          <input onChange={changeQuery} value={query} type='text' name='search' placeholder='поиск...' />
        </label>
      </fieldset>
    </form>
  )
}

export default memo(FilterPanel)