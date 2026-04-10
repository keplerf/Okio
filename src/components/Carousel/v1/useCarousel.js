import { useReducer } from 'react'

const SET_SELECTED = 'SET_SELECTED'

function reducer(state, action) {
  const { type, payload } = action
  switch (type) {
    case SET_SELECTED:
      return {
        activeIndex: payload.newIndex,
        priorActiveIndex: payload.priorActiveIndex
      }
    default:
      return state
  }
}

function useCarousel({ items, activeIndex = 0, shouldLoop }) {
  const [state, dispatch] = useReducer(reducer, { activeIndex, priorActiveIndex: null })

  const setSelected = (newSelected) => {
    // set to given index
    if (typeof newSelected === 'number') {
      dispatch({
        type: SET_SELECTED,
        payload: {
          newIndex: newSelected,
          priorActiveIndex: state.activeIndex
        }
      })
      return
    }

    let newActiveIndex = null
    if (newSelected === 'next') {
      const nextIndex = state.activeIndex + 1
      if (nextIndex + 1 > items.length) {
        if (!shouldLoop) {
          newActiveIndex = items.length - 1
        } else {
          newActiveIndex = 0
        }
      } else {
        newActiveIndex = nextIndex
      }
    }
    if (newSelected === 'prev') {
      const nextIndex = state.activeIndex - 1
      if (nextIndex < 0) {
        if (!shouldLoop) {
          newActiveIndex = 0
        } else {
          newActiveIndex = items.length - 1
        }
      } else {
        newActiveIndex = nextIndex
      }
    }
    dispatch({
      type: SET_SELECTED,
      payload: {
        newIndex: newActiveIndex,
        priorActiveIndex: state.activeIndex
      }
    })
  }

  return {
    setSelected,
    ...state
  }
}

export default useCarousel
