import React, {createRef} from 'react'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
    index: PropTypes.number,
    text: PropTypes.string,
    check: PropTypes.bool,
}

export default function TodoItem({index, text, check}) {

    const item_ref = createRef()

    const checkItemData = (e) => {
        e.preventDefault()
        console.log(item_ref.current)
    }

    return(
        <div ref={item_ref} className='todo-item' key={index} onClick={checkItemData}>
            <div className='check'>&#x2714;</div>
            <div className='todo-item-text'>{text}</div>
            <div className='delete'>&#x2718;</div>
        </div>
    )
}