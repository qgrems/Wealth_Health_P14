import { useState, useEffect } from 'react'
import { states } from '../../data/state.js'

export function useStateHook() {

    const [state, setState] = useState([])
    useEffect(() => {
        setState(states)
    }, [state])
    return state
}