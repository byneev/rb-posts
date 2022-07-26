import { useCallback, useEffect, useState } from 'react';
import FilterPanel from './components/posts-list/filter-panel.jsx';
import Modal from './global/modal/modal.jsx';
import PostList from './components/posts-list/post-list.jsx';
import './global/global.css'
import Loader from './global/loader/loader.jsx';
import Pagination from './global/pagination/pagination.jsx';
import { useFetching } from './hooks/use-fetching.js';
import { usePagination } from './hooks/use-pagination.js';
import { useSearch } from './hooks/use-search.js';
import { useSort } from './hooks/use-sort.js';
import APIService from './services/api.js';
import ModalPosts from './components/posts-list/modal-posts.jsx';

function App() {
  const [posts, setPosts] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [sort, setSort] = useState('none')
  const [query, setQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const pages = usePagination(totalCount, limit)

  const fetchPosts = async () => {
    const postsFromAPI = await APIService.getPosts(limit, page)
    setPosts(postsFromAPI.data)
    setTotalCount(postsFromAPI.headers['x-total-count'])
  }

  const [fetch, isLoading, error] = useFetching(fetchPosts)

  useEffect(() => {
    fetch()
  }, [page])

  const removePost = useCallback((id) => {
    setPosts(posts.filter((post) => id !== post.id))
  }, [posts])

  const changePage = useCallback((pageNumber) => {
    setPage(pageNumber)
  }, [])

  const changeSort = useCallback((evt) => {
    const value = evt.target.value
    setSort(value)
  }, [])

  const changeQuery = useCallback((evt) => {
    setQuery(evt.target.value)
  }, [])

  const addNewPost = useCallback((newPost) => {
    setPosts([...posts, newPost])
  })

  const sortedPosts = useSort(posts, sort)
  const searchedPosts = useSearch(sortedPosts, query)

  if (error !== '') {
    return (
      <div>{error}</div>
    )
  }

  return (
    isLoading ?
      <Loader /> :
      <>
        <FilterPanel query={query} changeSort={changeSort} changeQuery={changeQuery} showModal={() => setIsModalOpen(true)} />
        <PostList removePost={removePost} posts={searchedPosts} />
        <Pagination currentPage={page} pages={pages} changePage={changePage} />
        <Modal isVisible={isModalOpen} setIsVisible={setIsModalOpen} >
          <ModalPosts addNewPost={addNewPost} />
        </Modal>
      </>
  );
}

export default App;
