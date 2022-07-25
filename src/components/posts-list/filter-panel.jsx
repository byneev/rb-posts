import cl from './filter-panel.module.css'

export default function FilterPanel({ changeSort, changeQuery, query }) {
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
      <fieldset>
        <label>
          <input onChange={changeQuery} value={query} type='text' name='search' placeholder='поиск...' />
        </label>
      </fieldset>
    </form>
  )
}