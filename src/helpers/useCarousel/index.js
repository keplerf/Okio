import { useReducer } from 'react'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const SELECT = 'SELECT'

const init = {
  current: 0,
  previous: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        previous: state.current,
        current: action.payload ?? (state.current += 1)
      }
    case DECREMENT:
      return {
        ...state,
        previous: state.current,
        current: action.payload ?? (state.current -= 1)
      }
    case SELECT:
      return {
        ...state,
        current: action.payload,
        previous: state.current
      }
    case RESET:
      return {
        ...state,
        previous: null,
        current: init.current
      }
    default:
      return state
  }
}

export const useCarousel = () => {
  const [state, dispatch] = useReducer(reducer, init)

  const increment = (index = null) =>
    dispatch({ type: INCREMENT, payload: index })
  const decrement = (index = null) =>
    dispatch({ type: DECREMENT, payload: index })
  const reset = () => dispatch({ type: RESET })
  const select = ({ index, previous }) =>
    dispatch({ type: SELECT, payload: index, previous })

  return {
    increment,
    decrement,
    reset,
    select,
    ...state
  }
}
