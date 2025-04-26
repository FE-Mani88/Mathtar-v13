import React from 'react'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';
import { GetCookies } from '@/utils/others';
import { verifyToken } from '@/utils/auth';
import Dashboard from '@/components/templates/Dashboard/Dashboard';
import userModel from '../../../models/User';

export default async function page() {
    const token = await GetCookies()

    if (!token) {
        redirect('/login')
    }

    const tokenPayload = verifyToken(token)

    if (!tokenPayload) {
        redirect('/login')
    }

    const mainUser = await userModel.findOne({ phoneNumber: tokenPayload?.phoneNumber })

    const parsedMainUser = JSON.parse(JSON.stringify(mainUser))

    return (
        <>
            <Dashboard {...parsedMainUser} />
        </>
    )
}
