import { useMemo } from 'react'

export const useSearch = (posts, query) => {
  const searchedPosts = useMemo(() => {
    if (query === '') {
      return posts
    }
    return posts.filter((post) => post.title.indexOf(query) !== -1)
  }, [posts, query])
  return searchedPosts
}