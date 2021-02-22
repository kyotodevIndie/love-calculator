import React from 'react'
import load from '../assets/loading.gif'

export default function Loading() {
    return (
        <img src={load} alt="loading..." className='loading' />
    )
}
