import React from 'react'
import Today from './Today.jsx'
import PropTypes from 'prop-types'

import '../styles/TodoListContainer.scss'

TodoListContainer.propTypes ={
    form: PropTypes.object,
    children: PropTypes.any
}

export default function TodoListContainer({form, children}) {
    return(
        <main className='todo-list-container'>
            <div className='todos-container'>
                <Today/>
                <section className='todo-form-container'>
                    {form}
                </section>
                <section className='todo-items-container'>
                    {children}
                </section>
            </div>
        </main>
    )
}