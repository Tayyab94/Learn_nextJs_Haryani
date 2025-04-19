"use client";

import Link from 'next/link';
import React from 'react'
const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-extrabold text-red-600 tracking-widest">500</h1>
                <p className="text-xl mt-4 text-gray-800 font-semibold">Something went wrong</p>
                <p className="mt-2 text-gray-600">An unexpected error occurred. Please try again or contact support.</p>

                <div className="mt-6 flex justify-center gap-4">
                    <button

                        className="rounded bg-blue-600 px-6 py-2 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="rounded border border-gray-400 px-6 py-2 text-gray-700 font-medium hover:bg-gray-200 transition"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage