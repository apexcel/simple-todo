import React, { useState, useEffect } from 'react'
import TodoListContainer from './components/TodoListContainer.jsx'
import MyUtils from './components/MyUtils'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'

import './styles/App.scss'

function App() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log(`todos:`, todos)
        const getLocalStorage = () => {
            const local_data = JSON.parse(localStorage.getItem('storage'))

            if (!MyUtils.isEmpty(local_data)) {
                if(!MyUtils.isEmpty(newTodo)) {
                    setTodos([...local_data, newTodo])
                    saveLocalStorage()
                }
                else if (MyUtils.isEmpty(todos)) {
                    setTodos(local_data)
                    saveLocalStorage()
                }
            } 
        }
        getLocalStorage()
    }, [counter])

    useEffect(() => {
        saveLocalStorage()
    })

    const saveLocalStorage = () => {
        localStorage.setItem('storage', JSON.stringify(todos))
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setNewTodo(e.target.value)
    }

    const onKeyPressHandler = (e) => {
        if (e.key === 'Enter') {
            addTodo(e)
        }
    }

    const addTodo = (e) => {
        e.preventDefault()
        if (!MyUtils.isEmpty(newTodo)) {
            setCounter(counter + 1)
            setTodos([...todos, {index: counter, text: newTodo, check: false}])
            setNewTodo()
            e.target.value = ''
        }
    }

    const removeAll = (e) => {
        e.preventDefault()
        localStorage.clear()
        setTodos([])
        setCounter(0)
    }

    const todo_item_list = todos.map((todo_item, index) => 
        <TodoItem 
            key={index}
            index={index}
            text={todo_item.text}
            check={todo_item.check}
            todos={todos}
            setTodos={setTodos}
            counter={counter}
            setCounter={setCounter}
        />
        )

    return(
        <div className='app'>
            <TodoListContainer form={
                <TodoForm 
                    todos={todos}
                    addTodo={addTodo}
                    onKeyPressHandler={onKeyPressHandler}
                    onChangeHandler={onChangeHandler}
                    removeAll={removeAll}
                />
            }>
            {todo_item_list}
            </TodoListContainer>
        </div>
    )
}

export default App;