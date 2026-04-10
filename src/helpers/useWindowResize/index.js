import { useEffect } from 'react'

const useWindowResize = (handler, dependencies, callHandlerOnMount) => {
  useEffect(() => {
    if (callHandlerOnMount) handler()
    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, dependencies)
}

export default useWindowResize
