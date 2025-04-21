'use client'
import React from 'react'

export default function StartQuizButton() {

    // const [isQuizStarted, setIsQuizStarted] = null

    return (
        <>
            <button
                // onClick={() => setIsQuizStarted(true)}
                className="w-full !bg-blue-600 !text-white !py-3 !px-6 rounded-lg font-medium hover:!bg-blue-700 transition-colors"
            >
                شروع آزمون
            </button>
        </>
    )
}
