import { useState, useCallback } from 'react'

type Reducer<S, A> = (prevState: S, action: A) => S

export function useReducer<S, A>(
  reducer: Reducer<S, A>,
  initialState: S
): [S, (action: A) => void] {
  const [state, setState] = useState<S>(initialState)

  const dispatch = useCallback(
    (action: A) => {
      setState(prevState => reducer(prevState, action))
    },
    [reducer]
  )

  return [state, dispatch]
}

export default useReducer