import { useState, useEffect} from 'react'

const useFetchData = (url) => {

  const [data, setData] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result)
        setLoaded(true)
      })

  }, [url])


  return [data, isLoaded]
}

export default useFetchData