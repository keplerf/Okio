import { useEffect, useState } from 'react'
import axios from 'axios'

const API_ENDPOINT = '/api/v1/user'

const useLoginStatus = () => {
  // TODO: this'll have to have all the fields returned from a successful response.
  // Ex. this could also be used to provide Intercom widget appropriate user data
  const [state, setState] = useState({
    isLoggedIn: false,
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    initials: null
  })

  useEffect(() => {
    // NOTE: Down the road we should use Suspence
    const fetchLoginStatus = async () => {
      try {
        const response = await axios.get(API_ENDPOINT)

        // Testing if this has appropriate properties available up front, even with a 200 status
        if (response.status === 200 && !!response.data) {
          // Ex.
          // {
          //   "id": 1,
          //   "created_at": "2021-06-30T17:47:55Z",
          //   "email": "account@email",
          //   "firstName": "First",
          //   "lastName": "Last"
          // }
          const data = response.data
          const firstName = data.firstName || ''
          const lastName = data.lastName || ''
          const initials =
            firstName &&
            typeof firstName === 'string' &&
            firstName.slice(0, 1).toUpperCase()

          // tester
          // setState((prev) => ({
          //   ...prev,
          //   isLoggedIn: true,
          //   id: '1',
          //   firstName: 'Roderick',
          //   lastName: 'Fung',
          //   email: '123@gmail.com',
          //   initials: 'R'
          // }))

          setState((previousState) => ({
            ...previousState,
            isLoggedIn: !!data.id,
            id: data.id,
            firstName,
            lastName,
            email: data.email,
            initials
          }))
        }
      } catch (e) {
        // Currently do nothing, as this was probably resulted in a non-200 response
        console.log('Error', e)
      }
    }

    fetchLoginStatus()
  }, [])

  return { ...state }
}

export default useLoginStatus
