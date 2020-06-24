import React, { useState, useEffect } from 'react'
import MyUtils from './MyUtils'
import TodoItem from './TodoItem.jsx'

import '../styles/notice.scss'

export default function Notice() {
    const [localData, setLocaldata] = useState([])
    const [newLocalData, setNewLocalData] = useState()
    const [localCounter, setLocalCounter] = useState(0)

    useEffect(() => {
        const getLocalStorage = () => {
            const storage = JSON.parse(localStorage.getItem('storage'))

            if (!MyUtils.isEmpty(storage)) {
                if (!MyUtils.isEmpty(newLocalData)) {
                    setLocaldata([...storage.data, newLocalData])
                    saveLocalStorage()
                    setNewLocalData()
                }
                else {
                    setLocaldata(storage.data)
                }
            }
        }
        getLocalStorage()
    }, [localCounter])

    const saveLocalStorage = () => {
        localStorage.setItem('storage', JSON.stringify({
            data: localData
        }))
    }

    const addLocalStorage = (e) => {
        e.preventDefault()
        setLocalCounter(localCounter + 1)
        setLocaldata([...localData, newLocalData])
        saveLocalStorage()
        e.target.value = ''
    }

    const clearLocalStorage = (e) => {
        e.preventDefault()
        localStorage.clear()
        setLocaldata([])
        setLocalCounter(0)
    }

    const deleteItem = (e) => {

    }

    const onKeyHandler = (e) => {
        if (e.key === 'Enter') {
            addLocalStorage(e)
        }
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setNewLocalData(e.target.value)
    }

    const todo_items = localData.map((val, idx) => 
        <TodoItem value={val} key={idx} />
        )

    return(
        <div className='notice'>
            <h1>TODOs</h1>
            <input type='text' onChange={onChangeHandler} onKeyPress={onKeyHandler} />
            <button onClick={addLocalStorage}>Add</button>
            <button onClick={clearLocalStorage}>Del All</button>
            <div className='local-data-wrapper'>
                {todo_items}
            </div>
        </div>
    )
}