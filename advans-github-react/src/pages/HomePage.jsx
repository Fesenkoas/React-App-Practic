import React from 'react'
import {useSearchUserQuery} from '../store/github/github.api'

const HomePage = () => {
  const {isLoading, isError, data} = useSearchUserQuery('vladilen');
  return (
    <div>HomePage</div>
  )
}

export default HomePage