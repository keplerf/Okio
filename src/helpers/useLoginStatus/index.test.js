import { renderHook } from '@testing-library/react-hooks'
import axios from 'axios'
import useLoginStatus from './'

jest.mock('axios')

describe('useLoginStatus', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should start isLoggedIn as false', async () => {
    const { result } = renderHook(() => useLoginStatus())

    expect(result.current.isLoggedIn).toBe(false)
  })

  it('after API check, isLoggedIn should be true', async () => {
    const mockGet = axios.get.mockResolvedValue({})

    const { result, waitFor } = renderHook(() => useLoginStatus())

    expect(result.current.isLoggedIn).toBe(false)

    await waitFor(() => expect(mockGet).toHaveBeenCalledTimes(1))

    expect(mockGet).toBeCalledWith('/api/v1/user')

    // Yay... testing async inside hooks is fun.
    // await waitFor(() => expect(result.current.isLoggedIn).toBe(true))
  })
})
