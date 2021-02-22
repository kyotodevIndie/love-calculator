import React from 'react'
import heart from '../assets/heart.svg'

export default function Header() {
    return (
        <h1><img src={heart} alt='heart' className="logo"/>Love Calculator</h1>
    )
}
