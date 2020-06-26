import React, {createRef} from 'react'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
    idx: PropTypes.number,
    text: PropTypes.string,
    check: PropTypes.bool,
}

export default function TodoItem({idx, text, check, todos, setTodos, counter, setCounter}) {

    const todo_item_ref = createRef()

    const checkItemData = (e) => {
        e.preventDefault()
        console.log(todo_item_ref.current.attributes.index)
        console.log(e.target.attributes.index)
        //const this_item_index = parseInt(item_ref.current.attributes.index.value)
        //const item_found = 'aa'
    }

    return(
        <div ref={todo_item_ref} className='todo-item' key={idx} onClick={checkItemData} index={idx}>
            <div className='check'>&#x2714;</div>
            <div className='todo-item-text'>{text}</div>
            <div className='delete'>&#x2718;</div>
        </div>
    )
}