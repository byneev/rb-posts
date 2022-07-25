import { useMemo } from 'react'

export const usePagination = (totalCount, limit) => {
  const calculatedPages = useMemo(() => {
    const pagesCount = Math.ceil(totalCount / limit)
    const pages = []
    for (let index = 1; index < pagesCount + 1; index++) {
      pages.push(index)
    }
    return pages
  }, [totalCount, limit])

  return calculatedPages
}