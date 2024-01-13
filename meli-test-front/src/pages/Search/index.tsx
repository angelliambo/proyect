import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { AppDispatch } from "../../store"
import { getAll } from '../../store/slices/items'

const Component = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getAll({ query: 'silla' }))
  }, [])
  return <>Search</>
}

export default Component