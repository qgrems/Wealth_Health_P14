import { useState, useEffect } from 'react'
import { data } from '../../data/inscriptionData'

export function useInscriptionHook() {

    const [datas, setdata] = useState([])
    useEffect(() => {
        setdata(data)
    }, [datas])
    return datas
}