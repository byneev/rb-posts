import { useMemo } from 'react'

export const useSort = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort === 'asc') {
      return posts.slice().sort((a, b) => a.id - b.id)
    } else if (sort === 'desc') {
      return posts.sort((a, b) => b.id - a.id)
    }
    return posts
  }, [posts, sort])

  return sortedPosts
}