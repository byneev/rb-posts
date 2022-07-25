import { useState } from 'react'

export const useFetching = (cb) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetch = async () => {
    try {
      setIsLoading(true)
      await cb()
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetch, isLoading, error]

}