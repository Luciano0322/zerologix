import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { retrievePosts } from "../action/Home"

const useHomePosts = (url) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    setError(false)
    dispatch(retrievePosts(url))
  }, [dispatch,url])
  return {loading, error}
}

