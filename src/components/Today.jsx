import React from 'react'

export default function Today() {
    const date = new Date()
    const today = date.getDate()
    const month = date.getMonth()
    const now = `${month + 1}월 ${today}일 할 일 목록`

    return(
        <>
        <h1 className='today'>{now}</h1>
        </>
    )
}