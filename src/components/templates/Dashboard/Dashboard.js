import React from 'react'
import Navbar from '@/components/modules/Navbar/Navbar'

export default function Dashboard({ username }) {
    return (
        <div>
            <Navbar isUserRegistered={true} />
            name: {username}
        </div>
    )
}
