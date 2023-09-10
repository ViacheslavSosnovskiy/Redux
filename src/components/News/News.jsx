import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopNews } from 'services/api'
import { getNewsSearchThunk } from 'store/news/thunk'

const News = ({searchText}) => {
    const dispatch = useDispatch()
    const {news, status, error} = useSelector(state => state.news)
    
    useEffect(() => {
        dispatch(getTopNews())
    }, [dispatch])

    useEffect(() => {
        dispatch(getNewsSearchThunk(searchText))
    }, [dispatch, searchText])

  return (
    <div>News</div>
  )
}

export default News