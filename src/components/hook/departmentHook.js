import { useState, useEffect } from 'react'
import { data } from '../../data/department'

export function useDepartmentHook() {

    const [department, setdepartment] = useState([])
    useEffect(() => {
        setdepartment(data)
    }, [department])
    return department
}