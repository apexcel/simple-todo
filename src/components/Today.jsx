import React from 'react'

export default function Today() {

    const date = new Date()
    const now = `${date.getMonth() + 1}월 ${date.getDate()}일`

    return(
        <><h1 className='today'>{now}</h1></>
    )
}