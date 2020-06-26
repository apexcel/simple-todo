import React from 'react'
import PropTypes from 'prop-types'

TodoForm.propTypes = {
    addTodo: PropTypes.func,
    onKeyPressHandler: PropTypes.func,
    onChangeHandler: PropTypes.func,
    removeAll: PropTypes.func,
    input_ref: PropTypes.any
}

export default function TodoForm({addTodo, input_ref, onKeyPressHandler, onChangeHandler, removeAll}) {

    return(
        <div className='todo-form'>
            <input ref={input_ref} className='input' type='text' onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
            <button onClick={addTodo}>
                add
            </button>
            <button onClick={removeAll}>
                del all
            </button>
        </div>
    )

}