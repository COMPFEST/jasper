import { useState, useEffect } from 'react'

const useGetWindowWidth = () => {
  const [width, setWidth] = useState(((typeof window !== "undefined") ? window.innerWidth : 0))

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return width
}

export default useGetWindowWidth
